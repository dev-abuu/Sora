export async function submitEnquiry(payload: {
  type: "contact" | "join-team";
  subject: string;
  replyTo: string;
  fields: Record<string, string>;
  honey?: string;
}) {
  const response = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => ({}))) as { error?: string };

  if (!response.ok) {
    throw new Error(data.error || "Unable to send your message. Please try again.");
  }
}
