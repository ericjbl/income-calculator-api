import { Field, Int, ObjectType } from "@nestjs/graphql";
import { report } from "process";
import { Report } from "src/Report/report.entity";
import { UserRole } from "src/user-role/entities/user-role.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
@ObjectType()
export class User {
    @Field(type => Int)
    @PrimaryGeneratedColumn({name: 'id'})
    userId: number;

    @Field()
    @Column({name: 'firstname'})
    firstName: string;

    @Field()
    @Column({name: 'lastname'})
    lastName: string;

    @Field()
    @Column()
    email: string;

    @Field()
    @Column()
    username: string;

    @Field()
    @Column()
    password: string;

    @Field()
    @Column()
    active: boolean;

    @Field()
    @Column({ name: 'refreshtoken' })
    refreshToken: string;

    @Field()
    @Column({ name: 'lastloggedindate', type: 'timestamp' })
    LastLoggedInDate: Date

    @Field()
    @Column({ name: 'hasloggedin' })
    HasLoggedIn: Boolean

    @Field({defaultValue: Date.now()})
    @Column({ name:'createdat', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    createdAt: Date;

    @Field({defaultValue: Date.now()})
    @Column({ name: 'updateat', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    updatedAt: Date;

    @Field(type => UserRole)
    @OneToOne(() => UserRole, (role) => role.roleId)
    @JoinColumn({name: 'role_id'})
    Role: UserRole;

    @OneToMany(() => Report, (report) => report.User)
    @JoinColumn({ name: 'username'})
    Reports: Report[]

    @OneToMany(() => Report, (report) => report.UpdatedBy)
    @JoinColumn({ name: 'username'})
    UpdatedReports: Report[]

}
