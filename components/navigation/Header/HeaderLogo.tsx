import Image from "next/image";
import Logo from "../../../public/Images/logo-stephanegamot114.webp";

export default function HeaderLogo() {
    return (
        <div className="relative z-20 flex items-center gap-2">
            <Image
                src={Logo}
                alt="Stéphane Gamot — Agence Web & SEO"
                width={50.25}
                height={30}
                priority
                fetchPriority="high"
                loading="eager"
               
            />
        </div>
    );
}
