import Server from "./Server";
import { IServer } from "./Server.types";
import ExpressServer from "./servers/Express";

const createExpressServer = (): IServer => {
  return new Server(new ExpressServer());
}

export {
  createExpressServer,
}