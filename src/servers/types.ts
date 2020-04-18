import { NextHandleFunction } from "connect";
import { IServer as IBaseServer } from "../Server.types";

export interface IServer extends Omit<IBaseServer, 'run'>{
  run: (port: number) => void;
  setMiddlewares: (middlewares: NextHandleFunction[]) => void;
}
