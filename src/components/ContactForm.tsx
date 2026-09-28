"use client";

import { useState } from "react";
import { site } from "@/lib/site-data";

export function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New inquiry from ${form.firstName} ${form.lastName}`
    );
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="text-sm font-medium text-brand-green">
            First Name *
          </label>
          <input
            id="firstName"
            required
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            className="mt-1.5 w-full rounded-lg border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-orange"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="text-sm font-medium text-brand-green">
            Last Name *
          </label>
          <input
            id="lastName"
            required
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className="mt-1.5 w-full rounded-lg border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-orange"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-brand-green">
          Email *
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-1.5 w-full rounded-lg border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-orange"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-brand-green">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-1.5 w-full rounded-lg border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-brand-orange"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
      >
        Send Message
      </button>
    </form>
  );
}
