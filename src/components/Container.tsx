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
        "mx-auto max-w-4xl w-full bg-white  dark:bg-neutral-900",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
