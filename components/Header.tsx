'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
function Header() {
    const pathName = usePathname();
    return (
        <header>
            <div className="inner px-4 sm:px-6 max-w-360 mx-auto">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={140} height={40} priority style={{ width: '140px', height: 'auto' }} />
                </Link>
                <nav>
                    <Link href="/" className={cn('nav-link', {
                        'is-active': pathName === '/',
                        'is-home': true
                    })}>Home</Link>
                    <p>Search Modal</p>
                    <Link href="/coins" className={cn('nav-link', {
                        'is-active': pathName === '/coins'
                    })}>All Coins</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header