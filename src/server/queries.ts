import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getImages() {
    const user = auth();

    if (!user.userId) throw new Error("Unauthorized");

    const images = await db.query.images.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
        orderBy: (model, { asc }) => asc(model.id)
    });

    return images;
}