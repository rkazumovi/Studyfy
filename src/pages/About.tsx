import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import SectionContainer from "@/components/shared/SectionContainer";
import { Target, Eye, Lightbulb } from "lucide-react";

const values = [
  { icon: Target, title: "Rigorous Quality", description: "Every course is peer-reviewed by subject-matter experts to ensure accuracy and depth." },
  { icon: Eye, title: "Clarity First", description: "Complex ideas explained clearly — no jargon walls, just genuine understanding." },
  { icon: Lightbulb, title: "Practical Skills", description: "Theory meets application with hands-on projects and real-world problem solving." },
];

const About = () => (
  <Layout>
    <div className="container">
      <PageHeader title="About Studyfy" subtitle="We're on a mission to make expert-level education in science and technology accessible to everyone, everywhere." />
    </div>

    <SectionContainer className="bg-muted/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-display font-bold mb-4">Our Story</h2>
        <p className="text-muted-foreground leading-relaxed">
          Studyfy was founded by educators and engineers who saw a gap between academic knowledge and accessible online learning. 
          We bring university-caliber content to a modern, self-paced platform — so anyone with curiosity and commitment can 
          build deep expertise in mathematics, physics, programming, and engineering.
        </p>
      </div>
    </SectionContainer>

    <SectionContainer>
      <h2 className="text-2xl font-display font-bold text-center mb-10">What We Stand For</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {values.map(({ icon: Icon, title, description }) => (
          <div key={title} className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
              <Icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-display font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  </Layout>
);

export default About;
