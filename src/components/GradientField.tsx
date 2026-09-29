/**
 * Decorative, non-interactive layered gradient blobs for section backgrounds.
 * Purely visual — sits absolutely positioned behind content with pointer-events disabled.
 */
export function GradientField({
  variant = "green",
}: {
  variant?: "green" | "orange" | "light";
}) {
  const palettes = {
    green: {
      a: "bg-[radial-gradient(circle,_rgba(211,102,57,0.35)_0%,_transparent_70%)]",
      b: "bg-[radial-gradient(circle,_rgba(255,255,255,0.12)_0%,_transparent_70%)]",
    },
    orange: {
      a: "bg-[radial-gradient(circle,_rgba(255,255,255,0.25)_0%,_transparent_70%)]",
      b: "bg-[radial-gradient(circle,_rgba(44,73,71,0.25)_0%,_transparent_70%)]",
    },
    light: {
      a: "bg-[radial-gradient(circle,_rgba(211,102,57,0.14)_0%,_transparent_70%)]",
      b: "bg-[radial-gradient(circle,_rgba(44,73,71,0.10)_0%,_transparent_70%)]",
    },
  } as const;

  const p = palettes[variant];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={`absolute -top-24 -left-20 h-[26rem] w-[26rem] rounded-full blur-3xl animate-float-slow ${p.a}`}
      />
      <div
        className={`absolute -bottom-32 -right-16 h-[30rem] w-[30rem] rounded-full blur-3xl animate-float-slower ${p.b}`}
      />
    </div>
  );
}
