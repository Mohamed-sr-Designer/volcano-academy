"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  User,
  Music,
  CalendarClock,
  ClipboardCheck,
  Monitor,
  Building2,
  Loader2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { instrumentOptions, instructors } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldShell } from "@/components/forms/field-shell";
import { SubmitSuccess } from "@/components/forms/submit-success";

const LEVELS = ["Complete beginner", "Some experience", "Intermediate", "Advanced"];
const TIMES = ["Morning · 10–13", "Afternoon · 13–17", "Evening · 17–21", "Flexible"];
const DAYS = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

const schema = z.object({
  studentName: z.string().min(2, "Please enter the student's name"),
  parentName: z.string().optional(),
  age: z
    .string()
    .min(1, "Required")
    .refine((v) => {
      const n = Number(v);
      return Number.isFinite(n) && n >= 3 && n <= 99;
    }, "Enter an age between 3 and 99"),
  email: z.string().min(1, "Required").email("Enter a valid email"),
  phone: z.string().min(6, "Enter a valid phone number"),
  whatsapp: z.string().min(6, "Enter a valid WhatsApp number"),
  instrument: z.string().min(1, "Choose an instrument"),
  instructor: z.string().min(1, "Choose an option"),
  level: z.string().min(1, "Select your level"),
  format: z.enum(["In-studio", "Online"], {
    errorMap: () => ({ message: "Choose a format" }),
  }),
  days: z.array(z.string()).min(1, "Pick at least one day"),
  time: z.string().min(1, "Choose a preferred time"),
  notes: z.string().optional(),
});

type BookingValues = z.infer<typeof schema>;

const STEPS = [
  { id: "About you", icon: User, fields: ["studentName", "parentName", "age", "email", "phone", "whatsapp"] },
  { id: "Your lessons", icon: Music, fields: ["instrument", "instructor", "level", "format"] },
  { id: "Schedule", icon: CalendarClock, fields: ["days", "time", "notes"] },
  { id: "Review", icon: ClipboardCheck, fields: [] },
] as const;

export function BookingForm() {
  const params = useSearchParams();
  const [step, setStep] = React.useState(0);
  const [dir, setDir] = React.useState(1);
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const form = useForm<BookingValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: {
      studentName: "",
      parentName: "",
      age: "",
      email: "",
      phone: "",
      whatsapp: "",
      instrument: params.get("instrument") ?? "",
      instructor: params.get("instructor") ?? "No preference",
      level: "",
      format: undefined as unknown as "In-studio",
      days: [],
      time: "",
      notes: "",
    },
  });

  const {
    register,
    control,
    trigger,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = form;

  const goNext = async () => {
    const fields = [...STEPS[step].fields] as (keyof BookingValues)[];
    const valid = await trigger(fields, { shouldFocus: true });
    if (!valid) return;
    setDir(1);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const goBack = () => {
    setDir(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const onSubmit = async (values: BookingValues) => {
    setSubmitting(true);
    // Simulate a network request — swap for a real endpoint when ready.
    await new Promise((r) => setTimeout(r, 1400));
    // eslint-disable-next-line no-console
    console.log("Booking submitted:", values);
    setSubmitting(false);
    setDone(true);
  };

  const days = watch("days");
  const toggleDay = (d: string) => {
    const set = new Set(days);
    set.has(d) ? set.delete(d) : set.add(d);
    setValue("days", Array.from(set), { shouldValidate: true });
  };

  if (done) {
    const v = getValues();
    return (
      <SubmitSuccess
        title="Your lesson request is in!"
        message="Thank you — our team will reach out on WhatsApp within 24 hours to confirm your first lesson. Get ready to play."
        summary={[
          { label: "Student", value: v.studentName },
          { label: "Instrument", value: v.instrument },
          { label: "Instructor", value: v.instructor },
          { label: "Format", value: v.format },
        ]}
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft">
      {/* Stepper */}
      <div className="border-b border-border bg-secondary/40 px-6 py-6 sm:px-10">
        <div className="flex items-center justify-between">
          {STEPS.map((s, i) => {
            const { icon: Icon } = s;
            const state = i < step ? "done" : i === step ? "active" : "todo";
            return (
              <React.Fragment key={s.id}>
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-300",
                      state === "active" && "border-primary bg-primary text-primary-foreground shadow-soft",
                      state === "done" && "border-primary bg-primary/10 text-primary",
                      state === "todo" && "border-border text-muted-foreground"
                    )}
                  >
                    {state === "done" ? <Check className="h-4 w-4" strokeWidth={3} /> : <Icon className="h-4 w-4" />}
                  </span>
                  <span
                    className={cn(
                      "hidden text-sm font-medium sm:block",
                      state === "todo" ? "text-muted-foreground" : "text-foreground"
                    )}
                  >
                    {s.id}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="mx-2 h-px flex-1 bg-border sm:mx-4">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: i < step ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-8 sm:px-10 sm:py-10">
        <div className="relative min-h-[24rem]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={step}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {step === 0 && (
                <div className="grid gap-5 sm:grid-cols-2">
                  <FieldShell label="Student name" htmlFor="studentName" required error={errors.studentName?.message}>
                    <Input id="studentName" placeholder="e.g. Salma Ibrahim" aria-invalid={!!errors.studentName} {...register("studentName")} />
                  </FieldShell>
                  <FieldShell label="Parent name" htmlFor="parentName" optional error={errors.parentName?.message}>
                    <Input id="parentName" placeholder="For students under 18" {...register("parentName")} />
                  </FieldShell>
                  <FieldShell label="Age" htmlFor="age" required error={errors.age?.message}>
                    <Input id="age" type="number" inputMode="numeric" min={3} max={99} placeholder="e.g. 12" aria-invalid={!!errors.age} {...register("age")} />
                  </FieldShell>
                  <FieldShell label="Email address" htmlFor="email" required error={errors.email?.message}>
                    <Input id="email" type="email" placeholder="you@email.com" aria-invalid={!!errors.email} {...register("email")} />
                  </FieldShell>
                  <FieldShell label="Phone number" htmlFor="phone" required error={errors.phone?.message}>
                    <Input id="phone" type="tel" placeholder="+20 100 000 0000" aria-invalid={!!errors.phone} {...register("phone")} />
                  </FieldShell>
                  <FieldShell label="WhatsApp number" htmlFor="whatsapp" required error={errors.whatsapp?.message}>
                    <Input id="whatsapp" type="tel" placeholder="+20 100 000 0000" aria-invalid={!!errors.whatsapp} {...register("whatsapp")} />
                  </FieldShell>
                </div>
              )}

              {step === 1 && (
                <div className="grid gap-5 sm:grid-cols-2">
                  <FieldShell label="Instrument" required error={errors.instrument?.message}>
                    <Controller
                      control={control}
                      name="instrument"
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger aria-invalid={!!errors.instrument}>
                            <SelectValue placeholder="Choose an instrument" />
                          </SelectTrigger>
                          <SelectContent>
                            {instrumentOptions.map((o) => (
                              <SelectItem key={o} value={o}>{o}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FieldShell>

                  <FieldShell label="Preferred instructor" required error={errors.instructor?.message}>
                    <Controller
                      control={control}
                      name="instructor"
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger aria-invalid={!!errors.instructor}>
                            <SelectValue placeholder="Any instructor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="No preference">No preference</SelectItem>
                            {instructors.map((o) => (
                              <SelectItem key={o.slug} value={o.name}>{o.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FieldShell>

                  <FieldShell label="Experience level" required error={errors.level?.message}>
                    <Controller
                      control={control}
                      name="level"
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger aria-invalid={!!errors.level}>
                            <SelectValue placeholder="Select your level" />
                          </SelectTrigger>
                          <SelectContent>
                            {LEVELS.map((o) => (
                              <SelectItem key={o} value={o}>{o}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FieldShell>

                  <FieldShell label="Lesson format" required error={errors.format?.message}>
                    <Controller
                      control={control}
                      name="format"
                      render={({ field }) => (
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { v: "In-studio", icon: Building2 },
                            { v: "Online", icon: Monitor },
                          ].map(({ v, icon: Icon }) => (
                            <button
                              type="button"
                              key={v}
                              onClick={() => field.onChange(v)}
                              className={cn(
                                "flex h-12 items-center justify-center gap-2 rounded-xl border text-sm font-medium transition-all",
                                field.value === v
                                  ? "border-primary bg-primary text-primary-foreground shadow-soft"
                                  : "border-input bg-background/60 text-foreground hover:border-primary/40"
                              )}
                            >
                              <Icon className="h-4 w-4" />
                              {v}
                            </button>
                          ))}
                        </div>
                      )}
                    />
                  </FieldShell>
                </div>
              )}

              {step === 2 && (
                <div className="grid gap-6">
                  <FieldShell label="Preferred days" required error={errors.days?.message as string} hint="Select all that work">
                    <div className="flex flex-wrap gap-2">
                      {DAYS.map((d) => {
                        const on = days.includes(d);
                        return (
                          <button
                            type="button"
                            key={d}
                            onClick={() => toggleDay(d)}
                            className={cn(
                              "h-11 w-14 rounded-xl border text-sm font-medium transition-all",
                              on
                                ? "border-primary bg-primary text-primary-foreground shadow-soft"
                                : "border-input bg-background/60 hover:border-primary/40"
                            )}
                          >
                            {d}
                          </button>
                        );
                      })}
                    </div>
                  </FieldShell>

                  <FieldShell label="Preferred time" required error={errors.time?.message} className="sm:max-w-md">
                    <Controller
                      control={control}
                      name="time"
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger aria-invalid={!!errors.time}>
                            <SelectValue placeholder="Choose a time of day" />
                          </SelectTrigger>
                          <SelectContent>
                            {TIMES.map((o) => (
                              <SelectItem key={o} value={o}>{o}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FieldShell>

                  <FieldShell label="Notes" optional error={errors.notes?.message}>
                    <Textarea placeholder="Anything we should know? Goals, favourite songs, scheduling notes…" {...register("notes")} />
                  </FieldShell>
                </div>
              )}

              {step === 3 && (
                <ReviewStep values={getValues()} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          <Button type="button" variant="ghost" onClick={goBack} disabled={step === 0} className={cn(step === 0 && "invisible")}>
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          {step < STEPS.length - 1 ? (
            <Button type="button" onClick={goNext}>
              Continue
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" size="lg" disabled={submitting}>
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  Submit Booking
                  <Check className="h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

function ReviewStep({ values }: { values: BookingValues }) {
  const rows: { label: string; value: string }[] = [
    { label: "Student", value: values.studentName || "—" },
    { label: "Parent", value: values.parentName || "—" },
    { label: "Age", value: values.age || "—" },
    { label: "Email", value: values.email || "—" },
    { label: "Phone", value: values.phone || "—" },
    { label: "WhatsApp", value: values.whatsapp || "—" },
    { label: "Instrument", value: values.instrument || "—" },
    { label: "Instructor", value: values.instructor || "—" },
    { label: "Level", value: values.level || "—" },
    { label: "Format", value: values.format || "—" },
    { label: "Days", value: values.days?.join(", ") || "—" },
    { label: "Time", value: values.time || "—" },
  ];
  return (
    <div>
      <h3 className="font-display text-2xl font-semibold tracking-tight">
        Almost there — review your request
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Please double-check the details below before submitting.
      </p>
      <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {rows.map((r) => (
          <div key={r.label} className="bg-card px-5 py-4">
            <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {r.label}
            </dt>
            <dd className="mt-1 font-medium text-foreground">{r.value}</dd>
          </div>
        ))}
      </dl>
      {values.notes && (
        <div className="mt-4 rounded-2xl border border-border bg-card px-5 py-4">
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Notes</p>
          <p className="mt-1 text-sm text-foreground/80">{values.notes}</p>
        </div>
      )}
    </div>
  );
}
