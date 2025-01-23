import { SquareArrowOutUpRight } from 'lucide-react';

const footerLinks = [
	{
		id: 1,
		title: 'GitHub',
		href: 'https://github.com/ynncstslv/',
	},
	{
		id: 2,
		title: 'LinkedIn',
		href: 'https://linkedin.com/in/ynncstslv/',
	},
	{
		id: 3,
		title: 'Instagram',
		href: 'https://instagram.com/ynncstslv/',
	},
];

export default function Footer() {
	return (
		<footer className="">
			<div></div>
			<div className="container">
				<div className="flex flex-col items-center gap-6 py-6 text-sm border-t border-white/15 md:flex-row md:justify-between">
					<div className="text-white/40">&copy; 2025. All Rights Reserved</div>
					<nav className="flex items-center gap-8">
						{footerLinks.map((link) => (
							<a
								key={link.id}
								href={link.href}
								target="_blank"
								className="inline-flex items-center gap-1.5 text-white/60 transition duration-300 hover:scale-105"
							>
								<span className="font-semibold">{link.title}</span>
								<SquareArrowOutUpRight className="size-4" />
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
}
