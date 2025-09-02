import { assets } from "../../assets/assets";
import Image from "next/image";
export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="profil-image"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Md Aasif{" "}
        <Image src={assets.hand_icon} alt="hand" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Frontend Web developer based in Patna.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am frontend developer from INDIA,with 2 years of experience in
        multiple tech stack.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black
        text-white flex items-center gap-2">
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="hand" className="w-4" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume{" "}
          <Image src={assets.download_icon} alt="hand" className="w-4" />
        </a>
      </div>
    </div>
  );
}
