/* Example with @emotion/react */
// import { cx } from "xwind";

//"react native style"
// const styles = {
//   button: xw`
//     relative
//     w-64 min-w-full
//     flex justify-center
//     py-2 px-4
//     border border-transparent
//     text-sm leading-5 font-medium
//     rounded-md
//     text-white
//     bg-gray-600
//     hover:bg-gray-500
//     focus[outline-none ring-4 ring-gray-400]
//     active:bg-gray-700
//     transition duration-150 ease-in-out
//   `,
// };

const ButtonReact = ({ children, ...props }) => (
  <button {...props}>
    {/* inline style*/}
    <span>
      <svg fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    {children}
  </button>
);

export default ButtonReact;
