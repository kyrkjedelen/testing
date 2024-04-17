import { Hono } from "hono";
import { getUsersFromId } from "@db/access/users";
import { HTTPException } from "hono/http-exception";
import { SelectUserInterface, InsertUserInterface } from "@db/schema/users";

type UserVariables = {
    key: SelectUserInterface["id"];
    select: SelectUserInterface[];
    insert: InsertUserInterface[];
}

const userRoute = new Hono<{ Variables: UserVariables }>();

userRoute.use("", async (c, next) => {
    const idQuery = c.req.query("id");
    if (!idQuery) {
        throw new HTTPException(400, { message: "Missing id query"});
    }
    const id = parseInt(idQuery);
    if (isNaN(id)) {
        throw new HTTPException(400, { message: "Invalid id query" });
    } else if (id < 0) {
        throw new HTTPException(400, { message: "Invalid id query" });
    }
    c.set("key", id);
    await next();
});

userRoute.use("", async (c, next) => {
    const id = c.get("key");
    const users = await getUsersFromId(id);

    if (users.length === 0) {
        throw new HTTPException(404, { message: `User with id ${id} not found` });
    } else if (users.length > 1) {
        // TODO: legg til kode for å varsle utviklere dersom det er fler enn en bruker per id. Det burde aldri skje.
        throw new HTTPException(500, { message: "Error when accessing database" });
    }
    c.set("select", users);
    await next();
});

userRoute.get("", async (c) => {
    const users = c.get("select");
    return c.json(users);
});

userRoute.post("", async (c) => {
   return c.text("Post!");
});


export default userRoute;