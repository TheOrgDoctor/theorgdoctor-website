import Link from "next/link";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-sm sm:text-base transition-colors";
  const styles = {
    primary: "bg-brand-orange text-white hover:bg-brand-orange-dark",
    secondary:
      "bg-brand-green text-white hover:bg-brand-green-dark",
    ghost:
      "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white",
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
