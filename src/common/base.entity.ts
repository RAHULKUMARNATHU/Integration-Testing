import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({
  //   type: 'varchar',
  // })
  // @PrimaryGeneratedColumn('uuid')
  // uuid: number;

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
