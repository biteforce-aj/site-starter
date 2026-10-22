import { Reveal, Section } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";

type StatsRowProps = { content?: SiteConfig["stats"] };

/** Row of headline numbers. */
export function StatsRow({ content = siteConfig.stats }: StatsRowProps) {
  return (
    <Section aria-label="Key figures">
      <Reveal>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 text-center lg:grid-cols-4">
          {content.items.map((item) => (
            <div key={item.label} className="flex flex-col-reverse gap-2">
              <dt className="text-muted">{item.label}</dt>
              <dd className="text-4xl font-bold text-primary">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
