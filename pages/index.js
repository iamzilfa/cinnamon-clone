import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Layout from "../components/layout";
import Paragraph from "../components/Paragraph";
import Product from "../components/Product";
import Service from "../components/Service";

export default function Home() {
  let cards = [
    {
      className: "bg-emerald",
      images: "/images/Mockup_1.png",
      tags: [
        { id: 1, text: "project" },
        { id: 2, text: "quality assurance" },
      ],
      title: (
        <>
          Corrily: Optimize prices
          <br />
          to maximize revenue
        </>
      ),
      subtitle:
        "Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign.",
    },
    {
      className: "bg-mustard",
      images: "/images/Fiona_Thumbnail.png",
      tags: [
        { id: 1, text: "product" },
        { id: 2, text: "web development" },
      ],
      title: (
        <>
          Fiona: Engage &
          <br />
          Decide
        </>
      ),
      subtitle:
        "Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations.",
    },
    {
      className: "bg-thepurple",
      images: "/images/Mockup_1.png",
      tags: [
        { id: 1, text: "product design" },
        { id: 2, text: "web development" },
        { id: 3, text: "quality assurance" },
      ],
      title: (
        <>
          Ukulele:
          <br />
          The largest ukulele tabs archive
        </>
      ),
      subtitle:
        "Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website.",
    },
  ];
  return (
    <>
      <Layout>
        <main className="pt-20">
          <div className="bg-footerBanner bg-blackrussian pb-24 mb-24 text-whitesmoke">
            <div className="mx-auto container ">
              <div className="px-6 max-w-[1120px] lg:pt-[118px] lg:pb-[160px]">
                <h1 className="mb-6 text-4xl leading-[58px] font-normal font-montheavy lg:text-[80px] lg:leading-[105px] ">
                  Results focused design & development agency.
                </h1>
                <div className="text-lightgrey font-semibold text-[18px] leading-[30px] max-w-[640] mb-8 lg:text-xl lg:leading-8 lg:font-semibold lg:max-w-[640px] lg:mb-8">
                  Extend your team with our high performing specialists or hire
                  us to shape your product from scratch. Either way, we&lsquo;ll
                  get your product off the ground and build a momentum for your
                  success.
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 mx-auto container">
            <div className="lg:mb-40">
              <div>
                {cards.map((card, index) => {
                  return (
                    <Product
                      key={index}
                      className={card?.className}
                      images={card?.images}
                      tags={card?.tags}
                      title={card?.title}
                      subtitle={card?.subtitle}
                    ></Product>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-footerBanner text-white bg-blackrussian py-24 lg:pt-44 lg:pb-40">
            <div className="px-6 mx-auto container">
              <div>
                <div className="grid lg:grid-cols-2 lg:gap-8">
                  <div className=" lg:mb-72px] ">
                    <h1 className="font-montbold text-[40px] lg:text-[54px] lg:leading-[72px]  leading-[56px] font-normal">
                      Our services
                    </h1>
                  </div>
                  <div className="grid gap-16  lg:gap-y-[120px]">
                    <div className="grid  gap-16 lg:grid-cols-2 lg:gap-x-32">
                      <div>
                        <Service
                          images={"/images/image (2).png"}
                          title="Product design"
                          subtitle="Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes."
                        ></Service>
                      </div>
                      <div>
                        <Service
                          images={"/images/image (3).png"}
                          title="Development"
                          subtitle="By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution."
                        ></Service>
                      </div>
                    </div>
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-32 items-center">
                      <div>
                        <Service
                          images={"/images/image.png"}
                          title="Quality assurance"
                          subtitle="Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing."
                        ></Service>
                      </div>
                      <div>
                        <Service
                          images={"/images/image (1).png"}
                          title="Marketing & growth"
                          subtitle="By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people."
                        ></Service>
                      </div>
                    </div>
                    <div>
                      <button className="bg-buttonblue text-white flex justify-center items-center cursor-pointer text-base border-2 border-buttonblue  font-sans  w-[238.312px] h-12">
                        See our services
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-24 bg-whitesmoke lg:relative lg:pt-44 lg:pb-40 lg:py-40">
            <div className="hidden lg:block lg:absolute right-0 -bottom-0">
              <img
                src="images/image (5).png"
                alt=""
                className="w-[265px] lg:w-[338px] lg:h-[220px]"
              />
            </div>
            <div className="container mx-auto">
              <div className="grid px-6 lg:grid-cols-3 lg:gap-8">
                <h2 className="text-[40px] leading-[56px] mb-8 font-montbold lg:text-[54px] lg:leading-[72px] text-titleblack">
                  Agile team <br /> on demand
                </h2>
                <div className="pt-8 block lg:hidden">
                  <img
                    src="images/image (5).png"
                    alt=""
                    className="w-[265px]"
                  />
                </div>
                <Paragraph
                  paragraph="By hiring and managing talented people with skills specific to
              your project, we build you a team that’s accomplished, agile
              and scalable in both directions."
                />
              </div>
            </div>
          </div>

          <div className="pt-[60px] pb-24 lg:pt-[140px] lg:pb-40 lg:relative">
            <div className="relative pb-8 min-h-[132px]">
              <div className="mx-auto container px-6">
                <div class="font-montbold absolute -left-[10px] -top-[26px] text-[175px] text-symbcolor lg:text-[258px] lg:-top-14 ">
                  “
                </div>
                <div className="flex flex-cols lg:flex-row  lg:items-center lg:justify-between">
                  <div className="lg:w-1/2">
                    <h3 className="text-[32px] mb-8 lg:text-[40px] lg:leading-[56px] leading-[44px] font-normal font-montbold pt-12">
                      They’re consistent, and the communication is good.
                    </h3>

                    <div className="text-[16px] leading-[26px] text-matterhorn mb-8">
                      <p className="text-matterhorn text-base leading-[26px]">
                        When I have a deadline, they would work extra hours on
                        the weekend and after hours. Cinnamon gives the
                        impression of being a smaller team that’s focused on
                        customers.
                      </p>
                    </div>
                    <div className="mt-16 lg:flex lg:items-center">
                      <div className="w-[68px] mr-6 overflow-hidden rounded-[50%]">
                        <img src="images/image (9).png" alt="" />
                      </div>
                      <div className="">
                        <h5 className="font-montbold font-normal text-[20px] text-titleblack leading-[30px] lg:text-2xl lg:leading-[36px]">
                          Garin Toren,
                        </h5>
                        <p className="lg:text-base lg:leading-[26px] text-xs leading-[26px] text-titleblack">
                          CEO, ping
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:w-[200px] lg:h-[200px]">
                    <img
                      src="/images/image (10).png"
                      alt=""
                      className="lg:w-[200px] lg:h-[67.937px]"
                    />
                  </div>
                </div>
                <div className="lg:flex lg:items-center lg:justify-between">
                  <div className="mt-[46px] flex items-center gap-10">
                    <img
                      src="/images/arrow-left.png"
                      alt=""
                      className="h-[27px] w-12"
                    />
                    <img
                      src="/images/arrow-right.png"
                      alt=""
                      className="h-[27px] w-12"
                    />
                  </div>
                  <div className="mt-8 flex items-center gap-5">
                    <img src="/vectors/arrowRight.6bd387a0.svg" alt="" />
                    <p className="text-base leading-[26px] font-montbold uppercase text-buttonblue border-b border-b-buttonblue">
                      View case study
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-whitesmoke py-24 lg:py-[245px]">
            <div className="px-6 container mx-auto">
              <h2 className="text-[40px] leading-[56px] mb-4 font-montbold font-normal text-titleblack lg:mb-8 lg:text-[54px] lg:leading-[72px]">
                Who we are
              </h2>
              <div className="hidden lg:block mb-6 lg:absolute lg:right-0 lg-top[50%]">
                <img
                  src="/images/image (6).png"
                  alt=""
                  className="lg-w-[340px] lg:h-[539.212px]"
                />
              </div>
              <p className="text-base leading-[26px] mb-8 max-w-md text-matterhorn lg:mb-16">
                Meet our international teams made up of 86 innovators, branched
                into 8 departments, that influence the market throughout 20
                different countries.
              </p>
              <div className="block lg:hidden mb-6 max-w-[280px]">
                <img
                  src="/images/image (6).png"
                  alt=""
                />
              </div>
              <div className="lg:flex lg:gap-40">
                <div className="hidden lg:flex lg:flex-col lg:flex-wrap lg:max-h-[310px] lg:w-[70%] lg:mb-[72px]">
                  <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
                    Product design
                  </p>

                  <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
                    Web development
                  </p>

                  <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
                    Mobile development
                  </p>

                  <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
                    Quality assurance
                  </p>

                  <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
                    Marketing
                  </p>

                  <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
                    Project management
                  </p>

                  <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
                    Human resources
                  </p>

                  <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
                    Sales
                  </p>

                  <p className="lg:text-xl lg:leading-[30px] mb-6 font-montbold">
                    Fluffy friends
                  </p>
                </div>
              </div>

              <Button primary>Read About Us</Button>
            </div>
          </div>

          <div className="py-24 bg-white lg:py-40 lg:relative">
            <div className="hidden lg:block absolute right-0 -bottom-[13px]">
              <img
                src="/images/image (7).png"
                alt=""
                className="lg:w-[556px] lg:h-[402px]"
              />
            </div>
            <div className="mx-auto container">
              <div className="px-6 container mx-auto">
                <div className="grid lg:grid-cols-3 lg:items-center lg:gap-8">
                  <div className="">
                    <img
                      src="/images/image (8).png"
                      alt=""
                      className="lg:w-[300px]"
                    />
                  </div>
                  <Paragraph
                    paragraph="Seize the unique opportunity to participate in a wide range of courses conducted by professionals with an impeccable reputation in the digital industry.
             "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-footerBanner bg-blackrussian py-24">
            <div className="mx-auto container px-6">
              <div className="grid lg:grid-cols-2 lg:gap-64 px-6">
                <div className="mb-16">
                  <h1 className="text-[40px] leading-[56px] mb-4 text-greywhite font-normal font-montbold lg:mb-6 lg:text-[54px] ">
                    We’re growing
                  </h1>
                  <p className="text-base leading-[26px] text-lightgrey mb-8 font-sans">
                    Jump on board with Cinnamon and get the privilege of working
                    on challenging projects for leading global companies! Make
                    the world a better, more connected place.
                  </p>
                  <Button primary>See All Positions</Button>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-between cursor-pointer border-b border-bottomgrey py-7">
                      <p className="font-montsemibold text-2xl w-full leading-[36px] text-greywhite">
                        Android Developer
                      </p>
                      <img src="/images/arrowRightWhite.png" alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between cursor-pointer border-b border-bottomgrey py-7">
                      <p className="font-montsemibold text-2xl w-full leading-[36px] text-greywhite">
                        Android Developer
                      </p>
                      <img src="/images/arrowRightWhite.png" alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between cursor-pointer border-b border-bottomgrey py-7">
                      <p className="font-montsemibold text-2xl w-full leading-[36px] text-greywhite">
                        Backend Development Team Lead
                      </p>
                      <img src="/images/arrowRightWhite.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-whitesmoke relative">
            <div className="hidden lg:block absolute bottom-0 left-0">
              <img src="images/image (4).png" alt="" className="w-[428px]" />
            </div>
            <div className="mx-auto container">
              <div className="flex flex-col items-center gap-y-14 lg:py-[160px]">
                <div className="flex flex-col text-titleblack items-center lg:flex-col-reverse text-[40px] lg:text-[54px] lg:leading-[72px] font-montbold text-center leading-[56px] px-6 pt-8">
                  <h1>Let &apos;s work together.</h1>
                  <h1 className="hidden lg:block">Have a project in mind?</h1>
                </div>
                <div>
                  <Button primary className="w-[170px]">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="block lg:hidden">
                <img src="images/image (4).png" alt="" className="w-[120px]" />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
