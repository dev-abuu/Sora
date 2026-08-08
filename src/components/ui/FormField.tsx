import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({
  label,
  id,
  error,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-sans font-medium text-olive-dark">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export const inputClasses =
  "w-full rounded-sm border border-beige bg-ivory px-4 py-3 text-sm text-text placeholder:text-text/40 transition-colors duration-200 focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20 disabled:cursor-not-allowed disabled:opacity-50";

export const textareaClasses =
  "w-full resize-y rounded-sm border border-beige bg-ivory px-4 py-3 text-sm text-text placeholder:text-text/40 transition-colors duration-200 focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]";

export const selectClasses = inputClasses;
