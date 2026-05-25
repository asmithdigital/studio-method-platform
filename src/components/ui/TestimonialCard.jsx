import Avatar from './Avatar'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="card flex flex-col gap-4">
      <div className="flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-gold text-sm">★</span>
        ))}
      </div>
      <p className="text-sm text-ink leading-relaxed">"{testimonial.quote}"</p>
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
        <Avatar name={testimonial.name} size="md" />
        <div>
          <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
          <p className="text-xs text-muted">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  )
}
