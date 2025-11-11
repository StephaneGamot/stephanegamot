'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'
import HeaderLogo from "@/components/navigation/Header/HeaderLogo";

const services = [


    { name: 'Site web en React-Next', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Site internet WordPress', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'SEO', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'E-commerce', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Site vitrine', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Accessibilité', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [


    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white dark:bg-gray-900">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                   < HeaderLogo />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white">
                            Services
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400 dark:text-gray-500" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline outline-1 outline-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
                        >
                            <div className="p-4">
                                {services.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 dark:hover:bg-white/5"
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                                            <item.icon
                                                aria-hidden="true"
                                                className="size-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-white"
                                            />
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-gray-900 dark:text-white">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:divide-white/10 dark:bg-gray-700/50">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700/50"
                                    >
                                        <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400 dark:text-gray-500" />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                       Portfolio
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                        Idées
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                       Blog
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                        FAQ
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                        A Propos
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                        Contact
                    </a>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">

                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-white/10">
                    <div className="p-6">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <HeaderLogo />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
                                <div className="space-y-2 py-6">
                                    {services.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                                        >
                                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-800 dark:group-hover:bg-gray-700">
                                                <item.icon
                                                    aria-hidden="true"
                                                    className="size-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-white"
                                                />
                                            </div>
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="space-y-2 py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                                    >
                                        Portfolio
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                                    >
                                        Idées
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                                    >
                                        Blog
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                                    >
                                        FAQ
                                    </a>     <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                                >
                                    A Propos
                                </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                                    >
                                       Contact
                                    </a>


                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center dark:divide-white/5 dark:bg-gray-800/50">
                        {callsToAction.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}