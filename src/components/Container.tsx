import React from "react";
import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-4xl flex-1 bg-white dark:bg-neutral-900",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
