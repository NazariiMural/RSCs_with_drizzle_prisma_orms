### Getting Started Next.js, Server Components, PostgresDB without ORM

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