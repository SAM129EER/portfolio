type MediumIconProps = React.SVGProps<SVGSVGElement>;

export function MediumIcon(props: MediumIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M4.86 7.13a.86.86 0 0 0-.3-.72L2.33 4.8v-.38h6.92l5.35 11.73L19.3 4.42h4.37v.38l-1.91 1.83a.56.56 0 0 0-.21.54v9.65a.56.56 0 0 0 .21.54l1.87 1.83v.38h-9.4v-.38l1.94-1.87c.19-.19.19-.25.19-.54V10.98l-5.4 8.55h-.73L3.95 10.98v5.73c-.05.39.08.78.35 1.07l2.52 3.05v.38H.5v-.38l2.52-3.05a1.24 1.24 0 0 0 .33-1.07V7.13Z" />
    </svg>
  );
}