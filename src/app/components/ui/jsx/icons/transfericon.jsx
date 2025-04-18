import * as React from "react";
const TransferIcon = ({ fill = "#525866", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M13.0375 10.0375L16.75 13.75L13.0375 17.4625L11.977 16.402L13.879 14.4992L4 14.5V13H13.879L11.977 11.098L13.0375 10.0375ZM6.9625 2.53748L8.023 3.59798L6.121 5.49998H16V6.99998H6.121L8.023 8.90198L6.9625 9.96248L3.25 6.24998L6.9625 2.53748Z"
      fill={fill}
    />
  </svg>
);
export default TransferIcon;
