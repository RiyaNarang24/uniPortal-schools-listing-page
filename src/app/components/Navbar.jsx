export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm" >
      <div
        className=" max-w-7xl mx-auto px-6 py-4 flex items-center justify-between " >

        <a href="#home">
          <h1 className="text-3xl font-extrabold tracking-tight">
            <span className="text-blue-600">Uni</span>
            <span className="text-gray-900">Portal</span>
          </h1>
        </a>

        <div className="hidden md:flex items-center gap-10">
          <a
            href="#home"
            className="
            text-gray-700 font-medium
            hover:text-blue-600
            transition
          "
          >
            Home
          </a>

          <a
            href="#schools"
            className="
            text-gray-700 font-medium
            hover:text-blue-600
            transition
          "
          >
            Schools
          </a>

          <a
            href="#faq"
            className="
            text-gray-700 font-medium
            hover:text-blue-600
            transition
          "
          >
            FAQ
          </a>
        </div>
        <a
          href="#schools"
          className="
          bg-blue-600
          text-white
          px-6 py-3
          rounded-xl
          font-semibold
          hover:bg-blue-700
          hover:scale-105
          transition-all
          duration-300
        "
        >
          Explore Schools
        </a>
      </div>
    </nav>
  );
}