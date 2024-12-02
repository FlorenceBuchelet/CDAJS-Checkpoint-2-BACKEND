import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/Country";
import { dataSource } from "../dataSource/dataSource";

@Resolver()
export class CountryResolver {

    @Query(_ => [Country])
    async getAllCountries(): Promise<Country[]> {
        const countries = await dataSource.manager.find(Country);
        return countries;
    }

    @Query(_ => Country, { nullable: true })
    async getCountryByCode(
        @Arg("code") code: string
    ): Promise<Country | null> {
        const countryByCode = await dataSource.manager.findOneBy(Country, { code });
        return countryByCode;
    }

    @Query(_ => [Country], { nullable: true })
    async getCountryByContinent(
        @Arg("continent") continent: string
    ): Promise<Country[] | null> {
        const countriesbyContinent = await dataSource.manager.findBy(Country, { continent });
        return countriesbyContinent;
    }

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