import { PrismaClient } from "@prisma/client";

const dbClient = new PrismaClient();

// dbClient.user.findUnique({
//   where: {
//     username: "test",
//   },
//   select: {
//     id: true,
//   },
// });

export default dbClient;
