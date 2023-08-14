import { PrismaClient } from "@prisma/client";
let prisma = new PrismaClient()

if (process.env.NODE_ENV === "development"){
    // eslint-disable-next-line no-self-assign
     prisma = prisma
}

export { prisma }