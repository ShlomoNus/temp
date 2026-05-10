import { nodeEnvOption } from "../consts/general";
import { NodeEnvOption } from "../types/general";

const testingNodeEnvOptions: NodeEnvOption[] = [
  nodeEnvOption.development,
  nodeEnvOption.test,
  nodeEnvOption.qa
];

export function isTestingEnvironment(nodeEnv: NodeEnvOption): boolean {
  return testingNodeEnvOptions.includes(nodeEnv);
}
