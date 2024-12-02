import { Arg, Mutation, Resolver } from "type-graphql";
import { Country } from "../entities/Country";
import { dataSource } from "../dataSource/dataSource";

@Resolver()
export class CountryResolver {
    @Mutation(_ => Country)
    async createCountry(
        @Arg("code") code: string,
        @Arg("name") name: string,
        @Arg("emoji") emoji: string,
        @Arg("continent") continent: string
    ): Promise<Country> {
        const country = new Country();
        country.code = code;
        country.name = name;
        country.emoji = emoji;
        country.continent = continent;

        await dataSource.manager.save(country);

        return country;
    }

}