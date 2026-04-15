"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type UTMParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  fbclid?: string;
  gclid?: string;
};

const UTM_KEYS: (keyof UTMParams)[] = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "fbclid",
  "gclid",
];

const UTMContext = createContext<UTMParams>({});

export function useUTM() {
  return useContext(UTMContext);
}

/**
 * Appends stored UTM params to any URL
 */
export function useUTMLink() {
  const utms = useUTM();

  return (href: string) => {
    const entries = Object.entries(utms).filter(([, v]) => v);
    if (entries.length === 0) return href;

    const separator = href.includes("?") ? "&" : "?";
    const params = entries.map(([k, v]) => `${k}=${encodeURIComponent(v!)}`).join("&");
    return `${href}${separator}${params}`;
  };
}

export function UTMProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const [utms, setUtms] = useState<UTMParams>({});

  useEffect(() => {
    const params: UTMParams = {};
    let hasParams = false;

    for (const key of UTM_KEYS) {
      const value = searchParams.get(key);
      if (value) {
        params[key] = value;
        hasParams = true;
      }
    }

    // Save to sessionStorage so UTMs persist across page navigations
    if (hasParams) {
      sessionStorage.setItem("uniagil_utms", JSON.stringify(params));
      setUtms(params);
    } else {
      const stored = sessionStorage.getItem("uniagil_utms");
      if (stored) {
        setUtms(JSON.parse(stored));
      }
    }
  }, [searchParams]);

  return <UTMContext value={utms}>{children}</UTMContext>;
}
