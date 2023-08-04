// import { AcademicCapIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { SelectedPage } from "@/shared/types";
import logo from "../../../assets/Logo.png";
// import Nav from '../nav';
import Link from "../link";
import useMediaQuery from "../../../hooks";
import ActionButton from "../../../shared/ActionButton.tsx";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const arrayNavbar: string[] = ["Home", "Benefits", "Our Classes", "Contact Us"];

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const flexBetween = "flex justify-between items-center";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const bgNavbar = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div
        className={`${flexBetween} ${bgNavbar} fixed top-0 z-30 w-full py-6 transition-all`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={logo} alt="logFo" />

            {/* Nav */}
            {isAboveMediumScreens ? (
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
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Bars3BottomRightIcon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {!isAboveMediumScreens && isOpen && (
        <div className="fixed right-0 bottom-0 z-50 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsOpen(!isOpen)}>
              <XMarkIcon className="h-8 w-8 text-gray-400" />
            </button>
          </div>

          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            {arrayNavbar.map((item, i) => (
              <Link
                key={i}
                page={item}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
