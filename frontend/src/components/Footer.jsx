import React from "react";
import MakerbleLogo from "./images/Makerble-Logo.png";
import Linkedin from "./images/linkedin.png";
import Youtube from "./images/youtube.png";
import Facebook from "./images/facebook3.png";
import Instagram from "./images/instagram3.png";
import Twitter from "./images/twitter3.png";
import FooterBorder from './images/footer-top.png';
import FooterTop1 from './images/footer-top1.png';
const Footer = () => {
  return (
    <>
      <div className="flex flex-col ml-[380px]  bg-white">
        <div className="flex flex-row justify-center">
            <div className="flex flex-row justify-center">
                <img src={FooterBorder} alt="" /><img src={FooterBorder} alt="" />
                </div></div>
        <div className="flex flex-row justify-between p-10 items-start">
          <div className="flex flex-col gap-3">
            <div>
              {" "}
              <img src={MakerbleLogo} alt="" />
            </div>
            <div className="text-xl text-slate-700 mt-2">
              <a href="">Discover the Marketplace</a>
            </div>
            <div className="text-xl text-slate-700">
              <a href="">Create Organisation Account</a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-4xl font-semibold text-slate-800">
              Organisations
            </div>
            <div className="text-xl text-slate-700 mt-2">
              <a
                href="
                "
              >
                About Us
              </a>
            </div>
            <div className="text-xl text-slate-700">
              <a href="">Terms & Conditions</a>
            </div>
            <div className="text-xl text-slate-700">
              <a href="">Privacy & Cookies</a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-4xl font-semibold text-slate-800">
              {" "}
              Your Account
            </div>
            <div className="text-xl text-slate-700 mt-2">
              <a href="">Library</a>
            </div>
            <div className="text-xl text-slate-700">
              <a href="">Profile</a>
            </div>
            <div className="text-xl text-slate-700">
              <a href="">Project</a>
            </div>
            <div className="text-xl text-slate-700">
              <a href="">Help</a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-4xl font-semibold text-slate-800">Explore</div>
            <div className="text-xl text-slate-700 mt-2">
              <a
                href="
                "
              >
                Metrics
              </a>
            </div>
            <div className="text-xl text-slate-700">
              <a href="">Networks</a>
            </div>
            <div className="text-xl text-slate-700">
              <a href="">Strategies</a>
            </div>
            <div className="text-xl text-slate-700">
              <a href="">Projects</a>
            </div>
            <div className="text-xl text-slate-700">
              <a href=""> Studies</a>
            </div>
            <div className="text-xl text-slate-700">
              <a href="">Surveys</a>
            </div>
            <div className="text-xl text-slate-700">
              <a href="">Ideas</a>
            </div>
            <div className="text-xl text-slate-700">
              <a href="">Vouchers</a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-4xl font-semibold text-slate-800">
              Follow the Makerble Story
            </div>
            <div className="flex flex-row gap-4">
              <div className="bg-blue-400 p-4 rounded-full align-middle">
                <div className="text-xl w-[35px] h-[35px]  text-slate-700 ">
                  <a
                    href="
                "
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={Linkedin}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="bg-red-600 p-4 rounded-full align-middle">
                <div className="text-xl w-[35px] h-[35px]  text-slate-700 ">
                  <a
                    href="
                "
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={Youtube}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="bg-pink-500 p-4 rounded-full align-middle">
                <div className="text-xl w-[35px] h-[35px]  text-slate-700 ">
                  <a
                    href="
                "
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={Instagram}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="bg-blue-800 p-4 rounded-full align-middle">
                <div className="text-xl w-[35px] h-[35px]  text-slate-700 ">
                  <a
                    href="
                "
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={Facebook}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="bg-teal-700 p-4 rounded-full align-middle">
                <div className="text-xl w-[35px] h-[35px]  text-slate-700 ">
                  <a
                    href="
                "
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={Twitter}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
