import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "Lovely planet. The locals carry a glowing rectangle everywhere, mourn when it dies, and call staring at it 'work.' 4/5, would abduct again.";

mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line, "utf8");
chmodSync(outFile, 0o644);
