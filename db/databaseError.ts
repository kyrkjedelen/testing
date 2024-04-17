import {HTTPException} from "hono/http-exception";

export class DatabaseError extends Error {
    onInsert: boolean
    constructor(message: string, onInsert: boolean) {
        super(message);
        this.onInsert = onInsert;
    }

    toHttpException(showDetailed = false) {
        let message = this.onInsert
            ? "error when inserting to database"
            : "error when selecting from database";

        if (showDetailed) {
            message += ": " + this.message;
        }
        return new HTTPException(500, { message });
    }
}