import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class Balance extends BaseModel {
  @Field()
  asset: string;
  @Field()
  balance: string;
}
