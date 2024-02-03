### Getting Started Next.js React Server Components (RSCs) PostgresDB with Drizzle, Prisma, or without ORM.

To start with this example you gonna few things:
1. Clone this repo
    - `git clone https://github.com/NazariiMural/RSCs_with_drizzle_prisma_orms.git`
2. add .env file
    - `touch .env.local`
3. Setup Postgres database 
    - If you don't have or don't wanna setup local DB, the best choice to use DB as service.
    - Currently the best choices of the Free Tire DB are https://neon.tech/ or https://www.elephantsql.com/
    - [neon.tech](https://neon.tech/) is fully managed serverless Postgres with a generous free tier - in my opinion the **best** service right now it's free and tons of features.
4. Add connection string to the .env file
    - `DATABASE_URL="***********secret"`
    - `DIRECT_URL="***********secret"`
5. Chose your ORM:
    - Each branch contains different ORM
    - Default ORM is **drizzle ORM** since in my opinion, it is the most efficient ans easy to use.


```bash
# Generate Prisma Client
npx prisma generate

# Run migration (IMPORTANT!!!! - this command will remove User and users tables from your DB)
npx prisma migrate dev

# Seed DB
pnpm run seed

# Install deps
pnpm install
# or
yarn install
# or
npm install

# Run project
pnpm dev
# or
yarn dev
# or
npm run dev
```