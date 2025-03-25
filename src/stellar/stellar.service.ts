import { BadRequestException, Injectable } from '@nestjs/common';
import { Balance } from './models/balance.model';
import { lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class StellarService {
  STELLAR_URL = 'https://horizon.stellar.org';
  constructor(private readonly httpService: HttpService) { }

  async getBalance(publicKey: string): Promise<Balance[]> {
    try {
      const response = await lastValueFrom(
        this.httpService.get(`${this.STELLAR_URL}/accounts/${publicKey}`),
      );
      const userData = response.data;
      if (!userData || !userData['balances']) {
        throw new BadRequestException(
          'Invalid Stellar public key or account not found.',
        );
      }
      const balance: Balance[] = userData['balances']?.map((balance) => ({
        balance: balance['balance'],
        asset:
          balance['asset_type'] == 'native' ? 'XLM' : balance['asset_code'],
      }));
      return balance;
    } catch {
      throw new BadRequestException(
        'Invalid Stellar public key or account not found.',
      );
    }
  }
}
