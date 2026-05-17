#!/usr/bin/env node

import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import readline from "node:readline";

const REPO = "happy-token/remotion-style-kit";

async function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function main() {
  let projectName = process.argv[2];

  if (!projectName) {
    projectName = await ask("Project name: ");
  }

  if (!projectName) {
    console.error("Error: project name is required.");
    process.exit(1);
  }

  const targetDir = path.resolve(projectName);

  if (existsSync(targetDir)) {
    console.error(`Error: directory "${projectName}" already exists.`);
    process.exit(1);
  }

  console.log();
  console.log(`Creating Remotion Style Kit project in ${targetDir}...`);
  console.log();

  try {
    execSync(`npx degit ${REPO} "${projectName}"`, {
      stdio: "inherit",
      cwd: process.cwd(),
    });
  } catch {
    console.error("Error: failed to download template.");
    process.exit(1);
  }

  console.log();
  console.log("Installing dependencies...");
  console.log();

  try {
    execSync("npm install", {
      stdio: "inherit",
      cwd: targetDir,
    });
  } catch {
    console.error("Warning: npm install failed. Run 'npm install' manually.");
  }

  console.log();
  console.log("Done! Get started:");
  console.log();
  console.log(`  cd ${projectName}`);
  console.log("  cp .env.example .env   # add your OPENAI_API_KEY");
  console.log("  npm run dev");
  console.log();
  console.log("Open http://localhost:3000");
  console.log();
}

main();
