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
    addResponse: async ({ request }) => {
        const { id, response, entry } = Object.fromEntries(await request.formData()) as unknown as {
            id: number ,response: string, entry: string
        }
        try {
            await prisma.response.create({
                data: {
                    id,
                    response,
                    entry
                }
            })
        } catch (err){
            console.log(err)
            return fail(500, {message: 'could not upload response and prompt'})
        }
        return {
            status: 201
        }
    },
    removeEntry: async ({ url }) => {
        const id = url.searchParams.get("id")
    if (!id){
        return fail(400, { message: "request is invalid"})
    }
    try {
        await prisma.journal.delete({
        where:{
        id: Number(id)
            }
        })
    } catch (err){
            console.log(err)
            console.log("Damn some shit went wrong :(")
            return fail(500, { message: "something went wrong deleting your entry"})
        }
    return {
        status: 200
    }
    }
}