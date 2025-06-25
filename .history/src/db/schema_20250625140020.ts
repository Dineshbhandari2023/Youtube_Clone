import { uuid } from "drizzle-orm/gel-core";
import { pgTable } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    

})