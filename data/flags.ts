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
        heroImage: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1600&q=80',
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
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Phoenix%2C_Arizona.svg/1200px-Flag_of_Phoenix%2C_Arizona.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1518084893560-e33eea67f7ca?w=1600&q=80',
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
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Tucson%2C_Arizona.svg/1200px-Flag_of_Tucson%2C_Arizona.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1562513969-b62f1ab6f148?w=1600&q=80',
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
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Flag_of_Denver%2C_Colorado.svg/1200px-Flag_of_Denver%2C_Colorado.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1619856699906-09e1f58c98b1?w=1600&q=80',
        shortSummary: `Un soleil doré au-dessus de montagnes blanches en zigzag – la simplicité parfaite.`,
        story: `Le drapeau de Denver est l'un des plus acclamés d'Amérique, et pour cause : une ligne blanche en zigzag sépare un ciel bleu d'un sol rouge, avec un cercle jaune éclatant au centre. Adopté en 1926, il a été dessiné par Margaret Overbeck, une élève de lycée qui a remporté un concours municipal.

Les couleurs racontent le Colorado : le jaune symbolise l'or trouvé dans les collines, le rouge la terre colorée dont l'État tire son nom ("colorado" signifie "coloré" en espagnol), le bleu le ciel des Rocheuses. Le zigzag blanc représente à la fois les sommets enneigés et l'héritage des peuples autochtones qui ont vécu ici bien avant les chercheurs d'or.

En 2004, l'Association nord-américaine de vexillologie a classé ce drapeau à la troisième place des meilleurs drapeaux de villes américaines, juste derrière Washington D.C. et Chicago. Sa force ? Une géométrie audacieuse, des couleurs vives, une symbolique claire. Pas de sceau illisible, pas de texte superflu.

Denver porte son drapeau avec fierté : sur les bâtiments publics, les tatouages, les t-shirts. C'est l'identité visuelle d'une ville qui se voit comme la porte d'entrée des montagnes, un carrefour entre l'Ouest sauvage et la modernité urbaine.`,
    },
    {
        stateCode: '08',
        citySlug: 'colorado-springs',
        cityName: 'Colorado Springs',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_Colorado_Springs%2C_Colorado.svg/1200px-Flag_of_Colorado_Springs%2C_Colorado.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1599424155204-91c7d1fef4ef?w=1600&q=80',
        shortSummary: `Un soleil couchant derrière les montagnes, offert par une ligue civique en 1912.`,
        story: `Le drapeau de Colorado Springs précède même celui de Denver – il a été présenté au conseil municipal en 1912 par Caroline Spencer, représentante de la Civic League. Sur un champ blanc bordé de bleu, un losange côté hampe montre le soleil se couchant derrière des montagnes vertes.

La ville, fondée en 1871 par le général William Jackson Palmer comme station balnéaire de montagne, a toujours cultivé une image de sophistication et de beauté naturelle. Le drapeau reflète cette dualité : élégance formelle (le blanc immaculé, les bordures nettes) et splendeur des Rocheuses (les pics de Pikes Peak qui dominent l'horizon).

En 2004, ce drapeau s'est classé 19e sur 150 dans l'enquête NAVA – un excellent score qui reconnaît sa simplicité géométrique et son symbolisme évident. Contrairement à tant de drapeaux municipaux surchargés de sceaux et de dates, Colorado Springs a fait le choix de la poésie visuelle.

La ville, qui abrite l'Académie de l'Air Force des États-Unis et le célèbre Garden of the Gods, porte son drapeau comme un rappel que beauté et ordre peuvent coexister. Le soleil se couche chaque soir sur ces montagnes, et chaque matin il se lève sur une ville qui regarde à la fois vers le passé pionnier et l'avenir technologique.`,
    },

    // IDAHO
    {
        stateCode: '16',
        citySlug: 'boise',
        cityName: 'Boise',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Boise%2C_Idaho.svg/1200px-Flag_of_Boise%2C_Idaho.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1599909502346-132c2b07f7c0?w=1600&q=80',
        shortSummary: `La "Ville des Arbres" – un fond bleu, le capitole d'État, et une forêt qui ne devrait pas exister ici.`,
        story: `Boise doit son nom aux explorateurs français qui, après avoir traversé des centaines de kilomètres de désert de l'Oregon, ont aperçu les arbres longeant la rivière Boise et se sont exclamés "Les bois ! Les bois !" (prononcer "boi-zi"). Le nom est resté, légèrement déformé en "Boise", et la ville porte fièrement le surnom de "City of Trees".

Le drapeau municipal, adopté en 1989, présente un fond bleu avec une bande blanche contenant les mots "Boise | City of Trees", et en arrière-plan, une silhouette blanche du Capitole d'État de l'Idaho et d'un bosquet d'arbres. Le design a été classé 114e sur 150 dans l'enquête NAVA de 2004 – un score médiocre qui reflète sa nature conventionnelle.

Mais le drapeau dit une vérité importante : Boise est la capitale de l'Idaho, et c'est une ville verte dans un État de montagnes, de déserts, de lacs volcaniques. La rivière Boise serpente à travers la ville, bordée de peupliers et de saules, créant un corridor verdoyant qui contraste avec le paysage aride environnant.

En 2025, Boise a fait un geste politique audacieux : le conseil municipal a voté 5-1 pour désigner trois drapeaux comme drapeaux officiels de la ville – le drapeau municipal classique, le drapeau Pride, et le drapeau blanc des donneurs d'organes. Dans un État conservateur, c'était une déclaration d'inclusion. Boise n'a peut-être pas le meilleur drapeau d'Amérique, mais elle montre que la signification d'un drapeau peut évoluer.`,
    },
    {
        stateCode: '16',
        citySlug: 'pocatello',
        cityName: 'Pocatello',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_Pocatello%2C_Idaho.svg/1200px-Flag_of_Pocatello%2C_Idaho.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1606240724602-5d94f0e6e9f8?w=1600&q=80',
        shortSummary: `La pire disaster vexillologique d'Amérique, remplacée en 2017 par un design minimaliste.`,
        story: `Pocatello détient le record indiscutable du pire drapeau municipal de l'histoire américaine. L'ancien design (1997-2017) était si catastrophique qu'il est devenu une légende virale : un fond bleu avec "Proud to be Pocatello" en lettres rouges et blanches décentrées, le copyright symbole "™", et un sceau illisible. Le magazine américain Fast Company l'a qualifié de "pire drapeau du monde".

Le drapeau était si mauvais qu'il est apparu dans des talk-shows, des articles de presse nationaux, et même une conférence TED sur le design vexillologique. Les habitants de Pocatello ont fini par l'admettre : leur drapeau était une honte publique. En 2016, la ville a lancé un concours pour un nouveau design.

Le drapeau actuel, adopté en 2017, est une rédemption spectaculaire. Design minimaliste : trois montagnes stylisées (bleue, blanche, rouge) sur fond blanc, représentant les "Three Sisters" qui dominent l'horizon de Pocatello. Pas de texte, pas de sceau, pas de copyright. Juste des formes géométriques pures.

Pocatello, nommée d'après un chef Shoshone du XIXe siècle, est une ville ferroviaire et universitaire (Idaho State University). Elle a appris une leçon que toutes les villes devraient retenir : un mauvais drapeau peut définir votre réputation, mais un bon design peut restaurer votre fierté. Le nouveau drapeau de Pocatello n'est pas révolutionnaire, mais c'est un triomphe du bon sens sur l'incompétence.`,
    },

    // MONTANA
    {
        stateCode: '30',
        citySlug: 'helena',
        cityName: 'Helena',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Helena%2C_Montana.svg/1200px-Flag_of_Helena%2C_Montana.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1565731802122-09e2456d0f7e?w=1600&q=80',
        shortSummary: `Capitale d'État née de la ruée vers l'or, entre les montagnes et la Continental Divide.`,
        story: `Helena est une capitale d'État qui a débuté comme camp minier. En 1864, un groupe de prospecteurs surnommés les "Four Georgians" a découvert de l'or dans un ravin qu'ils ont appelé Last Chance Gulch (le ravin de la dernière chance). En deux décennies, ce camp de tentes est devenu l'une des villes les plus riches par habitant d'Amérique.

Le drapeau d'Helena présente son sceau municipal sur fond bleu : des montagnes, des références à l'or, et les symboles d'une ville qui a transformé la fortune minérale en pouvoir politique. Quand le Montana est devenu un État en 1889, Helena a été choisie comme capitale après une bataille acharnée contre Anaconda (ville contrôlée par le Copper King Marcus Daly).

Last Chance Gulch est aujourd'hui la rue principale piétonne d'Helena, bordée de bâtiments victoriens restaurés. La ville est nichée dans les Rocheuses, près de la Continental Divide – la ligne de partage des eaux qui sépare les bassins versants du Pacifique et de l'Atlantique. C'est une position géographique symbolique pour une capitale.

Helena a également joué un rôle dans l'histoire des droits civiques : en 1954, c'était la première ville du Montana à désagréger volontairement ses écoles publiques, avant même l'arrêt Brown v. Board of Education. Le drapeau ne raconte pas cette histoire, mais la ville la porte. Helena n'est pas qu'une relique de la ruée vers l'or – c'est une capitale qui continue d'évoluer.`,
    },
    {
        stateCode: '30',
        citySlug: 'great-falls',
        cityName: 'Great Falls',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flag_of_Great_Falls%2C_Montana.svg/1200px-Flag_of_Great_Falls%2C_Montana.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=1600&q=80',
        shortSummary: `Les grandes chutes du Missouri – Lewis et Clark, bases militaires, et le cœur électrique du Montana.`,
        story: `Great Falls doit son nom à une série de cinq cascades spectaculaires sur le Missouri River, découvertes par l'expédition Lewis et Clark en juin 1805. Les cascades ont obligé l'expédition à effectuer un portage épuisant de 18 miles qui a duré près d'un mois. Lewis a écrit dans son journal que c'était "la plus belle vue qu'il ait jamais contemplée".

La ville moderne a été fondée en 1883, et elle est rapidement devenue un centre industriel grâce à l'énergie hydroélectrique des chutes. Dans les années 1890, le magnat du cuivre Marcus Daly a construit une fonderie de cuivre géante à Great Falls, alimentée par l'électricité des barrages. La ville est devenue le cœur énergétique du Montana.

Le drapeau de Great Falls présente des éléments évoquant cette histoire : les chutes, les montagnes, et peut-être une référence aux bases de l'Air Force. Malmstrom Air Force Base, établie en 1942, est l'un des plus grands employeurs de la région et abrite des missiles balistiques intercontinentaux Minuteman III. Great Falls a une identité militaire profonde.

Aujourd'hui, plusieurs des cascades originales sont submergées par des barrages hydroélectriques, mais la ville porte toujours le nom qui a captivé Lewis et Clark. Great Falls se situe au carrefour de l'histoire de la conquête de l'Ouest (l'expédition), de l'industrialisation (le cuivre et l'électricité), et de la militarisation moderne (missiles nucléaires). Son drapeau essaie de contenir toutes ces couches – un défi vexillologique considérable.`,
    },

    // NEVADA
    {
        stateCode: '32',
        citySlug: 'las-vegas',
        cityName: 'Las Vegas',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Flag_of_Las_Vegas%2C_Nevada.svg/1200px-Flag_of_Las_Vegas%2C_Nevada.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1600&q=80',
        shortSummary: `Un arbre de Josué, un jet militaire, un soleil levant – le désert rencontre l'aviation.`,
        story: `Le drapeau de Las Vegas, adopté formellement en 1968, présente un champ bleu traversé par une bande diagonale grise, avec le sceau municipal dans le canton supérieur gauche. Ce sceau dense raconte l'histoire d'une ville qui ne devrait pas exister.

Au centre : un arbre de Josué vert à quatre branches, référence au paysage désertique du Nevada (Las Vegas signifie "les prairies" en espagnol, nom donné en 1829 par un explorateur mexicain qui trouva des sources d'eau dans cette vallée). Derrière : un soleil jaune aux rayons orange se levant sur des montagnes, et un jet noir avec sa traînée de condensation.

Le jet n'est pas anecdotique. Las Vegas doit une partie de son expansion à l'armée américaine : la base aérienne de Nellis, établie en 1941, et le site d'essais nucléaires du Nevada (1951-1992) ont attiré des milliers de travailleurs. Dans les années 1950, les casinos organisaient des "atomic viewing parties" pour observer les champignons atomiques depuis les toits-terrasses.

Le drapeau, dessiné par Richard Thompson, capture cette identité contradictoire : ville du péché et base militaire, oasis désertique et métropole néon, ciel bleu pur et technologie de pointe. Las Vegas est la ville des illusions, mais son drapeau dit la vérité : c'est un mirage qui a réussi à devenir réel.`,
    },
    {
        stateCode: '32',
        citySlug: 'reno',
        cityName: 'Reno',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Flag_of_Reno%2C_Nevada.svg/1200px-Flag_of_Reno%2C_Nevada.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1600&q=80',
        shortSummary: `Un nouveau drapeau en 2018 : bleu pour le Nevada, argent pour les mines, bleu vif pour la rivière.`,
        story: `Pendant 59 ans (1959-2018), Reno a porté un drapeau municipal standard – fonctionnel mais oubliable. En 2018, la ville a décidé qu'il était temps de changer. Un concours public a généré 1 000 commentaires, 51 000 votes, et 13 finalistes. Le design gagnant de Josip Stosic a été adopté à l'unanimité.

Le nouveau drapeau présente un fond bleu (symbole de l'État du Nevada) avec des formes géométriques argentées et bleu vif. L'argent évoque l'industrie minière qui a façonné le Nevada depuis la découverte du Comstock Lode en 1859 – la plus grande découverte d'argent de l'histoire américaine. Le bleu vif représente la rivière Truckee, artère vitale qui traverse Reno.

Reno se surnomme "The Biggest Little City in the World" (la plus grande petite ville du monde), slogan immortalisé par une arche néon enjambant Virginia Street depuis 1926. C'est une ville qui a toujours vécu dans l'ombre de Las Vegas, sa grande sœur du sud, mais qui cultive une identité distincte : plus proche des montagnes, moins bling-bling, plus authentiquement western.

Le nouveau drapeau reflète cette modernisation identitaire. Reno ne veut plus être "la petite Las Vegas du Nord". Elle veut être Reno : porte d'entrée de la Sierra Nevada, ville du divorce rapide (dans les années 1930-40), paradis des startups tech (aujourd'hui). Un drapeau neuf pour une ville qui se réinvente.`,
    },

    // NEW MEXICO
    {
        stateCode: '35',
        citySlug: 'albuquerque',
        cityName: 'Albuquerque',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Albuquerque%2C_New_Mexico.svg/1200px-Flag_of_Albuquerque%2C_New_Mexico.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1584745395462-d12b1dc86dc1?w=1600&q=80',
        shortSummary: `Un champ rouge, un soleil Zia avec "1706", un thunderbird volant – le Nouveau-Mexique ancestral.`,
        story: `Le drapeau d'Albuquerque, adopté en 1968, présente un champ rouge vif avec trois éléments en jaune : le symbole solaire Zia au centre contenant le nombre "1706", le mot "Albuquerque" en italique juste en dessous, et un oiseau-tonnerre (thunderbird) stylisé dans le canton supérieur.

Le nombre 1706 marque l'année de fondation d'Albuquerque par le gouverneur espagnol Francisco Cuervo y Valdés, qui nomma la colonie en l'honneur du duc d'Alburquerque (vice-roi de la Nouvelle-Espagne). Le premier "r" a été perdu avec le temps, donnant "Albuquerque". La ville est l'une des plus anciennes villes américaines d'origine européenne encore habitées.

Le symbole Zia vient des peuples Zia Pueblo du Nouveau-Mexique. Il représente le soleil avec quatre rayons dans quatre directions, symbolisant les quatre saisons, les quatre directions cardinales, les quatre périodes du jour, les quatre périodes de la vie. C'est le même symbole qui orne le drapeau d'État du Nouveau-Mexique – un design si influent qu'il a été classé meilleur drapeau d'État américain dans plusieurs enquêtes.

Le thunderbird ajoute une dimension supplémentaire : c'est une créature mythologique des cultures amérindiennes du Sud-Ouest, associée à la puissance, à la protection et au tonnerre. Le drapeau d'Albuquerque, dessiné par Richard P. Vann (un optométriste local), a été hissé pour la première fois le 21 juin 1968. C'est un hommage visuel aux racines multiples de la ville : espagnole, mexicaine, amérindienne, américaine.`,
    },
    {
        stateCode: '35',
        citySlug: 'las-cruces',
        cityName: 'Las Cruces',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Las_Cruces%2C_New_Mexico.svg/1200px-Flag_of_Las_Cruces%2C_New_Mexico.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1591213369986-8f206c3e83b5?w=1600&q=80',
        shortSummary: `Les croix du désert – un nom macabre pour une ville qui regarde vers les étoiles.`,
        story: `Las Cruces signifie "les croix" en espagnol. Le nom vient d'un massacre survenu dans les années 1830, lorsqu'une caravane de voyageurs a été attaquée par des Apaches. Les survivants ont érigé des croix sur le site pour marquer les tombes. Ces croix ont donné leur nom à la région, puis à la ville fondée officiellement en 1849.

Le drapeau de Las Cruces présente des croix stylisées sur fond rouge et jaune, couleurs qui évoquent à la fois l'héritage espagnol et le désert de Chihuahua environnant. La ville, située dans la vallée du Rio Grande, vit dans l'ombre géographique des Organ Mountains – des pics rocheux spectaculaires qui se dressent comme des tuyaux d'orgue contre le ciel du Nouveau-Mexique.

Aujourd'hui, Las Cruces est loin de son origine macabre. C'est une ville universitaire (New Mexico State University), un centre agricole (noix de pécan, piments), et surtout un hub spatial. À proximité se trouve White Sands Missile Range, où ont eu lieu les premiers essais de missiles américains après la Seconde Guerre mondiale, et le site d'Spaceport America, le premier port spatial commercial au monde.

Le drapeau porte le poids de l'histoire – les croix, le sang, la violence frontalière – mais la ville regarde vers le haut. Vers les étoiles, vers l'espace, vers un futur où "Las Cruces" ne signifie plus seulement les tombes du désert, mais peut-être les croisements de trajectoires spatiales.`,
    },

    // UTAH
    {
        stateCode: '49',
        citySlug: 'salt-lake-city',
        cityName: 'Salt Lake City',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Salt_Lake_City_%282020%29.svg/1200px-Flag_of_Salt_Lake_City_%282020%29.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1583327171323-45ded2c60c7d?w=1600&q=80',
        shortSummary: `Le Sego Flag – un lys blanc sur bleu et blanc, symbole de résilience et de renouveau.`,
        story: `En 2020, Salt Lake City a dévoilé un nouveau drapeau après un concours municipal qui a attiré des centaines de propositions. Le design gagnant, surnommé le "Sego Flag", présente deux bandes horizontales – bleue en haut, blanche en bas – avec un lys sego blanc dans le canton supérieur.

Le lys sego (Calochortus nuttallii) occupe une place spéciale dans l'histoire de l'Utah. En 1848, alors que les premiers colons mormons faisaient face à la famine après que des nuées de criquets aient dévoré leurs récoltes, ils ont survécu en mangeant les bulbes de cette fleur sauvage. Le lys sego est devenu la fleur d'État de l'Utah en 1911, symbole de survie et d'adaptation.

Les couleurs du drapeau évoquent le Grand Lac Salé (le bleu) et les sommets enneigés des Wasatch Mountains (le blanc). C'est un design épuré, moderne, loin du sceau municipal complexe qui ornait l'ancien drapeau depuis 1969.

Salt Lake City, capitale de l'Utah et siège mondial de l'Église de Jésus-Christ des saints des derniers jours, a choisi un drapeau qui parle d'héritage pionnier mais regarde vers l'avenir. En 2025, la ville a même ajouté des variantes officielles – le "Belonging Flag" et le "Celebration Flag" – montrant qu'un drapeau peut être vivant, évolutif, inclusif.`,
    },
    {
        stateCode: '49',
        citySlug: 'provo',
        cityName: 'Provo',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_Provo%2C_Utah_%282015%E2%80%93%29.svg/1200px-Flag_of_Provo%2C_Utah_%282015%E2%80%93%29.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?w=1600&q=80',
        shortSummary: `Du pire drapeau d'Amérique à un design épuré – l'histoire d'une rédemption vexillologique.`,
        story: `Provo détient un record peu enviable : son ancien drapeau (1989-2015) a été classé 143e sur 150 dans l'enquête NAVA de 2004, avec un score catastrophique de 2,14/10. Le coupable ? Un champ blanc pur avec le mot "Provo" en lettres noires sur une barre arc-en-ciel diagonale. Les vexillologues l'ont surnommé "Centerpoint Flag" en référence au centre commercial local.

En 2015, la ville a adopté un nouveau design lors du rebranding municipal : un champ bleu clair avec le logo de la ville au centre. Ce logo montre le lac Utah, les montagnes environnantes et un soleil levant – des éléments adoptés en 2012 qui évoquent l'identité géographique de Provo.

La ville, qui abrite l'Université Brigham Young et une population jeune et dynamique, a compris qu'un drapeau municipal n'est pas qu'un symbole administratif. C'est une identité visuelle qui peut inspirer fierté ou embarras. Le nouveau drapeau, bien que moins audacieux que celui de Denver, représente une amélioration radicale.

Provo est désormais citée comme exemple de réforme vexillologique réussie. Son message ? Il n'est jamais trop tard pour corriger une erreur de design. Un bon drapeau peut transformer la perception d'une ville, et Provo l'a prouvé en passant de la honte au respect en une seule refonte.`,
    },

    // WYOMING
    {
        stateCode: '56',
        citySlug: 'cheyenne',
        cityName: 'Cheyenne',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Cheyenne%2C_Wyoming.svg/1200px-Flag_of_Cheyenne%2C_Wyoming.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=1600&q=80',
        shortSummary: `Un champ blanc, une bordure brune, le sceau de la capitale de l'État le moins peuplé.`,
        story: `Le drapeau de Cheyenne présente un champ blanc encadré d'une bordure brune, avec le sceau municipal au centre : une skyline stylisée de la ville en bleu, un disque rouge représentant le soleil, et le slogan "Star of the Big Sky Country" (l'étoile du pays du grand ciel) en lettres rouges capitales.

Cheyenne a été fondée en 1867 lors de la construction du premier chemin de fer transcontinental. C'est une ville née du rail : Union Pacific a établi un dépôt ici, et en trois mois, une ville de tentes et de baraques a surgi dans les plaines. Le nom vient du peuple Cheyenne, tribu des Grandes Plaines qui vivait dans cette région avant l'arrivée des colons.

Le drapeau, adopté vers 1985, a été dessiné par Fernando Méndez, un immigrant philippin qui travaillait comme directeur artistique pour une agence de publicité locale. Méndez a remporté deux concours municipaux, battant 66 propositions concurrentes. C'est une histoire d'immigration et de contribution culturelle – un artiste venu d'Asie définissant l'identité visuelle d'une ville de l'Ouest américain.

Cheyenne est la capitale du Wyoming, l'État le moins peuplé des États-Unis (environ 580 000 habitants pour tout l'État). C'est aussi la ville du Cheyenne Frontier Days, le plus grand rodéo outdoor du monde, organisé depuis 1897. Le drapeau capture cette dualité : élégance formelle (c'est une capitale d'État) et héritage cowboy (c'est le Wyoming, après tout).`,
    },
    {
        stateCode: '56',
        citySlug: 'laramie',
        cityName: 'Laramie',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Flag_of_Laramie%2C_Wyoming.svg/1200px-Flag_of_Laramie%2C_Wyoming.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=1600&q=80',
        shortSummary: `Une ville universitaire dans les hautes plaines, entre les rails et les montagnes.`,
        story: `Laramie, fondée en 1868 comme ville ferroviaire sur la ligne Union Pacific, doit son nom à Jacques La Ramie, un trappeur franco-canadien tué par des Arapahos dans les années 1820. La ville est devenue un avant-poste crucial dans la conquête de l'Ouest : c'est ici que le premier jury entièrement féminin de l'histoire américaine a siégé en 1870, et où des femmes ont voté pour la première fois.

Le drapeau de Laramie présente les couleurs et symboles qui évoquent son identité de ville universitaire perchée à 2 200 mètres d'altitude. L'Université du Wyoming, fondée en 1886 avant même que le Wyoming ne devienne un État, domine la vie de la ville. C'est la seule université publique de l'État, un îlot intellectuel dans un océan de ranchs.

Les montagnes Snowy Range et Medicine Bow encadrent Laramie, offrant un paysage spectaculaire mais impitoyable. Les hivers sont longs, les vents constants, le climat rude. Pourtant, la ville a prospéré : centre ferroviaire, hub universitaire, refuge pour artistes et écrivains attirés par la beauté austère des hautes plaines.

Le drapeau de Laramie, avec ses lignes épurées et ses couleurs franches, reflète cette identité : une ville qui ne prétend pas être plus qu'elle n'est, mais qui est fière de ce qu'elle représente. Éducation, histoire pionnière, résilience face aux éléments. Laramie est petite, mais elle compte.`,
    },

    // LOT 6 - CÔTE PACIFIQUE

    // ALASKA
    {
        stateCode: '02',
        citySlug: 'anchorage',
        cityName: 'Anchorage',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Flag_of_Anchorage%2C_Alaska.svg/1200px-Flag_of_Anchorage%2C_Alaska.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1564868629992-af55ab8a0537?w=1600&q=80',
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
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Juneau%2C_Alaska.svg/1200px-Flag_of_Juneau%2C_Alaska.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1548181622-5c96f96ec308?w=1600&q=80',
        shortSummary: `Une étoile dorée sur bleu clair – capitale inaccessible par la route.`,
        story: `Le drapeau de Juneau présente un champ bleu clair avec un carré arrondi contenant une barre ondulée bleue, une étoile jaune dorée avec contour bleu, et les mots "JUNEAU" et "ALASKA'S CAPITAL CITY" en lettres majuscules.

Juneau est l'une des capitales d'État les plus bizarres d'Amérique : aucune route ne la relie au reste de l'Alaska continental. On y accède uniquement par avion ou ferry. C'est une capitale accessible seulement par voie maritime ou aérienne, nichée entre les montagnes et le fjord Gastineau Channel.

L'étoile dorée représente le statut de capitale de l'Alaska. Juneau est devenue capitale du territoire de l'Alaska en 1906, succédant à Sitka. Quand l'Alaska est devenu un État en 1959, Juneau est restée capitale malgré des tentatives répétées de déplacer la capitale vers Anchorage (plus peuplée) ou vers une nouvelle ville construite pour cet usage.

La barre ondulée bleue évoque l'océan Pacifique et le Inside Passage – le réseau de voies navigables protégées qui longe la côte de l'Alaska. Les montagnes vertes suggèrent le climat nordique et le terrain montagneux spectaculaire. Juneau est entourée par la forêt nationale de Tongass, la plus grande forêt nationale américaine. C'est une capitale qui ressemble plus à un village de pêcheurs qu'à un centre politique.`,
    },

    // CALIFORNIE
    {
        stateCode: '06',
        citySlug: 'san-francisco',
        cityName: 'San Francisco',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_San_Francisco.svg/1200px-Flag_of_San_Francisco.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1600&q=80',
        shortSummary: `Un phénix doré jaillit des flammes – "Or en paix, fer en guerre".`,
        story: `Le drapeau de San Francisco montre un phénix noir s'élevant de flammes dorées sur fond blanc, avec la devise espagnole "Oro en paz, fierro en guerra" (Or en paix, fer en guerre) inscrite sur un ruban noir. C'est l'un des drapeaux municipaux les plus symboliquement puissants d'Amérique.

Le phénix n'est pas un choix décoratif. San Francisco a littéralement brûlé et s'est relevée six fois entre 1849 et 1851 pendant la ruée vers l'or. Le grand tremblement de terre et incendie de 1906 a détruit 80% de la ville, tuant plus de 3 000 personnes. À chaque fois, San Francisco a reconstruit, plus grande, plus ambitieuse.

La devise capture la dualité de la ville : "or en paix" évoque la richesse de la ruée vers l'or qui a transformé un village de 200 habitants en métropole de 25 000 personnes en deux ans. "Fer en guerre" fait référence à la résilience militante nécessaire pour survivre aux incendies, tremblements de terre, crises économiques.

Le drapeau a été adopté en 1900, puis modifié en 1940. Aujourd'hui, San Francisco est l'épicentre technologique mondial, capitale de la contre-culture, ville sanctuaire pour immigrants. Le phénix continue de s'élever – des cendres victoriennes de 1906, des ruines du Dot-com bust de 2000, des défis perpétuels du logement et de l'inégalité. San Francisco ne meurt jamais. Elle se réinvente.`,
    },
    {
        stateCode: '06',
        citySlug: 'san-diego',
        cityName: 'San Diego',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_San_Diego%2C_California.svg/1200px-Flag_of_San_Diego%2C_California.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1591377823934-d433b0b5feb5?w=1600&q=80',
        shortSummary: `Trois bandes verticales – rouge, blanc, or – et le sceau "Semper Vigilans".`,
        story: `Le drapeau de San Diego, adopté en 1934, présente trois bandes verticales : rouge foncé à gauche, blanc au centre, or à droite. Le sceau municipal occupe la bande blanche centrale, arborant la devise latine "Semper Vigilans" (Toujours vigilant).

Ces couleurs ne sont pas aléatoires. Elles évoquent l'histoire stratifiée de San Diego : le rouge pour l'Espagne qui a établi la première mission californienne (Mission San Diego de Alcalá) en 1769, le blanc pour la paix et la pureté, l'or pour la Californie et la promesse de richesse qui a attiré les pionniers.

"Semper Vigilans" capture l'identité militaire profonde de San Diego. La ville abrite la plus grande concentration de personnel militaire et de vétérans des États-Unis : Naval Base San Diego, Marine Corps Air Station Miramar, Naval Air Station North Island. C'est le port d'attache de la flotte du Pacifique américaine.

Mais San Diego est aussi la ville frontalière ultime, séparée de Tijuana par une frontière qui est à la fois mur et membrane. Des millions de personnes la traversent chaque année. La devise "toujours vigilant" prend ici un double sens : vigilance militaire, vigilance frontalière. San Diego est une sentinelle – géographique, militaire, culturelle – au bord du Pacifique.`,
    },
    {
        stateCode: '06',
        citySlug: 'sacramento',
        cityName: 'Sacramento',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Sacramento%2C_California.svg/1200px-Flag_of_Sacramento%2C_California.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1591737376067-f4a1c1b56fab?w=1600&q=80',
        shortSummary: `Deux rivières bleues ondulent entre vert agricole et or minier – capitale cachée.`,
        story: `Le drapeau de Sacramento, adopté le 15 août 1989, présente deux nuances de bleu séparées par une ligne ondulée, avec deux demi-ovales – un vert en haut à droite, un jaune en bas à gauche. En bas, le texte "CITY OF SACRAMENTO" en police Century Gothic.

Les deux bleus représentent les deux rivières qui définissent Sacramento : le fleuve Sacramento et la rivière American, dont la confluence se trouve au cœur de la ville. C'est cette position fluviale stratégique qui a fait de Sacramento un hub commercial pendant la ruée vers l'or.

Le vert symbolise l'héritage agricole de la vallée centrale de Californie – Sacramento est entourée de terres parmi les plus fertiles du monde. Le jaune évoque les chercheurs d'or qui ont envahi la région en 1849 après la découverte d'or à Sutter's Mill, à 50 km au nord-est.

Sacramento est la capitale de la Californie depuis 1854, mais elle reste dans l'ombre de San Francisco, Los Angeles, San Diego. C'est une capitale paradoxalement discrète pour l'État le plus peuplé et économiquement puissant des États-Unis. Le drapeau capture cette identité humble : pas de sceaux grandioses, pas de symbolisme agressif. Juste des rivières, des champs, de l'or. Sacramento travaille pendant que les autres villes brillent.`,
    },
    {
        stateCode: '06',
        citySlug: 'oakland',
        cityName: 'Oakland',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Flag_of_Oakland%2C_California.svg/1200px-Flag_of_Oakland%2C_California.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1568373321664-86726ec4fbb3?w=1600&q=80',
        shortSummary: `Un chêne vert sur champ jaune canari – la ville qui refuse d'être la banlieue de San Francisco.`,
        story: `Le drapeau d'Oakland, adopté en avril 1952 pour le centenaire de la ville, présente un champ jaune canari avec un chêne vert stylisé au centre. Au-dessus de l'arbre, les lettres vertes "OAKLAND" forment une arche. En dessous : "1852".

Le nom "Oakland" vient littéralement des chênes (oak trees) qui couvraient les collines entourant la ville avant l'urbanisation. Ces arbres ont défini le paysage, fourni du bois de construction, offert de l'ombre dans le climat méditerranéen. Le drapeau est un hommage direct à cette identité botanique.

Mais Oakland est bien plus qu'un nom d'arbre. C'est la ville qui a accueilli les Black Panthers en 1966, qui a produit les Oakland Raiders et les Oakland Athletics, qui a vu naître le mouvement Occupy Wall Street en 2011. C'est une ville ouvrière, portuaire, rebelle, souvent éclipsée par sa voisine glamour de l'autre côté de la baie.

Le Port d'Oakland est l'un des plus grands ports à conteneurs des États-Unis. Les grues du port dominent le front de mer comme des géants mécaniques. Oakland fait le travail pendant que San Francisco fait les startups. Le drapeau – simple, vert, enraciné – capture cette identité : Oakland est l'arbre solide qui tient debout pendant que les autres villes dansent dans le vent.`,
    },

    // HAWAII
    {
        stateCode: '15',
        citySlug: 'honolulu',
        cityName: 'Honolulu',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Honolulu%2C_Hawaii.svg/1200px-Flag_of_Honolulu%2C_Hawaii.svg.png',
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
        heroImage: 'https://images.unsplash.com/photo-1590735213920-68192a487bc8?w=1600&q=80',
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
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Flag_of_Salem%2C_Oregon_2022.svg/1200px-Flag_of_Salem%2C_Oregon_2022.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1580982172454-865a7782bbc0?w=1600&q=80',
        shortSummary: `Une fleur de cerisier rose avec une étoile blanche – nouveau drapeau, nouvelle identité.`,
        story: `En 2022, Salem a adopté un nouveau drapeau qui rompt radicalement avec son ancien design bureaucratique. Sur un champ blanc avec une bande bleue verticale à gauche, une fleur de cerisier rose stylisée occupe le centre droit, avec une étoile blanche à cinq branches au cœur de ses pétales.

La fleur de cerisier n'est pas un cliché touristique. Salem abrite l'Université Willamette, dont le campus contient des cerisiers japonais offerts par le consul du Japon en 1935. Chaque printemps, la ville célèbre le Salem Cherry Blossom Festival. Les cerisiers sont devenus synonymes de l'identité locale.

Salem est la capitale de l'Oregon depuis 1859, mais comme Sacramento en Californie, elle vit dans l'ombre de sa grande sœur Portland. C'est une ville de fonctionnaires, d'étudiants, de fermes environnantes. La vallée de Willamette autour de Salem produit du houblon, du vin, des fruits – c'est l'arrière-pays agricole fertile qui nourrit Portland.

Le nouveau drapeau, adopté le 11 juillet 2022, reflète une tentative de modernisation identitaire. Salem veut être plus qu'une capitale administrative. Elle veut être reconnue pour sa beauté, sa culture japonaise, son héritage horticole. Le drapeau est une déclaration : Salem existe, Salem compte, Salem fleurit.`,
    },

    // WASHINGTON
    {
        stateCode: '53',
        citySlug: 'seattle',
        cityName: 'Seattle',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_Seattle.svg/1200px-Flag_of_Seattle.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1518779578985-fe9dd53c7e8c?w=1600&q=80',
        shortSummary: `Turquoise et blanc, le portrait du Chef Seattle – "City of Goodwill".`,
        story: `Le drapeau de Seattle, adopté le 16 juillet 1990 pour les Goodwill Games, présente un champ turquoise et blanc avec le logo municipal : un portrait du Chef Seattle entouré de deux lignes, avec les mots "City of Goodwill" au-dessus et "Seattle" en dessous.

La couleur turquoise/bleu-vert a été choisie pour évoquer "la couleur du Puget Sound au crépuscule" – cette mer intérieure qui définit Seattle géographiquement, économiquement, spirituellement. Seattle est une ville maritime, construite sur des collines entre le Puget Sound à l'ouest et le lac Washington à l'est.

Le Chef Seattle (Sealth) était le leader de la tribu Duwamish et Suquamish qui a accueilli les colons blancs dans les années 1850. La ville porte son nom – un hommage rare dans l'histoire coloniale américaine où les noms autochtones ont souvent été effacés. Mais c'est aussi un hommage compliqué : la tribu Duwamish n'a jamais reçu de reconnaissance fédérale.

Seattle est aujourd'hui le siège de Boeing, Microsoft, Amazon, Starbucks. C'est la ville du grunge (Nirvana, Pearl Jam), du café omniprésent, de la pluie constante. Le drapeau, dessiné par l'architecte David Wright, capture cette identité brumeuse, nordique, technologique. Seattle regarde vers le Pacifique, vers l'Alaska, vers l'Asie – pas vers le reste de l'Amérique.`,
    },
    {
        stateCode: '53',
        citySlug: 'spokane',
        cityName: 'Spokane',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Flag_of_Spokane%2C_Washington_%282021%E2%80%93present%29.svg/1200px-Flag_of_Spokane%2C_Washington_%282021%E2%80%93present%29.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=1600&q=80',
        shortSummary: `Un soleil jaune, une rivière bleue stylisée – sp̓q̓n̓iʔ, "enfants du soleil".`,
        story: `En 2021, Spokane a adopté un nouveau drapeau après 46 ans avec un design conventionnel. Le nouveau drapeau présente un champ blanc et vert séparé par une rivière bleue stylisée, avec un soleil jaune dans le canton supérieur gauche.

Le soleil n'est pas décoratif. "Spokane" vient du mot Salish "sp̓q̓n̓iʔ" qui signifie "peuple du soleil" ou "enfants du soleil". Le peuple Spokane vivait dans cette région des siècles avant l'arrivée des colons. Le nouveau drapeau rend hommage à cette origine linguistique autochtone.

La rivière bleue représente la Spokane River, qui traverse le cœur de la ville et alimente les célèbres Spokane Falls. Ces chutes ont fourni l'énergie hydroélectrique qui a transformé Spokane en hub industriel à la fin du XIXe siècle. Aujourd'hui, le Riverfront Park près des chutes est le joyau urbain de la ville.

Spokane est la deuxième ville de Washington après Seattle, mais séparée par les Cascade Mountains, elle appartient à un monde différent : l'est sec et ensoleillé de Washington plutôt que l'ouest brumeux et pluvieux. Le nouveau drapeau, adopté en 2021, reflète cette identité : Spokane n'est pas une petite Seattle. C'est la ville du soleil.`,
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
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Flag_of_Madison%2C_Wisconsin_%282018%E2%80%93present%29.svg/1200px-Flag_of_Madison%2C_Wisconsin_%282018%E2%80%93present%29.svg.png',
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
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Minneapolis.svg/1200px-Flag_of_Minneapolis.svg.png',
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
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Saint_Paul%2C_Minnesota.svg/1200px-Flag_of_Saint_Paul%2C_Minnesota.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?w=1600&q=80',
        shortSummary: `Triband jaune-bleu-jaune avec bouclier rouge – capitale du Minnesota.`,
        story: `Le drapeau de Saint Paul, conçu par l'étudiante en art Gladys Mittle et adopté le 22 novembre 1932, présente un triband horizontal jaune-bleu-jaune. La bande bleue centrale représente le fleuve Mississippi qui traverse la ville. Les bandes jaunes symbolisent un avenir brillant. Un bouclier rouge au premier plan montre divers aspects de l'industrie et de l'histoire de Saint Paul.

Le bouclier contient une étoile bleue à cinq branches représentant l'étoile du nord et l'allégeance de Saint Paul au Minnesota. Les symboles industriels évoquent le rôle de Saint Paul comme centre ferroviaire et manufacturier majeur au début du XXe siècle.

Saint Paul est la capitale du Minnesota et la plus ancienne des villes jumelles. Contrairement à Minneapolis la flashy, Saint Paul est plus calme, plus conservatrice, plus orientée vers le gouvernement. Le Capitole de l'État domine la skyline avec son dôme néoclassique blanc.

La ville a été nommée d'après une chapelle catholique dédiée à Saint Paul l'Apôtre, construite en 1841. Cette origine religieuse contraste avec Minneapolis, nommée d'après le mot Dakota pour "eau" (mni) combiné avec le grec "polis" (ville). Saint Paul européen, Minneapolis amérindien-grec. Les jumeaux ne se ressemblent pas.`,
    },
    {
        stateCode: '27',
        citySlug: 'duluth',
        cityName: 'Duluth',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Duluth%2C_Minnesota.svg/1200px-Flag_of_Duluth%2C_Minnesota.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Trois horizons de couleur avec étoile dorée à huit branches – port du lac Supérieur.`,
        story: `Le drapeau de Duluth, conçu par Blane Tetreault et adopté en 2020 (officiellement levé en 2021), présente trois sections horizontales : bleu clair en haut (moitié supérieure), vert foncé au milieu (un quart), bleu foncé en bas (dernier quart). Des lignes blanches ondulées séparent les sections, avec une étoile dorée à huit branches dans le ciel bleu au-dessus des deux premiers pics.

Les trois couleurs représentent le ciel, les forêts boréales, et le lac Supérieur. L'étoile à huit branches évoque l'étoile polaire et les huit tribus amérindiennes Ojibwe de la région. Les lignes blanches symbolisent les collines de Duluth – la ville est construite sur une pente abrupte descendant vers le lac.

Duluth est le port le plus à l'intérieur des terres accessibles aux navires océaniques via la Voie maritime du Saint-Laurent. C'est un port massif de minerai de fer, de grain, de charbon. Le Aerial Lift Bridge emblématique se lève pour laisser passer les énormes cargos qui entrent dans le port.

Le nouveau drapeau de Duluth a reçu une note A dans l'enquête NAVA de 2022 et figure parmi les 25 meilleurs drapeaux introduits depuis 2015. C'est un exemple parfait de renouveau vexillologique municipal – remplacer un vieux drapeau "seal-on-a-bedsheet" par un design moderne, symbolique, mémorable. Duluth montre la voie.`,
    },

    // MICHIGAN
    {
        stateCode: '26',
        citySlug: 'grand-rapids',
        cityName: 'Grand Rapids',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Grand_Rapids%2C_Michigan.svg/1200px-Flag_of_Grand_Rapids%2C_Michigan.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Logo jaune avec sculpture Calder sur bleu – "Furniture City".`,
        story: `Le drapeau officiel de Grand Rapids présente un tricolor vertical bleu-blanc-bleu avec le sceau de la ville au centre. Mais la ville utilise plus souvent sa "bannière municipale" : un champ bleu avec le logo de la ville en jaune. Ce logo montre une bande bleue ondulée représentant la rivière Grand, avec la figure iconique de la sculpture de Calder "La Grande Vitesse".

Cette sculpture d'Alexander Calder, installée en 1969, a transformé l'identité de Grand Rapids. C'était la première sculpture publique majeure financée par le National Endowment for the Arts. Haute de 13 mètres, rouge vif, abstraite, elle a choqué puis été adoptée. Aujourd'hui, c'est le symbole de la ville.

Grand Rapids était autrefois "Furniture City" – capitale américaine du meuble. Des dizaines de fabricants produisaient des meubles de qualité expédiés dans tout le pays. Cette industrie a décliné, mais l'héritage demeure. La ville abrite le Frederik Meijer Gardens & Sculpture Park, l'un des plus grands jardins de sculptures du monde.

Grand Rapids est aussi la ville d'origine de Gerald Ford, 38e président des États-Unis. C'est une ville conservatrice, néerlandaise réformée, travailleuse. Mais la sculpture Calder a introduit une modernité artistique qui contraste avec cette identité traditionnelle. Le drapeau capture cette tension : tradition bleue, art jaune.`,
    },
    {
        stateCode: '26',
        citySlug: 'flint',
        cityName: 'Flint',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Flint%2C_Michigan.svg/1200px-Flag_of_Flint%2C_Michigan.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Drapeau non officiel aux couleurs de General Motors – crise de l'eau toxique.`,
        story: `Le drapeau de Flint, conçu par l'ancien maire James Rutherford en 1975, est techniquement "non officiel" – la ville déclare ne pas avoir de drapeau officiel. Pourtant, ce drapeau existe et apparaît dans les archives vexillologiques. Il présente les couleurs bleu, rouge et blanc associées à l'identité industrielle de la ville.

Flint était "Vehicle City" – berceau de General Motors. En 1908, Billy Durant a fondé GM à Flint. La ville a explosé : des milliers d'emplois, des syndicats puissants, une classe ouvrière prospère. La grève des bras croisés de 1936-37 à Flint a changé l'histoire syndicale américaine, forçant GM à reconnaître l'United Auto Workers.

Puis est venu l'effondrement. Les usines ont fermé. GM est parti. La population a chuté de 200 000 à 80 000. Flint est devenue synonyme de déclin post-industriel. Le documentaire "Roger & Me" de Michael Moore (1989) a capturé cette agonie.

En 2014, la crise de l'eau de Flint a exposé la ville au monde : de l'eau potable contaminée au plomb empoisonnant des milliers de résidents, principalement noirs et pauvres. C'est devenu un symbole de racisme environnemental et de négligence gouvernementale. Le drapeau non officiel de Flint porte maintenant le poids de cette histoire tragique. Flint mérite mieux.`,
    },

    // OHIO
    {
        stateCode: '39',
        citySlug: 'cincinnati',
        cityName: 'Cincinnati',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Cincinnati%2C_Ohio.svg/1200px-Flag_of_Cincinnati%2C_Ohio.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Un grand "C" rouge avec feuille de buckeye – "La Reine de l'Ouest".`,
        story: `Le drapeau de Cincinnati, conçu par Emil Rothengatter (alias "Zero of Burnet Woods") et adopté le 24 janvier 1896, présente un grand "C" rouge sur champ blanc. Le C signifie Cincinnati, et une feuille rouge de buckeye (marronnier d'Ohio) repose au sommet de la lettre, symbolisant l'État de l'Ohio. Au centre du C se trouve le sceau de Cincinnati tel qu'il était en 1896.

Dans une enquête NAVA de 2004, le drapeau de Cincinnati a été classé 22e meilleur design parmi 150 drapeaux municipaux américains, et le meilleur drapeau municipal de l'Ohio. C'est un design simple, audacieux, mémorable – exactement ce qu'un bon drapeau devrait être.

Cincinnati était autrefois "La Reine de l'Ouest" – première grande ville américaine fondée après la Révolution, hub commercial majeur sur le fleuve Ohio. Au XIXe siècle, c'était la sixième ville la plus grande des États-Unis, célèbre pour ses chantiers navals, ses brasseries, et surtout, son industrie du porc (surnommée "Porkopolis").

Aujourd'hui, Cincinnati abrite Procter & Gamble, Kroger, Fifth Third Bank. C'est une ville conservatrice du Midwest avec une architecture allemande distinctive, un amour profond pour le chili (Cincinnati chili, un style unique avec épices et spaghettis), et l'équipe de baseball la plus ancienne professionnelle, les Cincinnati Reds, fondés en 1881.`,
    },
    {
        stateCode: '39',
        citySlug: 'toledo',
        cityName: 'Toledo',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Toledo%2C_Ohio_%282025%E2%80%93%29.svg/1200px-Flag_of_Toledo%2C_Ohio_%282025%E2%80%93%29.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Nouveau drapeau 2025 avec Fort Industry – "La ville en verre".`,
        story: `Le drapeau de Toledo, dévoilé le 8 janvier 2025 pour le 188e anniversaire de la ville, présente trois bandes horizontales (bleu, blanc, blanc) séparées par de fines bandes bleu clair. Un rayon de soleil stylisé occupe le coin supérieur gauche, et une version simplifiée de Fort Industry (le fort historique qui a précédé Toledo) se dresse au centre.

Le nouveau design, créé par le résident de Toledo Mark Yappueying, remplace un drapeau vieux de 31 ans. C'est un exemple de la vague récente de renouveau vexillologique municipal – des villes américaines qui abandonnent les vieux "seals-on-bedsheets" pour des designs modernes, symboliques.

Toledo est "La Ville en Verre" – capitale mondiale de la fabrication du verre au début du XXe siècle. Libbey Glass, Owens-Illinois, Owens Corning – ces géants du verre sont nés ici. Les innovations de Toledo (verre automatisé, fibre de verre) ont transformé l'industrie mondiale.

La ville est située à l'extrémité ouest du lac Érié, avec un port majeur et une position stratégique sur la voie maritime des Grands Lacs. Toledo a souffert pendant le déclin industriel du Rust Belt, mais conserve une identité fière. Le nouveau drapeau de 2025 symbolise cette résilience : Toledo se réinvente, encore une fois.`,
    },
    {
        stateCode: '39',
        citySlug: 'dayton',
        cityName: 'Dayton',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Dayton%2C_Ohio.svg/1200px-Flag_of_Dayton%2C_Ohio.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Rayures blanches comme ailes du Wright Flyer – berceau de l'aviation.`,
        story: `Le drapeau de Dayton, adopté le 15 décembre 2021 et créé par l'agence Catapult Creative, présente un design moderne avec des rayures blanches évoquant les ailes du Wright Flyer. Trois sections colorées divisent le drapeau : vert pour la terre, bleu foncé pour les cours d'eau de Dayton, bleu clair pour le ciel.

Les rayures blanches ne sont pas décoratives. Elles rendent hommage aux frères Wright – Wilbur et Orville Wright, qui ont vécu, travaillé et expérimenté à Dayton. Leur magasin de vélos était à Dayton. Leur atelier était à Dayton. Ils ont construit le premier avion motorisé fonctionnel dans cette ville.

Bien qu'ils aient volé pour la première fois à Kitty Hawk, Caroline du Nord (1903), Dayton revendique le titre de "Berceau de l'Aviation". Huffman Prairie, juste à l'extérieur de Dayton, est l'endroit où les Wright ont perfectionné leur avion et effectué plus de 100 vols en 1904-1905. C'est là que l'aviation pratique est vraiment née.

Dayton abrite aujourd'hui Wright-Patterson Air Force Base, l'une des plus grandes bases de l'Air Force. Le National Museum of the United States Air Force se trouve ici, avec plus de 360 avions exposés. Le drapeau de 2021 capture cette identité : Dayton est la ville où l'humanité a appris à voler.`,
    },

    // INDIANA
    {
        stateCode: '18',
        citySlug: 'fort-wayne',
        cityName: 'Fort Wayne',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_Fort_Wayne%2C_Indiana.svg/1200px-Flag_of_Fort_Wayne%2C_Indiana.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Design "pall" avec trois rivières convergeant – carrefour de l'Indiana.`,
        story: `Le drapeau de Fort Wayne, adopté par le conseil municipal le 26 juin 1934, utilise un design "pall" (pairle en héraldique) : deux bandes blanches diagonales partent des coins gauches et convergent au centre circulaire pour former une bande blanche horizontale. Ce design symbolise les trois rivières qui se rencontrent à Fort Wayne : la St. Joseph, la St. Marys, et la Maumee.

Cette confluence de rivières a fait de Fort Wayne un point stratégique crucial pour le commerce amérindien et colonial. Le fort original a été construit en 1794 et nommé d'après le général "Mad" Anthony Wayne, qui a défait les tribus amérindiennes de la région lors de la bataille de Fallen Timbers (1794).

Fort Wayne est la deuxième ville de l'Indiana après Indianapolis. C'est un centre manufacturier majeur – équipements électriques, pièces automobiles, produits pharmaceutiques. La ville abrite trois universités et un orchestre symphonique réputé.

Le design du drapeau est géométriquement élégant et symboliquement clair – les trois rivières convergent, tout comme les routes commerciales, les chemins de fer, les influences culturelles ont convergé à Fort Wayne. C'est une ville de carrefours, et son drapeau capture cette identité avec précision mathématique.`,
    },
    {
        stateCode: '18',
        citySlug: 'south-bend',
        cityName: 'South Bend',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_South_Bend%2C_Indiana.svg/1200px-Flag_of_South_Bend%2C_Indiana.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Étoile rouge à six pointes sur rivière bleue – ville de Pete Buttigieg.`,
        story: `Le drapeau de South Bend, adopté par le conseil municipal le 25 avril 2016 sous le maire Pete Buttigieg, présente un champ blanc et jaune séparé par deux lignes bleues courbes avec une ligne blanche entre elles. Une étoile rouge à six pointes occupe le canton supérieur gauche.

L'étoile à six pointes représente les six districts du conseil municipal de la ville. Les lignes bleues et blanches évoquent la rivière St. Joseph, qui fait un coude sud prononcé à cet endroit – d'où le nom "South Bend" (coude sud). Le jaune symbolise un avenir brillant.

South Bend était autrefois la "ville de Studebaker" – siège de la Studebaker Corporation, fabricant majeur d'automobiles américaines. L'usine Studebaker employait 23 000 personnes à son apogée. Quand l'entreprise a fermé en 1963, South Bend a perdu son identité économique.

La ville a connu une renaissance sous Pete Buttigieg, qui est devenu maire à 29 ans en 2012. En tant que premier maire ouvertement gay d'une ville moyenne de l'Indiana, puis candidat présidentiel en 2020, Buttigieg a mis South Bend sous les projecteurs nationaux. Le nouveau drapeau de 2016 reflète cette ère de renouveau urbain.`,
    },

    // ILLINOIS
    {
        stateCode: '17',
        citySlug: 'rockford',
        cityName: 'Rockford',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Rockford%2C_Illinois.svg/1200px-Flag_of_Rockford%2C_Illinois.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Champ vert émeraude avec sceau – "Forest City".`,
        story: `Le drapeau de Rockford, conçu par Dora H. Bloom et adopté en 1952 pour le centenaire de l'incorporation de la ville, présente un champ vert émeraude avec une frange dorée. Les mots "Forest City" apparaissent en arc au-dessus, "Rockford, Illinois" en arc en dessous, et le sceau municipal occupe le centre.

"Forest City" capture l'identité de Rockford. La région était densément boisée avant le développement urbain, et la ville a conservé une fierté pour ses espaces verts. Le vert émeraude du drapeau n'est pas subtil – c'est une déclaration botanique audacieuse.

Rockford est la troisième ville de l'Illinois après Chicago et Aurora. Au début du XXe siècle, c'était un centre manufacturier majeur – meubles, machines-outils, fixations. Rockford a produit plus de chaussettes que toute autre ville américaine, gagnant le surnom "Sock Capital of the World".

Comme beaucoup de villes du Midwest industriel, Rockford a souffert pendant la désindustrialisation. Les usines ont fermé, les emplois ont disparu, la population a stagné. Mais le drapeau vert continue de flotter, rappelant une époque où Rockford construisait l'Amérique, un produit usiné à la fois.`,
    },
    {
        stateCode: '17',
        citySlug: 'peoria',
        cityName: 'Peoria',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Peoria%2C_Illinois.svg/1200px-Flag_of_Peoria%2C_Illinois.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Logo municipal sur blanc – "Will it play in Peoria?".`,
        story: `Le drapeau de Peoria présente un champ blanc avec le logo de la ville, accompagné des mots "CITY OF" en bleu à côté, et "PEORIA" en dessous. C'est un design minimaliste, presque corporatif, reflétant l'identité commerciale de la ville.

Peoria est célèbre pour une phrase : "Will it play in Peoria?" (Est-ce que ça marchera à Peoria?). Cette expression vient du monde du vaudeville – les artistes testaient leurs spectacles à Peoria avant d'aller à New York. Si ça marchait à Peoria, ville moyenne du Midwest, ça marcherait partout.

Cette réputation de "ville américaine typique" a persisté. Les entreprises testent leurs produits à Peoria. Les politiciens testent leurs messages à Peoria. Peoria est le baromètre culturel de l'Amérique moyenne.

La ville est le siège de Caterpillar Inc., géant mondial des équipements de construction et d'exploitation minière. Les bulldozers jaunes Caterpillar sont reconnaissables partout dans le monde. Cette présence industrielle massive définit l'économie de Peoria.

Le drapeau simple, avec son logo d'entreprise, capture cette identité : Peoria est pratique, commerciale, terre-à-terre. Pas de symbolisme grandiose, pas de mythologie historique. Juste un logo sur fond blanc. Est-ce que ça joue à Peoria? Absolument.`,
    },

    // IOWA
    {
        stateCode: '19',
        citySlug: 'des-moines',
        cityName: 'Des Moines',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_Des_Moines%2C_Iowa.svg/1200px-Flag_of_Des_Moines%2C_Iowa.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Trois ponts blancs sur bleu avec bande rouge – capitale de l'Iowa.`,
        story: `Le drapeau de Des Moines, conçu par Walter T. Proctor et adopté le 15 avril 1974, présente un champ bleu avec une bande verticale rouge le long du guindant qui s'incline vers l'intérieur. Trois "ponts" blancs horizontaux traversent le drapeau, représentant les ponts Walnut, Locust Street et Grand Avenue qui enjambent la rivière Des Moines.

Les ponts ne sont pas des détails architecturaux aléatoires. Ils symbolisent la connexion – Des Moines est une ville construite sur les deux rives d'une rivière, et les ponts ont été essentiels à son développement urbain. Le design capture cette géographie bifurquée.

Des Moines est la capitale et la plus grande ville de l'Iowa. C'est aussi le cœur de l'industrie américaine de l'assurance – Principal Financial Group, Nationwide, Allied Insurance ont tous des opérations majeures ici. Des Moines est discrètement devenue un centre financier majeur du Midwest.

Politiquement, Des Moines est célèbre pour les caucus de l'Iowa – le premier vote du cycle présidentiel américain. Tous les quatre ans, le monde entier regarde Des Moines pour les premiers signes de qui deviendra président. Le drapeau ne montre pas cette importance politique, juste trois ponts simples. Mais ces ponts portent le poids symbolique d'une ville carrefour.`,
    },
    {
        stateCode: '19',
        citySlug: 'cedar-rapids',
        cityName: 'Cedar Rapids',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_Cedar_Rapids%2C_Iowa.svg/1200px-Flag_of_Cedar_Rapids%2C_Iowa.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Arc vert et bleu, étoile – "Ville des Cinq Saisons".`,
        story: `Le drapeau de Cedar Rapids, adopté le 8 septembre 2021, présente un design moderne avec une section bleue représentant la rivière Cedar, une section verte symbolisant les espaces verts de la ville, un arc représentant le progrès et le mur anti-inondation, et une étoile représentant les structures historiques de Mays Island avec ses cinq branches évoquant la "Ville des Cinq Saisons".

Cedar Rapids se surnomme "City of Five Seasons" – les quatre saisons normales plus une cinquième saison pour "profiter des quatre autres". C'est un concept marketing devenu identité civique, avec une sculpture d'arbre et de figure humaine intitulée "Five Seasons" au centre-ville.

La ville est le centre de traitement des céréales de l'Iowa – silos massifs, usines de transformation, siège de Quaker Oats (maintenant partie de PepsiCo). Cedar Rapids transforme le maïs et le soja de l'Iowa en produits alimentaires mondiaux.

En 2008, une inondation catastrophe a submergé le centre-ville de Cedar Rapids, causant des dégâts de 10 milliards de dollars. Le mur anti-inondation représenté dans le nouveau drapeau est une réponse directe à cette catastrophe. Cedar Rapids s'est reconstruite, et le drapeau de 2021 symbolise cette résilience. L'arc ascendant n'est pas juste décoratif – c'est une promesse.`,
    },

    // LOT 1 - NORD-EST

    // NEW YORK
    {
        stateCode: '36',
        citySlug: 'buffalo',
        cityName: 'Buffalo',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Flag_of_Buffalo%2C_New_York.svg/1200px-Flag_of_Buffalo%2C_New_York.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau municipal avec 13 éclairs électriques – la ville des tempêtes de neige.`,
        story: `Le drapeau de Buffalo, conçu par l'architecte Louis Greenstein et adopté le 7 mai 1924, présente un champ bleu marine avec un grand emblème central : le sceau municipal entouré de 13 "éclairs électriques" (représentés comme des éclairs) et d'étoiles blanches à cinq branches espacées entre eux.

Les 13 éclairs symbolisent les 13 colonies originales, mais ils ont aussi une signification locale : Buffalo a été l'une des premières villes américaines à s'éclairer à l'électricité, grâce aux chutes du Niagara situées à 30 km. En 1896, Buffalo a été la première ville du monde à avoir un réseau électrique complet alimenté par l'hydroélectricité. Les éclairs ne sont pas décoratifs – ils proclament cette révolution énergétique.

Buffalo était autrefois la huitième ville la plus grande d'Amérique, un géant industriel et port majeur sur le lac Érié. La construction du canal Érié en 1825 a transformé Buffalo en terminal ouest crucial, reliant les Grands Lacs à New York City. Les céréales du Midwest transitaient par Buffalo. Les aciéries rugissaient. La population a culminé à 580 000 en 1950.

Puis est venu l'effondrement. La voie maritime du Saint-Laurent a contourné Buffalo. Les aciéries ont fermé. La population a chuté de moitié. Buffalo est devenue synonyme de déclin post-industriel et de tempêtes de neige légendaires. Mais les éclairs du drapeau rappellent une époque où Buffalo illuminait le monde.`,
    },
    {
        stateCode: '36',
        citySlug: 'rochester',
        cityName: 'Rochester',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flag_of_Rochester%2C_New_York.svg/1200px-Flag_of_Rochester%2C_New_York.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Tricolor bleu-blanc-jaune avec armoiries Rochester – "Flour City" devenue "Imaging Capital".`,
        story: `Le drapeau de Rochester, adopté comme drapeau officiel de la ville en 1934, présente trois bandes verticales d'égale largeur : bleu fédéral près de la hampe, blanc au centre, jaune doré à l'extrémité. Au centre de la bande blanche figure les armoiries de la famille Rochester de 1558, avec le mot "Rochester" inscrit en arc vers le bas.

Les armoiries montrent une grue au-dessus de trois croissants – symboles héraldiques de la famille anglaise Rochester, dont la ville tire son nom. Le colonel Nathaniel Rochester a fondé la ville en 1817 sur les rives de la rivière Genesee, dont les chutes ont fourni l'énergie hydraulique pour transformer Rochester en centre manufacturier.

Au XIXe siècle, Rochester était "Flour City" – capitale mondiale de la meunerie de farine. Les moulins à eau le long de la Genesee transformaient le blé du Midwest en farine expédiée dans le monde entier. Puis la photographie est arrivée. George Eastman a fondé Kodak à Rochester en 1892, transformant la ville en "Image City". Kodak a employé jusqu'à 60 000 personnes localement.

La faillite de Kodak en 2012 a frappé Rochester comme un tremblement de terre économique. Mais la ville se réinvente : optique de précision, technologies médicales, universités de recherche. Le drapeau tricolore simple reste, avec ses armoiries médiévales anglaises flottant au-dessus d'une ville américaine qui refuse de mourir.`,
    },
    {
        stateCode: '36',
        citySlug: 'syracuse',
        cityName: 'Syracuse',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Syracuse%2C_New_York.svg/1200px-Flag_of_Syracuse%2C_New_York.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `"First Light" avec étoile à six pointes – nouveau drapeau 2023, Six Nations Haudenosaunee.`,
        story: `Le drapeau de Syracuse, appelé "First Light" et conçu par Eric Hart, a été officiellement adopté par le conseil municipal de Syracuse en juin 2023, remplaçant l'ancien drapeau de 1915. Il présente quatre couleurs : orange, blanc, bleu azur et bleu marine, avec une géométrie moderne et symbolique.

L'étoile à six pointes au centre symbolise les Six Nations de la Confédération Haudenosaunee (Iroquois) – Mohawk, Oneida, Onondaga, Cayuga, Seneca, Tuscarora – dont le territoire traditionnel inclut Syracuse. Les six branches représentent aussi les six noms historiques de la ville. La position centrale de l'étoile évoque le statut de Syracuse comme "Centre géographique de l'État de New York".

Les triangles miroirs symbolisent les collines d'Onondaga. Le chevron (forme en V) représente le chiffre romain V pour les cinq districts du conseil municipal, ainsi que le symbole international de la paix et de l'amitié – un clin d'œil au rôle historique de Syracuse comme site du Grand Conseil de la Confédération Iroquoise.

Syracuse était "Salt City" au XIXe siècle – la production de sel a dominé l'économie locale pendant 150 ans. Aujourd'hui, c'est une ville universitaire (Syracuse University) et un hub de technologies. Le nouveau drapeau de 2023, moderne et respectueux des racines autochtones, marque une réinvention identitaire post-industrielle.`,
    },
    {
        stateCode: '36',
        citySlug: 'albany',
        cityName: 'Albany',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flag_of_Albany%2C_New_York.svg/1200px-Flag_of_Albany%2C_New_York.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Tricolor orange-blanc-bleu néerlandais avec armoiries de 1789 – capitale de l'État de New York.`,
        story: `Le drapeau d'Albany, conçu en 1909 pour le tricentenaire de la découverte du fleuve Hudson par Henry Hudson, mais adopté officiellement seulement en 1912, présente un tricolore orange-blanc-bleu avec les armoiries d'Albany (dessinées en 1789) sur la bande orange.

Les couleurs sont celles du Prince's Flag (Prinsenvlag) utilisé par la Compagnie néerlandaise des Indes orientales (VOC) pour laquelle Hudson naviguait en 1609. Albany s'appelait Fort Orange sous domination néerlandaise (1624-1664), et ce drapeau rend hommage à ces racines hollandaises profondes.

Albany est la capitale de l'État de New York depuis 1797, bien qu'elle soit éclipsée en taille et en influence par New York City. C'est une capitale politique inhabituelle : petite (100 000 habitants), ancienne, coincée entre les montagnes et le fleuve Hudson. Le Capitole de l'État, achevé en 1899 après 32 ans de construction, est l'un des plus chers jamais construits.

Dans l'enquête NAVA de 2004, le drapeau d'Albany a reçu une note de 5,2/10, se classant 34e parmi 150 drapeaux municipaux américains. C'est un bon design – historiquement significatif, symboliquement clair, visuellement distinctif. Albany honore ses racines néerlandaises tout en servant comme cœur politique de l'État le plus puissant d'Amérique.`,
    },
    {
        stateCode: '36',
        citySlug: 'yonkers',
        cityName: 'Yonkers',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Yonkers%2C_New_York.svg/1200px-Flag_of_Yonkers%2C_New_York.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau avec buste de George Washington sur blanc – quatrième ville de l'État de New York.`,
        story: `Le drapeau de Yonkers présente un champ blanc avec le sceau municipal en bleu au centre. Le sceau montre un buste de George Washington regardant vers la droite, avec un drapeau américain enroulé en dessous.

Washington n'est pas un choix aléatoire. Yonkers a joué un rôle crucial pendant la Révolution américaine. Les troupes de Washington ont campé à Yonkers en 1776. La bataille de White Plains (1776) s'est déroulée juste au nord. Le sceau rend hommage à cette histoire révolutionnaire.

Yonkers est la quatrième ville la plus grande de l'État de New York après NYC, Buffalo et Rochester. Située immédiatement au nord de New York City le long du fleuve Hudson, Yonkers est techniquement une banlieue mais se considère comme une ville à part entière. Population : 211 000 habitants.

Le nom "Yonkers" vient du néerlandais "Jonkheer" (jeune seigneur), titre de noblesse d'Adriaen van der Donck, propriétaire terrien néerlandais du XVIIe siècle. Yonkers était un centre manufacturier majeur – tapis, ascenseurs Otis, automobiles. L'usine Otis Elevator employait des milliers de personnes jusqu'à sa fermeture en 1983.

Le drapeau blanc simple avec Washington en médaillon capture l'identité de Yonkers : historique, révolutionnaire, fière mais éclipsée par sa gigantesque voisine du sud.`,
    },

    // CONNECTICUT
    {
        stateCode: '09',
        citySlug: 'hartford',
        cityName: 'Hartford',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Flag_of_Hartford%2C_Connecticut.svg/1200px-Flag_of_Hartford%2C_Connecticut.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Disque blanc avec sceau sur bleu – "Insurance Capital of the World".`,
        story: `Le drapeau de Hartford, adopté le 12 septembre 1983, présente un champ bleu avec un disque blanc (version modifiée du sceau municipal) au centre, entouré d'un large anneau bleu portant les mots "CITY OF HARTFORD" en haut et "CONNECTICUT" en bas, séparés par deux étoiles à cinq branches, le tout en blanc.

Le sceau montre le Grand Chêne de Hartford (Hartford Charter Oak), symbole légendaire de l'indépendance du Connecticut. En 1687, selon la tradition, les colons ont caché la charte royale du Connecticut dans le creux de ce chêne pour la protéger du gouverneur anglais qui voulait la révoquer. L'arbre est devenu symbole de résistance à la tyrannie.

Hartford est la capitale du Connecticut et, plus surprenant, la "Capitale mondiale de l'assurance". Aetna, Travelers, The Hartford, Hartford Steam Boiler – les géants de l'assurance américaine sont nés ici. Cette concentration d'entreprises d'assurance remonte au XIXe siècle, quand les compagnies d'assurance maritime se sont diversifiées vers l'assurance incendie et vie.

Hartford était aussi un centre de fabrication d'armes : Colt's Manufacturing Company, fondée en 1855, produisait les revolvers Colt légendaires. Samuel Colt a transformé Hartford en arsenal américain. Aujourd'hui, les tours d'assurance dominent la skyline, et le drapeau bleu et blanc simple flotte au-dessus d'une capitale qui assure l'Amérique.`,
    },
    {
        stateCode: '09',
        citySlug: 'stamford',
        cityName: 'Stamford',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Flag_of_Stamford%2C_Connecticut.svg/1200px-Flag_of_Stamford%2C_Connecticut.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Armoiries municipales sur blanc – banlieue aisée de NYC devenue centre d'affaires.`,
        story: `Le drapeau de Stamford présente un champ blanc avec les armoiries municipales centrées. Le blanc est l'une des couleurs de l'Armée continentale pendant la Révolution américaine, ancrant l'identité de Stamford dans l'histoire révolutionnaire.

Les armoiries montrent un bouclier divisé avec divers symboles : un moulin à eau (industrie historique), une cloche (patrimoine religieux), et d'autres éléments représentant l'évolution de Stamford de village colonial à métropole moderne.

Stamford est la deuxième ville la plus grande du Connecticut après Bridgeport, avec 135 000 habitants. Située à seulement 38 miles de Manhattan, Stamford est devenue un centre d'affaires majeur et une alternative moins chère à NYC pour les sièges sociaux. NBC Sports, Charter Communications, Synchrony Financial – des dizaines de Fortune 500 ont des bureaux à Stamford.

Cette transformation a commencé dans les années 1960 quand des entreprises ont fui les impôts élevés de New York City pour le Connecticut. Stamford a construit des tours de bureaux, développé un centre-ville moderne, attiré des talents. C'est maintenant une "edge city" – banlieue devenue centre urbain.

Le drapeau blanc simple avec armoiries coloniales capture ce paradoxe : Stamford honore ses racines du XVIIe siècle tout en servant comme avant-poste du capitalisme du XXIe siècle.`,
    },

    // RHODE ISLAND
    {
        stateCode: '44',
        citySlug: 'providence',
        cityName: 'Providence',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Flag_of_Providence%2C_Rhode_Island.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau montrant Roger Williams sur bleu foncé – fondée 1636, liberté religieuse.`,
        story: `Le drapeau de Providence, adopté en 1915, présente un champ bleu foncé avec le sceau municipal au centre. Le sceau montre l'arrivée de Roger Williams à Providence, sur un bouclier entouré d'un cercle de corde, avec "SEAL OF THE CITY OF PROVIDENCE" en haut et "FOUNDED 1636" au-dessus de "INCORPORATED 1832" en bas.

Roger Williams n'est pas une figure historique mineure. Banni de la colonie de Massachusetts Bay en 1636 pour ses opinions religieuses radicales (séparation de l'Église et de l'État, liberté de conscience), il a fondé Providence comme refuge pour la liberté religieuse. C'était révolutionnaire : aucune religion d'État, aucune persecution religieuse.

Providence signifie "la providence de Dieu" – Williams croyait que Dieu l'avait guidé vers ce lieu sûr. La ville est devenue le berceau du Rhode Island, le plus petit État américain mais aussi l'un des plus importants pour la liberté religieuse.

Aujourd'hui, Providence est la capitale du Rhode Island et un hub d'éducation (Brown University, Rhode Island School of Design) et de culture. Le centre-ville historique préserve des bâtiments coloniaux côtoyant des tours modernes. Le sceau de Roger Williams sur le drapeau rappelle que Providence a été fondée sur un principe radical : la liberté de croyance.`,
    },

    // MASSACHUSETTS
    {
        stateCode: '25',
        citySlug: 'worcester',
        cityName: 'Worcester',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Flag_of_Worcester%2C_Massachusetts.svg/1200px-Flag_of_Worcester%2C_Massachusetts.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Cœur rouge sur disque blanc, couronne verte sur champ vert – "Heart of the Commonwealth".`,
        story: `Le drapeau de Worcester centre le sceau municipal sur un champ vert. Le sceau contient un disque blanc avec un cœur rouge encerclé par une couronne verte, et sur un anneau blanc extérieur figure "WORCESTER" en haut, et "A TOWN JUNE 14, 1722, A CITY FEB. 29, 1848" en bas, le tout en or.

Le cœur n'est pas sentimental. Worcester se proclame "Heart of the Commonwealth" – le cœur du Massachusetts. Géographiquement, Worcester est au centre de l'État. Historiquement, c'est la deuxième ville la plus grande du Massachusetts après Boston, et elle a toujours résisté à l'ombre de Boston.

Worcester était un géant industriel : machines-outils, textile, fils barbelés, enveloppes. L'American Steel & Wire Company employait des milliers. Worcester a produit les premières machines à tricoter, les premiers métiers à tisser mécaniques américains. La désindustrialisation a frappé dur.

Mais Worcester se réinvente : biotechnologie, recherche médicale, universités (WPI, Clark, Holy Cross). La population est jeune, diversifiée, immigrante. Le cœur vert du drapeau bat encore, pompant vie dans une ville qui refuse d'être définie uniquement par son passé industriel.`,
    },
    {
        stateCode: '25',
        citySlug: 'springfield',
        cityName: 'Springfield',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Springfield%2C_Massachusetts.svg/1200px-Flag_of_Springfield%2C_Massachusetts.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Statue du Diacre Chapin sur bouclier blanc, champ bleu bordé d'or – berceau du basketball.`,
        story: `Le drapeau de Springfield, adopté en 1923, présente un champ bleu intérieur bordé d'or et placé sur un champ blanc extérieur. Au centre se trouve un bouclier blanc bordé d'or avec un parchemin arqué au-dessus portant l'inscription "Springfield" en or, et sur le sceau figure une représentation en or de la statue St. Gaudens du Diacre Samuel Chapin.

Le Diacre Samuel Chapin était l'un des fondateurs de Springfield en 1636. La statue d'Augustus Saint-Gaudens (1887) le montre marchant avec un bâton et une Bible – symbole du puritanisme pionnier de la Nouvelle-Angleterre. Cette statue est devenue l'icône de Springfield.

Mais Springfield est surtout célèbre pour une invention : le basketball. En 1891, James Naismith, professeur d'éducation physique au YMCA International Training School de Springfield, a inventé le basketball comme activité hivernale en salle. Le Basketball Hall of Fame se trouve à Springfield – pèlerinage pour fans du monde entier.

Springfield était aussi un centre d'armurerie : le Springfield Armory (1794-1968) a produit des millions d'armes pour l'armée américaine, des mousquets de la guerre de 1812 aux fusils M1 Garand de la Seconde Guerre mondiale. Le drapeau montre un diacre puritain, mais Springfield a forgé des armes pendant deux siècles.`,
    },

    // VERMONT
    {
        stateCode: '50',
        citySlug: 'burlington',
        cityName: 'Burlington',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Flag_of_Burlington%2C_Vermont.svg/1200px-Flag_of_Burlington%2C_Vermont.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Cinq bandes en zigzag bleu-blanc-vert – nouveau drapeau 2017, conçu par des jumeaux de 7e année.`,
        story: `Le drapeau de Burlington, adopté par le conseil municipal le 27 novembre 2017, présente cinq bandes horizontales en zigzag : bleu, blanc, vert, blanc, bleu. Ce design simple mais mémorable a été créé par des jumeaux de septième année, Owen et Lucas Marchessault, et levé pour la première fois lors des célébrations du Nouvel An 2017.

Le design a une symbolique claire : la bande bleue du haut représente le ciel, l'histoire de Burlington et l'espoir pour l'avenir. La ligne blanche symbolise les montagnes enneigées. La bande verte évoque le surnom du Vermont "Green Mountain State" et l'engagement de la ville pour la protection environnementale.

Burlington est la ville la plus grande du Vermont avec seulement 44 000 habitants – c'est le plus petit État en population après le Wyoming. Située sur les rives du lac Champlain avec vue sur les Adirondacks de New York, Burlington est une ville universitaire progressiste (Université du Vermont), célèbre pour sa scène musicale (Phish est né ici) et sa politique de gauche.

Bernie Sanders a été maire de Burlington de 1981 à 1989 avant de devenir sénateur et candidat présidentiel. La ville a une identité socialiste assumée, rare en Amérique. Le nouveau drapeau de 2017, conçu par des enfants, capture l'esprit démocratique et accessible de Burlington.`,
    },

    // NEW HAMPSHIRE
    {
        stateCode: '33',
        citySlug: 'manchester',
        cityName: 'Manchester',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Manchester%2C_New_Hampshire_flag.png',
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
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Flag_of_Harrisburg%2C_Pennsylvania.svg/1200px-Flag_of_Harrisburg%2C_Pennsylvania.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Keystone blanc avec dôme du Capitole sur bleu bordé d'or – capitale de la Pennsylvanie.`,
        story: `Le drapeau de Harrisburg présente un champ bleu avec une bordure jaune et l'emblème municipal centré. L'emblème consiste en un keystone blanc (pierre de voûte) avec une bordure rouge, incorporant le dôme du Capitole qui dénote l'importance de la ville comme capitale de l'État du Commonwealth de Pennsylvanie.

Le keystone n'est pas un symbole aléatoire. La Pennsylvanie se surnomme "Keystone State" – l'État pierre de voûte. Géographiquement, la Pennsylvanie était au centre des 13 colonies originales. Historiquement, elle a joué un rôle pivot dans la fondation de la nation. Le keystone sur le drapeau de Harrisburg proclame ce statut central.

Harrisburg est resté des années sans drapeau jusqu'à son invitation à l'Exposition du tricentenaire de Jamestown en 1907. Le maire Edward Z. Gross a proposé un concours de design. Le drapeau actuel a été légèrement mis à jour en 1991 mais maintient le design original.

Harrisburg est une petite capitale (50 000 habitants) dominée par le gouvernement d'État. Le Capitole de Pennsylvanie, achevé en 1906, est un chef-d'œuvre Beaux-Arts avec un dôme inspiré de Saint-Pierre de Rome. Teddy Roosevelt l'a appelé "le plus beau bâtiment de capitole que j'ai jamais vu". Le drapeau capture cette fierté architecturale et politique.`,
    },

    // NEW JERSEY
    {
        stateCode: '34',
        citySlug: 'trenton',
        cityName: 'Trenton',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Trenton%2C_New_Jersey.svg/1200px-Flag_of_Trenton%2C_New_Jersey.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Divisé bleu et or avec sceau – "Trenton Makes, The World Takes".`,
        story: `Le drapeau de Trenton est divisé en deux moitiés : bleue à la hampe et or à l'extrémité, avec le sceau municipal en or au centre. Le sceau a un champ blanc bordé d'un anneau bleu orné, avec un bouclier bleu contenant trois gerbes de blé (2 au-dessus de 1) en chamois au centre.

Depuis 1909, le bleu et l'or sont les couleurs officielles de la ville, tandis que le chamois (buff) est une couleur traditionnelle du New Jersey depuis les années 1700 – couleur des uniformes de l'Armée continentale du New Jersey pendant la Révolution.

Trenton est la capitale du New Jersey et un site crucial de l'histoire révolutionnaire américaine. La bataille de Trenton (26 décembre 1776) a été un tournant : Washington a traversé le fleuve Delaware gelé et attaqué les Hessiens à l'aube, remportant une victoire critique qui a ravivé la cause patriote.

Mais l'identité de Trenton est industrielle. Le pont qui traverse le Delaware porte le slogan légendaire : "TRENTON MAKES, THE WORLD TAKES" (Trenton fabrique, le monde prend). Céramique, fil de fer, caoutchouc, câbles – Trenton produisait tout. L'industrie a décliné, mais le slogan demeure, et le drapeau bicolore simple proclame l'histoire révolutionnaire et industrielle de la capitale.`,
    },
    {
        stateCode: '34',
        citySlug: 'jersey-city',
        cityName: 'Jersey City',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Jersey_City%2C_New_Jersey.svg/1200px-Flag_of_Jersey_City%2C_New_Jersey.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Tricolor bleu-blanc-jaune néerlandais avec sceau – "Let Jersey Prosper".`,
        story: `Le drapeau de Jersey City, adopté le 19 juillet 1938, est un tricolor vertical bleu-blanc-jaune avec le sceau municipal au centre. Les trois bandes commémorent les couleurs néerlandaises, car Jersey City était située dans la province de Nouvelle-Néerlande (New Netherlands).

Le sceau montre le Half Moon de Hudson (le navire avec lequel Henry Hudson a exploré la baie de New York en 1609) et d'autres vaisseaux modernes, symbolisant la continuité maritime de Jersey City de l'époque coloniale à nos jours. La devise officielle, affichée sur le sceau et le drapeau, est "Let Jersey Prosper" (Que Jersey prospère).

Jersey City est la deuxième ville la plus grande du New Jersey après Newark, avec 292 000 habitants. Située directement en face de Manhattan de l'autre côté du fleuve Hudson, Jersey City est devenue une alternative moins chère à New York City pour les résidents et les entreprises.

Le waterfront de Jersey City a été transformé : d'anciennes usines et terminaux de ferry sont devenus des tours résidentielles de luxe et des bureaux d'entreprises financières. La vue depuis Jersey City sur la skyline de Manhattan est iconique. Le tricolor néerlandais du drapeau rappelle que cette terre a été colonisée avant que New York ne devienne New York.`,
    },

    // LOT 2 - SUD

    // TEXAS
    {
        stateCode: '48',
        citySlug: 'san-antonio',
        cityName: 'San Antonio',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_San_Antonio%2C_Texas.svg/1200px-Flag_of_San_Antonio%2C_Texas.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1572480572387-97c3fe6b0b42?w=1600&q=80',
        shortSummary: `Alamo avec étoile texane sur bleu et rouge – "Remember the Alamo!".`,
        story: `Le drapeau de San Antonio présente un champ divisé horizontalement : rouge en haut, bleu en bas. Au centre se trouve le symbole de l'Alamo surmonté d'une étoile blanche à cinq branches, le tout en blanc.

L'Alamo n'est pas qu'un monument touristique. C'est le sanctuaire de l'identité texane. En mars 1836, 189 défenseurs texans (dont Davy Crockett et Jim Bowie) ont tenu l'Alamo pendant 13 jours contre 1 500 soldats mexicains du général Santa Anna. Tous sont morts. "Remember the Alamo!" est devenu le cri de ralliement de l'indépendance texane.

San Antonio est la septième ville la plus grande des États-Unis avec 1,5 million d'habitants. C'est la ville la plus mexicaine-américaine du pays : 64% de la population est hispanique. Le River Walk – promenade le long de la rivière San Antonio – est l'une des attractions touristiques les plus visitées du Texas.

San Antonio était un avant-poste colonial espagnol fondé en 1718. Les missions espagnoles (dont l'Alamo, initialement Mission San Antonio de Valero) ont été classées au patrimoine mondial de l'UNESCO. C'est une ville qui vit entre deux mondes : américain et mexicain, moderne et colonial, militaire (cinq bases militaires majeures) et touristique.

Le drapeau simple – Alamo et étoile – capture tout : sacrifice, indépendance, fierté texane.`,
    },
    {
        stateCode: '48',
        citySlug: 'austin',
        cityName: 'Austin',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Austin%2C_Texas.svg/1200px-Flag_of_Austin%2C_Texas.svg.png',
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
        citySlug: 'el-paso',
        cityName: 'El Paso',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_El_Paso%2C_Texas.svg/1200px-Flag_of_El_Paso%2C_Texas.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1600&q=80',
        shortSummary: `Sceau avec mission sur blanc – ville frontalière jumelle avec Ciudad Juárez.`,
        story: `Le drapeau d'El Paso présente un champ blanc avec le sceau municipal en couleur au centre. Le sceau montre les montagnes Franklin à l'arrière-plan, une mission espagnole coloniale, et la rivière Rio Grande qui traverse – symbolisant la position frontalière unique d'El Paso.

El Paso signifie "le passage" en espagnol. La ville se trouve au point où le Rio Grande coupe à travers les montagnes, créant un passage naturel entre le Mexique et ce qui est maintenant les États-Unis. Ce passage a été utilisé pendant des millénaires par les peuples autochtones, puis par les conquistadors espagnols.

El Paso (population 678 000) et sa ville jumelle Ciudad Juárez au Mexique (1,5 million) forment la plus grande zone métropolitaine binationale d'Amérique du Nord. Le pont international relie les deux villes. Des millions de personnes et de milliards de dollars de marchandises traversent chaque année.

Cette intimité frontalière crée une culture unique : 82% de la population d'El Paso est hispanique, et beaucoup ont de la famille des deux côtés de la frontière. L'espagnol et l'anglais se mélangent naturellement. La cuisine, la musique, l'identité sont mexicaines-américaines dans un sens profond.

Le drapeau blanc avec la mission espagnole rappelle que la frontière est une construction récente. Ces terres étaient mexicaines jusqu'en 1848.`,
    },

    // FLORIDE
    {
        stateCode: '12',
        citySlug: 'jacksonville',
        cityName: 'Jacksonville',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Jacksonville%2C_Florida.svg/1200px-Flag_of_Jacksonville%2C_Florida.svg.png',
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
        citySlug: 'tampa',
        cityName: 'Tampa',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Tampa%2C_Florida.svg/1200px-Flag_of_Tampa%2C_Florida.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1596178060671-7a8f0ee4c1ca?w=1600&q=80',
        shortSummary: `Sceau avec navire de Gasparilla sur blanc – pirates, cigares et Super Bowl.`,
        story: `Le drapeau de Tampa présente un champ blanc avec le sceau municipal en couleur au centre. Le sceau montre un navire pirate stylisé traversant un anneau bleu portant "CITY OF TAMPA" en haut et "FLORIDA" en bas, avec "1855" (année d'incorporation) au centre.

Le navire pirate n'est pas une blague. Tampa célèbre chaque année le Gasparilla Pirate Festival, l'une des plus grandes fêtes de Floride. Des centaines de milliers de personnes regardent des "pirates" envahir la ville depuis un navire de 50 mètres. C'est basé sur la légende (probablement fictive) de José Gaspar, pirate qui aurait terrorisé les côtes de Floride au début du XIXe siècle.

Tampa est la troisième ville la plus grande de Floride avec 400 000 habitants (3,2 millions dans la zone métropolitaine). Située sur la baie de Tampa le long du golfe du Mexique, c'est un port majeur et centre économique.

L'histoire de Tampa est celle des cigares. Ybor City, quartier historique de Tampa, était le centre mondial de fabrication de cigares au début du XXe siècle. Des milliers d'immigrants cubains, espagnols, italiens roulaient des cigares à la main. Les usines employaient 12 000 personnes. Aujourd'hui, Ybor City est un quartier historique préservé.

Tampa accueille aussi le Super Bowl régulièrement – Raymond James Stadium a accueilli cinq Super Bowls. Le drapeau avec son navire pirate capture l'esprit festif et un peu chaotique de Tampa.`,
    },
    {
        stateCode: '12',
        citySlug: 'orlando',
        cityName: 'Orlando',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Flag_of_Orlando%2C_Florida.svg/1200px-Flag_of_Orlando%2C_Florida.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=1600&q=80',
        shortSummary: `Fontaine "O" stylisée sur blanc et bleu – capitale mondiale du tourisme thématique.`,
        story: `Le drapeau d'Orlando, adopté en 1980, présente un champ bleu en bas et blanc en haut, avec au centre un "O" stylisé représentant la fontaine Linton E. Allen Memorial au Lake Eola, emblème iconique du centre-ville d'Orlando.

Orlando n'existait pratiquement pas avant Disney. En 1970, c'était une ville de 100 000 habitants connue pour les oranges. Puis Walt Disney World a ouvert en 1971, et tout a changé. Aujourd'hui, Orlando est la capitale mondiale incontestée du tourisme thématique.

Walt Disney World (Magic Kingdom, Epcot, Hollywood Studios, Animal Kingdom), Universal Studios (avec le Wizarding World of Harry Potter), SeaWorld, des dizaines d'autres parcs – Orlando accueille 75 millions de visiteurs par an, plus que toute autre ville américaine. L'industrie touristique emploie directement 230 000 personnes.

La ville elle-même compte 308 000 habitants, mais la zone métropolitaine atteint 2,7 millions. Orlando a une des croissances démographiques les plus rapides du pays. Mais c'est une croissance étrange : une ville construite pour les visiteurs, pas pour les résidents.

Le centre-ville – représenté par le lac Eola et sa fontaine sur le drapeau – essaie d'affirmer une identité civique réelle au-delà des parcs à thème. Mais pour le monde entier, Orlando signifie Mickey Mouse, châteaux de princesses et montagnes russes.`,
    },

    // GÉORGIE
    {
        stateCode: '13',
        citySlug: 'columbus',
        cityName: 'Columbus',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Columbus%2C_Georgia.svg/1200px-Flag_of_Columbus%2C_Georgia.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1566064352972-7e3d3c5ab23c?w=1600&q=80',
        shortSummary: `Sceau avec voilier et roue dentée sur blanc – "Southern Manufacturing Center".`,
        story: `Le drapeau de Columbus présente un champ blanc avec le sceau municipal en bleu au centre. Le sceau montre un voilier (symbolisant le commerce fluvial sur la rivière Chattahoochee) et une roue dentée (symbolisant l'industrie manufacturière), avec "CITY OF COLUMBUS" en arc et "GEORGIA" en dessous.

Columbus est la deuxième ville la plus grande de Géorgie après Atlanta, avec 206 000 habitants. Fondée en 1828 sur les rives de la Chattahoochee, la ville était stratégiquement placée au point le plus au sud navigable de la rivière – d'où le voilier sur le drapeau.

L'industrie textile a dominé Columbus pendant un siècle. Les usines de coton bordaient la rivière, utilisant l'énergie hydraulique puis l'électricité pour transformer le coton brut en tissu. Columbus était un centre manufacturier majeur du Sud.

Mais l'identité actuelle de Columbus est militaire. Fort Benning (rebaptisé Fort Moore en 2023), l'une des plus grandes bases militaires américaines, borde la ville. Fort Benning forme tous les fantassins de l'armée américaine – 120 000 soldats par an passent par l'entraînement de base. L'impact économique est massif.

Columbus a aussi joué un rôle dans l'histoire de la musique : c'est la ville natale de Ma Rainey, "Mother of the Blues". Le drapeau blanc sobre avec voilier et engrenage ne montre rien de cette richesse culturelle – juste commerce et industrie.`,
    },
    {
        stateCode: '13',
        citySlug: 'augusta',
        cityName: 'Augusta',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Flag_of_Augusta%2C_Georgia.svg/1200px-Flag_of_Augusta%2C_Georgia.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600&q=80',
        shortSummary: `Sceau avec buste de James Oglethorpe sur blanc – "Garden City of the South".`,
        story: `Le drapeau d'Augusta présente un champ blanc avec le sceau municipal en couleur au centre. Le sceau montre le buste de James Oglethorpe, fondateur de la colonie de Géorgie, entouré d'un anneau portant "AUGUSTA GEORGIA" en haut et la devise "SECOND OLDEST CITY" en bas.

Augusta a été fondée en 1736 par Oglethorpe comme poste de traite avec les Amérindiens Creek et Cherokee. C'est la deuxième ville la plus ancienne de Géorgie après Savannah. Le nom honore la princesse Augusta de Saxe-Gotha, épouse de Frederick, Prince de Galles.

Augusta est surtout célèbre pour une chose : le Masters Tournament, l'un des quatre tournois majeurs de golf professionnel. Chaque avril, le monde du golf se concentre sur l'Augusta National Golf Club et son parcours légendaire. Les vestes vertes, les azalées en fleur, Amen Corner – le Masters est le golf américain à son apogée.

Mais Augusta a une histoire plus sombre. Pendant la Guerre de Sécession, Augusta était un centre de production de poudre à canon confédéré. L'Augusta Powder Works produisait 7 000 livres de poudre par jour. Après la guerre, Augusta est devenue un centre textile majeur du "New South".

Population actuelle : 202 000 habitants. Le surnom "Garden City of the South" vient des larges boulevards bordés d'arbres plantés au XIXe siècle. Le drapeau blanc sobre avec Oglethorpe regarde en arrière vers les origines coloniales, ignorant Masters et poudre à canon.`,
    },
    {
        stateCode: '13',
        citySlug: 'savannah',
        cityName: 'Savannah',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Savannah%2C_Georgia.svg/1200px-Flag_of_Savannah%2C_Georgia.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1567878259772-c7e97d394c49?w=1600&q=80',
        shortSummary: `Croix bleue sur blanc avec sceau central – la "Hostess City of the South".`,
        story: `Le drapeau de Savannah, adopté en 1913, présente une croix bleue (croix de Saint-Georges) sur champ blanc, avec le sceau municipal en couleur au centre. Le sceau montre un navire en mer, symbolisant le port historique de Savannah.

Savannah a été la première ville de Géorgie, fondée par James Oglethorpe en 1733. Le plan urbain original d'Oglethorpe – un quadrillage de rues entourant 24 "squares" (places publiques arborées) – reste largement intact aujourd'hui. C'est l'un des plus beaux exemples de planification urbaine coloniale en Amérique.

Savannah était le port d'exportation de coton le plus important du Sud avant la Guerre de Sécession. Des millions de balles de coton transitaient par les quais de Savannah vers l'Europe. Cette richesse a construit les magnifiques maisons antebellum qui font de Savannah une destination touristique majeure.

Pendant la Marche vers la Mer du général Sherman (1864), Savannah s'est rendue sans combat. Sherman a télégraphié au président Lincoln : "Je vous offre en cadeau de Noël la ville de Savannah." Cette reddition pacifique a sauvé l'architecture historique de la destruction.

Aujourd'hui, Savannah (population 147 000) vit du tourisme, du port (l'un des plus actifs de la côte Est), et de sa réputation comme "Hostess City of the South" – hospitalière, hantée, magnifiquement préservée. Le drapeau avec sa croix bleue et son navire capture cette identité maritime et coloniale.`,
    },

    // CAROLINE DU NORD
    {
        stateCode: '37',
        citySlug: 'charlotte',
        cityName: 'Charlotte',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Charlotte%2C_North_Carolina.svg/1200px-Flag_of_Charlotte%2C_North_Carolina.svg.png',
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
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Flag_of_Raleigh%2C_North_Carolina.svg/1200px-Flag_of_Raleigh%2C_North_Carolina.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1600&q=80',
        shortSummary: `Chêne et étoile sur rouge et blanc – capitale NC, cœur du Research Triangle.`,
        story: `Le drapeau de Raleigh, adopté en 1967, présente une bande rouge horizontale en haut (occupant 60% du drapeau) et une bande blanche en bas. Au centre se trouve le sceau municipal en couleur : un chêne vert avec une étoile blanche à cinq branches en haut à gauche.

Le chêne symbolise la force et l'endurance. L'étoile représente l'espoir et l'orientation. Ensemble, ils capturent l'identité de Raleigh comme capitale de la Caroline du Nord (depuis 1792) et centre du Research Triangle Park.

Le Research Triangle – formé par Raleigh, Durham et Chapel Hill – est l'un des plus grands parcs de recherche scientifique au monde. Créé en 1959, le Research Triangle Park accueille plus de 300 entreprises technologiques et de recherche : IBM, Cisco, RTI International, GlaxoSmithKline. C'est le cerveau de la Caroline du Nord.

Raleigh elle-même a une population de 474 000 habitants, mais la zone métropolitaine atteint 1,4 million. La croissance est explosive : la population a triplé depuis 1980. L'économie du savoir attire des jeunes éduqués, créant une ville progressiste dans un État traditionnel.

Raleigh est nommée d'après Sir Walter Raleigh, qui a parrainé les premières tentatives de colonisation anglaise en Caroline du Nord (la "Lost Colony" de Roanoke). Le drapeau rouge et blanc avec son chêne solide projette stabilité et croissance – une capitale qui regarde vers l'avenir.`,
    },
    {
        stateCode: '37',
        citySlug: 'greensboro',
        cityName: 'Greensboro',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Greensboro%2C_North_Carolina.svg/1200px-Flag_of_Greensboro%2C_North_Carolina.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1600&q=80',
        shortSummary: `"G" stylisé vert et bleu – site du sit-in de 1960, berceau du mouvement des droits civiques.`,
        story: `Le drapeau de Greensboro, adopté en 1989, présente un "G" stylisé composé de formes géométriques vertes et bleues sur fond blanc. Le design moderne symbolise la croissance et l'innovation.

Mais l'identité de Greensboro est définie par un moment : le 1er février 1960, quatre étudiants noirs du North Carolina A&T State University – Ezell Blair Jr., David Richmond, Franklin McCain, et Joseph McNeil – se sont assis au comptoir "whites only" du Woolworth's de Greensboro et ont demandé à être servis.

On leur a refusé le service. Ils sont restés assis jusqu'à la fermeture. Le lendemain, 20 étudiants sont revenus. Puis 60. Puis 300. Le sit-in de Greensboro a déclenché une vague de protestations non-violentes dans tout le Sud, devenant un moment catalyseur du Mouvement des droits civiques.

Greensboro est la troisième ville la plus grande de Caroline du Nord avec 300 000 habitants. Historiquement, c'était un centre textile et du tabac. Les usines de textile employaient des dizaines de milliers. La désindustrialisation a frappé fort, mais Greensboro s'est réinventé autour de l'éducation, de la logistique, et de la technologie.

Le comptoir Woolworth's original est maintenant le International Civil Rights Center & Museum. Le drapeau moderne avec son "G" abstrait ne montre rien de cette histoire cruciale – mais chaque citoyen de Greensboro la connaît.`,
    },

    // TENNESSEE
    {
        stateCode: '47',
        citySlug: 'memphis',
        cityName: 'Memphis',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Memphis%2C_Tennessee.svg/1200px-Flag_of_Memphis%2C_Memphis.svg.png',
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
        citySlug: 'new-orleans',
        cityName: 'New Orleans',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_New_Orleans%2C_Louisiana.svg/1200px-Flag_of_New_Orleans%2C_Louisiana.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1583878528578-cbcf07cf41e6?w=1600&q=80',
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
    {
        stateCode: '40',
        citySlug: 'tulsa',
        cityName: 'Tulsa',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Tulsa%2C_Oklahoma.svg/1200px-Flag_of_Tulsa%2C_Oklahoma.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau avec derrick pétrolier sur blanc – "Oil Capital of the World", massacre racial de 1921.`,
        story: `Le drapeau de Tulsa présente un champ blanc avec le sceau municipal en couleur au centre. Le sceau montre un derrick pétrolier dominant le paysage, symbolisant l'identité de Tulsa comme ancienne "Oil Capital of the World".

Tulsa s'est transformée du jour au lendemain quand le pétrole a été découvert en 1901. Des derricks ont jailli partout. Des fortunes colossales se sont créées en quelques années. Dans les années 1920, Tulsa avait plus de millionnaires par habitant que toute autre ville américaine. L'Art Deco a explosé – le paysage urbain de Tulsa est rempli de gratte-ciels Art Deco spectaculaires.

Mais Tulsa porte une cicatrice honteuse : le massacre racial de Tulsa de 1921. Greenwood, surnommé "Black Wall Street", était le quartier noir le plus prospère d'Amérique. Le 31 mai 1921, une foule blanche a attaqué Greenwood, brûlant 35 blocs, tuant jusqu'à 300 personnes, détruisant 1 256 maisons. Des avions ont largué des bombes incendiaires sur des civils – la première fois dans l'histoire américaine.

Pendant des décennies, Tulsa a enterré cette histoire. Aucun manuel scolaire ne la mentionnait. Aucune commémoration. Le silence était total. Ce n'est que récemment que Tulsa a commencé à affronter son passé, avec des fouilles de fosses communes et des monuments commémoratifs.

Population actuelle : 413 000 habitants. L'économie du pétrole a décliné, remplacée par l'aérospatiale, la finance, la technologie. Le drapeau avec son derrick pétrolier rappelle la richesse qui a construit Tulsa – mais cache les cendres de Greenwood.`,
    },

    // ARKANSAS
    {
        stateCode: '05',
        citySlug: 'little-rock',
        cityName: 'Little Rock',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Little_Rock%2C_Arkansas.svg/1200px-Flag_of_Little_Rock%2C_Arkansas.svg.png',
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
        citySlug: 'wichita',
        cityName: 'Wichita',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Wichita%2C_Kansas.svg/1200px-Flag_of_Wichita%2C_Kansas.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Soleil stylisé sur blanc – "Air Capital of the World", Boeing, Cessna, Beechcraft.`,
        story: `Le drapeau de Wichita, adopté en 1937, présente un champ blanc avec un soleil stylisé au centre. Le soleil a des rayons géométriques qui évoquent à la fois les rayons du soleil des Grandes Plaines et les hélices d'avions – référence subtile à l'identité aéronautique de Wichita.

Wichita se proclame "Air Capital of the World" – la capitale mondiale de l'aviation. Ce n'est pas une exagération. Cessna, Beechcraft, Learjet, Spirit AeroSystems (qui fabrique des fuselages pour Boeing) – tous ont des usines majeures à Wichita. Plus d'avions ont été construits ici que partout ailleurs sur Terre.

Cette concentration a commencé dans les années 1920 quand plusieurs pionniers de l'aviation se sont installés à Wichita. Clyde Cessna a fondé Cessna Aircraft Company en 1927. Walter Beech a créé Beechcraft en 1932. Pendant la Seconde Guerre mondiale, Wichita produisait des bombardiers B-29 Superfortress en masse.

Aujourd'hui, l'aviation représente toujours l'économie de Wichita, mais la consolidation de l'industrie a frappé dur. Boeing a fermé son usine locale en 2014. Des milliers d'emplois perdus. Wichita cherche à se diversifier vers la santé, la technologie, l'agriculture.

Population : 397 000 habitants, la plus grande ville du Kansas. Wichita était aussi une ville de cow-boys au XIXe siècle – terminus de la Chisholm Trail où des millions de têtes de bétail arrivaient du Texas. Wyatt Earp était marshal adjoint ici avant Tombstone.

Le drapeau blanc avec soleil stylisé capture l'optimisme des Grandes Plaines – mais les rayons ressemblent aussi à des hélices tournant vers un avenir incertain.`,
    },
    {
        stateCode: '20',
        citySlug: 'kansas-city-ks',
        cityName: 'Kansas City',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Flag_of_Kansas_City%2C_Kansas.svg/1200px-Flag_of_Kansas_City%2C_Kansas.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau sur blanc – la "petite" Kansas City, éclipsée par sa jumelle du Missouri.`,
        story: `Le drapeau de Kansas City, Kansas présente un champ blanc avec le sceau municipal au centre. Le sceau montre divers symboles de l'histoire industrielle et agricole de la ville.

Kansas City, Kansas vit dans l'ombre permanente de sa ville jumelle : Kansas City, Missouri, située de l'autre côté de la State Line Road. La plupart des gens ne savent même pas qu'il y a DEUX Kansas Cities. Quand quelqu'un dit "Kansas City", ils parlent presque toujours de celle du Missouri – plus grande, plus célèbre, plus riche.

C'est une situation bizarre. Les deux villes partagent une zone métropolitaine, mais sont dans des États différents, ont des gouvernements séparés, des identités distinctes. Kansas City KS (population 156 000) est plus petite, plus industrielle, plus ouvrière que sa grande sœur (495 000 habitants).

Kansas City KS est née comme ville de stockage de bétail et de transformation de viande. Les stockyards employaient des dizaines de milliers. L'odeur des abattoirs dominait. L'immigration slave et mexicaine a construit la ville – des quartiers entiers parlaient polonais, tchèque, espagnol.

Aujourd'hui, Kansas City KS abrite le Kansas Speedway (NASCAR), le Legends shopping district, et l'Université du Kansas Medical Center. Mais elle reste éclipsée. Même le Kansas City Chiefs (équipe NFL) et les Kansas City Royals (baseball) jouent du côté Missouri.

Le drapeau blanc simple avec sceau industriel reflète cette identité modeste – une ville qui travaille dur dans l'ombre de sa jumelle flamboyante.`,
    },

    // MISSOURI
    {
        stateCode: '29',
        citySlug: 'kansas-city-mo',
        cityName: 'Kansas City',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Kansas_City%2C_Missouri.svg/1200px-Flag_of_Kansas_City%2C_Missouri.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1519430044529-a48d96659a48?w=1600&q=80',
        shortSummary: `Cœur rouge sur blanc et bleu – jazz, barbecue, fontaines, la "vraie" Kansas City.`,
        story: `Le drapeau de Kansas City, Missouri présente un champ divisé horizontalement : blanc en haut, bleu en bas, avec un grand cœur rouge au centre contenant le sceau municipal. Le cœur symbolise la position de Kansas City comme "Heart of America" – le cœur de l'Amérique.

C'est LA Kansas City – celle avec le jazz, le barbecue, les fontaines. Kansas City est la ville des fontaines : plus de 200 fontaines publiques, plus que Rome. La plus célèbre, la J.C. Nichols Memorial Fountain, est un chef-d'œuvre néoclassique avec chevaux de bronze jaillissant de l'eau.

Le jazz de Kansas City a une histoire légendaire. Dans les années 1920-30, sous la machine politique corrompue du patron Tom Pendergast, Kansas City était grande ouverte : alcool, jeux, jazz toute la nuit. Charlie Parker est né ici. Count Basie a dirigé son orchestre depuis Kansas City. Le Kansas City jazz – blues, swing, improvisation – a influencé tout le jazz américain.

Le barbecue de Kansas City est une religion. Burnt ends, ribs, sauce tomate sucrée et épaisse. Arthur Bryant's, Joe's Kansas City, Gates Bar-B-Q – les temples du barbecue. Anthony Bourdain a appelé Arthur Bryant's "le meilleur restaurant du monde".

Kansas City est aussi un hub de transport majeur : chemins de fer, autoroutes, rivières (Missouri et Kansas se rejoignent ici). Hallmark Cards a son siège ici. Population : 495 000 (2,2 millions dans la zone métropolitaine).

Le drapeau avec son cœur rouge capture l'identité de Kansas City : passionnée, centrale, battant au rythme du jazz et du barbecue.`,
    },
    {
        stateCode: '29',
        citySlug: 'st-louis',
        cityName: 'St. Louis',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_St._Louis%2C_Missouri.svg/1200px-Flag_of_St._Louis%2C_Missouri.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1568607689150-17e625c1586e?w=1600&q=80',
        shortSummary: `Fleur de lys et vagues rouge-bleu-jaune – Gateway Arch, bière Budweiser, déclin post-industriel.`,
        story: `Le drapeau de St. Louis, adopté en 1964, présente quatre bandes ondulantes verticales : rouge, blanche, bleue, jaune. Au centre se trouve une grande fleur de lys dorée – symbole de la France et du roi Louis IX, saint patron de la ville.

Les vagues symbolisent la confluence : St. Louis se trouve au point où la rivière Missouri rejoint le Mississippi, créant l'un des systèmes fluviaux les plus puissants du monde. Cette position a fait de St. Louis la "Gateway to the West" – la porte vers l'Ouest.

Le Gateway Arch, monument iconique de St. Louis (192 mètres, le plus haut monument des États-Unis), symbolise ce rôle. Conçu par Eero Saarinen et achevé en 1965, l'arche en acier inoxydable domine la skyline comme une porte d'argent géante.

St. Louis était autrefois la quatrième ville la plus grande d'Amérique (1900). Centre de la bière (Anheuser-Busch/Budweiser est basé ici), de la fabrication d'avions (McDonnell Douglas, maintenant Boeing), de la transformation alimentaire. L'Exposition universelle de 1904 a présenté St. Louis au monde.

Puis est venu l'effondrement. La population a chuté de 856 000 (1950) à 301 000 aujourd'hui – une perte catastrophique de 65%. La ségrégation, la fuite blanche, la désindustrialisation ont vidé la ville. St. Louis a maintenant l'un des taux de criminalité les plus élevés d'Amérique.

Le drapeau avec ses vagues colorées et sa fleur de lys dorée rappelle la gloire passée – mais ne montre rien de la lutte actuelle pour la renaissance.`,
    },

    // KENTUCKY
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
    {
        stateCode: '21',
        citySlug: 'lexington',
        cityName: 'Lexington',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Lexington%2C_Kentucky.svg/1200px-Flag_of_Lexington%2C_Kentucky.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau avec cheval sur blanc – "Horse Capital of the World", bluegrass, élevage pur-sang.`,
        story: `Le drapeau de Lexington présente un champ blanc avec le sceau municipal en couleur au centre. Le sceau montre un cheval de course – impossible d'échapper à l'identité équestre de Lexington.

Lexington se proclame "Horse Capital of the World" – la capitale mondiale du cheval. Ce n'est pas du marketing vide. Keeneland Race Course accueille des ventes de pur-sang où des chevaux se vendent pour des millions. Les fermes d'élevage entourent Lexington : clôtures blanches serpentant à travers des prairies vertes parfaites.

Le Bluegrass – l'herbe bleu-vert du Kentucky – est parfait pour élever des chevaux. Le calcaire dans le sol donne de l'eau riche en minéraux qui renforce les os des chevaux. Des dynasties équestres se sont construites ici. Secretariat, Seattle Slew, American Pharoah – des champions du Triple Crown ont des racines à Lexington.

Mais Lexington a une autre identité : bourbon et tabac. Les distilleries parsèment le paysage. Les granges à tabac (bien que l'industrie ait décliné) marquent encore les routes de campagne. L'Université du Kentucky domine la ville avec son programme de basketball légendaire.

Population : 323 000 habitants, la deuxième ville la plus grande du Kentucky après Louisville. Lexington était aussi un centre de commerce d'esclaves avant la Guerre de Sécession – le Cheapside slave auction block a été récemment reconnu avec un monument commémoratif.

Le drapeau blanc avec cheval capture l'élégance et la richesse – mais cache les fondations plus sombres sur lesquelles cette beauté a été construite.`,
    },

    // ALABAMA
    {
        stateCode: '01',
        citySlug: 'birmingham',
        cityName: 'Birmingham',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_Birmingham%2C_Alabama.svg/1200px-Flag_of_Birmingham%2C_Alabama.svg.png',
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
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Montgomery%2C_Alabama.svg/1200px-Flag_of_Montgomery%2C_Alabama.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau sur blanc – "Cradle of the Confederacy" et berceau du Mouvement des droits civiques.`,
        story: `Le drapeau de Montgomery présente un champ blanc avec le sceau municipal au centre. Montgomery porte deux titres contradictoires : "Cradle of the Confederacy" (Berceau de la Confédération) et berceau du Mouvement des droits civiques américain.

Montgomery était la première capitale des États confédérés d'Amérique en 1861. Jefferson Davis a prêté serment comme président confédéré sur les marches du Capitole de l'Alabama. La "Stars and Bars" confédérée a été levée ici pour la première fois. Montgomery a embrassé cette identité pendant plus d'un siècle.

Puis Rosa Parks a refusé de céder son siège dans un bus à un passager blanc le 1er décembre 1955. Son arrestation a déclenché le Montgomery Bus Boycott – 381 jours pendant lesquels les Noirs ont refusé d'utiliser les bus ségrégués. Martin Luther King Jr., jeune pasteur de 26 ans, a émergé comme leader du boycott.

Le boycott a réussi. La Cour suprême a déclaré la ségrégation dans les bus inconstitutionnelle. Mais la victoire a eu un coût : la maison de King a été bombardée. Des militants ont été battus. La violence blanche était intense.

Montgomery était aussi le terminus de la marche Selma-Montgomery de 1965 – 54 miles de protestation qui ont abouti à 25 000 manifestants sur les marches du Capitole. Le Voting Rights Act a suivi cinq mois plus tard.

Population actuelle : 200 000 habitants. Montgomery est la capitale de l'Alabama et un site de pèlerinage pour l'histoire des droits civiques. Le National Memorial for Peace and Justice commémore les victimes de lynchage. Le drapeau blanc simple cache des couches d'histoire complexes et douloureuses.`,
    },
    {
        stateCode: '01',
        citySlug: 'mobile',
        cityName: 'Mobile',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Mobile%2C_Alabama.svg/1200px-Flag_of_Mobile%2C_Alabama.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Six drapeaux de six nations sur blanc – ville la plus ancienne d'Alabama, berceau du Mardi Gras américain.`,
        story: `Le drapeau de Mobile, adopté en 1968, présente un champ blanc avec six drapeaux historiques disposés autour du sceau municipal : France, Espagne, Grande-Bretagne, États confédérés, États-Unis, et Alabama. Ces six drapeaux représentent les six nations qui ont gouverné Mobile.

Mobile a été fondée par les Français en 1702 – la colonie européenne la plus ancienne dans ce qui allait devenir l'Alabama. La ville a changé de mains comme une patate chaude : France (1702-1763), Angleterre (1763-1780), Espagne (1780-1813), États-Unis (1813-1861), Confédération (1861-1865), États-Unis à nouveau.

Cette identité française a laissé une marque durable : Mobile célèbre le Mardi Gras depuis 1703 – 15 ans AVANT La Nouvelle-Orléans. Mobile se proclame le berceau du Mardi Gras américain. Les sociétés secrètes de Mardi Gras (mystic societies) organisent des défilés élaborés pendant des semaines.

Mobile était aussi un port de coton majeur avant la Guerre de Sécession. La bataille de Mobile Bay (1864) a été une victoire de l'Union cruciale, avec l'amiral Farragut criant son ordre légendaire : "Damn the torpedoes, full speed ahead!"

Aujourd'hui, Mobile (population 188 000) est un port maritime majeur – le 9e plus grand port américain par tonnage. Les chantiers navals construisent des navires de guerre. Airbus a une usine d'assemblage ici. L'économie du golfe du Mexique – pêche aux crevettes, pétrole offshore, transport – domine.

Le drapeau avec ses six drapeaux historiques capture la complexité de Mobile : européenne et américaine, coloniale et moderne, port et fête.`,
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
        citySlug: 'norfolk',
        cityName: 'Norfolk',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Norfolk%2C_Virginia.svg/1200px-Flag_of_Norfolk%2C_Virginia.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        shortSummary: `Sceau avec sirène sur blanc – plus grande base navale du monde, Hampton Roads.`,
        story: `Le drapeau de Norfolk présente un champ blanc avec le sceau municipal en couleur au centre. Le sceau montre une sirène (mermaids) tenant un trident – symbole maritime de l'identité portuaire de Norfolk.

Norfolk signifie Marine. Naval Station Norfolk est la plus grande base navale du monde. 75 navires, 134 avions, 14 quais de navires. Des porte-avions nucléaires géants – USS George H.W. Bush, USS Dwight D. Eisenhower – sont basés ici. La vue de ces monstres d'acier dominant le port est spectaculaire.

Hampton Roads (le nom de la zone métropolitaine incluant Norfolk, Virginia Beach, Newport News) est l'un des ports naturels les plus profonds du monde. La baie de Chesapeake rencontre l'océan Atlantique ici, créant un mouillage parfait. La Royal Navy britannique a reconnu cette valeur stratégique dès le XVIIe siècle.

Pendant la Guerre de Sécession, Norfolk a vu la première bataille de navires cuirassés : le CSS Virginia (ancien USS Merrimack, converti en ironclad par les Confédérés) contre l'USS Monitor de l'Union en 1862. La bataille a révolutionné la guerre navale.

Norfolk est aussi un centre culturel : Chrysler Museum of Art (collection de verre spectaculaire), Virginia Opera, base de l'histoire afro-américaine du Sud. Population : 238 000 habitants.

Le paradoxe : Norfolk dépend totalement de la Marine fédérale, mais la Virginie était un État confédéré. Les tensions historiques restent juste sous la surface.

Le drapeau blanc avec sirène capture l'identité maritime – mais ne montre rien des porte-avions nucléaires qui dominent réellement le port.`,
    },
    {
        stateCode: '51',
        citySlug: 'richmond',
        cityName: 'Richmond',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Richmond%2C_Virginia.svg/1200px-Flag_of_Richmond%2C_Virginia.svg.png',
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
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Flag_of_Charleston%2C_West_Virginia.svg/1200px-Flag_of_Charleston%2C_West_Virginia.svg.png',
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
        citySlug: 'baltimore',
        cityName: 'Baltimore',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Flag_of_Baltimore%2C_Maryland.svg/1200px-Flag_of_Baltimore%2C_Maryland.svg.png',
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

    // WASHINGTON D.C.
    {
        stateCode: 'DC',
        citySlug: 'washington-dc',
        cityName: 'Washington',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_the_District_of_Columbia.svg/1200px-Flag_of_the_District_of_Columbia.svg.png',
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
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Jackson%2C_Mississippi.svg/1200px-Flag_of_Jackson%2C_Mississippi.svg.png',
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

    // NEVADA
    {
        stateCode: '32',
        citySlug: 'reno',
        cityName: 'Reno',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Reno%2C_Nevada.svg/1200px-Flag_of_Reno%2C_Nevada.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1600&q=80',
        shortSummary: `"The Biggest Little City in the World" – divorce, casinos, Tesla.`,
        story: `Le drapeau de Reno présente le slogan iconique : "The Biggest Little City in the World" – inscrit sur l'arche néon célèbre qui enjambe Virginia Street au centre-ville depuis 1926.

Reno a été la capitale mondiale du divorce pendant des décennies. Les lois du Nevada permettaient des divorces après seulement six semaines de résidence (contre des années dans d'autres États). Dans les années 1930-60, des milliers de femmes (et quelques hommes) venaient à Reno, louaient une chambre, attendaient six semaines, obtenaient un divorce express. "Going to Reno" signifiait divorcer.

Reno était aussi la capitale du jeu avant Las Vegas. Les casinos bordent Virginia Street : Harrah's, Eldorado, Silver Legacy. Mais Vegas a dépassé Reno dans les années 1950, et Reno est devenue "la petite sœur" – plus proche, moins flashy, un peu délabrée.

Puis est venue la transformation moderne : Tesla. La Gigafactory 1 de Tesla, juste à l'est de Reno, produit des batteries lithium-ion pour les voitures électriques et le stockage d'énergie. C'est l'un des plus grands bâtiments du monde par superficie. Tesla a apporté des milliers d'emplois tech, transformant l'économie de Reno.

Apple, Google, Switch (centres de données massifs) ont suivi. Reno se réinvente comme hub technologique – attirés par les impôts bas du Nevada, la proximité de la Silicon Valley (4 heures), l'immobilier bon marché.

Population : 265 000 habitants. Reno est aussi la porte d'entrée vers Lake Tahoe – station de ski et lac alpin spectaculaire dans la Sierra Nevada.

Le drapeau avec "Biggest Little City" capture l'esprit contradictoire de Reno : petite mais ambitieuse, coincée entre passé décadent et futur tech.`,
    },

    // NOUVEAU MEXIQUE
    {
        stateCode: '35',
        citySlug: 'albuquerque',
        cityName: 'Albuquerque',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albuquerque%2C_New_Mexico.svg/1200px-Flag_of_Albuquerque%2C_New_Mexico.svg.png',
        heroImage: 'https://images.unsplash.com/photo-1584745109870-dea61f40aef0?w=1600&q=80',
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
        citySlug: 'omaha',
        cityName: 'Omaha',
        flagImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Omaha%2C_Nebraska.svg/1200px-Flag_of_Omaha%2C_Nebraska.svg.png',
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
];

// Fusionner avec les références culturelles
export const cityFlags: CityFlag[] = baseCityFlags.map(city => ({
    ...city,
    ...(culturalReferences[city.citySlug] || {})
}));
