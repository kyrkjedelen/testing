import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import userRoute from "@routes/users/users";
import {HTTPException} from "hono/http-exception";

const serverHostingPort = 3000;

const app = new Hono();


app.route("/users", userRoute);


app.onError((error, c) => {
  if (error instanceof HTTPException) {
    return error.getResponse();
  }
  // Generic internal server error
  return new HTTPException(500).getResponse();
});

console.log(`Server is running on "localhost:${serverHostingPort}"`);

serve({
  fetch: app.fetch,
  port: serverHostingPort
});