# Supplier Management
### ABAC 2022-2 Web Application Development Final Exam

#### Author: CHUANGJIAN XIA(6328003)

The project is a Supplier Management Web Application, built with Next.js and mongoDB. The web app is hosted on Vercel. [Click here](https://web-final-6328003.vercel.app/suppliers) to access the app.


## Contents
- [Prerequisites](#prerequisites)
- [Installing](#installing)
- [BuildWith](#buildwith)
- [Functionality](#functionality)
- [Conclusion](#conclusion) 


## Prerequisites
- Next.js
- npm or yarn


## Installing
- Install yarn
```
npm install --global yarn
```

- Create a next.js App
```
npx create-next-app@latest
# or
yarn create next-app
# or
pnpm create next-app
```

- Clone the repository
- Running the development server
```
npm run dev
# or
yarn dev
```

## BuildWith
- Next.js - The web framework used
- MongoDB - The database used for project
- Vercel - The web app is hosted


## Functionality
- Display existing suppliers
- Add new suppliers record
- Delete suppliers record
- Edit/Modify suppliers record
- The suppliers list sorted by name

## Remark
- The fetch method not work well with the vercel, report error 500
- In this project use `axios` to instead of `fetch`(idea from ChatGPT)


## Conclusion
The project completed all the required function. And Easy to Use and Manage.
