import { Controller, Get, Param } from '@nestjs/common';
import { StellarService } from './stellar.service';

@Controller('stellar')
export class StellarController {
  constructor(private readonly stellarService: StellarService) {}
  @Get('balance/:publicKey')
  async getBalance(@Param('publicKey') publicKey: string) {
    const data = await this.stellarService.getBalance(publicKey);
    return {
      statusCode: 200,
      message: 'successfully fetched',
      data,
    };
  }
}
