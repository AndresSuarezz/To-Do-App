const Header = ({ setFormulario }) => {
  return (
    <header className="flex justify-between py-2">
      <h1 className="font-black text-3xl text-center my-2 mx-2">
        To-Do <span className="text-green-400">App</span>
      </h1>
      <button
        onClick={() => setFormulario(true)}
        className="py-2 px-4 mx-2 bg-green-500 rounded-lg hover:bg-green-600 font-bold text-white uppercase transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
