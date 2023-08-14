import type {Actions, PageServerLoad} from "../../.svelte-kit/types/src/routes/$types";
import { prisma } from "$lib/server/prisma";
import {fail} from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
    return {
        journal: await prisma.journal.findMany(),
    }
}
export const actions: Actions = {
    addEntry: async ({ request }) => {
        const { body, topic } = Object.fromEntries(await request.formData()) as {
            body: string, topic: string
        }
        try {
            await prisma.journal.create({
                data: {
                    body,
                    topic
                }          
            })
        } catch (e) {
            console.log(e)
            return fail(500, {message: 'could not create entry'})
        }
        return {
            status: 201
        }
    },
}