import Server from "./Server";
import { SERVERS, IServer } from "./Server.types";

const createExpressServer = (): IServer => {
  return new Server(SERVERS.EXPRESS);
}

export {
  createExpressServer,
}