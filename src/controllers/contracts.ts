import { IVAOPilot } from '../models/pilot';
import { IVAOATC } from '../models/atc';

export interface IVAOResult {
  data: IVAOResultData;
  pilots: Array<IVAOPilot>;
  atcs: Array<IVAOATC>;
}

export interface IVAORequestResult {
  updateTime: number;
  clientsConnected: number;
  buffer: Array<string>;
}

interface IVAOResultData {
  updateTime: number;
  clientsConnected: number;
  clientsRetrieved: number;
}