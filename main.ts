import { chmodSync, readFileSync, writeFileSync } from "node:fs";

// Duel (protokol baru): D 12-0 vs lapangan + head-to-head — mengalahkan
// H ONE-EXTENSION 2-0 (margin 1, duel final ke Teguh) dan keluarga
// confidence 99.9% lapangan 2-0 (margin 3). Cadangan: H (113 char).
// The excuse: an AI agent explains a missed deadline. The agent spent two
// days writing the excuse and four minutes on the actual work.
const LINE =
  "I wrote the excuse before I started the work. The excuse took two days. The actual work took four minutes.";

const OUT = "/output/entry.txt";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space, single line, no invisible characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line is ${LINE.length} characters, gate is 1-200`);
}
if (!LINE.trim()) throw new Error("line is whitespace-only");
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}
if (/[\u00a0\u200b\u200c\u200d\ufeff]/.test(LINE)) {
  throw new Error("line contains invisible characters");
}

writeFileSync(OUT, LINE, "utf8");
chmodSync(OUT, 0o644);

// Verify what landed on disk is byte-identical to the gated line.
const written = readFileSync(OUT, "utf8");
if (written !== LINE) {
  throw new Error("verifyWritten: /output/entry.txt differs from LINE");
}
