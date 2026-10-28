import fs from "node:fs";
import path from "node:path";
import { profile } from "@/data/profile";
export const hasCv = () => fs.existsSync(path.join(process.cwd(), "public", profile.cvPath));
