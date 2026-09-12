import { siteConfig } from "@/data/site";

export function enquiryMailto(subject: string, body: string) {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function openEnquiryEmail(subject: string, body: string) {
  window.location.href = enquiryMailto(subject, body);
}
