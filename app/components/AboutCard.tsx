
"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type AboutCardProps = {
    title?: string;
    subtitle?: string;
    imageSrc?: string;
    imageAlt?: string;
    ctaLabel?: string;
    ctaHref?: string;
};

export default function AboutCard({
    title = "Dipo Obisesan",
    subtitle = "Dipo Obisesan is a prophetic voice, teacher, and leader with a passion for awakening purpose and rebuilding spiritual foundations in nations. As the visionary founder of GoLarge Global Mandate, he carries a divine assignment to raise kingdom builders who influence culture, systems, and generations.\nThrough his ministry, Dipo has inspired many to pursue transformation, divine wisdom, and spiritual maturity. His message blends revelation with practicality, calling believers to rise above survival and walk in their God-given dominion.\nHe believes that when the manna stops, it is not the end—it is the beginning of a greater harvest.",
    imageSrc = "/galleryimages/aboutpic.jpeg",
    imageAlt = "Portrait of Dipo Obisesan",
    ctaLabel = "Learn more",
    ctaHref = "/vision-school",
}: AboutCardProps) {
    const rootRef = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!rootRef.current) return;
        const el = rootRef.current;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        obs.unobserve(el);
                    }
                });
            },
            { threshold: 0.12 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    // Parallax effect for image wrappers inside this component
    useEffect(() => {
        if (!rootRef.current) return;
        const els = Array.from(rootRef.current.querySelectorAll<HTMLElement>(".about-parallax"));
        if (!els.length) return;

        let ticking = false;

        const update = () => {
            els.forEach((el) => {
                const rect = el.getBoundingClientRect();
                // compute a small translate based on element's distance from center
                const speed = 0.12; // tweak for subtlety
                const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
                const translate = Math.max(Math.min(-centerOffset * speed, 40), -40);
                el.style.transform = `translateY(${translate}px)`;
            });
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    return (
        <section ref={rootRef} className={`about-collection mx-auto max-w-6xl px-4 md:px-6 py-10 animate-slide ${inView ? 'in-view' : ''}`}>
            <div className="flex flex-col md:flex-row items-stretch gap-8">
                {/* Image column - on mobile the image becomes full width above the text */}
                {/* Image column: expand to section edges on small screens so image reads full-width */}
                <div className="w-full md:w-1/3 flex-shrink-0 flex items-center md:items-start">
                    <div className="relative group w-full">
                        {/* Mobile full-bleed: use negative margins on mobile only so edges touch viewport */}
                        <div
                            className="block md:hidden"
                            style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)', width: '100vw', boxSizing: 'border-box' }}
                        >
                            <div className="relative w-full h-screen sm:min-h-[80vh] overflow-hidden rounded-2xl bg-slate-100 about-parallax">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill
                                    className="object-cover object-top origin-top w-full h-full"
                                    priority
                                />

                                {/* gradient fade and caption overlay */}
                                <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-b-2xl pointer-events-none" />
                                <div className="absolute left-4 right-4 bottom-6 text-white text-sm md:text-base">{imageAlt}</div>
                            </div>
                        </div>

                        {/* Desktop/tablet: in-flow rounded image with parallax class for subtle movement */}
                        <div className="hidden md:block relative w-full">
                            <div className="relative w-full h-72 md:h-96 lg:h-[520px] rounded-2xl overflow-hidden bg-slate-100 about-parallax">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill
                                    className="object-cover object-top origin-top w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                                    priority
                                />
                            </div>
                        </div>

                        {/* subtle accent - positioned relative to section (keep visible on md+) */}
                        <div className="pointer-events-none absolute -bottom-4 left-6 right-6 h-6 bg-gradient-to-r from-blue-200/30 to-red-200/30 blur-lg rounded-lg md:block hidden" />
                    </div>
                </div>

                {/* Content column - remove card backgrounds so text sits on page */}
                <div className="w-full md:w-2/3 flex flex-col gap-4 mt-5">
                    <header className="text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold">{title}</h2>
                        <div className="mt-2 flex items-center gap-3 justify-center">
                            <span className="text-sm text-slate-500 dark:text-slate-400">• Founder, GoLarge Global Mandate</span>
                        </div>
                    </header>



                    <div className="px-0 md:px-4">
                        <div className="mx-auto max-w-3xl">
                            {/* lead sentence */}
                            <p className="text-sm md:text-base text-blue-600 dark:text-blue-400 font-medium">A life called to awaken purpose and rebuild spiritual foundations across nations.</p>

                            {/* expanded write-up split into smaller digestible paragraphs */}
                            <p className="mt-3 text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">{subtitle}</p>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-0 md:px-2 items-start">
                        <div className="sm:pr-6">
                            <h5 className="text-base font-semibold">Ministry Focus</h5>
                            <p className="mt-2 text-base text-slate-700 dark:text-slate-300">Inspiring transformation, divine wisdom, and spiritual maturity.</p>
                        </div>

                        {/* divider: vertical on md+, horizontal on small screens */}
                        <div className="relative">
                            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent dark:from-transparent dark:via-slate-700 dark:to-transparent -translate-x-3" />
                            <div className="block md:hidden w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700 mt-4 mb-4" />

                            <div className="pl-0 md:pl-6">
                                <h5 className="text-base font-semibold">Highlights</h5>
                                <ul className="mt-2 text-base text-slate-700 dark:text-slate-300 space-y-1">
                                    <li>• Global ministry initiatives</li>
                                    <li>• Teaching & mentorship</li>
                                    <li>• Cultural influence work</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// local styles are minimal and scoped — small slide/fade animation used for the component entrance
/* Note: Tailwind could be used instead, but inline style keeps it self-contained */
const _styles = `
.animate-slide { opacity: 0; transform: translateY(14px); transition: opacity 520ms ease, transform 520ms ease; }
.animate-slide.in-view { opacity: 1; transform: translateY(0); }
`;

// append style to document head when module is imported (idempotent)
if (typeof document !== 'undefined' && !document.getElementById('aboutcard-styles')) {
    const s = document.createElement('style');
    s.id = 'aboutcard-styles';
    s.innerHTML = _styles;
    document.head.appendChild(s);
}
