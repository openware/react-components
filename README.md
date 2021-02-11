# react-components

Openware React components

## Develop
In this repo:   
1. Install required packages
```bash
yarn install
```
   
2. Build package (Notice that you need to run this command every time you need to apply updates !)   
```bash
yarn build
```
   
3. Create symlink:
```bash
yarn link
```
   
In repo where package will be used (for example BaseApp):
```bash
yarn link @openware/react-components
```
   
To prevent issues caused by React versions difference run next command:   
```bash
npm link ../react-components/node_modules/react
```
   
## Links

[NPM](https://www.npmjs.com/package/@openware/react-components)

StoryBook link template: {HASH}-sfqflsquko.chromatic.com
