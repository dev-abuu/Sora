import type { Metadata } from "next";
import { JoinTeamPageContent } from "@/components/forms/JoinTeamForm";

export const metadata: Metadata = {
  title: "Join Team — Therapist Application",
  description:
    "Apply to join Sora Spa Collective. Register your interest in spa therapist opportunities across premium hotels and wellness venues.",
};

export default function JoinTeamPage() {
  return <JoinTeamPageContent />;
}
