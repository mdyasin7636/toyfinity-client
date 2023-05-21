import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
        <Link>
      <img src="https://i.ibb.co/7j4RsKk/infinity-symbol.png" className='w-24' />
      <p className='font-bold text-2xl'>Toyfinity</p>
      </Link>
        </div>
        <div>
          <span className="font-bold text-lg">Contact</span>
          <a className="link link-hover font-semibold">Facebook</a>
          <a className="link link-hover font-semibold">Instagram</a>
          <a className="link link-hover font-semibold">Twitter</a>
        </div>
        <div>
          <span className="font-bold text-lg">Company</span>
          <a className="link link-hover font-semibold">About us</a>
          <a className="link link-hover font-semibold">Marketing</a>
          <a className="link link-hover font-semibold">Advertisement</a>
        </div>
        <div>
          <span className="font-bold text-lg">Legal</span>
          <a className="link link-hover font-semibold">Terms of use</a>
          <a className="link link-hover font-semibold">Privacy policy</a>
          <a className="link link-hover font-semibold">Cookie policy</a>
        </div>
      </footer>
      <div className="footer footer-center p-4 bg-base-200 text-base-content font-bold">
    <p>Copyright © 2023 - All right reserved by Toyfinity</p>
  </div>
    </div>
  );
};

export default Footer;
