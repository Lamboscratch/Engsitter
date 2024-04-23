export default function calculateHeadersUrl(header: string) {
    return header
        .toString()
        .replaceAll(/[.,\/#?!$%\^&\*;:{}=\-_`~()]/g, "")
        .toLocaleLowerCase()
        .replaceAll(" ", "-");
}
