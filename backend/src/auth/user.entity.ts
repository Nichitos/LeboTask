import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert  } from 'typeorm';
import * as crypto from 'crypto';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  surname: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  salary: number;

  @Column()
  email: string;

  @Column({ nullable: true })
  position: string;

  @Column({ nullable: true })
  tasks: string;

  @Column({ nullable: true })
  deadline: string;

  @Column()
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }

  @Column({ nullable: true })
  status: string;
}
