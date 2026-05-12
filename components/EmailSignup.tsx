"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");

    const { error } = await supabase.from("email_signups").insert([
      { email: email.trim(), source: "homepage" },
    ]);

    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-[10px] font-medium tracking-[0.45em] uppercase text-stone-400 mb-4">
            Stay Connected
          </p>
          <h2 className="text-2xl lg:text-3xl font-light text-stone-900 mb-3 tracking-tight">
            Join the Eather45 field notes.
          </h2>
          <p className="text-sm text-stone-500 font-light mb-10 leading-relaxed">
            Gear updates, technical guides, and stories from the field. No noise — only what
            matters.
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-3 py-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-stone-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <p className="text-stone-700 font-light">Thank you for joining Eather45.</p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  disabled={status === "loading"}
                  className="flex-1 px-5 py-3.5 bg-white border border-stone-200 border-r-0 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-7 py-3.5 bg-stone-950 text-white text-[10px] font-semibold tracking-[0.28em] uppercase hover:bg-stone-800 transition-colors whitespace-nowrap disabled:opacity-50"
                >
                  {status === "loading" ? "..." : "Sign Up"}
                </button>
              </form>
              {status === "error" && (
                <p className="mt-3 text-[11px] text-stone-500 font-light">
                  Something went wrong. Please try again.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
