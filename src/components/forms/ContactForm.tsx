"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import {
  FormField,
  inputClasses,
  selectClasses,
  textareaClasses,
} from "@/components/ui/FormField";
import { SubmitButton } from "@/components/ui/Button";

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  enquiryType?: string;
  message?: string;
}

const enquiryTypes = [
  "I need staff",
  "I want to join Sora",
  "General enquiry",
];

function validate(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.enquiryType) errors.enquiryType = "Please select an enquiry type.";
  if (!data.message.trim()) errors.message = "Please enter your message.";
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-sm border border-gold/30 bg-beige/40 p-8 text-center" role="status">
        <h3 className="font-serif text-2xl text-olive-dark">Message sent</h3>
        <p className="mt-3 text-sm text-text/75">
          Thank you for reaching out. We will respond within one business day at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-olive underline underline-offset-2 hover:text-olive-dark"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <FormField label="Name" id="contact-name" error={errors.name}>
        <input id="contact-name" name="name" type="text" autoComplete="name" value={form.name} onChange={handleChange} className={inputClasses} aria-invalid={!!errors.name} />
      </FormField>

      <FormField label="Company (optional)" id="contact-company">
        <input id="contact-company" name="company" type="text" value={form.company} onChange={handleChange} className={inputClasses} />
      </FormField>

      <FormField label="Email" id="contact-email" error={errors.email}>
        <input id="contact-email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} className={inputClasses} aria-invalid={!!errors.email} />
      </FormField>

      <FormField label="Phone (optional)" id="contact-phone">
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange} className={inputClasses} />
      </FormField>

      <FormField label="Enquiry Type" id="contact-enquiryType" error={errors.enquiryType}>
        <select id="contact-enquiryType" name="enquiryType" value={form.enquiryType} onChange={handleChange} className={selectClasses} aria-invalid={!!errors.enquiryType}>
          <option value="">Select enquiry type</option>
          {enquiryTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </FormField>

      <FormField label="Message" id="contact-message" error={errors.message}>
        <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} className={textareaClasses} aria-invalid={!!errors.message} />
      </FormField>

      <SubmitButton disabled={submitting}>
        {submitting ? "Sending..." : "Send Message"}
      </SubmitButton>
    </form>
  );
}
