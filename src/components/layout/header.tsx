import Link from 'next/link';
import { Landmark, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';

const navLinks = [
    { href: '/#calculator', label: 'Calculator' },
    { href: '/#plans', label: 'Plans' },
    { href: '/#resources', label: 'Resources' },
    { href: '/#contact', label: 'Contact' },
    { href: '/member-portal', label: 'Member Portal' },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Landmark className="h-6 w-6 text-primary" />
                    <span className="font-bold sm:inline-block">Hedge Pensions Trust</span>
                </Link>
                <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
                    {navLinks.map(link => (
                        <Link key={link.href} href={link.href} className="text-foreground/60 transition-colors hover:text-foreground/80">
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <Button asChild className="hidden bg-accent text-accent-foreground hover:bg-accent/90 md:inline-flex">
                        <Link href="/#calculator">Get Started</Link>
                    </Button>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader className="p-4 border-b">
                                <SheetTitle className="flex items-center space-x-2">
                                    <Link href="/" className="flex items-center space-x-2">
                                        <Landmark className="h-6 w-6 text-primary" />
                                        <span className="font-bold">Hedge Pensions Trust</span>
                                    </Link>
                                </SheetTitle>
                                <SheetDescription>
                                  Main navigation menu
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col p-4">
                                <nav className="flex flex-col space-y-4">
                                    {navLinks.map(link => (
                                        <SheetClose asChild key={link.href}>
                                            <Link href={link.href} className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground">
                                                {link.label}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
