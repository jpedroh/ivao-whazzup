import ClientsExtractor from '../../../src/extractors/ClientsExtractor';
import Atc from '../../../src/models/Atc';
import Pilot from '../../../src/models/Pilot';
import FollowMe from '../../../src/models/FollowMe';
import ConnectionType from '../../../src/enum/ConnectionType';
import DateUtils from '../../../src/utils/DateUtils';
import FacilityType from '../../../src/enum/FacilityType';
import Simulator from '../../../src/enum/Simulator';
import WakeTurbulence from '../../../src/enum/WakeTurbulence';
import FlightRule from '../../../src/enum/FlightRule';

describe('Clients Extractor', () => {
  const processor = new ClientsExtractor();

  describe('Given input from Whazzup File will return a single ATC', () => {
    const input = [
      '!CLIENTS',
      'CALLSIGN:123456:A NAME:ATC:121.900:-23.6261:-46.6564:0:0::::::SHARD2:B:4:0:3:10::::::::::::::::' +
        'AN EXAMPLE ATIS:20200602202220:20200602181157:ATCClient:1.0:2:4:::::::',
      '!AIRPORTS',
    ];

    test('Returned value should have the passed ATC', () => {
      const { clients } = processor.extractFromFileLines(input);
      const atc = clients[0] as Atc;

      expect(clients.length).toEqual(1);
      expect(atc).toBeInstanceOf(Atc);
      expect(atc.callsign).toEqual('CALLSIGN');
      expect(atc.member.vid).toEqual(123456);
      expect(atc.member.name).toEqual('A NAME');
      expect(atc.member.rating).toEqual(4);
      expect(atc.member.administrativeRating).toEqual(2);
      expect(atc.position.latitude).toEqual(-23.6261);
      expect(atc.position.longitude).toEqual(-46.6564);
      expect(atc.position.altitude).toEqual(0);
      expect(atc.connection.type).toEqual(ConnectionType.ATC);
      expect(atc.connection.connectionTime).toEqual(DateUtils.dateFromWhazzupString('20200602181157'));
      expect(atc.connection.serverName).toEqual('SHARD2');
      expect(atc.connection.protocolVersion).toEqual('B');
      expect(atc.software.name).toEqual('ATCClient');
      expect(atc.software.version).toEqual('1.0');
      expect(atc.frequency).toEqual('121.900');
      expect(atc.facilityType).toEqual(FacilityType.GROUND);
      expect(atc.visualRange).toEqual(10);
      expect(atc.atis.content).toEqual('AN EXAMPLE ATIS');
      expect(atc.atis.definedAt).toEqual(DateUtils.dateFromWhazzupString('20200602202220'));
    });
  });

  describe('Given input from Whazzup File will return a single FOLLOW-ME', () => {
    const input = [
      '!CLIENTS',
      'CALLSIGN:123456:A NAME:FOLME:121.900:-23.6261:-46.6564:0:0::::::SHARD2:B:4:0:3:10::::::::::::::::' +
        'AN EXAMPLE ATIS:20200602202220:20200602181157:ATCClient:1.0:2:4:::::::',
      '!AIRPORTS',
    ];

    test('Returned value should have the passed Follow Me', () => {
      const { clients } = processor.extractFromFileLines(input);
      const followMe = clients[0] as FollowMe;

      expect(clients.length).toEqual(1);
      expect(followMe).toBeInstanceOf(FollowMe);
      expect(followMe.callsign).toEqual('CALLSIGN');
      expect(followMe.member.vid).toEqual(123456);
      expect(followMe.member.name).toEqual('A NAME');
      expect(followMe.member.rating).toEqual(4);
      expect(followMe.member.administrativeRating).toEqual(2);
      expect(followMe.position.latitude).toEqual(-23.6261);
      expect(followMe.position.longitude).toEqual(-46.6564);
      expect(followMe.position.altitude).toEqual(0);
      expect(followMe.connection.type).toEqual(ConnectionType.FOLLOW_ME);
      expect(followMe.connection.connectionTime).toEqual(DateUtils.dateFromWhazzupString('20200602181157'));
      expect(followMe.connection.serverName).toEqual('SHARD2');
      expect(followMe.connection.protocolVersion).toEqual('B');
      expect(followMe.software.name).toEqual('ATCClient');
      expect(followMe.software.version).toEqual('1.0');
    });
  });

  describe('Given input from Whazzup File will return a single pilot without flight plan', () => {
    const input = [
      '!CLIENTS',
      'CALLSIGN:123456:A NAME:PILOT::4.81437:-75.7384:4384:0::::::EU4:B:3:1447:0:50::::::::::::::::::' +
        '20200603030157:X-IvAp/win:0.4.0:2:3::::72:1:16:RANDOM-MTL-STRING',
      '!AIRPORTS',
    ];

    test('Returned value should have the passed Follow Me', () => {
      const { clients } = processor.extractFromFileLines(input);
      const pilot = clients[0] as Pilot;

      expect(clients.length).toEqual(1);
      expect(pilot).toBeInstanceOf(Pilot);
      expect(pilot.callsign).toEqual('CALLSIGN');
      expect(pilot.member.vid).toEqual(123456);
      expect(pilot.member.name).toEqual('A NAME');
      expect(pilot.member.rating).toEqual(3);
      expect(pilot.member.administrativeRating).toEqual(2);
      expect(pilot.position.latitude).toEqual(4.81437);
      expect(pilot.position.longitude).toEqual(-75.7384);
      expect(pilot.position.altitude).toEqual(4384);
      expect(pilot.connection.type).toEqual(ConnectionType.PILOT);
      expect(pilot.connection.connectionTime).toEqual(DateUtils.dateFromWhazzupString('20200603030157'));
      expect(pilot.connection.serverName).toEqual('EU4');
      expect(pilot.connection.protocolVersion).toEqual('B');
      expect(pilot.software.name).toEqual('X-IvAp/win');
      expect(pilot.software.version).toEqual('0.4.0');
      expect(pilot.groundSpeed).toEqual(0);
      expect(pilot.heading).toEqual(72);
      expect(pilot.onGround).toEqual(true);
      expect(pilot.squawk).toEqual(1447);
      expect(pilot.simulator).toEqual(Simulator.X_PLANE_11_X);
      expect(pilot.planeMtl).toEqual('RANDOM-MTL-STRING');
      expect(pilot.hasFilledFlightPlan()).toBeFalsy();
    });
  });

  describe('Given input from Whazzup File will return a single pilot with filled flight plan', () => {
    const input = [
      '!CLIENTS',
      'CALLSIGN:123456:A NAME:PILOT::-19.0666:-44.0451:15555:297:1/B738/M-SACDE1FGIRTWYZ/S:N0420:SBMK:F260:' +
        'SBCF:EU7:B:3:2000:0:50:1:I:245:245:0:38:5:40:SBGR:OPR/GOLLINHASAEREAS PER/E RMK/TCAS EQUIPPED:MILOL' +
        ' UZ4 OPLEX:::::::20200603004601:IvAp:2.0.2:2:3:SBGL:S:163:178:0:0:RANDOM-MTL-STRING',
      '!AIRPORTS',
    ];

    test('Returned value should have the passed Follow Me', () => {
      const { clients } = processor.extractFromFileLines(input);
      const pilot = clients[0] as Pilot;

      expect(clients.length).toEqual(1);
      expect(pilot).toBeInstanceOf(Pilot);
      expect(pilot.callsign).toEqual('CALLSIGN');
      expect(pilot.member.vid).toEqual(123456);
      expect(pilot.member.name).toEqual('A NAME');
      expect(pilot.member.rating).toEqual(3);
      expect(pilot.member.administrativeRating).toEqual(2);
      expect(pilot.position.latitude).toEqual(-19.0666);
      expect(pilot.position.longitude).toEqual(-44.0451);
      expect(pilot.position.altitude).toEqual(15555);
      expect(pilot.connection.type).toEqual(ConnectionType.PILOT);
      expect(pilot.connection.connectionTime).toEqual(DateUtils.dateFromWhazzupString('20200603004601'));
      expect(pilot.connection.serverName).toEqual('EU7');
      expect(pilot.connection.protocolVersion).toEqual('B');
      expect(pilot.software.name).toEqual('IvAp');
      expect(pilot.software.version).toEqual('2.0.2');
      expect(pilot.groundSpeed).toEqual(297);
      expect(pilot.heading).toEqual(178);
      expect(pilot.onGround).toEqual(false);
      expect(pilot.squawk).toEqual(2000);
      expect(pilot.simulator).toEqual(Simulator.UNKNOWN);
      expect(pilot.planeMtl).toEqual('RANDOM-MTL-STRING');
      expect(pilot.hasFilledFlightPlan()).toBeTruthy();
      expect(pilot.flightPlan.aircraft.number).toEqual(1);
      expect(pilot.flightPlan.aircraft.identification).toEqual('B738');
      expect(pilot.flightPlan.aircraft.wakeTurbulence).toEqual(WakeTurbulence.MEDIUM);
      expect(pilot.flightPlan.aircraft.equipment).toEqual('SACDE1FGIRTWYZ');
      expect(pilot.flightPlan.aircraft.transponder).toEqual('S');
      expect(pilot.flightPlan.cruisingSpeed).toEqual('N0420');
      expect(pilot.flightPlan.departure).toEqual('SBMK');
      expect(pilot.flightPlan.cruisingLevel).toEqual('F260');
      expect(pilot.flightPlan.arrival).toEqual('SBCF');
      expect(pilot.flightPlan.flightRules).toEqual(FlightRule.IFR);
      expect(pilot.flightPlan.departureTime).toEqual('245');
      expect(pilot.flightPlan.enrouteMinutes).toEqual(38);
      expect(pilot.flightPlan.enduranceMinutes).toEqual(340);
      expect(pilot.flightPlan.alternate).toEqual('SBGR');
      expect(pilot.flightPlan.remarks).toEqual('OPR/GOLLINHASAEREAS PER/E RMK/TCAS EQUIPPED');
      expect(pilot.flightPlan.route).toEqual('MILOL UZ4 OPLEX');
      expect(pilot.flightPlan.secondAlternate).toEqual('SBGL');
      expect(pilot.flightPlan.flightType).toEqual('S');
      expect(pilot.flightPlan.personsOnBoard).toEqual(163);
    });
  });
});
