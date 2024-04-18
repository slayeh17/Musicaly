import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

export function HeroBackground() {
    return (
        <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                    Master the art of music
                </p>
                <p className="text-3xl text-center max-w-lg mt-8 bg-gradient-to-r from-violet-600 to-red-500 inline-block text-transparent bg-clip-text ">
                    Dive into our comprehensive music courses and transform your
                    musical journey today. Whether you&apos;re a beginner or looking
                    to refine your skills, join us to unlock your true
                    potential.
                </p>
            </div>
        </BackgroundGradientAnimation>
    );
}
