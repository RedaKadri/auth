/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./app/lib/db/schema.ts",
    driver: 'mysql2',
    out: "",
    dbCredentials: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '',
        database: 'nextdemo'
    },
    verbose: true,
    strict: true
};