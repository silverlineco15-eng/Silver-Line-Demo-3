import { motion } from 'framer-motion'
import './SilverLineAccent.css'

export default function SilverLineAccent({
  className = '',
  delay = 0,
  width = '120px',
  align = 'center',
}) {
  return (
    <div className={`silver-line-accent silver-line-accent--${align} ${className}`}>
      <motion.span
        className="silver-line-accent__line"
        initial={{ width: 0 }}
        animate={{ width }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />
    </div>
  )
}
