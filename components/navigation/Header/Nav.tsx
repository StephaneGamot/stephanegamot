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
    RectangleGroupIcon,
    LightBulbIcon,
    DocumentTextIcon,
    QuestionMarkCircleIcon,
    UserCircleIcon,
    EnvelopeIcon,
} from '@heroicons/react/24/outline'

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
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



const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon },
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-purple-500">
            <nav
                aria-label="Navigation principale"
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <Link
                        href="/"
                        aria-label="Aller à l’accueil"
                        className="-m-1.5 p-1.5 inline-flex items-center"
                    >
                        <HeaderLogo />
                    </Link>
                </div>

                {/* Bouton mobile */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
                        aria-label="Ouvrir le menu principal"
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <span className="sr-only">Ouvrir le menu principal</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                {/* Desktop nav */}
                <PopoverGroup className="hidden lg:flex lg:gap-x-12 ">
                    <Popover className="relative ">
                        <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold text-gray-900 dark:text-white ">
                            Services
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="size-5 flex-none text-gray-400 dark:text-gray-500"
                            />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 "
                        >
                            <div className="p-4 ">
                                {services.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 dark:hover:bg-white/5  "
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700 ">
                                            <item.icon
                                                aria-hidden="true"
                                                className="size-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-white"
                                            />
                                        </div>
                                        <div className="flex-auto">
                                            <Link
                                                href={item.href}
                                                className="block font-semibold text-gray-900 dark:text-white "
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" aria-hidden="true" />
                                            </Link>
                                            <p className="mt-1 text-gray-600 dark:text-gray-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:divide-white/10 dark:bg-gray-700/50">
                                {callsToAction.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700/50"
                                        aria-label={item.name}
                                    >
                                        <item.icon
                                            aria-hidden="true"
                                            className="size-5 flex-none text-gray-400 dark:text-gray-500"
                                        />
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Link
                        href="/portfolio"
                        className="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/idees"
                        className="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                        Idées
                    </Link>
                    <Link
                        href="blog"
                        className="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                        Blog
                    </Link>
                    <Link
                        href="faq"
                        className="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                        FAQ
                    </Link>
                    <Link
                        href="/me"
                        className="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                        A Propos
                    </Link>
                    <Link
                        href="/contact"
                        className="text-lg font-semibold text-gray-900 dark:text-white"
                    >
                        Contact
                    </Link>
                </PopoverGroup>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end" />
            </nav>

            {/* Mobile dialog */}
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="mobile-menu lg:hidden"
                aria-label="Menu principal"
            >
                <div className="fixed inset-0 z-10" />
                <DialogPanel
                    id="mobile-menu"
                    className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-white/10"
                >
                    <div className="p-6">
                        <div className="flex items-center justify-between">
                            <Link
                                href="/"
                                aria-label="Retour à l’accueil"
                                className="-m-1.5 p-1.5 inline-flex items-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <HeaderLogo />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
                                aria-label="Fermer le menu"
                            >
                                <span className="sr-only">Fermer le menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>

                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
                                {/* Services mobile */}
                                <div className="space-y-2 py-6">
                                    {services.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-800 dark:text-white dark:hover:bg:white/5"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-800 dark:group-hover:bg-gray-700">
                                                <item.icon
                                                    aria-hidden="true"
                                                    className="size-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-white"
                                                />
                                            </div>
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                                {/* Liens classiques mobile */}
                                <div className="space-y-2 py-6">
                                    <Link
                                        href="/portfolio"
                                        className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-800 dark:text-white dark:hover:bg-white/5"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-800 dark:group-hover:bg-gray-700">
                                            <RectangleGroupIcon
                                                aria-hidden="true"
                                                className="size-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-white"
                                            />
                                        </div>
                                        <span>Portfolio</span>
                                    </Link>

                                    <Link
                                        href="idees"
                                        className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-800 dark:text-white dark:hover:bg-white/5"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-800 dark:group-hover:bg-gray-700">
                                            <LightBulbIcon
                                                aria-hidden="true"
                                                className="size-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-white"
                                            />
                                        </div>
                                        <span>Idées</span>
                                    </Link>

                                    <Link
                                        href="blog"
                                        className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-800 dark:text-white dark:hover:bg-white/5"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-800 dark:group-hover:bg-gray-700">
                                            <DocumentTextIcon
                                                aria-hidden="true"
                                                className="size-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-white"
                                            />
                                        </div>
                                        <span>Blog</span>
                                    </Link>

                                    <Link
                                        href="/faq"
                                        className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-800 dark:text-white dark:hover:bg-white/5"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-800 dark:group-hover:bg-gray-700">
                                            <QuestionMarkCircleIcon
                                                aria-hidden="true"
                                                className="size-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-white"
                                            />
                                        </div>
                                        <span>FAQ</span>
                                    </Link>

                                    <Link
                                        href="/me"
                                        className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-800 dark:text-white dark:hover:bg-white/5"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-800 dark:group-hover:bg-gray-700">
                                            <UserCircleIcon
                                                aria-hidden="true"
                                                className="size-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-white"
                                            />
                                        </div>
                                        <span>A Propos</span>
                                    </Link>

                                    <Link
                                        href="/contact"
                                        className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-800 dark:text-white dark:hover:bg-white/5"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-800 dark:group-hover:bg-gray-700">
                                            <EnvelopeIcon
                                                aria-hidden="true"
                                                className="size-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-white"
                                            />
                                        </div>
                                        <span>Contact</span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* CTA bas mobile */}

                </DialogPanel>
            </Dialog>
        </header>
    )
}
