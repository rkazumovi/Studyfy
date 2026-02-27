import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";

const Register = () => (
  <div className="min-h-screen flex items-center justify-center bg-muted/40 px-4">
    <div className="w-full max-w-sm">
      <Link to="/" className="flex items-center justify-center gap-2 font-display text-xl font-bold mb-8">
        <BookOpen className="h-6 w-6 text-accent" />
        Studyfy
      </Link>
      <div className="bg-card rounded-xl border border-border p-7 shadow-card">
        <h1 className="text-xl font-display font-bold mb-1">Create your account</h1>
        <p className="text-sm text-muted-foreground mb-6">Start learning today — it's free</p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" className="mt-1" />
          </div>
          <Button variant="accent" className="w-full" size="lg">Create Account</Button>
        </form>
        <p className="mt-5 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-accent font-medium hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  </div>
);

export default Register;
