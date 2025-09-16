'use client'
import React, { useState, useEffect, useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";

const slides = [
  {
    id: 1,
    label: "WAN 2.2",
    title: "WAN 2.2 Image generation",
    subtitle:
      "Generate complex images with the powerful WAN 2.2 model. This model allows creators to bring their ideas to life in seconds, producing highly detailed and realistic outputs. Whether you’re an artist, designer, or developer, WAN 2.2 adapts to your needs effortlessly.",
    btn: "Try WAN 2.2",
    image: "/c2.png",
  },
  {
    id: 2,
    label: "OPEN SOURCE",
    title: "FLUX1 Krea",
    subtitle:
      "We’re making FLUX1 Krea model open-source. Download and run it locally with ease, explore its architecture, and customize it for your workflows. By opening it to the community, we aim to drive collaboration, transparency, and faster innovation in AI.",
    btn: "Learn More",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    label: "AI TOOLS",
    title: "Open AI Tools",
    subtitle:
      "Explore the future of AI-powered creativity. From generating content to assisting with workflows, these tools empower both individuals and teams. They’re built to help you move faster, create smarter, and unlock entirely new possibilities for digital expression.",
    btn: "Explore",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    label: "AI ART",
    title: "AI Art Generator",
    subtitle:
      "Unleash your creativity with our AI-powered art generator. Create unique digital paintings, illustrations, and concept art instantly. Whether you’re looking for inspiration, prototyping ideas, or building full-scale artwork, this tool adapts to your vision with ease.",
    btn: "Get Started",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    label: "AI MUSIC",
    title: "AI Music Generator",
    subtitle:
      "Create unique music tracks with our AI-powered music generator. Experiment with genres, rhythms, and melodies tailored to your mood or project. From background music to full compositions, this tool makes sound design more accessible and exciting than ever.",
    btn: "Try Now",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    label: "AI VIDEO",
    title: "AI Video Generator",
    subtitle:
      "Create stunning videos with our AI-powered video generator. Produce high-quality clips for marketing, storytelling, or entertainment. With simple prompts, you can direct scenes, styles, and transitions — transforming your ideas into professional-looking video content.",
    btn: "Get Started",
    image: "/c4.png",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const [slideWidthPx, setSlideWidthPx] = useState(0);
  const [gapPx, setGapPx] = useState(0);

  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const firstSlide = trackRef.current.querySelector("[data-slide]");
      if (!firstSlide) return;
      const slideRect = firstSlide.getBoundingClientRect();
      const style = getComputedStyle(trackRef.current);
      const gapValue = parseFloat(style.gap || style.columnGap || "0") || 0;
      setSlideWidthPx(slideRect.width);
      setGapPx(gapValue);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const translateX = index * (slideWidthPx + gapPx);

  const nextSlide = () => {
    setIsTransitioning(true);
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (index >= extendedSlides.length - 1) {
      const t = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(1);
        setTimeout(() => setIsTransitioning(true), 300);
      }, 700);
      return () => clearTimeout(t);
    }

    if (index <= 0) {
      const t = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(extendedSlides.length - 2);
        setTimeout(() => setIsTransitioning(true), 30);
      }, 700);
      return () => clearTimeout(t);
    }
  }, [index, extendedSlides.length]);

  return (
    <div className="w-full max-w-[95%] mx-auto md:mx-0 md:ml-auto relative overflow-hidden md:pt-20 pt-8">
      <div
        ref={trackRef}
        className={`flex ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        } gap-10`}
        style={{ transform: `translateX(-${translateX}px)` }}
      >
        {extendedSlides.map((slide, i) => (
          <div
            key={i}
            data-slide
            className="w-[97%] md:w-[60%] flex-shrink-0 relative h-[250px] md:h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover rounded-2xl"
              priority={i === index}
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-6 text-white">
              {slide.label && (
                <h1 className="hidden md:flex absolute inset-0 items-center justify-center text-7xl font-extrabold">
                  {slide.label}
                </h1>
              )}
              <div className="grid md:flex justify-between items-center relative z-10">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {slide.title}
                  </h2>
                  <p className="mt-2 max-w-xl text-sm md:text-base line-clamp-3">
                    {slide.subtitle}
                  </p>
                </div>
                <button className="bg-white cursor-pointer px-4 h-10 md:h-12 py-1 text-sm rounded-full text-black font-semibold hover:bg-crimson-600 transition mt-2 md:mt-0">
                  {slide.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between p-3 md:mt-4 mt-1">
        <div />
        <div className="flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsTransitioning(true);
                setIndex(i + 1);
              }}
              className={`w-3 h-3 rounded-full ${
                index === i + 1 ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
          >
            <MdChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
          >
            <MdChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
