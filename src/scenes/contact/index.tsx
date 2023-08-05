import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png";
import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import HText from "../../shared/h1text";
import Ptext from "../../shared/ptext";
import Form from "./form";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section id="contactus" className="py-28 md:pb-32 w-full mx-auto">
      <motion.div
        className="w-5/6 mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="md:w-3/5"
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <Ptext>
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </Ptext>
        </motion.div>

        {/* Bottom item */}
        <div className="mt-10 justify-between gap-8 md:flex md:mt-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <Form />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative mt-16 md:mt-0 basis-2/5"
          >
            <div className="after:absolute after:-bottom-20 after:-right-10 md:after:content-evolvetext w-full after:z-[-10]">
              <img className="w-full" src={ContactUsPageGraphic} alt="" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
