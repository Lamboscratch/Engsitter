export default function checkLink(currentPath: string, itemPath: string) {
    if (currentPath === "/" && itemPath === "/") {
        return true;
    }
    if (currentPath.startsWith("/posts") && itemPath.startsWith("/posts")) {
        return true;
    }
    if (currentPath.startsWith("/resources") && itemPath.startsWith("/resources")) {
        return true;
    }
    return false;
}
