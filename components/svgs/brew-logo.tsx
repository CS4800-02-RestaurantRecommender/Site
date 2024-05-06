import type { LucideProps } from 'lucide-react';
import React from 'react';

const BrewLogo: React.FC<LucideProps> = (props): React.JSX.Element => {
  return (
    <svg
      // width="253"
      // height="248"
      viewBox="0 0 253 248"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height={props.height ?? props.width ?? props.size ?? '24'}
      width={props.width ?? props.height ?? props.size ?? '24'}
      {...props} // Spread additional props to the SVG element
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M177.417 4.80893C175.976 7.64672 172.663 14.4106 170.054 19.8412C167.446 25.2718 163.194 34.0677 160.608 39.3885C158.021 44.7081 154.611 51.8267 153.031 55.2052L150.157 61.3493H75.0778H0L0.207307 108.801C0.467458 167.966 0.682901 169.643 10.528 189.161C48.1969 263.83 155.865 267.486 194.62 195.412L198.025 189.081L204.97 188.707C244.69 186.575 266.061 143.987 244.345 110.24C236.986 98.8029 220.544 89.5854 207.504 89.5854H204.905V75.4674V61.3493H191.231C176.707 61.3493 176.5 61.3226 177.653 59.5837C178.062 58.9667 179.448 56.1101 180.733 53.2388C183.475 47.1041 188.013 37.7729 195.987 21.8759C199.159 15.5511 201.515 10.2985 201.222 10.2021C199.621 9.67467 190.715 5.15161 186.251 2.59894C179.799 -1.09287 180.505 -1.26958 177.417 4.80893ZM183.733 114.815C183.73 158.378 183.127 165.52 178.393 177.952C168.236 204.633 138.926 225.667 111.124 226.231L106.724 226.319V191.118V155.918L103.018 154.472C98.4534 152.692 95.3587 150.888 86.8754 145.068C74.483 136.566 67.154 132.815 58.4729 130.533C47.6495 127.687 31.0866 128.825 22.8404 132.981L20.7158 134.052V107.897V81.7426H102.224H183.734L183.733 114.815ZM158.296 98.6529C150.115 100.872 145.946 110.242 149.81 117.725C156.42 130.526 175.473 126.267 175.429 111.999C175.402 103.105 166.744 96.3626 158.296 98.6529ZM160.884 102.069C162.17 102.873 161.38 105.406 159.441 106.692C157.382 108.059 155.567 108.225 154.647 107.13C152.551 104.636 157.967 100.241 160.884 102.069ZM121.279 104.743C113.1 106.251 108.277 114.554 110.954 122.517C114.011 131.609 126.714 134.373 133.633 127.453C142.37 118.714 133.54 102.484 121.279 104.743ZM122.372 108.427C124.528 109.568 122.55 113.427 119.314 114.392C115.493 115.531 114.812 110.685 118.513 108.702C120.25 107.77 121.024 107.715 122.372 108.427ZM211.821 111.866C232.421 117.904 238.394 143.572 222.845 159.248C218.093 164.039 208.634 168.096 205.228 166.806C204.501 166.53 204.229 137.041 204.776 117.69L204.965 111.024H206.955C208.051 111.024 210.24 111.403 211.821 111.866ZM151.444 142.331C141.094 145.685 138.643 157.824 146.818 165.238C157.448 174.877 172.962 164.107 167.858 150.63C165.5 144.403 157.512 140.365 151.444 142.331ZM154.384 146.282C156.211 149.037 151.595 152.835 148.05 151.491C146.056 150.735 147.71 147 150.589 145.762C152.907 144.766 153.424 144.837 154.384 146.282ZM125.509 168.998C110.179 173.964 114.35 196.212 130.399 195.078C146.797 193.919 146.234 169.816 129.785 168.759C128.163 168.654 126.239 168.761 125.509 168.998ZM129.008 173.537C129.657 176.089 124.86 179.286 122.363 177.967C119.463 176.433 122.791 172.272 126.959 172.221C128.359 172.204 128.73 172.442 129.008 173.537ZM156.326 183.997C149.637 188.626 156.585 199.001 163.502 194.714C168.82 191.415 166.261 183.182 159.915 183.182C158.587 183.182 156.975 183.549 156.326 183.997ZM125.987 207.907C121.093 211.161 122.945 218.463 128.833 219.117C132.957 219.576 136.098 216.926 136.098 212.985C136.098 207.844 130.394 204.978 125.987 207.907Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BrewLogo;