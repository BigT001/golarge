"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
	return (
	<header className="bg-[#cad1db] text-black min-h-screen relative overflow-x-hidden pt-20 md:pt-24 lg:pt-0">
			<div className="lg:px-30 mx-auto w-full h-screen">
				<div className="relative h-full">
							<div className="grid grid-cols-1 lg:grid-cols-12 h-full items-start lg:items-center gap-0 lg:gap-2">
						{/* Left - copy */}
						<div className="lg:col-span-6 xl:col-span-6 order-2 lg:order-1 mt-0 lg:mt-0 -mt-32 sm:-mt-48 flex flex-col justify-start items-center text-center lg:items-start lg:text-left z-50">
							<div className="max-w-2xl">
								{/* <p className="italic text-2xl md:text-3xl text-white/90 mb-4">Hi, I&apos;m</p> */}
								{/* Mobile-only dark background for headline + paragraph; larger type on mobile */}
								<div className="absolute left-0 right-0 bottom-0 w-full bg-black text-white p-10 sm:p-16 text-center lg:static lg:left-0 lg:translate-x-0 lg:bottom-auto lg:w-auto lg:bg-transparent lg:text-black lg:p-0 rounded-none sm:rounded-md z-60">
									<h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold  mb-2 md:mb-6">
										<span className="block">Dipo Obisesan</span>
									</h1>

									<p className="text-xl md:text-2xl lg:text-3xl text-slate-100 md:text-slate-100 lg:text-slate-700 mb-2 md:mb-8">
										A prophetic voice, teacher, and leader with a passion for awakening purpose and rebuilding spiritual foundations in nations.
										{/* when the manna stops, it is not the end. It is the beginning of a greater harvest. */}
									</p>

									<div className="flex justify-center text-center mt-6">
										{/* make the CTA larger on large screens and animate the arrow */}
										<Link
											href="/about"
											className="group inline-flex items-center gap-3 text-white lg:text-black font-semibold hover:underline text-lg lg:text-2xl px-3 lg:px-4 py-2 lg:py-3"
										>
											<span className="leading-none">Learn more</span>
											<span
												aria-hidden
												className="ml-1 arrow-wiggle inline-block text-2xl lg:text-3xl"
											>
												→
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>

						{/* Right - image with scribble */}
						<div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end items-start lg:items-end relative h-[50vh] lg:h-full order-1 lg:order-2">
							{/* Decorative scribble behind the image
							<svg viewBox="0 0 800 600" className="absolute -right-8 top-0 w-[60%] max-w-[900px] text-white opacity-95 hidden lg:block" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
								<path d="M50 400 C200 100 600 100 750 400" stroke="currentColor" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M120 460 C300 200 550 220 700 460" stroke="currentColor" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" />
							</svg> */}

							<div className="relative z-10 w-[95vw] sm:w-[86vw] md:w-[580px] lg:w-[720px] xl:w-[800px] h-full flex items-center lg:items-end overflow-visible">
								<div className="relative w-full h-full">
									<Image
										src="/galleryimages/aboutpic.jpeg"
										alt="Hero"
										fill
										sizes="(max-width: 1024px) 90vw, 50vw"
										className="object-cover object-top sm:object-cover sm:object-top md:object-contain lg:object-bottom drop-shadow-2xl translate-y-0 sm:translate-y-56 lg:translate-y-0 scale-140 sm:scale-175 md:scale-140 lg:scale-100"
										priority
									/>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
