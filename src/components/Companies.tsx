import { useCompanies } from "@/hooks/useCompanies";

const Companies = () => {
  const { data: companies, isLoading } = useCompanies();

  if (isLoading || !companies?.length) return null;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Companies &amp;{" "}
            <span className="bg-gradient-to-r from-purple-vibrant to-orange-vibrant bg-clip-text text-transparent">
              Organizations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Organizations I've had the privilege to work with.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10">
          {companies.map((company) => {
            const logo = (
              <img
                src={company.logo_url}
                alt={company.name}
                className="max-h-12 md:max-h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            );
            return company.link_url ? (
              <a
                key={company.id}
                href={company.link_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={company.name}
              >
                {logo}
              </a>
            ) : (
              <div key={company.id}>{logo}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Companies;
