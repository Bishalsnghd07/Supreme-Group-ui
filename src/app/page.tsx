"use client";
import Contact from "@/components/ui/sections/contact";
import Footer from "@/components/ui/sections/footer";

export default function Home() {
  return (
    <>
      <div className="flex relative min-h-screen  flex-col items-center justify-center p-4 sm:p-0 bg-[#00000099]">
        <section
          className="flex items-center justify-center text-center min-h-[50vh] px-4 text-white"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-4xl">
            <p className="text-lg text-gray-300">Performance in motion</p>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl font-semibold my-2"
            >
              Soft Trims and NVH Solutions
            </h1>
            <p className="text-4xl sm:text-5xl font-normal">
              for seamless rides
            </p>
          </div>
        </section>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
