#see the live site here: [angular7-sample-app-dashboard](https://jrohatiner.github.io/angular7-sample-app/docs/angular7-sample-app/login/ "Dashboard Login")
username techie@email.com password techie

## Getting Started

An Nx workspace is an Angular CLI project that has been enhanced to be enterprise ready. Being an Angular CLI project means it will be handy to have the Angular CLI installed globally, which can be done via npm or yarn as well.

```
npm install -g @angular/cli
```

> Note: If you do not have the Angular CLI installed globally you may not be able to use ng from the terminal to run CLI commands within the project. But the package.json file comes with npm scripts to run ng commands, so you can run npm start to ng serve and you can run npm run ng <command> to run any of the ng commands.

After you have installed the Angular CLI, install `@nrwl/schematics`.

```
npm install -g @nrwl/schematics
```

After installing it you can create a new Nx workspace by running:

```
create-nx-workspace angular7-sample-app
```

You are good to go!
