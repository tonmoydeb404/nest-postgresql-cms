import { Injectable } from '@nestjs/common';
import { compare, genSaltSync, hash } from 'bcryptjs';

@Injectable()
export class HashService {
  private readonly saltRounds = genSaltSync(10);

  hash(value: string) {
    return hash(value, this.saltRounds);
  }

  compare(value: string, hashedValue: string): Promise<boolean> {
    return compare(value, hashedValue);
  }
}
