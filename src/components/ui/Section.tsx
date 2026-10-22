import { cn } from "@/lib/utils";
import { Container, type ContainerSize } from "./Container";

const tones = {
  default: "bg-background",
  surface: "bg-surface",
  primary: "bg-primary text-primary-foreground",
};

type SectionProps = React.ComponentProps<"section"> & {
  tone?: keyof typeof tones;
  /** Wrap children in a Container of this size; `false` to lay out yourself. */
  container?: ContainerSize | false;
};

export function Section({ tone = "default", container = "content", className, children, ...rest }: SectionProps) {
  return (
    <section className={cn("scroll-mt-20 py-section", tones[tone], className)} {...rest}>
      {container ? <Container size={container}>{children}</Container> : children}
    </section>
  );
}
