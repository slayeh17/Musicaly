"use client";
import React from "react";
import Link from "next/link";

export function GlowingButton({ text }: any) {
    return (
        <>
            <Link href={"/"}>
                <button className="bg-white/20 ring-1 ring-black/5 px-4 py-2 rounded-3xl mt-4 cursor-pointer text-white transition-shadow duration-300 hover:shadow-[0_0px_0px_10px_rgba(0,0,255,0.3)]" >
                    {text}
                </button>
            </Link>
        </>
    );
}


