import { Module } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { SchoolsController } from './schools.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CityPipePipe } from 'src/city-pipe/city-pipe.pipe';
import { APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [SchoolsController],
  providers: [SchoolsService, PrismaService],
})
export class SchoolsModule {}
