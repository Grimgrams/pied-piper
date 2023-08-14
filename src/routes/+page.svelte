
<script lang="ts">
    import type { PageData } from './$types'
    export let data: PageData

    $: ({ journal } = data)
</script>


<h1 class="text-4xl font-bold underline">
    Welcome To Piper Journal
</h1>

<div class="p-15 grid">

    <div class="" data-sveltekit-preload-data="false">
        <h2>Journal Entries</h2>
        {#each journal as journal}
        <article>
            <header>{journal.topic}</header>
            <p>{journal.body}</p>
            <form action="?/removeEntry&id={journal.id}" method="POST">
                <button type="submit">Remove Entry</button>
            </form>
        </article>
            {/each}
    </div>

    <div class="flexy">
        <!--  -->
        <div  class="w-4/6 rounded-xl p-3 bg-#0d9488 shadow-2xl m-2 space-x-6">

            <form action="?/addEntry" method="POST" class="entry">
                <label class="text-stone-100 bg-emerald-600 font-bold font-mono rounded-xl p-3 mt-5"for="entry">New Entry: </label><br>
                <textarea class="h-11 rounded-xl p-3 my-2 mt-5"  name="topic" placeholder="Title" autocomplete="off"></textarea><br>
                <textarea class="h-96 rounded-xl p-3 " rows="4" cols="50" name="body" placeholder="Type your fitness journal entry here..." autocomplete="off"></textarea>


                <div class="text-green-700 bg-emerald-300 m-2 rounded-xl font-bold font-mono p-4 shadow-2xl " ><input  type="submit" value="Submit"></div>


            </form>

        </div>

        <div class="w-4/6 rounded-xl p-3 bg-#0d9488 shadow-2xl m-2 space-x-6">

            <div class="">
    <a href="/progress">Progress</a>
</div>



<style >

</style>