"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const businessTypes = [
  "Retail Store",
  "Grocery Shop",
  "Restaurant",
  "Medical Store",
  "Wholesale / Distribution",
  "Other",
]

const formspreeFormId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    if (!formspreeFormId) {
      setErrorMessage(
        "Contact form is not configured yet. Please email us directly or try again later.",
      )
      setStatus("error")
      return
    }

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      const data = (await response.json()) as { ok?: boolean; error?: string }

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.")
      }

      form.reset()
      setStatus("success")
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message. Please try again.",
      )
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-10 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent">
          <CheckCircle2 className="h-7 w-7 text-primary" />
        </span>
        <h3 className="font-heading text-2xl font-bold text-foreground">Thank you!</h3>
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
          Your message has been received. Our team will reach out to you within one business day.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" name="phone" type="tel" required placeholder="+91 00000 00000" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@business.com" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="business">Business type</Label>
          <select
            id="business"
            name="business"
            required
            defaultValue=""
            className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="" disabled>
              Select an option
            </option>
            {businessTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your business and what you're looking for."
        />
      </div>

      {status === "error" ? (
        <div className="mt-5 flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>{errorMessage}</p>
        </div>
      ) : null}

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  )
}
