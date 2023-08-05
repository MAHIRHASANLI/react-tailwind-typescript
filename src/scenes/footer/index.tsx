import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <section className="w-full mx-auto py-16 bg-primary-100">
      <div className="w-5/6 mx-auto md:flex justify-between items-start gap-16">
        <div className="basis-1/2">
          <div>
            <img src={logo} alt="" />
          </div>

          <p className="mt-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>

          <p className="mt-5">© Evogym All Rights Reserved.</p>
        </div>

        <div className="basis-1/4">
          <p className="font-bold">Links</p>

          <p className="mt-5">Massa orci senectus</p>

          <p className="mt-5">Et gravida id et etiam</p>

          <p className="mt-5">Ullamcorper vivamus</p>
        </div>

        <div className="basis-1/4">
          <p className="font-bold">Contact Us</p>

          <p className="mt-5">Tempus metus mattis risus volutpat egestas.</p>

          <p className="mt-5">(333)425-6825</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
