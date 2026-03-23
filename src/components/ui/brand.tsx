import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({ className, size = "md" }: BrandLogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <span
      className={cn(
        "font-heading font-normal tracking-tight text-primary",
        sizeClasses[size],
        className
      )}
    >
      Personal Prints
    </span>
  );
}

interface DisplayTextProps {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function DisplayText({
  as: Tag = "h1",
  size = "md",
  children,
  className,
}: DisplayTextProps) {
  const sizeClasses = {
    sm: "text-4xl leading-[2.75rem] tracking-normal",
    md: "text-[2.8125rem] leading-[3.25rem] tracking-[-0.01em]",
    lg: "text-[3.5625rem] leading-[4rem] tracking-[-0.015em]",
  };

  return (
    <Tag
      className={cn("font-heading font-normal", sizeClasses[size], className)}
    >
      {children}
    </Tag>
  );
}

interface LabelTextProps {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export function LabelText({
  size = "md",
  children,
  className,
}: LabelTextProps) {
  const sizeClasses = {
    sm: "text-[0.6875rem] leading-4 tracking-[0.031em]",
    md: "text-xs leading-4 tracking-[0.031em]",
    lg: "text-sm leading-5 tracking-[0.007em]",
  };

  return (
    <span
      className={cn(
        "font-sans font-medium uppercase",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}
