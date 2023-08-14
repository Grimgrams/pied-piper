<script lang="ts">
    import type { PageData } from './$types'
    export let data: PageData

    $: ({ response } = data)
    async function runApi(){
        try {
            const response = await fetch('/runApi');
            if (response.ok) {
                const result = await response.text();
                console.log(result);
            } else {
                console.error('Error executing script');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
</script>

<p></p>

<!--<button on:click={runApi()}>Run</button>-->