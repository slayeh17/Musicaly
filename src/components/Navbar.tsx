"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center ">
            <Navbar className="top-2"/>
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn(
                "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ",
                className
            )}
        >
            <Menu setActive={setActive} >
                <MenuItem item="Home" setActive={setActive} active={active} />
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Our Courses"
                >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">
                            All Courses
                        </HoveredLink>
                        <HoveredLink href="/web-dev">
                            Basic Music Theory
                        </HoveredLink>
                        <HoveredLink href="/interface-design">
                            Advanced Composition
                        </HoveredLink>
                        <HoveredLink href="/seo">Song writing</HoveredLink>
                        <HoveredLink href="/branding">
                            Music Production
                        </HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem
                    item="Contact Us"
                    setActive={setActive}
                    active={active}
                />
            </Menu>
        </div>
    );
}
