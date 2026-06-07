import { useState } from "react";
import { Calendar, MapPin, Users, Clock, ChevronRight, ArrowRight, Check } from "lucide-react";

const events = [
  {
    id: 1,
    type: "Camp",
    title: "YFC Summer Breakaway Camp",
    tagline: "Tatlong araw. Isang bundok. Walang phone.",
    description:
      "A 3-day overnight camp experience set in the mountains of Lanao del Norte. Expect worship nights, campfire devotions, team challenges, and honest small group conversations. Limited slots — secure yours now.",
    date: "July 18–20, 2024",
    location: "Kapatagan, Lanao del Norte, Philippines",
    time: "Depart 8:00 AM",
    capacity: 60,
    spotsLeft: 14,
    price: "₱750",
    img: "https://images.unsplash.com/photo-1573111651692-39ec7f38fec9?w=600&h=380&fit=crop&auto=format",
    accentColor: "#8FA89B",
    tags: ["Overnight", "Ages 14–18", "Limited Slots"],
  },
  {
    id: 2,
    type: "Youth Night",
    title: "Friday Night Live — July",
    tagline: "Your weekly highlight.",
    description:
      "Every Friday night at the YFC hall — worship, games, a real talk, and time to hang with your people. No registration needed. Just come as you are.",
    date: "Every Friday",
    location: "YFC Hall, Rizal, Kapatagan, Lanao del Norte",
    time: "7:00 – 9:30 PM (PHT)",
    capacity: 120,
    spotsLeft: null,
    price: "Libre",
    img: "https://images.unsplash.com/photo-1562663963-5a4803638590?w=600&h=380&fit=crop&auto=format",
    accentColor: "#D98A72",
    tags: ["Linggo-linggo", "Lahat ng Edad", "Bukas sa Lahat"],
  },
  {
    id: 3,
    type: "Workshop",
    title: "The Identity Workshop",
    tagline: "Sino ka talaga?",
    description:
      "A Saturday afternoon workshop on identity, purpose, and mental health — through journaling, open conversation, and small group breakouts. Grounded, honest, and Filipino-rooted.",
    date: "August 3, 2024",
    location: "Barangay Hall, Rizal, Kapatagan",
    time: "1:00 – 5:00 PM (PHT)",
    capacity: 40,
    spotsLeft: 8,
    price: "₱150",
    img: "https://images.unsplash.com/photo-1769754710715-4202beb4d87c?w=600&h=380&fit=crop&auto=format",
    accentColor: "#7B8EAD",
    tags: ["Isang Araw", "Ages 13–22", "Workshop"],
  },
  {
    id: 4,
    type: "Service",
    title: "Bayanihan Community Day",
    tagline: "Pagsilbihan ang ating komunidad.",
    description:
      "We partner with local barangay officials and community groups for a full morning of service — coastal clean-up, feeding program, and visitation of the elderly. Tanghalian ay aming sagot.",
    date: "July 27, 2024",
    location: "Kapatagan, Lanao del Norte",
    time: "8:00 AM – 2:00 PM (PHT)",
    capacity: 80,
    spotsLeft: 31,
    price: "Libre",
    img: "https://images.unsplash.com/photo-1758599669406-d5179ccefcb9?w=600&h=380&fit=crop&auto=format",
    accentColor: "#C4A882",
    tags: ["Serbisyo", "Lahat ng Edad", "Kasama ang Tanghalian"],
  },
];

const volunteerTeams = [
  {
    id: 1,
    name: "Tech & Media",
    icon: "🎬",
    description: "Run lights, sound, livestream, and social media. If tech is your thing, we need you.",
    commitment: "Biyernes + 2 hrs/buwan produksyon",
    openRoles: 3,
    color: "#7B8EAD",
  },
  {
    id: 2,
    name: "Hospitality Crew",
    icon: "🤝",
    description: "First impressions matter. You're the reason someone feels welcome the moment they walk in.",
    commitment: "Biyernes, 6:00–9:30 PM (PHT)",
    openRoles: 5,
    color: "#8FA89B",
  },
  {
    id: 3,
    name: "Worship Team",
    icon: "🎸",
    description: "Musicians, vocalists, and sound engineers who want to lead something meaningful.",
    commitment: "Huwebes rehearsal + Biyernes gabi",
    openRoles: 2,
    color: "#D98A72",
  },
  {
    id: 4,
    name: "Small Group Leaders",
    icon: "💬",
    description: "Facilitate real conversations in a small group of 6–8 teens. No seminary required.",
    commitment: "Biyernes + buwanang leader training",
    openRoles: 6,
    color: "#C4A882",
  },
];

export function EventsPage() {
  const [registeredEvents, setRegisteredEvents] = useState<Set<number>>(new Set());
  const [appliedTeams, setAppliedTeams] = useState<Set<number>>(new Set());

  const toggleEvent = (id: number) => {
    setRegisteredEvents((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleTeam = (id: number) => {
    setAppliedTeams((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div>
      {/* Page Header */}
      <section
        className="border-b"
        style={{
          background: "linear-gradient(135deg, #F5F1EB 0%, #FDFBF7 100%)",
          borderColor: "rgba(74,85,104,0.08)",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#D98A72" }}>
            Events & Launchpad
          </p>
          <h1
            style={{
              color: "#2D3748",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              marginBottom: "0.75rem",
            }}
          >
            What's Happening
          </h1>
          <p style={{ color: "#8A96A8", fontSize: "1rem", maxWidth: "500px" }}>
            Sign up for events, join a volunteer team, and find your place in the community.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 mb-2">
          <Calendar size={15} style={{ color: "#D98A72" }} />
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#D98A72" }}>
            Upcoming Events
          </p>
        </div>
        <h2
          style={{ color: "#2D3748", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.02em", marginBottom: "1.75rem" }}
        >
          Make a Plan
        </h2>

        <div className="flex flex-col gap-6">
          {events.map((event) => {
            const registered = registeredEvents.has(event.id);
            const spotsPercent = event.spotsLeft
              ? Math.round(((event.capacity - event.spotsLeft) / event.capacity) * 100)
              : null;
            return (
              <div
                key={event.id}
                className="rounded-2xl overflow-hidden flex flex-col md:flex-row"
                style={{
                  background: "#FDFBF7",
                  border: "1px solid rgba(74,85,104,0.08)",
                  boxShadow: "0 2px 20px rgba(74,85,104,0.07)",
                }}
              >
                {/* Image */}
                <div
                  className="md:w-72 flex-shrink-0 relative"
                  style={{ minHeight: "200px" }}
                >
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    style={{ minHeight: "200px" }}
                  />
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: event.accentColor, color: "#FDFBF7" }}
                  >
                    {event.type}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                          style={{ background: `${event.accentColor}18`, color: event.accentColor }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3
                      style={{ color: "#2D3748", fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.02em", marginBottom: "0.2rem" }}
                    >
                      {event.title}
                    </h3>
                    <p style={{ color: event.accentColor, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.75rem" }}>
                      {event.tagline}
                    </p>
                    <p style={{ color: "#8A96A8", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                      {event.description}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
                      {[
                        { icon: <Calendar size={13} />, text: event.date },
                        { icon: <Clock size={13} />, text: event.time },
                        { icon: <MapPin size={13} />, text: event.location },
                      ].map((m) => (
                        <div key={m.text} className="flex items-center gap-1.5 text-xs" style={{ color: "#8A96A8" }}>
                          {m.icon} {m.text}
                        </div>
                      ))}
                    </div>

                    {/* Capacity bar */}
                    {spotsPercent !== null && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-1.5">
                          <p className="text-xs" style={{ color: "#8A96A8" }}>
                            <Users size={11} className="inline mr-1" />
                            {event.spotsLeft} spots remaining of {event.capacity}
                          </p>
                          <p className="text-xs font-semibold" style={{ color: event.accentColor }}>
                            {spotsPercent}% full
                          </p>
                        </div>
                        <div className="rounded-full overflow-hidden" style={{ height: "5px", background: "rgba(74,85,104,0.1)" }}>
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{ width: `${spotsPercent}%`, background: event.accentColor }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs" style={{ color: "#8A96A8" }}>Cost</p>
                      <p style={{ color: "#2D3748", fontWeight: 700, fontSize: "1.1rem" }}>{event.price}</p>
                    </div>
                    <button
                      onClick={() => toggleEvent(event.id)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                      style={
                        registered
                          ? { background: "rgba(143,168,155,0.15)", color: "#8FA89B", border: "1.5px solid #8FA89B" }
                          : { background: event.accentColor, color: "#FDFBF7" }
                      }
                    >
                      {registered ? (
                        <>
                          <Check size={14} /> Registered
                        </>
                      ) : (
                        <>
                          Sign Me Up <ArrowRight size={14} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Volunteer Launchpad */}
      <section style={{ background: "#F5F1EB" }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 mb-2">
            <Users size={15} style={{ color: "#8FA89B" }} />
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#8FA89B" }}>
              Volunteer Launchpad
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 style={{ color: "#2D3748", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.02em" }}>
                Join a Team
              </h2>
              <p style={{ color: "#8A96A8", fontSize: "0.9rem", marginTop: "0.35rem" }}>
                No experience required — just a willingness to show up consistently.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {volunteerTeams.map((team) => {
              const applied = appliedTeams.has(team.id);
              return (
                <div
                  key={team.id}
                  className="rounded-2xl p-6 flex flex-col gap-4"
                  style={{
                    background: "#FDFBF7",
                    border: "1px solid rgba(74,85,104,0.06)",
                    boxShadow: "0 2px 12px rgba(74,85,104,0.07)",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span style={{ fontSize: "1.75rem", lineHeight: 1 }}>{team.icon}</span>
                      <h3
                        style={{ color: "#2D3748", fontWeight: 700, fontSize: "1.05rem", marginTop: "0.6rem", marginBottom: "0.25rem" }}
                      >
                        {team.name}
                      </h3>
                    </div>
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: `${team.color}18`, color: team.color }}
                    >
                      {team.openRoles} open
                    </span>
                  </div>

                  <p style={{ color: "#8A96A8", fontSize: "0.875rem", lineHeight: 1.6 }}>{team.description}</p>

                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs"
                    style={{ background: "#F5F1EB", color: "#8A96A8" }}
                  >
                    <Clock size={12} style={{ color: team.color }} />
                    {team.commitment}
                  </div>

                  <button
                    onClick={() => toggleTeam(team.id)}
                    className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 hover:opacity-90 active:scale-95"
                    style={
                      applied
                        ? { background: "rgba(143,168,155,0.15)", color: "#8FA89B", border: "1.5px solid #8FA89B" }
                        : { background: team.color, color: "#FDFBF7" }
                    }
                  >
                    {applied ? (
                      <>
                        <Check size={14} /> Applied — We'll be in touch
                      </>
                    ) : (
                      <>
                        Apply to Join <ChevronRight size={14} />
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-8 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: "linear-gradient(135deg, #D98A72 0%, #C4784A 100%)",
            }}
          >
            <div>
              <h3 style={{ color: "#FDFBF7", fontWeight: 800, fontSize: "1.25rem", letterSpacing: "-0.02em", marginBottom: "0.3rem" }}>
                Not sure where you fit?
              </h3>
              <p style={{ color: "rgba(253,251,247,0.8)", fontSize: "0.875rem" }}>
                Pumunta sa Friday Night namin sa Rizal, Kapatagan. Walang pressure — just show up.
              </p>
            </div>
            <a
              href="https://www.facebook.com/KFGCYouthLifeCheck"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold flex-shrink-0 transition-all hover:gap-3 hover:opacity-90"
              style={{ background: "#FDFBF7", color: "#D98A72" }}
            >
              Reach Us on Facebook <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
