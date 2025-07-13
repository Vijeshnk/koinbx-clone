"use client";
import Image from "next/image";
import { useState } from "react";
import { DownArrow } from "../../public/assets/img/NewUI/downarrow";

const linkGroups = [
	{
		title: "Company",
		links: [
			"Markets",
			"Trade",
			"Fees",
			"API Documentation",
			"Trade Contest",
			"Download",
			"List Crypto",
			"Blog",
			"Glossary",
			"Support Ticket",
			"Partnership & Enquiries",
			"Partners",
		],
	},
	{
		title: "Trade Crypto",
		links: [
			"Buy Bitcoin in India",
			"Buy Ethereum in India",
			"Buy Tether in India",
			"Buy Ripple in India",
			"Buy Doge coin in India",
			"Buy Litecoin in India",
			"Buy Tron in India",
			"Buy Cardano in India",
			"Buy Polygon in India",
			"Buy Solana in India",
		],
	},
	{
		title: "Legal",
		links: [
			"White Paper",
			"Terms and Use",
			"Privacy Policy",
			"AML KYC",
			"Refund Policy",
			"Corporate Account",
		],
	},
	{
		title: "Community",
		links: [
			"Twitter",
			"Telegram",
			"YouTube",
			"CoinMarketCap",
			"Instagram",
			"LinkedIn",
			"Facebook",
			"Medium",
			"Threads",
			"Pinterest",
			"VK",
		],
		icons: [
			{
				href: "https://twitter.com/KoinBX",
				icon: "/assets/img/NewUI/Twitter.svg",
				alt: "Twitter",
			},
			{
				href: "https://t.me/koinbx_announcement",
				icon: "/assets/img/NewUI/Tele.svg",
				alt: "Telegram",
			},
			{
				href: "https://www.youtube.com/@KoinBX?sub_confirmation=1",
				icon: "/assets/img/NewUI/Youtube.svg",
				alt: "YouTube",
			},
			{
				href: "https://coinmarketcap.com/exchanges/koinbx/",
				icon: "/assets/img/NewUI/CMC.svg",
				alt: "CoinMarketCap",
			},
			{
				href: "https://www.instagram.com/koinbx/",
				icon: "/assets/img/NewUI/Insta.svg",
				alt: "Instagram",
			},
			{
				href: "https://www.linkedin.com/company/koinbx",
				icon: "/assets/img/NewUI/Linkedin.svg",
				alt: "LinkedIn",
			},
			{
				href: "https://www.facebook.com/KoinBX/",
				icon: "/assets/img/NewUI/Fb.svg",
				alt: "Facebook",
			},
			{
				href: "https://medium.com/@koinbx",
				icon: "/assets/img/NewUI/Medium.svg",
				alt: "Medium",
			},
			{
				href: "https://www.threads.net/@koinbx",
				icon: "/assets/img/NewUI/Thread.svg",
				alt: "Threads",
			},
			{
				href: "https://in.pinterest.com/koinbx/",
				icon: "/assets/img/NewUI/Pinterest.svg",
				alt: "Pinterest",
			},
			{
				href: "https://vk.com/koinbx",
				icon: "/assets/img/NewUI/VK.svg",
				alt: "VK",
			},
		],
	},
];

const Footer = () => {
	const [open, setOpen] = useState([false, false, false, false]);

	const handleAccordion = (idx: number) => {
		setOpen((prev) => prev.map((v, i) => (i === idx ? !v : v)));
	};

	return (
		<footer className="w-full bg-white dark:bg-[#101426] text-[#707a8a] dark:text-white pt-8 pb-4">
			<div className="max-w-7xl mx-auto px-4">
				{/* Desktop grid layout */}
				<div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 mb-10 text-xs">
					{/* Logo and Description */}
					<div className="lg:col-span-2 flex flex-col items-center md:items-start">
						<Image
							src="/assets/img/NewUI/KoinbxLogo.svg"
							alt="KoinBX Logo"
							width={120}
							height={30}
							className="h-8 w-auto mb-4"
						/>
						<p className="mb-4 max-w-xs leading-relaxed">
							Empower your crypto journey with KoinBX, the simple and secure crypto
							exchange platform
						</p>
						<div className="flex flex-col items-center md:items-start gap-2 mb-4">
							<div className="flex gap-2">
								<a
									href="https://play.google.com/store/apps/details?id=com.application.koinbazar&hl=en_IN&gl=US"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										src="/assets/img/NewUI/GooglePlayicon.svg"
										alt="Get it on Google Play"
										width={140}
										height={42}
										className="h-10 w-auto"
									/>
								</a>
								<a
									href="https://apps.apple.com/in/app/koinbazar/id1567360326"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										src="/assets/img/NewUI/iOS.svg"
										alt="Download on App Store"
										width={140}
										height={42}
										className="h-10 w-auto"
									/>
								</a>
							</div>
							<Image
								src="/assets/img/NewUI/qr-code-placeholder.svg"
								alt="QR Code"
								width={100}
								height={100}
								className="w-24 h-24 bg-white p-2 rounded mx-auto md:mx-0"
							/>
						</div>
						<p className="text-[#707a8a] dark:text-gray-400 mb-4">
							A FIU (Govt. of India) registered entity with REID :<br />VA00448773
						</p>
					</div>
					{/* Company */}
					<div>
						<h3 className="font-semibold mb-4 text-black dark:text-white text-xs">
							Company
						</h3>
						<ul className="space-y-2">
							{linkGroups[0].links.map((link) => (
								<li key={link}>
									<a
										href="#"
										className="hover:text-[#00C5F6] transition-colors"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>
					{/* Trade Crypto */}
					<div>
						<h3 className="font-semibold mb-4 text-black dark:text-white text-xs">
							Trade Crypto
						</h3>
						<ul className="space-y-2">
							{linkGroups[1].links.map((link) => (
								<li key={link}>
									<a
										href="#"
										className="hover:text-[#00C5F6] transition-colors"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>
					{/* Legal */}
					<div>
						<h3 className="font-semibold mb-4 text-black dark:text-white text-xs">
							Legal
						</h3>
						<ul className="space-y-2 mb-6">
							{linkGroups[2].links.map((link) => (
								<li key={link}>
									<a
										href="#"
										className="hover:text-[#00C5F6] transition-colors"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>
					{/* Community (moved to right of Legal) */}
					<div>
						<h3 className="font-semibold mb-4 text-black dark:text-white text-xs text-left">
							Community
						</h3>
						<div className="grid grid-cols-4 gap-1">
							{linkGroups[3].icons?.map((item) => (
								<a
									key={item.alt}
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-[#25d0f7] rounded-full p-2 hover:bg-[#00C5F6] transition-colors flex items-center justify-center"
								>
									<Image
										src={item.icon}
										alt={item.alt}
										width={24}
										height={24}
										className="w-6 h-6"
									/>
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Mobile Accordions */}
				<div className="md:hidden divide-y divide-gray-200 dark:divide-gray-700 mb-6">
					{linkGroups.map((group, idx) => (
						<div key={group.title}>
							<button
								className="w-full flex justify-between items-center py-4 font-semibold text-left text-black dark:text-white focus:outline-none"
								onClick={() => handleAccordion(idx)}
								aria-expanded={open[idx]}
								aria-controls={`footer-accordion-${idx}`}
							>
								{group.title}
								<span
									className={`transform transition-transform ${
										open[idx] ? "rotate-180" : "rotate-0"
									}`}
								>
									<DownArrow />
								</span>
							</button>
							<div
								id={`footer-accordion-${idx}`}
								className={`overflow-hidden transition-all duration-300 ${
									open[idx] ? "max-h-96 py-2" : "max-h-0"
								}`}
							>
								{group.title !== "Community" ? (
									<ul className="pl-2 space-y-2">
										{group.links.map((link, i) => (
											<li key={link}>
												<a
													href="#"
													className="text-sm hover:text-[#00C5F6] transition-colors"
												>
													{link}
												</a>
											</li>
										))}
									</ul>
								) : (
									<div className="grid grid-cols-4 gap-2 pt-2">
										{group.icons?.map((item, i) => (
											<a
												key={item.alt}
												href={item.href}
												target="_blank"
												rel="noopener noreferrer"
												className="bg-white dark:bg-gray-800 rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
											>
												<Image
													src={item.icon}
													alt={item.alt}
													width={24}
													height={24}
													className="w-6 h-6"
												/>
											</a>
										))}
									</div>
								)}
							</div>
						</div>
					))}
				</div>

				{/* Risk Warning */}
				<div className="border-t border-gray-200 dark:border-gray-600 pt-6 mb-6">
					<h4 className="text-red-500 font-semibold mb-2 text-base">
						RISK WARNING
					</h4>
					<p className="text-sm leading-relaxed">
						Crypto trading is subject to high market risk. We request you to trade
						cautiously.{" "}
						<span className="text-[#00C5F6] font-semibold">KoinBX</span> will
						provide its best efforts to list quality cryptos, and we will not be
						responsible for your trading losses.
					</p>
				</div>

				{/* Copyright */}
				<div className="border-t border-gray-200 dark:border-gray-600 pt-4 text-center">
					<p className="text-xs">© 2024 KoinBX. All rights reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
