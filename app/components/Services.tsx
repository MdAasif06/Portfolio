import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
export default function Services() {
  return (
    <div id="services" className="w-full px-6 md:px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">What I offer</h4>
      <h2 className="text-center text-4xl md:text-5xl font-ovo">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo px-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
      consequatur deserunt quasi praesentium. Quisquam dolor illum accusamus
      repudiandae est explicabo, mollitia inventore officia magni, sed beatae
      iure cum non amet!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
      {serviceData.map(({ icon, title, description, link }, index) => (
        <div key={index} className="border border-gray-400 rounded-lg px-4 md:px-8 py-8 md:py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1
        duration-500">
        <Image src={icon} alt="icon" className="w-10" />
        <h3 className="text-lg my-4  text-gray-700">{title}</h3>
        <p className="text-sm text-gray-600 leading-5">{description}</p>
        <a href={link} className="flex items-center gap-2 text-sm mt-5">
          Read more{" "}
          <Image src={assets.right_arrow} alt="arrow" className="w-4" />
        </a>
        </div>
      ))}
      </div>
    </div>
  );
}
