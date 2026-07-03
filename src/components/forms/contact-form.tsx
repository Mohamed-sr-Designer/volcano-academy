"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Send, Check } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FieldShell } from "@/components/forms/field-shell";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().min(1, "Required").email("Enter a valid email"),
  subject: z.string().optional(),
  message: z.string().min(10, "Please write a little more (min 10 characters)"),
});

type ContactValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: ContactValues) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    // eslint-disable-next-line no-console
    console.log("Contact message:", values);
    setSubmitting(false);
    setDone(true);
    reset();
  };

  return (
    <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-9">
      <AnimatePresence mode="wait">
        {done ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
              <Check className="h-7 w-7" strokeWidth={3} />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
              Message sent
            </h3>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Thank you for reaching out. We&apos;ll get back to you very soon.
            </p>
            <Button variant="outline" className="mt-6" onClick={() => setDone(false)}>
              Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            noValidate
          >
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              Send us a message
            </h3>
            <p className="-mt-2 text-sm text-muted-foreground">
              We&apos;d love to hear from you. Expect a reply within a day.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <FieldShell label="Your name" htmlFor="name" required error={errors.name?.message}>
                <Input id="name" placeholder="Full name" aria-invalid={!!errors.name} {...register("name")} />
              </FieldShell>
              <FieldShell label="Email" htmlFor="email" required error={errors.email?.message}>
                <Input id="email" type="email" placeholder="you@email.com" aria-invalid={!!errors.email} {...register("email")} />
              </FieldShell>
            </div>
            <FieldShell label="Subject" htmlFor="subject" optional error={errors.subject?.message}>
              <Input id="subject" placeholder="What is this about?" {...register("subject")} />
            </FieldShell>
            <FieldShell label="Message" htmlFor="message" required error={errors.message?.message}>
              <Textarea id="message" className="min-h-[150px]" placeholder="Tell us how we can help…" aria-invalid={!!errors.message} {...register("message")} />
            </FieldShell>
            <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
