type GmailIconProps = React.SVGProps<SVGSVGElement>;

export function GmailIcon(props: GmailIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3.5 5.5 12 12l8.5-6.5" />
      <path d="M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1.2L12 11.1 5.2 5H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
    </svg>
  );
}