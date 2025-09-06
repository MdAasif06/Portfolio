import { assets } from "@/assets/assets";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo_asif} alt="logo" className="w-36 mx-auto mb-2" />
        <div className=" w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="logo" className="w-6" />
          mdaasif1798@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t
      border-gray-400 mx-[10%] mt-12 py-6">
        <p>2025 Md Aasif. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li><a target="_blank" href="https://github.com/MdAasif06">Github</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/mdaasif06/">LinkedIn</a></li>
            <li><a target="_blank" href="https://github.com/MdAasif06">Twitter</a></li>

        </ul>
      </div>
    </div>
  );
}
