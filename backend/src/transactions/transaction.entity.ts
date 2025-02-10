import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamptz' })
  dateTime: Date;

  @Column()
  author: string;

  @Column('decimal')
  sum: number;

  @Column()
  category: string;

  @Column({ nullable: true })
  comment: string;
}
