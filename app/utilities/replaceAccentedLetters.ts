const withAccent = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ<,>´`,~";
const withoutAccent = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC       ";

export default function replaceAccentedLetters(sentence: string) {
    return sentence
        .split("")
        .map((char) => {
            const charIndex = withAccent.indexOf(char);
            if (charIndex !== -1) {
                return withoutAccent[charIndex];
            }
            return char;
        })
        .join("");
}
