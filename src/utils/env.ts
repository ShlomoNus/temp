import path from "path";

import { config as loadEnv } from "dotenv";

import { nodeEnvOption } from "@/consts/general";
import { NodeEnvOption } from "@/types/general";

const testingNodeEnvOptions: NodeEnvOption[] = [
  nodeEnvOption.development,
  nodeEnvOption.test,
  nodeEnvOption.qa
];

export function isTestingEnvironment(nodeEnv: NodeEnvOption): boolean {
  return testingNodeEnvOptions.includes(nodeEnv);
}

export function loadLocalEnv(): void {
  const cwd = process.cwd();

  loadEnv({ path: path.resolve(cwd, ".env") });
  loadEnv({
    path: path.resolve(cwd, ".env.secret"),
    override: true
  });
}
