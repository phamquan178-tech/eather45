"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setStatus("loading");

    const { error } = await supabase.from("contact_messages").insert([
      { name: name.trim(), email: email.trim(), message: message.trim(), source: "contact_page" },
    ]);

    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f4f1ea]">
        {/* Header strip */}
        <div className="border-b border-stone-200 bg-[#f4f1ea]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-12">
            <p className="text-[9px] font-medium tracking-[0.5em] uppercase text-stone-400 mb-4">
              Get in Touch
            </p>
            <h1 className="text-3xl lg:text-4xl font-light text-stone-900 tracking-tight mb-3">
              Contact Eather45
            </h1>
            <p className="text-sm text-stone-500 font-light">
              For product inquiries, partnership, or early access requests.
            </p>
          </div>
        </div>

        {/* Form area */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="max-w-xl">
            {status === "success" ? (
              <div className="flex items-start gap-4 py-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-stone-500 mt-0.5 shrink-0"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <div>
                  <p className="text-stone-800 font-light mb-1">
                    Thank you. We will get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-[10px] tracking-[0.25em] uppercase text-stone-400 hover:text-stone-700 transition-colors mt-3"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-[9px] font-medium tracking-[0.38em] uppercase text-stone-500 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    placeholder="Your full name"
                    className="w-full px-4 py-3.5 bg-white border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-500 transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[9px] font-medium tracking-[0.38em] uppercase text-stone-500 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 bg-white border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-500 transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[9px] font-medium tracking-[0.38em] uppercase text-stone-500 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    rows={6}
                    placeholder="Tell us about your inquiry..."
                    className="w-full px-4 py-3.5 bg-white border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-500 transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                {status === "error" && (
                  <p className="text-[11px] text-stone-500 font-light">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-4 px-9 py-3.5 bg-stone-950 text-white text-[10px] font-semibold tracking-[0.32em] uppercase hover:bg-stone-800 transition-colors disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                  {status !== "loading" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <Link
              href="/"
              className="text-[9px] font-medium tracking-[0.32em] uppercase text-stone-400 hover:text-stone-700 transition-colors"
            >
              ← Back to Site
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
