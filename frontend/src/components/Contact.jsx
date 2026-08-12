import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ChapterHeading, Reveal } from "@/components/Chapter";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "calebkrewu1104@gmail.com",
    href: "mailto:calebkrewu1104@gmail.com",
    testid: "contact-email-link",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "071 232 5608 / 079 601 2409",
    href: "tel:+27712325608",
    testid: "contact-phone-link",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/caleb-krewu-924840298",
    href: "https://linkedin.com/in/caleb-krewu-924840298",
    testid: "contact-linkedin-link",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/CVL3B-cpu",
    href: "https://github.com/CVL3B-cpu",
    testid: "contact-github-link",
  },
  {
    icon: MapPin,
    label: "Base",
    value: "Eersterivier, Cape Town, ZA",
    href: null,
    testid: "contact-location",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message transmitted. Caleb will get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Transmission failed. Please try again or email directly.");
    } finally {
      setSending(false);
    }
  };

  const fieldCls =
    "rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-6 font-light text-white placeholder:font-mono placeholder:text-xs placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-zinc-600 focus-visible:border-turq focus-visible:ring-0 focus-visible:ring-offset-0";

  return (
    <section id="contact" data-testid="contact-section" className="relative overflow-hidden px-6 py-28 md:px-12 md:py-40">
      <div
        aria-hidden
        className="absolute -bottom-40 right-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-turq-deep/30 blur-[150px]"
      />
      <div className="mx-auto max-w-[1600px]">
        <ChapterHeading index="06" title="Contact" hint="Open a channel" />
        <div className="grid gap-20 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="font-heading text-6xl font-black uppercase leading-[0.9] tracking-tighter md:text-8xl">
                Let&apos;s
                <br />
                <span className="text-outline">Talk.</span>
              </p>
              <p className="mt-8 max-w-md text-base font-light leading-relaxed text-zinc-400 md:text-lg">
                Seeking an entry-level IT Support or Systems Administration
                role — ready to leverage technical aptitude and administrative
                experience in a technology-focused environment.
              </p>
            </Reveal>
            <div className="mt-12 border-t border-white/10">
              {DETAILS.map((d, i) => (
                <Reveal key={d.label} delay={0.1 + i * 0.06}>
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      data-testid={d.testid}
                      className="group flex items-center gap-5 border-b border-white/10 py-5 transition-all hover:pl-3"
                    >
                      <d.icon size={18} className="shrink-0 text-turq" />
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                        {d.label}
                      </span>
                      <span className="ml-auto text-sm font-light text-zinc-200 transition-colors group-hover:text-turq md:text-base">
                        {d.value}
                      </span>
                    </a>
                  ) : (
                    <div data-testid={d.testid} className="flex items-center gap-5 border-b border-white/10 py-5">
                      <d.icon size={18} className="shrink-0 text-turq" />
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                        {d.label}
                      </span>
                      <span className="ml-auto text-sm font-light text-zinc-200 md:text-base">
                        {d.value}
                      </span>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15} className="lg:col-span-6">
            <form
              onSubmit={submit}
              data-testid="contact-form"
              className="relative border border-white/10 bg-surface/60 p-8 backdrop-blur-sm md:p-12"
            >
              <div aria-hidden className="gradient-spectrum absolute inset-x-0 top-0 h-[3px]" />
              <div className="mb-10 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-turq">
                  // New transmission
                </span>
                <span className="flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-turq" />
                </span>
              </div>
              <div className="space-y-2">
                <Input
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your name"
                  data-testid="contact-name-input"
                  className={fieldCls}
                />
                <Input
                  required
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="Your email"
                  data-testid="contact-email-input"
                  className={fieldCls}
                />
                <Textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Your message"
                  data-testid="contact-message-input"
                  className={`${fieldCls} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                data-testid="contact-submit-button"
                className="group relative mt-12 flex w-full items-center justify-center gap-3 overflow-hidden border border-turq px-8 py-5 font-mono text-xs uppercase tracking-[0.3em] text-turq transition-colors hover:text-obsidian disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="absolute inset-0 -translate-x-full bg-turq transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative flex items-center gap-3">
                  {sending ? "Transmitting..." : "Send message"}
                  <Send size={14} />
                </span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
