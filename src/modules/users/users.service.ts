import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDTO } from './dto/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.user.findMany({
      include: {
        status: true,
      },
    });
  }

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        ...createUserDTO,
        status: {
          create: {},
        },
      },
      include: {
        status: true,
      },
    });

    return user;
  }
}
