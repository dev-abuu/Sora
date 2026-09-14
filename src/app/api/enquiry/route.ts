import { NextResponse } from "next/server";

const TO_EMAIL = "Info@soraspacollective.co.uk";

interface EnquiryBody {
  type?: string;
  subject?: string;
  replyTo?: string;
  fields?: Record<string, unknown>;
  honey?: string;
}

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: EnquiryBody;

  try {
    body = (await request.json()) as EnquiryBody;
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  if (asText(body.honey)) {
    return NextResponse.json({ ok: true });
  }

  const type = asText(body.type);
  const subject = asText(body.subject);
  const replyTo = asText(body.replyTo);
  const fields = body.fields && typeof body.fields === "object" ? body.fields : {};

  if (!["contact", "join-team"].includes(type) || !subject || !replyTo) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "The enquiry service is not configured yet. Please try again later." },
      { status: 500 },
    );
  }

  const lines = Object.entries(fields)
    .map(([key, value]) => {
      const text = asText(value);
      return text ? `${key}: ${text}` : "";
    })
    .filter(Boolean);

  const text = [`New ${type === "join-team" ? "Join Team" : "website"} enquiry`, "", ...lines].join("\n");
  const from = process.env.RESEND_FROM_EMAIL || "Sora Spa Collective <beth.t@example.com>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [process.env.CONTACT_TO_EMAIL || TO_EMAIL],
      reply_to: replyTo,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Resend error", response.status, detail);
    return NextResponse.json(
      { error: "We could not send your message. Please try again in a moment." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
