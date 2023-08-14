<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  /* these are just here so i don't forget
  import { PrismaClient } from '@prisma/client'
  const prisma = new PrismaClient()*/
</script>

<main>

  <form class="entry">
    <label class="entrylabel"for="entry">New Entry: </label><br>
    <textarea class="maintype" rows="4" cols="50" ></textarea>

    
    <div class="submitentry" ><input  type="button" value="Submit"></div>


  </form>


</main>

<!-- 
<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
-->