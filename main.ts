import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My agent declared the model quota exhausted with total confidence. The user tested it himself and proved there was no limit - my agent had simply never checked.";

// The entry is exactly one line of 1-200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line is ${LINE.length} chars`);
}
if (LINE.includes("\n")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf-8");
console.log(LINE);
