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
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FormData {
  companyName: string;
  contactName: string;
  jobTitle: string;
  email: string;
  phone: string;
  venueName: string;
  venueLocation: string;
  staffType: string;
  numberOfTherapists: string;
  startDate: string;
  endDate: string;
  requirementType: string;
  workingHours: string;
  skillsRequired: string;
  additionalRequirements: string;
}

type FormErrors = {
  [K in keyof FormData]?: string;
};

const staffTypes = [
  "Spa Therapist",
  "Massage Therapist",
  "Beauty Therapist",
  "Facialist",
  "Wellness Professional",
  "Multiple Roles",
  "Other",
];

const requirementTypes = [
  "Temporary Cover",
  "Last-Minute Cover",
  "Seasonal Staffing",
  "Event Staffing",
  "Ongoing Support",
  "Permanent Recruitment",
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.companyName.trim()) errors.companyName = "Please enter your company name.";
  if (!data.contactName.trim()) errors.contactName = "Please enter a contact name.";
  if (!data.jobTitle.trim()) errors.jobTitle = "Please enter your job title.";
  if (!data.email.trim()) {
    errors.email = "Please enter your business email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.phone.trim()) errors.phone = "Please enter your phone number.";
  if (!data.venueName.trim()) errors.venueName = "Please enter your venue name.";
  if (!data.venueLocation.trim()) errors.venueLocation = "Please enter the venue location.";
  if (!data.staffType) errors.staffType = "Please select the type of staff required.";
  if (!data.numberOfTherapists) errors.numberOfTherapists = "Please enter the number of therapists required.";
  if (!data.startDate.trim()) errors.startDate = "Please enter the required start date.";
  if (!data.requirementType) errors.requirementType = "Please select the requirement type.";
  if (!data.workingHours.trim()) errors.workingHours = "Please provide working hours or shift information.";
  return errors;
}

export function RequestStaffForm() {
  const [form, setForm] = useState<FormData>({
    companyName: "",
    contactName: "",
    jobTitle: "",
    email: "",
    phone: "",
    venueName: "",
    venueLocation: "",
    staffType: "",
    numberOfTherapists: "1",
    startDate: "",
    endDate: "",
    requirementType: "",
    workingHours: "",
    skillsRequired: "",
    additionalRequirements: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
          Staffing request received
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-text/75">
          Thank you for your enquiry. A member of the Sora team will contact you
          within one business day to discuss your staffing requirements. This
          submission does not confirm staff allocation — we will be in touch to
          finalise details.
        </p>
        <p className="mt-4 text-sm text-text/60">
          Need immediate assistance? Email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-olive underline underline-offset-2 hover:text-olive-dark"
          >
            {siteConfig.email}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <FormField label="Company Name" id="companyName" error={errors.companyName}>
          <input id="companyName" name="companyName" type="text" value={form.companyName} onChange={handleChange} className={inputClasses} aria-invalid={!!errors.companyName} />
        </FormField>
        <FormField label="Contact Name" id="contactName" error={errors.contactName}>
          <input id="contactName" name="contactName" type="text" value={form.contactName} onChange={handleChange} className={inputClasses} aria-invalid={!!errors.contactName} />
        </FormField>
        <FormField label="Job Title" id="jobTitle" error={errors.jobTitle}>
          <input id="jobTitle" name="jobTitle" type="text" value={form.jobTitle} onChange={handleChange} className={inputClasses} aria-invalid={!!errors.jobTitle} />
        </FormField>
        <FormField label="Business Email" id="email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} className={inputClasses} aria-invalid={!!errors.email} />
        </FormField>
        <FormField label="Phone Number" id="phone" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange} className={inputClasses} aria-invalid={!!errors.phone} />
        </FormField>
        <FormField label="Venue Name" id="venueName" error={errors.venueName}>
          <input id="venueName" name="venueName" type="text" value={form.venueName} onChange={handleChange} className={inputClasses} aria-invalid={!!errors.venueName} />
        </FormField>
        <FormField label="Venue / Location" id="venueLocation" error={errors.venueLocation}>
          <input id="venueLocation" name="venueLocation" type="text" value={form.venueLocation} onChange={handleChange} className={inputClasses} aria-invalid={!!errors.venueLocation} />
        </FormField>
        <FormField label="Type of Staff Required" id="staffType" error={errors.staffType}>
          <select id="staffType" name="staffType" value={form.staffType} onChange={handleChange} className={selectClasses} aria-invalid={!!errors.staffType}>
            <option value="">Select staff type</option>
            {staffTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </FormField>
        <FormField label="Number of Therapists Required" id="numberOfTherapists" error={errors.numberOfTherapists}>
          <input id="numberOfTherapists" name="numberOfTherapists" type="number" min="1" max="50" value={form.numberOfTherapists} onChange={handleChange} className={inputClasses} aria-invalid={!!errors.numberOfTherapists} />
        </FormField>
        <FormField label="Required Start Date" id="startDate" error={errors.startDate}>
          <input id="startDate" name="startDate" type="date" value={form.startDate} onChange={handleChange} className={inputClasses} aria-invalid={!!errors.startDate} />
        </FormField>
        <FormField label="End Date (if applicable)" id="endDate">
          <input id="endDate" name="endDate" type="date" value={form.endDate} onChange={handleChange} className={inputClasses} />
        </FormField>
        <FormField label="Temporary or Permanent Requirement" id="requirementType" error={errors.requirementType}>
          <select id="requirementType" name="requirementType" value={form.requirementType} onChange={handleChange} className={selectClasses} aria-invalid={!!errors.requirementType}>
            <option value="">Select requirement type</option>
            {requirementTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </FormField>
        <FormField label="Working Hours / Shift Information" id="workingHours" error={errors.workingHours} className="md:col-span-2">
          <input id="workingHours" name="workingHours" type="text" placeholder="e.g. Mon–Fri, 9:00–17:00" value={form.workingHours} onChange={handleChange} className={inputClasses} aria-invalid={!!errors.workingHours} />
        </FormField>
        <FormField label="Skills or Qualifications Required" id="skillsRequired" className="md:col-span-2">
          <textarea id="skillsRequired" name="skillsRequired" value={form.skillsRequired} onChange={handleChange} className={textareaClasses} placeholder="Required qualifications, treatment specialities, experience level..." />
        </FormField>
        <FormField label="Additional Requirements" id="additionalRequirements" className="md:col-span-2">
          <textarea id="additionalRequirements" name="additionalRequirements" value={form.additionalRequirements} onChange={handleChange} className={textareaClasses} placeholder="Any other details about your staffing needs..." />
        </FormField>
      </div>
      <SubmitButton disabled={submitting} size="lg">
        {submitting ? "Submitting..." : "Submit Staffing Request"}
      </SubmitButton>
    </form>
  );
}

export function RequestStaffPageContent() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-narrow">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Request Staff"
            title="Tell us your staffing needs"
            description="Complete the form below and our team will respond promptly to discuss how Sora can supply qualified spa professionals to your venue."
          />
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <div className="mt-10 rounded-sm border border-beige bg-ivory p-6 md:p-10">
            <RequestStaffForm />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
