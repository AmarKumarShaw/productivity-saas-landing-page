import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image"

export const ProductShowcase = () => {
return(
  <section className="bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container">
      <div className= "section-heading">
    <div className="flex justify-center">
    <div className="tag">Boost your productivity</div>
    </div >
    <h2 className="section-title
    ">A more effective way to track progress</h2>
    <p className="section-description
    ">Effortlessly turn your ideas into a fully functional responsive SaaS website 
      in just minutes with this templates
    </p>
    </div>
    <div className="relative">
    <Image src={productImage} alt="Product Image"
    className="mt-10"
    />
    <Image src={pyramidImage} alt="Pyramid Image"
    height={262}
    width={262}
    className="hidden md:block absolute -right-36 -top-32"
    />
    <Image src={tubeImage} 
    height={248}
    width={248}
    alt="Tube Image"
    className="hidden md:block absolute bottom-24 -left-36"
    />
    </div>
    </div> 

  </section>
)
};
