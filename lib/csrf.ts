// lib/csrf.ts
import { nextCsrf } from "next-csrf";

const { csrf, setup } = nextCsrf({ secret: "def" }); // use your own secret key

export { csrf, setup };
