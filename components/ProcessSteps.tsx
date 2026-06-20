import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/site";

export function ProcessSteps() {
  return (
    <section className="section section-white">
      <div className="container-site">
        <SectionHeader
          tag="How it works"
          title={
            <>
              Simple <span className="accent">3-step</span> process
            </>
          }
          subtitle="Book, we clean, you relax — it's that easy."
        />
        <div className="process-grid">
          {siteConfig.processSteps.map((step, index) => (
            <article key={step.title} className="process-card">
              <div className="process-num">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
