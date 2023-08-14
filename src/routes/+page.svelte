
<script lang="ts">
    import type { PageData } from './$types'
    export let data: PageData

    $: ({ journal } = data)
</script>


<h1 class="text-4xl font-bold underline">
    Welcome To Piper Journal
</h1>

<div class="p-15 grid">
    <!--
    <div class="">
        <h2>Journal Entries</h2>
        {#each journals as journal}
        <article>
            <header>{journal.topic}</header>
            <p>{journal.body}</p>
            <form action="?/removeEntry&id={journal.id}" method="POST">
                <button type="submit">Remove Entry</button>
            </form>
        </article>
            {/each}
    </div>
    -->
    <form action="?/addEntry" method="POST">
        <h3>New Entry</h3>
        <input class=""  name="topic" placeholder="Topic..." autocomplete="off" />
        <input class=""  name="body" placeholder="What's on your mind?" autocomplete="off"/>
        <button type="submit">Add Entry</button>

    </form>
</div>



<style >

</style>