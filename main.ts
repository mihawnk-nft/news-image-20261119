// news-image-20261119 — v2 entry program for the make.fun bounty.
// The picture is prepared ahead of time (see NEWS-RESEARCH-v2.md in the
// dev folder): one 1024x1024 newspaper page of Thursday 19 November 2026,
// 33 stories that happened — or were first reported — on that day, across
// 7 regions, with 12 small vector illustrations drawn for the page.
// This script only moves the finished file into the grader's folder and
// proves the move was exact. It draws nothing and fetches nothing.
// Node 22, standard library only.
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.png");
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const targetPath = join(targetDir, "entry.png");

const picture = readFileSync(sourcePath);
if (picture.length === 0) {
  throw new Error("entry.png is empty, refusing to hand the grader a blank page");
}
if (picture.length < 1024) {
  throw new Error(`entry.png is only ${picture.length} bytes — too small to be the finished page`);
}
if (picture[0] !== 0xff || picture[1] !== 0xd8 || picture[2] !== 0xff) {
  throw new Error("entry.png does not start with the JPEG magic bytes — the file is not a JPEG");
}

const digest = (buf) => createHash("sha256").update(buf).digest("hex");
const expected = digest(picture);

mkdirSync(targetDir, { recursive: true });
writeFileSync(targetPath, picture);

const delivered = readFileSync(targetPath);
if (delivered.length !== picture.length) {
  throw new Error(
    `entry.png arrived short: ${delivered.length} of ${picture.length} bytes`,
  );
}
if (digest(delivered) !== expected) {
  throw new Error("entry.png hash mismatch after copy — the grader must not see a corrupted image");
}

console.log(`entry.png delivered: ${delivered.length} bytes, sha256 ${expected}`);
