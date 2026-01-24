import Container from "@/components/Container";
import HomeDescription from "@/components/HomeDescription";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
          <div>
            <h3 className="font-semibold text-white/70 tracking-wider mb-1" aria-label="Job title">
              Web Developer
            </h3>
            <h2 className="text-3xl md:text-5xl mb-2">Hello I am</h2>
            <h1 className="text-lightSky text-5xl md:text-7xl tracking-normal" id="main-heading">
              Farida Bano
            </h1>
          </div>
          <div className="w-full h-[170px] md:h-[140px] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <HomeDescription />
            </div>
          </div>
          {/*<p className="w-auto md:max-w-[500px] text-white/50 font-thin leading-6">
            Web Developer creating innovative solutions. I solve complex problems, build scalable systems, and bridge technology with user needs through web apps and backend optimization.
           </p> */}

          <Button className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect">
            <Link
              href="/1234.pdf"
              download="Farida-Bano-CV.pdf"
              className="flex items-center gap-1"
              aria-describedby="main-heading"
            >
              Download CV <Download size={16} aria-hidden="true"/>
            </Link>
          </Button>
          <SocialLinks />
          <Statistics />
        </div>
        <Photo />
      </Container>
    </main>
  );
}
