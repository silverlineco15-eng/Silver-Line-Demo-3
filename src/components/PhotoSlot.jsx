import { useState } from 'react'
import './PhotoSlot.css'

export default function PhotoSlot({ src, alt, name, className = '' }) {
  const [hasError, setHasError] = useState(false)

  if (hasError || !src) {
    return (
      <div className={`photo-slot photo-slot--placeholder ${className}`} role="img" aria-label={`${name} photo placeholder`}>
        <span className="photo-slot__initial">{name.charAt(0)}</span>
        <span className="photo-slot__label">{name}</span>
      </div>
    )
  }

  return (
    <div className={`photo-slot ${className}`}>
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        loading="lazy"
      />
    </div>
  )
}
