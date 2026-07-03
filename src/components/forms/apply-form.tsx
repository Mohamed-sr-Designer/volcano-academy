"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, User, Music4, HeartPulse } from "lucide-react";

import { cn } from "@/lib/utils";
import { instrumentOptions } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldShell } from "@/components/forms/field-shell";
import { SubmitSuccess } from "@/components/forms/submit-success";

const GENDERS = ["Female", "Male", "Prefer not to say"];
const EXPERIENCE = ["Complete beginner", "Some self-taught", "1–3 years", "3+ years"];
const SCHEDULE = ["Weekday mornings", "Weekday evenings", "Weekends", "Flexible"];

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  age: z
    .string()
    .min(1, "Required")
    .refine((v) => {
      const n = Number(v);
      return Number.isFinite(n) && n >= 3 && n <= 99;
    }, "Enter an age between 3 and 99"),
  gender: z.string().min(1, "Please select an option"),
  email: z.string().min(1, "Required").email("Enter a valid email"),
  phone: z.string().min(6, "Enter a valid phone number"),
  whatsapp: z.string().min(6, "Enter a valid WhatsApp number"),
  address: z.string().min(4, "Please enter your address"),
  experience: z.string().min(1, "Select your experience"),
  instrument: z.string().min(1, "Choose an instrument"),
  schedule: z.string().min(1, "Choose a schedule"),
  goals: z.string().min(10, "Tell us a little about your goals (min 10 characters)"),
  medical: z.string().optional(),
  parent: z.string().optional(),
  agree: z.literal(true, {
    errorMap: () => ({ message: "Please accept to continue" }),
  }),
});

type ApplyValues = z.infer<typeof schema>;

function SectionTitle({ icon: Icon, title, step }: { icon: React.ElementType; title: string; step: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-primary/60">{step}</p>
        <h3 className="font-display text-xl font-semibold tracking-tight">{title}</h3>
      </div>
    </div>
  );
}

export function ApplyForm() {
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitted },
  } = useForm<ApplyValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      age: "",
      gender: "",
      email: "",
      phone: "",
      whatsapp: "",
      address: "",
      experience: "",
      instrument: "",
      schedule: "",
      goals: "",
      medical: "",
      parent: "",
      agree: false as unknown as true,
    },
  });

  const onSubmit = async (values: ApplyValues) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    // eslint-disable-next-line no-console
    console.log("Application submitted:", values);
    setSubmitting(false);
    setDone(true);
  };

  if (done) {
    const v = getValues();
    return (
      <SubmitSuccess
        title="Application received!"
        message="Welcome to the Volcano family. Our admissions team will review your application and reach out within 2 working days to arrange your placement."
        summary={[
          { label: "Applicant", value: v.fullName },
          { label: "Instrument", value: v.instrument },
          { label: "Experience", value: v.experience },
          { label: "Schedule", value: v.schedule },
        ]}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      {/* Personal */}
      <fieldset className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-9">
        <SectionTitle icon={User} title="Personal details" step="Step 01" />
        <div className="grid gap-5 sm:grid-cols-2">
          <FieldShell label="Full name" htmlFor="fullName" required error={errors.fullName?.message} className="sm:col-span-2">
            <Input id="fullName" placeholder="Your full name" aria-invalid={!!errors.fullName} {...register("fullName")} />
          </FieldShell>
          <FieldShell label="Age" htmlFor="age" required error={errors.age?.message}>
            <Input id="age" type="number" inputMode="numeric" min={3} max={99} placeholder="e.g. 16" aria-invalid={!!errors.age} {...register("age")} />
          </FieldShell>
          <FieldShell label="Gender" required error={errors.gender?.message}>
            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger aria-invalid={!!errors.gender}>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {GENDERS.map((o) => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
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
          <FieldShell label="Address" htmlFor="address" required error={errors.address?.message}>
            <Input id="address" placeholder="City, area" aria-invalid={!!errors.address} {...register("address")} />
          </FieldShell>
        </div>
      </fieldset>

      {/* Musical background */}
      <fieldset className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-9">
        <SectionTitle icon={Music4} title="Musical background" step="Step 02" />
        <div className="grid gap-5 sm:grid-cols-2">
          <FieldShell label="Current music experience" required error={errors.experience?.message}>
            <Controller
              control={control}
              name="experience"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger aria-invalid={!!errors.experience}>
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    {EXPERIENCE.map((o) => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </FieldShell>
          <FieldShell label="Preferred instrument" required error={errors.instrument?.message}>
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
          <FieldShell label="Preferred schedule" required error={errors.schedule?.message} className="sm:col-span-2">
            <Controller
              control={control}
              name="schedule"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger aria-invalid={!!errors.schedule}>
                    <SelectValue placeholder="When would you like to learn?" />
                  </SelectTrigger>
                  <SelectContent>
                    {SCHEDULE.map((o) => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </FieldShell>
          <FieldShell label="Your goals" required error={errors.goals?.message} className="sm:col-span-2">
            <Textarea placeholder="What would you love to achieve? Songs you want to play, exams, performing, or simply for the joy of it…" {...register("goals")} />
          </FieldShell>
        </div>
      </fieldset>

      {/* Additional */}
      <fieldset className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-9">
        <SectionTitle icon={HeartPulse} title="Additional information" step="Step 03" />
        <div className="grid gap-5 sm:grid-cols-2">
          <FieldShell label="Medical notes" optional error={errors.medical?.message}>
            <Textarea placeholder="Anything we should be aware of (allergies, conditions)…" {...register("medical")} />
          </FieldShell>
          <FieldShell label="Parent / guardian information" optional error={errors.parent?.message} hint="For under-18s">
            <Textarea placeholder="Parent name & contact number" {...register("parent")} />
          </FieldShell>
        </div>

        <Controller
          control={control}
          name="agree"
          render={({ field }) => (
            <div className="mt-6">
              <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-background/50 p-5">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(v) => field.onChange(v === true)}
                  aria-invalid={!!errors.agree}
                  className="mt-0.5"
                />
                <span className="text-sm text-foreground/80">
                  I confirm the information provided is accurate and I agree to
                  Volcano&apos;s terms, privacy policy and studio guidelines.
                </span>
              </label>
              {(errors.agree || isSubmitted) && errors.agree?.message && (
                <p className="mt-2 pl-1 text-xs font-medium text-destructive">
                  {errors.agree.message as string}
                </p>
              )}
            </div>
          )}
        />

        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-end">
          <Button type="submit" size="lg" disabled={submitting} className={cn("w-full sm:w-auto")}>
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting…
              </>
            ) : (
              <>
                Submit Application
                <Send className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </fieldset>
    </form>
  );
}
