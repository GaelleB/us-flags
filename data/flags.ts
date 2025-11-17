// data/flags.ts
export type CityFlag = {
    stateCode: string;    // ex: "IL"
    citySlug: string;     // ex: "chicago"
    cityName: string;     // ex: "Chicago"
    flagImage: string;    // chemin vers l'image locale
    shortSummary: string;
    story: string;
};

export const cityFlags: CityFlag[] = [
    {
        stateCode: 'IL',
        citySlug: 'chicago',
        cityName: 'Chicago',
        flagImage: '/flags/chicago.png',
        shortSummary: 'Quatre étoiles rouges, deux bandes bleues, une ville qui brûle et se relève.',
        story: `
        Chicago porte ses cicatrices sur son drapeau : Fort Dearborn, l’incendie de 1871,
        les expositions universelles… Quatre étoiles rouges pour quatre actes d’un même récit :
        tomber, se reconstruire, s’exposer, inventer.
        `.trim(),
    },
    {
        stateCode: 'NY',
        citySlug: 'new-york-city',
        cityName: 'New York City',
        flagImage: '/flags/nyc.png',
        shortSummary: 'Orange, blanc, bleu – et un aigle qui trône sur cinq boroughs.',
        story: `
        Le drapeau de New York garde les couleurs des Pays-Bas, mémoire d’un passé
        où la ville s’appelait encore New Amsterdam. Aujourd’hui, c’est le théâtre
        d’un million d’histoires par jour.
        `.trim(),
    },
    {
        stateCode: 'CA',
        citySlug: 'los-angeles',
        cityName: 'Los Angeles',
        flagImage: '/flags/los-angeles.png',
        shortSummary: 'Un drapeau qui ressemble à un coucher de soleil déchiré.',
        story: `
        Los Angeles agite un drapeau en dents de scie – vert, jaune, rouge – comme la
        pellicule d’un film qu’on aurait remonté à la main. Une ville qui vit entre
        l’ombre des studios et la lumière du désert.
        `.trim(),
    },
];