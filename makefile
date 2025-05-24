dev:
	npm run start

build:
	npm run build

dbsetup:
	npx prisma generate
	npx prisma migrate dev