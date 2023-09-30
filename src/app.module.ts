import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchoolsModule } from './schools/schools.module';

@Module({
  imports: [SchoolsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
