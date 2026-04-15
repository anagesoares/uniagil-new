"use client";

import Link from "next/link";
import { useUTMLink } from "./UTMProvider";

type TrackingLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  /** Facebook Pixel event to fire on click (e.g. "Lead", "InitiateCheckout") */
  fbEvent?: string;
  /** Extra data for the FB event */
  fbData?: Record<string, string>;
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function TrackingLink({
  href,
  children,
  className,
  onClick,
  fbEvent,
  fbData,
}: TrackingLinkProps) {
  const buildLink = useUTMLink();

  const handleClick = () => {
    // Fire Facebook Pixel event if specified
    if (fbEvent && typeof window !== "undefined" && window.fbq) {
      window.fbq("track", fbEvent, fbData || {});
    }
    onClick?.();
  };

  // External links
  if (href.startsWith("http")) {
    return (
      <a
        href={buildLink(href)}
        className={className}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // Internal links
  return (
    <Link href={buildLink(href)} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
