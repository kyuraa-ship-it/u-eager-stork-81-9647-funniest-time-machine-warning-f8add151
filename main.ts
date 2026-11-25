import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "WARNING: If you meet yourself, do not lend him money. He knows exactly when you will forget he owes it.";

if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`gate failed: entry is ${ENTRY.length} chars (must be 1-120)`);
}
if (!ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error("gate failed: entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length} chars`);
