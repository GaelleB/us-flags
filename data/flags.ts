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
        flagImage: '/flags/chicago.png',
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
        flagImage: '/flags/nyc.png',
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
        flagImage: '/flags/los-angeles.png',
        shortSummary: `Un drapeau qui ressemble à un coucher de soleil déchiré.`,
        story: `Los Angeles agite un drapeau en dents de scie – vert, jaune, rouge – comme la pellicule d'un film qu'on aurait remonté à la main. Une ville qui vit entre l'ombre des studios et la lumière du désert.

Le design créé en 1931 est audacieux : trois bandes en zigzag évoquent les montagnes qui entourent la ville, mais aussi l'énergie électrique qui l'alimente, le mouvement perpétuel de ses autoroutes. Au centre, le sceau municipal : un aigle mexicain, quatre étoiles, des oranges, un ours grizzly, l'océan.

Chaque élément raconte une strate de l'histoire : l'héritage espagnol et mexicain, les missions franciscaines, l'agriculture qui a prospéré avant Hollywood, la ruée vers l'or californienne. Le vert représente les oliviers, le jaune l'or et le soleil, le rouge... peut-être le sang, peut-être les couchers de soleil légendaires de la côte Pacifique.

C'est un drapeau excentrique, presque psychédélique, qui reflète parfaitement une ville faite de contradictions : plages et déserts, richesse et pauvreté, rêves et désillusions. Los Angeles ne fait rien à moitié, pas même son drapeau.`,
    },
];

// Fusionner avec les références culturelles
export const cityFlags: CityFlag[] = baseCityFlags.map(city => ({
    ...city,
    ...(culturalReferences[city.citySlug] || {})
}));
