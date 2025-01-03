import ArrowRight from "@/assets/arrow-right.svg"
import Logo from "@/assets/logosaas.png"
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg"



export const Header = () => {
  return(
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex items-center justify-center py-3
      bg-black text-white text-sm
      ">
        <p className="text-white/60 px-2 hidden md:block ">Streamline your workflows and boost your productivity</p>
        <div className="inline-flex items-center gap-1">
        <p className="">Get Started for Free </p>
        <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="container py-5 flex items-center justify-between">
        <Image src={Logo} alt="SaaS Logo Image" height={40} width={40} />
        <MenuIcon className="h-5 w-5 md:hidden" />
        <nav className="hidden md:flex gap-6 text-black/60 items-center">
          <a href="">About</a>
            <a href="">Features</a>
            <a href="">Customers</a>
            <a href="">Updates</a>
            <a href="">Help</a>
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium align-items justify-center inline-flex tracking-tight">Get for Free</button>
        </nav>
      </div>
    </header>
  )
};
