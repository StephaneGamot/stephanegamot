// app/blog/posts.tsx
import type { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Moi from "@/public/Images/me/me.webp"
import ImageTest from "@/public/Images/carrousel/boutique-lg.webp"

import WordPress1 from "@/public/Images/blog/wordPress1.webp"
import WordPress2 from "@/public/Images/blog/wordPress2.webp"
import WordPress3 from "@/public/Images/blog/wordPress3.webp"

import NextUxExperience from "@/public/Images/blog/next-ux-experience.webp"
import NextFuture from "@/public/Images/blog/next-future.webp"
import Next1 from "@/public/Images/blog/next1.webp"

export type BlogPost = {
    id: number;
    slug: string;
    title: string;
    description: string;
    imageUrl: StaticImageData;
    date: string;
    datetime: string;
    readingTimeMinutes: number;
    views: number;
    category: { title: string; href: string };
    author: {
        name: string;
        role: string;
        href: string;
        imageUrl: StaticImageData;
    };
    content: ReactNode; // ⬅️ plus `string`, maintenant du JSX
};

export const posts: BlogPost[] = [
  {
  id: 1,
  slug: "wordpress-vs-nextjs-quel-choisir",
  title: "WordPress vs Next.js : quel est le meilleur choix pour votre site ?",
  description:
    "WordPress ou Next.js ? Découvrez les forces et limites de chaque solution pour choisir la meilleure technologie pour votre site en 2025.",
  imageUrl: NextFuture,
  date: "1 décembre 2025",
  datetime: "2025-12-01",
  readingTimeMinutes: 5,
  views: 0,
  category: { title: "Technologies web", href: "#" },
  author: {
    name: "Stéphane Gamot",
    role: "Développeur full-stack & SEO",
    href: "/me",
    imageUrl: Moi,
  },
  content: (
    <>
      <p>
        WordPress reste la solution la plus connue pour créer un site
        rapidement. De son côté,{" "}
        <strong className="text-indigo-300">Next.js</strong> s’impose
        comme une technologie moderne, ultra rapide et très appréciée de
        Google.
      </p>

      <p>
        Si vous hésitez entre les deux, cet article va vous aider à{" "}
        <strong className="text-emerald-300">
          choisir la solution la plus adaptée à votre projet
        </strong>
        , sans jargon technique inutile.
      </p>

      <div className="mt-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-sm text-indigo-100">
        <p className="font-semibold">
          En résumé :{" "}
          <span className="text-emerald-300">
            WordPress est excellent pour gérer du contenu
          </span>{" "}
          au quotidien, tandis que{" "}
          <span className="text-emerald-300">
            Next.js est parfait pour un site haut de gamme, rapide et durable
          </span>
          .
        </p>
      </div>

      <h2 className="mt-10 text-xl font-semibold text-indigo-300">
        WordPress : le roi du contenu et des sites administrables
      </h2>
      <p>
        WordPress propulse une énorme partie du web. Sa grande force : il
        permet de{" "}
        <strong className="text-emerald-300">
          gérer facilement votre contenu
        </strong>{" "}
        (pages, articles, images) via une interface d’administration.
      </p>

      <h3 className="mt-6 text-lg font-semibold text-indigo-200">
        Les points forts de WordPress
      </h3>
      <ul className="ml-4 list-disc space-y-1 text-slate-100">
        <li>
          <strong className="text-emerald-300">
            Idéal pour les blogs et sites éditoriaux
          </strong>{" "}
          : publications, actualités, contenus réguliers.
        </li>
        <li>
          Interface d’admin simple pour modifier du texte, des images, des
          pages ou des articles.
        </li>
        <li>
          Des milliers de thèmes et d’extensions pour ajouter des
          fonctionnalités (formulaires, SEO, e-commerce, etc.).
        </li>
        <li>
          Une communauté immense, donc beaucoup de tutos, plugins et
          ressources.
        </li>
      </ul>

      <p className="mt-4">
        Pour un site vitrine classique, un blog, ou un petit e-commerce,{" "}
        <strong className="text-emerald-300">
          WordPress est souvent une très bonne base
        </strong>
        .
      </p>

      <h3 className="mt-8 text-lg font-semibold text-indigo-200">
        Les limites de WordPress
      </h3>
      <ul className="ml-4 list-disc space-y-1 text-slate-100">
        <li>
          Les performances dépendent du thème, des plugins et de
          l’hébergement. Un site peut vite devenir{" "}
          <strong className="text-emerald-300">lent</strong>.
        </li>
        <li>
          Il faut gérer les{" "}
          <strong className="text-emerald-300">mises à jour</strong>{" "}
          (WordPress, thèmes, extensions) pour éviter les failles de sécurité.
        </li>
        <li>
          En ajoutant trop de plugins, on finit souvent avec un site lourd,
          plus difficile à maintenir.
        </li>
        <li>
          Sans développeur, certaines personnalisations deviennent
          compliquées.
        </li>
      </ul>

      <div className="my-8 relative aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-indigo-500/30">
        <Image
          src={WordPress3}
          alt="Exemple d'interface WordPress permettant de gérer le contenu d'un site"
          fill
          className="object-cover"
        />
      </div>

      <h2 className="mt-10 text-xl font-semibold text-indigo-300">
        Next.js : performance, modernité et expérience premium
      </h2>
      <p>
        Next.js est un framework moderne basé sur React, utilisé par de
        nombreuses grandes entreprises. Il permet de créer des sites{" "}
        <strong className="text-emerald-300">
          très rapides, stables et sur mesure
        </strong>
        .
      </p>

      <h3 className="mt-6 text-lg font-semibold text-indigo-200">
        Les forces de Next.js
      </h3>
      <ul className="ml-4 list-disc space-y-1 text-slate-100">
        <li>
          <strong className="text-emerald-300">
            Performance exceptionnelle
          </strong>{" "}
          : temps de chargement très courts, ce qui améliore l’expérience
          utilisateur et le SEO.
        </li>
        <li>
          Navigation fluide, transitions rapides, sensation
          d’application plutôt que de “simple site”.
        </li>
        <li>
          <strong className="text-emerald-300">Architecture moderne</strong> :
          parfait pour connecter des APIs, des outils métiers, ou des
          fonctionnalités spécifiques.
        </li>
        <li>
          Très bon pour les{" "}
          <span className="font-semibold text-emerald-300">
            Core Web Vitals
          </span>
          , un critère que Google surveille de plus en plus.
        </li>
        <li>
          Sécurité renforcée : pas de base de données exposée directement
          comme sur un CMS classique.
        </li>
      </ul>

      <h3 className="mt-8 text-lg font-semibold text-indigo-200">
        Les limites de Next.js
      </h3>
      <ul className="ml-4 list-disc space-y-1 text-slate-100">
        <li>
          Pas d’interface d’admin par défaut : la gestion du contenu se fait
          plutôt avec un développeur ou via un CMS “headless” connecté.
        </li>
        <li>
          Nécessite un{" "}
          <strong className="text-emerald-300">
            budget un peu plus élevé
          </strong>{" "}
          pour un vrai site sur mesure.
        </li>
        <li>
          Moins adapté si vous souhaitez changer vous-même le contenu tous les
          jours sans accompagnement.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-indigo-300">
        Alors, WordPress ou Next.js pour votre projet ?
      </h2>
      <p>
        Il n’y a pas une “bonne” réponse universelle :{" "}
        <strong className="text-emerald-300">
          tout dépend de vos priorités
        </strong>
        .
      </p>

      <h3 className="mt-6 text-lg font-semibold text-indigo-200">
        Choisissez plutôt WordPress si…
      </h3>
      <ul className="ml-4 list-disc space-y-1 text-slate-100">
        <li>
          Vous voulez{" "}
          <strong className="text-emerald-300">
            gérer le contenu vous-même
          </strong>{" "}
          facilement (textes, pages, articles).
        </li>
        <li>
          Vous avez un budget limité pour démarrer mais besoin d’un site
          fonctionnel rapidement.
        </li>
        <li>
          Votre priorité est de publier régulièrement du contenu (blog,
          actualités, articles).
        </li>
      </ul>

      <h3 className="mt-8 text-lg font-semibold text-indigo-200">
        Choisissez plutôt Next.js si…
      </h3>
      <ul className="ml-4 list-disc space-y-1 text-slate-100">
        <li>
          Vous voulez un site{" "}
          <strong className="text-emerald-300">haut de gamme</strong>, rapide,
          fluide, avec une vraie expérience premium.
        </li>
        <li>
          Vous misez sérieusement sur le{" "}
          <strong className="text-emerald-300">SEO</strong>, la performance
          et la <strong className="text-emerald-300">conversion</strong>.
        </li>
        <li>
          Vous avez besoin de fonctionnalités sur mesure ou d’intégrations
          spécifiques (outils internes, API, etc.).
        </li>
        <li>
          Vous voyez votre site comme un{" "}
          <strong className="text-emerald-300">
            investissement long terme
          </strong>
          , pas comme une simple carte de visite.
        </li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold text-indigo-300">
        Ma façon de travailler : choisir l’outil en fonction de vous
      </h2>
      <p>
        Dans mes projets, je ne suis pas “pro WordPress” ou “pro Next.js à
        tout prix”. Je choisis la technologie en fonction de{" "}
        <strong className="text-emerald-300">vos objectifs réels</strong> :
      </p>
      <ul className="ml-4 list-disc space-y-1 text-slate-100">
        <li>
          parfois un bon{" "}
          <strong className="text-emerald-300">WordPress optimisé</strong> est
          largement suffisant ;
        </li>
        <li>
          parfois, un site{" "}
          <strong className="text-emerald-300">Next.js</strong> est clairement
          le meilleur choix pour viser la performance et l’image de marque.
        </li>
      </ul>

      <p className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-4 text-sm text-emerald-100">
        Vous hésitez entre les deux ? Je peux analyser votre projet et vous
        orienter gratuitement vers la solution la plus pertinente pour votre
        activité.
      </p>
    </>
  ),
},

{
  id: 2,
  slug: "avantages-inconvenients-wordpress",
  title: "WordPress : avantages et inconvénients — ce que personne ne vous dit",
  description:
    "WordPress est le CMS le plus utilisé au monde… mais est-ce vraiment le bon choix pour votre projet ? Voici un avis honnête, clair et orienté business.",
  imageUrl: WordPress2,
  date: "2 décembre 2025",
  datetime: "2025-12-02",
  readingTimeMinutes: 5,
  views: 0,
  category: { title: "CMS & Web", href: "#" },
  author: {
    name: "Stéphane Gamot",
    role: "Développeur full-stack & SEO",
    href: "/me",
    imageUrl: Moi,
  },
  content: (
    <>
      <p>
        WordPress équipe plus de{" "}
        <strong className="text-emerald-300">
          40 % des sites web dans le monde
        </strong>
        . Un succès impressionnant, mais qui crée aussi une confusion : un
        outil aussi populaire est-il vraiment adapté à tous les projets&nbsp;?
        Pas forcément.
      </p>

      <p>
        Voici un tour d’horizon clair et honnête des{" "}
        <strong className="text-emerald-300">forces</strong> et{" "}
        <strong className="text-emerald-300">faiblesses</strong> de
        WordPress, basé sur mon expérience terrain avec des entrepreneurs,
        indépendants et PME en Belgique et en France.
      </p>

      <div className="mt-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-sm text-indigo-100">
        <p className="font-semibold">
          L’idée clé :{" "}
          <span className="text-emerald-300">
            WordPress est un outil puissant
          </span>
          , mais il n’est pas magique. Utilisé correctement, c’est un allié
          précieux. Mal géré, il peut vite devenir un frein.
        </p>
      </div>

      <h2 className="mt-10 text-xl font-semibold text-indigo-300">
        ✔️ Les avantages de WordPress
      </h2>

      <h3 className="mt-6 text-lg font-semibold text-indigo-200">
        1. Une grande flexibilité grâce aux plugins
      </h3>
      <p>
        WordPress dispose d’un écosystème géant de plugins : SEO, sécurité,
        formulaires, e-commerce, réservations, traductions… Tout existe déjà.
      </p>
      <p>
        Cela permet de{" "}
        <strong className="text-emerald-300">créer rapidement</strong> des
        fonctionnalités avancées sans devoir tout coder.
      </p>

      <h3 className="mt-6 text-lg font-semibold text-indigo-200">
        2. Idéal pour les sites vitrines & blogs
      </h3>
      <p>
        WordPress a été pensé initialement comme un outil de blogging.
        Résultat : gestion du contenu simple, édition agréable, et SEO plutôt
        performant.
      </p>

      <div className="my-8 relative aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-indigo-500/30">
        <Image
          src={WordPress1}
          alt="Exemple de site WordPress moderne"
          fill
          className="object-cover"
        />
      </div>

      <h3 className="mt-6 text-lg font-semibold text-indigo-200">
        3. Beaucoup de thèmes (dont certains très qualitatifs)
      </h3>
      <p>
        Si vous choisissez un thème premium sérieux (Astra, Blocksy,
        GeneratePress…), vous obtenez un site propre, moderne et professionnel
        rapidement.
      </p>

      <h3 className="mt-6 text-lg font-semibold text-indigo-200">
        4. Coût d&apos;entrée raisonnable
      </h3>
      <p>
        Pour un budget limité, WordPress permet d’obtenir un site déjà très
        solide. Là où des solutions sur-mesure coûteraient plus cher.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-indigo-300">
        ❌ Les inconvénients de WordPress
      </h2>

      <h3 className="mt-6 text-lg font-semibold text-indigo-200">
        1. Les plugins : force, mais aussi faiblesse
      </h3>
      <p>Plus il y a de plugins, plus vous risquez :</p>
      <ul className="ml-4 list-disc space-y-1 text-slate-100">
        <li>des ralentissements,</li>
        <li>des conflits,</li>
        <li>des bugs après mises à jour,</li>
        <li>des failles de sécurité.</li>
      </ul>
      <p>
        Un site WordPress mal géré peut vite devenir lourd et instable.
      </p>

      <h3 className="mt-6 text-lg font-semibold text-indigo-200">
        2. Performance souvent inférieure à du Next.js
      </h3>
      <p>
        Même avec un bon thème, WordPress a du mal à atteindre les performances
        d’un site moderne en React / Next.js.
      </p>
      <p>Cela impacte directement :</p>
      <ul className="ml-4 list-disc space-y-1 text-slate-100">
        <li>le SEO,</li>
        <li>l’expérience mobile,</li>
        <li>le taux de conversion.</li>
      </ul>

      <h3 className="mt-6 text-lg font-semibold text-indigo-200">
        3. Maintenance obligatoire
      </h3>
      <p>WordPress requiert un suivi régulier :</p>
      <ul className="ml-4 list-disc space-y-1 text-slate-100">
        <li>mises à jour des plugins,</li>
        <li>sécurisation du site et du serveur,</li>
        <li>optimisation continue.</li>
      </ul>
      <p>
        Sans maintenance, un site WordPress se dégrade très vite.
      </p>

      <h3 className="mt-6 text-lg font-semibold text-indigo-200">
        4. Interface parfois déroutante pour les non-tech
      </h3>
      <p>
        Entre Gutenberg, les thèmes, les plugins, les widgets et les menus…
        l&apos;interface admin peut devenir confuse pour les débutants.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-indigo-300">
        Alors… WordPress ou pas&nbsp;?
      </h2>
      <p>WordPress est un excellent choix pour :</p>
      <ul className="ml-4 list-disc space-y-1 text-slate-100">
        <li>les sites vitrines simples,</li>
        <li>les blogs,</li>
        <li>les sites à petit budget,</li>
        <li>les entreprises qui veulent beaucoup d’autonomie.</li>
      </ul>

      <p className="mt-4">
        Mais pour des projets nécessitant{" "}
        <strong className="text-emerald-300">performance</strong>,{" "}
        <strong className="text-emerald-300">sécurité</strong>, ou une{" "}
        <strong className="text-emerald-300">
          expérience sur-mesure
        </strong>
        , des solutions modernes comme{" "}
        <strong className="text-emerald-300">Next.js</strong> sont souvent
        meilleures.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-indigo-300">
        En résumé
      </h2>
      <p>
        WordPress est un outil puissant, mais pas universel. Il brille pour les
        sites simples et éditoriaux, mais montre ses limites sur les projets
        ambitieux nécessitant rapidité, scalabilité et développement avancé.
      </p>
      <p>
        Le plus important : choisir la technologie en fonction du{" "}
        <strong className="text-emerald-300">vrai besoin</strong>, pas parce
        qu’un outil est populaire.
      </p>

      <p className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-4 text-sm text-emerald-100">
        Si vous avez un doute sur la direction à prendre, je peux vous aider à
        clarifier votre besoin et à choisir la solution la plus cohérente avec
        votre stratégie.
      </p>
    </>
  ),
},

 {
  id: 3,
  slug: "pourquoi-nextjs-est-le-meilleur-investissement",
  title: "Next.js : pourquoi c’est l’un des meilleurs investissements pour votre site web",
  description:
    "Next.js est plus cher à la création qu’un site classique… mais sur le long terme, c’est l’une des meilleures décisions qu’un entrepreneur puisse prendre : performance, sécurité, évolution et expérience de vente.",
  imageUrl: Next1,
  date: "3 décembre 2025",
  datetime: "2025-12-03",
  readingTimeMinutes: 5,
  views: 0,
  category: { title: "Technologies Web", href: "#" },
  author: {
    name: "Stéphane Gamot",
    role: "Développeur full-stack & SEO",
    href: "/me",
    imageUrl: Moi,
  },
  content: (
    <>
      <p>
        Aujourd’hui, beaucoup d’entrepreneurs découvrent{" "}
        <span className="font-semibold text-indigo-300">
          Next.js comme l&apos;alternative moderne
        </span>{" "}
        aux CMS traditionnels. Plus rapide, plus sécurisé, plus fluide… mais
        aussi plus exigeant à mettre en place. Résultat : certains pensent que
        c’est un choix « cher ».
      </p>

      <p>
        La vérité, c’est que Next.js est souvent{" "}
        <strong className="text-emerald-300">
          l’un des meilleurs investissements à long terme
        </strong>{" "}
        pour un site professionnel ou un e-commerce. Voici pourquoi.
      </p>

      <div className="mt-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-sm text-indigo-100">
        <p className="font-semibold">
          En une phrase : Next.js coûte un peu plus au départ, mais{" "}
          <span className="text-emerald-300">
            vous économise du temps, du stress et de l’argent
          </span>{" "}
          sur la durée.
        </p>
      </div>

      <h2 className="mt-10 text-xl font-semibold text-indigo-300">
        ✔️ 1. Une performance qui dépasse tout le reste
      </h2>
      <p>
        Next.js génère des sites ultra rapides, légers et optimisés, même avec
        beaucoup de contenu. Et plus un site est rapide, plus :
      </p>
      <ul className="ml-4 list-disc space-y-1 text-slate-100">
        <li>Google le met en avant,</li>
        <li>les visiteurs restent,</li>
        <li>le taux de conversion augmente,</li>
        <li>le panier moyen progresse.</li>
      </ul>

      <div className="my-8 relative aspect-video overflow-hidden rounded-2xl ring-1 ring-indigo-500/30">
        <Image
          src={NextUxExperience}
          alt="Interface moderne d’un site Next.js performant"
          fill
          className="object-cover"
        />
      </div>

      <p>
        Là où d’autres solutions deviennent lourdes au fil du temps,{" "}
        <span className="font-semibold text-indigo-200">Next.js</span> reste
        fluide, stable et rapide, même après des années.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-indigo-300">
        ✔️ 2. Un coût de maintenance quasi nul
      </h2>
      <p>Avec une architecture moderne, il n’y a :</p>
      <ul className="ml-4 list-disc space-y-1 text-slate-100">
        <li>ni plugins qui se cassent,</li>
        <li>ni mises à jour urgentes,</li>
        <li>ni conflit entre extensions,</li>
        <li>ni problèmes de sécurité liés à des modules obsolètes.</li>
      </ul>

      <p>
        Résultat : vous dépensez{" "}
        <strong className="text-emerald-300">moins chaque année</strong> en
        réparations, correctifs ou optimisations.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-indigo-300">
        ✔️ 3. Idéal pour les e-commerce modernes
      </h2>
      <p>
        Un e-commerce classique souffre souvent de lenteurs et de bugs. Avec
        Next.js, vous avez une base solide pour un site :
      </p>
      <ul className="ml-4 list-disc space-y-1 text-slate-100">
        <li>rapide même avec beaucoup de produits,</li>
        <li>capable de gérer Stripe + paiements modernes,</li>
        <li>stable même sous forte charge,</li>
        <li>
          qui offre une expérience d’achat fluide, digne des grandes enseignes.
        </li>
      </ul>

      <p>
        Et surtout : un e-commerce bien optimisé avec Next.js peut{" "}
        <strong className="text-emerald-300">
          augmenter vos ventes immédiatement
        </strong>{" "}
        grâce à une interface plus efficace et un temps de chargement réduit.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-indigo-300">
        ✔️ 4. Une sécurité nettement supérieure
      </h2>
      <p>Next.js élimine toute une catégorie de risques liés aux CMS :</p>
      <ul className="ml-4 list-disc space-y-1 text-slate-100">
        <li>injections via plugins,</li>
        <li>extensions abandonnées,</li>
        <li>vulnérabilités liées à PHP,</li>
        <li>mauvaises pratiques d’hébergement.</li>
      </ul>

      <p>
        Le résultat : un site{" "}
        <strong className="text-emerald-300">
          beaucoup plus difficile à pirater
        </strong>
        , sans surveillance constante.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-indigo-300">
        ✔️ 5. Une solution qui évolue avec votre business
      </h2>
      <p>
        Contrairement à d’autres outils, Next.js s’adapte parfaitement si vous :
      </p>
      <ul className="ml-4 list-disc space-y-1 text-slate-100">
        <li>ajoutez de nouvelles fonctionnalités,</li>
        <li>changez votre modèle économique,</li>
        <li>passez au multilingue,</li>
        <li>montez en trafic.</li>
      </ul>

      <p>
        Vous évitez le fameux{" "}
        <em className="text-slate-200">« on doit tout refaire »</em> qui arrive
        très souvent avec des CMS vieillissants.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-indigo-300">
        Alors… est-ce que Next.js “coûte plus cher” ?
      </h2>
      <p>
        Sur le court terme, oui. Sur le long terme,{" "}
        <strong className="text-emerald-300">c’est tout l’inverse</strong>.
      </p>

      <p>Vous gagnez :</p>
      <ul className="ml-4 list-disc space-y-1 text-slate-100">
        <li>en vitesse,</li>
        <li>en SEO,</li>
        <li>en conversion,</li>
        <li>en stabilité,</li>
        <li>en tranquillité.</li>
      </ul>

      <p>
        Et surtout : vous ne payez plus tous les ans pour compenser les limites
        techniques d’un système vieillissant.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-indigo-300">En résumé</h2>
      <p>
        Next.js est la meilleure option pour les entrepreneurs qui recherchent
        une solution capable de durer. Oui, l’investissement initial est plus
        important, mais il est rapidement compensé par un site plus rapide,
        plus fiable et plus rentable.
      </p>

      <p className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-4 text-sm text-emerald-100">
        Si votre objectif est d’avoir un site qui{" "}
        <strong>grandit avec votre activité</strong>, Next.js est l’un des
        meilleurs choix possibles aujourd’hui.
      </p>
    </>
  ),
},


];
