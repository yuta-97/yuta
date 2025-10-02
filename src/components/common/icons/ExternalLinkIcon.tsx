type Props = {
  className?: string;
  size?: number;
};

const ExternalLinkIcon = (props: Props) => {
  const { className, size = 24 } = props;
  return (
    <svg
      className={`h-${size} w-${size} ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
};

export default ExternalLinkIcon;
