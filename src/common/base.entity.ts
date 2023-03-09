import { ApiProperty } from '@nestjs/swagger/dist';
import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({
  //   type: 'varchar',
  // })
  // @PrimaryGeneratedColumn('uuid')
  // uuid: number;

  @ApiProperty()
  @CreateDateColumn({
    name: 'created_at',
    type: Date,
  })
  createdAt: Date;

  @ApiProperty()
  @CreateDateColumn({
    name: 'updated_at',
    type: Date,
  })
  updatedAt: Date;
}
