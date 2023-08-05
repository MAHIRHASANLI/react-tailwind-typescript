import Ptext from "../../shared/ptext";
import HText from "../../shared/h1text";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import { OurClassesType } from "../../shared/types";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import img5 from "../../assets/image5.png";
import img6 from "../../assets/image6.png";
import Class from "./class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  const arrayClasses: Array<OurClassesType> = [
    {
      image: img1,
      name: "Weight Training Classes",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae odit assumenda laborum vitae deserunt inventore! Ducimus eius nihil facere.",
    },
    {
      image: img2,
      name: "Yoga Classes",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae odit assumenda laborum vitae deserunt inventore! Ducimus eius nihil facere.",
    },
    {
      image: img3,
      name: "Ab Core Classes",
    },
    {
      image: img4,
      name: "Adventure Classes",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae odit assumenda laborum vitae deserunt inventore! Ducimus eius nihil facere.",
    },
    {
      image: img5,
      name: "Fitness Classes",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae odit assumenda laborum vitae deserunt inventore! Ducimus eius nihil facere.",
    },
    {
      image: img6,
      name: "Training Classes",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae odit assumenda laborum vitae deserunt inventore! Ducimus eius nihil facere.",
    },
  ];

  return (
    <section
      id="ourclasses"
      className="w-full mx-auto md:py-40 py-28 bg-primary-100"
    >
      <motion.div
        className="w-[97%] mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <div className="w-5/6 mx-auto">
          {/* Name Section */}
          <div
            className="md:w-3/5"
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-duration="1000"
          >
            <HText>OUR CLASSES</HText>
            <Ptext>
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </Ptext>
          </div>
        </div>

        {/* components img */}
        <div className="w-full mx-auto mt-16 h-[353px] overflow-x-auto overflow-y-hidden">
          <div className="w-[2800px] whitespace-nowrap flex justify-between items-center gap-8">
            {arrayClasses &&
              arrayClasses.map((item: OurClassesType, i) => (
                <Class
                  key={i}
                  image={item.image}
                  name={item.name}
                  title={item.title}
                />
              ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
