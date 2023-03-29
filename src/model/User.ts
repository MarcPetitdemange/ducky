import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;
  @Column()
  lastname: string;
  @Column()
  firstname: string;
  @Column({ nullable: true })
  email: string;
  @Column({ nullable: true })
  phone: string;
  @Column({ nullable: true })
  birthDate: Date;
  @Column({ nullable: true })
  versusDate: Date;
  /**
   * Check if it is the user's birthday
   */
  isMyBirthday(): boolean {
    return this.birthDate == new Date();
  }
}
