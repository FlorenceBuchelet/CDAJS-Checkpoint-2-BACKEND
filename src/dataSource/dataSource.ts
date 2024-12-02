import { DataSource } from "typeorm";
import { Country } from "../entities/Country";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "world.sqlite",
    entities: [Country],
    synchronize: true,
    logging: true
})