"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const { firstName, lastName, email, phone, subject, message } = formData;
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\n${message}`;
    const mailto = `mailto:research@ip-6.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setSubmitted(true);
    setFormData(initialFormData);
    setSubmitting(false);
  };

  const inputClasses =
    "w-full rounded-none border border-stone-300 bg-white px-4 py-3 text-ink placeholder:text-stone-400 transition-all duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20";

  return (
    <main className="min-h-screen bg-bone">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h1 className="font-display text-4xl text-ink md:text-5xl">
                Contact Us
              </h1>
            </div>
            <div className="lg:col-span-2">
              <dl className="space-y-3 text-ink">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a href="mailto:research@ip-6.net" className="underline underline-offset-2 hover:text-accent">
                      research@ip-6.net
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Phone</dt>
                  <dd>
                    <a href="tel:+14106593906" className="underline underline-offset-2 hover:text-accent">
                      1-410-659-3906
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Address</dt>
                  <dd className="text-stone-600">
                    15 Charles Plaza, Suite 2508<br />
                    Baltimore, MD 21201-3931
                  </dd>
                </div>
                <div className="flex gap-4 pt-2 text-sm">
                  <a
                    href="http://www.twitter.com/IP6Research"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-accent"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://www.facebook.com/pages/IP-6-Research-Inc/241284989246005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-accent"
                  >
                    Facebook
                  </a>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24">
        <div className="section-container max-w-3xl">
          <div className="border border-stone-200 bg-white p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <CheckCircle className="h-8 w-8 text-accent" />
                <h3 className="font-display text-xl text-ink">
                  Message Sent Successfully
                </h3>
                <p className="text-stone-600">
                  Thank you for reaching out. We will get back to you as
                  soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Row */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-medium uppercase tracking-wide text-ink"
                    >
                      First Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-medium uppercase tracking-wide text-ink"
                    >
                      Last Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium uppercase tracking-wide text-ink"
                  >
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClasses}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium uppercase tracking-wide text-ink"
                  >
                    Phone{" "}
                    <span className="text-xs font-normal normal-case tracking-normal text-stone-400">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className={inputClasses}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium uppercase tracking-wide text-ink"
                  >
                    Subject <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Research inquiry"
                    className={inputClasses}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium uppercase tracking-wide text-ink"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    className={inputClasses + " resize-y"}
                  />
                </div>

                {/* Error */}
                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  {submitting ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
