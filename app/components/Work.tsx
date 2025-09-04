import { assets, workData } from "@/assets/assets";
import Image from "next/image";
export default function Work() {
  return (
    <div id="work" className="w-full px-6 py-10 scroll-mt-20 md:px-[12%]">
      <h4 className="text-center mb-2 text-lg font-ovo">Myp portfolio</h4>
      <h2 className="text-center text-4xl md:text-5xl font-ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo px-4">
      Welcome to my development portfolio! Explore a collecion of projects
      showcasing my expertise in frontend development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-5">
      {workData.map((project, index) => (
        <div
        key={index}
        className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg
         relative cursor-pointer group"
        style={{ backgroundImage: `url(${project.bgImage})` }}>
        <div className="bg-white w-10/12 rounded-md absolute bottom-5
        left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between
        duration-500 group-hover:bottom-7">
          <div>
          <h2 className="font-semibold text-sm md:text-base">{project.title}</h2>
          <p className="text-xs text-gray-700">{project.description}</p>
          </div>
          <div className="border rounded-full border-black w-9 aspect-square
          flex items-center justify-center shadow-[2px_2px_0_#000]
          group-hover:bg-lime-300 transition">
          <Image src={assets.send_icon} alt="send" className="w-5" />
          </div>
        </div>
        </div>
      ))}
      </div>
      <a href="" className="w-max flex items-center justify-center gap-2 text-gray-700
      border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20
      hover:bg-red duration-500">
      show more <Image src={assets.right_arrow_bold} alt="right-arrow" className="w-4"/>
      </a>
    </div>
  );
}
