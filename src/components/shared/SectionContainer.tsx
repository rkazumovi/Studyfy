interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionContainer = ({ children, className = "", id }: SectionContainerProps) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="container">{children}</div>
  </section>
);

export default SectionContainer;
