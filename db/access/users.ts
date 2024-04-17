import {database} from "@db/setup/queryPostgres";
import {usersSchema, SelectUserInterface, InsertUserInterface } from "@db/schema/users";
import {eq} from "drizzle-orm";
import { DatabaseError } from "@db/databaseError";

export const getUsersFromId = async (id: number): Promise<SelectUserInterface[]> => {
    return database
        .select()
        .from(usersSchema)
        .where(eq(usersSchema.id, id));
};

export const insertUsers = async (users: InsertUserInterface[]) => {
    const insertedRows = await database
        .insert(usersSchema)
        .values(users)
        .onConflictDoNothing()
        .returning();

    if (insertedRows.length !== users.length) {
        throw new DatabaseError("failed to insert all user-rows", true);
    }
};