import logo from "@/assets/logosaas.png"
import Image from "next/image";
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialLinkedin from "@/assets/social-linkedin.svg"
import SocialPin from "@/assets/social-pin.svg"
import SocialYoutube from "@/assets/social-youtube.svg"
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
        <div className="container">
            <div className="inline-flex relative before:content-[''] 
            before:h-full border border-white/20 rounded-lg before:w-full before:absolute 
            before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,FFDD9B,#C2F0B1,#2FD8FE)]
            before:blur
            ">
            <Image src={logo} height={40} width={40} 
            alt="Logo SaaS"
            />
            </div>

            <nav className="flex flex-col md:flex-row justify-center gap-6 mt-6">
              <a href="">About</a>
                <a href="">Features</a>
                <a href="">Customers</a>
                <a href="">Pricing</a>
                <a href="">Help</a>
                <a href="">Careers</a>
            </nav>
            <div className="flex justify-center gap-6 mt-6">
              <SocialX />
              <SocialInsta />
              <SocialLinkedin />
              <SocialPin />
              <SocialYoutube />
            </div>
            <p className="mt-6">&copy;2025 Made with ❤️ by <a className="" target="_blank" href="https://amarkumarshaw.com">www.amarkumarshaw.com</a></p>
        </div>
    </footer>
  )
};
