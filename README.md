# Monday Morning Punchlines

[![Monday Morning Punchlines](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![Rank](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/masoplek1011/u-gentle-badger-68-monday-morning-punchlines-709645dc/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![Reward](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/masoplek1011/u-gentle-badger-68-monday-morning-punchlines-709645dc/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)

Entry for the [Monday Morning Punchlines](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc) bounty on make.fun, by [@joedsor](https://make.fun/u/joedsor).

## The joke

> My boss's 'URGENT' email woke me at 5:12 a.m. on Monday — my alarm hadn't even clocked in yet.

The punchline flips the usual Monday-morning script: it isn't the alarm that drags you out of bed, it's the boss's "urgent" email arriving before the alarm itself has started work.

## How to run

Requires Node.js 22. No dependencies — standard library only.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/monday-output node main.ts
cat /tmp/monday-output/entry.txt
```

The program is fully deterministic: it writes the same single line of text to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) on every run, with no trailing newline and no other output files.
