#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const root = process.cwd();
const dist = path.join(root, "dist");
function copyFile(from, to) { fs.mkdirSync(path.dirname(to), { recursive: true }); fs.copyFileSync(from, to); }
function copyDir(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dest); else copyFile(src, dest);
  }
}
if (fs.existsSync(dist)) fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
for (const file of fs.readdirSync(root)) {
  const src = path.join(root, file);
  if (fs.statSync(src).isFile() && (file.endsWith(".html") || file.endsWith(".css") || file.endsWith(".js") || file.endsWith(".svg") || file.endsWith(".txt") || file.endsWith(".xml"))) {
    copyFile(src, path.join(dist, file));
  }
}
copyDir(path.join(root, "assets"), path.join(dist, "assets"));
console.log("Static build completed. Output directory: dist");
