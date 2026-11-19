# 19 November 2026 — The World in One Image

[![news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/c/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/mihawnk-nft/news-image-20261119/rank.svg)](https://make.fun/c/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/mihawnk-nft/news-image-20261119/reward.svg)](https://make.fun/c/news-image-20261119)

An entry for the [make.fun](https://make.fun/c/news-image-20261119) bounty
"Sum up 19 November's world news in one image".

## The image

`entry.png` is one 1024×1024 picture of Thursday 19 November 2026,
built from 55 reported stories of that day, from 41 countries on every
continent: the first-ever Trump–Xi–Putin tri-summit in Shenzhen, Iran
striking US bases in Kuwait and Bahrain, the Coalition of the Willing
meeting in Berlin, the EU's €45bn Ukraine loan, GTA VI's global rollout,
the Fed pointing to more rate hikes, and 49 more — each drawn as its own
small panel with a short label, under a header naming the day.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` into
`$MAKEFUN_OUTPUT_DIR/entry.png`, unchanged. Nothing else is needed:
no network, no drawing at run time, no dependencies.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
