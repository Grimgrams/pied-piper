# Pied Journal
 A project for a recess hack hackathon  

## To Run
*** YOU WILL NEED A SUPABASE OR ANY OTHER CLOUD BACKEND TO RUN ON YOUR OWN
after cloning this project
* add .env file in the root, add DATABASE_URL="<your_key>"
```bash
npm install
npx prisma migrate
npx prisma db push
npx prisma generate
npm run dev
```

## Where is the AI?
Unfortunately, we did not implement the AI into this project properly due to the time constraints of the hackathon.
We had everything set but did not get past some errors.
