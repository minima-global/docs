import { readFile, writeFile } from "fs/promises";

let index = await readFile("./out/index.html", "utf8");
index = index.replace("/favicon.ico", "./favicon.ico")
index = index.replace("/icon.ico", "./icon.ico")
await writeFile("./out/index.html", index);
