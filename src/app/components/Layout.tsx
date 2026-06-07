import { useState } from "react";
import { NavLink, Link } from "react-router";
import { Menu, X, Heart, MapPin } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Media & Culture", to: "/media" },
  { label: "Events", to: "/events" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ background: "rgba(253,251,247,0.92)", backdropFilter: "blur(12px)", borderColor: "rgba(74,85,104,0.10)" }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #8FA89B 0%, #D98A72 100%)" }}
            >
              <span style={{ color: "#FDFBF7", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "-0.02em" }}>YFC</span>
            </div>
            <div>
              <span style={{ color: "#4A5568", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "-0.01em" }}>
                YFC
              </span>
              <span style={{ color: "#8A96A8", fontWeight: 400, fontSize: "0.75rem", marginLeft: "6px" }}>Youth Life Check</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                    isActive
                      ? "text-white"
                      : "hover:bg-secondary"
                  }`
                }
                style={({ isActive }) =>
                  isActive
                    ? { background: "#8FA89B", color: "#FDFBF7" }
                    : { color: "#4A5568" }
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="#join"
              className="ml-3 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ background: "#D98A72", color: "#FDFBF7" }}
            >
              Join Us
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#4A5568" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t px-6 py-4 flex flex-col gap-2" style={{ borderColor: "rgba(74,85,104,0.10)", background: "#FDFBF7" }}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive ? "text-white" : ""
                  }`
                }
                style={({ isActive }) =>
                  isActive ? { background: "#8FA89B", color: "#FDFBF7" } : { color: "#4A5568" }
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="#join"
              onClick={() => setMenuOpen(false)}
              className="mt-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-center"
              style={{ background: "#D98A72", color: "#FDFBF7" }}
            >
              Join Us
            </a>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t mt-20" style={{ borderColor: "rgba(74,85,104,0.10)", background: "#F0EBE3" }}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #8FA89B 0%, #D98A72 100%)" }}
                >
                  <span style={{ color: "#FDFBF7", fontSize: "0.5rem", fontWeight: 800, letterSpacing: "-0.02em" }}>YFC</span>
                </div>
                <div>
                <span style={{ color: "#4A5568", fontWeight: 700, fontSize: "0.95rem" }}>YFC</span>
                <span style={{ color: "#8A96A8", fontWeight: 400, fontSize: "0.7rem", marginLeft: "5px" }}>Youth Life Check</span>
              </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#8A96A8" }}>
                Life checkers. Soul winners. Worshippers.
              </p>
              <p className="text-xs mt-2 leading-relaxed flex items-start gap-1.5" style={{ color: "#8A96A8" }}>
                <MapPin size={11} style={{ marginTop: "2px", flexShrink: 0, color: "#D98A72" }} />
                Rizal, Kapatagan, Lanao del Norte, Philippines
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#8A96A8" }}>Pages</p>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ color: "#4A5568" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#8A96A8" }}>Connect</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Facebook", href: "https://www.facebook.com/KFGCYouthLifeCheck" },
                  { label: "Instagram", href: "#" },
                  { label: "Spotify", href: "#" },
                  { label: "YouTube", href: "#" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-70 transition-opacity" style={{ color: "#4A5568" }}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(74,85,104,0.10)" }}>
            <p className="text-xs" style={{ color: "#8A96A8" }}>© 2024 YFC · Youth Life Check · Rizal, Kapatagan, Philippines. All rights reserved.</p>
            <p className="text-xs flex items-center gap-1" style={{ color: "#8A96A8" }}>
              Made with <Heart size={11} style={{ color: "#D98A72" }} fill="#D98A72" /> for the next generation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
