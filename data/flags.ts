export type CulturalReference = {
    title: string;
    creator: string;
    year?: number;
    note?: string;
    link?: string;
};

export type CityFlag = {
    stateCode: string;
    citySlug: string;
    cityName: string;
    flagImage: string;
    heroImage?: string;
    shortSummary: string;
    story: string;
    // Références culturelles
    music?: CulturalReference[];
    books?: CulturalReference[];
    films?: CulturalReference[];
    series?: CulturalReference[];
};

import { culturalReferences } from './cultural-references';

const baseCityFlags: Omit<CityFlag, 'music' | 'books' | 'films' | 'series'>[] = [
    {
        stateCode: '17',
        citySlug: 'springfield',
        cityName: 'Springfield',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Flag_of_Springfield%2C_Illinois_%28no_text%29.svg/640px-Flag_of_Springfield%2C_Illinois_%28no_text%29.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1551301285-bdfcd0f17a02?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        shortSummary: `Capitale paisible de l’Illinois, Springfield porte un drapeau institutionnel qui évoque Lincoln, les plaines et l’administration d’un État dominé par Chicago.`,
        story: `Quand on pense Illinois, on pense Chicago. Mais la capitale s’appelle Springfield : une ville de plaines, de musées dédiés à Lincoln et de bureaux où l’on gère la vie d’un État immense. Le drapeau de Springfield reflète ce rôle politique : sceau officiel, devise, étoiles, équilibre entre histoire et formalité.

Dans les rues calmes, on croise des bâtiments publics, des diners, des quartiers résidentiels. Pas de vertige vertical, pas de skyline : Springfield avance à son propre rythme. Le drapeau flotte devant les institutions, rappelant que l’Illinois ne se résume pas à son monstre urbain au bord du lac Michigan.

C’est un drapeau de continuité, pas de spectacle. Une bannière qui marque les lieux où s’écrit, loin du bruit de Chicago, la politique quotidienne d’un des États les plus influents du pays.`,
    },
    {
        stateCode: '17',
        citySlug: 'chicago',
        cityName: 'Chicago',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Chicago%2C_Illinois.svg/1200px-Flag_of_Chicago%2C_Illinois.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1600&q=80',
        shortSummary: `Quatre étoiles rouges, deux bandes bleues, une ville qui brûle et se relève.`,
        story: `Chicago porte ses cicatrices sur son drapeau : Fort Dearborn, l'incendie de 1871, les expositions universelles… Quatre étoiles rouges pour quatre actes d'un même récit : tomber, se reconstruire, s'exposer, inventer.

        La première étoile célèbre Fort Dearborn, établi en 1803 au bord du lac Michigan. La deuxième marque le Grand Incendie de 1871 qui ravagea la ville mais la transforma en laboratoire architectural. La troisième et la quatrième honorent les expositions universelles de 1893 et 1933, moments où Chicago s'est montrée au monde.

        Les deux bandes bleues représentent les bras d'eau qui encadrent la ville : le lac Michigan à l'est et la rivière Chicago qui traverse son cœur. Entre elles, trois bandes blanches symbolisent les trois sections de la ville : Nord, Ouest et Sud.

        Ce drapeau, adopté en 1917, est devenu l'un des plus reconnaissables d'Amérique. On le voit tatoué sur des épaules, imprimé sur des t-shirts, brandit lors des manifestations sportives. C'est un symbole de fierté pour une ville qui ne cesse de se réinventer.`,
    },
    {
        stateCode: '36',
        citySlug: 'new-york-city',
        cityName: 'New York City',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_New_York_City.svg/1200px-Flag_of_New_York_City.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&q=80',
        shortSummary: `Orange, blanc, bleu – héritage de New Amsterdam et théâtre d'un million d'histoires par jour.`,
        story: `Le drapeau de New York garde les couleurs des Pays-Bas, mémoire d'un passé où la ville s'appelait encore New Amsterdam. Orange, blanc et bleu disposés en trois bandes verticales, avec le sceau de la ville au centre : un moulin à vent, deux castors, des tonneaux de farine.

Tout y est : le commerce, l'industrie, les origines hollandaises. Le moulin rappelle que Manhattan était une colonie agricole avant de devenir une métropole. Les castors évoquent le commerce des fourrures qui enrichit les premiers colons. Les tonneaux symbolisent l'exportation, le port, l'ouverture vers le monde.

Au-dessus du sceau, une aigle. En dessous, la date : 1625, année de fondation de la ville. Le drapeau adopté en 1915 est discret comparé à l'exubérance urbaine qu'il représente, mais c'est justement son élégance sobre qui fascine.

New York n'a pas besoin d'un drapeau flamboyant. Son skyline, ses rues, ses habitants parlent pour elle. Le drapeau est une carte d'identité historique, un rappel que cette ville de tous les possibles a commencé comme un comptoir commercial au bord de l'Hudson.`,
    },
    {
        stateCode: '06',
        citySlug: 'los-angeles',
        cityName: 'Los Angeles',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Los_Angeles%2C_California.svg/1200px-Flag_of_Los_Angeles%2C_California.svg.png',
        heroImage: 'https://plus.unsplash.com/premium_photo-1725408106567-a77bd9beff7c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        shortSummary: `Un drapeau qui ressemble à un coucher de soleil déchiré.`,
        story: `Los Angeles agite un drapeau en dents de scie – vert, jaune, rouge – comme la pellicule d'un film qu'on aurait remonté à la main. Une ville qui vit entre l'ombre des studios et la lumière du désert.

Le design créé en 1931 est audacieux : trois bandes en zigzag évoquent les montagnes qui entourent la ville, mais aussi l'énergie électrique qui l'alimente, le mouvement perpétuel de ses autoroutes. Au centre, le sceau municipal : un aigle mexicain, quatre étoiles, des oranges, un ours grizzly, l'océan.

Chaque élément raconte une strate de l'histoire : l'héritage espagnol et mexicain, les missions franciscaines, l'agriculture qui a prospéré avant Hollywood, la ruée vers l'or californienne. Le vert représente les oliviers, le jaune l'or et le soleil, le rouge... peut-être le sang, peut-être les couchers de soleil légendaires de la côte Pacifique.

C'est un drapeau excentrique, presque psychédélique, qui reflète parfaitement une ville faite de contradictions : plages et déserts, richesse et pauvreté, rêves et désillusions. Los Angeles ne fait rien à moitié, pas même son drapeau.`,
    },

    // LOT 5 - OUEST MONTAGNEUX

    // ARIZONA
    {
        stateCode: '04',
        citySlug: 'phoenix',
        cityName: 'Phoenix',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Flag_of_Phoenix%2C_Arizona.svg/1200px-Flag_of_Phoenix%2C_Arizona.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1617407867245-f1315ab14d98?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        shortSummary: `Un phénix blanc sur champ marron – la ville qui renaît de ses cendres, littéralement.`,
        story: `Le drapeau de Phoenix est d'une simplicité brutale : un champ marron (ou bordeaux selon la lumière) avec un phénix blanc stylisé au centre. Adopté en 1990 pour remplacer un design de 1921, c'est l'incarnation parfaite du nom de la ville.

Phoenix porte bien son nom. La ville moderne a été fondée en 1868 sur les ruines d'un ancien réseau de canaux construit par les Hohokam, une civilisation précolombienne disparue vers 1450. Les premiers colons ont vu dans ces vestiges la promesse d'une renaissance – une nouvelle civilisation émergeant des cendres de l'ancienne. D'où le nom : Phoenix, l'oiseau mythologique qui renaît de ses propres cendres.

Le drapeau a été classé 4e sur 150 dans l'enquête NAVA de 2004, derrière D.C., Chicago et Denver. Sa force réside dans sa lisibilité : même à distance, même en mouvement, le phénix est reconnaissable. Pas de sceau compliqué, pas de texte microscopique, pas de dates historiques. Juste un symbole puissant sur un fond uni.

Phoenix est aujourd'hui la 5e plus grande ville des États-Unis, capitale d'un État désertique devenu centre technologique et urbain. Le phénix blanc continue de s'élever, symbole d'une métropole qui défie le climat, la géographie, les probabilités – et qui renaît encore et encore.`,
    },
    {
        stateCode: '04',
        citySlug: 'tucson',
        cityName: 'Tucson',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_Tucson%2C_Arizona.svg/1200px-Flag_of_Tucson%2C_Arizona.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1602955909693-579ecebbf5bf?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        shortSummary: `Un yin-yang hispano-américain : la skyline de 1949 rencontre la mission espagnole.`,
        story: `Le drapeau de Tucson présente un design inhabituel : sur fond blanc, le sceau municipal montre deux demi-cercles imbriqués comme un yin-yang. Le côté jaune contient la skyline de Tucson en 1949 ; le côté bleu-violet montre la Mission San Xavier del Bac, joyau architectural du désert de Sonora.

Ce design a été créé par Mary Crowfoot en 1949 lors d'un concours pour un nouveau sceau municipal. Il est devenu le sceau officiel, puis a été intégré au drapeau officiel le 5 janvier 1953. La dualité visuelle n'est pas un hasard : elle représente la double identité de Tucson, ville à la fois hispanique et anglo-américaine, ancienne et moderne, désertique et urbaine.

La Mission San Xavier del Bac, fondée en 1692 et reconstruite entre 1783 et 1797, est l'un des plus beaux exemples d'architecture baroque espagnole en Amérique du Nord. Elle rappelle que Tucson a été tour à tour territoire espagnol, mexicain, puis américain après l'achat Gadsden de 1854. C'est une ville frontalière au sens le plus profond du terme.

Tucson (du mot O'odham "Cuk Ṣon" signifiant "au pied de la montagne noire") est entourée par cinq chaînes de montagnes et traversée par le désert de Sonora. Son drapeau capture cette essence : deux histoires en équilibre, deux cultures en dialogue, une ville qui regarde simultanément vers son passé colonial et son avenir technologique.`,
    },

    // COLORADO
    {
        stateCode: '08',
        citySlug: 'denver',
        cityName: 'Denver',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Flag_of_Denver%2C_Colorado.svg/1200px-Flag_of_Denver%2C_Colorado.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1616984856322-e030a803e587?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        shortSummary: `Un soleil doré au-dessus de montagnes blanches en zigzag – la simplicité parfaite.`,
        story: `Le drapeau de Denver est l'un des plus acclamés d'Amérique, et pour cause : une ligne blanche en zigzag sépare un ciel bleu d'un sol rouge, avec un cercle jaune éclatant au centre. Adopté en 1926, il a été dessiné par Margaret Overbeck, une élève de lycée qui a remporté un concours municipal.

Les couleurs racontent le Colorado : le jaune symbolise l'or trouvé dans les collines, le rouge la terre colorée dont l'État tire son nom ("colorado" signifie "coloré" en espagnol), le bleu le ciel des Rocheuses. Le zigzag blanc représente à la fois les sommets enneigés et l'héritage des peuples autochtones qui ont vécu ici bien avant les chercheurs d'or.

En 2004, l'Association nord-américaine de vexillologie a classé ce drapeau à la troisième place des meilleurs drapeaux de villes américaines, juste derrière Washington D.C. et Chicago. Sa force ? Une géométrie audacieuse, des couleurs vives, une symbolique claire. Pas de sceau illisible, pas de texte superflu.

Denver porte son drapeau avec fierté : sur les bâtiments publics, les tatouages, les t-shirts. C'est l'identité visuelle d'une ville qui se voit comme la porte d'entrée des montagnes, un carrefour entre l'Ouest sauvage et la modernité urbaine.`,
    },

    // IDAHO
    {
        stateCode: '16',
        citySlug: 'boise',
        cityName: 'Boise',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Boise%2C_Idaho%27s_official_flag.png/640px-Boise%2C_Idaho%27s_official_flag.png',
        heroImage: 'https://images.unsplash.com/photo-1465244554671-e501f19a3bb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        shortSummary: `La "Ville des Arbres" – un fond bleu, le capitole d'État, et une forêt qui ne devrait pas exister ici.`,
        story: `Boise doit son nom aux explorateurs français qui, après avoir traversé des centaines de kilomètres de désert de l'Oregon, ont aperçu les arbres longeant la rivière Boise et se sont exclamés "Les bois ! Les bois !" (prononcer "boi-zi"). Le nom est resté, légèrement déformé en "Boise", et la ville porte fièrement le surnom de "City of Trees".

Le drapeau municipal, adopté en 1989, présente un fond bleu avec une bande blanche contenant les mots "Boise | City of Trees", et en arrière-plan, une silhouette blanche du Capitole d'État de l'Idaho et d'un bosquet d'arbres. Le design a été classé 114e sur 150 dans l'enquête NAVA de 2004 – un score médiocre qui reflète sa nature conventionnelle.

Mais le drapeau dit une vérité importante : Boise est la capitale de l'Idaho, et c'est une ville verte dans un État de montagnes, de déserts, de lacs volcaniques. La rivière Boise serpente à travers la ville, bordée de peupliers et de saules, créant un corridor verdoyant qui contraste avec le paysage aride environnant.

En 2025, Boise a fait un geste politique audacieux : le conseil municipal a voté 5-1 pour désigner trois drapeaux comme drapeaux officiels de la ville – le drapeau municipal classique, le drapeau Pride, et le drapeau blanc des donneurs d'organes. Dans un État conservateur, c'était une déclaration d'inclusion. Boise n'a peut-être pas le meilleur drapeau d'Amérique, mais elle montre que la signification d'un drapeau peut évoluer.`,
    },

    // MONTANA
    {
        stateCode: '30',
        citySlug: 'helena',
        cityName: 'Helena',
        flagImage: 'TODO-flag',
        heroImage: 'https://images.unsplash.com/photo-1588218422242-91b555d0a0ae?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        shortSummary: `Capitale d'État née de la ruée vers l'or, entre les montagnes et la Continental Divide.`,
        story: `Helena est une capitale d'État qui a débuté comme camp minier. En 1864, un groupe de prospecteurs surnommés les "Four Georgians" a découvert de l'or dans un ravin qu'ils ont appelé Last Chance Gulch (le ravin de la dernière chance). En deux décennies, ce camp de tentes est devenu l'une des villes les plus riches par habitant d'Amérique.

        Le drapeau d'Helena présente son sceau municipal sur fond bleu : des montagnes, des références à l'or, et les symboles d'une ville qui a transformé la fortune minérale en pouvoir politique. Quand le Montana est devenu un État en 1889, Helena a été choisie comme capitale après une bataille acharnée contre Anaconda (ville contrôlée par le Copper King Marcus Daly).

        Last Chance Gulch est aujourd'hui la rue principale piétonne d'Helena, bordée de bâtiments victoriens restaurés. La ville est nichée dans les Rocheuses, près de la Continental Divide – la ligne de partage des eaux qui sépare les bassins versants du Pacifique et de l'Atlantique. C'est une position géographique symbolique pour une capitale.

        Helena a également joué un rôle dans l'histoire des droits civiques : en 1954, c'était la première ville du Montana à désagréger volontairement ses écoles publiques, avant même l'arrêt Brown v. Board of Education. Le drapeau ne raconte pas cette histoire, mais la ville la porte. Helena n'est pas qu'une relique de la ruée vers l'or – c'est une capitale qui continue d'évoluer.`,
    },
    {
        stateCode: '30',
        citySlug: 'billings',
        cityName: 'Billings',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Billings%2C_Montana.png/640px-Flag_of_Billings%2C_Montana.png',
        heroImage: 'https://images.unsplash.com/photo-1672941375895-7d6c67f87091?q=80&w=2155&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        shortSummary: `Billings, plus grande ville du Montana, porte un drapeau qui évoque les plateaux arides, les falaises jaunes et la vie urbaine posée au milieu d’un décor sauvage.`,
        story: `Billings n’est pas la capitale du Montana — c’est Helena — mais c’est bel et bien la ville la plus grande et la plus active de l’État. Coincée entre les falaises abruptes des “Rims” et les longues étendues de prairie, Billings vit à la croisée du commerce, de la route et du paysage.

Son drapeau, comme beaucoup de drapeaux de villes de l’Ouest, parle plus du territoire que des bâtiments : silhouettes de montagnes, lignes d’horizon, références à la nature qui entoure tout. On y retrouve souvent ces couleurs franches qui rappellent la roche jaune, le ciel immense et l’air sec.

Billings s’est construite comme un point d’ancrage au milieu d’un État immense. On y croise des entrepôts, des trains, des brasseries, des quartiers tranquilles et des routes qui filent vers les parcs nationaux. Le drapeau, lui, capture cette idée simple : une ville vivante posée dans un décor qui dépasse largement ses frontières.`
,
    },

    // NEVADA
    {
        stateCode: '32',
        citySlug: 'carson-city',
        cityName: 'Carson City',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Carson_City%2C_Nevada.gif/640px-Flag_of_Carson_City%2C_Nevada.gif',
        heroImage: 'https://images.unsplash.com/photo-1605063137821-5614a3c6191e?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        shortSummary: `Capitale tranquille du Nevada, Carson City porte un drapeau qui mêle symboles de montagne, héritage minier et lumière du désert.` ,
        story: `Carson City n’a pas le bruit, les casinos ni les néons de Las Vegas. Ici, la capitale du Nevada vit au pied des montagnes de la Sierra Nevada, dans une lumière sèche et claire, avec des rues calmes, des bâtiments d’État et une histoire façonnée par les chercheurs d’or et d’argent.

Le drapeau de Carson City reflète ce décor : silhouettes de pics, couleurs franches, références à l’industrie minière et à la géographie qui entoure la ville. On y retrouve l’ambiance des hauts plateaux, du vent froid en hiver et de la chaleur écrasante en été.

Carson City est une capitale discrète : administrative, modeste, presque domestique. Mais son drapeau rappelle constamment d’où elle vient : un territoire minéral, ouvert, où l’on a longtemps cherché la fortune sous la roche. Une ville qui n’a pas besoin d’être immense pour porter le poids politique d’un État entier.`,
    },
    {
        stateCode: '32',
        citySlug: 'las-vegas',
        cityName: 'Las Vegas',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Las_Vegas%2C_Nevada.svg/1200px-Flag_of_Las_Vegas%2C_Nevada.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1600&q=80',
        shortSummary: `Un arbre de Josué, un jet militaire, un soleil levant – le désert rencontre l'aviation.`,
        story: `Le drapeau de Las Vegas, adopté formellement en 1968, présente un champ bleu traversé par une bande diagonale grise, avec le sceau municipal dans le canton supérieur gauche. Ce sceau dense raconte l'histoire d'une ville qui ne devrait pas exister.

        Au centre : un arbre de Josué vert à quatre branches, référence au paysage désertique du Nevada (Las Vegas signifie "les prairies" en espagnol, nom donné en 1829 par un explorateur mexicain qui trouva des sources d'eau dans cette vallée). Derrière : un soleil jaune aux rayons orange se levant sur des montagnes, et un jet noir avec sa traînée de condensation.

        Le jet n'est pas anecdotique. Las Vegas doit une partie de son expansion à l'armée américaine : la base aérienne de Nellis, établie en 1941, et le site d'essais nucléaires du Nevada (1951-1992) ont attiré des milliers de travailleurs. Dans les années 1950, les casinos organisaient des "atomic viewing parties" pour observer les champignons atomiques depuis les toits-terrasses.

        Le drapeau, dessiné par Richard Thompson, capture cette identité contradictoire : ville du péché et base militaire, oasis désertique et métropole néon, ciel bleu pur et technologie de pointe. Las Vegas est la ville des illusions, mais son drapeau dit la vérité : c'est un mirage qui a réussi à devenir réel.`,
    },

    // NEW MEXICO
    {
        stateCode: '35',
        citySlug: 'santa-fe',
        cityName: 'Santa Fe',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Santa_Fe_flag.jpg/640px-Santa_Fe_flag.jpg',
        heroImage: 'https://images.unsplash.com/photo-1731699579486-98fc30cbfb6a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        shortSummary: `Santa Fe, capitale la plus haute des États-Unis, mêle adobe, culture pueblo, art, soleil et spiritualité dans un drapeau chargé d’histoire et de symboles du Sud-Ouest.`,
        story: `Santa Fe ne ressemble à aucune autre capitale américaine : ici, pas de gratte-ciel ni de centres administratifs glacés. La ville respire l’adobe, la terre rouge, les influences pueblo, espagnoles et mexicaines. On la traverse comme un musée vivant, entre galeries, patios, églises anciennes et montagnes qui bleuissent à l’horizon.

Le drapeau de Santa Fe est à son image : un soleil zia, symbole emblématique du Nouveau-Mexique, posé sur des couleurs qui évoquent le désert, la spiritualité et les paysages sacrés du Sud-Ouest. Chaque ligne renvoie à un cycle, chaque rayon à une relation entre l’humain, la terre et le temps.

Santa Fe est la plus haute capitale du pays, perchée dans une lumière sèche et dorée. Son drapeau capture cette atmosphère : une ville où l’histoire n’est pas derrière soi mais autour, dans les murs d’adobe, dans les cérémonies, dans l’art. Une capitale qui semble avancer au rythme du soleil, plutôt qu’à celui des horloges.`,
    },
    {
        stateCode: '35',
        citySlug: 'albuquerque',
        cityName: 'Albuquerque',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Albuquerque%2C_New_Mexico.svg/1200px-Flag_of_Albuquerque%2C_New_Mexico.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1605751216159-fc4057eba116?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        shortSummary: `Un champ rouge, un soleil Zia avec "1706", un thunderbird volant – le Nouveau-Mexique ancestral.`,
        story: `Le drapeau d'Albuquerque, adopté en 1968, présente un champ rouge vif avec trois éléments en jaune : le symbole solaire Zia au centre contenant le nombre "1706", le mot "Albuquerque" en italique juste en dessous, et un oiseau-tonnerre (thunderbird) stylisé dans le canton supérieur.

        Le nombre 1706 marque l'année de fondation d'Albuquerque par le gouverneur espagnol Francisco Cuervo y Valdés, qui nomma la colonie en l'honneur du duc d'Alburquerque (vice-roi de la Nouvelle-Espagne). Le premier "r" a été perdu avec le temps, donnant "Albuquerque". La ville est l'une des plus anciennes villes américaines d'origine européenne encore habitées.

        Le symbole Zia vient des peuples Zia Pueblo du Nouveau-Mexique. Il représente le soleil avec quatre rayons dans quatre directions, symbolisant les quatre saisons, les quatre directions cardinales, les quatre périodes du jour, les quatre périodes de la vie. C'est le même symbole qui orne le drapeau d'État du Nouveau-Mexique – un design si influent qu'il a été classé meilleur drapeau d'État américain dans plusieurs enquêtes.

        Le thunderbird ajoute une dimension supplémentaire : c'est une créature mythologique des cultures amérindiennes du Sud-Ouest, associée à la puissance, à la protection et au tonnerre. Le drapeau d'Albuquerque, dessiné par Richard P. Vann (un optométriste local), a été hissé pour la première fois le 21 juin 1968. C'est un hommage visuel aux racines multiples de la ville : espagnole, mexicaine, amérindienne, américaine.`,
    },

    // UTAH
    {
        stateCode: '49',
        citySlug: 'salt-lake-city',
        cityName: 'Salt Lake City',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Salt_Lake_City_%282020%29.svg/1200px-Flag_of_Salt_Lake_City_%282020%29.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1708994916126-10277fa96889?q=80&w=1341&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        shortSummary: `Le Sego Flag – un lys blanc sur bleu et blanc, symbole de résilience et de renouveau.`,
        story: `En 2020, Salt Lake City a dévoilé un nouveau drapeau après un concours municipal qui a attiré des centaines de propositions. Le design gagnant, surnommé le "Sego Flag", présente deux bandes horizontales – bleue en haut, blanche en bas – avec un lys sego blanc dans le canton supérieur.

Le lys sego (Calochortus nuttallii) occupe une place spéciale dans l'histoire de l'Utah. En 1848, alors que les premiers colons mormons faisaient face à la famine après que des nuées de criquets aient dévoré leurs récoltes, ils ont survécu en mangeant les bulbes de cette fleur sauvage. Le lys sego est devenu la fleur d'État de l'Utah en 1911, symbole de survie et d'adaptation.

Les couleurs du drapeau évoquent le Grand Lac Salé (le bleu) et les sommets enneigés des Wasatch Mountains (le blanc). C'est un design épuré, moderne, loin du sceau municipal complexe qui ornait l'ancien drapeau depuis 1969.

Salt Lake City, capitale de l'Utah et siège mondial de l'Église de Jésus-Christ des saints des derniers jours, a choisi un drapeau qui parle d'héritage pionnier mais regarde vers l'avenir. En 2025, la ville a même ajouté des variantes officielles – le "Belonging Flag" et le "Celebration Flag" – montrant qu'un drapeau peut être vivant, évolutif, inclusif.`,
    },

    // WYOMING
    {
        stateCode: '56',
        citySlug: 'cheyenne',
        cityName: 'Cheyenne',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Cheyenne%2C_Wyoming.svg/1200px-Flag_of_Cheyenne%2C_Wyoming.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1684788482273-0f50cff592af?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        shortSummary: `Un champ blanc, une bordure brune, le sceau de la capitale de l'État le moins peuplé.`,
        story: `Le drapeau de Cheyenne présente un champ blanc encadré d'une bordure brune, avec le sceau municipal au centre : une skyline stylisée de la ville en bleu, un disque rouge représentant le soleil, et le slogan "Star of the Big Sky Country" (l'étoile du pays du grand ciel) en lettres rouges capitales.

Cheyenne a été fondée en 1867 lors de la construction du premier chemin de fer transcontinental. C'est une ville née du rail : Union Pacific a établi un dépôt ici, et en trois mois, une ville de tentes et de baraques a surgi dans les plaines. Le nom vient du peuple Cheyenne, tribu des Grandes Plaines qui vivait dans cette région avant l'arrivée des colons.

Le drapeau, adopté vers 1985, a été dessiné par Fernando Méndez, un immigrant philippin qui travaillait comme directeur artistique pour une agence de publicité locale. Méndez a remporté deux concours municipaux, battant 66 propositions concurrentes. C'est une histoire d'immigration et de contribution culturelle – un artiste venu d'Asie définissant l'identité visuelle d'une ville de l'Ouest américain.

Cheyenne est la capitale du Wyoming, l'État le moins peuplé des États-Unis (environ 580 000 habitants pour tout l'État). C'est aussi la ville du Cheyenne Frontier Days, le plus grand rodéo outdoor du monde, organisé depuis 1897. Le drapeau capture cette dualité : élégance formelle (c'est une capitale d'État) et héritage cowboy (c'est le Wyoming, après tout).`,
    },

    // LOT 6 - CÔTE PACIFIQUE

    // ALASKA
    {
        stateCode: '02',
        citySlug: 'anchorage',
        cityName: 'Anchorage',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Anchorage%2C_Alaska.svg/1200px-Flag_of_Anchorage%2C_Alaska.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1549517771-aa105e8da34f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        shortSummary: `Une ancre bleue, un avion, un voilier – la porte d'entrée de l'Arctique.`,
        story: `Le drapeau d'Anchorage, adopté en 1973, présente un champ jaune avec le sceau municipal : une ancre bleue au premier plan, un avion bleu, un soleil jaune et un voilier jaune à l'arrière-plan, avec les mots "ANCHORAGE ALASKA" encerclant le tout.

L'ancre fait référence au nom de la ville et à son origine : lors de sa troisième expédition, James Cook a mouillé dans le Cook Inlet en 1778. Plus tard, Anchorage est devenue un mouillage (anchorage) pour les navires. Le nom est resté lorsque la ville a été fondée en 1914 comme camp de construction pour le chemin de fer Alaska.

L'avion moderne symbolise le rôle crucial d'Anchorage comme hub aérien. L'aéroport international Ted Stevens Anchorage est l'un des plus fréquentés au monde pour le fret – situé à mi-chemin entre l'Asie et l'Amérique du Nord, c'est une escale technique parfaite. FedEx et UPS y ont des hubs majeurs.

Anchorage abrite 40% de la population totale de l'Alaska. C'est une métropole moderne posée au bord du désert arctique. Des orignaux traversent les rues. Des ours errent dans les banlieues. Le soleil ne se couche pas en été, ne se lève pas en hiver. Le drapeau, dessiné par Joan Kimura en 1973, capture cette dualité : Anchorage est à la fois porte d'entrée logistique mondiale et avant-poste de la frontière sauvage.`,
    },
    {
        stateCode: '02',
        citySlug: 'juneau',
        cityName: 'Juneau',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Juneau%2C_Alaska.svg/1200px-Flag_of_Juneau%2C_Alaska.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1725368924007-12e709cc048a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        shortSummary: `Une étoile dorée sur bleu clair – capitale inaccessible par la route.`,
        story: `Le drapeau de Juneau présente un champ bleu clair avec un carré arrondi contenant une barre ondulée bleue, une étoile jaune dorée avec contour bleu, et les mots "JUNEAU" et "ALASKA'S CAPITAL CITY" en lettres majuscules.

Juneau est l'une des capitales d'État les plus bizarres d'Amérique : aucune route ne la relie au reste de l'Alaska continental. On y accède uniquement par avion ou ferry. C'est une capitale accessible seulement par voie maritime ou aérienne, nichée entre les montagnes et le fjord Gastineau Channel.

L'étoile dorée représente le statut de capitale de l'Alaska. Juneau est devenue capitale du territoire de l'Alaska en 1906, succédant à Sitka. Quand l'Alaska est devenu un État en 1959, Juneau est restée capitale malgré des tentatives répétées de déplacer la capitale vers Anchorage (plus peuplée) ou vers une nouvelle ville construite pour cet usage.

La barre ondulée bleue évoque l'océan Pacifique et le Inside Passage – le réseau de voies navigables protégées qui longe la côte de l'Alaska. Les montagnes vertes suggèrent le climat nordique et le terrain montagneux spectaculaire. Juneau est entourée par la forêt nationale de Tongass, la plus grande forêt nationale américaine. C'est une capitale qui ressemble plus à un village de pêcheurs qu'à un centre politique.`,
    },

    // CALIFORNIE
    {
        stateCode: '06',
        citySlug: 'sacramento',
        cityName: 'Sacramento',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Flag_of_Sacramento%2C_California.svg/1200px-Flag_of_Sacramento%2C_California.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1600&q=80',
        shortSummary: `Deux rivières bleues ondulent entre vert agricole et or minier – capitale cachée.`,
        story: `Le drapeau de Sacramento, adopté le 15 août 1989, présente deux nuances de bleu séparées par une ligne ondulée, avec deux demi-ovales – un vert en haut à droite, un jaune en bas à gauche. En bas, le texte "CITY OF SACRAMENTO" en police Century Gothic.

Les deux bleus représentent les deux rivières qui définissent Sacramento : le fleuve Sacramento et la rivière American, dont la confluence se trouve au cœur de la ville. C'est cette position fluviale stratégique qui a fait de Sacramento un hub commercial pendant la ruée vers l'or.

Le vert symbolise l'héritage agricole de la vallée centrale de Californie – Sacramento est entourée de terres parmi les plus fertiles du monde. Le jaune évoque les chercheurs d'or qui ont envahi la région en 1849 après la découverte d'or à Sutter's Mill, à 50 km au nord-est.

Sacramento est la capitale de la Californie depuis 1854, mais elle reste dans l'ombre de San Francisco, Los Angeles, San Diego. C'est une capitale paradoxalement discrète pour l'État le plus peuplé et économiquement puissant des États-Unis. Le drapeau capture cette identité humble : pas de sceaux grandioses, pas de symbolisme agressif. Juste des rivières, des champs, de l'or. Sacramento travaille pendant que les autres villes brillent.`,
    },

    // HAWAII
    {
        stateCode: '15',
        citySlug: 'honolulu',
        cityName: 'Honolulu',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Honolulu%2C_Hawaii.svg/1200px-Flag_of_Honolulu%2C_Hawaii.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=1600&q=80',
        shortSummary: `Le sceau municipal sur champ jaune – capitale du dernier État, ancien royaume indépendant.`,
        story: `Le drapeau d'Honolulu, adopté en 1960, présente le sceau municipal sur un champ jaune. Simple, presque bureaucratique, il reflète le statut paradoxal d'Honolulu : capitale de l'État le plus récent (Hawaii a rejoint l'Union en 1959), ancienne capitale d'un royaume indépendant.

Honolulu signifie "baie abritée" en hawaïen. La ville a été la capitale du Royaume d'Hawaii de 1845 à 1893, lorsque la monarchie a été renversée par des planteurs américains soutenus par les Marines américains. La reine Liliʻuokalani, dernière monarque hawaïenne, a été emprisonnée dans le palais ʻIolani – le seul palais royal sur le sol américain, qui se dresse toujours au cœur d'Honolulu.

Aujourd'hui, Honolulu est une métropole de près d'un million d'habitants, concentrée sur l'île d'Oahu. C'est un hub militaire stratégique (Pearl Harbor), un centre touristique international (Waikiki Beach), et un pont culturel entre l'Amérique et l'Asie-Pacifique. La population est majoritairement asiatique-américaine – japonaise, philippine, chinoise, coréenne.

Le drapeau jaune simple cache une histoire complexe : annexation impériale, perte de souveraineté, militarisation, tourisme de masse, montée du mouvement de souveraineté hawaïenne. Honolulu porte le poids d'être à la fois paradis tropical carte postale et capitale d'un État dont l'incorporation dans l'Union reste contestée par certains Hawaïens natifs. Le sceau sur le drapeau ne dit rien – et c'est peut-être intentionnel.`,
    },

    // OREGON
    {
        stateCode: '41',
        citySlug: 'portland',
        cityName: 'Portland',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Portland%2C_Oregon.svg/1200px-Flag_of_Portland%2C_Oregon.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1454166155302-ef4863c27e70?w=1600&q=80',
        shortSummary: `Une étoile à quatre pointes rayonne en bleu et jaune sur fond vert – "Ville des roses".`,
        story: `Le drapeau de Portland, Oregon, conçu en 1969 par R. Douglas Lynch et adopté sous sa forme révisée en 2002, présente un champ vert avec une étoile blanche à quatre pointes au centre, d'où rayonnent des bandes bleues bordées d'éléments jaunes en forme de L.

Le vert représente "les forêts et notre ville verte" – Portland est entourée par la forêt nationale du Mont Hood et cultive une identité écologique militante. Le jaune symbolise "l'agriculture et le commerce" de la vallée de Willamette. Le bleu évoque "nos rivières" : le fleuve Columbia et la rivière Willamette qui se rejoignent au cœur de Portland.

Portland a une réputation unique en Amérique : ville hipster, paradis des cyclistes, capitale du café artisanal et des food trucks. C'est la ville où "les jeunes vont pour prendre leur retraite" (selon l'émission satirique Portlandia). Mais c'est aussi une ville portuaire industrielle, un hub technologique, et un laboratoire d'urbanisme progressiste.

Le drapeau, classé 6e meilleur drapeau municipal américain dans l'enquête NAVA de 2004, reflète cette identité : géométrie audacieuse, couleurs symboliques claires, pas de sceau bureaucratique. Portland fait les choses différemment, et son drapeau le proclame. "Keep Portland Weird" n'est pas juste un slogan – c'est une philosophie visuelle.`,
    },
    {
        stateCode: '41',
        citySlug: 'salem',
        cityName: 'Salem',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_Salem%2C_Oregon_2022.svg/1200px-Flag_of_Salem%2C_Oregon_2022.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80',
        shortSummary: `Une fleur de cerisier rose avec une étoile blanche – nouveau drapeau, nouvelle identité.`,
        story: `En 2022, Salem a adopté un nouveau drapeau qui rompt radicalement avec son ancien design bureaucratique. Sur un champ blanc avec une bande bleue verticale à gauche, une fleur de cerisier rose stylisée occupe le centre droit, avec une étoile blanche à cinq branches au cœur de ses pétales.

La fleur de cerisier n'est pas un cliché touristique. Salem abrite l'Université Willamette, dont le campus contient des cerisiers japonais offerts par le consul du Japon en 1935. Chaque printemps, la ville célèbre le Salem Cherry Blossom Festival. Les cerisiers sont devenus synonymes de l'identité locale.

Salem est la capitale de l'Oregon depuis 1859, mais comme Sacramento en Californie, elle vit dans l'ombre de sa grande sœur Portland. C'est une ville de fonctionnaires, d'étudiants, de fermes environnantes. La vallée de Willamette autour de Salem produit du houblon, du vin, des fruits – c'est l'arrière-pays agricole fertile qui nourrit Portland.

Le nouveau drapeau, adopté le 11 juillet 2022, reflète une tentative de modernisation identitaire. Salem veut être plus qu'une capitale administrative. Elle veut être reconnue pour sa beauté, sa culture japonaise, son héritage horticole. Le drapeau est une déclaration : Salem existe, Salem compte, Salem fleurit.`,
    },

    // WASHINGTON
    {
        stateCode: '53',
        citySlug: 'olympia',
        cityName: 'Olympia',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Olympia.`,
    },
    {
        stateCode: '53',
        citySlug: 'seattle',
        cityName: 'Seattle',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_Seattle.svg/1200px-Flag_of_Seattle.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1600&q=80',
        shortSummary: `Turquoise et blanc, le portrait du Chef Seattle – "City of Goodwill".`,
        story: `Le drapeau de Seattle, adopté le 16 juillet 1990 pour les Goodwill Games, présente un champ turquoise et blanc avec le logo municipal : un portrait du Chef Seattle entouré de deux lignes, avec les mots "City of Goodwill" au-dessus et "Seattle" en dessous.

        La couleur turquoise/bleu-vert a été choisie pour évoquer "la couleur du Puget Sound au crépuscule" – cette mer intérieure qui définit Seattle géographiquement, économiquement, spirituellement. Seattle est une ville maritime, construite sur des collines entre le Puget Sound à l'ouest et le lac Washington à l'est.

        Le Chef Seattle (Sealth) était le leader de la tribu Duwamish et Suquamish qui a accueilli les colons blancs dans les années 1850. La ville porte son nom – un hommage rare dans l'histoire coloniale américaine où les noms autochtones ont souvent été effacés. Mais c'est aussi un hommage compliqué : la tribu Duwamish n'a jamais reçu de reconnaissance fédérale.

        Seattle est aujourd'hui le siège de Boeing, Microsoft, Amazon, Starbucks. C'est la ville du grunge (Nirvana, Pearl Jam), du café omniprésent, de la pluie constante. Le drapeau, dessiné par l'architecte David Wright, capture cette identité brumeuse, nordique, technologique. Seattle regarde vers le Pacifique, vers l'Alaska, vers l'Asie – pas vers le reste de l'Amérique.`,
    },

    // LOT 4 - GRANDS LACS ET MIDWEST

    // WISCONSIN
    {
        stateCode: '55',
        citySlug: 'milwaukee',
        cityName: 'Milwaukee',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Milwaukee%2C_Wisconsin.svg/1200px-Flag_of_Milwaukee%2C_Wisconsin.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Un engrenage bleu, le sceau municipal – "La ville qui a rendu la bière célèbre".`,
        story: `Le drapeau de Milwaukee, adopté en 1954, présente un champ bleu moyen avec un grand engrenage doré au centre. À l'intérieur de cet engrenage se trouve le sceau de la ville, montrant des symboles industriels, agricoles et commerciaux qui définissent l'identité de Milwaukee.

L'engrenage n'est pas métaphorique. Milwaukee a été construite sur la fabrication industrielle : machines-outils, équipements lourds, motocyclettes Harley-Davidson, et surtout, la bière. Pabst, Miller, Schlitz – ces noms ont transformé Milwaukee en capitale brassicole américaine au XIXe siècle. Les immigrants allemands ont apporté leurs recettes et leur savoir-faire, créant une culture de brassage qui perdure.

Mais Milwaukee a aussi un autre drapeau : le "People's Flag of Milwaukee", adopté en 2016 comme symbole non officiel. Ce drapeau moderne montre un soleil levant au-dessus du lac Michigan, avec des barres représentant les trois rivières de la ville. C'est un exemple rare de drapeau civique participatif, créé par les citoyens pour les citoyens.

Milwaukee est une ville de contradictions : fortement ségrégée mais politiquement progressiste, industrielle mais culturellement riche. Le Milwaukee Art Museum de Calatrava domine le front de lac comme un oiseau blanc aux ailes déployées. L'engrenage du drapeau officiel capture cette dualité : Milwaukee travaille, Milwaukee construit, Milwaukee produit. C'est la capitale du "Beer Belt" américain.`,
    },
    {
        stateCode: '55',
        citySlug: 'madison',
        cityName: 'Madison',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Flag_of_Madison%2C_Wisconsin_%282018%E2%80%93present%29.svg/1200px-Flag_of_Madison%2C_Wisconsin_%282018%E2%80%93present%29.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
        shortSummary: `Une bande blanche diagonale, un disque doré – capitale entre deux lacs.`,
        story: `Le drapeau de Madison, adopté dans sa forme actuelle en 2018, présente un champ bleu ciel avec une bande blanche diagonale représentant l'isthme entre le lac Mendota et le lac Monona. Une croix noire au centre symbolise les quatre lacs qui entourent la ville et la forme en croix du Capitole de l'État du Wisconsin. Un disque doré représente le dôme doré emblématique du Capitole.

Cette géographie lacustre définit Madison. La ville est littéralement construite sur une bande de terre étroite entre deux lacs, avec le Capitole au sommet de la colline au centre. C'est une capitale d'État inhabituelle : universitaire, progressive, entourée de nature.

L'Université du Wisconsin-Madison domine la ville – 45 000 étudiants dans une ville de 260 000 habitants. C'est une université publique de recherche de classe mondiale, berceau historique du "Wisconsin Idea" : l'idée que l'université devrait améliorer la vie de tous les citoyens de l'État, pas seulement de ses étudiants.

Le drapeau de 2018 a remplacé un design précédent qui utilisait le symbole solaire Zia, jugé inapproprié car sacré pour le peuple Zia du Nouveau-Mexique. Le nouveau drapeau conserve la même géométrie abstraite mais remplace le symbole par un simple disque doré. Madison est une ville qui écoute, qui ajuste, qui respecte. Le drapeau reflète cette sensibilité.`,
    },

    // MINNESOTA
    {
        stateCode: '27',
        citySlug: 'minneapolis',
        cityName: 'Minneapolis',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Minneapolis.svg/1200px-Flag_of_Minneapolis.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Un pennant bleu sur champ blanc avec cercle – éducation, travail, lacs, progrès.`,
        story: `Le drapeau de Minneapolis, conçu par Louise Sundin et adopté le 27 mai 1955, présente un champ blanc avec un pennant bleu royal contenant un cercle blanc divisé en quatre sections. Chaque section montre un symbole : un bâtiment (éducation et arts), une roue dentée et une équerre (travail et industrie), un gouvernail de navire (lacs et rivières), un microscope (recherche et progrès).

Ces symboles capturent l'identité de Minneapolis. La ville abrite 18 lacs dans ses limites – les "City of Lakes". Le Mississippi traverse le cœur urbain, ses chutes Saint Anthony ayant fourni l'énergie hydraulique qui a transformé Minneapolis en centre de meunerie au XIXe siècle. Pillsbury et General Mills sont nés ici.

Minneapolis est la plus grande ville du Minnesota, formant avec Saint Paul les "Twin Cities" – deux villes jumelles séparées par le Mississippi mais fusionnées en une seule métropole. Minneapolis est plus grande, plus moderne, plus commerciale. Saint Paul est plus ancienne, plus petite, plus gouvernementale.

Le meurtre de George Floyd par la police de Minneapolis en mai 2020 a déclenché des manifestations mondiales et transformé la ville en symbole de la justice raciale. Le drapeau de 1955, avec ses symboles ordonnés de progrès et d'industrie, semble aujourd'hui anachronique. Minneapolis est en pleine réinvention identitaire.`,
    },
    {
        stateCode: '27',
        citySlug: 'saint-paul',
        cityName: 'Saint Paul',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Saint_Paul%2C_Minnesota.svg/1200px-Flag_of_Saint_Paul%2C_Minnesota.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?w=1600&q=80',
        shortSummary: `Triband jaune-bleu-jaune avec bouclier rouge – capitale du Minnesota.`,
        story: `Le drapeau de Saint Paul, conçu par l'étudiante en art Gladys Mittle et adopté le 22 novembre 1932, présente un triband horizontal jaune-bleu-jaune. La bande bleue centrale représente le fleuve Mississippi qui traverse la ville. Les bandes jaunes symbolisent un avenir brillant. Un bouclier rouge au premier plan montre divers aspects de l'industrie et de l'histoire de Saint Paul.

Le bouclier contient une étoile bleue à cinq branches représentant l'étoile du nord et l'allégeance de Saint Paul au Minnesota. Les symboles industriels évoquent le rôle de Saint Paul comme centre ferroviaire et manufacturier majeur au début du XXe siècle.

Saint Paul est la capitale du Minnesota et la plus ancienne des villes jumelles. Contrairement à Minneapolis la flashy, Saint Paul est plus calme, plus conservatrice, plus orientée vers le gouvernement. Le Capitole de l'État domine la skyline avec son dôme néoclassique blanc.

La ville a été nommée d'après une chapelle catholique dédiée à Saint Paul l'Apôtre, construite en 1841. Cette origine religieuse contraste avec Minneapolis, nommée d'après le mot Dakota pour "eau" (mni) combiné avec le grec "polis" (ville). Saint Paul européen, Minneapolis amérindien-grec. Les jumeaux ne se ressemblent pas.`,
    },

    // IOWA
    {
        stateCode: '19',
        citySlug: 'des-moines',
        cityName: 'Des Moines',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Des_Moines%2C_Iowa.svg/1200px-Flag_of_Des_Moines%2C_Iowa.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Trois ponts blancs sur bleu avec bande rouge – capitale de l'Iowa.`,
        story: `Le drapeau de Des Moines, conçu par Walter T. Proctor et adopté le 15 avril 1974, présente un champ bleu avec une bande verticale rouge le long du guindant qui s'incline vers l'intérieur. Trois "ponts" blancs horizontaux traversent le drapeau, représentant les ponts Walnut, Locust Street et Grand Avenue qui enjambent la rivière Des Moines.

Les ponts ne sont pas des détails architecturaux aléatoires. Ils symbolisent la connexion – Des Moines est une ville construite sur les deux rives d'une rivière, et les ponts ont été essentiels à son développement urbain. Le design capture cette géographie bifurquée.

Des Moines est la capitale et la plus grande ville de l'Iowa. C'est aussi le cœur de l'industrie américaine de l'assurance – Principal Financial Group, Nationwide, Allied Insurance ont tous des opérations majeures ici. Des Moines est discrètement devenue un centre financier majeur du Midwest.

Politiquement, Des Moines est célèbre pour les caucus de l'Iowa – le premier vote du cycle présidentiel américain. Tous les quatre ans, le monde entier regarde Des Moines pour les premiers signes de qui deviendra président. Le drapeau ne montre pas cette importance politique, juste trois ponts simples. Mais ces ponts portent le poids symbolique d'une ville carrefour.`,
    },

    // LOT 1 - NORD-EST

    // NEW YORK
    {
        stateCode: '36',
        citySlug: 'albany',
        cityName: 'Albany',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Albany%2C_New_York.svg/1200px-Flag_of_Albany%2C_New_York.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Tricolor orange-blanc-bleu néerlandais avec armoiries de 1789 – capitale de l'État de New York.`,
        story: `Le drapeau d'Albany, conçu en 1909 pour le tricentenaire de la découverte du fleuve Hudson par Henry Hudson, mais adopté officiellement seulement en 1912, présente un tricolore orange-blanc-bleu avec les armoiries d'Albany (dessinées en 1789) sur la bande orange.

Les couleurs sont celles du Prince's Flag (Prinsenvlag) utilisé par la Compagnie néerlandaise des Indes orientales (VOC) pour laquelle Hudson naviguait en 1609. Albany s'appelait Fort Orange sous domination néerlandaise (1624-1664), et ce drapeau rend hommage à ces racines hollandaises profondes.

Albany est la capitale de l'État de New York depuis 1797, bien qu'elle soit éclipsée en taille et en influence par New York City. C'est une capitale politique inhabituelle : petite (100 000 habitants), ancienne, coincée entre les montagnes et le fleuve Hudson. Le Capitole de l'État, achevé en 1899 après 32 ans de construction, est l'un des plus chers jamais construits.

Dans l'enquête NAVA de 2004, le drapeau d'Albany a reçu une note de 5,2/10, se classant 34e parmi 150 drapeaux municipaux américains. C'est un bon design – historiquement significatif, symboliquement clair, visuellement distinctif. Albany honore ses racines néerlandaises tout en servant comme cœur politique de l'État le plus puissant d'Amérique.`,
    },

    // CONNECTICUT
    {
        stateCode: '09',
        citySlug: 'hartford',
        cityName: 'Hartford',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Hartford%2C_Connecticut.svg/1200px-Flag_of_Hartford%2C_Connecticut.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Disque blanc avec sceau sur bleu – "Insurance Capital of the World".`,
        story: `Le drapeau de Hartford, adopté le 12 septembre 1983, présente un champ bleu avec un disque blanc (version modifiée du sceau municipal) au centre, entouré d'un large anneau bleu portant les mots "CITY OF HARTFORD" en haut et "CONNECTICUT" en bas, séparés par deux étoiles à cinq branches, le tout en blanc.

        Le sceau montre le Grand Chêne de Hartford (Hartford Charter Oak), symbole légendaire de l'indépendance du Connecticut. En 1687, selon la tradition, les colons ont caché la charte royale du Connecticut dans le creux de ce chêne pour la protéger du gouverneur anglais qui voulait la révoquer. L'arbre est devenu symbole de résistance à la tyrannie.

        Hartford est la capitale du Connecticut et, plus surprenant, la "Capitale mondiale de l'assurance". Aetna, Travelers, The Hartford, Hartford Steam Boiler – les géants de l'assurance américaine sont nés ici. Cette concentration d'entreprises d'assurance remonte au XIXe siècle, quand les compagnies d'assurance maritime se sont diversifiées vers l'assurance incendie et vie.

        Hartford était aussi un centre de fabrication d'armes : Colt's Manufacturing Company, fondée en 1855, produisait les revolvers Colt légendaires. Samuel Colt a transformé Hartford en arsenal américain. Aujourd'hui, les tours d'assurance dominent la skyline, et le drapeau bleu et blanc simple flotte au-dessus d'une capitale qui assure l'Amérique.`,
    },

    {
        stateCode: '09',
        citySlug: 'bridgeport',
        cityName: 'Bridgeport',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Bridgeport.`,
    },

    // RHODE ISLAND
    {
        stateCode: '44',
        citySlug: 'providence',
        cityName: 'Providence',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Providence%2C_Rhode_Island.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau montrant Roger Williams sur bleu foncé – fondée 1636, liberté religieuse.`,
        story: `Le drapeau de Providence, adopté en 1915, présente un champ bleu foncé avec le sceau municipal au centre. Le sceau montre l'arrivée de Roger Williams à Providence, sur un bouclier entouré d'un cercle de corde, avec "SEAL OF THE CITY OF PROVIDENCE" en haut et "FOUNDED 1636" au-dessus de "INCORPORATED 1832" en bas.

Roger Williams n'est pas une figure historique mineure. Banni de la colonie de Massachusetts Bay en 1636 pour ses opinions religieuses radicales (séparation de l'Église et de l'État, liberté de conscience), il a fondé Providence comme refuge pour la liberté religieuse. C'était révolutionnaire : aucune religion d'État, aucune persecution religieuse.

Providence signifie "la providence de Dieu" – Williams croyait que Dieu l'avait guidé vers ce lieu sûr. La ville est devenue le berceau du Rhode Island, le plus petit État américain mais aussi l'un des plus importants pour la liberté religieuse.

Aujourd'hui, Providence est la capitale du Rhode Island et un hub d'éducation (Brown University, Rhode Island School of Design) et de culture. Le centre-ville historique préserve des bâtiments coloniaux côtoyant des tours modernes. Le sceau de Roger Williams sur le drapeau rappelle que Providence a été fondée sur un principe radical : la liberté de croyance.`,
    },

    // VERMONT
    {
        stateCode: '50',
        citySlug: 'montpelier',
        cityName: 'Montpelier',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Montpelier.`,
    },
    {
        stateCode: '50',
        citySlug: 'burlington',
        cityName: 'Burlington',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Burlington%2C_Vermont.svg/1200px-Flag_of_Burlington%2C_Vermont.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Cinq bandes en zigzag bleu-blanc-vert - nouveau drapeau 2017, conçu par des jumeaux de 7e année.`,
        story: `Le drapeau de Burlington, adopté par le conseil municipal le 27 novembre 2017, présente cinq bandes horizontales en zigzag : bleu, blanc, vert, blanc, bleu. Ce design simple mais mémorable a été créé par des jumeaux de septième année, Owen et Lucas Marchessault, et levé pour la première fois lors des célébrations du Nouvel An 2017.

        Le design a une symbolique claire : la bande bleue du haut représente le ciel, l'histoire de Burlington et l'espoir pour l'avenir. La ligne blanche symbolise les montagnes enneigées. La bande verte évoque le surnom du Vermont "Green Mountain State" et l'engagement de la ville pour la protection environnementale.

        Burlington est la ville la plus grande du Vermont avec seulement 44 000 habitants – c'est le plus petit État en population après le Wyoming. Située sur les rives du lac Champlain avec vue sur les Adirondacks de New York, Burlington est une ville universitaire progressiste (Université du Vermont), célèbre pour sa scène musicale (Phish est né ici) et sa politique de gauche.

        Bernie Sanders a été maire de Burlington de 1981 à 1989 avant de devenir sénateur et candidat présidentiel. La ville a une identité socialiste assumée, rare en Amérique. Le nouveau drapeau de 2017, conçu par des enfants, capture l'esprit démocratique et accessible de Burlington.`,
    },

    // NEW HAMPSHIRE
    {
        stateCode: '33',
        citySlug: 'concord',
        cityName: 'Concord',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Concord.`,
    },
    {
        stateCode: '33',
        citySlug: 'manchester',
        cityName: 'Manchester',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Manchester%2C_New_Hampshire_flag.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau avec chute d'eau et usines sur blanc – "Labor Vincit" (Le travail conquiert).`,
        story: `Le drapeau de Manchester présente un champ blanc avec le sceau municipal en couleur au centre. Le sceau a un anneau noir bordé d'or. Dans l'anneau, "CITY OF MANCHESTER" s'incurve en haut, et "INCORPORATED JUNE 1846" s'incurve en bas, le tout en or.

        Le sceau lui-même contient trois sections avec divers symboles représentant l'héritage industriel de Manchester : une chute d'eau (les Amoskeag Falls sur la rivière Merrimack), des bâtiments d'usines, et des équipements industriels. Le bras tenant le marteau représente l'industrie. La devise "Labor Vincit" se traduit par "Le travail conquiert".

        Cette devise n'est pas exagérée. Manchester était autrefois la capitale textile mondiale. L'Amoskeag Manufacturing Company, fondée en 1831, est devenue le plus grand complexe textile du monde : 30 bâtiments en brique, 15 000 employés, 700 000 broches produisant 50 miles de tissu par heure. Les usines bordaient la rivière Merrimack sur des kilomètres.

        L'effondrement est venu en 1936 quand Amoskeag a fermé, jetant la ville dans le chaos économique. Mais Manchester a survécu, se diversifiant vers la technologie, les services financiers, la santé. Population actuelle : 115 000 habitants, la plus grande ville du New Hampshire. Le marteau du sceau continue de frapper.`,
    },

    // PENNSYLVANIA
    {
        stateCode: '42',
        citySlug: 'harrisburg',
        cityName: 'Harrisburg',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Harrisburg%2C_Pennsylvania.svg/1200px-Flag_of_Harrisburg%2C_Pennsylvania.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Keystone blanc avec dôme du Capitole sur bleu bordé d'or – capitale de la Pennsylvanie.`,
        story: `Le drapeau de Harrisburg présente un champ bleu avec une bordure jaune et l'emblème municipal centré. L'emblème consiste en un keystone blanc (pierre de voûte) avec une bordure rouge, incorporant le dôme du Capitole qui dénote l'importance de la ville comme capitale de l'État du Commonwealth de Pennsylvanie.

        Le keystone n'est pas un symbole aléatoire. La Pennsylvanie se surnomme "Keystone State" – l'État pierre de voûte. Géographiquement, la Pennsylvanie était au centre des 13 colonies originales. Historiquement, elle a joué un rôle pivot dans la fondation de la nation. Le keystone sur le drapeau de Harrisburg proclame ce statut central.

        Harrisburg est resté des années sans drapeau jusqu'à son invitation à l'Exposition du tricentenaire de Jamestown en 1907. Le maire Edward Z. Gross a proposé un concours de design. Le drapeau actuel a été légèrement mis à jour en 1991 mais maintient le design original.

        Harrisburg est une petite capitale (50 000 habitants) dominée par le gouvernement d'État. Le Capitole de Pennsylvanie, achevé en 1906, est un chef-d'œuvre Beaux-Arts avec un dôme inspiré de Saint-Pierre de Rome. Teddy Roosevelt l'a appelé "le plus beau bâtiment de capitole que j'ai jamais vu". Le drapeau capture cette fierté architecturale et politique.`,
    },
    {
        stateCode: '42',
        citySlug: 'philadelphia',
        cityName: 'Philadelphia',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Philadelphia.`,
    },

    // NEW JERSEY
    {
        stateCode: '34',
        citySlug: 'newark',
        cityName: 'Newark',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Newark.`,
    },
    {
        stateCode: '34',
        citySlug: 'trenton',
        cityName: 'Trenton',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Trenton%2C_New_Jersey.svg/1200px-Flag_of_Trenton%2C_New_Jersey.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Divisé bleu et or avec sceau – "Trenton Makes, The World Takes".`,
        story: `Le drapeau de Trenton est divisé en deux moitiés : bleue à la hampe et or à l'extrémité, avec le sceau municipal en or au centre. Le sceau a un champ blanc bordé d'un anneau bleu orné, avec un bouclier bleu contenant trois gerbes de blé (2 au-dessus de 1) en chamois au centre.

        Depuis 1909, le bleu et l'or sont les couleurs officielles de la ville, tandis que le chamois (buff) est une couleur traditionnelle du New Jersey depuis les années 1700 – couleur des uniformes de l'Armée continentale du New Jersey pendant la Révolution.

        Trenton est la capitale du New Jersey et un site crucial de l'histoire révolutionnaire américaine. La bataille de Trenton (26 décembre 1776) a été un tournant : Washington a traversé le fleuve Delaware gelé et attaqué les Hessiens à l'aube, remportant une victoire critique qui a ravivé la cause patriote.

        Mais l'identité de Trenton est industrielle. Le pont qui traverse le Delaware porte le slogan légendaire : "TRENTON MAKES, THE WORLD TAKES" (Trenton fabrique, le monde prend). Céramique, fil de fer, caoutchouc, câbles – Trenton produisait tout. L'industrie a décliné, mais le slogan demeure, et le drapeau bicolore simple proclame l'histoire révolutionnaire et industrielle de la capitale.`,
    },

    // LOT 2 - SUD

    // TEXAS
    {
        stateCode: '48',
        citySlug: 'austin',
        cityName: 'Austin',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Austin%2C_Texas.svg/1200px-Flag_of_Austin%2C_Texas.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1600&q=80',
        shortSummary: `"Keep Austin Weird" – capitale du Texas, hub tech et musique live.`,
        story: `Le drapeau d'Austin, adopté en 1961, présente un champ bleu avec le sceau municipal au centre. Le sceau montre une étoile texane blanche entourée d'un anneau portant "CITY OF AUSTIN" en haut et "1839" (année de fondation) en bas.

        Le design est classique et sobre, mais l'identité d'Austin est tout sauf conventionnelle. Le slogan officieux "Keep Austin Weird" capture l'esprit : progressiste dans un État conservateur, artistique dans un pays d'affaires, écologique dans le pays du pétrole.

        Austin est la capitale du Texas depuis 1839 et la 11e ville la plus grande des États-Unis (978 000 habitants). Mais son influence culturelle dépasse sa taille. South by Southwest (SXSW), le festival annuel de musique, film et tech, attire 400 000 visiteurs. Austin City Limits, l'émission de musique live la plus ancienne de la télévision américaine, enregistre ici depuis 1974.

        Austin s'est transformée en "Silicon Hills" – hub technologique rivalisant avec la Silicon Valley. Apple, Google, Tesla, Oracle ont des campus massifs. La croissance est explosive : la population a doublé depuis 1990. Les loyers ont explosé. L'embourgeoisement menace le caractère "weird".

        Le drapeau bleu simple avec étoile texane ne montre rien de cette étrangeté. C'est peut-être intentionnel : Austin cache sa vraie nature derrière le conformisme texan.`,
    },
    {
        stateCode: '48',
        citySlug: 'houston',
        cityName: 'Houston',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Houston.`,
    },

    // FLORIDE
    {
        stateCode: '12',
        citySlug: 'jacksonville',
        cityName: 'Jacksonville',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Jacksonville%2C_Florida.svg/1200px-Flag_of_Jacksonville%2C_Florida.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=1600&q=80',
        shortSummary: `Sceau avec fontaine sur bandes marron-or – plus grande ville par superficie aux États-Unis.`,
        story: `Le drapeau de Jacksonville, adopté en 1970, présente un sceau municipal sur un champ avec bandes marron et or. Le sceau montre la fontaine Friendship au centre, entouré de la devise "BOLD • NEW • CITY OF THE SOUTH".

        Jacksonville est absurdement grande. Avec 747 000 habitants, c'est la ville la plus peuplée de Floride. Mais c'est sa superficie qui impressionne : 2 265 km² – la plus grande ville par superficie des 48 États contigus. Jacksonville couvre plus de territoire que Rhode Island.

        Cette taille bizarre vient de la consolidation de 1968 : la ville de Jacksonville a fusionné avec le comté de Duval, absorbant des dizaines de municipalités. Le résultat : une "ville" qui inclut des plages, des marais, des banlieues, des zones rurales.

        Jacksonville est un port militaire majeur : la Naval Station Mayport et Naval Air Station Jacksonville emploient des dizaines de milliers. C'est aussi un hub bancaire et logistique. Le fleuve St. Johns traverse la ville du sud au nord (l'un des rares fleuves américains à couler vers le nord).

        La devise "Bold New City of the South" date des années 1960, quand Jacksonville tentait de se réinventer après des scandales de corruption et des tensions raciales. Le drapeau marron et or, avec sa fontaine centrale, projette une image d'harmonie civique que l'histoire plus complexe de Jacksonville contredit.`,
    },
    {
        stateCode: '12',
        citySlug: 'tallahassee',
        cityName: 'Tallahassee',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Tallahassee.`,
    },

    // CAROLINE DU NORD
    {
        stateCode: '37',
        citySlug: 'charlotte',
        cityName: 'Charlotte',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Charlotte%2C_North_Carolina.svg/1200px-Flag_of_Charlotte%2C_North_Carolina.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1600&q=80',
        shortSummary: `Couronne sur bleu avec bandes vertes – "Queen City", deuxième centre bancaire américain.`,
        story: `Le drapeau de Charlotte, adopté en 1929, présente un champ bleu avec une couronne d'or au centre, flanquée de deux bandes verticales vertes près des bords. La couronne symbolise le nom de la ville, nommée en l'honneur de Charlotte de Mecklembourg-Strelitz, reine consort de Grande-Bretagne.

"Queen City" n'est pas qu'un surnom. Charlotte embrasse son identité royale tout en étant profondément américaine. Ironiquement, le comté de Mecklenburg (où se trouve Charlotte) a émis la Mecklenburg Declaration of Independence le 20 mai 1775 – plus d'un an avant la déclaration nationale. Cette fierté révolutionnaire coexiste avec le nom royal.

Charlotte est la 15e ville la plus grande des États-Unis avec 911 000 habitants (2,8 millions dans la zone métropolitaine). Mais sa vraie puissance est financière : Charlotte est le deuxième centre bancaire américain après New York. Bank of America a son siège social ici. Wells Fargo a une présence massive. Plus de 300 milliards de dollars d'actifs bancaires.

Cette transformation de ville textile du Sud en géant financier s'est produite rapidement. Dans les années 1980, Charlotte était encore dominée par les usines textiles. La déréglementation bancaire a tout changé. Les banques locales ont fusionné, grandi, attiré des talents, construit des gratte-ciels.

Le drapeau simple – couronne d'or sur bleu – capture cette dualité : reine par nom, capitaliste par nature.`,
    },
    {
        stateCode: '37',
        citySlug: 'raleigh',
        cityName: 'Raleigh',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Flag_of_Raleigh%2C_North_Carolina.svg/1200px-Flag_of_Raleigh%2C_North_Carolina.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1600&q=80',
        shortSummary: `Chêne et étoile sur rouge et blanc – capitale NC, cœur du Research Triangle.`,
        story: `Le drapeau de Raleigh, adopté en 1967, présente une bande rouge horizontale en haut (occupant 60% du drapeau) et une bande blanche en bas. Au centre se trouve le sceau municipal en couleur : un chêne vert avec une étoile blanche à cinq branches en haut à gauche.

Le chêne symbolise la force et l'endurance. L'étoile représente l'espoir et l'orientation. Ensemble, ils capturent l'identité de Raleigh comme capitale de la Caroline du Nord (depuis 1792) et centre du Research Triangle Park.

Le Research Triangle – formé par Raleigh, Durham et Chapel Hill – est l'un des plus grands parcs de recherche scientifique au monde. Créé en 1959, le Research Triangle Park accueille plus de 300 entreprises technologiques et de recherche : IBM, Cisco, RTI International, GlaxoSmithKline. C'est le cerveau de la Caroline du Nord.

Raleigh elle-même a une population de 474 000 habitants, mais la zone métropolitaine atteint 1,4 million. La croissance est explosive : la population a triplé depuis 1980. L'économie du savoir attire des jeunes éduqués, créant une ville progressiste dans un État traditionnel.

Raleigh est nommée d'après Sir Walter Raleigh, qui a parrainé les premières tentatives de colonisation anglaise en Caroline du Nord (la "Lost Colony" de Roanoke). Le drapeau rouge et blanc avec son chêne solide projette stabilité et croissance – une capitale qui regarde vers l'avenir.`,
    },

    // SOUTH DAKOTA
    {
        stateCode: '46',
        citySlug: 'pierre',
        cityName: 'Pierre',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Pierre.`,
    },
    {
        stateCode: '46',
        citySlug: 'sioux-falls',
        cityName: 'Sioux Falls',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Sioux_Falls%2C_South_Dakota.svg',
        heroImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80',
        shortSummary: `Cascade turquoise, prairie verte et soleil dore - la metropole qui fait tourner l'Etat sans impot.`,
        story: `Le nouveau drapeau de Sioux Falls, adopte en 2018 apres un concours communautaire, est d'une clarte graphique : une bande bleu nuit pour le ciel, une courbe turquoise qui chute comme les chutes du Big Sioux River, un triangle vert pour les prairies et un disque dore pour le soleil qui se leve sur la plaine.

        Tout part de l'eau. Les chutes qui donnent son nom a la ville - 30 metres de denivele sur des dalles de quartzite rose - sont toujours au coeur de Falls Park. Les Lakotas appelaient ce lieu Inyan Ochan Ku, "sentier des rochers", et utilisaient le quartzite pour leurs outils bien avant l'arrivee des colons.

        Aujourd'hui Sioux Falls (213 000 habitants) est la capitale economique du Dakota du Sud. Sanford Health, Avera Health et Monument Health y emploient des dizaines de milliers de soignants. Citibank et toute une constellation de banques ont installe leurs centres de cartes de credit ici dans les annees 1980, profitant d'un Etat sans impot sur le revenu ni plafonnement des taux. Les tours de verre du centre-ville se dressent litteralement grace a ces lois financieres.

        La croissance est explosive : l'aeroport double de taille, les brasseries artisanales bordent Phillips Avenue, et les nouveaux arrivants remplissent des lotissements jusque dans la prairie. Pourtant le drapeau rappelle la geographie premiere - une cascade turquoise qui tranche le vert. Meme en pleine boomtown, tout commence par l'eau sur le quartzite rose.`,
    },

    // TENNESSEE
    {
        stateCode: '47',
        citySlug: 'memphis',
        cityName: 'Memphis',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Flag_of_Memphis%2C_Tennessee.svg/1200px-Flag_of_Memphis%2C_Tennessee.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1560930950-5cc20e80e392?w=1600&q=80',
        shortSummary: `Bandes bleu-blanc-bleu avec sceau – berceau du blues, royaume d'Elvis, capitale du barbecue.`,
        story: `Le drapeau de Memphis présente trois bandes horizontales : bleu en haut, blanc au centre (deux fois plus large), bleu en bas. Au centre se trouve le sceau municipal en couleur, montrant un bateau à vapeur sur le Mississippi avec le soleil levant derrière.

Le Mississippi n'est pas décoratif pour Memphis. C'est tout. Memphis existe à cause du fleuve. Fondée en 1819 sur une falaise surplombant le Mississippi, Memphis est devenue le plus grand marché de coton du monde au XIXe siècle. Les bateaux à vapeur descendaient le fleuve chargés de balles de coton.

Mais l'identité culturelle de Memphis est musicale. Beale Street, le cœur du district historique noir de Memphis, est le berceau du blues. W.C. Handy, B.B. King, Muddy Waters ont joué ici. Sun Studio a enregistré Elvis Presley, Johnny Cash, Jerry Lee Lewis, Carl Perkins – créant le rock and roll.

Elvis domine Memphis comme une présence fantomatique. Graceland, son manoir devenu musée, attire 600 000 visiteurs par an. C'est le deuxième domicile privé le plus visité d'Amérique après la Maison Blanche. Elvis est mort ici en 1977, mais il n'est jamais vraiment parti.

Memphis est aussi capitale mondiale du barbecue (style Memphis : ribs sèches avec rub d'épices) et siège de FedEx, qui emploie 30 000 personnes localement. Population : 633 000. Le drapeau bleu et blanc avec bateau à vapeur rappelle que tout commence avec le fleuve.`,
    },
    {
        stateCode: '47',
        citySlug: 'nashville',
        cityName: 'Nashville',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Flag_of_Nashville%2C_Tennessee.svg/1200px-Flag_of_Nashville%2C_Tennessee.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600&q=80',
        shortSummary: `Sceau avec fleur de lys sur blanc et bleu – "Music City USA", capitale de la country.`,
        story: `Le drapeau de Nashville présente un champ divisé horizontalement : blanc en haut, bleu en bas. Au centre se trouve le sceau municipal, montrant une grande fleur de lys entourée de quatre étoiles.

La fleur de lys n'est pas un symbole de Nashville – c'est un symbole français. Elle apparaît ici parce que Nashville est nommée d'après Francis Nash, général de la Révolution américaine. Les fondateurs français de la ville ont incorporé la fleur de lys comme clin d'œil aux origines françaises de Tennessee (exploré par des Français au XVIIe siècle).

Mais Nashville est définie par un seul mot : musique. "Music City USA" est le centre mondial de la musique country. Le Grand Ole Opry, l'émission de radio la plus ancienne d'Amérique (depuis 1925), enregistre encore en direct chaque semaine. La Country Music Hall of Fame est le Vatican de la country.

Broadway à Nashville est bordé de "honky tonks" – bars où la musique live joue de 10h du matin à 3h du matin, sept jours par semaine. Des dizaines de milliers de musiciens vivent à Nashville, espérant percer. L'industrie musicale génère 10 milliards de dollars annuellement.

Nashville est aussi la capitale du Tennessee avec 715 000 habitants (2 millions dans la zone métropolitaine). Un Parthénon grandeur nature dans Centennial Park rappelle que Nashville s'appelle "Athens of the South". Le drapeau bleu et blanc avec fleur de lys cache son cœur musical.`,
    },

    // LOUISIANE
    {
        stateCode: '22',
        citySlug: 'baton-rouge',
        cityName: 'Baton Rouge',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Baton Rouge.`,
    },
    {
        stateCode: '22',
        citySlug: 'new-orleans',
        cityName: 'New Orleans',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_New_Orleans%2C_Louisiana.svg/1200px-Flag_of_New_Orleans%2C_Louisiana.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=1600&q=80',
        shortSummary: `Trois fleurs de lys sur blanc – "The Big Easy", berceau du jazz, Mardi Gras et résilience.`,
        story: `Le drapeau de la Nouvelle-Orléans, adopté en 1918, présente trois fleurs de lys dorées (or) disposées en triangle sur un champ blanc. C'est le drapeau municipal le plus simple et l'un des plus beaux d'Amérique.

        Les trois fleurs de lys symbolisent les trois nations qui ont gouverné la Nouvelle-Orléans : France (1718-1763), Espagne (1763-1803), et France à nouveau brièvement (1803) avant la vente de la Louisiane aux États-Unis. Cette identité créole – française, espagnole, africaine, caribéenne, américaine – définit la ville.

        La Nouvelle-Orléans a inventé le jazz. Congo Square, où les esclaves pouvaient se rassembler le dimanche, a vu naître les rythmes africains qui ont fusionné avec les instruments européens pour créer quelque chose de totalement nouveau. Louis Armstrong, Jelly Roll Morton, Sidney Bechet – le jazz est né ici.

        Mardi Gras, Katrina, la corruption, la musique, la cuisine créole, les cimetières au-dessus du sol, Bourbon Street, les beignets, le vaudou – la Nouvelle-Orléans est unique en Amérique. Aucune autre ville ne lui ressemble. Population : 383 000 (en baisse de 100 000 depuis l'ouragan Katrina en 2005).

        Le drapeau blanc simple avec trois fleurs de lys dorées capture tout : élégance française, histoire multicouche, identité qui refuse d'être purement américaine. C'est un chef-d'œuvre de design vexillologique.`,
    },

    // LOT 3A - CENTRE-SUD

    // OKLAHOMA
    {
        stateCode: '40',
        citySlug: 'oklahoma-city',
        cityName: 'Oklahoma City',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Oklahoma_City%2C_Oklahoma.svg/1200px-Flag_of_Oklahoma_City%2C_Oklahoma.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau blanc sur bleu – "OKC", attentat de 1995, renaissance du centre-ville.`,
        story: `Le drapeau d'Oklahoma City présente un champ bleu avec le sceau municipal en blanc au centre. Le sceau montre un chariot couvert (symbole des pionniers de la Ruée vers les Terres en 1889), une charrue (agriculture), et un derrick pétrolier (industrie pétrolière).

Oklahoma City a une histoire de naissance unique : elle est née en un jour. Le 22 avril 1889, à midi précis, un coup de feu a signalé l'ouverture des "Unassigned Lands" en territoire indien. En quelques heures, 10 000 colons ont planté leurs tentes sur ce qui allait devenir Oklahoma City. C'était la "Land Run" – la ruée vers les terres.

Mais OKC est marquée par une tragédie moderne : l'attentat du 19 avril 1995. Timothy McVeigh a fait exploser un camion piégé devant le Alfred P. Murrah Federal Building, tuant 168 personnes dont 19 enfants. C'était l'acte terroriste le plus meurtrier sur sol américain avant le 11 septembre 2001.

Le Oklahoma City National Memorial, avec ses 168 chaises vides en bronze, est devenu un lieu de pèlerinage. La ville s'est reconstruite autour de ce traumatisme, transformant son centre-ville délabré en district moderne avec le Bricktown Entertainment District.

Oklahoma City est la capitale de l'Oklahoma et sa plus grande ville (population 687 000). L'économie dépend du pétrole, du gaz naturel, de l'aviation (Tinker Air Force Base), et de l'élevage. Le drapeau bleu simple avec chariot pionnier rappelle que tout a commencé par une course folle vers la terre.`,
    },

    // ARKANSAS
    {
        stateCode: '05',
        citySlug: 'little-rock',
        cityName: 'Little Rock',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Little_Rock%2C_Arkansas.svg/1200px-Flag_of_Little_Rock%2C_Arkansas.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau avec pont sur blanc – Little Rock Nine 1957, déségrégation scolaire forcée.`,
        story: `Le drapeau de Little Rock présente un champ blanc avec le sceau municipal en couleur au centre. Le sceau montre un pont traversant la rivière Arkansas, symbolisant la position de Little Rock comme point de passage crucial.

Le nom "Little Rock" vient d'un petit affleurement rocheux sur la rive sud de l'Arkansas River, utilisé comme point de repère par les premiers explorateurs français. Mais Little Rock est surtout connue pour un moment qui a changé l'Amérique : les Little Rock Nine.

En septembre 1957, neuf étudiants noirs ont tenté d'entrer au Little Rock Central High School, une école blanche, suite à l'arrêt Brown v. Board of Education qui déclarait la ségrégation scolaire inconstitutionnelle. Le gouverneur de l'Arkansas, Orval Faubus, a déployé la Garde nationale pour bloquer leur entrée.

Les images ont choqué le monde : Elizabeth Eckford, 15 ans, marchant seule vers l'école tandis qu'une foule blanche hurlait derrière elle. Le président Eisenhower a dû envoyer la 101st Airborne Division pour escorter les neuf étudiants. Des parachutistes avec baïonnettes ont protégé des enfants allant à l'école.

Little Rock Central High est maintenant un site historique national. Les Little Rock Nine sont des héros des droits civiques. Mais la lutte a laissé des cicatrices : Faubus a fermé toutes les écoles publiques de Little Rock pendant un an plutôt que de les désagréger.

Population actuelle : 204 000 habitants. Little Rock est la capitale de l'Arkansas et son centre économique. Le drapeau blanc avec pont cache l'histoire turbulente – mais Central High se dresse toujours, témoin d'un courage extraordinaire.`,
    },

    // KANSAS
    {
        stateCode: '20',
        citySlug: 'topeka',
        cityName: 'Topeka',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Topeka.`,
    },
    {
        stateCode: '20',
        citySlug: 'wichita',
        cityName: 'Wichita',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Wichita%2C_Kansas.svg/1200px-Flag_of_Wichita%2C_Kansas.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Soleil stylisé sur blanc – "Air Capital of the World", Boeing, Cessna, Beechcraft.`,
        story: `Le drapeau de Wichita, adopté en 1937, présente un champ blanc avec un soleil stylisé au centre. Le soleil a des rayons géométriques qui évoquent à la fois les rayons du soleil des Grandes Plaines et les hélices d'avions – référence subtile à l'identité aéronautique de Wichita.

        Wichita se proclame "Air Capital of the World" – la capitale mondiale de l'aviation. Ce n'est pas une exagération. Cessna, Beechcraft, Learjet, Spirit AeroSystems (qui fabrique des fuselages pour Boeing) – tous ont des usines majeures à Wichita. Plus d'avions ont été construits ici que partout ailleurs sur Terre.

        Cette concentration a commencé dans les années 1920 quand plusieurs pionniers de l'aviation se sont installés à Wichita. Clyde Cessna a fondé Cessna Aircraft Company en 1927. Walter Beech a créé Beechcraft en 1932. Pendant la Seconde Guerre mondiale, Wichita produisait des bombardiers B-29 Superfortress en masse.

        Aujourd'hui, l'aviation représente toujours l'économie de Wichita, mais la consolidation de l'industrie a frappé dur. Boeing a fermé son usine locale en 2014. Des milliers d'emplois perdus. Wichita cherche à se diversifier vers la santé, la technologie, l'agriculture.

        Population : 397 000 habitants, la plus grande ville du Kansas. Wichita était aussi une ville de cow-boys au XIXe siècle – terminus de la Chisholm Trail où des millions de têtes de bétail arrivaient du Texas. Wyatt Earp était marshal adjoint ici avant Tombstone.

        Le drapeau blanc avec soleil stylisé capture l'optimisme des Grandes Plaines – mais les rayons ressemblent aussi à des hélices tournant vers un avenir incertain.`,
    },

    // NORTH DAKOTA
    {
        stateCode: '38',
        citySlug: 'bismarck',
        cityName: 'Bismarck',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Flag_of_Bismarck%2C_North_Dakota.svg',
        heroImage: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&q=80',
        shortSummary: `Croix dorée, tipi rouge et cercle blanc – capitale des Grandes Plaines et des champs de Bakken.`,
        story: `Le drapeau de Bismarck, adopté en 1973, est d'une lisibilité redoutable : un fond bleu profond, une croix dorée qui étire les cardinales et un tipi rouge cerclé de blanc au centre. Le symbole résume la rencontre des cultures : les nations dakotas qui habitaient ces plaines et la ville moderne née du chemin de fer du Northern Pacific.

        Bismarck est perchée sur la rive est du Missouri. C'est la capitale politique du Dakota du Nord mais aussi la porte d'entrée vers les champs pétroliers de Bakken. Depuis 2010, la ruée vers le pétrole a fait exploser l'économie : hôtels complets, salaires doublés, embouteillages de pick-ups sur l'Interstate 94. Les bureaux du Capitole – un gratte-ciel Art déco de 21 étages – regardent cette transformation.

        Le tipi rouge du drapeau rappelle que cette richesse est extraite d'une terre habitée depuis des millénaires. L'État a été nommé en 1889, mais le nom de la ville, Bismarck, était un coup marketing : les financiers allemands de New York l'ont choisi pour flatter l'empire allemand et attirer des capitaux. Un siècle et demi plus tard, la croix dorée s'étend sur un horizon toujours aussi vaste.`,
    },
    {
        stateCode: '38',
        citySlug: 'fargo',
        cityName: 'Fargo',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Fargo.`,
    },

    // MISSOURI
    {
        stateCode: '29',
        citySlug: 'jefferson-city',
        cityName: 'Jefferson City',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Jefferson City.`,
    },
    {
        stateCode: '29',
        citySlug: 'kansas-city-mo',
        cityName: 'Kansas City',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kansas_City%2C_Missouri.svg/1200px-Flag_of_Kansas_City%2C_Missouri.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80',
        shortSummary: `Cœur rouge sur blanc et bleu – jazz, barbecue, fontaines, la "vraie" Kansas City.`,
        story: `Le drapeau de Kansas City, Missouri présente un champ divisé horizontalement : blanc en haut, bleu en bas, avec un grand cœur rouge au centre contenant le sceau municipal. Le cœur symbolise la position de Kansas City comme "Heart of America" – le cœur de l'Amérique.

        C'est LA Kansas City – celle avec le jazz, le barbecue, les fontaines. Kansas City est la ville des fontaines : plus de 200 fontaines publiques, plus que Rome. La plus célèbre, la J.C. Nichols Memorial Fountain, est un chef-d'œuvre néoclassique avec chevaux de bronze jaillissant de l'eau.

        Le jazz de Kansas City a une histoire légendaire. Dans les années 1920-30, sous la machine politique corrompue du patron Tom Pendergast, Kansas City était grande ouverte : alcool, jeux, jazz toute la nuit. Charlie Parker est né ici. Count Basie a dirigé son orchestre depuis Kansas City. Le Kansas City jazz – blues, swing, improvisation – a influencé tout le jazz américain.

        Le barbecue de Kansas City est une religion. Burnt ends, ribs, sauce tomate sucrée et épaisse. Arthur Bryant's, Joe's Kansas City, Gates Bar-B-Q – les temples du barbecue. Anthony Bourdain a appelé Arthur Bryant's "le meilleur restaurant du monde".

        Kansas City est aussi un hub de transport majeur : chemins de fer, autoroutes, rivières (Missouri et Kansas se rejoignent ici). Hallmark Cards a son siège ici. Population : 495 000 (2,2 millions dans la zone métropolitaine).

        Le drapeau avec son cœur rouge capture l'identité de Kansas City : passionnée, centrale, battant au rythme du jazz et du barbecue.`,
    },

    // KENTUCKY
    {
        stateCode: '21',
        citySlug: 'frankfort',
        cityName: 'Frankfort',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Frankfort.`,
    },
    {
        stateCode: '21',
        citySlug: 'louisville',
        cityName: 'Louisville',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_Louisville%2C_Kentucky.svg/1200px-Flag_of_Louisville%2C_Kentucky.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Fleur de lys sur blanc et bleu – Kentucky Derby, bourbon, Muhammad Ali.`,
        story: `Le drapeau de Louisville présente un champ divisé horizontalement : bleu en haut, blanc en bas, avec une grande fleur de lys dorée au centre. La fleur de lys honore le roi Louis XVI de France, dont la ville porte le nom.

        Louisville signifie une chose pour le monde : le Kentucky Derby. Chaque premier samedi de mai depuis 1875, le "Run for the Roses" attire 150 000 personnes à Churchill Downs. Chapeaux extravagants, mint juleps, "My Old Kentucky Home" chanté avant la course – c'est le sport américain comme spectacle du Sud.

        Mais l'identité de Louisville va plus profond. C'est la capitale mondiale du bourbon. Environ 95% du bourbon mondial vient du Kentucky, et Louisville est son cœur. Maker's Mark, Woodford Reserve, Angel's Envy – les distilleries entourent la ville. L'Urban Bourbon Trail permet de visiter 40 bars spécialisés en bourbon.

        Louisville est aussi la ville natale de Muhammad Ali. Le Muhammad Ali Center, musée et centre culturel, célèbre non seulement le plus grand boxeur de tous les temps, mais aussi son activisme contre la guerre du Vietnam et pour les droits civiques. Ali a jeté sa médaille d'or olympique dans la rivière Ohio pour protester contre la ségrégation.

        Population : 633 000 habitants, la plus grande ville du Kentucky. Louisville est aussi un hub logistique majeur : UPS Worldport, le plus grand hub de tri automatisé au monde, traite 2 millions de colis par jour ici.

        Le drapeau bleu et blanc avec fleur de lys française capture l'élégance et la tradition – Derby, bourbon, grâce du Sud.`,
    },

    // ALABAMA
    {
        stateCode: '01',
        citySlug: 'birmingham',
        cityName: 'Birmingham',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_Birmingham%2C_Alabama.svg/1200px-Flag_of_Birmingham%2C_Alabama.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau avec enclume sur blanc – "Bombingham", violence des droits civiques, rédemption.`,
        story: `Le drapeau de Birmingham présente un champ blanc avec le sceau municipal au centre. Le sceau montre une enclume – symbole de l'industrie sidérurgique qui a construit Birmingham et lui a donné le surnom "Pittsburgh du Sud".

Birmingham a été fondée en 1871 à l'intersection de deux voies ferrées, avec des gisements massifs de minerai de fer, de charbon et de calcaire à proximité – tout ce dont on a besoin pour faire de l'acier. La ville a explosé. Les hauts fourneaux rugissaient. U.S. Steel employait des dizaines de milliers. Vulcan, la statue en fonte de 17 mètres dominant la ville, symbolise cette puissance industrielle.

Mais Birmingham est surtout connue pour son rôle tragique dans l'histoire des droits civiques. Le surnom sinistre "Bombingham" vient des dizaines d'attentats à la bombe contre des maisons et églises noires dans les années 1950-60. Le Ku Klux Klan terrorisait avec une violence impunie.

Le 15 septembre 1963, quatre fillettes noires – Addie Mae Collins, Cynthia Wesley, Carole Robertson, Carol Denise McNair – ont été tuées quand le KKK a bombardé la 16th Street Baptist Church. Les photos ont choqué le monde. Martin Luther King Jr. a prononcé leurs éloges funèbres.

Les marches de 1963, les chiens policiers et lances à incendie utilisés contre des manifestants pacifiques (immortalisés en photos brutales) ont galvanisé le soutien national au Civil Rights Act de 1964.

Aujourd'hui, Birmingham (population 200 000) s'est transformé. Le Birmingham Civil Rights Institute préserve cette histoire douloureuse. La ville a élu des maires noirs. Mais les cicatrices restent, et le drapeau blanc avec enclume ne montre rien de cette lutte.`,
    },
    {
        stateCode: '01',
        citySlug: 'montgomery',
        cityName: 'Montgomery',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_Montgomery%2C_Alabama.svg/1200px-Flag_of_Montgomery%2C_Alabama.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau sur blanc – "Cradle of the Confederacy" et berceau du Mouvement des droits civiques.`,
        story: `Le drapeau de Montgomery présente un champ blanc avec le sceau municipal au centre. Montgomery porte deux titres contradictoires : "Cradle of the Confederacy" (Berceau de la Confédération) et berceau du Mouvement des droits civiques américain.

Montgomery était la première capitale des États confédérés d'Amérique en 1861. Jefferson Davis a prêté serment comme président confédéré sur les marches du Capitole de l'Alabama. La "Stars and Bars" confédérée a été levée ici pour la première fois. Montgomery a embrassé cette identité pendant plus d'un siècle.

Puis Rosa Parks a refusé de céder son siège dans un bus à un passager blanc le 1er décembre 1955. Son arrestation a déclenché le Montgomery Bus Boycott – 381 jours pendant lesquels les Noirs ont refusé d'utiliser les bus ségrégués. Martin Luther King Jr., jeune pasteur de 26 ans, a émergé comme leader du boycott.

Le boycott a réussi. La Cour suprême a déclaré la ségrégation dans les bus inconstitutionnelle. Mais la victoire a eu un coût : la maison de King a été bombardée. Des militants ont été battus. La violence blanche était intense.

Montgomery était aussi le terminus de la marche Selma-Montgomery de 1965 – 54 miles de protestation qui ont abouti à 25 000 manifestants sur les marches du Capitole. Le Voting Rights Act a suivi cinq mois plus tard.

Population actuelle : 200 000 habitants. Montgomery est la capitale de l'Alabama et un site de pèlerinage pour l'histoire des droits civiques. Le National Memorial for Peace and Justice commémore les victimes de lynchage. Le drapeau blanc simple cache des couches d'histoire complexes et douloureuses.`,
    },

    // LOT 3B - FINAL (les 11 dernières pour atteindre 100 !)

    // VIRGINIA
    {
        stateCode: '51',
        citySlug: 'virginia-beach',
        cityName: 'Virginia Beach',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Flag_of_Virginia_Beach%2C_Virginia.svg/1200px-Flag_of_Virginia_Beach%2C_Virginia.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Trident de Neptune sur bleu et blanc – station balnéaire, base militaire massive.`,
        story: `Le drapeau de Virginia Beach, adopté le 20 juin 1966, présente un champ divisé horizontalement : bleu en haut, blanc en bas, avec un trident doré (symbole de Neptune, dieu de la mer) au centre.

Le trident n'est pas décoratif. Virginia Beach se proclame la "plus grande station balnéaire de la côte Est". La statue géante de Neptune en bronze (9 mètres) domine le boardwalk – 5 km de promenade en bord de mer bordée d'hôtels, restaurants, boutiques. Des millions de touristes visitent chaque année.

Mais Virginia Beach a une double identité. C'est aussi une ville militaire massive. Naval Air Station Oceana, l'une des plus grandes bases aériennes de la Navy, abrite des escadrons de Super Hornets F/A-18. Le rugissement des jets est constant. Joint Expeditionary Base Little Creek-Fort Story accueille des unités Navy SEAL et amphibies.

Virginia Beach est la ville la plus peuplée de Virginie avec 459 000 habitants – dépassant Richmond et Norfolk. C'est aussi géographiquement énorme : 1 300 km², s'étendant de la plage atlantique jusqu'aux terres agricoles intérieures.

L'histoire commence ici : Cape Henry, à Virginia Beach, est le site du premier débarquement anglais en Amérique en 1607, avant qu'ils ne remontent la James River pour fonder Jamestown. Le First Landing Cross marque le spot.

Le drapeau bleu et blanc avec trident capture cette identité balnéaire – mais cache les jets militaires rugissant au-dessus.`,
    },
    {
        stateCode: '51',
        citySlug: 'richmond',
        cityName: 'Richmond',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Richmond%2C_Virginia.svg/1200px-Flag_of_Richmond%2C_Virginia.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau avec statue équestre sur blanc – capitale confédérée, Monument Avenue controversée.`,
        story: `Le drapeau de Richmond présente un champ blanc avec le sceau municipal au centre. Le design est sobre, presque anonyme – ce qui est ironique pour une ville dont l'histoire est si chargée.

Richmond était la capitale des États confédérés d'Amérique (1861-1865). Jefferson Davis gouvernait depuis le Confederate White House (maintenant un musée). Le Capitole de Virginie, conçu par Thomas Jefferson, a accueilli le Congrès confédéré. Richmond a construit des canons, produit de la poudre, armé les armées rebelles.

L'Union a obsédé sur Richmond. "On to Richmond!" était le cri de ralliement. La campagne de la Péninsule (1862), la campagne Overland (1864) – toutes visaient Richmond. Quand la ville est tombée en avril 1865, les Confédérés ont brûlé leurs propres entrepôts. Les incendies ont détruit 25% du centre-ville.

Après la guerre, Richmond a construit Monument Avenue – boulevard bordé d'arbres avec statues massives de généraux confédérés : Robert E. Lee à cheval (18 mètres), Stonewall Jackson, J.E.B. Stuart. Ces monuments ont défini l'identité de Richmond pendant 130 ans.

Puis 2020. Manifestations Black Lives Matter. Les statues sont devenues des champs de bataille culturels. En quelques semaines, toutes ont été enlevées sauf Lee (enlevé en 2021). Monument Avenue est maintenant nue.

Richmond aujourd'hui (population 226 000, capitale de Virginie) lutte avec son identité : honorer l'histoire tout en affrontant les héritages de l'esclavage et de la ségrégation. Le American Civil War Museum tente de raconter toutes les perspectives.

Le drapeau blanc simple cache ces batailles – passées et présentes.`,
    },

    // WEST VIRGINIA
    {
        stateCode: '54',
        citySlug: 'charleston-wv',
        cityName: 'Charleston',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flag_of_Charleston%2C_West_Virginia.svg/1200px-Flag_of_Charleston%2C_West_Virginia.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau sur blanc – capitale de Virginie-Occidentale, État né de la sécession.`,
        story: `Le drapeau de Charleston présente un champ blanc avec le sceau municipal au centre. Charleston est la capitale et la plus grande ville de Virginie-Occidentale – l'État qui a fait sécession de la sécession.

L'histoire est bizarre : quand la Virginie a rejoint la Confédération en 1861, les comtés de l'ouest (montagneux, peu d'esclaves, culturellement différents) ont refusé de suivre. Ils ont fait sécession de la Virginie et rejoint l'Union comme nouvel État en 1863. La Virginie-Occidentale est littéralement née de la Guerre de Sécession.

Charleston est devenue capitale en 1885. Le Capitole de Virginie-Occidentale, achevé en 1932, a un dôme en or plus haut que celui du Capitole américain – source de fierté locale.

L'identité de Charleston est définie par deux industries : charbon et chimie. Les mines de charbon dans les Appalaches ont alimenté l'Amérique pendant un siècle. Union Carbide, DuPont, d'autres entreprises chimiques ont construit des usines massives le long de la Kanawha River. L'Institut de Charleston (maintenant zone industrielle) produisait du nylon, du néoprène, du polyéthylène.

Mais le déclin a été brutal. Les mines de charbon ferment. Les usines chimiques réduisent. La crise des opioïdes frappe la Virginie-Occidentale plus durement que presque tout autre État. Charleston a perdu 20% de sa population depuis 1960.

Population actuelle : 48 000 habitants – petite pour une capitale d'État. La ville lutte pour se réinventer autour du tourisme, de la santé, de l'éducation.

Le drapeau blanc simple ne montre rien de ces luttes – juste un sceau officiel pour une capitale née dans la division.`,
    },

    // MARYLAND
    {
        stateCode: '24',
        citySlug: 'annapolis',
        cityName: 'Annapolis',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Annapolis.`,
    },
    {
        stateCode: '24',
        citySlug: 'baltimore',
        cityName: 'Baltimore',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Baltimore%2C_Maryland.svg/1200px-Flag_of_Baltimore%2C_Maryland.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Calvert et Crossland – boulets de canon britanniques, "The Wire", renaissance du port.`,
        story: `Le drapeau de Baltimore, adopté le 20 septembre 1915, présente la bannière héraldique de George Calvert, 1er Baron Baltimore : quartiers or et noir (armoiries Calvert) alternant avec quartiers rouge et blanc (armoiries Crossland de sa mère). C'est le même design que le drapeau du Maryland – rare pour une ville.

        Baltimore est définie par un moment : le bombardement britannique de Fort McHenry en 1814. Pendant 25 heures, les navires britanniques ont pilonné le fort avec des boulets de canon et des roquettes. Francis Scott Key, témoin depuis un navire, a vu le drapeau américain flotter encore le matin. Il a écrit "The Star-Spangled Banner" – l'hymne national américain est né ici.

        Baltimore était le troisième port le plus actif d'Amérique au XIXe siècle. Les clippers de Baltimore étaient les navires les plus rapides au monde. L'immigration européenne (allemands, irlandais, italiens, polonais) a explosé. Les conserveries de fruits de mer bordaient le port intérieur. Les usines Bethlehem Steel employaient 30 000 personnes.

        Puis l'effondrement post-industriel. Les usines ont fermé. Le port a décliné. La population a chuté de 950 000 (1950) à 585 000 aujourd'hui. Les quartiers entiers – comme ceux montrés dans "The Wire" – ont été abandonnés. Baltimore a l'un des taux de criminalité les plus élevés d'Amérique.

        Mais Baltimore se bat pour renaître : Inner Harbor transformé en attraction touristique (National Aquarium, USS Constellation, Science Center), Johns Hopkins University et Hospital (recherche médicale de classe mondiale), quartiers hipster comme Fells Point.

        Le drapeau Calvert-Crossland capture l'histoire coloniale – mais ne montre rien des luttes urbaines modernes ou de la résilience de Baltimore.`,
    },

    // DELAWARE
    {
        stateCode: '10',
        citySlug: 'wilmington',
        cityName: 'Wilmington',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Wilmington%2C_Delaware.svg/1200px-Flag_of_Wilmington%2C_Delaware.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau avec navire sur bleu – "Corporate Capital", DuPont, capitale des cartes de crédit.`,
        story: `Le drapeau de Wilmington présente un champ bleu avec le sceau municipal en or au centre. Le sceau montre un navire – symbole de l'histoire portuaire de Wilmington sur la rivière Delaware.

        Wilmington est la plus grande ville du Delaware (70 000 habitants) et possède une identité unique : c'est la "Corporate Capital of the World" – la capitale mondiale des entreprises. Plus de 65% des entreprises Fortune 500 sont incorporées dans le Delaware, et beaucoup maintiennent des bureaux à Wilmington.

        Pourquoi ? Les lois corporatives du Delaware sont extrêmement favorables aux entreprises : tribunaux commerciaux spécialisés (Court of Chancery), flexibilité de gouvernance, confidentialité, impôts bas. Des milliers d'entreprises sont "domiciliées" dans un seul bâtiment à Wilmington – adresses légales pour géants multinationaux.

        Cette concentration a transformé Wilmington en centre de services corporatifs : avocats, banques, comptables. L'industrie des cartes de crédit domine : MBNA (maintenant Bank of America), Barclays, Capital One, Discover ont des opérations massives ici.

        Mais Wilmington a aussi une histoire industrielle : la famille du Pont de Nemours (DuPont) a fondé son empire chimique ici en 1802. Les usines de poudre à canon le long de la Brandywine Creek ont armé les guerres américaines pendant un siècle. DuPont est devenu un géant chimique mondial (nylon, téflon, kevlar) avec siège social à Wilmington.

        Aujourd'hui, Wilmington lutte avec le déclin post-industriel : criminalité élevée, pauvreté, quartiers abandonnés – contrastant violemment avec les tours corporatives du centre-ville.

        Le drapeau bleu avec navire évoque l'histoire coloniale – mais cache la réalité moderne d'une ville où les entreprises prospèrent tandis que les résidents luttent.`,
    },
    {
        stateCode: '10',
        citySlug: 'dover',
        cityName: 'Dover',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `Capitale discrète du Delaware, Dover cache derrière son drapeau officiel une histoire faite de plaines, de débats politiques et de routes qui filent vers la côte.`,
        story: `Au premier regard, le drapeau de Dover a l’air très institutionnel : un blason, des inscriptions, un bleu sérieux qui évoque davantage les salles de réunion que les couchers de soleil. C’est logique : Dover est la capitale politique du Delaware, une ville où l’on vote les lois d’un des plus petits États du pays.

Mais autour des bâtiments officiels, la ville reste profondément rurale. À quelques minutes du centre, les routes traversent des champs, des fermes, des stations-service où le temps semble glisser plus lentement. Le drapeau de Dover raconte ce lien entre l’administration et la campagne, entre le Capitole local et les granges à l’horizon.

Accroché devant les écoles, les tribunaux ou les bureaux d’État, il ne fait pas le spectacle. Il rappelle simplement qu’ici, quelque part entre Philadelphie et l’océan, on continue à écrire le quotidien d’un État que beaucoup traversent sans jamais s’arrêter.`,
    },

    // WASHINGTON D.C.
    {
        stateCode: '11',
        citySlug: 'washington-dc',
        cityName: 'Washington',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Washington%2C_D.C.svg/1200px-Flag_of_Washington%2C_D.C.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1569982175971-d92b01cf8694?w=1600&q=80',
        shortSummary: `Trois étoiles rouges, deux barres rouges – armoiries de George Washington, capitale fédérale sans État.`,
        story: `Le drapeau de Washington D.C., adopté en 1938, présente deux barres rouges horizontales avec trois étoiles rouges à cinq branches au-dessus sur champ blanc. C'est basé sur les armoiries héraldiques de George Washington – simple, élégant, parfaitement reconnaissable.

Dans l'enquête NAVA de 2004, le drapeau de D.C. a été classé premier parmi 150 drapeaux municipaux américains. C'est un chef-d'œuvre de design vexillologique : mémorable, distinctif, symboliquement significatif.

Washington D.C. est unique en Amérique : une ville qui n'appartient à aucun État. Le District of Columbia a été créé en 1790 comme capitale fédérale neutre, sculpté du Maryland et de la Virginie. Population : 712 000 habitants – plus que le Vermont ou le Wyoming, mais sans représentation complète au Congrès.

"Taxation Without Representation" – le slogan sur les plaques d'immatriculation de D.C. – capture la frustration. Les résidents de D.C. paient des impôts fédéraux mais n'ont qu'un délégué sans droit de vote à la Chambre, pas de sénateurs. Le mouvement pour faire de D.C. le 51e État gagne du soutien mais reste politiquement bloqué.

D.C. est défini par le gouvernement : 27% des emplois sont gouvernementaux. Le Mall – étendue de 3 km de monuments et musées (Lincoln Memorial, Washington Monument, Capitole, Smithsonians) – est l'Amérique monumentalisée.

Mais D.C. a aussi une identité culturelle distincte : Chocolate City (surnom historique pour la majorité afro-américaine), go-go music (genre musical né ici), quartiers ethniques (U Street, Shaw, Adams Morgan), gentrification rapide transformant des quartiers historiquement noirs.

Le drapeau avec étoiles de Washington capture l'héritage fondateur – mais ne montre rien du paradoxe moderne : capitale de la démocratie, privée de démocratie.`,
    },

    // MISSISSIPPI
    {
        stateCode: '28',
        citySlug: 'jackson',
        cityName: 'Jackson',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Jackson%2C_Mississippi.svg/1200px-Flag_of_Jackson%2C_Mississippi.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau sur blanc – "City with Soul", crise de l'eau, capitale du blues et des droits civiques.`,
        story: `Le drapeau de Jackson présente un champ blanc avec le sceau municipal en couleur au centre. Jackson est la capitale et la plus grande ville du Mississippi (150 000 habitants), avec un surnom optimiste : "City with Soul".

Mais Jackson fait face à une crise existentielle : l'eau. Le système d'eau vétuste s'effondre régulièrement. En 2022, l'usine de traitement principale est tombée en panne, laissant 150 000 personnes sans eau potable pendant des semaines. Les ordres d'ébullition sont fréquents. C'est une crise de justice environnementale – Jackson est 83% noir, avec un taux de pauvreté de 25%.

Jackson a joué un rôle crucial dans le Mouvement des droits civiques. Medgar Evers, leader de la NAACP, a été assassiné devant sa maison à Jackson en 1963 par un suprémaciste blanc. Le procès (l'assassin n'a été condamné qu'en 1994) a symbolisé la résistance blanche à la justice.

Les Freedom Riders ont été arrêtés et emprisonnés à la prison d'État de Parchman après être arrivés à Jackson en 1961. Les sit-ins au comptoir-lunch de Woolworth (1963) – avec manifestants couverts de nourriture, battus – ont choqué la nation.

Jackson a aussi une histoire musicale : Mississippi Blues Trail passe par Jackson. Elmore James, Little Milton sont nés ici. Le Malaco Records, label soul/blues légendaire, est basé à Jackson.

Mais le déclin est brutal. La population a chuté de 25% depuis 1980. La fuite blanche a vidé la base fiscale. L'infrastructure s'effondre. Jackson lutte pour survivre.

Le drapeau blanc simple avec sceau ne montre rien de ces luttes – juste une façade officielle pour une capitale en crise.`,
    },

    // NOUVEAU MEXIQUE
    {
        stateCode: '35',
        citySlug: 'albuquerque',
        cityName: 'Albuquerque',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Albuquerque%2C_New_Mexico.svg/1200px-Flag_of_Albuquerque%2C_New_Mexico.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=1600&q=80',
        shortSummary: `Zia sun symbol sur jaune – Breaking Bad, montgolfières, carrefour culturel triculturel.`,
        story: `Le drapeau d'Albuquerque présente un champ jaune avec le symbole Zia au centre – le même symbole sacré du peuple Zia Pueblo qui apparaît sur le drapeau du Nouveau-Mexique. C'est un soleil stylisé avec quatre rayons dans chaque direction cardinale.

Albuquerque est la plus grande ville du Nouveau-Mexique (565 000 habitants) et incarne l'identité triculturelle unique de l'État : amérindienne (19 pueblos autochtones), hispanique (colonisation espagnole depuis 1540), et anglo (américaine depuis 1848).

Le monde connaît Albuquerque grâce à "Breaking Bad" et "Better Call Saul". Les séries ont transformé la ville en destination de tourisme pop culturel. La maison de Walter White, le lave-auto A1A, Los Pollos Hermanos (en fait Twisters) – des fans du monde entier visitent ces lieux.

Mais l'identité réelle d'Albuquerque est plus complexe. C'est un hub de recherche scientifique et militaire : Sandia National Laboratories (armes nucléaires, sécurité nationale), Kirtland Air Force Base (stockage d'armes nucléaires). La bombe atomique a été partiellement développée ici.

Albuquerque accueille l'Albuquerque International Balloon Fiesta – le plus grand rassemblement de montgolfières au monde. Chaque octobre, 500+ montgolfières colorées s'élèvent au-dessus du désert. C'est spectaculaire.

La ville se situe le long du Rio Grande, coincée entre les montagnes Sandia à l'est (3 200 mètres) et mesas volcaniques à l'ouest. Route 66 traverse Albuquerque – nostalgie américaine incarnée.

Le drapeau jaune avec soleil Zia capture l'héritage autochtone – mais ne montre rien du mélange culturel moderne, des laboratoires nucléaires, ou de Walter White.`,
    },

    // NEBRASKA
    {
        stateCode: '31',
        citySlug: 'lincoln',
        cityName: 'Lincoln',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Lincoln.`,
    },
    {
        stateCode: '31',
        citySlug: 'omaha',
        cityName: 'Omaha',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Omaha%2C_Nebraska.svg/1200px-Flag_of_Omaha%2C_Nebraska.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau sur blanc – "Gateway to the West", Warren Buffett, Boys Town, abattoirs.`,
        story: `Le drapeau d'Omaha présente un champ blanc avec le sceau municipal au centre. Omaha est la plus grande ville du Nebraska (486 000 habitants, 967 000 dans la zone métropolitaine) et se proclame "Gateway to the West" – porte vers l'Ouest.

        Cette identité vient du XIXe siècle : Omaha était le terminus est de l'Union Pacific Railroad. Le premier chemin de fer transcontinental est parti d'ici en 1865, se dirigeant vers l'ouest pour rencontrer le Central Pacific venant de Californie. Le monument de Pioneer Courage dans le centre-ville honore cette histoire.

        Omaha signifie aussi Warren Buffett. L'"Oracle d'Omaha" vit toujours dans la maison modeste qu'il a achetée en 1958 pour 31 500 dollars. Berkshire Hathaway, son conglomérat de 800 milliards de dollars, a son siège social à Omaha. La réunion annuelle des actionnaires attire 40 000 personnes – pèlerinage capitaliste.

        Omaha a aussi une histoire sombre : les abattoirs. Les Union Stockyards d'Omaha étaient autrefois les plus grands du monde. Des millions de têtes de bétail transitaient par Omaha pour être transformées en viande. L'odeur était légendaire. L'industrie a décliné, mais ConAgra, Omaha Steaks maintiennent l'héritage.

        Boys Town, à l'ouest d'Omaha, a été fondé en 1917 par Father Edward Flanagan pour accueillir des garçons sans-abri. "He ain't heavy, Father... he's my brother" – la statue iconique et le film de 1938 avec Spencer Tracy ont fait de Boys Town un symbole américain.

        Omaha a produit des talents culturels surprenants : Malcolm X est né ici. Gerald Ford a grandi ici. Les musiciens indie folk Bright Eyes, Conor Oberst sont d'Omaha.

        Le drapeau blanc avec sceau ne montre rien de cette diversité – juste bureaucratie municipale.`,
    },
    {
        stateCode: '13',
        citySlug: 'atlanta',
        cityName: 'Atlanta',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Atlanta.`,
    },
    {
        stateCode: '18',
        citySlug: 'indianapolis',
        cityName: 'Indianapolis',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Indianapolis.`,
    },
    {
        stateCode: '23',
        citySlug: 'augusta',
        cityName: 'Augusta',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Augusta.`,
    },
    {
        stateCode: '23',
        citySlug: 'portland',
        cityName: 'Portland',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Portland.`,
    },
    {
        stateCode: '25',
        citySlug: 'boston',
        cityName: 'Boston',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Boston.`,
    },
    {
        stateCode: '26',
        citySlug: 'lansing',
        cityName: 'Lansing',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Lansing.`,
    },
    {
        stateCode: '26',
        citySlug: 'detroit',
        cityName: 'Detroit',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Detroit.`,
    },
    {
        stateCode: '39',
        citySlug: 'columbus',
        cityName: 'Columbus',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Columbus.`,
    },
    {
        stateCode: '45',
        citySlug: 'columbia',
        cityName: 'Columbia',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Columbia.`,
    },
    {
        stateCode: '45',
        citySlug: 'charleston',
        cityName: 'Charleston',
        flagImage: 'TODO-flag',
        heroImage: 'TODO-hero',
        shortSummary: `TODO: à écrire`,
        story: `TODO: histoire à écrire pour Charleston.`,
    },
];

// Fusionner avec les références culturelles
export const cityFlags: CityFlag[] = baseCityFlags.map(city => ({
    ...city,
    ...(culturalReferences[city.citySlug] || {})
}));

