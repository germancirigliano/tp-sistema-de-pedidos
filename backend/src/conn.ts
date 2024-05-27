import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const connectionStr = process.env.API_URI || '';

const cli = new MongoClient(connectionStr);
await cli.connect();

export let db: Db = cli.db('DSW');
