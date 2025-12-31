
import { Client } from "pg";

const pgClient = new Client({
  user: "neondb_owner",
  password: "npg_obljQip8vO5y",
  port: 5432,
  host: "ep-dark-sky-adkk4hju-pooler.c-2.us-east-1.aws.neon.tech",
  database: "neondb",
   ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

async function main(){
    console.log('hello')
    await pgClient.connect();

    const response = await pgClient.query(" UPDATE users SET username = 'SAURABH' WHERE ID='1' ");
    console.log(response.rows);
}

main();