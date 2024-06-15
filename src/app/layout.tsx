"use client";

import { Poppins, Unbounded } from "next/font/google";
import type React from "react";

import "@/styles/abstracts/index.scss";
import "@/styles/globals.scss";
import "@/styles/utils.scss";
import { ReactLenis } from "lenis/react";
import "./global.scss";

const poppins = Poppins({
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const unbounded = Unbounded({
	subsets: ["latin"],
	variable: "--font-unbounded",
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} ${unbounded.variable}`}>
				<ReactLenis root>
					<div className="grid-lines">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					{children}
				</ReactLenis>
			</body>
		</html>
	);
}
