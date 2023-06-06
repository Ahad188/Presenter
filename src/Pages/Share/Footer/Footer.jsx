import logo from "../../../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div className=" flex flex-col">
        <img src={logo} className="h-20 w-20 rounded-full cursor-pointer" alt="" />
        <p>
          {" "}
          If you Want a <br /> News Presenter Please <br />{" "}
          <button className="btn mt-3"> subscribe</button>
        </p>
      </div>
      <div>
        <span className="footer-title">Social Media</span>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">WhatsApp</a>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Instagram</a>
      </div>
      <div className="text-center">
        <span className="footer-title mr-4"> Address</span>
        <address>
          <h3>Street: 521 Brownton Road</h3>
          <h3>City: Greenwood</h3>
          <h3>State/province/area: Mississippi</h3>
          <h2>Country United States</h2>
        </address>
      </div>
      <div>
        <span className="footer-title">Contact</span>
        <h3 className="">Phone number :<br /> 662-364-7072</h3>
        <h3 className=""> Zip code : 38930</h3>
        <h4 className="">Country : United States</h4>
      </div>
    </footer>
  );
};

export default Footer;
