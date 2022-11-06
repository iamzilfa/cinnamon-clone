import Product from "../../Product";

const Price = () => {
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
        <div className="px-6 mx-auto container max-w-[1120px]">
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
     );
}
 
export default Price;