"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import {
  AISkillVerificationVisual,
  SemanticMatchVisual,
  GrowthReportVisual,
  CareerPathVisual,
  BiasFreeSalaryVisual,
} from "@/components/features";

const features = [
  {
    id: "ai-skill-verification",
    number: "01",
    title: "AI Skill Verification",
    tagline: "Show what you can do, not just what you claim",
    description:
      "Adaptive micro-challenges that verify actual skills in real-time. Our AI evaluates code quality, logic flow, and problem-solving approach—not just correct answers.",
    visual: <AISkillVerificationVisual />,
  },
  {
    id: "semantic-matching",
    number: "02",
    title: "Semantic AI Matching",
    tagline: "Beyond keyword matching to true compatibility",
    description:
      "Multi-dimensional analysis that maps skills, culture fit, salary alignment, and growth potential. We match problem-solving styles to team DNA.",
    visual: <SemanticMatchVisual />,
  },
  {
    id: "glass-box-feedback",
    number: "03",
    title: "Glass Box Feedback",
    tagline: "Every candidate gets value, even if not hired",
    description:
      "No more ghosting. Our AI generates personalized Growth Reports explaining exactly why you weren't a match and how to improve.",
    featured: true,
    visual: <GrowthReportVisual />,
  },
  {
    id: "career-path-guidance",
    number: "04",
    title: "AI Career Path Guidance",
    tagline: "Your personal career strategist",
    description:
      "See your potential trajectories based on current skills. Identify exact gaps to bridge and get matched to opportunities that accelerate your growth.",
    visual: <CareerPathVisual />,
  },
  {
    id: "bias-free-salary",
    number: "05",
    title: "Bias-Free + Salary Intelligence",
    tagline: "Merit is the only metric",
    description:
      "Anonymous profiles ensure fair evaluation. Real-time salary data helps both sides align expectations before the first conversation.",
    visual: <BiasFreeSalaryVisual />,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 relative">
      <Container>
        {/* Editorial Header */}
        <div className="max-w-4xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="caption text-stone inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-accent" />
              AI-Powered Features
            </span>
            <h2 className="font-display heading-1 text-ink mb-5">
              Recruitment{" "}
              <span className="text-accent-gradient">Reimagined</span>
            </h2>
            <p className="body-md text-stone max-w-2xl">
              Five AI-driven pillars that transform how talent meets opportunity—with
              transparency, verified skills, and genuine value for everyone.
            </p>
          </motion.div>
        </div>

        {/* Feature Stories */}
        <div className="space-y-16 lg:space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content Side */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} lg:sticky lg:top-32`}>
                {/* Editorial Number */}
                <span className="font-display text-6xl lg:text-7xl text-mist italic block mb-3">
                  {feature.number}
                </span>

                <span className="caption text-accent mb-3 block">{feature.tagline}</span>

                <h3 className="font-display heading-2 text-ink mb-4">
                  {feature.title}
                </h3>

                <p className="body-md text-stone leading-relaxed max-w-md">
                  {feature.description}
                </p>

                {/* Rule line */}
                <div className="rule-line-accent mt-6" />
              </div>

              {/* Visual Side */}
              <div
                className={`${index % 2 === 1 ? "lg:col-start-1" : ""} ${
                  feature.featured ? "card-featured p-5 lg:p-6" : ""
                }`}
              >
                {feature.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
