import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'dgram';
import { MapsDTO, MapsService } from '../services/maps.service';

@WebSocketGateway({ cors: true })
export class DisplacementsGateway {
  private readonly logger = new Logger(DisplacementsGateway.name);
  private readonly maps: MapsDTO[] = [];

  constructor(private readonly mapsService: MapsService) {
    this.maps = this.mapsService.getMaps();
  }

  @SubscribeMessage('getMaps')
  getMaps(): MapsDTO[] {
    return this.maps;
  }

  @SubscribeMessage('move')
  handleMove(
    @MessageBody() direction: number,
    @ConnectedSocket() client: Socket,
  ): any {
    try {
      const map = this.mapsService.getMapByPosition(direction);

      return map;
    } catch (err) {
      client.emit('socketError', err.message);
    }
  }
}
