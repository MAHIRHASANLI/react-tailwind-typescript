import useMediaQuery from "../../hooks";
import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/Button";
import { motion } from "framer-motion";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedbull from "../../assets/SponsorRedbull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 flex items-center justify-center flex-col md:flex-row md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 basis-3/5">
          {/* top-item */}
          <div
            className="md:-mt-20"
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-duration="1000"
          >
            <div className="relative">
              <div className="after:absolute after:-top-20 after:-left-20 after:z-[-1] md:after:content-evolvetext">
                <img alt="home" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm md:w-[100%]">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>

          <div
            className="mt-8 flex items-center gap-8"
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-duration="1000"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>

        <div
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
          data-aos="fade-left"
          data-aos-delay="650"
          data-aos-duration="950"
        >
          <img className="w-[100%]" alt="home" src={HomePageGraphic} />
        </div>
      </motion.div>

      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull" src={SponsorRedbull} />
              <img alt="forbes" src={SponsorForbes} />
              <img alt="fortune" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
