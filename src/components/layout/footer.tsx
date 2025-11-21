import { Landmark, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t bg-secondary">
            <div className="container flex flex-col items-center justify-between gap-6 py-10 md:flex-row md:gap-4 md:py-8">
                <div className="flex flex-col items-center gap-4 text-center md:items-start md:gap-2 md:text-left">
                    <Link href="/" className="flex items-center space-x-2">
                        <Landmark className="h-6 w-6 text-primary" />
                        <span className="font-bold">Hedge Pensions Trust</span>
                    </Link>
                    <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <MapPin className="h-4 w-4" />
                            <span>CLOGSAG Building, Ministries Accra</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <Phone className="h-4 w-4" />
                            <a href="tel:+233302666581" className="hover:text-primary">+233 302 666 581</a>
                        </div>
                    </div>
                     <p className="text-xs text-muted-foreground/80 mt-2">
                        © {new Date().getFullYear()} Hedge Pensions Trust. All rights reserved.
                    </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Link href="/about" className="hover:text-primary">About Us</Link>
                    <Link href="#" className="hover:text-primary">Privacy Policy</Link>
                    <Link href="#" className="hover:text-primary">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
