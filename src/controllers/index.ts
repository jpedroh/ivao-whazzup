import * as zlib from 'zlib';
import * as request from 'request';
import { IVAORequestError } from '../errors';
import { IVAOPilot } from '../models/pilot';
import { IVAOATC } from '../models/atc';
import { IVAOResult, IVAORequestResult } from './contracts';
import { Client } from '../models/enums';

export class Whazzup {

  private getAPIData(): Promise<IVAORequestResult> {
    return new Promise((resolve: any, reject: any) => {
      request.get({
        url : 'http://api.ivao.aero/getdata/whazzup/whazzup.txt.gz',
        headers: {
            'Accept-Encoding' : 'gzip',
          },
        encoding : null
      }, (error: Error, res: any, body: string) => {
        if(error) reject(new IVAORequestError(error));
        zlib.unzip(body, (error: Error | null, buffer: Buffer): void => {
          if(error) reject(new IVAORequestError(error));
          const data = buffer.toString();
          const beginGeneral = data.indexOf("!GENERAL");
          const beginClients = data.indexOf("!CLIENTS");
          const end = data.indexOf("!AIRPORTS");
          const generalInfo = data.substr(beginGeneral + 9, beginClients - 10).split('\n')
          resolve({
            clientsConnected: parseInt(generalInfo[3].substr(generalInfo[3].indexOf('=') + 1)),
            updateTime: parseInt(generalInfo[2].substr(generalInfo[2].indexOf('=') + 2)),
            buffer: data.substr(beginClients + 10, end - beginClients - 12).split('\n')
          });
        })
      })
    })
  }

  public fetchData(): Promise<IVAOResult> {
    return this.getAPIData()
      .then((data: IVAORequestResult) => {
        const result: IVAOResult = { data: { updateTime: data.updateTime, clientsConnected: data.clientsConnected, clientsRetrieved: 0 }, pilots: [], atcs: [] };
        for (const line of data.buffer) {
          const traffic: Array<string> = line.split(':');
          result.data.clientsRetrieved++;
          traffic[3] == Client.Pilot ? result.pilots.push(new IVAOPilot(traffic)) : result.atcs.push(new IVAOATC(traffic));
        }     
        if(result.data.clientsRetrieved < result.data.clientsConnected) {
          console.warn(`Not all clients were sucessfully retrieved! ${result.data.clientsRetrieved}/${result.data.clientsConnected} retrieved`);
        }
        return result;
      })
  }

}