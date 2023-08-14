// AI pulls from database gets id and body then evaluates uploads it to own table to be fetched
// @ts-ignore
import {GPT4All} from 'gpt4all';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function main() {
    try {
        const gpt4all = new GPT4All('gpt4all-lora-unfiltered-quantized', true);
        await gpt4all.init();
        await gpt4all.open();

        const journalEntries = await getJournalEntries();

        for (const entry of journalEntries) {
            const { id, body, created_at } = entry;
            const response = await gpt4all.prompt(body);

            await saveResponseToDatabase(id, response, created_at);
        }

        gpt4all.close();
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await prisma.$disconnect();
    }
}

async function getJournalEntries() {
    try {
        return await prisma.journal.findMany();
    } catch (error) {
        console.error('Error fetching journal entries:', error);
        throw error;
    }
}

async function saveResponseToDatabase(id: bigint, response: any, timestamp: Date) {
    try {
        await prisma.response.create({
            data: {
                // @ts-ignore
                journalId: id,
                responseText: response,
                timestamp: timestamp

            },
        });
        console.log(`Response saved for journal entry with ID ${id}`);
    } catch (error) {
        console.error('Error saving response to database:', error);
        throw error;
    }
}

main();
