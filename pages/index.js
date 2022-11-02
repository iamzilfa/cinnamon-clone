import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Layout from "../components/layout";
import Product from "../components/Product";
import Service from "../components/Service";

export default function Home() {
  return (
    <>
      <Layout>
        <main>
          <div className="bg-footerBanner bg-blackrussian mt-20 pb-24 mb-24">
            <div className="mx-auto container">
              <div className="text-whitesmoke px-6">
                <h1 className="text-[40px] leading-[58px] mb-6 font-normal font-montheavy">
                  Results focused design & development agency.
                </h1>
                <p className="leading-[30px] mb-8 text-[18px] font-sans text-lightgrey">
                  Extend your team with our high performing specialists or hire
                  us to shape your product from scratch. Either way, we’ll get
                  your product off the ground and build a momentum for your
                  success.
                </p>
              </div>
            </div>
          </div>
          <div className="px-6">
            <div>
              <Product
                className={"bg-emerald"}
                images={"/images/Mockup_1.png"}
                tags={["project", "quality assurance"]}
                title={
                  <>
                    Corrily: Optimize prices
                    <br />
                    to maximize revenue
                  </>
                }
                subtitle="Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign."
              ></Product>
            </div>
            <div>
              <Product
                className={"bg-mustard"}
                images={"/images/Fiona_Thumbnail.png"}
                tags={["product", "web development"]}
                title={
                  <>
                    Fiona: Engage &
                    <br />
                    Decide
                  </>
                }
                subtitle="Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations."
              ></Product>
            </div>
            <div>
              <Product
                className={"bg-thepurple"}
                images={"/images/Mockup_1.png"}
                tags={[
                  "product design",
                  "web development",
                  "quality assurance",
                ]}
                title={
                  <>
                    Ukulele:
                    <br />
                    The largest ukulele tabs archive
                  </>
                }
                subtitle="Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website."
              ></Product>
            </div>
          </div>
          <div className="bg-footerBanner bg-blackrussian py-24">
            <div className="px-6 text-white grid gap-y-14">
              <div className="grid gap-y-14 w-64">
                <div className="text-[40px] font-montbold leading-[56px]">
                  <h1>Our services</h1>
                </div>
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
                <div>
                  <button className="bg-buttonblue text-white flex justify-center items-center cursor-pointer text-base border-2 border-buttonblue  font-sans  w-[238.312px] h-12">
                    See our services
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="py-24 bg-whitesmoke">
            <div className="px-6">
              <h2 className="text-[40px] leading-[56px] mb-8 font-montbold">
                Agile team <br /> on demand
              </h2>
              <div className="grid-col-">
                <img src="images/image (5).png" alt="" className="w-[265px]" />
              </div>
              <div>
                <p className="text-matterhorn text-base  leading-[26px] font-sans my-10">
                  By hiring and managing talented people with skills specific to
                  your project, we build you a team that’s accomplished, agile
                  and scalable in both directions.
                </p>
              </div>
              <div>
                <Button primary className="w-[200px]">
                  See How it Works
                </Button>
              </div>
            </div>
          </div>
          {/* <div className="pt-[60px] py-[96px] ">
            <div className="mb-8 relative">
              <div className="text-symbcolor text-[175px] font-montbold absolute -top-[26px] -left-[33px] flex">
                “
              </div>
              <h3 className="absolute text-[32px] leading-[44px] text-titleblack font-montbold font-normal">
                They’re consistent, and the communication is good.
              </h3>
              <div>
                <p>
                  When I have a deadline, they would work extra hours on the
                  weekend and after hours. Cinnamon gives the impression of
                  being a smaller team that’s focused on customers.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="mb-14">
            <div className="px-6">
              <h2>Stay in the loop on tech topics</h2>
            </div>
          </div> */}
          <div className="bg-whitesmoke">
            <div className="flex flex-col items-center text-[40px] font-montbold text-center leading-[56px] px-6 pt-32 gap-y-6">
              <h1>Let's work together.</h1>
              <Button primary className="w-[170px]">
                Contact Us
              </Button>
            </div>
            <div className="">
              <img src="images/image (4).png" alt="" className="w-[120px]" />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
