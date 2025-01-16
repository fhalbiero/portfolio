import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Status from "@/components/Status";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-between items-center xl:flex-row xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg block my-4">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello, I&apos;m <br /> <span className="text-accent">Fabio Albiero </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I&apos;m a dedicated full-stack engineer committed to continuous learning, embracing challenges to deliver high-quality, impactful digital experiences.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/resume/resume.pdf" download="Fabio_Albiero_Resume.pdf">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyle="flex gap-6"
                  iconStyle="flex justify-center items-center w-9 h-9 border-accent border rounded-full text-accent text-base hover:bg-accent hover:text-primary transition-all duration-300"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order:none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Status />
      </div>
    </section>
  );
}
