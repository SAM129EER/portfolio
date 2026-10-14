import React from "react"

type TechIconProps = {
  name: string
  className?: string
}

export function TechIcon({ name, className = "size-4" }: TechIconProps) {
  const normalized = name.toLowerCase().replace(/[\s\.\-_]/g, "")

  switch (normalized) {
    case "nextjs":
    case "next":
      return (
        <svg
          viewBox="0 0 180 180"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M90 0C40.294 0 0 40.294 0 90s40.294 90 90 90 90-40.294 90-90S139.706 0 90 0zm43.665 141.978C120.69 151.262 105.373 156 90 156c-36.45 0-66-29.55-66-66s29.55-66 66-66c36.45 0 66 29.55 66 66 0 20.378-9.262 38.6-23.835 50.678v1.3zm-42.665-41.518V55.994H73.006v55.988l17.994-15.122zm19.962 19.968l-31.944-41.1v-.072l41.958 53.97c3.426-3.732 6.3-7.968 8.502-12.57l-18.516-24.228z"
          />
        </svg>
      )

    case "react":
      return (
        <svg
          viewBox="-11.5 -10.23174 23 20.46348"
          className={className}
          aria-hidden="true"
        >
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )

    case "typescript":
    case "ts":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M14.484 17.03c.53.284 1.25.5 1.96.5 1.107 0 1.637-.506 1.637-1.22 0-.74-.486-1.162-1.74-1.632-1.72-.613-2.58-1.543-2.58-2.822 0-1.748 1.4-3.05 3.65-3.05.91 0 1.63.2 2.11.43l-.47 1.67c-.36-.18-.87-.36-1.57-.36-1.07 0-1.56.55-1.56 1.11 0 .73.53 1.1 1.83 1.59 1.77.67 2.5 1.61 2.5 2.89 0 1.82-1.4 3.1-3.87 3.1-1.05 0-1.99-.27-2.47-.56l.51-1.65zm-3.04-7.53h-3.1v10.15h-2.1V9.5H3.14V7.8h8.3v1.7z"
            fill="#FFFFFF"
          />
        </svg>
      )

    case "javascript":
    case "js":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M6.25 18.25c.34.6.82 1.05 1.56 1.05.74 0 1.23-.37 1.23-1.12v-6.68h1.95v6.72c0 1.82-1.08 2.65-2.75 2.65-1.39 0-2.22-.72-2.67-1.6l1.24-.77zm8.4-1.12c.51.84 1.27 1.34 2.37 1.34 1 0 1.65-.5 1.65-1.2 0-.82-.66-1.12-1.8-1.61-1.63-.7-2.67-1.42-2.67-3.1 0-1.72 1.33-3.03 3.42-3.03 1.51 0 2.57.51 3.2 1.65l-1.4 1c-.36-.61-.83-.87-1.7-.87-.8 0-1.37.5-1.37 1.13 0 .7.5 1.02 1.57 1.48 1.82.78 2.94 1.53 2.94 3.25 0 1.86-1.45 3.16-3.81 3.16-1.75 0-2.88-.63-3.52-1.84l1.45-.96z"
            fill="#000000"
          />
        </svg>
      )

    case "tailwindcss":
    case "tailwind":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2-1.8-.913-.228-1.565-.89-2.288-1.624C16.336 4.982 14.975 3.6 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2-1.8-.913-.228-1.565-.89-2.288-1.624C10.336 12.182 8.975 10.8 6.001 12z"
            fill="#06B6D4"
          />
        </svg>
      )

    case "nodejs":
    case "node":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="#5FA04E"
          aria-hidden="true"
        >
          <path d="M12 1.6l9.3 5.4v10.8L12 23.2 2.7 17.8V7L12 1.6zm0 2.3L4.7 8.2v7.6L12 20.1l7.3-4.3V8.2L12 3.9z" />
          <path d="M12 7.2l4.8 2.8v5.6L12 18.4l-4.8-2.8V10L12 7.2z" />
        </svg>
      )

    case "express":
    case "expressjs":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M24 18.571h-4.384l-4.482-6.504-4.522 6.504H6.227l6.732-9.697L6.471 0h4.412l4.316 6.309L19.488 0H24l-6.664 9.172L24 18.571zM1.986 18.571H0V0h1.986v18.571z" />
        </svg>
      )

    case "postgresql":
    case "postgres":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="#336791"
          aria-hidden="true"
        >
          <path d="M11.95 0C5.35 0 0 5.35 0 11.95c0 4.19 2.15 7.89 5.43 10.05.28-.69.6-1.43.95-2.22-.38-.28-.75-.58-1.1-.9-2.47-2.25-3.35-5.59-2.2-8.32 1.15-2.73 3.99-4.23 7.07-3.73 1.93.31 3.55 1.48 4.47 3.2.92-1.72 2.54-2.89 4.47-3.2 3.08-.5 5.92 1 7.07 3.73 1.15 2.73.27 6.07-2.2 8.32-.35.32-.72.62-1.1.9.35.79.67 1.53.95 2.22C21.85 19.84 24 16.14 24 11.95 24 5.35 18.65 0 12.05 0h-.1z" />
        </svg>
      )

    case "prisma":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M22.58 19.64L13.62 1.48a1.86 1.86 0 0 0-3.24 0L1.42 19.64a1.86 1.86 0 0 0 1.62 2.68h17.92a1.86 1.86 0 0 0 1.62-2.68zM12 4.67l7.24 14.65H4.76L12 4.67z" />
        </svg>
      )

    case "docker":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="#2496ED"
          aria-hidden="true"
        >
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M23.76 9.89c-.365-2.264-2.803-3.86-5.808-3.86a6.837 6.837 0 00-1.895.263c-.156.044-.223.23-.135.358 1.144 1.666 1.157 3.863.02 5.53-.09.13-.017.316.14.36a9.55 9.55 0 002.398.31c4.095 0 6.643-1.636 5.28-2.96" />
        </svg>
      )

    case "postman":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="#FF6C37"
          aria-hidden="true"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.666 8.528l-2.02 2.019a.63.63 0 01-.892 0l-.821-.822-1.393 1.393 2.146 2.146c.394.394 1.033.394 1.427 0l3.053-3.053a1.008 1.008 0 00-1.5-1.683zM7.226 15.474l2.02-2.019a.63.63 0 01.892 0l.821.822 1.393-1.393-2.146-2.146a1.008 1.008 0 00-1.427 0L5.726 13.79a1.008 1.008 0 101.5 1.684z" />
        </svg>
      )

    case "figma":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"
            fill="#0ACF83"
          />
          <path
            d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"
            fill="#A259FF"
          />
          <path
            d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"
            fill="#F24E1E"
          />
          <path
            d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"
            fill="#FF7262"
          />
          <path
            d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"
            fill="#1ABCFE"
          />
        </svg>
      )

    case "vercel":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M24 22.525H0l12-21.05 12 21.05z" />
        </svg>
      )

    case "reacthookform":
    case "hookform":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="#EC5990"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" fill="#EC5990" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      )

    case "zod":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="#3E67B1"
          aria-hidden="true"
        >
          <path d="M21.2 3.8H2.8A1 1 0 0 0 2 5v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-.8-1.2zM17 16.5H7v-2l6-5.5H7v-2h10v2l-6 5.5h6v2z" />
        </svg>
      )

    case "shadcnui":
    case "shadcn":
      return (
        <svg
          viewBox="0 0 256 256"
          className={className}
          fill="none"
          aria-hidden="true"
        >
          <line
            x1="208"
            y1="128"
            x2="128"
            y2="208"
            stroke="currentColor"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="192"
            y1="40"
            x2="40"
            y2="192"
            stroke="currentColor"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case "mongodb":
    case "mongo":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="#47A248"
          aria-hidden="true"
        >
          <path d="M12 0s-5.4 6.27-5.4 12.33c0 4.96 3.6 8.92 5.4 11.67 1.8-2.75 5.4-6.71 5.4-11.67C17.4 6.27 12 0 12 0zm-.08 20.89c-.27-.4-.84-1.28-1.46-2.35-.9-1.57-2.06-3.8-2.06-6.21 0-4.04 2.87-8.15 3.52-9.06.65.91 3.52 5.02 3.52 9.06 0 2.41-1.16 4.64-2.06 6.21-.62 1.07-1.19 1.95-1.46 2.35z" />
        </svg>
      )

    default:
      // Fallback code icon
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
  }
}
