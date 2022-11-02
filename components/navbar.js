import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <div className="fixed top-0 bg-white w-full">
        <div className="flex justify-between items-cente px-5 py-6">
          <div className="w-40 h-5 block lg:hidden">
            <img src="/vectors/logo-dark.svg" alt="" />
          </div>
          <div>
            <img src="/vectors/Cinnamon logo-1 (1).svg" alt="" />
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <div>
              <ul className="flex items-center gap-10">
                <li>Projects</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="flex items-center gap-6">
              <div className="border-2 border-blue-700 rounded-full w-[46px] h-[46px] flex items-center justify-center text">
                <FontAwesomeIcon icon={faPlay} size="md" color="blue" />
              </div>
              <div>
                <button className="border px-12 py-4 text-white bg-blue-700 flex items-center justify-center">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
