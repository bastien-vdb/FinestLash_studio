export default function HyperUIButton({ onClick, children }) {
  return (
    <button onClick={onClick}>
      <div className="flex justify-center items-center cursor-pointer p-6 text-xs sm:text-sm md:text-md">
        <a className="group flex items-center justify-between gap-4 rounded-lg border border-red-600 bg-red-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring">
          <span className="font-medium text-white transition-colors group-hover:text-red-600 group-active:text-red-600">
            
            <div className="flex justify-center items-center gap-4">
              {children}
              </div>

          </span>
          <span className="shrink-0 rounded-full border border-current hover:border-none bg-white p-2 text-red-600 group-active:text-black">
            <svg className="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </a>
      </div>
    </button>
  );
}
