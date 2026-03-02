import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X, Globe, LogOut, User, ChevronDown, Sun, Moon, Monitor } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/hooks/useTheme";
import { languageNames, Language } from "@/i18n/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ThemeIcon = ({ theme }: { theme: string }) => {
  if (theme === "dark") return <Moon className="h-4 w-4" />;
  if (theme === "system") return <Monitor className="h-4 w-4" />;
  return <Sun className="h-4 w-4" />;
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { label: t("nav_courses"), href: "/courses" },
    { label: t("nav_subjects"), href: "/subjects" },
    { label: t("nav_pricing"), href: "/pricing" },
    { label: t("nav_about"), href: "/about" },
  ];

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 glass">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
          <BookOpen className="h-6 w-6 text-accent" />
          Studyfy
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === link.href
                  ? "text-accent bg-accent/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {user && (
            <Link
              to="/dashboard"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === "/dashboard"
                  ? "text-accent bg-accent/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {t("nav_dashboard")}
            </Link>
          )}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          {/* Theme toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                <ThemeIcon theme={theme} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")} className={theme === "light" ? "bg-accent/10 text-accent" : ""}>
                <Sun className="h-4 w-4 mr-2" /> {t("theme_light")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")} className={theme === "dark" ? "bg-accent/10 text-accent" : ""}>
                <Moon className="h-4 w-4 mr-2" /> {t("theme_dark")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")} className={theme === "system" ? "bg-accent/10 text-accent" : ""}>
                <Monitor className="h-4 w-4 mr-2" /> {t("theme_system")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-md">
                <Globe className="h-4 w-4" />
                {language.toUpperCase()}
                <ChevronDown className="h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {(Object.keys(languageNames) as Language[]).map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={language === lang ? "bg-accent/10 text-accent" : ""}
                >
                  {languageNames[lang]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors px-3 py-1.5 rounded-lg hover:bg-muted">
                  <User className="h-4 w-4" />
                  {profile?.display_name || user.email?.split("@")[0]}
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                  {t("nav_dashboard")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  {t("nav_logout")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">{t("nav_login")}</Link>
              </Button>
              <Button variant="accent" size="sm" asChild>
                <Link to="/register">{t("nav_signup")}</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className="p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <ThemeIcon theme={theme} />
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.href
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {user && (
              <Link
                to="/dashboard"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === "/dashboard"
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {t("nav_dashboard")}
              </Link>
            )}

            {/* Mobile language switcher */}
            <div className="px-4 py-2 flex flex-wrap gap-2">
              {(Object.keys(languageNames) as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                    language === lang
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="flex gap-2 mt-3 pt-3 border-t border-border">
              {user ? (
                <Button variant="ghost" size="sm" className="flex-1" onClick={() => { handleLogout(); setMobileOpen(false); }}>
                  <LogOut className="h-4 w-4 mr-2" />
                  {t("nav_logout")}
                </Button>
              ) : (
                <>
                  <Button variant="ghost" size="sm" className="flex-1" asChild>
                    <Link to="/login" onClick={() => setMobileOpen(false)}>{t("nav_login")}</Link>
                  </Button>
                  <Button variant="accent" size="sm" className="flex-1" asChild>
                    <Link to="/register" onClick={() => setMobileOpen(false)}>{t("nav_signup")}</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
