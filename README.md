## Figure-Chan Application

Hello! Welcome to Figure-Chan. A simple fullstack application that documents figure collections from users.

This application was built using a variety of tools and libraries:

Frontend:

- React + Vite + TS
- ChakraUI
- MaterialUI
- ReduxJS
- SaSS
- FontAwesome for Icons

Backend:

- ExpressJS
- PostGreSQL (Prisma ORM)
- Passport JWT + Local (Token Authentication)

Figma Project:
https://www.figma.com/design/8vJscjzhkcjKQW07PIDr5l/Figure-Chan?m=auto&t=VKyPiMwxdBbjsBsh-6

DBDiagramIO:
https://dbdiagram.io/d/Figure-Chan-695d923539fa3db27b48b721

### How to Run

To run this application:

- Clone Repo in your local system

Run Client:

- Navigate to figure-chan-client
- Run `npm install` to install package dependencies
- Populate .env with cloudinary credentials
- Run `npm run dev` to run application
- Navigate to localhost:5173 on local browser

Run Server:

- Navigate to figure-chan-server
- Populate .env file with database credentials and url
- Run `npm run devstart`

Run Prisma Client

- Run `npm run prismastart`
- Navigate to localhost:51212

Troubleshooting Prisma:

https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/prisma-postgres
