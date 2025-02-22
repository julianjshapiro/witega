"use client";

import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { MathJax, MathJaxContext } from "better-react-mathjax";

import "../../styles/globals.css";
const OPTIONS: EmblaOptionsType = {
    loop: true,
    slidesToScroll: 1,
    skipSnaps: false,
};
const SLIDE_COUNT = 4;
const COURSES = ["Calculus", "Linear Algebra", "Combinatorics", "FTC"];
const COURSE_DESCRIPTIONS = [
    "Learn about derivatives, integrals, and physics with our Calculus course!",
    "Do you want to learn more about vectors and matricies? Our linear algebra course is just for you!",
    "Interested in counting combinations and permutations? Try our combinatorics course!",
    "Learn how to build and code an FTC robot from Team 7959!",
];
const COURSE_BACKGROUNDS = [
    "[url('/calculus.png')]",
    "blue-500",
    "green-500",
    "yellow-500",
];

export default function Home() {
    const [emblaRef] = useEmblaCarousel(OPTIONS, [
        Autoplay({ delay: 7500, stopOnMouseEnter: true }),
    ]);

    return (
        <div>
            <div className="w-full bg-secondary pt-12 mb-12 pb-12 flex items-center justify-center lg:order-2 overflow-hidden">
                <div className="embla w-full" ref={emblaRef}>
                    <div className="embla__container flex w-full">
                        {Array.from(Array(SLIDE_COUNT).keys()).map((index) => (
                            <div
                                key={index}
                                className={`embla__slide flex-shrink-0 w-screen h-full`}
                            >
                                <div className="flex flex-col sm:flex-row md:flex-row justify-center items-center w-full h-full">
                                    <a
                                        className={`bg-${COURSE_BACKGROUNDS[index]} bg-cover bg-center flex pl-7 pt-7 text-2xl text-center h-60 w-60 rounded-xl align-center`}
                                    >
                                        {COURSES[index]}
                                    </a>
                                    <div className="fg-secondary flex items-center justify-center w-[80%] sm:w-[80%] md:w-[40%] pt-10 sm:pt-0 md:pt-0 text-xl text-center mx-20 bg-secondary">
                                        {COURSE_DESCRIPTIONS[index]}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <MathJaxContext>
                <MathJax className="text-6xl pt-[0] text-center">
                    {"\\(\\sqrt[w]{-1}tega\\)"}
                </MathJax>
            </MathJaxContext>
            <h1 className="text-5xl text-center pt-7 pb-0"><b>Coming soon</b></h1>

            <div className="flex flex-col sm:flex-row md:flex-row w-full mt-7 justify-center">
                <div className="text-justify mx-6 ml-5 w-[90%] mt-0 sm:mt-0 sm:mt-0 sm:w-[32%] md:w-[32%] 2xl:w-[26rem]"><h4 className="text-xl"><b>What is Witega?</b></h4>Witega—derived from &apos;<i>wítega,</i>&apos; the Old English word for &quot;a wise man&quot;—is a project aimed at creating easily comprehensible and accessible math courses for more advanced subjects in mathematics.<br /><br />Learn mathematics for free, via easy to follow, bite-sized lessons, then test your knowledge by taking our quizzes.<br /><br />Witega is also fully open source, allowing anyone to help create or edit lessons and courses.  Check out <a href="https://github.com/julianjshapiro/witega">our GitHub repository</a> to learn more.</div>
                <div className="text-justify mx-6 ml-5 w-[90%] mt-10 sm:mt-0 sm:mt-0 sm:w-[32%] md:w-[32%] 2xl:w-[26rem]"><h4 className="text-xl"><b>Why is Witega?</b></h4>When I was studying for the AMC-12, I wanted some online tool to help me learn Combinatorics.  I quickly learned, there was none.  While doing my own research into Number Theory, I realized how easy it would be to turn my notes into a small website, to help teach others about the subject (and to hopefully cement my own understanding).  This is how Witega was born.</div>
                <div className="text-justify mx-6 ml-5 w-[90%] mt-10 sm:mt-0 sm:mt-0 sm:w-[32%] md:w-[32%] 2xl:w-[26rem]"><h4 className="text-xl"><b>Who is Witega?</b></h4> Witega was created and is currently maintained by Julian J. Shapiro, a highschooler aiming to go to college for mathematics. I have a special interest in pure mathematics, but I am also a programmer, pianist, and linguist.</div>
            </div>
        </div>
    );
}
