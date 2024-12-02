import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Country {

    @PrimaryGeneratedColumn()
    @Field(_ => ID)
    id?: number;

    @Column()
    @Field()
    code: string;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    emoji: string;

    @Column()
    @Field()
    continent: string;

    constructor(
        code = "",
        name = "",
        emoji = "",
        continent = ""
    ) {
    this.code = code;
    this.name = name;
    this.emoji = emoji;
    this.continent = continent;
    }
}