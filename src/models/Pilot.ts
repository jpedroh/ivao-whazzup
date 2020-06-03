import Client from './Client';
import FlightPlan from '../vos/FlightPlan';
import Simulator from '../enum/Simulator';

export default class Pilot extends Client {
  public readonly groundSpeed: number;
  public readonly heading: number;
  public readonly onGround: boolean;
  public readonly squawk: number;
  public readonly flightPlan: FlightPlan;
  public readonly simulator: Simulator;
  public readonly planeMtl: string;

  public constructor(
    client: Client,
    groundSpeed: number,
    heading: number,
    onGround: boolean,
    squawk: number,
    simulator: Simulator,
    planeMtl: string,
    flightPlan: FlightPlan = null,
  ) {
    super(client.callsign, client.member, client.position, client.connection, client.software);
    this.groundSpeed = groundSpeed;
    this.heading = heading;
    this.onGround = onGround;
    this.squawk = squawk;
    this.simulator = simulator;
    this.planeMtl = planeMtl;
    this.flightPlan = flightPlan;
  }

  public hasFilledFlightPlan(): boolean {
    return this.flightPlan !== null;
  }
}
