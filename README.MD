**GENERAL**

This is starting kit that allows to start developing on already configured `NODE.js` development server
It has already build-in structure of application, according to components approach
and examples of further development direction.

**NOTE**

Main goal of this starting kit is quick starting developing on working server for students, it's not an sample app or best practices,
so students can modify, extend configs according to their needs during productivity app iteration. All improvements,
that do not mentioned in phases acceptance criteria will be evaluated in the last phase.

**OVERVIEW**

`scripts` folder should contain scripts. Note - in a scope of this iteration it's only `start.js` file

`- start.js` for launching dev server with configuration that described inside `webpack.config.dev.js`

`package.json` has all project's dependencies

`src` folder should contain all project's sources

`- app` folder should contain all components. All they should be splitted into a logical parts. Components folder should contain common and reusable components.
All specific components should be inside pages folder. For example - app/pages/task-list/task etc.
As a result each component should contain index.js file for exporting component, component itself, files with unit test for this component and template for this component if required.

`assets` folder should contain assets of your application

`- less` folder should contain all common styles and helpers

`- images` folder should contain all images of the project

`- fonts` folder should contain all custom fonts

`static` folder used for holding *.html files while building markup on first phase, after students will start using template engine and all html
should be moved to a separate views inside the components and static folder can be deleted.

**STEPS TO INSTALL AND RUN DEVELOPMENT ENV**
- install NODE.js from official site https://nodejs.org/
- run CMD and make sure that you are in root of a project
- run `npm install` - this will install all required packages
- run `npm start` command - this will rise server on http://localhost:3000
