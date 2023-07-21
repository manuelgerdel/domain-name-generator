const pronouns = ["the", "our", "your", "my", "her"];
const adjectives = ["beautiful", "horrible", "smallest", "ugly", "tremendous"];
const nouns = ["ba.com", "alcoholic.net", "tr.io", "diarrhea.com", "ash.es"];



function domainName (pronouns, adjectives, nouns) {
    for (let pronoun of pronouns) {
        for (let adjective of adjectives) {
            for (let noun of nouns) {
              console.log(pronoun+adjective+noun);
            }
        }
    }
};

domainName(pronouns, adjectives, nouns);


