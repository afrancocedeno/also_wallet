import { Exclude } from "class-transformer"
import { Investment } from "../../investment/entities/investment.entity"
import {
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Entity,
    OneToMany
} from "typeorm"


@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'varchar', length: 255, unique: false })
    role: string

    @Column({ type: 'varchar', length: 255, unique: false })
    name: string

    @Column({ name: 'last_name', type: 'varchar', length: 255, unique: false })
    lastName: string

    @Column({ type: 'varchar', length: 255, unique: false })
    email: string

    @Exclude()
    @Column({ type: 'varchar', length: 255 })
    password: string;

    @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    createDate: string

    @UpdateDateColumn({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
    updateDate: string

    @Column({ type: 'boolean', default: true })
    visible: boolean

    @OneToMany(() => Investment, (investment) => investment.userId)
    investments: Investment[]
}
