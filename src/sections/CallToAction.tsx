import ArrowRight from "@/assets/arrow-right.svg"
import starImage from "@/assets/star.png"
import springImage from "@/assets/spring.png"
import Image from "next/image";

export const CallToAction = () => {
  return(
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
        <h2 className="section-title">Sign Up Free Today !</h2>
        <p className="section-description mt-5">Celebrate the joy of accomplishment with an app designed</p>
       <Image src={starImage} 
       height={360}
       width={360}
        className="absolute -left-[350px] -top-[137px]"
       alt="star Image"/>
       <Image src={springImage} 
       height={360}
       width={360}
        className="absolute -right-[331px] -top-[19px]"
       alt="star Image"/>
      
        </div>
       
        <div className="flex justify-center gap-2 mt-10 ">
          <button className="btn btn-primary">Get for Free</button>
          <button className="btn btn-text gap-1">
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5 "/>
          </button>
          
      </div>
      </div>
    
    </section>
  )
};
