import { CulturalReference } from './flags';

// Références culturelles par ville (citySlug)
export const culturalReferences: Record<string, {
    music?: CulturalReference[];
    books?: CulturalReference[];
    films?: CulturalReference[];
    series?: CulturalReference[];
}> = {
    'chicago': {
        music: [
            { title: 'Chicago Blues', creator: 'Muddy Waters', note: 'Le père du Chicago Blues électrique' },
            { title: 'Common Sense', creator: 'Common', year: 2005, note: 'Hip-hop conscient de Chicago' },
            { title: 'Siamese Dream', creator: 'The Smashing Pumpkins', year: 1993 },
        ],
        books: [
            { title: 'The Devil in the White City', creator: 'Erik Larson', year: 2003, note: "L'Exposition universelle de 1893 et H.H. Holmes" },
            { title: 'Native Son', creator: 'Richard Wright', year: 1940, note: 'Roman majeur sur la ségrégation raciale' },
            { title: 'The Jungle', creator: 'Upton Sinclair', year: 1906, note: "Les abattoirs de Chicago" },
        ],
        films: [
            { title: 'The Blues Brothers', creator: 'John Landis', year: 1980, note: 'Comédie musicale culte' },
            { title: 'Ferris Bueller\'s Day Off', creator: 'John Hughes', year: 1986 },
            { title: 'The Dark Knight', creator: 'Christopher Nolan', year: 2008, note: 'Gotham = Chicago' },
        ],
        series: [
            { title: 'The Bear', creator: 'Christopher Storer', year: 2022, note: "Restaurant de sandwichs, portrait d'une ville ouvrière" },
            { title: 'Chicago Fire / PD / Med', creator: 'Dick Wolf', year: 2012, note: 'Franchise One Chicago' },
            { title: 'Shameless (US)', creator: 'John Wells', year: 2011, note: 'Le South Side de Chicago' },
        ],
    },

    'new-york-city': {
        music: [
            { title: 'New York State of Mind', creator: 'Billy Joel', year: 1976 },
            { title: 'Illmatic', creator: 'Nas', year: 1994, note: 'Hip-hop du Queensbridge' },
            { title: 'The Velvet Underground & Nico', creator: 'The Velvet Underground', year: 1967 },
        ],
        books: [
            { title: 'The Great Gatsby', creator: 'F. Scott Fitzgerald', year: 1925, note: 'Long Island et Manhattan des années 20' },
            { title: 'Breakfast at Tiffany\'s', creator: 'Truman Capote', year: 1958 },
            { title: 'A Tree Grows in Brooklyn', creator: 'Betty Smith', year: 1943 },
            { title: 'The Catcher in the Rye', creator: 'J.D. Salinger', year: 1951 },
        ],
        films: [
            { title: 'Taxi Driver', creator: 'Martin Scorsese', year: 1976 },
            { title: 'Manhattan', creator: 'Woody Allen', year: 1979 },
            { title: 'Do the Right Thing', creator: 'Spike Lee', year: 1989, note: 'Brooklyn, tensions raciales' },
            { title: 'Goodfellas', creator: 'Martin Scorsese', year: 1990 },
        ],
        series: [
            { title: 'Seinfeld', creator: 'Larry David & Jerry Seinfeld', year: 1989, note: 'Comédie new-yorkaise par excellence' },
            { title: 'Friends', creator: 'David Crane & Marta Kauffman', year: 1994 },
            { title: 'Sex and the City', creator: 'Darren Star', year: 1998 },
            { title: 'The Sopranos', creator: 'David Chase', year: 1999, note: 'Mafia de New Jersey' },
        ],
    },

    'los-angeles': {
        music: [
            { title: 'California Love', creator: '2Pac ft. Dr. Dre', year: 1995 },
            { title: 'Hotel California', creator: 'Eagles', year: 1976 },
            { title: 'The Chronic', creator: 'Dr. Dre', year: 1992, note: 'G-funk de Compton' },
        ],
        books: [
            { title: 'The Big Sleep', creator: 'Raymond Chandler', year: 1939, note: 'Polar noir de LA' },
            { title: 'Less Than Zero', creator: 'Bret Easton Ellis', year: 1985, note: 'Jeunesse dorée désabusée' },
            { title: 'Ask the Dust', creator: 'John Fante', year: 1939, note: 'LA des années 30' },
        ],
        films: [
            { title: 'Chinatown', creator: 'Roman Polanski', year: 1974 },
            { title: 'Mulholland Drive', creator: 'David Lynch', year: 2001 },
            { title: 'La La Land', creator: 'Damien Chazelle', year: 2016 },
            { title: 'Blade Runner', creator: 'Ridley Scott', year: 1982, note: 'LA dystopique' },
        ],
        series: [
            { title: 'Bosch', creator: 'Eric Overmyer', year: 2014, note: 'Polar LAPD' },
            { title: 'Entourage', creator: 'Doug Ellin', year: 2004, note: 'Hollywood de l\'intérieur' },
            { title: 'The O.C.', creator: 'Josh Schwartz', year: 2003 },
        ],
    },

    'new-orleans': {
        music: [
            { title: 'What a Wonderful World', creator: 'Louis Armstrong', year: 1967 },
            { title: 'Dr. John\'s Gumbo', creator: 'Dr. John', year: 1972 },
            { title: 'The Wild Magnolias', creator: 'The Wild Magnolias', year: 1974, note: 'Mardi Gras Indians' },
        ],
        books: [
            { title: 'A Streetcar Named Desire', creator: 'Tennessee Williams', year: 1947 },
            { title: 'Interview with the Vampire', creator: 'Anne Rice', year: 1976, note: 'Vampires dans le French Quarter' },
            { title: 'A Confederacy of Dunces', creator: 'John Kennedy Toole', year: 1980, note: 'Comédie culte, prix Pulitzer' },
        ],
        films: [
            { title: 'The Big Easy', creator: 'Jim McBride', year: 1986 },
            { title: 'Interview with the Vampire', creator: 'Neil Jordan', year: 1994 },
            { title: 'The Curious Case of Benjamin Button', creator: 'David Fincher', year: 2008 },
        ],
        series: [
            { title: 'Treme', creator: 'David Simon', year: 2010, note: 'Post-Katrina, par le créateur de The Wire' },
            { title: 'American Horror Story: Coven', creator: 'Ryan Murphy', year: 2013, note: 'Sorcières à La Nouvelle-Orléans' },
            { title: 'NCIS: New Orleans', creator: 'Gary Glasberg', year: 2014 },
        ],
    },

    'memphis': {
        music: [
            { title: 'Heartbreak Hotel', creator: 'Elvis Presley', year: 1956, note: 'Enregistré à Sun Studio' },
            { title: 'Green Onions', creator: 'Booker T. & the M.G.\'s', year: 1962, note: 'Soul de Stax Records' },
            { title: 'Respect', creator: 'Aretha Franklin', year: 1967, note: 'Enregistré aux studios Fame' },
        ],
        books: [
            { title: 'The Firm', creator: 'John Grisham', year: 1991, note: 'Thriller juridique' },
            { title: 'Mystery Train', creator: 'Greil Marcus', year: 1975, note: 'Essai sur le rock américain' },
        ],
        films: [
            { title: 'Walk the Line', creator: 'James Mangold', year: 2005, note: 'Biopic de Johnny Cash' },
            { title: 'The Firm', creator: 'Sydney Pollack', year: 1993 },
            { title: 'Hustle & Flow', creator: 'Craig Brewer', year: 2005, note: 'Hip-hop de Memphis' },
        ],
        series: [
            { title: 'Bluff City Law', creator: 'David Hudgins', year: 2019 },
        ],
    },

    'nashville': {
        music: [
            { title: 'I Walk the Line', creator: 'Johnny Cash', year: 1956 },
            { title: 'Coat of Many Colors', creator: 'Dolly Parton', year: 1971 },
            { title: 'He Stopped Loving Her Today', creator: 'George Jones', year: 1980, note: 'La plus grande chanson country de tous les temps' },
        ],
        books: [
            { title: 'The Nashville Sound', creator: 'Paul Hemphill', year: 1970, note: 'Histoire de la country music' },
        ],
        films: [
            { title: 'Nashville', creator: 'Robert Altman', year: 1975, note: 'Fresque chorale, 5 nominations aux Oscars' },
            { title: 'Coal Miner\'s Daughter', creator: 'Michael Apted', year: 1980, note: 'Biopic de Loretta Lynn' },
        ],
        series: [
            { title: 'Nashville', creator: 'Callie Khouri', year: 2012, note: 'Drama musical' },
        ],
    },

    'detroit': {
        music: [
            { title: 'My Girl', creator: 'The Temptations', year: 1964, note: 'Motown' },
            { title: 'What\'s Going On', creator: 'Marvin Gaye', year: 1971, note: 'Album concept Motown' },
            { title: 'The Marshall Mathers LP', creator: 'Eminem', year: 2000 },
        ],
        books: [
            { title: 'Middlesex', creator: 'Jeffrey Eugenides', year: 2002, note: 'Prix Pulitzer, saga familiale grecque à Detroit' },
            { title: 'Elmore Leonard novels', creator: 'Elmore Leonard', note: 'Maître du polar situé à Detroit' },
        ],
        films: [
            { title: '8 Mile', creator: 'Curtis Hanson', year: 2002, note: 'Eminem, rap battles' },
            { title: 'RoboCop', creator: 'Paul Verhoeven', year: 1987, note: 'Detroit dystopique' },
            { title: 'Detroit', creator: 'Kathryn Bigelow', year: 2017, note: 'Émeutes de 1967' },
        ],
        series: [
            { title: 'Detroit 1-8-7', creator: 'Jason Richman', year: 2010 },
        ],
    },

    'baltimore': {
        music: [
            { title: 'Baltimore', creator: 'Nina Simone', year: 1978 },
            { title: 'Charm City', creator: 'Beach House', year: 2010, note: 'Dream pop de Baltimore' },
        ],
        books: [
            { title: 'The Corner', creator: 'David Simon & Ed Burns', year: 1997, note: 'Journalisme immersif, base de The Wire' },
        ],
        films: [
            { title: 'Hairspray', creator: 'John Waters', year: 1988, note: 'John Waters = Mr. Baltimore' },
        ],
        series: [
            { title: 'The Wire', creator: 'David Simon', year: 2002, note: 'La plus grande série de tous les temps selon beaucoup' },
            { title: 'Homicide: Life on the Street', creator: 'Paul Attanasio', year: 1993 },
        ],
    },

    'san-francisco': {
        music: [
            { title: 'San Francisco (Be Sure to Wear Flowers in Your Hair)', creator: 'Scott McKenzie', year: 1967 },
            { title: 'Surrealistic Pillow', creator: 'Jefferson Airplane', year: 1967, note: 'Psychédélisme SF' },
        ],
        books: [
            { title: 'On the Road', creator: 'Jack Kerouac', year: 1957, note: 'Beat Generation' },
            { title: 'The Maltese Falcon', creator: 'Dashiell Hammett', year: 1930 },
            { title: 'Tales of the City', creator: 'Armistead Maupin', year: 1978, note: 'Chroniques LGBT de SF' },
        ],
        films: [
            { title: 'Vertigo', creator: 'Alfred Hitchcock', year: 1958 },
            { title: 'Bullitt', creator: 'Peter Yates', year: 1968, note: 'Poursuite en voiture légendaire' },
            { title: 'Milk', creator: 'Gus Van Sant', year: 2008, note: 'Harvey Milk, militant gay assassiné' },
        ],
        series: [
            { title: 'Full House', creator: 'Jeff Franklin', year: 1987 },
            { title: 'Tales of the City', creator: 'Lauren Morelli', year: 2019, note: 'Adaptation Netflix' },
        ],
    },

    'austin': {
        music: [
            { title: 'Live at Austin City Limits', creator: 'Willie Nelson', year: 1976, note: 'Émission musicale légendaire' },
            { title: 'Be Here Now', creator: 'Ray Wylie Hubbard', year: 1994 },
        ],
        books: [
            { title: 'The Cartel series', creator: 'Don Winslow', note: 'Thrillers narco à la frontière' },
        ],
        films: [
            { title: 'Dazed and Confused', creator: 'Richard Linklater', year: 1993, note: 'Austin 1976' },
            { title: 'Slacker', creator: 'Richard Linklater', year: 1990, note: 'Scène alternative Austin' },
        ],
        series: [
            { title: 'Friday Night Lights', creator: 'Peter Berg', year: 2006, note: 'Football texan' },
        ],
    },

    'miami': {
        music: [
            { title: 'Welcome to Miami', creator: 'Will Smith', year: 1998 },
            { title: 'Gloria Estefan hits', creator: 'Gloria Estefan', note: 'La reine de la pop latine' },
        ],
        books: [
            { title: 'Carl Hiaasen novels', creator: 'Carl Hiaasen', note: 'Satires noires de la Floride' },
        ],
        films: [
            { title: 'Scarface', creator: 'Brian De Palma', year: 1983, note: 'Tony Montana, immigré cubain' },
            { title: 'Miami Vice (film)', creator: 'Michael Mann', year: 2006 },
            { title: 'Moonlight', creator: 'Barry Jenkins', year: 2016, note: 'Oscar meilleur film, coming-of-age noir gay' },
        ],
        series: [
            { title: 'Miami Vice', creator: 'Anthony Yerkovich', year: 1984, note: 'Style pastel années 80' },
            { title: 'Dexter', creator: 'James Manos Jr.', year: 2006, note: 'Tueur en série justicier' },
            { title: 'Burn Notice', creator: 'Matt Nix', year: 2007 },
        ],
    },

    'seattle': {
        music: [
            { title: 'Nevermind', creator: 'Nirvana', year: 1991, note: 'Grunge qui changea le rock' },
            { title: 'Ten', creator: 'Pearl Jam', year: 1991 },
            { title: 'Superunknown', creator: 'Soundgarden', year: 1994 },
        ],
        books: [
            { title: 'Snow Falling on Cedars', creator: 'David Guterson', year: 1994, note: 'Prix PEN/Faulkner' },
        ],
        films: [
            { title: 'Singles', creator: 'Cameron Crowe', year: 1992, note: 'Scène grunge de Seattle' },
            { title: 'Sleepless in Seattle', creator: 'Nora Ephron', year: 1993 },
        ],
        series: [
            { title: 'Grey\'s Anatomy', creator: 'Shonda Rhimes', year: 2005, note: 'Hôpital Seattle Grace' },
            { title: 'Twin Peaks', creator: 'David Lynch', year: 1990, note: 'Près de Seattle, dans l\'État de Washington' },
            { title: 'iZombie', creator: 'Rob Thomas', year: 2015 },
        ],
    },

    'portland': {
        music: [
            { title: 'The Decemberists albums', creator: 'The Decemberists', note: 'Indie folk de Portland' },
            { title: 'Sleater-Kinney albums', creator: 'Sleater-Kinney', note: 'Riot grrrl de Portland' },
        ],
        books: [
            { title: 'Sometimes a Great Notion', creator: 'Ken Kesey', year: 1964, note: 'Oregon rural' },
            { title: 'Fugitives and Refugees', creator: 'Chuck Palahniuk', year: 2003, note: 'Guide alternatif de Portland' },
        ],
        films: [
            { title: 'My Own Private Idaho', creator: 'Gus Van Sant', year: 1991 },
        ],
        series: [
            { title: 'Portlandia', creator: 'Fred Armisen & Carrie Brownstein', year: 2011, note: 'Satire de la culture hipster' },
            { title: 'Grimm', creator: 'Stephen Carpenter', year: 2011, note: 'Fantasy urbaine' },
        ],
    },

    'atlanta': {
        music: [
            { title: 'Stankonia', creator: 'OutKast', year: 2000, note: 'Hip-hop sudiste révolutionnaire' },
            { title: 'Trap Muzik', creator: 'T.I.', year: 2003, note: 'Naissance de la trap' },
            { title: 'Culture', creator: 'Migos', year: 2017 },
        ],
        books: [
            { title: 'Gone with the Wind', creator: 'Margaret Mitchell', year: 1936, note: 'Atlanta pendant la Guerre Civile' },
            { title: 'Midnight in the Garden of Good and Evil', creator: 'John Berendt', year: 1994, note: 'Savannah, Géorgie' },
        ],
        films: [
            { title: 'Gone with the Wind', creator: 'Victor Fleming', year: 1939 },
            { title: 'Driving Miss Daisy', creator: 'Bruce Beresford', year: 1989, note: 'Relations raciales dans le Sud' },
        ],
        series: [
            { title: 'Atlanta', creator: 'Donald Glover', year: 2016, note: 'Surréalisme et vie noire à Atlanta' },
            { title: 'The Walking Dead', creator: 'Frank Darabont', year: 2010, note: 'Zombies en Géorgie' },
        ],
    },
};
