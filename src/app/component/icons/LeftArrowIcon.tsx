type Props = {
  className?: string;
};

export default function LeftArrowIcon(props: Props) {
  return (
    <>
      <svg
        className={props.className}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 12H5m14 0-4 4m4-4-4-4"
        />
      </svg>
    </>
  );
}
