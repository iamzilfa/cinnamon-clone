import Button from "./ui/Button";

const Paragraph = ({ paragraph }) => {
  return (
    <div className="mt-12 lg:mt-0 text-matterhorn">
      <p className="text-matterhorn text-base leading-[26px]">{paragraph}</p>
      <div className="mt-12 lg:mt-5">
        <Button primary>See How It Works</Button>
      </div>
    </div>
  );
};

export default Paragraph;
