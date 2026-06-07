import { useState } from "react";
import { ArrowRight, Instagram, MessageCircle, Send, ChevronRight, Flame, Music, Users, Star } from "lucide-react";
import { Link } from "react-router";

const HERO_IMG = "https://images.unsplash.com/photo-1633465623068-c34e257706c8?w=1200&h=700&fit=crop&auto=format";

const socialPosts = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1559924835-8393ef3ba676?w=400&h=400&fit=crop&auto=format",
    caption: "Friday nights at The Gathering 🔥",
    likes: "142",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?w=400&h=400&fit=crop&auto=format",
    caption: "Joy looks good on us 💛",
    likes: "98",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?w=400&h=400&fit=crop&auto=format",
    caption: "Community over competition, always.",
    likes: "211",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1769754710715-4202beb4d87c?w=400&h=400&fit=crop&auto=format",
    caption: "Candid moments > staged ones ✨",
    likes: "176",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1562663963-5a4803638590?w=400&h=400&fit=crop&auto=format",
    caption: "Worship night was something else.",
    likes: "324",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1565293798431-88694aeb9ad0?w=400&h=400&fit=crop&auto=format",
    caption: "Step outside, see the world differently.",
    likes: "89",
  },
];

const vibeOptions = [
  { id: "energized", label: "Excited & Energized", emoji: "⚡", color: "#D98A72" },
  { id: "chill", label: "Chill & Reflective", emoji: "🌿", color: "#8FA89B" },
  { id: "struggling", label: "Struggling a Bit", emoji: "🌧", color: "#7B8EAD" },
  { id: "just-here", label: "Just Showing Up", emoji: "🙂", color: "#C4A882" },
];

const featuredQA = [
  {
    q: "How do I deal with friend group drama without losing everyone?",
    a: "Honestly? Choose the person, not the conflict. Most drama fades — real friends stick around. Focus on being someone you'd want in your own corner.",
  },
  {
    q: "Is it okay to question my faith?",
    a: "Yes. 100%. Doubt is not the opposite of faith — it's often the beginning of a deeper one. Bring your questions here. We'd rather you wrestle with hard stuff than pretend it doesn't exist.",
  },
];

export function HomePage() {
  const [vibeVote, setVibeVote] = useState<string | null>(null);
  const [voteCounts] = useState({ energized: 47, chill: 61, struggling: 23, "just-here": 38 });
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [expandedQA, setExpandedQA] = useState<number | null>(null);

  const totalVotes = Object.values(voteCounts).reduce((a, b) => a + b, 0);
  const getPercent = (id: string) => {
    const base = voteCounts[id as keyof typeof voteCounts] || 0;
    const extra = vibeVote === id ? 1 : 0;
    return Math.round(((base + extra) / (totalVotes + (vibeVote ? 1 : 0))) * 100);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "88vh" }}>
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Diverse group of young people standing together, smiling"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(253,251,247,0.96) 38%, rgba(253,251,247,0.55) 70%, rgba(253,251,247,0.15) 100%)" }}
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 flex flex-col justify-center" style={{ minHeight: "88vh", paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ background: "rgba(143,168,155,0.18)", color: "#8FA89B", border: "1px solid rgba(143,168,155,0.3)" }}
            >
              <Flame size={12} />
              Biyernes · 7PM · Rizal, Kapatagan
            </div>
            <h1
              className="mb-5 leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 800, color: "#2D3748", letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              A place to be
              <br />
              <span style={{ color: "#8FA89B" }}>real.</span>{" "}
              <span style={{ color: "#D98A72" }}>together.</span>
            </h1>
            <p className="mb-8 leading-relaxed max-w-sm" style={{ color: "#4A5568", fontSize: "1.05rem" }}>
              YFC — Youth Life Check — is a community of life checkers, soul winners, and worshippers who show up for each other and for something bigger.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:gap-3 active:scale-95"
                style={{ background: "#D98A72", color: "#FDFBF7" }}
              >
                Find an Event <ArrowRight size={15} />
              </Link>
              <Link
                to="/media"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-secondary active:scale-95"
                style={{ border: "1.5px solid rgba(74,85,104,0.2)", color: "#4A5568", background: "rgba(253,251,247,0.8)" }}
              >
                Explore Media
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: "#F0EBE3", borderTop: "1px solid rgba(74,85,104,0.08)", borderBottom: "1px solid rgba(74,85,104,0.08)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Users size={16} />, value: "340+", label: "Youth Members" },
            { icon: <Flame size={16} />, value: "5 yrs", label: "In Community" },
            { icon: <Music size={16} />, value: "Weekly", label: "Events & Worship" },
            { icon: <Star size={16} />, value: "12", label: "Active Teams" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(143,168,155,0.2)", color: "#8FA89B" }}
              >
                {stat.icon}
              </div>
              <div>
                <p style={{ fontWeight: 700, color: "#2D3748", fontSize: "1rem", lineHeight: 1.2 }}>{stat.value}</p>
                <p style={{ color: "#8A96A8", fontSize: "0.75rem" }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#8FA89B" }}>Follow Along</p>
            <h2 style={{ color: "#2D3748", fontWeight: 800, fontSize: "1.75rem", letterSpacing: "-0.02em" }}>
              Youth Life Check
            </h2>
          </div>
          <a
            href="https://www.facebook.com/KFGCYouthLifeCheck"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all duration-200"
            style={{ color: "#D98A72" }}
          >
            <Instagram size={15} /> Follow on Facebook
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {socialPosts.map((post) => (
            <div
              key={post.id}
              className="group relative overflow-hidden cursor-pointer"
              style={{ borderRadius: "12px", aspectRatio: "1/1" }}
            >
              <img
                src={post.img}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(45,55,72,0.75) 0%, transparent 60%)" }}
              >
                <p className="text-xs font-medium leading-snug" style={{ color: "#FDFBF7" }}>{post.caption}</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(253,251,247,0.7)" }}>♥ {post.likes}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Vibe Check + Q&A */}
      <section style={{ background: "#F5F1EB" }}>
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">
          {/* Vibe Check Poll */}
          <div className="rounded-2xl p-7" style={{ background: "#FDFBF7", boxShadow: "0 2px 20px rgba(74,85,104,0.07)" }}>
            <div className="flex items-center gap-2 mb-1">
              <span style={{ fontSize: "1.25rem" }}>✨</span>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#8FA89B" }}>Weekly Vibe Check</p>
            </div>
            <h3 style={{ color: "#2D3748", fontWeight: 800, fontSize: "1.3rem", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
              How are you actually doing this week?
            </h3>
            <div className="flex flex-col gap-3">
              {vibeOptions.map((opt) => {
                const pct = getPercent(opt.id);
                const selected = vibeVote === opt.id;
                const voted = vibeVote !== null;
                return (
                  <button
                    key={opt.id}
                    onClick={() => !vibeVote && setVibeVote(opt.id)}
                    disabled={!!vibeVote}
                    className="relative w-full text-left rounded-xl overflow-hidden transition-all duration-200"
                    style={{
                      padding: "0.75rem 1rem",
                      border: selected
                        ? `1.5px solid ${opt.color}`
                        : "1.5px solid rgba(74,85,104,0.12)",
                      background: voted ? "transparent" : "transparent",
                      cursor: vibeVote ? "default" : "pointer",
                    }}
                  >
                    {voted && (
                      <div
                        className="absolute inset-y-0 left-0 transition-all duration-700 rounded-xl"
                        style={{ width: `${pct}%`, background: `${opt.color}22` }}
                      />
                    )}
                    <div className="relative flex items-center justify-between">
                      <span style={{ fontSize: "0.875rem", fontWeight: 600, color: selected ? opt.color : "#4A5568" }}>
                        {opt.emoji} {opt.label}
                      </span>
                      {voted && (
                        <span style={{ fontSize: "0.8rem", fontWeight: 700, color: opt.color }}>
                          {pct}%
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
            {vibeVote && (
              <p className="mt-4 text-sm text-center" style={{ color: "#8A96A8" }}>
                You voted · {totalVotes + 1} total responses this week
              </p>
            )}
          </div>

          {/* Anonymous Q&A */}
          <div className="rounded-2xl p-7 flex flex-col" style={{ background: "#FDFBF7", boxShadow: "0 2px 20px rgba(74,85,104,0.07)" }}>
            <div className="flex items-center gap-2 mb-1">
              <MessageCircle size={14} style={{ color: "#D98A72" }} />
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#D98A72" }}>Ask Anything</p>
            </div>
            <h3 style={{ color: "#2D3748", fontWeight: 800, fontSize: "1.3rem", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
              Anonymous Q&A
            </h3>
            <p className="text-sm mb-5" style={{ color: "#8A96A8" }}>
              No name needed. Real questions, honest answers.
            </p>

            {/* Featured Q&A */}
            <div className="flex flex-col gap-3 mb-5">
              {featuredQA.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 cursor-pointer transition-colors hover:opacity-90"
                  style={{ background: "#F5F1EB" }}
                  onClick={() => setExpandedQA(expandedQA === i ? null : i)}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold" style={{ color: "#2D3748" }}>{item.q}</p>
                    <ChevronRight
                      size={15}
                      style={{
                        color: "#8A96A8",
                        flexShrink: 0,
                        transform: expandedQA === i ? "rotate(90deg)" : "none",
                        transition: "transform 0.2s",
                      }}
                    />
                  </div>
                  {expandedQA === i && (
                    <p className="mt-2.5 text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Submit */}
            <div className="mt-auto">
              {submitted ? (
                <div
                  className="rounded-xl p-4 text-center"
                  style={{ background: "rgba(143,168,155,0.15)", border: "1px solid rgba(143,168,155,0.3)" }}
                >
                  <p className="text-sm font-semibold" style={{ color: "#8FA89B" }}>Your question was sent anonymously ✓</p>
                  <p className="text-xs mt-1" style={{ color: "#8A96A8" }}>We'll answer it at our next session.</p>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask something anonymously…"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && question.trim() && setSubmitted(true)}
                    className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      background: "#F5F1EB",
                      border: "1.5px solid rgba(74,85,104,0.12)",
                      color: "#4A5568",
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    }}
                  />
                  <button
                    onClick={() => question.trim() && setSubmitted(true)}
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-opacity hover:opacity-80"
                    style={{ background: "#D98A72", color: "#FDFBF7" }}
                  >
                    <Send size={15} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div
          className="rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: "linear-gradient(135deg, #8FA89B 0%, #7B9B8C 100%)" }}
        >
          <div>
            <h2
              style={{ color: "#FDFBF7", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}
            >
              Ready to be part of something?
            </h2>
            <p style={{ color: "rgba(253,251,247,0.8)", fontSize: "1rem" }}>
              No pressure. No performance. Just come.
            </p>
          </div>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm flex-shrink-0 transition-all hover:gap-3 hover:opacity-90 active:scale-95"
            style={{ background: "#FDFBF7", color: "#4A5568" }}
          >
            See What's Coming <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
