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

<div>
    <p>August 13, 2023: 10:15 am</p>
    <p>
        The journal entry reflects feelings of depression and low self-esteem. The individual feels inadequate and isolated, as if they don't fit in anywhere. They're struggling with negative thoughts about themselves and are overly concerned about how they might come across to others. This could suggest symptoms of depression and social anxiety.
    </p>
    <p>August 15, 2023: 4:30 pm</p>
    <p>The individual seems to have taken a positive step by making new friends and stepping out of their comfort zone. This could indicate a desire for social connection and an effort to overcome their feelings of isolation. However, it's important to note that even though they're trying not to care about others' opinions, their struggles from the previous entry might still be present to some extent.

        It's important to remember that online interpretations can only provide general insights and should not be used as a substitute for professional advice. If you or someone you know is struggling with mental health concerns, it's recommended to consult a licensed mental health professional who can provide personalized guidance and support.
    </p>


</div>

<!--<button on:click={runApi()}>Run</button>-->