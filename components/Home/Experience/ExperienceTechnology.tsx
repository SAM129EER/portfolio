import type { Technology } from "./experience-data";

type ExperienceTechnologyProps = {
  technology: Technology;
};

export function ExperienceTechnology({
  technology,
}: ExperienceTechnologyProps) {
  const Icon = technology.icon;

  return (
    <div
      className="
        group relative flex h-9 min-w-9
        items-center justify-center gap-2
        overflow-hidden rounded-md
        border border-dashed
        px-2
        text-muted-foreground
        transition-all duration-200
        hover:min-w-fit
        hover:bg-muted
        hover:text-foreground
      "
    >
      <Icon className="size-4 shrink-0" />

      <span
        className="
          max-w-0 overflow-hidden whitespace-nowrap
          text-xs font-medium
          opacity-0
          transition-all duration-200
          group-hover:max-w-24
          group-hover:opacity-100
        "
      >
        {technology.name}
      </span>
    </div>
  );
}