### Getting Started Next.js, Server Components, PostgresDB with Drizzle, Prisma or without ORM.

<h4>Default is drizzle ORM since in my opinion it is the most efficient</h4>
<h4>Each branch contains different ORM</h4>

```bash
# If you using existing db try to run `introspect` command
npx drizzle-kit introspect:pg

# Generate migrations, when you have empty db or schema changes 
npx drizzle-kit generate:pg

# Seed DB
npm run seed

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