import bodyParser from "body-parser";
import { IServer } from "./Server.types";
import { IServer as IConcreteServer } from "./servers/types";

export default class Server<T extends IConcreteServer> implements IServer {
  private _instance: T;

  constructor(engine: T) {
    this._instance = engine;
    this._instance.setMiddlewares([
      bodyParser.json(),
      bodyParser.urlencoded({ extended: true }),
    ]);
  }

  public run(port = 3000): void {
    this._instance.run(port);
  }
}
