import { SERVERS } from "./Server.types";
import { IServer } from "./servers/types";
import ExpressServer from "./servers/Express";

const servers = new Map<SERVERS, () => IServer>([
  [SERVERS.EXPRESS, () => new ExpressServer()],
]);

export const createServer = (serverType: SERVERS): IServer => {
  try {
    const creator = servers.get(serverType);

    if (!creator) throw new Error();

    return creator();      
  } catch (e) {
    throw new Error("Could not create server.");
  }
};
