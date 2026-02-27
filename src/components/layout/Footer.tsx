import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-muted/40">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-foreground mb-3">
            <BookOpen className="h-5 w-5 text-accent" />
            Studyfy
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Master mathematics, physics, programming, and more — from beginner to advanced.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold mb-3">Platform</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/courses" className="hover:text-foreground transition-colors">Browse Courses</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
            <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold mb-3">Subjects</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><span className="hover:text-foreground transition-colors cursor-default">Mathematics</span></li>
            <li><span className="hover:text-foreground transition-colors cursor-default">Physics</span></li>
            <li><span className="hover:text-foreground transition-colors cursor-default">Programming</span></li>
            <li><span className="hover:text-foreground transition-colors cursor-default">Engineering</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><span className="hover:text-foreground transition-colors cursor-default">Careers</span></li>
            <li><span className="hover:text-foreground transition-colors cursor-default">Blog</span></li>
            <li><span className="hover:text-foreground transition-colors cursor-default">Privacy Policy</span></li>
            <li><span className="hover:text-foreground transition-colors cursor-default">Terms of Service</span></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Studyfy. All rights reserved.</p>
        <div className="flex gap-4">
          {["Twitter", "LinkedIn", "GitHub"].map((social) => (
            <span key={social} className="text-xs text-muted-foreground hover:text-foreground cursor-default transition-colors">
              {social}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
