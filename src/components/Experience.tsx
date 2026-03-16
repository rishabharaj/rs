import type { ElementType } from 'react';
import { Trophy, Phone, Monitor, Brain, Users } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

type ExpItem = {
  Icon: ElementType;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};

const SnakeNode = ({ exp }: { exp: ExpItem }) => (
  <div className="relative shrink-0">
    <div className="absolute inset-0 rounded-full bg-coral/20 blur-xl scale-150 pointer-events-none" />
    <div className="relative z-10 w-[68px] h-[68px] rounded-full bg-card border-2 border-coral shadow-[0_0_22px_hsl(var(--coral)/0.45)] flex items-center justify-center">
      <exp.Icon className="w-7 h-7 text-coral" />
    </div>
  </div>
);

const TextCard = ({ exp }: { exp: ExpItem }) => (
  <div className="w-[170px] xl:w-[182px] bg-card border border-border rounded-xl p-3 hover:border-coral/50 transition-colors shadow-sm">
    <p className="text-[10px] font-semibold text-coral uppercase tracking-wide mb-1">{exp.period}</p>
    <h3 className="text-[11px] font-bold text-foreground leading-tight mb-1.5">{exp.title}</h3>
    <p className="text-[10px] text-coral/80 font-medium leading-tight mb-1.5">{exp.company}</p>
    <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-3">{exp.description}</p>
  </div>
);

const Experience = () => {
  const experiences: ExpItem[] = [
    {
      Icon: Users,
      title: "Core Member – GDG On Campus (IET DAVV)",
      company: "Formerly GDSC",
      period: "Feb 2025 - Present",
      description: "Planning & executing tech events, workshops, and community sessions; handling technical setups and onboarding initiatives.",
      achievements: ["Community Events", "Workshops", "Technical Operations"],
    },
    {
      Icon: Trophy,
      title: "Hackathons & Competitions",
      company: "Winner & Finalist",
      period: "2023 - Present",
      description: "SIH Winner 2025 · Devcraft winner at IIT Indore · ilovehackathon Web3 winner ($300) · Finalist at Appian AI Challenge, IIT Madras (Shaastra 2025).",
      achievements: ["SIH Winner", "Devcraft Winner", "$300 Prize", "IIT Madras Finalist"],
    },
    {
      Icon: Brain,
      title: "AI/ML Internship",
      company: "AIML Lab, IET DAVV Indore",
      period: "Sep 2024 - Nov 2024",
      description: "Algorithmic trading research — built ML models for index/options signals, feature engineering, backtesting, and KiteConnect / Dhan / Kotak Neo API integration.",
      achievements: ["Algo Trading", "AI/ML Research", "API Integration", "Python"],
    },
    {
      Icon: Phone,
      title: "Call Support Assistant",
      company: "Altruist Pvt Ltd & Airtel",
      period: "Oct 2022 - Mar 2023",
      description: "Managed inbound customer calls for Airtel Broadband; sharpened communication and problem-solving in a fast-paced environment.",
      achievements: ["Customer Service", "Communication", "Technical Support"],
    },
    {
      Icon: Monitor,
      title: "Cyber Cafe Operator",
      company: "Local Cyber Cafe",
      period: "2016 - 2020",
      description: "Part-time role managing cafe operations and software; built early technical aptitude through hands-on user support.",
      achievements: ["Operations", "User Support", "Software Management"],
    },
  ];

  const nodeLeft = [12, 30, 48, 66, 84];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-headline mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey showcases diverse experiences from hackathons to customer service,
            each contributing to my growth as a developer and problem solver.
          </p>
        </div>

        {/* ============ DESKTOP SNAKE ============ */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          <div className="relative h-[560px]">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1000 560"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="snakePathBase" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--coral) / 0.22)" />
                  <stop offset="50%" stopColor="hsl(var(--coral) / 0.35)" />
                  <stop offset="100%" stopColor="hsl(var(--coral) / 0.22)" />
                </linearGradient>
                <linearGradient id="snakePathGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--coral) / 0.65)" />
                  <stop offset="50%" stopColor="hsl(var(--coral) / 0.9)" />
                  <stop offset="100%" stopColor="hsl(var(--coral) / 0.65)" />
                </linearGradient>
              </defs>
              <path
                d="M 60 205 A 80 80 0 0 1 220 205 A 80 80 0 0 0 380 205 A 80 80 0 0 1 540 205 A 80 80 0 0 0 700 205 A 80 80 0 0 1 860 205"
                fill="none"
                stroke="url(#snakePathBase)"
                strokeWidth="16"
                strokeLinecap="round"
                className="snake-path-track"
              />
              <path
                d="M 60 205 A 80 80 0 0 1 220 205 A 80 80 0 0 0 380 205 A 80 80 0 0 1 540 205 A 80 80 0 0 0 700 205 A 80 80 0 0 1 860 205"
                fill="none"
                stroke="url(#snakePathGlow)"
                strokeWidth="3"
                strokeLinecap="round"
                className="snake-path-outline"
              />
              <path
                d="M 60 205 A 80 80 0 0 1 220 205 A 80 80 0 0 0 380 205 A 80 80 0 0 1 540 205 A 80 80 0 0 0 700 205 A 80 80 0 0 1 860 205"
                fill="none"
                stroke="hsl(var(--coral) / 0.95)"
                strokeWidth="6"
                strokeLinecap="round"
                className="snake-path-flow"
              />
            </svg>

            {experiences.map((exp, index) => (
              <div
                key={`node-${index}`}
                className="absolute top-[36.6%] -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${nodeLeft[index]}%` }}
              >
                <SnakeNode exp={exp} />
              </div>
            ))}

            {experiences.map((exp, index) => {
              const isTop = index % 2 === 0;
              return (
                <div
                  key={`card-${index}`}
                  className={`absolute -translate-x-1/2 ${isTop ? 'top-[-1%]' : 'top-[50%]'}`}
                  style={{ left: `${nodeLeft[index]}%` }}
                >
                  <Reveal direction={isTop ? 'down' : 'up'} y={16}>
                    <TextCard exp={exp} />
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============ MOBILE: vertical card list ============ */}
        <div className="lg:hidden space-y-3 max-w-lg mx-auto">
          {experiences.map((exp, i) => (
            <Reveal key={i} direction="left" x={24}>
              <div className="group bg-card border border-border rounded-xl p-4 hover:border-coral/60 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-coral/10 border border-coral/30 flex items-center justify-center">
                    <exp.Icon className="w-4 h-4 text-coral" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-foreground leading-snug">{exp.title}</h3>
                    <p className="text-[11px] text-coral font-medium">{exp.company} · {exp.period}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.achievements.map((a, idx) => (
                    <span key={idx} className="text-[10px] bg-coral/10 text-coral px-2 py-0.5 rounded-full font-medium">{a}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;