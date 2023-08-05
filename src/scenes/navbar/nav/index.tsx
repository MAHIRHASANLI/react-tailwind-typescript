import Link from "../link";
import ActionButton from "../../../shared/Button";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  arrayNavbar: string[];
};

const Nav = ({ selectedPage, setSelectedPage, arrayNavbar }: Props) => {
  const flexBetween = "flex justify-between items-center";

  return (
    <nav className={`${flexBetween} w-full`}>
      <div className={`${flexBetween} gap-8 text-sm`}>
        {arrayNavbar.map((item, i) => (
          <Link
            key={i}
            page={item}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        ))}
      </div>

      <div className={`${flexBetween} gap-8`}>
        <p>Sign In</p>
        <ActionButton setSelectedPage={setSelectedPage}>
          Become a Member
        </ActionButton>
      </div>
    </nav>
  );
};

export default Nav;
