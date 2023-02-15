import { Logger, NotFoundException } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
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
  handleMove(@MessageBody() direction: number): any {
    const map = this.mapsService.getMapByPosition(direction);
    return map;
  }
}
