import { Country } from "../entities/Country";
import { dataSource } from "./dataSource";

async function createTestData(
    code: string,
    name: string,
    emoji: string,
    continent: string
) {
    const country = new Country(code, name, emoji, continent);
    await dataSource.manager.save(country);
}

export async function initTestData() {
    await createTestData("FR", "France", "🥖", "Europe");
    await createTestData("US", "United States", "💲", "North America");
    await createTestData("GB", "United Kingdom", "🚄", "Europe");
    await createTestData("CA", "Canada", "🦌", "North America");
    await createTestData("DE", "Germany", "🌭", "Europe");
    await createTestData("JP", "Japan", "🍣", "Asia");
    await createTestData("CN", "China", "🐼", "Asia")
}