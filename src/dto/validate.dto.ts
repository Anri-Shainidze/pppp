/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsArray,
  ArrayNotEmpty,
  ValidateNested,
  IsInt,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ProductInOrderDto {
  @IsInt()
  @Min(1, { message: 'productId must be a positive integer' })
  productId: number;

  @IsInt()
  @Min(1, { message: 'quantity must be at least 1' })
  quantity: number;
}

export class CreateOrderDto {
  @IsArray()
  @ArrayNotEmpty({ message: 'Products array should not be empty' })
  @ValidateNested({ each: true })
  @Type(() => ProductInOrderDto)
  products: ProductInOrderDto[];
}
