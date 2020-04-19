import { NextHandleFunction } from "connect";
import { IServer as IBaseServer } from "../Server.types";

export interface ServerEngine {
  run: (port: number) => void;
  setMiddlewares: (middlewares: NextHandleFunction[]) => void;
}
