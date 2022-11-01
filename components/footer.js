const Footer = () => {
  return (
    <div className="bg-footerBanner bg-blackrussian h-full">
      <div className="px-6 pt-14">
        <div className="flex flex-col gap-y-20">
          <div className="flex flex-col gap-10">
            <div className="w-40 h-5">
              <img src="/vectors/logo-white.svg" alt="" />
            </div>
            <h2 className="text-whitesmoke text-2xl leading-9 font-semibold">
              All software, <br />
              zero bullshit.
            </h2>
            <div className="grid grid-cols-2 items-center">
              <div>
                <ul className="flex flex-col gap-y-5">
                  <li className="text-white">Home</li>
                  <li className="text-lightgrey">Product</li>
                  <li className="text-lightgrey">Services</li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col gap-y-5">
                  <li className="text-lightgrey">About Us</li>
                  <li className="text-lightgrey">Careers</li>
                  <li className="text-lightgrey">blog</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-whitesmoke">Zagreb</h3>
              <p className="text-lightgrey">
                Slavonska avenija 6, 10000, Zagreb, Croatia +385 99 347 3103
              </p>
            </div>
            <div>
              <h3 className="text-whitesmoke">New York</h3>
              <p className="text-lightgrey">
                500 7th Ave, New York, NY 10018, United States
              </p>
            </div>
            <div>
              <h3 className="text-whitesmoke">Belgrade</h3>
              <p className="text-lightgrey">
                Bulevar vojvode Mišića 37 11000, Belgrade, Serbia
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-16">
            <div className="flex flex-col gap-y-3">
              <p className="text-whitesmoke">Our newsletter</p>
              <div className="flex flex-col gap-y-8">
                <div className="border-b border-b-lightgrey w-[343px] ">
                  <input
                    className="bg-transparent outline-none py-5"
                    type="text"
                    placeholder="Your E-mail"
                  />
                </div>
                <div>
                  <button className="bg-blue-600 text-white pt-4 py-8 pb-3 w-[343px] h-12">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-y-16 items-center">
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
                <div>
                  <p className="text-lightgrey underline">hello@cinnamon.agency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
