export const Button = ({ cta }) => {
  return (
    <>
      <div className="flex">
        <button
          className="middle none center mr-3 rounded-lg bg-pink-500 px-6 py-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          {cta}
        </button>
      </div>

      {/*     
    <!-- stylesheet -->
    <link
      rel="stylesheet"
      href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
  />*/}

      <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
    </>
  );
};
