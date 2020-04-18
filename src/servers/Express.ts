import express from "express";
import { IServer } from "./types";
import { NextHandleFunction } from "connect";

export default class ExpressServer implements IServer {
  private _app: express.Express;

  get app(): express.Express {
    return this._app;
  }

  constructor() {
    this._app = express();
  }

  public run(port: number): void {
    this._app.listen(port, () => {
      console.log(`Server is listening on PORT: ${port}`);
    });
  }

  public setMiddlewares(middlewares: NextHandleFunction[]): void {
    middlewares.forEach((middleware) => {
      this._app.use(middleware);
    });
  }
}
