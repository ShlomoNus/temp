import { nodeEnvOption } from "../consts/general";

export type NodeEnvOption = typeof nodeEnvOption[keyof typeof nodeEnvOption];
