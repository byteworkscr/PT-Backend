import { Module } from '@nestjs/common';
import { StellarService } from './stellar.service';
import { StellarController } from './stellar.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [StellarService],
  controllers: [StellarController],
})
export class StellarModule {}
