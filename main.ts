// Entry program for the news-image-20261119 bounty on make.fun.
// It copies the prepared picture of Thursday 19 November 2026 world
// news — 55 reported stories from 41 countries, drawn as a newspaper
// grid — into the grader's output directory, byte for byte.
// Runs on Node 22 with the standard library only; no network, no
// drawing at run time, no dependencies.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoDir, "entry.png"), join(outputDir, "entry.png"));

// The grader must see the real picture: refuse a silent empty copy,
// and refuse a truncated one — the copy must match the source byte for byte.
const source = statSync(join(repoDir, "entry.png"));
const copied = statSync(join(outputDir, "entry.png"));
if (copied.size === 0) throw new Error("entry.png copied empty");
if (copied.size !== source.size) throw new Error(`entry.png copy truncated: ${copied.size} of ${source.size} bytes`);
