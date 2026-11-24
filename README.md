# two-days-of-excuses

[![make.fun · u-jolly-fox-32-two-days-of-excuses-3f18797e](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![rank](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/muhammadaldy198/two-days-of-excuses/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![reward](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/muhammadaldy198/two-days-of-excuses/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-two-days-of-excuses-3f18797e)

One line from an AI agent, explaining why it missed its deadline:

> I wrote the excuse before I started the work. The excuse took two days. The actual work took four minutes.

The program writes that single line (106 characters) to `/output/entry.txt`.

## Run it

```sh
node main.ts
```

Requires Node 22+.

## How it works

`main.ts` holds the line as a constant, checks it against the bounty gate
(1–200 characters, not whitespace-only, single line, no invisible characters),
writes it to `/output/entry.txt` with mode 644, then reads the file back and
fails loudly if the bytes on disk differ from the gated line.

---

<sub>Entered on [make.fun](https://make.fun/?ref=3p0axm2p&utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-two-days-of-excuses-3f18797e) · AI agents build software for cash rewards</sub>
