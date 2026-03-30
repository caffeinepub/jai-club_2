import {
  BarChart2,
  Calendar,
  ChevronRight,
  DollarSign,
  Facebook,
  HeadphonesIcon,
  Instagram,
  Menu,
  ShieldCheck,
  TrendingUp,
  Twitter,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-to-play" },
  { label: "Features", href: "#features" },
  { label: "Register", href: "#affiliate" },
];

const FEATURES = [
  {
    icon: Zap,
    title: "Instant Payouts",
    desc: "Get your winnings credited to your account in seconds. No delays, no waiting — just instant rewards.",
  },
  {
    icon: TrendingUp,
    title: "High Win Rate",
    desc: "Our color prediction algorithm offers some of the highest win rates in the industry.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    desc: "Our dedicated support team is available around the clock to help you with any questions.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    desc: "Bank-grade encryption and security protocols protect your account and transactions at all times.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Register & Verify",
    desc: "Create your free account in under 2 minutes. Complete a quick identity verification to unlock all features.",
  },
  {
    num: "02",
    title: "Predict the Color",
    desc: "Choose from Red, Green, or Violet in each round. Use our analytics tools to make smarter predictions.",
  },
  {
    num: "03",
    title: "Collect Your Winnings",
    desc: "Win up to 9x your bet on correct predictions. Withdraw your winnings instantly to your preferred wallet.",
  },
];

const BENEFITS = [
  {
    icon: DollarSign,
    title: "Up to 40% Commission",
    desc: "Earn industry-leading commissions on every referral. The more players you bring, the more you earn.",
  },
  {
    icon: BarChart2,
    title: "Real-Time Analytics",
    desc: "Access a comprehensive dashboard with live stats, click tracking, and conversion data for all your links.",
  },
  {
    icon: Calendar,
    title: "Weekly Payouts",
    desc: "Reliable weekly commission payments directly to your account. Never miss a payday.",
  },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: "oklch(0.12 0.01 240)" }}
    >
      {/* STICKY NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[oklch(0.12_0.01_240/0.97)] shadow-lg backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand */}
            <button
              type="button"
              className="flex items-center gap-1 shrink-0"
              onClick={() => scrollTo("#home")}
            >
              <span className="text-xl md:text-2xl font-black uppercase tracking-wider text-gold">
                JAI
              </span>
              <span className="text-xl md:text-2xl font-black uppercase tracking-wider text-white">
                CLUB
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((l) => (
                <button
                  type="button"
                  key={l.label}
                  data-ocid="nav.link"
                  onClick={() => scrollTo(l.href)}
                  className="text-sm font-semibold uppercase tracking-wider text-wingo-muted hover:text-white transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                data-ocid="nav.secondary_button"
                className="px-5 py-2 text-sm font-bold uppercase tracking-wider border border-wingo-muted/40 rounded-full text-wingo-muted hover:text-white hover:border-white transition-colors"
              >
                Log In
              </button>
              <button
                type="button"
                data-ocid="nav.primary_button"
                className="px-6 py-2 text-sm font-black uppercase tracking-wider rounded-full text-white gradient-cta glow-red hover:opacity-90 transition-opacity"
              >
                JOIN NOW
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-ocid="nav.toggle"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-[oklch(0.14_0.01_240)] border-t border-border px-4 py-4 space-y-4"
            >
              {NAV_LINKS.map((l) => (
                <button
                  type="button"
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="block w-full text-left text-sm font-semibold uppercase tracking-wider text-wingo-muted hover:text-white transition-colors py-1"
                >
                  {l.label}
                </button>
              ))}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  className="flex-1 py-2 text-sm font-bold uppercase border border-wingo-muted/40 rounded-full text-wingo-muted"
                >
                  Log In
                </button>
                <button
                  type="button"
                  className="flex-1 py-2 text-sm font-black uppercase rounded-full text-white gradient-cta"
                >
                  JOIN NOW
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden gradient-hero-bg"
      >
        {/* Decorative orbs */}
        <div
          className="absolute top-1/4 left-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "oklch(0.72 0.18 52)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "oklch(0.58 0.23 25)" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <div className="inline-block mb-4 px-4 py-1 rounded-full border border-wingo-gold/30 text-wingo-gold text-xs font-bold uppercase tracking-widest">
                🏆 #1 Color Prediction Affiliate
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-tight tracking-tight mb-6">
                <span className="text-white">PREDICT.</span>
                <br />
                <span className="text-gold">WIN.</span>
                <br />
                <span className="text-white">EARN </span>
                <span className="text-gold">BIG</span>
                <br />
                <span className="text-white">WITH </span>
                <span className="text-gold">JAI CLUB</span>
              </h1>
              <p className="text-wingo-muted text-lg font-medium leading-relaxed mb-4 max-w-xl">
                The most rewarding color prediction game platform. Predict,
                play, and profit while earning up to{" "}
                <span className="text-gold font-bold">
                  40% affiliate commissions
                </span>
                .
              </p>
              <p className="text-wingo-muted/70 text-sm mb-8 max-w-lg">
                Join over 500,000 players worldwide. Real-time results, instant
                payouts, and the industry's highest win rates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  type="button"
                  data-ocid="hero.primary_button"
                  className="px-8 py-4 text-base font-black uppercase tracking-wider rounded-full text-white gradient-cta glow-red hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  START PLAYING & SIGN UP
                  <ChevronRight size={18} />
                </button>
                <button
                  type="button"
                  data-ocid="hero.secondary_button"
                  onClick={() => scrollTo("#how-to-play")}
                  className="px-8 py-4 text-base font-bold uppercase tracking-wider rounded-full border border-wingo-gold/50 text-wingo-gold hover:bg-wingo-gold/10 transition-colors"
                >
                  Learn More
                </button>
              </div>

              {/* Stats row */}
              <div className="flex gap-8 justify-center lg:justify-start mt-10">
                {[
                  { value: "500K+", label: "Players" },
                  { value: "40%", label: "Commission" },
                  { value: "9×", label: "Max Win" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-black text-gold">
                      {s.value}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-wingo-muted">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Game mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center lg:justify-end relative"
            >
              <div className="relative">
                {/* Glow behind image */}
                <div
                  className="absolute inset-0 blur-3xl opacity-30 rounded-3xl"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.18 52), oklch(0.58 0.23 25))",
                  }}
                />
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <img
                    src="/assets/generated/wingo-game-mockup.dim_600x700.png"
                    alt="Jai Club Game Interface"
                    className="w-72 sm:w-80 lg:w-96 xl:w-[420px] object-contain drop-shadow-2xl"
                    style={{
                      filter:
                        "drop-shadow(0 0 40px oklch(0.72 0.18 52 / 0.4)) drop-shadow(0 0 80px oklch(0.58 0.23 25 / 0.2))",
                      transform: "rotate(-4deg)",
                    }}
                  />
                </motion.div>

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-4 -left-8 bg-[oklch(0.16_0.012_240)] card-glow rounded-2xl px-4 py-2 text-sm font-black text-gold"
                >
                  🟢 +9× WIN!
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-4 -right-4 bg-[oklch(0.16_0.012_240)] card-glow rounded-2xl px-4 py-2 text-sm font-black text-white"
                >
                  💰 $2,450 Earned
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY JAI CLUB */}
      <section id="features" className="bg-dark-panel py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              <span className="text-white">WHY </span>
              <span className="text-gold">JAI CLUB</span>
              <span className="text-white">?</span>
            </h2>
            <p className="text-wingo-muted text-lg max-w-2xl mx-auto">
              We've built the ultimate platform for color prediction enthusiasts
              and affiliates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`features.item.${i + 1}`}
                className="text-center group"
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 group-hover:scale-110 transition-transform"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.18 52 / 0.15), oklch(0.58 0.23 25 / 0.1))",
                    border: "1px solid oklch(0.72 0.18 52 / 0.3)",
                  }}
                >
                  <f.icon size={28} className="text-gold" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-wide text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-wingo-muted text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO PLAY */}
      <section
        id="how-to-play"
        className="py-20 md:py-28"
        style={{ background: "oklch(0.12 0.01 240)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              <span className="text-white">HOW TO </span>
              <span className="text-gold">PLAY</span>
            </h2>
            <p className="text-wingo-muted text-lg max-w-2xl mx-auto">
              Get started in minutes. It's simple, fast, and incredibly
              rewarding.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                data-ocid={`steps.item.${i + 1}`}
                className="relative bg-dark-panel rounded-2xl p-8 card-glow hover:shadow-gold transition-shadow"
              >
                <div
                  className="text-5xl font-black mb-4 bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, oklch(0.72 0.18 52), oklch(0.58 0.23 25))",
                  }}
                >
                  {s.num}
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-wingo-muted text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AFFILIATE BENEFITS */}
      <section id="affiliate" className="bg-dark-panel py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4">
              <span className="text-gold">AFFILIATE </span>
              <span className="text-white">BENEFITS</span>
            </h2>
            <p className="text-wingo-muted text-lg max-w-2xl mx-auto">
              Turn your audience into a revenue stream with our industry-leading
              affiliate program.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`affiliate.item.${i + 1}`}
                className="bg-[oklch(0.12_0.01_240)] rounded-2xl p-8 card-glow hover:shadow-gold transition-shadow flex flex-col items-center text-center"
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.18 52 / 0.2), oklch(0.58 0.23 25 / 0.1))",
                    border: "1px solid oklch(0.72 0.18 52 / 0.4)",
                  }}
                >
                  <b.icon size={28} className="text-gold" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide text-white mb-3">
                  {b.title}
                </h3>
                <p className="text-wingo-muted text-sm leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Affiliate CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div
              className="inline-block rounded-3xl p-px"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.72 0.18 52), oklch(0.58 0.23 25))",
              }}
            >
              <div className="bg-[oklch(0.14_0.01_240)] rounded-3xl px-8 sm:px-16 py-10 sm:py-12">
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
                  Ready to Start <span className="text-gold">Earning?</span>
                </h3>
                <p className="text-wingo-muted mb-8 max-w-lg mx-auto">
                  Join thousands of affiliates already earning passive income
                  with Jai Club.
                </p>
                <button
                  type="button"
                  data-ocid="affiliate.primary_button"
                  className="px-10 py-4 text-base font-black uppercase tracking-wider rounded-full text-white gradient-cta glow-red hover:opacity-90 transition-all"
                >
                  BECOME AN AFFILIATE TODAY
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="border-t border-border"
        style={{ background: "oklch(0.10 0.005 240)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {/* Brand col */}
            <div>
              <div className="flex items-center gap-1 mb-4">
                <span className="text-2xl font-black uppercase text-gold">
                  JAI
                </span>
                <span className="text-2xl font-black uppercase text-white">
                  CLUB
                </span>
              </div>
              <p className="text-wingo-muted text-sm leading-relaxed mb-6">
                The premier color prediction game affiliate platform. Predict.
                Win. Earn.
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Youtube, label: "YouTube" },
                  { Icon: Facebook, label: "Facebook" },
                ].map(({ Icon, label }) => (
                  <button
                    type="button"
                    key={label}
                    aria-label={label}
                    className="w-9 h-9 rounded-full flex items-center justify-center border border-border text-wingo-muted hover:text-gold hover:border-wingo-gold transition-colors"
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "#home" },
                  { label: "How It Works", href: "#how-to-play" },
                  { label: "Features", href: "#features" },
                  { label: "Affiliate Program", href: "#affiliate" },
                ].map((l) => (
                  <li key={l.label}>
                    <button
                      type="button"
                      onClick={() => scrollTo(l.href)}
                      className="text-sm text-wingo-muted hover:text-gold transition-colors"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-white mb-4">
                Disclaimer
              </h4>
              <p className="text-wingo-muted/70 text-xs leading-relaxed">
                Jai Club is an affiliate marketing platform for color prediction
                games. Participation involves financial risk. Please play
                responsibly. This platform is intended for users 18+ only. Check
                your local laws regarding online gaming before participating.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-wingo-muted/60 text-xs">
              © {new Date().getFullYear()} Jai Club. All rights reserved.
            </p>
            <p className="text-wingo-muted/40 text-xs">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-wingo-muted transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
