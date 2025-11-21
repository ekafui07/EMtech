import Link from 'next/link';
import { Landmark, Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const navLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/#calculator', label: 'Calculator' },
    { href: '/#plans', label: 'Plans' },
    { href: '/#resources', label: 'Resources' },
    { href: '/#contact', label: 'Contact' },
];

const downloadLinks = [
    { href: '/pdfs/tier-2-claim-form.pdf', label: 'Tier 2 Claim Form' },
    { href: '/pdfs/survivors-claim-form.pdf', label: 'Survivors Claim Form' },
    { href: '/pdfs/tier-2-enrollment-form.pdf', label: 'Tier 2 Enrollment Form' },
    { href: '/pdfs/tier-3-enrollment-form.pdf', label: 'Tier 3 Enrollment Form' },
    { href: '/pdfs/member-update-form.pdf', label: 'Member Update Form' },
    { href: '/pdfs/pempamsie-housing-scheme-application-form.pdf', label: 'Pempamsie Housing Scheme Application Form' },
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
                     <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/60 transition-colors hover:text-foreground/80 focus:outline-none">
                            Download <ChevronDown className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {downloadLinks.map(link => (
                                <DropdownMenuItem key={link.label} asChild>
                                    <a href={link.href} download>{link.label}</a>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link href="/member-portal" className="text-foreground/60 transition-colors hover:text-foreground/80">Member Portal</Link>
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
                        <SheetContent side="left" className="p-0">
                            <SheetHeader className="p-4 border-b">
                                <SheetTitle className="flex items-center space-x-2">
                                    <SheetClose asChild>
                                        <Link href="/" className="flex items-center space-x-2">
                                            <Landmark className="h-6 w-6 text-primary" />
                                            <span className="font-bold">Hedge Pensions Trust</span>
                                        </Link>
                                    </SheetClose>
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
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1" className="border-b-0">
                                            <AccordionTrigger className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground py-0 hover:no-underline">
                                                Download
                                            </AccordionTrigger>
                                            <AccordionContent className="pt-2">
                                                <div className="flex flex-col space-y-4 pl-4">
                                                {downloadLinks.map(link => (
                                                    <SheetClose asChild key={link.label}>
                                                        <a href={link.href} download className="text-base text-foreground/60 transition-colors hover:text-foreground">{link.label}</a>
                                                    </SheetClose>
                                                ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                     <SheetClose asChild>
                                        <Link href="/member-portal" className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground">
                                            Member Portal
                                        </Link>
                                    </SheetClose>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
