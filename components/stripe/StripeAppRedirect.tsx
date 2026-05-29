"use client";
import { useEffect, useMemo } from "react";
import Image from "next/image";

type StripeAppRedirectProps = {
  appPath: "return" | "refresh" | "success" | "cancel";
  title: string;
  message: string;
  fallbackMessage: string;
  tone: "success" | "warning" | "neutral";
};

const toneClasses = {
  success: "from-[#2d72ff] via-[#654cf6] to-[#111111]",
  warning: "from-[#f5576c] via-[#f093fb] to-[#111111]",
  neutral: "from-[#111111] via-[#2d72ff] to-[#171717]",
};

const appPathMap: Record<StripeAppRedirectProps["appPath"], string> = {
  return: "/stripe/return",
  refresh: "/stripe/refresh",
  success: "/success",
  cancel: "/cancel",
};

export function StripeAppRedirect({
  appPath,
  title,
  message,
  fallbackMessage,
  tone,
}: StripeAppRedirectProps) {
  const deepLink = useMemo(() => {
    if (typeof window === "undefined") {
      return `https://bringinglinkups.com${appPathMap[appPath]}`;
    }

    return `https://bringinglinkups.com${appPathMap[appPath]}${window.location.search}`;
  }, [appPath]);

  useEffect(() => {
    window.location.href = deepLink;
  }, [deepLink]);

  return (
    <main
      className={`min-h-[70vh] bg-gradient-to-br ${toneClasses[tone]} px-6 py-24 text-white`}
    >
      <section className="mx-auto flex max-w-xl flex-col items-center text-center">
        <Image
          src="/images/blu-icon.svg"
          alt="BLU"
          width={80}
          height={80}
          className="mb-8 h-20 w-20"
        />
        <h1 className="font-[family-name:var(--font-merri)] text-4xl font-black leading-tight md:text-5xl">
          {title}
        </h1>
        <div className="my-8 h-12 w-12 animate-spin rounded-full border-4 border-white/30 border-t-white" />
        <p className="text-lg text-white/90">{message}</p>
        <a
          href={deepLink}
          className="mt-8 rounded-md bg-[#dcff00] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:bg-white"
        >
          Open BLU
        </a>
        <p className="mt-5 max-w-md text-sm text-white/70">{fallbackMessage}</p>
      </section>
    </main>
  );
}