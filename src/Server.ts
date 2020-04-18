import express from "express";
import * as http from 'http';
import bodyParser from "body-parser";
import { IServer } from "./Server.types";

export default class Server implements IServer {
  private _app: express.Express;
  
  get app(): express.Express {
    return this._app;
  }
  
  private _instance: http.Server;

  get instance(): http.Server {
   return this._instance;
  }

  constructor() {
    this._app = express();

    this._app.set("port", process.env.PORT || 3000);

    this.configureMiddleware();
  }

  public run(): void {
    const port = this._app.get('port');
    this._instance = this._app.listen(port, () => {
      console.log(`Server is listening on PORT: ${port}`);
    })
  }

  private configureMiddleware(): void {
    this._app.use(bodyParser.json());
    this._app.use(bodyParser.urlencoded({ extended: true }));
  }
}
