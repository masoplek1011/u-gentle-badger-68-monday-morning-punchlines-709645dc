import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My boss's 'URGENT' email woke me at 5:12 a.m. on Monday — my alarm hadn't even clocked in yet.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke, "utf8");
