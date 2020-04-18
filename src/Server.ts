import bodyParser from "body-parser";
import { createServer } from "./serverFactory";
import { IServer, SERVERS } from "./Server.types";
import { IServer as IConcreteServer } from "./servers/types";

export default class Server implements IServer {
  private _instance: IConcreteServer;

  constructor(type: SERVERS) {
    this._instance = createServer(type);
    this._instance.setMiddlewares([
      bodyParser.json(),
      bodyParser.urlencoded({ extended: true }),
    ]);
  }

  public run(port = 3000): void {
    this._instance.run(port);
  }
}
