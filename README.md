### Getting Started

```bash
# Generate Prisma Client
npx prisma generate

# Run migration (IMPORTANT!!!! - this fill remove User and users tables from your DB)
npx prisma migrate dev

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