import { BenefitType, SelectedPage } from "../../shared/types";

import { motion } from "framer-motion";
import HText from "../../shared/h1text";
import Ptext from "../../shared/ptext";
import Benefit from "./benefit";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import BottomSection from "./bottomSection";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  const arrayBenefits: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of the Art Facilities",
      description:
        "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100's of Diverse Classes",
      description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Expert and Pro Trainers",
      description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
  ];

  return (
    <section id="benefits" className="min-h-full w-5/6 mx-auto py-20">
      <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Top-Section */}

        <div
          className="md:w-3/5 md:my-5"
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="600"
        >
          <HText>MORE THAN JUST GYM.</HText>
          <Ptext>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </Ptext>
        </div>

        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {arrayBenefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Bottom-Section */}
        <BottomSection />
      </motion.div>
    </section>
  );
};

export default Benefits;
