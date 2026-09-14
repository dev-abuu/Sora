interface TestimonialCardProps {
  quote: string;
}

export function TestimonialCard({ quote }: TestimonialCardProps) {
  return (
    <blockquote className="flex h-full flex-col rounded-sm border border-gold/20 bg-beige/40 p-8 md:p-10">
      <svg
        className="mb-4 h-6 w-6 text-gold/60"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.016 3.016 0 01-3.016 3.016c-1.518 0-2.74-1.147-2.993-2.625l-.797-.175zM14.583 17.321c-1.03-1.094-1.583-2.322-1.583-4.311 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.016 3.016 0 01-3.016 3.016c-1.518 0-2.74-1.147-2.993-2.625l-.797-.175z" />
      </svg>
      <p className="flex-1 font-serif text-xl leading-relaxed text-olive-dark md:text-2xl">
        &ldquo;{quote}&rdquo;
      </p>
    </blockquote>
  );
}
