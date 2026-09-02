function Svg({ className, children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function PhoneIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </Svg>
  )
}

export function InstagramIcon({ className }) {
  return (
    <Svg className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </Svg>
  )
}

export function FacebookIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </Svg>
  )
}

export function MailIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </Svg>
  )
}

export function ClockIcon({ className }) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </Svg>
  )
}

export function SofaIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" />
      <path d="M3 12h18v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <path d="M5 17v2" />
      <path d="M19 17v2" />
      <rect x="2.5" y="10" width="3" height="4" rx="1" />
      <rect x="18.5" y="10" width="3" height="4" rx="1" />
    </Svg>
  )
}

export function ArmchairIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M7 11V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
      <path d="M5 11h14v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
      <path d="M7 18v2" />
      <path d="M17 18v2" />
      <rect x="2.5" y="10" width="3" height="5" rx="1" />
      <rect x="18.5" y="10" width="3" height="5" rx="1" />
    </Svg>
  )
}

export function BedIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M3 18v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
      <path d="M13 15v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
      <path d="M3 18h18" />
      <path d="M3 11V6" />
      <path d="M3 22v-2" />
      <path d="M21 22v-2" />
    </Svg>
  )
}

export function RugIcon({ className }) {
  return (
    <Svg className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <rect x="6.5" y="8.5" width="11" height="7" rx="1" />
      <line x1="3" y1="12" x2="6.5" y2="12" />
      <line x1="17.5" y1="12" x2="21" y2="12" />
    </Svg>
  )
}

export function SparklesIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
      <path d="M19 15l.7 2.1L22 18l-2.3.9L19 21l-.7-2.1L16 18l2.3-.9z" />
      <path d="M5 15l.6 1.7L7 17l-1.4.6L5 19l-.6-1.4L3 17l1.4-.3z" />
    </svg>
  )
}

export function CheckIcon({ className }) {
  return (
    <Svg className={className}>
      <polyline points="20 6 9 17 4 12" />
    </Svg>
  )
}

export function CalendarIcon({ className }) {
  return (
    <Svg className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </Svg>
  )
}

export function ThumbsUpIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
    </Svg>
  )
}

export function WhatsappIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.69 1.45h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.15-3.39-8.45zM12.05 21.5h-.01a9.6 9.6 0 0 1-4.9-1.34l-.35-.21-3.65.96.97-3.56-.23-.36a9.6 9.6 0 0 1-1.47-5.13c0-5.31 4.32-9.63 9.64-9.63 2.57 0 4.99 1 6.8 2.82a9.56 9.56 0 0 1 2.82 6.81c0 5.31-4.32 9.63-9.62 9.63zm5.28-7.22c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.56-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z" />
    </svg>
  )
}
