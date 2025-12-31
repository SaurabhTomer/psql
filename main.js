import  { Client } from 'pg'


const connection = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
})