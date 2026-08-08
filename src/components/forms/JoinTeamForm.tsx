"use client";

import { useState } from "react";
import {
  FormField,
  inputClasses,
  selectClasses,
  textareaClasses,
} from "@/components/ui/FormField";
import { SubmitButton } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  professionalTitle: string;
  qualifications: string;
  yearsExperience: string;
  specialities: string;
  previousExperience: string;
  availability: string;
  workingArrangements: string;
  rightToWork: string;
  additionalInfo: string;
  consent: boolean;
}

type FormErrors = {
  [K in keyof FormData]?: string;
};

const workingArrangements = [
  "Temporary assignments",
  "Seasonal work",
  "Ongoing placements",
  "Permanent roles",
  "Flexible / varied",
];

const rightToWorkOptions = [
  "Yes — UK citizen",
  "Yes — settled/pre-settled status",
  "Yes — valid work visa",
  "No — not currently eligible",
  "Prefer to discuss",
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.phone.trim()) errors.phone = "Please enter your phone number.";
  if (!data.location.trim()) errors.location = "Please enter your location.";
  if (!data.professionalTitle.trim()) errors.professionalTitle = "Please enter your professional title.";
  if (!data.qualifications.trim()) errors.qualifications = "Please list your qualifications.";
  if (!data.yearsExperience) errors.yearsExperience = "Please select your years of experience.";
  if (!data.specialities.trim()) errors.specialities = "Please list your therapy specialities.";
  if (!data.availability.trim()) errors.availability = "Please describe your availability.";
  if (!data.rightToWork) errors.rightToWork = "Please confirm your right-to-work status.";
  if (!data.consent) errors.consent = "Please confirm you agree to be contacted by Sora.";
  return errors;
}

export function JoinTeamForm() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    professionalTitle: "",
    qualifications: "",
    yearsExperience: "",
    specialities: "",
    previousExperience: "",
    availability: "",
    workingArrangements: "",
    rightToWork: "",
    additionalInfo: "",
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name as keyof FormErrors]) {
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
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-sm border border-gold/30 bg-beige/40 p-8 text-center md:p-12" role="status">
        <div className="gold-divider mx-auto" />
        <h3 className="mt-5 font-serif text-2xl text-olive-dark md:text-3xl">
          Application received
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-text/75">
          Thank you for your interest in joining the Sora Collective. Our recruitment
          team will review your application and contact you within five business
          days. This submission does not guarantee placement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <FormField label="Full Name" id="fullName" error={errors.fullName}>
          <input id="fullName" name="fullName" type="text" autoComplete="name" value={form.fullName} onChange={handleChange} className={inputClasses} aria-invalid={!!errors.fullName} />
        </FormField>
        <FormField label="Email Address" id="email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} className={inputClasses} aria-invalid={!!errors.email} />
        </FormField>
        <FormField label="Phone Number" id="phone" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange} className={inputClasses} aria-invalid={!!errors.phone} />
        </FormField>
        <FormField label="Location" id="location" error={errors.location}>
          <input id="location" name="location" type="text" value={form.location} onChange={handleChange} className={inputClasses} placeholder="City / region" aria-invalid={!!errors.location} />
        </FormField>
        <FormField label="Professional Title" id="professionalTitle" error={errors.professionalTitle}>
          <input id="professionalTitle" name="professionalTitle" type="text" value={form.professionalTitle} onChange={handleChange} className={inputClasses} placeholder="e.g. Spa Therapist, Massage Therapist" aria-invalid={!!errors.professionalTitle} />
        </FormField>
        <FormField label="Years of Experience" id="yearsExperience" error={errors.yearsExperience}>
          <select id="yearsExperience" name="yearsExperience" value={form.yearsExperience} onChange={handleChange} className={selectClasses} aria-invalid={!!errors.yearsExperience}>
            <option value="">Select experience</option>
            {["1–2 years", "3–5 years", "6–10 years", "10+ years"].map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </FormField>
        <FormField label="Qualifications" id="qualifications" error={errors.qualifications} className="md:col-span-2">
          <textarea id="qualifications" name="qualifications" value={form.qualifications} onChange={handleChange} className={textareaClasses} placeholder="List your professional qualifications and certifications..." aria-invalid={!!errors.qualifications} />
        </FormField>
        <FormField label="Therapy Specialities" id="specialities" error={errors.specialities} className="md:col-span-2">
          <textarea id="specialities" name="specialities" value={form.specialities} onChange={handleChange} className={textareaClasses} placeholder="e.g. Deep tissue, aromatherapy, facials, prenatal..." aria-invalid={!!errors.specialities} />
        </FormField>
        <FormField label="Previous Spa / Hotel Experience" id="previousExperience" className="md:col-span-2">
          <textarea id="previousExperience" name="previousExperience" value={form.previousExperience} onChange={handleChange} className={textareaClasses} placeholder="Brief overview of your hospitality and spa experience..." />
        </FormField>
        <FormField label="Availability" id="availability" error={errors.availability}>
          <input id="availability" name="availability" type="text" value={form.availability} onChange={handleChange} className={inputClasses} placeholder="e.g. Full-time, part-time, weekdays" aria-invalid={!!errors.availability} />
        </FormField>
        <FormField label="Preferred Working Arrangements" id="workingArrangements">
          <select id="workingArrangements" name="workingArrangements" value={form.workingArrangements} onChange={handleChange} className={selectClasses}>
            <option value="">Select preference</option>
            {workingArrangements.map((w) => (
              <option key={w} value={w}>{w}</option>
            ))}
          </select>
        </FormField>
        <FormField label="Right-to-Work Status" id="rightToWork" error={errors.rightToWork} className="md:col-span-2">
          <select id="rightToWork" name="rightToWork" value={form.rightToWork} onChange={handleChange} className={selectClasses} aria-invalid={!!errors.rightToWork}>
            <option value="">Select status</option>
            {rightToWorkOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </FormField>
        <FormField label="CV Upload" id="cvUpload">
          <input id="cvUpload" name="cvUpload" type="file" accept=".pdf,.doc,.docx" className={`${inputClasses} file:mr-4 file:rounded-sm file:border-0 file:bg-beige file:px-3 file:py-1 file:text-xs file:text-olive-dark`} />
          <p className="mt-1 text-xs text-text/50">PDF or Word document. Backend upload to be connected.</p>
        </FormField>
        <FormField label="Certificates Upload" id="certUpload">
          <input id="certUpload" name="certUpload" type="file" accept=".pdf,.jpg,.jpeg,.png" multiple className={`${inputClasses} file:mr-4 file:rounded-sm file:border-0 file:bg-beige file:px-3 file:py-1 file:text-xs file:text-olive-dark`} />
          <p className="mt-1 text-xs text-text/50">Relevant certificates. Backend upload to be connected.</p>
        </FormField>
        <FormField label="Additional Information" id="additionalInfo" className="md:col-span-2">
          <textarea id="additionalInfo" name="additionalInfo" value={form.additionalInfo} onChange={handleChange} className={textareaClasses} placeholder="Anything else you would like us to know..." />
        </FormField>
      </div>

      <div className="flex items-start gap-3">
        <input id="consent" name="consent" type="checkbox" checked={form.consent} onChange={handleChange} className="mt-1 h-4 w-4 rounded-sm border-beige text-olive focus:ring-olive/30" aria-invalid={!!errors.consent} />
        <div>
          <label htmlFor="consent" className="text-sm text-text/80">
            I agree to be contacted by Sora Spa Collective regarding my application and understand that submission does not guarantee placement.
          </label>
          {errors.consent && (
            <p className="mt-1 text-xs text-red-700" role="alert">{errors.consent}</p>
          )}
        </div>
      </div>

      <SubmitButton disabled={submitting} size="lg">
        {submitting ? "Submitting..." : "Join Team"}
      </SubmitButton>
    </form>
  );
}

export function JoinTeamPageContent() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-narrow">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Join the Sora Collective"
            title="Apply to join our team"
            description="Complete the application below to register your interest in working with Sora Spa Collective. Our recruitment team will review your profile and be in touch."
          />
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <div className="mt-10 rounded-sm border border-beige bg-ivory p-6 md:p-10">
            <JoinTeamForm />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
