import { Country } from "../entities/Country";
import { dataSource } from "./dataSource";

export async function cleanDB() {
    await dataSource.manager.clear(Country);
    await dataSource.query("DELETE FROM sqlite_sequence WHERE name='country'");
}