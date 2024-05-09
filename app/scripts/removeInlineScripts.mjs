import { createHash } from "crypto";
import { readFileSync, writeFileSync } from "fs";
import { globSync } from "glob";

const MAGIC_STRING = "__this_is_a_placeholder_for_the_inline_scripts__";

console.log("Removing all inline scripts...");

const baseDir = ".next";
const htmlFiles = globSync(`${baseDir}/**/*.html`);

htmlFiles.forEach((file) => {
    const contents = readFileSync(file)
        .toString()
        .replace(/style="color:transparent" /g, "");
    const scripts = [];
    const newFile = contents.replace(/<script>(.+?)<\/script>/g, (_, data) => {
        const addMagicString = scripts.length === 0;
        scripts.push(`${data}${data.endsWith(";") ? "" : ";"}`);
        return addMagicString ? MAGIC_STRING : "";
    });

    if (!scripts.length) {
        return;
    }
    console.log(`Processing ${file}`);

    const chunk = scripts.join("");
    const hash = createHash("md5").update(chunk).digest("hex");
    writeFileSync(`${baseDir}/static/chunks/${hash}.js`, chunk);
    writeFileSync(file, newFile.replace(MAGIC_STRING, `<script src="/${baseDir.replace(".", "_")}/static/chunks/${hash}.js" crossorigin="" defer></script>`));
});
