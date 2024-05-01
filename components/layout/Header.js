import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex items-center justify-between">
            
            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
            <Link href="/" className="text-green-600 font-bold text-4xl">
                KEC FC
            </Link>
                <Link href="/home" className="">Home</Link>
                <Link href="/menu" className="">Menu</Link>
                <Link href="/about" className="">About</Link>
                <Link href="/contact" className="">Contact</Link>
                
                
            </nav>
            <nav className='flex items-center gap-8 text-gray-500 font-semibold'>
                
            <Link href="/register" className="bg-primary rounded-full text-white px-4 py-2">Register</Link>
            <Link href="/Login">Login</Link>
            </nav>
        </header>
    );
}
