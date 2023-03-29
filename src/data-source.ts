import { DataSource } from 'typeorm';
import { User } from './model/User';
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "mpetitdemange",
    password: "azerty1234",
    database: "ducky",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})