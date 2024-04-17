import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm'

export const usersSchema = pgTable("users", {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    age: integer('age').notNull(),
});


export interface SelectUserInterface extends InferSelectModel<typeof usersSchema> {}
export interface InsertUserInterface extends InferInsertModel<typeof usersSchema> {}