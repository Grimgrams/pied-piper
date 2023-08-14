import { main } from '../src/lib/gpt4all/brain';

export async function get() {
    try {
        await main();
        return {
            status: 200,
            body: 'Script executed successfully',
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            status: 500,
            body: 'Error executing script',
        };
    }
}
