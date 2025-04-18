import * as React from "react";
const TransactionIcon = ({ fill = "#525866", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M10 2.5C14.1423 2.5 17.5 5.85775 17.5 10C17.5 14.1423 14.1423 17.5 10 17.5C5.85775 17.5 2.5 14.1423 2.5 10H4C4 13.3135 6.6865 16 10 16C13.3135 16 16 13.3135 16 10C16 6.6865 13.3135 4 10 4C7.9375 4 6.118 5.04025 5.03875 6.625H7V8.125H2.5V3.625H4V5.5C5.368 3.6775 7.54675 2.5 10 2.5ZM10.75 6.25V9.68875L13.1823 12.121L12.121 13.1823L9.25 10.3098V6.25H10.75Z"
      fill={fill}
    />
  </svg>
);
export default TransactionIcon;
