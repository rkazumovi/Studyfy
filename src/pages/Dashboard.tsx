import Layout from "@/components/layout/Layout";
import { BookOpen, Clock, Award, TrendingUp } from "lucide-react";

const dashboardCards = [
  { icon: BookOpen, label: "Enrolled Courses", value: "4", color: "text-accent" },
  { icon: Clock, label: "Hours Studied", value: "38", color: "text-studyfy-info" },
  { icon: Award, label: "Certificates", value: "1", color: "text-studyfy-warning" },
  { icon: TrendingUp, label: "Completion", value: "65%", color: "text-studyfy-success" },
];

const Dashboard = () => (
  <Layout hideFooter>
    <div className="container py-10">
      <h1 className="text-2xl md:text-3xl font-display font-bold mb-1">Welcome back!</h1>
      <p className="text-muted-foreground mb-8">Continue where you left off.</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {dashboardCards.map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="rounded-xl border border-border bg-card p-5 shadow-card">
            <Icon className={`h-5 w-5 ${color} mb-3`} />
            <div className="text-2xl font-display font-bold">{value}</div>
            <div className="text-sm text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>

      <h2 className="font-display font-semibold mb-4">My Courses</h2>
      <div className="space-y-3">
        {["Calculus I: Limits, Derivatives & Integrals", "Python for Data Science & Machine Learning"].map((title) => (
          <div key={title} className="flex items-center justify-between p-4 rounded-xl border border-border bg-card shadow-card">
            <div>
              <h3 className="font-medium text-sm">{title}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">In progress</p>
            </div>
            <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-accent rounded-full" style={{ width: title.includes("Calculus") ? "72%" : "34%" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Dashboard;
