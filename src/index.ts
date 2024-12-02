import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { CountryResolver } from "./resolvers/CountryResolver";
import { buildSchema } from "type-graphql";
import { dataSource } from "./dataSource/dataSource";
import { startStandaloneServer } from "@apollo/server/standalone";
import { initTestData } from "./dataSource/initTestData";
import { cleanDB } from "./dataSource/cleanDB";


const port = 4444;

export async function startServerApollo() {

    // 1. construction du schema à partir des resolvers
    const schema = await buildSchema({
        resolvers: [CountryResolver],
    });

    // 2. transmettre le schema à Apollo pour démarrage du serveur
    const server = new ApolloServer({
        schema
    });

    // 3. initialisation de la datasource TypeORM
    await dataSource.initialize();
    // 3bis. appel des autres services d'initialisation
    await cleanDB();
    await initTestData();

    // 4. démarrage du serveur
    const { url } = await startStandaloneServer(server, {
        listen: { port }
    });

    console.log(`🚀  Server ready at: ${url}`);
}

startServerApollo();
