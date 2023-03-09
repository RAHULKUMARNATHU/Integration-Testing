import { BaseEntity } from "../../../common/base.entity";
import {  Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from "@nestjs/swagger/dist/decorators";

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  // @PrimaryGeneratedColumn()
  // id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column()
  mobile: string;

  @ApiProperty()
  @Column()
  address: string;
}
