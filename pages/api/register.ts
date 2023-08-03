import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
import { createJWT, hashPassword } from "@/lib/auth";
import { serialize } from "cookie";

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
    console.log('made it to register');
  if (req.method === "POST") {
    const user = await db.user.create({
      data: {
        email: req.body.email,
        password: await hashPassword(req.body.password),
        // await can be used wherever we like, however - if we want to handle any 
        // errors that might arise we wont be able to do so using that syntax.
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
    });

    const jwt = await createJWT(user);
    // when we're passing the 'Set-Cookie' header,
    // we're telling the browser to set the following info as cookie after it's gets the response back.
    res.setHeader(
      "Set-Cookie",
      //The serialize() function converts a storable representation of a value. 
      //To serialize data means to convert a value to a sequence of bits, 
      //so that it can be stored in a file, a memory buffer, 
      //or transmitted across a network
      serialize(process.env.COOKIE_NAME!, jwt, {
        httpOnly: true,
        //httpOnly means that you can't access the cookies using js (the client), 
        //they're only processed trough the network on HTTP (server).
        path: "/",
        //Indicates the path that must exist in the requested URL for the browser to send the Cookie header.
        maxAge: 60 * 60 * 24 * 7,
        // for how long will the cookie live
      })
    );
    res.status(201);
    res.end();
  } else {
    res.status(402);
    res.end();
  }
}
