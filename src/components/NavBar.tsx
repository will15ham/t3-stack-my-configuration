import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const NavBar = () => {
  return (
    <nav className="backdrop-blur-l sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flez z-40 font-semibold">
            wham.
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
