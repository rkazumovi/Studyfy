import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t("not_found_title")}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t("not_found_text")}</p>
        <Link to="/" className="text-accent underline hover:text-accent/90">
          {t("not_found_link")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
