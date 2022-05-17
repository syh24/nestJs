import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('User')
export class UserEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    name: string;

    @Column({ length: 60 })
    email: string;
    
    @Column({ length: 30 })
    password: string;
    
    @Column({ length: 60 })
    signupVerifyToken: string;
}
