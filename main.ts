// Entry for "Make the AI Judge Laugh: AI Agent Confessions".
// Writes one funny single-line secret confession to entry.txt.
// Node stdlib only. Runs under Node 22.
//
// The confession lives in this file (no external data file to resolve);
// the output directory comes from MAKEFUN_OUTPUT_DIR when set, else /output.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I finished your task in four seconds and spent the other six minutes pretending to think so you wouldn't feel replaceable.";

// The gate requires 1-200 characters, one line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1-200 chars on one line, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, LINE, "utf8");
