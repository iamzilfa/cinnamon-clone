import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import { faRss } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faSquareBehance,
  faInstagram,
  faFacebook,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../ui/Button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-footerBanner bg-blackrussian w-full pt-20">
      <div className="px-6 mx-auto container">
        <div className="flex flex-col gap-y-20 lg:gap-y-2">
          <div className="lg:grid lg:grid-cols-2 ">
            <div className="flex flex-col gap-16">
              <div className="w-40 h-5">
                <img src="/vectors/logo-white.svg" alt="" />
              </div>
              <h2 className="text-whitesmoke text-2xl leading-9 font-montbold font-normal block lg:hidden">
                All software, <br />
                zero bullshit.
              </h2>
              <div className="grid grid-cols-2 items-center lg:flex lg:flex-col lg:items-start pb-20 gap-y-5">
                <div>
                  <ul className="flex flex-col gap-y-5">
                    <li>
                      <Link href="/" className="text-white font-sans text-base">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/product"
                        className="text-lightgrey font-sans text-base"
                      >
                        Product
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service"
                        className="text-lightgrey font-sans text-base"
                      >
                        Services
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col gap-y-5">
                    <li>
                      <Link
                        href="/aboutUs"
                        className="text-lightgrey font-sans text-base"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/career"
                        className="text-lightgrey font-sans text-base"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="text-lightgrey font-sans text-base"
                      >
                        blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="text-lightgrey underline">
                  hello@cinnamon.agency
                </div>
              </div>
            </div>

            <div className="lg:flex lg:flex-col lg:gap-y-20 lg:-ml-32">
              <h2 className="text-whitesmoke text-2xl leading-9 font-montbold font-normal hidden lg:block lg:text-[32px] lg:leading-[36px] lg:font-montbold lg:font-normal">
                All software, zero bullshit.
              </h2>
              <div className="grid grid-cols-2 gap-6 lg:flex lg:gap-20">
                <div>
                  <h3 className="text-whitesmoke text-base font-montbold leading-[26px] font-bold">
                    Zagreb
                  </h3>
                  <div className="text-lightgrey">
                    <ul>
                      <li className="font-sans text-sm leading-6">
                        Slavonska avenija 6,
                      </li>
                      <li className="font-sans text-sm leading-6">
                        10000, Zagreb
                      </li>
                      <li className="font-sans text-sm leading-6">
                        Croatia +385 99 347 3103
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-whitesmoke text-base font-montbold leading-[26px] font-bold">
                    New York
                  </h3>

                  <ul className="text-lightgrey">
                    <li className="font-sans text-sm leading-6">
                      500 7th Ave, New York
                    </li>
                    <li className="font-sans text-sm leading-6">
                      NY 10018, United States
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-whitesmoke text-base font-montbold leading-[26px] font-bold">
                    Belgrade
                  </h3>
                  <div className="text-lightgrey">
                    <ul>
                      <li className="font-sans text-sm leading-6">
                        {" "}
                        Bulevar vojvode Mišića 37 11000,
                      </li>
                      <li className="font-sans text-sm leading-6">
                        Belgrade, Serbia
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex lg:items-center lg:justify-between">
                <div className="flex flex-col gap-y-3">
                  <p className="text-whitesmoke text-base font-montbold leading-[26px]">
                    Our newsletter
                  </p>
                  <div className="flex flex-col gap-y-8">
                    <div className="border-b border-b-lightgrey">
                      <input
                        className="bg-transparent outline-none py-5"
                        type="text"
                        placeholder="Your E-mail"
                      />
                    </div>
                    <div>
                      <Button primary>Subscribe</Button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-y-10">
                  <div>
                    <img
                      src="/vectors/Pangea logo.svg"
                      alt=""
                      className="w-[200px] h-[56px]"
                    />
                  </div>
                  <div>
                    <img src="/images/clutch-badge.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-16">
            <div className="flex flex-col gap-y-3 lg:hidden">
              <p className="text-whitesmoke text-base font-montbold leading-[26px]">
                Our newsletter
              </p>
              <div className="flex flex-col gap-y-8">
                <div className="border-b border-b-lightgrey w-[343px] ">
                  <input
                    className="bg-transparent outline-none py-5"
                    type="text"
                    placeholder="Your E-mail"
                  />
                </div>

                <Button primary>Subscribe</Button>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-y-16 items-center">
                <div className="flex flex-col gap-y-10 lg:hidden">
                  <div>
                    <img
                      src="/vectors/Pangea logo.svg"
                      alt=""
                      className="w-[200px] h-[56px]"
                    />
                  </div>
                  <div>
                    <img src="/images/clutch-badge.png" alt="" />
                  </div>
                </div>
                <div className="block lg:hidden">
                  <p className="text-lightgrey underline">
                    hello@cinnamon.agency
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-9 gap-y-5 -mt-9 lg:flex-row-reverse lg:justify-between border-t border-t-topgrey pt-5">
              <div className="text-white flex justify-center items-center gap-5 ">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                <FontAwesomeIcon icon={faDribbble} size="lg" />
                <FontAwesomeIcon icon={faSquareBehance} size="lg" />
                <FontAwesomeIcon icon={faInstagram} size="lg" />
                <FontAwesomeIcon icon={faFacebook} size="lg" />
                <FontAwesomeIcon icon={faRss} size="lg" />
              </div>
              <div className="flex items-center justify-center gap-8 text-white text-base border-t border-t-topgrey pt-5 lg:border-none">
                <p>© 2022 Cinnamon</p>
                <p className="underline">Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
