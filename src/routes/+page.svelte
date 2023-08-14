<script lang="ts">
    import type { PageData } from './$types'
    export let data: PageData
    //import aipagee from '$lib'
    //import page2.svelte from '$lib'
 
    $: ({ journal } = data)

    
</script>
 
<main>
    <!--<a href="page.svelte">link</a> -->
 
    <h1 class="text-stone-100 font-bold text-6xl p-8 font-mono">
        Welcome To Piper Journal
    </h1>
 

    <a href="/aipage" class="text-green-700 bg-emerald-300 m-2 rounded-xl font-bold font-mono p-4 shadow-2xl " >AI HEALTH EVALUATION -> </a>


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

                
                <h2 class="text-stone-100 font-bold font-mono  bg-emerald-600 p-3 rounded-xl">Journal Entries: </h2>
                {#each journal as journal}
                <article>
                    <div class="bg-teal-700 py-1.5 m-3 rounded-xl">
                        <header class="font-bold font-mono text-stone-100 " >{journal.topic}</header>
                        <p class="text-stone-100 font-mono">{journal.body}</p>
                    </div>
                    <form action="?/removeEntry&id={journal.id}" method="POST">
                        <button class="text-green-700 bg-emerald-300 m-2 rounded-xl font-bold font-mono p-4 shadow-2xl " type="submit">Remove Entry</button>
                    </form>
                </article>
                    {/each}
 
            </div>
    </div>
 
    </div>
 
</main>
 
 
<style >
 
@tailwind base;
@tailwind components;
@tailwind utilities;
 
 
 
main{
 
    text-align: center;
    width: 100%;
    height: 1060px;
    position: relative;
    background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(54,232,159,1) 100%); 
}
 
.flexy{
    margin: 3%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
    /*border-color: rgb(12, 204, 108);
    border-width: 8px; */
}
 
 
/*.objectives{
    width: 50%;
    text-align: left;
    margin: 5%;
    padding: 2.5%;
    background-color: rgb(82, 231, 139);
    border-color: black;
    border-width: 8px;
    height: 630px;
}  */
 
/*.labell{
    font-weight: 500;
} */
 
.Evaluation{
    height: 630px;
    width: 50%;
    margin: 5%;
    padding: 2.5%;
    background-color: rgb(69, 69, 133);
    border-color: black;
    border-width: 8px;
 
} 
 
.svelettings{
    height: 630px;
    width: 50%;
    margin: 5%;
    text-align: center;
    border-color: black;
    border-width: 8px;
    align-items: center;
    background-color: rgba(73, 66, 175, 0.315);
}
 
 
.entrylabel{
    font-weight: bolder;
    font-family: 'Courier New', Courier, monospace;
}
 
.maintype{
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    color: black;
    border-color: rgb(37, 45, 53);
    border-width: 6.7px;
    background-color: rgb(209, 209, 212);
    width: 99%;
    padding: 2.5%;
    height: 530px;
}
 
.submitentry{
 
    text-align: center;
    width: 30%;
    border-color: black;
    border-width: 2px;
    color: black;
    margin: 1%;
    background-color: rgb(108, 80, 207);
}
 
</style>