import './SilverLineWordmark.css'

export default function SilverLineWordmark({ className = '', as: Tag = 'span' }) {
  return (
    <Tag className={`silver-line-wordmark ${className}`} aria-label="Silver Line">
      Silver Line
    </Tag>
  )
}
