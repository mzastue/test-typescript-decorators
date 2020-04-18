export interface IServer {
  run: (port?: number) => void;
}

export enum SERVERS {
  EXPRESS,
}
