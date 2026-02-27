import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with foundational content",
    features: ["5 free courses", "Community forum access", "Basic quizzes", "Mobile access"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Unlock the full learning experience",
    features: ["All 500+ courses", "Certificates of completion", "Priority support", "Offline downloads", "Advanced exercises", "Progress tracking"],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/month",
    description: "For teams and organizations",
    features: ["Everything in Pro", "Team analytics dashboard", "Custom learning paths", "Admin controls", "SSO integration", "Dedicated support"],
    cta: "Contact Sales",
    featured: false,
  },
];

const Pricing = () => (
  <Layout>
    <div className="container pb-16">
      <PageHeader title="Simple, Transparent Pricing" subtitle="Choose the plan that fits your learning goals. Upgrade, downgrade, or cancel anytime." />

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl border p-7 flex flex-col ${
              plan.featured
                ? "border-accent bg-card shadow-elevated ring-2 ring-accent/20 relative"
                : "border-border bg-card shadow-card"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-semibold bg-accent text-accent-foreground rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-lg font-bold">{plan.name}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-display font-bold">{plan.price}</span>
              <span className="text-sm text-muted-foreground">{plan.period}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
            <ul className="mt-6 space-y-3 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={plan.featured ? "accent" : "outline"}
              className="mt-8 w-full"
              size="lg"
              asChild
            >
              <Link to="/register">{plan.cta}</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Pricing;
