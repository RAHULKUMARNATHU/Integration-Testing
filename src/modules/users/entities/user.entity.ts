import { BaseEntity } from "../../../common/base.entity";
import {  Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  // @PrimaryGeneratedColumn()
  // id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  mobile: string;

  @Column()
  address: string;
}
