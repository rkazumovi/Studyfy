import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Loader2 } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/i18n/LanguageContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const { t } = useLanguage();

  if (user) {
    navigate("/dashboard", { replace: true });
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);
    if (error) {
      setError(error);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 px-4">
      <div className="w-full max-w-sm">
        <Link to="/" className="flex items-center justify-center gap-2 font-display text-xl font-bold mb-8">
          <BookOpen className="h-6 w-6 text-accent" />
          Studyfy
        </Link>
        <div className="bg-card rounded-xl border border-border p-7 shadow-card">
          <h1 className="text-xl font-display font-bold mb-1">{t("login_title")}</h1>
          <p className="text-sm text-muted-foreground mb-6">{t("login_subtitle")}</p>
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
              {error}
            </div>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email">{t("label_email")}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t("placeholder_email")}
                className="mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">{t("label_password")}</Label>
              <Input
                id="password"
                type="password"
                placeholder={t("placeholder_password")}
                className="mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <Button variant="accent" className="w-full" size="lg" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : t("login_button")}
            </Button>
          </form>
          <p className="mt-5 text-center text-sm text-muted-foreground">
            {t("login_no_account")}{" "}
            <Link to="/register" className="text-accent font-medium hover:underline">{t("login_signup_link")}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
