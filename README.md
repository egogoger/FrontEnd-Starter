# FrontEnd Setup 2020
![](https://img.shields.io/github/package-json/dependency-version/EgorBedov/FrontEnd-Setup/react?logo=react) ![](https://img.shields.io/github/package-json/dependency-version/EgorBedov/FrontEnd-Setup/redux?logo=redux) ![](https://img.shields.io/github/package-json/dependency-version/EgorBedov/FrontEnd-Setup/dev/typescript?logo=typescript)
![](https://img.shields.io/github/package-json/dependency-version/EgorBedov/FrontEnd-Setup/dev/webpack?logo=webpack) ![](https://img.shields.io/github/package-json/dependency-version/EgorBedov/FrontEnd-Setup/dev/eslint?logo=eslint)

Start your next web application with up-to-date development tools without a struggle of setting them up. Just download it and you're ready to go!

## Setups
List of supported setups:
* React + Redux + Typescript ([branch](/../../tree/React-Redux-TS/))

Default technological stack:
* Webpack module bundler
* ESLint linter
* Babel transpiler

## Usage
#### Install the setup
```bash
git clone https://github.com/EgorBedov/FrontEnd-Setup
cd FrontEnd-Setup
npm install
```

#### Run webpack
```bash
npm start
```

#### Run server
```bash
node src/server.js
```
> Switch to different terminal for that purpose

#### Clean setup
Running this script will remove default pages, components, models, actions and reducers. The script itself will be removed as well.
```bash
./clean.sh
```
>It may be necessary to `chmod 755 clean.sh` before running

## File structure
You can change the file structure whichever way you want and if you do so, don't forget to change aliases paths in both [Typescript config](../blob/React-Redux-TS/tsconfig.json) and [Webpack config](../blob/React-Redux-TS/webpack.config.json).
```bash
├── dist/               // Auto generated output files
├── node_modules/
├── src
│   ├── components/     // Create your components here
│   ├── index.html
│   ├── main.jsx
│   ├── models/         // Create your models here
│   ├── pages/          // Create your pages here
│   ├── server.js       // Static server
│   ├── store
│   │   ├── actions/    // Redux's actions and action creators
│   │   ├── reducers/   // Redux's reducers
│   │   └── store.ts    // Redux's store
│   └── utils
│       ├── assets.d.ts     // Assets declarations (TS)
│       ├── constants.ts    // Global constants
│       ├── interfaces.ts   // Global interfaces
│       └── variables.scss  // Global CSS variables
├── static/             // Static files
├── .eslintignore
├── .eslintrc.json      // ESLint config
├── .gitignore
├── clean.sh            // Script to delete old files
├── package.json
├── tsconfig.json       // Typescript config
└── webpack.config.js   // Webpack config
```

## License
[MIT](LICENSE)
