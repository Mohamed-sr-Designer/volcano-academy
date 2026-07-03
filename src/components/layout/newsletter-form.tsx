"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError(true);
      return;
    }
    setError(false);
    setDone(true);
  };

  return (
    <form onSubmit={onSubmit} className="relative">
      <AnimatePresence mode="wait">
        {done ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 rounded-full border border-cream/25 bg-cream/10 px-5 py-3.5 text-sm text-cream"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-cream text-wine-800">
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
            </span>
            You&apos;re on the list — welcome to Volcano.
          </motion.div>
        ) : (
          <motion.div key="form" className="relative flex items-center">
            <Input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(false);
              }}
              placeholder="Your email address"
              aria-label="Email address"
              aria-invalid={error}
              className="h-13 rounded-full border-cream/25 bg-cream/5 pr-14 text-cream placeholder:text-cream/40 focus-visible:border-cream/50 focus-visible:ring-cream/20"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="absolute right-1.5 grid h-10 w-10 place-items-center rounded-full bg-cream text-wine-800 transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {error && (
        <p className="mt-2 pl-4 text-xs text-cream/70">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
