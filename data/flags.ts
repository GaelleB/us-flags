export type CityFlag = {
    stateCode: string;    // pour l'instant: code FIPS, ex "17" (Illinois)
    citySlug: string;     // pour l'URL, ex: "chicago"
    cityName: string;     // affichage, ex: "Chicago"
    flagImage: string;    // on mettra de vraies images plus tard
    shortSummary: string; // teaser
    story: string;        // texte complet (pour plus tard)
};

export const cityFlags: CityFlag[] = [
    {
        stateCode: '17', // Illinois (code FIPS 17 dans ton fichier states.json)
        citySlug: 'chicago',
        cityName: 'Chicago',
        flagImage: '/flags/chicago.png',
        shortSummary:
        'Quatre étoiles rouges, deux bandes bleues, une ville qui brûle et se relève.',
        story: `
        Chicago porte ses cicatrices sur son drapeau : Fort Dearborn, l’incendie de 1871,
        les expositions universelles… Quatre étoiles rouges pour quatre actes d’un même récit :
        tomber, se reconstruire, s’exposer, inventer.
        `.trim(),
    },
    {
        stateCode: '36', // New York (FIPS 36)
        citySlug: 'new-york-city',
        cityName: 'New York City',
        flagImage: '/flags/nyc.png',
        shortSummary:
        'Orange, blanc, bleu – héritage de New Amsterdam et théâtre d’un million d’histoires par jour.',
        story: `
        Le drapeau de New York garde les couleurs des Pays-Bas, mémoire d'un passé
        où la ville s'appelait encore New Amsterdam. Aujourd'hui, c'est le théâtre
        d'un million d'histoires par jour.
        `.trim(),
    },
    {
        stateCode: '06', // California (FIPS 06)
        citySlug: 'los-angeles',
        cityName: 'Los Angeles',
        flagImage: '/flags/los-angeles.png',
        shortSummary: `Un drapeau qui ressemble à un coucher de soleil déchiré.`,
        story: `
        Los Angeles agite un drapeau en dents de scie – vert, jaune, rouge – comme la
        pellicule d’un film qu’on aurait remonté à la main. Une ville qui vit entre
        l’ombre des studios et la lumière du désert.
        `.trim(),
    },
];