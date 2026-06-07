import { useState } from "react";
import { Play, Headphones, BookOpen, ExternalLink, Clock, Music } from "lucide-react";

const playlists = [
  {
    id: 1,
    title: "Friday Night Energy",
    description: "The playlist we warm up with every week. Bangers only.",
    tracks: 24,
    duration: "1h 32m",
    mood: "Hype",
    moodColor: "#D98A72",
    cover: "linear-gradient(135deg, #D98A72 0%, #C4A882 100%)",
    spotifyUrl: "#",
  },
  {
    id: 2,
    title: "Still & Steady",
    description: "Slow it down. Songs for quiet mornings and hard nights.",
    tracks: 18,
    duration: "1h 8m",
    mood: "Chill",
    moodColor: "#8FA89B",
    cover: "linear-gradient(135deg, #8FA89B 0%, #7B9B8C 100%)",
    spotifyUrl: "#",
  },
  {
    id: 3,
    title: "New Sounds We Love",
    description: "Fresh drops from artists on our rotation this month.",
    tracks: 31,
    duration: "2h 5m",
    mood: "Fresh",
    moodColor: "#7B8EAD",
    cover: "linear-gradient(135deg, #7B8EAD 0%, #5D7A9F 100%)",
    spotifyUrl: "#",
  },
];

const podcasts = [
  {
    id: 1,
    title: "Mental Health at Pananampalataya: Usapang Totoo",
    description: "Isang bukas na usapan tungkol sa anxiety, burnout, at kung paano humingi ng tulong bilang Kristiyano.",
    type: "Podcast",
    duration: "38 min",
    date: "Mayo 28, 2024",
    img: "https://images.unsplash.com/photo-1769754710715-4202beb4d87c?w=120&h=120&fit=crop&auto=format",
    tag: "Mental Health",
    tagColor: "#7B8EAD",
  },
  {
    id: 2,
    title: "Identity: Sino Ka Nang Walang Nakakakita?",
    description: "Ano ang ibig sabihin ng malaman kung sino ka talaga — lampas sa inaasahan ng iba.",
    type: "Blog",
    duration: "6 min read",
    date: "Hunyo 3, 2024",
    img: "https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?w=120&h=120&fit=crop&auto=format",
    tag: "Identity",
    tagColor: "#D98A72",
  },
  {
    id: 3,
    title: "Peer Pressure at Pakikisama: Paano Mag-navigate?",
    description: "Tatlong YFC leaders ang nagbahagi ng kanilang karanasan at mga leksyon sa pakikipagkaibigan.",
    type: "Podcast",
    duration: "44 min",
    date: "Mayo 19, 2024",
    img: "https://images.unsplash.com/photo-1559924835-8393ef3ba676?w=120&h=120&fit=crop&auto=format",
    tag: "Relasyon",
    tagColor: "#8FA89B",
  },
  {
    id: 4,
    title: "Pag ang Pananampalataya ay Parang Tuyo",
    description: "Minsan mahirap maramdaman ang Diyos. Hindi ibig sabihin may mali sa iyo.",
    type: "Blog",
    duration: "4 min read",
    date: "Hunyo 10, 2024",
    img: "https://images.unsplash.com/photo-1769754710715-4202beb4d87c?w=120&h=120&fit=crop&auto=format",
    tag: "Pananampalataya",
    tagColor: "#C4A882",
  },
];

const videos = [
  {
    id: 1,
    title: "Worship Night: Hunyo Edition — Kapatagan",
    thumb: "https://images.unsplash.com/photo-1562663963-5a4803638590?w=480&h=270&fit=crop&auto=format",
    duration: "12:44",
    date: "Hunyo 7, 2024",
    views: "1.2k",
  },
  {
    id: 2,
    title: "YFC Leaders Panel: Sinasagot ang Inyong mga Tanong",
    thumb: "https://images.unsplash.com/photo-1780404869811-88e3b863a217?w=480&h=270&fit=crop&auto=format",
    duration: "28:10",
    date: "Mayo 31, 2024",
    views: "874",
  },
  {
    id: 3,
    title: "Camp 2024 Recap — Buong Highlights",
    thumb: "https://images.unsplash.com/photo-1573111651692-39ec7f38fec9?w=480&h=270&fit=crop&auto=format",
    duration: "5:22",
    date: "Mayo 20, 2024",
    views: "3.1k",
  },
  {
    id: 4,
    title: "Ang Usapan: Purity, Pag-ibig, at Pananampalataya",
    thumb: "https://images.unsplash.com/photo-1778911033724-77e1397a1b87?w=480&h=270&fit=crop&auto=format",
    duration: "19:50",
    date: "Mayo 14, 2024",
    views: "2.4k",
  },
  {
    id: 5,
    title: "Bayanihan Community Day Vlog — Kapatagan",
    thumb: "https://images.unsplash.com/photo-1758599668299-beebedfabf7b?w=480&h=270&fit=crop&auto=format",
    duration: "7:08",
    date: "Mayo 5, 2024",
    views: "651",
  },
  {
    id: 6,
    title: "Friday Night Snippet: Paano Harapin ang Comparison",
    thumb: "https://images.unsplash.com/photo-1707451773662-af70a3296cbb?w=480&h=270&fit=crop&auto=format",
    duration: "3:15",
    date: "Abr 28, 2024",
    views: "920",
  },
];

const tabs = ["All", "Podcasts", "Blogs"] as const;
type Tab = (typeof tabs)[number];

export function MediaPage() {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [playingPlaylist, setPlayingPlaylist] = useState<number | null>(null);

  const filteredContent = podcasts.filter((p) => {
    if (activeTab === "All") return true;
    if (activeTab === "Podcasts") return p.type === "Podcast";
    return p.type === "Blog";
  });

  return (
    <div>
      {/* Page Header */}
      <section
        className="border-b"
        style={{ background: "linear-gradient(to bottom, #F0EBE3, #FDFBF7)", borderColor: "rgba(74,85,104,0.08)", paddingTop: "4rem", paddingBottom: "4rem" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#8FA89B" }}>Media & Culture</p>
          <h1
            style={{ color: "#2D3748", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", marginBottom: "0.75rem" }}
          >
            What We're Into
          </h1>
          <p style={{ color: "#8A96A8", fontSize: "1rem", maxWidth: "520px" }}>
            Playlists, podcasts, reflections, and videos from the community — curated for the moments between Sunday and Saturday.
          </p>
        </div>
      </section>

      {/* Spotify Playlists */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 mb-2">
          <Music size={15} style={{ color: "#8FA89B" }} />
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#8FA89B" }}>Spotify Playlists</p>
        </div>
        <h2 style={{ color: "#2D3748", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
          Current Rotation
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {playlists.map((pl) => (
            <div
              key={pl.id}
              className="rounded-2xl overflow-hidden transition-transform duration-200 hover:-translate-y-1"
              style={{ background: "#FDFBF7", boxShadow: "0 2px 16px rgba(74,85,104,0.08)", border: "1px solid rgba(74,85,104,0.06)" }}
            >
              {/* Cover */}
              <div
                className="relative flex items-center justify-center"
                style={{ background: pl.cover, height: "140px" }}
              >
                <button
                  onClick={() => setPlayingPlaylist(pl.id === playingPlaylist ? null : pl.id)}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                  style={{ background: "rgba(253,251,247,0.25)", backdropFilter: "blur(8px)" }}
                >
                  {playingPlaylist === pl.id ? (
                    <div className="flex gap-0.5 items-end h-5">
                      {[4, 7, 5, 8, 3].map((h, i) => (
                        <div
                          key={i}
                          className="w-1 rounded-sm"
                          style={{ height: `${h * 2}px`, background: "#FDFBF7", animation: `bounce 0.${i + 4}s infinite alternate` }}
                        />
                      ))}
                    </div>
                  ) : (
                    <Play size={18} fill="#FDFBF7" style={{ color: "#FDFBF7", marginLeft: "2px" }} />
                  )}
                </button>
                <span
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(253,251,247,0.25)", color: "#FDFBF7", backdropFilter: "blur(4px)" }}
                >
                  {pl.mood}
                </span>
              </div>
              {/* Info */}
              <div className="p-5">
                <h3 style={{ color: "#2D3748", fontWeight: 700, fontSize: "1rem", marginBottom: "0.3rem" }}>{pl.title}</h3>
                <p style={{ color: "#8A96A8", fontSize: "0.8rem", lineHeight: 1.5, marginBottom: "1rem" }}>{pl.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs" style={{ color: "#8A96A8" }}>
                    <span>{pl.tracks} tracks</span>
                    <span style={{ color: "rgba(74,85,104,0.2)" }}>·</span>
                    <span>{pl.duration}</span>
                  </div>
                  <a
                    href={pl.spotifyUrl}
                    className="text-xs font-semibold flex items-center gap-1 hover:opacity-70 transition-opacity"
                    style={{ color: "#1DB954" }}
                  >
                    Open <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Podcast & Blog List */}
      <section style={{ background: "#F5F1EB" }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 mb-2">
            <Headphones size={15} style={{ color: "#D98A72" }} />
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#D98A72" }}>Podcast & Blog</p>
          </div>
          <div className="flex items-end justify-between mb-6">
            <h2 style={{ color: "#2D3748", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.02em" }}>
              Recent Content
            </h2>
            {/* Tabs */}
            <div
              className="flex gap-1 p-1 rounded-full"
              style={{ background: "rgba(74,85,104,0.08)" }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                  style={
                    activeTab === tab
                      ? { background: "#FDFBF7", color: "#2D3748", boxShadow: "0 1px 4px rgba(74,85,104,0.12)" }
                      : { color: "#8A96A8" }
                  }
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {filteredContent.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-2xl p-4 group cursor-pointer hover:shadow-md transition-shadow duration-200"
                style={{ background: "#FDFBF7", border: "1px solid rgba(74,85,104,0.06)" }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 object-cover flex-shrink-0"
                  style={{ borderRadius: "12px" }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-semibold"
                      style={{ background: `${item.tagColor}18`, color: item.tagColor }}
                    >
                      {item.tag}
                    </span>
                    <span className="text-xs" style={{ color: "#8A96A8" }}>
                      {item.type === "Podcast" ? <Headphones size={11} className="inline" /> : <BookOpen size={11} className="inline" />}
                      {" "}{item.type}
                    </span>
                  </div>
                  <h3
                    className="font-semibold leading-snug mb-1 group-hover:opacity-70 transition-opacity"
                    style={{ color: "#2D3748", fontSize: "0.95rem" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "#8A96A8", fontSize: "0.8rem", lineHeight: 1.4 }}>{item.description}</p>
                </div>
                <div className="flex flex-col items-end justify-between flex-shrink-0">
                  <button
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                    style={{ background: "rgba(74,85,104,0.07)", color: "#4A5568" }}
                  >
                    {item.type === "Podcast" ? <Play size={14} fill="currentColor" style={{ marginLeft: "1px" }} /> : <ExternalLink size={13} />}
                  </button>
                  <div className="flex items-center gap-1 text-xs" style={{ color: "#8A96A8" }}>
                    <Clock size={11} />
                    {item.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Archive */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 mb-2">
          <Play size={15} style={{ color: "#8FA89B" }} />
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#8FA89B" }}>Short-Form Video</p>
        </div>
        <h2 style={{ color: "#2D3748", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
          Video Archive
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((vid) => (
            <div
              key={vid.id}
              className="group rounded-2xl overflow-hidden cursor-pointer transition-transform duration-200 hover:-translate-y-1"
              style={{ background: "#FDFBF7", boxShadow: "0 2px 16px rgba(74,85,104,0.08)", border: "1px solid rgba(74,85,104,0.06)" }}
            >
              <div className="relative" style={{ aspectRatio: "16/9" }}>
                <img
                  src={vid.thumb}
                  alt={vid.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: "rgba(45,55,72,0.35)" }}>
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(253,251,247,0.9)" }}
                  >
                    <Play size={16} fill="#2D3748" style={{ color: "#2D3748", marginLeft: "2px" }} />
                  </div>
                </div>
                <span
                  className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-xs font-semibold"
                  style={{ background: "rgba(0,0,0,0.65)", color: "#FDFBF7" }}
                >
                  {vid.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 style={{ color: "#2D3748", fontWeight: 600, fontSize: "0.9rem", lineHeight: 1.4, marginBottom: "0.4rem" }}>
                  {vid.title}
                </h3>
                <div className="flex items-center gap-3 text-xs" style={{ color: "#8A96A8" }}>
                  <span>{vid.date}</span>
                  <span style={{ color: "rgba(74,85,104,0.2)" }}>·</span>
                  <span>{vid.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
