import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-olive text-ivory border border-olive hover:bg-olive-dark hover:border-olive-dark focus-visible:ring-olive/40",
  secondary:
    "bg-transparent text-olive-dark border border-gold/60 hover:border-gold hover:bg-beige/50 focus-visible:ring-gold/30",
  outline:
    "bg-transparent text-ivory border border-ivory/70 hover:bg-ivory/10 focus-visible:ring-ivory/30",
  ghost:
    "bg-transparent text-olive border border-transparent hover:bg-beige/60 focus-visible:ring-olive/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs tracking-wide",
  md: "px-6 py-2.5 text-sm tracking-wide",
  lg: "px-8 py-3.5 text-sm tracking-widest uppercase",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  external,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const isMailOrTel = href.startsWith("mailto:") || href.startsWith("tel:");

  if (external || isMailOrTel) {
    return (
      <a
        href={href}
        className={classes}
        {...(external && !isMailOrTel
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

interface NativeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

export function SubmitButton({
  variant = "primary",
  size = "lg",
  children,
  className,
  disabled,
  ...props
}: NativeButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
