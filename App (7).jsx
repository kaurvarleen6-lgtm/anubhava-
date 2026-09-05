import React, { useState, useEffect } from "react";
import { Building2, Wallet, MonitorSmartphone, Sparkles, Globe2, Handshake, Linkedin, Instagram, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";

const LOGO_SRC = "data:image/jpeg;base64,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";

const STATS = [
  { value: "190+", label: "Recruiting companies" },
  { value: "8,400+", label: "Student registrations" },
  { value: "\u20B945,000", label: "Highest monthly stipend" },
  { value: "100%", label: "Interviews held online" },
];

const REASONS = [
  {
    icon: Handshake,
    title: "Meet recruiters directly",
    body: "Talk to hiring teams from finance, marketing, tech, HR and consulting firms without a single forwarded resume in between.",
  },
  {
    icon: Globe2,
    title: "Roles across every track",
    body: "Whichever course you're in, there's a profile built for it \u2014 from campaigns and case studies to code and client calls.",
  },
  {
    icon: MonitorSmartphone,
    title: "Every round, online",
    body: "Interviews, group discussions and offer letters all happen over your laptop. No travel, no missed lectures.",
  },
];

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Join" },
  { href: "#form", label: "Register" },
];

function useGoogleFonts() {
  useEffect(() => {
    const id = "anubhava-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
}

function BulbMark({ className }) {
  return (
    <svg viewBox="0 0 120 160" className={className} fill="none">
      <g className="bulb-glow">
        <circle cx="60" cy="58" r="46" fill="var(--amber)" opacity="0.14" />
        <circle cx="60" cy="58" r="30" fill="var(--amber)" opacity="0.18" />
      </g>
      <path
        d="M60 14C36.8 14 18 32.6 18 55.6c0 15 8 28.1 20 35.7V104c0 3.3 2.7 6 6 6h32c3.3 0 6-2.7 6-6V91.3c12-7.6 20-20.7 20-35.7C102 32.6 83.2 14 60 14Z"
        stroke="var(--espresso)"
        strokeWidth="4"
        fill="var(--cream)"
      />
      <path
        d="M48 96h24M50 108h20M53 120h14"
        stroke="var(--espresso)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M60 34c-12 0-21 8.6-21 19.2 0 6 3 11.4 8 15"
        stroke="var(--caramel)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StatTicker() {
  return (
    <div className="stat-band">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`px-4 py-3 md:py-0 ${i !== 0 ? "stat-divider" : ""}`}
          >
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    course: "",
    phone: "",
    email: "",
    college: "",
  });
  const [status, setStatus] = useState("idle"); // idle | success

  const handleSubmit = (e) => {
    e.preventDefault();

    // Confirm immediately so the button always works, even in preview
    // environments that block outbound network calls to third-party
    // domains. Best-effort send to FormSubmit in the background for
    // real deployments \u2014 its success/failure doesn't affect the UI.
    fetch("https://formsubmit.co/ajax/group17ignite@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: "New Anubhava 9.0 Registration",
        "Full name": form.name,
        "Course & year of study": form.course,
        "Phone number (WhatsApp)": form.phone,
        "Email ID": form.email,
        "College / institution name": form.college,
      }),
    }).catch(() => {});

    setStatus("success");
    setForm({ name: "", course: "", phone: "", email: "", college: "" });
  };

  if (status === "success") {
    return (
      <div className="form-panel flex flex-col items-center text-center gap-3 py-14">
        <CheckCircle2 className="w-12 h-12" style={{ color: "var(--caramel)" }} />
        <h3 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--espresso)" }}>
          Form Submitted
        </h3>
        <p className="max-w-sm" style={{ color: "var(--espresso-soft)" }}>
          You're on the list for Anubhava 9.0. Ignite will email you the interview schedule and recruiter list shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm underline underline-offset-4"
          style={{ color: "var(--caramel)" }}
        >
          Register another student
        </button>
      </div>
    );
  }

  const fields = [
    { name: "name", label: "Full name", type: "text", placeholder: "Ananya Sharma", span: "md:col-span-2" },
    { name: "course", label: "Course & year of study", type: "text", placeholder: "B.Com (Hons), 2nd Year" },
    { name: "phone", label: "Phone number (WhatsApp)", type: "tel", placeholder: "98765 43210" },
    { name: "email", label: "Email ID", type: "email", placeholder: "ananya@email.com" },
    { name: "college", label: "College / institution name", type: "text", placeholder: "SGTB Khalsa College, DU" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="form-panel grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      {fields.map((f) => (
        <div key={f.name} className={f.span || ""}>
          <label htmlFor={f.name} className="form-label">
            {f.label}
          </label>
          <input
            id={f.name}
            name={f.label}
            type={f.type}
            required
            value={form[f.name]}
            onChange={(e) => setForm((prev) => ({ ...prev, [f.name]: e.target.value }))}
            placeholder={f.placeholder}
            className="form-input"
          />
        </div>
      ))}

      <div className="md:col-span-2 flex items-center gap-4 pt-2">
        <button type="submit" className="btn-primary">
          Secure my spot
        </button>
        <span className="text-sm" style={{ color: "var(--espresso-soft)" }}>
          Confirmation goes to your email within 24 hours.
        </span>
      </div>
    </form>
  );
}

export default function App() {
  useGoogleFonts();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Plain #hash anchors don't reliably scroll inside embedded/iframe
  // previews, so navigate manually with scrollIntoView instead.
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ fontFamily: "var(--font-body)", background: "var(--cream)", color: "var(--espresso)" }}>
      <style>{`
        :root {
          --cream: #FDF8F5;
          --parchment: #F3E7DC;
          --espresso: #2C1A1D;
          --espresso-soft: #6B5450;
          --caramel: #C87D55;
          --amber: #D97706;
          --line: #E4D3C4;
          --font-display: 'Space Grotesk', sans-serif;
          --font-body: 'Inter', sans-serif;
        }
        .font-display { font-family: var(--font-display); }
        .header-shell {
          position: sticky; top: 0; z-index: 40;
          background: rgba(253,248,245,0.88);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--line);
          transition: box-shadow .25s ease;
        }
        .header-shell.scrolled { box-shadow: 0 6px 20px -14px rgba(44,26,29,0.35); }
        .nav-link { color: var(--espresso-soft); font-weight: 500; font-size: 0.95rem; transition: color .15s ease; }
        .nav-link:hover { color: var(--espresso); }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: var(--espresso); color: var(--cream);
          padding: 0.75rem 1.6rem; border-radius: 999px;
          font-weight: 600; font-size: 0.95rem; font-family: var(--font-display);
          transition: transform .15s ease, background .15s ease;
          border: none; cursor: pointer;
        }
        .btn-primary:hover { background: var(--caramel); transform: translateY(-1px); }
        .btn-primary:disabled { opacity: 0.7; cursor: default; transform: none; }
        .btn-ghost {
          display: inline-flex; align-items: center; gap: 0.4rem;
          color: var(--espresso); font-weight: 600; font-size: 0.95rem;
          border-bottom: 2px solid var(--caramel); padding-bottom: 2px;
        }
        .stat-band { background: var(--espresso); color: var(--cream); }
        .stat-value { font-family: var(--font-display); font-size: 2rem; font-weight: 600; font-variant-numeric: tabular-nums; }
        .stat-label { color: #CBB9A8; font-size: 0.85rem; margin-top: 0.15rem; }
        .stat-divider { border-left: 1px solid rgba(253,248,245,0.18); }
        @media (max-width: 767px) {
          .stat-divider { border-left: none; border-top: 1px solid rgba(253,248,245,0.18); padding-top: 1rem !important; }
        }
        .reason-card {
          background: var(--cream);
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 1.75rem;
        }
        .reason-feature {
          background: var(--espresso);
          color: var(--cream);
          border-radius: 18px;
          padding: 2rem;
        }
        .form-panel {
          background: var(--parchment);
          border: 1px solid var(--caramel);
          border-radius: 22px;
          padding: 2.25rem;
        }
        .form-label { display: block; font-size: 0.85rem; font-weight: 600; color: var(--espresso-soft); margin-bottom: 0.4rem; }
        .form-input {
          width: 100%; background: var(--cream); border: 1px solid var(--line);
          border-radius: 10px; padding: 0.7rem 0.9rem; font-size: 0.95rem; color: var(--espresso);
          outline: none; transition: border-color .15s ease;
        }
        .form-input:focus { border-color: var(--caramel); box-shadow: 0 0 0 3px rgba(200,125,85,0.18); }
        .bulb-glow { animation: pulse-glow 3.4s ease-in-out infinite; transform-origin: 60px 58px; }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.06); }
        }
        @media (prefers-reduced-motion: reduce) {
          .bulb-glow { animation: none; }
          .btn-primary:hover { transform: none; }
        }
        a:focus-visible, button:focus-visible, input:focus-visible {
          outline: 2px solid var(--caramel); outline-offset: 2px;
        }
      `}</style>

      {/* Header */}
      <header className={`header-shell ${scrolled ? "scrolled" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_SRC} alt="Ignite \u2014 The Placement Cell logo" className="h-10 w-10 object-contain" />
            <div className="leading-tight">
              <div className="font-display font-semibold text-sm" style={{ color: "var(--espresso)" }}>
                Anubhava 9.0
              </div>
              <div className="text-xs" style={{ color: "var(--espresso-soft)" }}>
                Ignite \u00b7 SGTB Khalsa College
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={scrollToId(l.href.replace("#", ""))} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#form" onClick={scrollToId("form")} className="btn-primary">
            Register now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="about" className="max-w-6xl mx-auto px-6 pt-16 pb-14 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h1 className="font-display font-semibold leading-[1.05] text-4xl md:text-5xl" style={{ color: "var(--espresso)" }}>
            Fuel your future at Anubhava 9.0
          </h1>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--espresso-soft)" }}>
            India's premier online internship fair brings corporate recruiters straight to students across finance, marketing, tech, HR and consulting \u2014 no campus visit, no waiting rooms, just interviews that fit around your timetable.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a href="#form" onClick={scrollToId("form")} className="btn-primary">
              <Sparkles className="w-4 h-4" />
              Reserve your slot
            </a>
            <a href="#why" onClick={scrollToId("why")} className="btn-ghost">
              See why it's worth your time
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <BulbMark className="w-56 h-72 md:w-64 md:h-80" />
            <div
              className="absolute -bottom-4 -left-6 rounded-2xl px-5 py-3 shadow-lg"
              style={{ background: "var(--cream)", border: "1px solid var(--line)" }}
            >
              <div className="font-display font-semibold text-lg" style={{ color: "var(--espresso)" }}>
                190+ recruiters
              </div>
              <div className="text-xs" style={{ color: "var(--espresso-soft)" }}>
                hiring this edition
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatTicker />

      {/* Why attend */}
      <section id="why" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-display font-semibold text-3xl md:text-4xl max-w-xl" style={{ color: "var(--espresso)" }}>
          Why you shouldn't miss this one
        </h2>
        <p className="mt-3 max-w-lg" style={{ color: "var(--espresso-soft)" }}>
          Four editions in, Anubhava has placed thousands of students into internships that turned into full-time offers. Here's what makes the ninth different.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="reason-feature md:row-span-2 flex flex-col justify-between">
            <div>
              <Building2 className="w-9 h-9" style={{ color: "var(--amber)" }} />
              <h3 className="font-display font-semibold text-2xl mt-5">Direct corporate exposure</h3>
              <p className="mt-3 leading-relaxed" style={{ color: "#E7D9CE" }}>
                Recruiters from 190+ companies join live sessions and interview slots themselves \u2014 your resume reaches a hiring manager, not a portal queue.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm" style={{ color: "#CBB9A8" }}>
              <Wallet className="w-4 h-4" />
              Stipends up to \u20B945,000/month
            </div>
          </div>

          {REASONS.map((r) => (
            <div key={r.title} className="reason-card">
              <r.icon className="w-8 h-8" style={{ color: "var(--caramel)" }} />
              <h3 className="font-display font-semibold text-lg mt-4" style={{ color: "var(--espresso)" }}>
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--espresso-soft)" }}>
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Registration form */}
      <section id="form" className="max-w-4xl mx-auto px-6 pb-24">
        <div className="text-center mb-10">
          <h2 className="font-display font-semibold text-3xl md:text-4xl" style={{ color: "var(--espresso)" }}>
            Secure your spot at Anubhava 9.0
          </h2>
          <p className="mt-3" style={{ color: "var(--espresso-soft)" }}>
            Fill this in and Ignite will send your interview slot and recruiter shortlist by email.
          </p>
        </div>
        <RegistrationForm />
      </section>

      {/* Footer */}
      <footer style={{ background: "var(--espresso)", color: "#CBB9A8" }}>
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src={LOGO_SRC} alt="Ignite logo" className="h-9 w-9 object-contain" />
              <span className="font-display font-semibold" style={{ color: "var(--cream)" }}>
                Ignite \u2014 The Placement Cell
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed flex gap-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              S.G.T.B Khalsa College, University of Delhi, Delhi \u2013 110007
            </p>
          </div>
          <div>
            <div className="font-display font-semibold text-sm mb-3" style={{ color: "var(--cream)" }}>
              Contact
            </div>
            <p className="text-sm flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4" /> placements@sgtbkhalsa.du.ac.in
            </p>
            <p className="text-sm flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 11 2766 6183
            </p>
          </div>
          <div>
            <div className="font-display font-semibold text-sm mb-3" style={{ color: "var(--cream)" }}>
              Follow along
            </div>
            <div className="flex gap-4">
              <a href="#" aria-label="Ignite on LinkedIn" className="hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Ignite on Instagram" className="hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <nav className="mt-6 flex flex-col gap-2 text-sm">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white w-fit">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="border-t text-center text-xs py-5" style={{ borderColor: "rgba(253,248,245,0.12)" }}>
          \u00a9 2026 Ignite, The Placement Cell \u2014 S.G.T.B Khalsa College, University of Delhi
        </div>
      </footer>
    </div>
  );
}
