'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
    CodeBracketIcon,
    WindowIcon,
    MagnifyingGlassCircleIcon,
    ShoppingBagIcon,
    SparklesIcon,
    EyeIcon,
} from '@heroicons/react/24/outline'

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import HeaderLogo from '@/components/navigation/Header/HeaderLogo'

const services = [
    {
        name: 'Site web en React-Next',
        description:
            'Application web ultra rapide en Next.js, optimisée Core Web Vitals et prête pour le SEO.',
        href: '/services/site-web-react-next',
        icon: CodeBracketIcon,
    },
    {
        name: 'Site internet WordPress',
        description:
            'Site WordPress sur-mesure, facile à gérer et pensé pour la performance.',
        href: '/services/site-internet-wordpress',
        icon: WindowIcon,
    },
    {
        name: 'SEO',
        description:
            'Audit, optimisation technique et contenu pour gagner des positions sur Google.',
        href: '/services/seo',
        icon: MagnifyingGlassCircleIcon,
    },
    {
        name: 'E-commerce',
        description:
            'Boutique en ligne fluide, checkout optimisé et intégration des moyens de paiement.',
        href: '/services/e-commerce',
        icon: ShoppingBagIcon,
    },
    {
        name: 'Site vitrine',
        description:
            'Site vitrine élégant pour présenter votre activité et générer des contacts qualifiés.',
        href: '/services/site-vitrine',
        icon: SparklesIcon,
    },
    {
        name: 'Accessibilité',
        description:
            'Mise en conformité accessibilité (RGAA/WCAG) pour un site inclusif et confortable à utiliser.',
        href: '/services/accessibilite',
        icon: EyeIcon,
    },
]

const navLinks = [
    { href: '/services/tarifs', label: 'Tarifs' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/me', label: 'À propos' },
]

const mobileLinks = [
    { href: '/services/tarifs', label: 'Tarifs' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/me', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="relative z-50" style={{ background: "transparent" }}>
            <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "var(--border)" }} />

            <nav
                aria-label="Navigation principale"
                className="mx-auto flex max-w-6xl items-center justify-between px-8 py-6 lg:px-12 lg:py-7"
            >
                <div className="flex lg:flex-1">
                    <Link
                        href="/"
                        aria-label="Aller à l'accueil"
                        className="inline-flex items-center"
                    >
                        <HeaderLogo />
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2.5"
                        style={{ color: "var(--fg-muted)" }}
                        aria-label="Ouvrir le menu principal"
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <span className="sr-only">Ouvrir le menu principal</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-10">
                    <Popover className="relative">
                        <PopoverButton
                            className="flex items-center gap-x-1 text-[13px] font-medium uppercase tracking-[0.1em] transition-colors duration-300"
                            style={{ color: "var(--fg-muted)" }}
                        >
                            Services
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="size-4 flex-none opacity-40"
                            />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute left-1/2 z-10 mt-5 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-xl transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            style={{ background: "#0f1015", border: "1px solid var(--border)", boxShadow: "var(--shadow-soft)" }}
                        >
                            <div className="p-3">
                                {services.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-5 rounded-lg p-4 text-sm transition-colors duration-300"
                                    >
                                        <div
                                            className="flex size-10 flex-none items-center justify-center rounded-lg transition-colors duration-300"
                                            style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
                                        >
                                            <item.icon
                                                aria-hidden="true"
                                                className="size-5 transition-colors duration-300"
                                                style={{ color: "var(--fg-subtle)" }}
                                            />
                                        </div>
                                        <div className="flex-auto">
                                            <Link
                                                href={item.href}
                                                className="block text-sm font-medium transition-colors duration-300"
                                                style={{ color: "var(--fg-base)" }}
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" aria-hidden="true" />
                                            </Link>
                                            <p className="mt-1 text-xs" style={{ color: "var(--fg-subtle)" }}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-[13px] font-medium uppercase tracking-[0.1em] transition-colors duration-300 hover:!text-[var(--accent)]"
                            style={{ color: "var(--fg-muted)" }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        className="ml-4 text-[13px] font-medium uppercase tracking-[0.1em] transition-all duration-400 px-5 py-2.5"
                        style={{
                            color: "var(--accent)",
                            border: "1px solid var(--accent)",
                            borderRadius: "0.5rem",
                        }}
                    >
                        Contact
                    </Link>
                </PopoverGroup>
            </nav>

            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="mobile-menu lg:hidden"
                aria-label="Menu principal"
            >
                <div className="fixed inset-0 z-40" style={{ background: "rgba(8,9,12,0.6)", backdropFilter: "blur(4px)" }} />
                <DialogPanel
                    id="mobile-menu"
                    className="fixed inset-y-0 right-0 z-50 flex w-full flex-col overflow-y-auto sm:max-w-sm"
                    style={{ background: "#0c0d12", borderLeft: "1px solid var(--border)" }}
                >
                    <div className="px-8 py-7">
                        <div className="flex items-center justify-between">
                            <Link
                                href="/"
                                aria-label="Retour à l'accueil"
                                className="inline-flex items-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <HeaderLogo />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5"
                                style={{ color: "var(--fg-subtle)" }}
                                aria-label="Fermer le menu"
                            >
                                <span className="sr-only">Fermer le menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>

                        <div className="mt-12 flex flex-col gap-1">
                            {services.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center min-h-[48px] py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] transition-colors duration-300"
                                    style={{ color: "var(--fg-muted)", borderBottom: "1px solid var(--border)" }}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <div className="my-4" />

                            {mobileLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center min-h-[48px] py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] transition-colors duration-300"
                                    style={{ color: "var(--fg-muted)", borderBottom: "1px solid var(--border)" }}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
