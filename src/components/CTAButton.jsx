import { motion } from 'framer-motion'
import { whatsappLink } from '../config/site'

/**
 * Every CTA on the site routes to WhatsApp via this component.
 */
export default function CTAButton({
  children = 'Get Guidance',
  message,
  variant = 'solid',
  className = '',
}) {
  const base =
    'group relative inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 will-change-transform'
  const styles =
    variant === 'solid'
      ? 'bg-ink text-canvas hover:bg-gold'
      : variant === 'gold'
      ? 'bg-gold text-white hover:bg-ink'
      : 'border border-ink/25 text-ink hover:border-gold hover:text-gold bg-white/30 backdrop-blur'

  return (
    <motion.a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      className={`${base} ${styles} ${className}`}
    >
      <span>{children}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
    </motion.a>
  )
}
