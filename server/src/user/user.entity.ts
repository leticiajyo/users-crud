import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

export enum Gender {
  FEMALE = 'Female',
  MALE = 'Male',
}

@Entity('users')
@Index('unique_user', ['name', 'firstName', 'phone'], { unique: true })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 100, name: 'name' })
  name: string;

  @Column('varchar', { length: 100, name: 'first_name' })
  firstName: string;

  @Column('varchar', { length: 15, name: 'phone' })
  phone: string;

  @Column('varchar', { length: 100, name: 'street' })
  street: string;

  @Column('varchar', { length: 30, name: 'city' })
  city: string;

  @Column('varchar', { length: 5, name: 'postal_code' })
  postalCode: string;

  @Column('varchar', { length: 30, name: 'country' })
  country: string;

  @Column('date', { name: 'birthday' })
  birthday: string;

  @Column({ type: 'enum', enum: Gender, name: 'gender' })
  gender: string;

  @Column('varchar', { length: 30, name: 'nationality' })
  nationality: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
    name: 'created_at',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
    onUpdate: 'CURRENT_TIMESTAMP()',
    name: 'updated_at',
  })
  updatedAt?: Date;
}
