import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/site";

export function ProcessSteps() {
  return (
    <section className="section section-white" id="process">
      <div className="container-site">
        <SectionHeader
          tag="How it works"
          title={
            <>
              Simple <span className="accent">3-step</span> process
            </>
          }
          subtitle={
            <>
              You Book, We Clean, and you Relax.
              <br />
              -
              <br />
              It&apos;s That Easy
            </>
          }
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
