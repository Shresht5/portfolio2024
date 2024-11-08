'use client'

import Image from "next/image";
import { BiNetworkChart } from "react-icons/bi";
import { FaGithub, FaHome, FaLinkedinIn, FaTwitter } from "react-icons/fa";
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
import Link from "next/link";

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
        <div className="flex">{/*sidebar */}
          <div className="relative">
            <div className="hidden sticky top-0 shadow-lg shadow-r-4 w-[220px] py-[30%] flex-col h-screen items-center space-y-10 p-6 sm:flex ">
              <div className="">
                <Image src="/image/LogoImage.png" alt="Logo" width={120} height={120} />
              </div>
              <div className="">
                <h2 className="text-xl font-semibold ">Shreshta Balapure</h2>
                <h3 className="text-center">Full stack Engineer</h3>
              </div>
              <div className="space-y-4 flex flex-col">
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
              <div className="bg-slate-600 h-[1px] w-full "></div>
              <div className=" flex justify-evenly w-full text-2xl ">
                <Link href='https://x.com/BalapureShresht' target='_blank' >
                  <FaTwitter className="hover:text-orange-500" />
                </Link>
                <Link href='https://www.linkedin.com/in/shresht-balapure-a310a8206/' target='_blank' >
                  <FaLinkedinIn className="hover:text-orange-500" />
                </Link>
                <Link href='https://github.com/Shresht5' target='_blank' >
                  <FaGithub className="hover:text-orange-500" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-slate-200 w-full">
            <div ref={section1Ref} className="py-4 px-10">
              <Header />
            </div>
            <div className="View p-10">
              <Me scrollToSection={scrollToSection} section4Ref={section4Ref} section5Ref={section5Ref} />
            </div>
            <div ref={section2Ref} className="View p-10">
              <About />
            </div>
            <div ref={section3Ref} className="View p-10">
              <Skills />
            </div>
            <div ref={section4Ref} className="View p-10">
              <Project />
            </div>
            <div ref={section5Ref} className="h-screen p-10">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}