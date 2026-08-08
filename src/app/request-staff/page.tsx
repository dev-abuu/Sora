import type { Metadata } from "next";
import { RequestStaffPageContent } from "@/components/forms/RequestStaffForm";

export const metadata: Metadata = {
  title: "Request Staff — Spa Staffing Enquiry",
  description:
    "Submit a staffing request to Sora Spa Collective. Tell us your spa therapist requirements and our team will respond promptly.",
};

export default function RequestStaffPage() {
  return <RequestStaffPageContent />;
}
