import { motion } from 'framer-motion';
import { SiDiscord } from 'react-icons/si';
import { 
  Terminal, 
  Zap, 
  ShieldCheck, 
  Bot, 
  Laugh,
  Users,
  Wrench,
  ExternalLink,
  ChevronRight,
  Crown,
  MessageSquare,
  Swords
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const BOT_INVITE_LINK = "https://discord.com/oauth2/authorize?client_id=1507679390979461200&permissions=0&scope=bot%20applications.commands";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const features = [
  {
    icon: Laugh,
    title: "Meme Commands",
    desc: "Instantly generate and share trending memes right inside your server. Keep the energy high with on-demand humor.",
    gradient: "from-yellow-500/20 to-orange-500/20",
    border: "hover:border-yellow-500/40",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/10",
    visual: (
      <div className="relative w-full h-36 rounded-lg overflow-hidden bg-gradient-to-br from-yellow-900/30 to-orange-900/20 flex items-center justify-center gap-3">
        {["😂", "💀", "🔥", "👀", "💯"].map((e, i) => (
          <span key={i} className="text-3xl select-none" style={{ filter: "drop-shadow(0 0 8px rgba(234,179,8,0.4))" }}>{e}</span>
        ))}
        <div className="absolute bottom-3 left-3 text-xs font-mono text-yellow-400/60">/meme • /rng • /gif</div>
      </div>
    )
  },
  {
    icon: Crown,
    title: "Role Management",
    desc: "Create beautiful self-assignable role menus with buttons and dropdowns. Assign, remove, and organize roles effortlessly.",
    gradient: "from-purple-500/20 to-indigo-500/20",
    border: "hover:border-purple-500/40",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    visual: (
      <div className="relative w-full h-36 rounded-lg overflow-hidden bg-gradient-to-br from-purple-900/30 to-indigo-900/20 p-3 flex flex-col gap-2">
        {[
          { label: "Admin", color: "bg-red-500" },
          { label: "Moderator", color: "bg-orange-500" },
          { label: "Member", color: "bg-green-500" },
        ].map((role, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${role.color}`} />
            <span className="text-xs text-white/70 font-medium">{role.label}</span>
            <div className="ml-auto text-[10px] text-purple-400/60 font-mono">self-assign</div>
          </div>
        ))}
        <div className="absolute bottom-3 right-3 text-xs font-mono text-purple-400/60">/role • /menu</div>
      </div>
    )
  },
  {
    icon: Swords,
    title: "Fun & Games",
    desc: "Trivia, duels, polls, and mini-games that keep your community engaged. Boredom is not allowed.",
    gradient: "from-green-500/20 to-teal-500/20",
    border: "hover:border-green-500/40",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10",
    visual: (
      <div className="relative w-full h-36 rounded-lg overflow-hidden bg-gradient-to-br from-green-900/30 to-teal-900/20 p-3">
        <div className="flex flex-col gap-1.5">
          <div className="text-xs text-white/50 font-mono">Trivia — Round 3/5</div>
          <div className="text-sm text-white font-semibold">What year was Discord founded?</div>
          <div className="flex gap-2 mt-1 flex-wrap">
            {["2013", "2015", "2017", "2018"].map((a, i) => (
              <span key={i} className={`px-2 py-0.5 rounded text-[11px] font-mono ${i === 1 ? "bg-green-500/30 text-green-300 border border-green-500/40" : "bg-white/5 text-white/50"}`}>{a}</span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-3 right-3 text-xs font-mono text-green-400/60">/trivia • /duel • /poll</div>
      </div>
    )
  },
  {
    icon: ShieldCheck,
    title: "Auto-Moderation",
    desc: "Spam filters, word blockers, anti-raid protection and configurable warning systems — all running 24/7.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "hover:border-blue-500/40",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    visual: (
      <div className="relative w-full h-36 rounded-lg overflow-hidden bg-gradient-to-br from-blue-900/30 to-cyan-900/20 p-3 flex flex-col gap-2">
        {[
          { event: "Spam detected", action: "Muted 10m", status: "blocked" },
          { event: "Raid attempt", action: "Anti-raid ON", status: "blocked" },
          { event: "Bad word", action: "Message deleted", status: "blocked" },
        ].map((log, i) => (
          <div key={i} className="flex items-center gap-2 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
            <span className="text-white/60 flex-1 truncate">{log.event}</span>
            <span className="text-blue-400/80 font-mono">{log.action}</span>
          </div>
        ))}
        <div className="absolute bottom-3 right-3 text-xs font-mono text-blue-400/60">/automod • /warn</div>
      </div>
    )
  },
  {
    icon: Wrench,
    title: "Server Maintenance",
    desc: "Bulk delete messages, lock channels, backup configurations, and run scheduled announcements.",
    gradient: "from-rose-500/20 to-pink-500/20",
    border: "hover:border-rose-500/40",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
    visual: (
      <div className="relative w-full h-36 rounded-lg overflow-hidden bg-gradient-to-br from-rose-900/30 to-pink-900/20 p-3 flex flex-col gap-2">
        <div className="text-xs text-white/50 font-mono mb-1">Scheduled Tasks</div>
        {[
          { task: "Clear #general", time: "Tonight 12:00 AM" },
          { task: "Unlock #news", time: "Tomorrow 9:00 AM" },
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-2 text-[11px]">
            <Terminal className="w-3 h-3 text-rose-400/60 flex-shrink-0" />
            <span className="text-white/60 flex-1">{t.task}</span>
            <span className="text-rose-400/70 font-mono text-[10px]">{t.time}</span>
          </div>
        ))}
        <div className="absolute bottom-3 right-3 text-xs font-mono text-rose-400/60">/purge • /lock • /schedule</div>
      </div>
    )
  },
  {
    icon: Users,
    title: "Admin Tools",
    desc: "Kick, ban, timeout, move — all your moderation essentials with detailed audit logs and permission controls.",
    gradient: "from-slate-500/20 to-gray-500/20",
    border: "hover:border-slate-400/40",
    iconColor: "text-slate-300",
    iconBg: "bg-slate-500/10",
    visual: (
      <div className="relative w-full h-36 rounded-lg overflow-hidden bg-gradient-to-br from-slate-900/60 to-gray-900/40 p-3 flex flex-col gap-2">
        <div className="text-xs text-white/50 font-mono mb-1">Audit Log</div>
        {[
          { action: "Banned", user: "@spamuser", by: "Admin" },
          { action: "Muted", user: "@raidbot", by: "AutoMod" },
          { action: "Role given", user: "@newmember", by: "Bot" },
        ].map((entry, i) => (
          <div key={i} className="flex items-center gap-1.5 text-[11px]">
            <MessageSquare className="w-3 h-3 text-slate-400/50 flex-shrink-0" />
            <span className="text-primary/80 font-semibold">{entry.action}</span>
            <span className="text-white/50">{entry.user}</span>
            <span className="text-white/30 ml-auto">by {entry.by}</span>
          </div>
        ))}
        <div className="absolute bottom-3 right-3 text-xs font-mono text-slate-400/60">/ban • /kick • /timeout</div>
      </div>
    )
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden selection:bg-primary/30">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-foreground font-semibold text-lg tracking-tight">
            <SiDiscord className="w-6 h-6 text-primary" />
            <span>MyOpBot</span>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 shadow-[0_0_20px_-5px_rgba(88,101,242,0.5)] transition-shadow hover:shadow-[0_0_25px_-5px_rgba(88,101,242,0.6)]"
              onClick={() => window.open(BOT_INVITE_LINK, '_blank')}
              data-testid="button-add-server-nav"
            >
              Add to Server
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              <span>Now live on Discord</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Meet{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                MyOpBot
              </span>
              <br/>for your server.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-10 max-w-2xl font-light">
              Memes, role management, fun games, and full admin control — everything your Discord community needs, in one bot.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8 shadow-[0_0_30px_-5px_rgba(88,101,242,0.4)] transition-all hover:scale-105"
                onClick={() => window.open(BOT_INVITE_LINK, '_blank')}
                data-testid="button-add-discord-hero"
              >
                <SiDiscord className="w-5 h-5 mr-2" />
                Add to Discord
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-white/10 hover:bg-white/5 h-14 px-8 text-lg"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-view-features"
              >
                View Features
                <ChevronRight className="w-5 h-5 ml-2 text-muted-foreground" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 md:py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for every server.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From chaos control to good vibes — MyOpBot handles it all.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Card className={`p-6 bg-card border-white/10 ${feat.border} transition-all group h-full flex flex-col gap-4`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${feat.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <feat.icon className={`w-5 h-5 ${feat.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{feat.title}</h3>
                  </div>
                  {feat.visual}
                  <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative border-t border-white/5">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Bot className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to level up your server?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light">
            Add MyOpBot in seconds and give your community the tools they deserve.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white text-xl h-16 px-10 shadow-[0_0_40px_-10px_rgba(88,101,242,0.6)] hover:scale-105 transition-all"
            onClick={() => window.open(BOT_INVITE_LINK, '_blank')}
            data-testid="button-add-server-cta"
          >
            <SiDiscord className="w-6 h-6 mr-3" />
            Add MyOpBot — It's Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-foreground font-semibold">
            <SiDiscord className="w-5 h-5 text-primary" />
            <span>MyOpBot</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Muddaka Prasanth. Built with craft.
          </p>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground gap-2"
            onClick={() => window.open(BOT_INVITE_LINK, '_blank')}
            data-testid="button-invite-footer"
          >
            <ExternalLink className="w-4 h-4" />
            Invite Link
          </Button>
        </div>
      </footer>
    </div>
  );
}
