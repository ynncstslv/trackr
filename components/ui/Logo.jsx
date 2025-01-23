import { PiggyBank } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
	return (
		<>
			<Link href="/" className="flex items-center gap-2">
				<PiggyBank className="size-9 stroke stroke-[1.5] stroke-amber-500" />
				<h1 className="text-3xl font-extrabold leading-tight tracking-tighter text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
					Trackr
				</h1>
			</Link>
		</>
	);
}
