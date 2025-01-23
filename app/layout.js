import Footer from '@/components/Footer';
import './globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
	title: 'Trackr | Budget Tracking Made Easy',
	description:
		'An AI-Powered budget tracking web application that helps users keep their spending under control.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} text-white antialiased bg-gray-950`}>
				{/* header */}
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
