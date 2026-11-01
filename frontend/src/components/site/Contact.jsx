import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, ArrowRight, Send } from "lucide-react";
import { toast } from "sonner";
import { chef } from "@/data/portfolio";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const projectTypes = [
  "Pre-Opening & SOPs",
  "Turnaround Project",
  "Kitchen Design & Setup",
  "Central Kitchen",
  "Bar Program",
  "Catering & Events",
  "Media / Press",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project_type: projectTypes[0],
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!form.name.trim() || !form.email.trim() || form.message.trim().length < 5) {
      toast.error("Please fill all fields (message min 5 chars).");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/consultation`, form);
      toast.success("Message received — the chef will be in touch shortly.");
      setForm({ name: "", email: "", project_type: projectTypes[0], message: "" });
    } catch (err) {
      const detail =
        err?.response?.data?.detail?.[0]?.msg ||
        err?.response?.data?.detail ||
        "Something went wrong. Please try again.";
      toast.error(typeof detail === "string" ? detail : "Please check your inputs.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 sm:py-32 bg-[#0A0908]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5"
          >
            <div className="font-small-caps text-[#C5A059] mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-[#C5A059]" /> Consultations
            </div>
            <h2
              data-testid="contact-heading"
              className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#E6E2DD] leading-tight"
            >
              Let&apos;s cook
              <br />
              <span className="italic text-[#C5A059]">something rare.</span>
            </h2>
            <p className="mt-8 font-body font-light text-lg text-[#A8A29E] leading-relaxed max-w-md">
              For pre-openings, turnarounds, catering or press — reach out via the form or the channels below.
            </p>

            <div className="mt-12 space-y-5">
              <a
                href={chef.socials.instagram}
                target="_blank"
                rel="noreferrer"
                data-testid="social-instagram"
                className="group flex items-center justify-between border-t border-white/10 pt-5 hover:border-[#C5A059]/60 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <Instagram className="text-[#C5A059]" size={20} />
                  <span>
                    <div className="font-small-caps text-[#A8A29E]">Instagram</div>
                    <div className="font-serif-display text-xl text-[#E6E2DD]">
                      @chef.balpreet
                    </div>
                  </span>
                </span>
                <ArrowRight
                  size={18}
                  className="text-[#A8A29E] group-hover:text-[#C5A059] group-hover:translate-x-1 transition-all"
                />
              </a>

              <a
                href={chef.socials.facebook}
                target="_blank"
                rel="noreferrer"
                data-testid="social-facebook"
                className="group flex items-center justify-between border-t border-white/10 pt-5 hover:border-[#C5A059]/60 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <Facebook className="text-[#C5A059]" size={20} />
                  <span>
                    <div className="font-small-caps text-[#A8A29E]">Facebook</div>
                    <div className="font-serif-display text-xl text-[#E6E2DD]">
                      Chef Balpreet Singh Chadha
                    </div>
                  </span>
                </span>
                <ArrowRight
                  size={18}
                  className="text-[#A8A29E] group-hover:text-[#C5A059] group-hover:translate-x-1 transition-all"
                />
              </a>

              <a
                href={`mailto:${chef.socials.email}`}
                data-testid="social-email"
                className="group flex items-center justify-between border-t border-b border-white/10 py-5 hover:border-[#C5A059]/60 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <Mail className="text-[#C5A059]" size={20} />
                  <span>
                    <div className="font-small-caps text-[#A8A29E]">Email</div>
                    <div className="font-serif-display text-xl text-[#E6E2DD]">
                      {chef.socials.email}
                    </div>
                  </span>
                </span>
                <ArrowRight
                  size={18}
                  className="text-[#A8A29E] group-hover:text-[#C5A059] group-hover:translate-x-1 transition-all"
                />
              </a>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={onSubmit}
              className="bg-[#141210] p-8 sm:p-12 border border-white/5"
              data-testid="consultation-form"
            >
              <div className="font-small-caps text-[#C5A059] mb-8">
                — Enquiry Form
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="font-small-caps text-[#A8A29E] block mb-2">
                    Your Name
                  </label>
                  <input
                    data-testid="form-name-input"
                    type="text"
                    className="editorial-input"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={update("name")}
                    required
                    maxLength={120}
                  />
                </div>
                <div>
                  <label className="font-small-caps text-[#A8A29E] block mb-2">
                    Email
                  </label>
                  <input
                    data-testid="form-email-input"
                    type="email"
                    className="editorial-input"
                    placeholder="you@studio.com"
                    value={form.email}
                    onChange={update("email")}
                    required
                  />
                </div>
              </div>

              <div className="mt-8">
                <label className="font-small-caps text-[#A8A29E] block mb-3">
                  Project Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((t) => (
                    <button
                      type="button"
                      key={t}
                      data-testid={`form-project-${t.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}
                      onClick={() => setForm((f) => ({ ...f, project_type: t }))}
                      className={`px-4 py-2 font-small-caps border transition-colors ${
                        form.project_type === t
                          ? "bg-[#C5A059] text-black border-[#C5A059]"
                          : "border-white/15 text-[#A8A29E] hover:text-[#E6E2DD] hover:border-white/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <label className="font-small-caps text-[#A8A29E] block mb-2">
                  Tell the chef about your project
                </label>
                <textarea
                  data-testid="form-message-input"
                  className="editorial-input"
                  rows={4}
                  placeholder="Vision, timeline, location…"
                  value={form.message}
                  onChange={update("message")}
                  required
                  minLength={5}
                  maxLength={4000}
                />
              </div>

              <div className="mt-10 flex items-center justify-between gap-6 flex-wrap">
                <p className="font-body font-light text-sm text-[#6b625b] max-w-xs">
                  Your enquiry is confidential. Expect a reply within 3 business days.
                </p>
                <button
                  type="submit"
                  data-testid="form-submit-btn"
                  disabled={submitting}
                  className="inline-flex items-center gap-3 bg-[#C5A059] text-black hover:bg-[#D4B371] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300 px-8 py-4 font-small-caps"
                >
                  {submitting ? "Sending…" : "Send Enquiry"}
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
