# The Things They Carried/Angular Edition



## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Angular2](https://github.com/angular/angular)
* [Angular-CLI](https://github.com/angular/angular-cli)

## Installation

**Step 1**: Clone this repository to your local computer

```console
git clone https://github.com/katharynreed/angular2-tcc
```

**Step 2**: Install all development and production dependencies from the project root directory

```console
npm install
```
```console
bower install
```

**Step 3**: Use Angular-CLI to run a local server instance

```console
ng serve
```

**Step 4**: Visit the app at [http://localhost:4200](http://localhost:4200).

## More information on development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Planning

1. Configuration/dependencies
  * Install **bootstrap** and save as a dependency in bower.json for easier styling
  ```console
  bower install bootstrap --save
  ```
  * Add **bootstrap** to angular-cli.json under "styles"

2. Specs
  * **Spec 1**: Users can create a food to track by name, calories, and details of a food
  * **Spec 2**: If user does not input name or calories of food they will be unable to submit track request
  * **Spec 3**: Users can view a full list of all foods
  * **Spec 4**: Users can edit individual foods
  * **Spec 5**: Users can sort food entries by calorie count

3. Integration
  * `food.model`: model for `food` objects
  * `app.component`: base page looping through all entries
    * `new-food.component`: component to add new log entries
    * `food-detail.component`: component loaded for each `log` object to display details
      * `edit-food.component`: component on each `log-tile` to allow editing of specific `log` objects
    * `calorie.pipe`: custom pipe to sort `log` objects

4. UX/UI
  * Include bootstrap
  * Develop custom style

5. Polish
  * Make README awesome

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

MIT License. Copyright 2017 Kate Reed
