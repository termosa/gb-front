# Fragrant Jewels Front-end

## Build

```sh
# BIT_TOKEN should be replaced with the real one
$ docker build --build-arg BIT_TOKEN=00000000-0000-0000-0000-000000000000 --build-arg BASE_API_URL=http://endpoint-for-nextjs.com --build-arg CLIENT_API_URL=http://endpoint-for-browser.com . -t fj-front

$ docker run -it --rm -p 3000:3000 fj-front
```


# NextJS Doc
---

# website-3.0
New website using react components and new API


## Getting started

Before you can start developing your awesome application you need to install the project's dependencies. Make sure you have Node (>= 10.13.0) and NPM installed and run:

```sh
$ npm install
```

### ⌨️ Development

Once all dependencies have been installed you can start development. To start a development server on [http://localhost:3000](http://localhost:3000) run:

```sh
$ npm run dev
```

### 🖥 Production

To run your application in production make sure to run a build first:

```sh
$ npm run build
```

And then start you application with a provided port number (defaults to 3000 if not provided):

```sh
$ PORT=8080 npm run start
```

### 🖨 Static

You can export your application to a static website as well:

```sh
npm run export
```

This will render static HTML pages into `./out`

### 🧐 Linters

The boilerplate provides a couple of linters to help you keep an eye on code consistency and type safety. There are three linters: one for CSS, one for TypeScript and one for type safety. You can use each of them separately using the following commands:

```sh
$ npm run lint:css
$ npm run lint:ts
$ npm run lint:types
```

TIP: To get the most out of your linters install the corresponding (Stylelint, TSLint) plugins for your editor or IDE

**Prettier**

Prettier helps you to enforce consistent (opinionated) code style. If possible, you can tell your editor to format you code when you save a file. If you are not able to do this, you can run prettier manually using:

```sh
$ npm run prettier
```

### 🤖 Tests

You can write your tests using Jest and Enzyme. You can run all test with the following command

```sh
$ npm run test
```

If you want to follow test driven development you can use:

```sh
$ npm run test:dev
```

## Modules

### TypeScript

TypeScript and Babel are pre-configured with custom module resolvers.
This means you can use absolute imports with custom namespaces by default for the following modules:

```js
/* import common library */
import lib from '@common/<folder>/<lib>'
/* import component */
import Counter from '@components/counter/Counter'
/* import container */
import HomepageCounter from '@containers/counter/HomepageCounter'
/* import store files */
import { CounterAction } from '@store/counter/counterActions'
```

### SCSS

By default the path `./src/common/css` is configured as an included path for our scss loader.
This means you can import any of this folder's files directly without the relative or absolute path:

```css
@import 'variables';
@import 'colors';
```
