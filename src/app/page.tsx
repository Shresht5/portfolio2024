'use client'

import Image from "next/image";
import { BiNetworkChart } from "react-icons/bi";
import { FaGithub, FaHome, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { VscProject } from "react-icons/vsc";
import Header from "@/components/Header";
import Me from "@/components/Me";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import { useRef } from "react";

export default function Home() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className="reletive">
        <div className="sm:hidden">
          <h1>hello</h1>
        </div>
        <div className="flex">{/*sidebar */}
          <div className="relative">
            <div className="hidden sticky top-0 shadow-lg shadow-r-4 w-[220px] py-[10%] flex-col h-screen items-center space-y-10 p-6 sm:flex ">
              <div className="">
                <Image src="/image/LogoImage.png" alt="Logo" width={120} height={120} />
              </div>
              <div className="">
                <h2 className="text-xl font-bold ">Shreshta Balapure</h2>
                <h3 className="text-center">Full stack Engineer</h3>
              </div>
              <div className="space-y-4 ">
                <button onClick={() => scrollToSection(section1Ref)} className="bg-orange-400 rounded-lg flex items-center text-white space-x-2 py-1 px-2">
                  <FaHome /><span>Home</span>
                </button>
                <button onClick={() => scrollToSection(section2Ref)} className="bg-orange-400 rounded-lg flex items-center text-white space-x-2 py-1 px-2">
                  <RiContactsFill /><span>About</span>
                </button>
                <button onClick={() => scrollToSection(section3Ref)} className="bg-orange-400 rounded-lg flex items-center text-white space-x-2 py-1 px-2">
                  <BiNetworkChart /><span>Skills</span>
                </button>
                <button onClick={() => scrollToSection(section4Ref)} className="bg-orange-400 rounded-lg flex items-center text-white space-x-2 py-1 px-2">
                  <VscProject /><span>Project</span>
                </button>
                <button onClick={() => scrollToSection(section5Ref)} className="bg-orange-400 rounded-lg flex items-center text-white space-x-2 py-1 px-2">
                  <MdEmail /><span>Contact</span>
                </button>
              </div>
              <div className=" flex justify-evenly w-full ">
                <FaTwitter size={25} /><FaGithub size={25} />
              </div>
            </div>
          </div>
          <div className="bg-slate-200 w-full">
            <div ref={section1Ref} className="py-4 px-10">
              <Header />
            </div>
            <div className="p-10">
              <Me scrollToSection={scrollToSection} section4Ref={section4Ref} section5Ref={section5Ref} />
            </div>
            <div ref={section2Ref} className="p-10">
              <About />
            </div>
            <div ref={section3Ref} className="p-10">
              <Skills />
            </div>
            <div ref={section4Ref} className="p-10">
              <Project />
            </div>
            <div ref={section5Ref} className="p-10">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}