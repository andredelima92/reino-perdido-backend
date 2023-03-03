import { Module } from '@nestjs/common';
import { DisplacementsModule } from './modules/displacements/displacements.module';
import { UsersModule } from './modules/users/users.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [DisplacementsModule, UsersModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
