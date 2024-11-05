import React from "react";

const Footer = () => {
  return (
    <div className="bg-white w-full mt-10">
      <div className="">
        <header className="w-11/12 mx-auto mb-6 space-y-5 lg:mb-14">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#09080F] text-center">
            Gadget Heaven
          </h3>

          <p className="font-medium text-[#09080F99] text-center">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </header>
        <hr className="w-11/12 mx-auto border-2 border-[#9538E2]" />
        <footer className="footer flex flex-col items-start md:items-start md:justify-evenly md:flex-row text-base-content p-10 w-10/12 mx-auto">
          <nav>
            <h6 className=" text-xl text-[#09080F] font-bold">Services</h6>
            <a className="link link-hover font-normal text-center text-base text-[#09080F99]">
              Product
            </a>
            <a className="link link-hover font-normal text-center text-base text-[#09080F99]">
              Support
            </a>
            <a className="link link-hover font-normal text-center text-base text-[#09080F99]">
              Order
            </a>
            <a className="link link-hover font-normal text-center text-base text-[#09080F99]">
              Tracking
            </a>
            <a className="link link-hover font-normal text-center text-base text-[#09080F99]">
              Shipping & Delivery
            </a>
          </nav>
          <nav>
            <h6 className="text-xl text-[#09080F] font-bold">Company</h6>
            <a className="link link-hover font-normal text-center text-base text-[#09080F99]">
              About us
            </a>
            <a className="link link-hover font-normal text-center text-base text-[#09080F99]">
              Careers
            </a>
            <a className="link link-hover font-normal text-center text-base text-[#09080F99]">
              Contact
            </a>
          </nav>
          <nav>
            <h6 className="text-xl text-[#09080F] font-bold">Legal</h6>
            <a className="link link-hover font-normal text-center text-base text-[#09080F99]">
              Terms of Service
            </a>
            <a className="link link-hover font-normal text-center text-base text-[#09080F99]">
              Privacy Policy
            </a>
            <a className="link link-hover font-normal text-center text-base text-[#09080F99]">
              Cookie Policy
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
