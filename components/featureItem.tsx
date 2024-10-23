import Image from "next/image";

type featureItem = {
  title: string;
  icon: string;
  variant: string;
  description: string;
};

const featureItem = ({ title, icon, variant, description }: featureItem) => {
  return (
    <div>
      <Image src={icon} alt="title icons" width={50} height={50} className="" />
    </div>
  );
};

export default featureItem;
