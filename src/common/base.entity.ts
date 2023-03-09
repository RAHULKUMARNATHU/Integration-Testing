import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @Column({
    type: 'varchar',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: Date,
  })
  createdAt: Date;

  @CreateDateColumn({
    name: 'updated_at',
    type: Date,
  })
  updatedAt: Date;
}
