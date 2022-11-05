import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/Button";


// import your icons
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  function handleScrollChange() {
    if (window.scrollY > 20) setIsScrolled(true);
    else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollChange);
    return () => {
      window.removeEventListener("scroll", setIsScrolled);
    };
  }, []);
  return (
    <div className="">
      <div
        className={
          "fixed top-0 flex w-full z-10 " +
          (isScrolled ? " bg-white " : " bg-footerBanner bg-blackrussian ")
        }
      >
        <div className="mx-auto container max-w-[1120px] flex justify-between items-center h-20 w-full px-6">
            <Link href="/" className="w-40 h-5">
              <img
                src={
                  isScrolled
                    ? "/vectors/logo-dark.svg"
                    : "/vectors/logo-white.svg"
                }
                alt=""
              />
            </Link>
            <div className="block lg:hidden">
              <img
                src={
                  isScrolled
                    ? "/vectors/menu.svg"
                    : "/vectors/mobile-menu-icon-light.0de793a8.svg"
                }
              />
            </div>
            <div className="hidden lg:flex items-center gap-8">
              <div>
                <ul
                  className={
                    "flex items-center gap-10 font-sans text-base leading-4" +
                    (isScrolled ? " text-black " : " text-white ")
                  }
                >
                  <li>
                    <Link
                      href="/project"
                      className="font-montsemibold text-base leading-5 font-bold cursor-pointer"
                    >
                      {" "}
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service"
                      className="font-montsemibold text-base leading-5 font-bold cursor-pointer"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/aboutUs"
                      className="font-montsemibold text-base leading-5 font-bold cursor-pointer"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/career"
                      className="font-montsemibold text-base leading-5 font-bold cursor-pointer"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="font-montsemibold text-base leading-5 font-bold cursor-pointer"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-6">
                <div
                  className={
                    isScrolled
                      ? " border-2 border-blue-700 rounded-full w-[46px] h-[46px] flex items-center justify-center "
                      : "border-2 border-white rounded-full w-[46px] h-[46px] flex items-center justify-center hover:bg-buttonblue hover:border-buttonblue"
                  }
                >
                  <FontAwesomeIcon
                    icon={faPlay}
                    // size="5x"
                    color={isScrolled ? " blue " : " white "}
                  />
                </div>
                <div>
                 <Button primary>Contact us</Button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
