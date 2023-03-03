import { Injectable, NotFoundException } from '@nestjs/common';
import { maps } from 'src/helpers/map';

export type MapsDTO = {
  position: number;
  image: string;
  near_positions: {
    up: number | null;
    left: number | null;
    right: number | null;
    down: number | null;
  };
};

@Injectable()
export class MapsService {
  getMaps(): MapsDTO[] {
    return maps;
  }

  getMapByPosition(position: number): MapsDTO {
    const map = maps.find((map) => map.position === position);

    if (!map) throw new NotFoundException('Mapa não encontrado');

    return map;
  }
}
