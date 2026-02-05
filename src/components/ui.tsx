import * as React from "react";

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className = "", ...rest } = props;
  return (
    <div
      className={
        "rounded-2xl border border-zinc-800 bg-zinc-900/40 shadow-lg " + className
      }
      {...rest}
    />
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className = "", ...rest } = props;
  return (
    <input
      className={
        "w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30 " +
        className
      }
      {...rest}
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { className = "", ...rest } = props;
  return (
    <textarea
      className={
        "w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30 " +
        className
      }
      {...rest}
    />
  );
}

export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" | "danger" }
) {
  const { className = "", variant = "primary", ...rest } = props;

  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed";

  const styles =
    variant === "primary"
      ? "bg-white text-zinc-950 hover:bg-zinc-100"
      : variant === "danger"
      ? "bg-red-500/90 text-white hover:bg-red-500"
      : "border border-zinc-700 text-zinc-100 hover:bg-zinc-900";

  return <button className={`${base} ${styles} ${className}`} {...rest} />;
}

export function Badge(props: React.HTMLAttributes<HTMLSpanElement>) {
  const { className = "", ...rest } = props;
  return (
    <span
      className={
        "inline-flex items-center rounded-full border border-zinc-700 bg-zinc-950 px-2 py-1 text-xs text-zinc-200 " +
        className
      }
      {...rest}
    />
  );
}
