import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 32,
  once = true,
  as: Tag = 'div',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px' })

  return (
    <Tag ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </Tag>
  )
}
