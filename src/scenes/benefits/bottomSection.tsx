import BenetitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
import HText from "../../shared/h1text";
import ActionButton from "../../shared/Button";
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const BottomSection = ({ setSelectedPage }: Props) => {
  return (
    <div className="mt-16 md:mt-28 flex justify-between items-center flex-col md:flex-row md:20 gap-10">
      <img
        alt="graphig-photo"
        src={BenetitsPageGraphic}
        data-aos="fade-right"
        data-aos-delay="600"
        data-aos-duration="1000"
      />

      <div data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">
        {/* Title */}
        <div className="relative">
          <div className="before:absolute before:-ml-20 before:-mt-20 before:content-abstractwaves">
            <HText>
              MILLIONS OF HAPPY MEMBERS GETTING{" "}
              <span className="text-primary-500">FIT</span>
            </HText>
          </div>
        </div>

        {/* Descriptions */}
        <div>
          <p className="my-5">
            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
            ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
            vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat
            sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id
            pretium sapien proin integer nisl. Felis orci diam odio.
          </p>

          <p className="mb-5">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
        </div>

        {/* Button */}
        <div className="mt-16 relative">
          <div className="after:absolute after:-bottom-20 after:right-40 after:z-[-1] after:content-sparkles">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
