Use pnpm.


Start:
pnpm install

Setup database connection:
Set all these enviroment variables:
DATABASE_HOST
DATABASE_NAME
DATABASE_USER
DATABASE_PASSWORD
DATABASE_ENABLE_SSL (either true or false, probably true)

Generate migration files:
pnpm run db:generate

Migrate current migration files:
pnpm run db:migrate

Run:
pnpm run dev
