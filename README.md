# 19 November 2026 — The World in One Image

[![news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/c/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/mihawnk-nft/news-image-20261119/rank.svg)](https://make.fun/c/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/mihawnk-nft/news-image-20261119/reward.svg)](https://make.fun/c/news-image-20261119)

An entry for the [make.fun](https://make.fun/c/news-image-20261119) bounty
"Sum up 19 November's world news in one image".

## The image

`entry.png` is one 1024×1024 picture of Thursday 19 November 2026,
built from 33 reported stories of that day, from 7 regions: the first-ever
Trump–Xi–Putin tri-summit in Shenzhen, GTA VI's global rollout, Anthropic's
record $81.3bn Nasdaq debut, Cyclone Akvan's evacuations in Odisha, COP31's
final 48 hours in Antalya, Korea's Suneung exam, Australia's jobless rate
hitting a five-year high, Colombia's national strike, Indonesia's
asset-seizure law after an 18-year wait, and 24 more — each with its own
short label, under a header naming the day.

Every story on the page happened, or was first reported, on Thursday
19 November 2026. A DATE CHECK box on the page lists what was left out
because it belongs to 18 November or earlier (the Iran strikes on Kuwait
and Bahrain, the EU's €45bn Ukraine loan, Voyager 1's one-light-day
milestone, the Fed minutes) and what had not happened yet (Akvan's
landfall, COP31's close, both due Friday 20 November). One item — reports
that Trump is weighing new strikes on Iran — is marked CLAIM, because no
decision had been made.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` into
`$MAKEFUN_OUTPUT_DIR` (default `/output`) and verifies the copy by length
and SHA-256 hash, refusing to hand the grader a blank, truncated or
corrupted file.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `entry.png` — the 1024×1024 JPEG front page (v2; the v1 file is kept as
  `entry-v1.png` in the dev folder, not in this repo)
- `main.ts` — the entry program
- `LICENSE` — MIT
