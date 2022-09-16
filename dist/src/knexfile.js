"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
// Update with your config settings.
const config = {
    development: {
        client: "sqlite3",
        connection: {
            filename: path_1.default.resolve(__dirname, "database", "database.sqlite3"),
        },
        migrations: {
            directory: path_1.default.resolve(__dirname, "database", "migrations"),
        },
        seeds: {
            directory: path_1.default.resolve(__dirname, "database", "seeds"),
        },
        useNullAsDefault: true,
    },
    staging: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
    production: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
};
module.exports = config;
