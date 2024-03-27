import { DrizzleMySQLAdapter } from '@lucia-auth/adapter-drizzle';
import db from '.';
import { sessionTable, userTable } from './schema';

const adapter = new DrizzleMySQLAdapter(db, sessionTable, userTable);

export default adapter;
