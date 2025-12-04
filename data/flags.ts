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
];

// Fusionner avec les références culturelles
export const cityFlags: CityFlag[] = baseCityFlags.map(city => ({
    ...city,
    ...(culturalReferences[city.citySlug] || {})
}));
