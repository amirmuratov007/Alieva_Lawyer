#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const dist = path.join(root, "dist");

function copyFile(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

function copyDir(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dest);
    else copyFile(src, dest);
  }
}

if (fs.existsSync(dist)) {
  fs.rmSync(dist, { recursive: true, force: true });
}
fs.mkdirSync(dist, { recursive: true });

const rootFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "favicon.svg",
  "og.svg",
  "robots.txt",
  "sitemap.xml"
];

for (const file of rootFiles) {
  const src = path.join(root, file);
  if (fs.existsSync(src)) copyFile(src, path.join(dist, file));
}

console.log("Static build completed. Output directory: dist");
