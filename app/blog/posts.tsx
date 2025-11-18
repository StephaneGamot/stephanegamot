// app/blog/posts.tsx
import type { ReactNode } from "react";
import Image from "next/image";

export type BlogPost = {
    id: number;
    slug: string;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
    datetime: string;
    readingTimeMinutes: number;
    views: number;
    category: { title: string; href: string };
    author: {
        name: string;
        role: string;
        href: string;
        imageUrl: string;
    };
    content: ReactNode; // ⬅️ plus `string`, maintenant du JSX
};

export const posts: BlogPost[] = [
    {
        id: 1,
        slug: "booster-taux-conversion-site-web",
        title: "Boostez le taux de conversion de votre site",
        description:
            "Des leviers concrets pour transformer plus de visiteurs en clients : clarté, confiance, performance et UX.",
        imageUrl:
            "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?auto=format&fit=crop&w=1600&q=80",
        date: "16 mars 2024",
        datetime: "2024-03-16",
        readingTimeMinutes: 4,
        views: 132,
        category: { title: "Conversion", href: "#" },
        author: {
            name: "Stéphane Gamot",
            role: "Développeur full-stack & SEO",
            href: "/me",
            imageUrl:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        content: (
            <>
                <p>
                    Un bon site ne se contente pas d’être beau : il doit{" "}
                    <strong>convertir</strong>. Autrement dit, transformer un maximum de
                    visiteurs en contacts, rendez-vous ou ventes.
                </p>

                <h2>1. Clarifier l’offre et l’appel à l’action</h2>
                <p>
                    Si, en 5&nbsp;secondes, on ne comprend pas ce que vous proposez et à
                    qui cela s’adresse, on quitte le site. Votre page d’accueil doit
                    répondre clairement à trois questions :
                </p>
                <ul>
                    <li>Qui êtes-vous&nbsp;?</li>
                    <li>Quel problème résolvez-vous&nbsp;?</li>
                    <li>Que doit faire l’utilisateur maintenant&nbsp;?</li>
                </ul>

                <div className="my-8 relative aspect-video w-full overflow-hidden rounded-2xl">
                    <Image
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
                        alt="Exemple de page d'accueil claire et lisible"
                        fill
                        className="object-cover"
                    />
                </div>

                <h2>2. Rassurer avec des preuves sociales</h2>
                <p>
                    Pour passer à l’action, l’utilisateur doit sentir qu’il peut{" "}
                    <strong>vous faire confiance</strong>. Quelques leviers simples :
                </p>
                <ul>
                    <li>avis clients, témoignages, études de cas,</li>
                    <li>logos de clients ou de partenaires,</li>
                    <li>
                        une page “À propos” qui montre qu’il y a de vraies personnes
                        derrière le site.
                    </li>
                </ul>

                <div className="my-8 grid gap-4 sm:grid-cols-2">
                    <div className="relative aspect-video overflow-hidden rounded-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1523287562758-66c7fc58967a?auto=format&fit=crop&w=1200&q=80"
                            alt="Interface montrant des avis clients"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
                            alt="Client satisfait utilisant un site web performant"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <h2>3. Performance & mobile : non négociables</h2>
                <p>
                    Un site lent ou mal adapté au mobile tue votre conversion, même s’il
                    est magnifique. Chaque seconde de chargement supplémentaire fait
                    baisser vos demandes de devis, réservations ou commandes.
                </p>
                <p>En pratique, travaillez en priorité :</p>
                <ul>
                    <li>l’optimisation des images,</li>
                    <li>le cache et le CDN,</li>
                    <li>
                        un framework moderne comme <strong>Next.js</strong> pour un rendu
                        performant.
                    </li>
                </ul>

                <h2>4. Simplifier le formulaire ou le tunnel de commande</h2>
                <p>
                    Plus il y a d’étapes, plus vous perdez de monde. Posez-vous la
                    question :{" "}
                    <em>qu’est-ce qui est vraiment indispensable pour démarrer la relation&nbsp;?</em>
                </p>
                <p>
                    Parfois, un simple formulaire prénom / email / message convertira
                    mieux qu’un énorme pavé de champs inutiles.
                </p>

                <h2>En résumé</h2>
                <p>
                    Pour booster votre taux de conversion, concentrez-vous sur les
                    fondamentaux : clarté, réassurance, vitesse et simplicité. Le design
                    compte, mais c’est l’ensemble de l’expérience qui transforme un
                    visiteur en client.
                </p>
            </>
        ),
    },
    {
        id: 2,
        slug: "seo-pour-pme-belgique",
        title: "SEO pour PME en Belgique : par où commencer ?",
        description:
            "Vous n’avez pas besoin d’un tunnel de growth hacker : commencez par ces bases SEO adaptées aux PME belges.",
        imageUrl:
            "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?auto=format&fit=crop&w=1600&q=80",
        date: "10 mars 2024",
        datetime: "2024-03-10",
        readingTimeMinutes: 5,
        views: 87,
        category: { title: "SEO", href: "#" },
        author: {
            name: "Stéphane Gamot",
            role: "Développeur full-stack & SEO",
            href: "/me",
            imageUrl:
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        content: (
            <>
                <p>
                    Le SEO peut sembler technique, mais pour une PME, l’essentiel tient en
                    quelques priorités très concrètes. Pas besoin d’usine à gaz : il faut
                    surtout être clair, cohérent et régulier.
                </p>

                <h2>1. Miser sur le local : votre vraie force</h2>
                <p>
                    En Belgique, une petite entreprise n’a pas besoin de se battre sur
                    “site internet” tout court. En revanche,{" "}
                    <strong>“création de site web à Bruxelles”</strong> ou “traiteur
                    événementiel Halle” sont des requêtes bien plus pertinentes.
                </p>
                <ul>
                    <li>
                        Mentionnez clairement votre ville / région sur vos pages clés (titre
                        de page, H1, contenus).
                    </li>
                    <li>
                        Créez une page dédiée par grande zone si nécessaire : Bruxelles,
                        Brabant wallon, etc.
                    </li>
                </ul>

                <h2>2. Un site rapide, lisible et sécurisé</h2>
                <p>
                    Google ne veut pas envoyer ses utilisateurs vers un site lent, mal
                    adapté au mobile ou douteux. Vous avez donc tout intérêt à :
                </p>
                <ul>
                    <li>passer votre site en HTTPS (si ce n’est pas déjà fait),</li>
                    <li>optimiser les images et éviter les scripts inutiles,</li>
                    <li>soigner l’affichage sur mobile (menus, tailles de texte, boutons).</li>
                </ul>

                <div className="my-8 relative aspect-video w-full overflow-hidden rounded-2xl">
                    <Image
                        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
                        alt="Graphique illustrant une progression de trafic SEO"
                        fill
                        className="object-cover"
                    />
                </div>

                <h2>3. Créer des pages claires autour de vos services</h2>
                <p>
                    Chaque service important mérite une page dédiée : plus votre contenu
                    est précis, plus Google comprend à qui il doit vous envoyer.
                </p>
                <p>
                    Par exemple : au lieu d’une seule page “Services”, préférez plusieurs
                    pages :
                </p>
                <ul>
                    <li>Création de site vitrine à Bruxelles</li>
                    <li>Site e-commerce pour PME</li>
                    <li>Refonte de site existant</li>
                </ul>

                <h2>4. Avis et liens : le bouche-à-oreille numérique</h2>
                <p>
                    Pour une PME, quelques bons avis Google et quelques liens depuis des
                    sites locaux (partenaires, annuaires sérieux, associations) valent
                    souvent plus qu’une énorme stratégie nationale.
                </p>

                <h2>En pratique</h2>
                <p>
                    Le but n’est pas de “tricher” avec Google, mais de lui faciliter le
                    travail – tout en restant utile pour vos vrais clients. Si vos pages
                    sont claires, rapides et orientées besoins réels, le SEO devient un
                    levier stable, surtout en local.
                </p>
            </>
        ),
    },
    {
        id: 3,
        slug: "experience-client-et-performance-web",
        title: "Expérience client & performance web : le duo gagnant",
        description:
            "Un site lent fait fuir vos visiteurs, même s’il est magnifique. Voyons comment aligner UX et performance.",
        imageUrl:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1600&q=80",
        date: "12 février 2024",
        datetime: "2024-02-12",
        readingTimeMinutes: 6,
        views: 64,
        category: { title: "UX & Performance", href: "#" },
        author: {
            name: "Stéphane Gamot",
            role: "Développeur full-stack & SEO",
            href: "/me",
            imageUrl:
                "https://images.unsplash.com/photo-1519244703995-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        content: (
            <>
                <p>
                    On parle beaucoup de design, moins souvent de{" "}
                    <strong>performance</strong>. Pourtant, l’un sans l’autre ne
                    fonctionne pas : une belle interface qui met 6 secondes à charger,
                    c’est une expérience ratée.
                </p>

                <h2>1. Ce que ressent vraiment l’utilisateur</h2>
                <p>
                    L’expérience client, ce n’est pas seulement le côté “joli”. C’est tout
                    ce qui se passe entre l’arrivée sur votre site et l’action finale :
                    compréhension, fluidité, confiance, vitesse.
                </p>

                <h2>2. Pourquoi la vitesse est un facteur émotionnel</h2>
                <p>
                    Un site lent génère de la frustration, voire de la méfiance. À
                    l’inverse, un site rapide et fluide donne une impression de
                    professionnalisme et de sérieux.
                </p>

                <div className="my-8 relative aspect-video w-full overflow-hidden rounded-2xl">
                    <Image
                        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"
                        alt="Interface web fluide et moderne"
                        fill
                        className="object-cover"
                    />
                </div>

                <h2>3. Technique & UX : le même combat</h2>
                <p>Concrètement, la performance et l’UX se rejoignent sur plusieurs points :</p>
                <ul>
                    <li>un code léger et bien structuré,</li>
                    <li>des images optimisées et adaptées à l’écran,</li>
                    <li>une navigation claire, sans menu interminable,</li>
                    <li>des formulaires courts et lisibles.</li>
                </ul>

                <h2>4. Next.js, Lighthouse & co : vos alliés</h2>
                <p>
                    Des outils comme <strong>Lighthouse</strong> (intégré à Chrome DevTools) permettent
                    de mesurer la performance réelle de vos pages : temps de chargement,
                    interactivité, stabilité visuelle…
                </p>
                <p>
                    En utilisant des technologies modernes comme <strong>Next.js</strong>, un hébergement
                    adapté et un bon paramétrage des images, on peut réellement aligner
                    expérience client et performance.
                </p>

                <h2>Conclusion</h2>
                <p>
                    L’expérience client n’est pas un “plus” à ajouter à la fin du projet,
                    et la performance n’est pas qu’un sujet de développeurs. Les deux
                    sont au cœur de la perception de votre marque en ligne – et de vos
                    résultats business.
                </p>
            </>
        ),
    },
];
