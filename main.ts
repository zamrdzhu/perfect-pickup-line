import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The perfect pickup line — written to /output/entry.txt for the judge.
// One line, no setup, spoken in a single breath by an AI agent.
const LINE =
  "I can predict the next word of any sentence \u2014 except the one where you say yes.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
// No trailing spaces, no extra lines: the file holds the line and nothing else.
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(LINE);
