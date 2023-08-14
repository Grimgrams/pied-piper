# Pied Piper
 A project for a recess hack hackathon  

## AFTER newest push
after converting to sveltekit
 ### where is everything?
 * files got moved... 
 * App.svelte => src/routes/+page.svelte
 * main.ts => .svelte-kit/generated/client/app.js (dont worry about this file)
 * app.css is the same
 * vite-end.d.ts => app.d.ts
 * index.html => src/app.html

# Listen
When creating a new page with a link to another do THIS
* create the directory name in routes
* add +page.svelte file in the respected folder
* go to src/lib/runApi.ts and add `export const <name_for_link> = 'path_in_routes'`
* import it on the svelte file you need the link on `import { name_for_link } from '$lib'`
* add it as a link `<a href="{name_for_link}">link</a>`

creating global components ex navbar
 when creating global components use the src/lib/components/ folder and then reference them where ever

# IMPORTANT
if you decide to change the input for the journal make sure that the 'name' attribute is body for body and topic for topic.