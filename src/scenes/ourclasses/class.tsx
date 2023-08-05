import { OurClassesType } from "../../shared/types";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
const Class = ({ image, name, title }: OurClassesType) => {
  const Classes =
    "absolute top-0 left-0 w-full h-full bg-primary-500 cursor-pointer text-white whitespace-normal opacity-0 hover:visible hover:opacity-80 ease-in duration-300 flex justify-center items-center flex-col text-center";
  return (
    <motion.div
      variants={childVariant}
      className="relative h-[380px] w-[450px]"
    >
      <img alt={name} src={image} />
      <div className={Classes}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{title}</p>
      </div>
    </motion.div>
  );
};

export default Class;
