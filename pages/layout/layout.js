import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      {/* Header */}
      <header className={"w-screen bg-green-400 px-8 py-6"}>
        <div
          className={
            "w-full flex justify-between items-center font-bold text-white"
          }
        >
          {/* Main Logo */}
          <div className={"text-2xl sm:text-3xl"}>
            <h2>Anmicius | Blog</h2>
          </div>

          {/* Navigations */}
          <div className={"w-3/5 hidden md:block"}>
            <nav className={"flex justify-around text-xl"}>
              {[1, 2, 3, 4].map((x) => (
                <Link href="https://github.com">
                  <a>
                    <h3>Github</h3>
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          {/* Hamgurger */}
          <div className={"md:hidden"}>#</div>
        </div>
      </header>

      {/* Main component */}
      <main className={"w-screen px-8 py-6"}>{children}</main>

      {/* Footer */}
      <footer className={"w-screen bg-green-400 px-8 py-6"}>
        <div
          className={
            "w-full flex flex-col md:flex-row md:justify-between items-center font-bold text-white italic"
          }
        >
          {/* Left logo */}
          <div className={"w-full sm:w-1/3"}>
            <h2 className={"text-3xl"}>Made with heart by Anmicius</h2>
          </div>

          {/* Icons */}
          <div
            className={
              "w-full sm:w-1/2 flex justify-around items-center text-lg sm:text-2xl underline sm:text-center"
            }
          >
            {[1, 2, 3, 4].map((x) => (
              <Link href="https://github.com">
                <a className={"w-1/4 mt-4 sm:m-0"}>
                  <h3>Github</h3>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
