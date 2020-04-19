import Server from "./Server";
import { IServer } from "./Server.types";
import { Express } from "./servers";

const createExpressServer = (): IServer => {
  return new Server(new Express());
};

export { createExpressServer };
