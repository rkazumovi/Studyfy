interface PageHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const PageHeader = ({ title, subtitle, centered = true }: PageHeaderProps) => (
  <div className={`py-12 md:py-16 ${centered ? "text-center" : ""}`}>
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">{title}</h1>
    {subtitle && (
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    )}
  </div>
);

export default PageHeader;
