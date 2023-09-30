import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchoolsModule } from './schools/schools.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [SchoolsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
