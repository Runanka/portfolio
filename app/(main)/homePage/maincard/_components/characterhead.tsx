import { SVGProps } from "react";
export const CharacterHead = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // width={1286}
    // height={361}
    viewBox="0 0 1286 361"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Character">
      <path
        id="body"
        d="M1286 361C1286 -125.114 0 -115.529 0 361H1286Z"
        fill="#D2B48C"
      />
      <circle id="lefteye" cx={414.5} cy={237.5} r={116.5} fill="#FEF5E7" />
      <circle id="righteye" cx={876.5} cy={237.5} r={116.5} fill="#FEF5E7" />
      <circle id="rightiris" cx={876.5} cy={240.5} r={74.5} fill="#3B2F2F" />
      <circle id="leftiris" cx={414.5} cy={240.5} r={74.5} fill="#3B2F2F" />
    </g>
  </svg>
);
