<p align="center">
  <img src="https://user-images.githubusercontent.com/6391763/103397026-621bde00-4b5c-11eb-9869-dfd839b52879.png" alt="Logo"/>
</p>

<p align="center">
  <a href="https://twitter.com/nirmalyaghosh23">
    <img alt="Twitter: Nirmalya Ghosh" src="https://img.shields.io/twitter/follow/nirmalyaghosh23.svg?style=social" target="_blank" />
  </a>
</p>

This is an application for building HTML pages using Next.js, TailwindCSS and Chakra UI. This application consists of the following packages:

1. [**builder**](https://github.com/ghoshnirmalya/writy/tree/main/packages/builder): Next.js application built with Chakra UI.
2. [**backend**](https://github.com/ghoshnirmalya/writy/tree/main/packages/sections): TailwindCSS components built using React.js.

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Overview](#overview)
- [Requirements](#requirements)
- [Packages](#packages)
  - [1. **Builder**: Next.js application](#1-builder-nextjs-application)
  - [2. **Sections**: TailwindCSS components](#2-sections-tailwindcss-components)
- [Installation](#installation)
  - [1. **Clone the application**](#1-clone-the-application)
  - [2. **Install necessary dependencies for the frontend application**](#2-install-necessary-dependencies-for-the-frontend-application)
  - [3. **Start the packages**](#3-start-the-packages)
- [Deployment](#deployment)
  - [Frontend application](#frontend-application)
- [Other interesting repositories](#other-interesting-repositories)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Overview

This application is built using the following technologies:

1. [Chakra UI](https://chakra-ui.com/)
2. [Emotion](https://emotion.sh/)
3. [Next.js](https://nextjs.org/)
4. [TailwindCSS](https://tailwindcss.com/)
5. [TypeScript](https://www.typescriptlang.org/)

## Requirements

1. [Node.js](https://nodejs.org/)
2. [npm](https://www.npmjs.com/)

## Packages

### 1. [**Builder**](https://github.com/ghoshnirmalya/writy/tree/main/packages/builder): Next.js application

This application is the primary user-facing application. Once it’s up and running (see [Installation](https://github.com/ghoshnirmalya/writy#installation) section), it’s available on http://localhost:3002/.

### 2. [**Sections**](https://github.com/ghoshnirmalya/writy/tree/main/packages/sections): TailwindCSS components

[Hasura](https://hasura.io/) is an open source engine that connects to our databases & micro-services and auto-generates a production-ready GraphQL backend. It’s very easy to get Hasura up and running on our local system. All the migrations are set up in the [migrations](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone/tree/master/packages/backend/migrations) directory.

## Installation

### 1. **Clone the application**

```sh
git clone https://github.com/ghoshnirmalya/writy
```

### 2. **Change directory**

```sh
cd writy
```

### 3. **Install necessary dependencies for the frontend application**

```sh
yarn bootstrap
```

### 4. **Start the packages**

From the root directory, we can run the following command to start both our packages:

```sh
yarn dev
```

The above command will start the frontend application on [http://localhost:3002/](http://localhost:3002).

## Deployment

### Frontend application

Click on the button below to deploy the Builder package on Vercel. You'll need to [sign up for a free Vercel account](https://vercel.com/signup/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fghoshnirmalya%2Fwrity&project-name=writy&repo-name=writy&demo-title=Writy&demo-description=Generate%20beautiful%20HTML%20files%20without%20writing%20any%20code.)

## Other interesting repositories

1. [Hasura Next.js Boilerplate](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone)
2. [Strapi Next.js Boilerplate](https://github.com/ghoshnirmalya/nextjs-strapi-boilerplate)
3. [React Search Box](https://github.com/ghoshnirmalya/react-search-box)
4. [LinkedIn Clone using Create React App](https://github.com/ghoshnirmalya/linkedin-clone-react-frontend)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
