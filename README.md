# JS Excersises

This repository contains JS excersises covering different JS features.

All you need to do is to make tests green.

> Important! Use *ES6*  `import`/`export` syntax for creating modules

# Setting up project

All you need to do is to install dependecies.

```bash
$ npm install
```

After that, you are good to go with writing your code!


## NVM
You can use `nvm` for setting the same node version as this project is targeted for.

You can do this by simply running following command in your terminal (if you have `nmv` installed, of course):

```bash
$ nvm use
```

If this command throws you an error, you probably do not have target node version installed. Simply install missing one and try command above again.

# Running tests

### Running all tests

```bash
$ npm run test
```

### Running all tests in watch mode

```bash
$ npm run test:watch
```

### Running specific test folder

```bash
$ npm run test -- excersies/words_count
```

or for `watch mode`

```bash
$ npm run test:watch -- excersises/words_count
```
# Have fun!
