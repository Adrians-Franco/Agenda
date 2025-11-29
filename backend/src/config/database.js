import { Sequelize } from "sequelize";

class Database {

    constructor() {
        this.init();
    }

    init() {
        // .env - dotenv
        this.db = new Sequelize({
            database: process.env.nameDB ?? 'agenda',
            host: process.env.hostDB ?? 'localhost',
            username: process.env.usernameDB ?? 'root',
            password: process.env.passwordDB ?? '',
            dialect: process.env.dialectDB ??'mysql'
        })
    }
}

export default new Database()