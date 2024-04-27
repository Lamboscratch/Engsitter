export default function checkLink(currentPath: string, itemPath: string) {
    if (currentPath === "/" && itemPath === "/") {
        return true;
    }
    if (currentPath.startsWith("/posts") && itemPath.startsWith("/posts")) {
        return true;
    }
    if (currentPath.startsWith("/tips") && itemPath.startsWith("/tips")) {
        return true;
    }
    return false;
}
