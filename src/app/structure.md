# Structure is important

- it makes your app 
  - enjoyable to work with
  - controls complexity


## Best Practices

- `Use the Angular CLI`
- `File Naming`
- `Folder Structure`
- `One Item Per File`
- `Single Responsibility Principle`
  - the importance of breaking files and services up
    - into small pieces
      - with just a single responsibility for each piece
- `Symbol Naming`
  - `Naming Components, Services, Classes, Properties, Methods, Variables, Constants, etc`
  - symbol is anything you give a human readable name to
  - make sure your `file naming` and `symbol naming` are consistent
    - loading-spinner.component.ts > LoadingSpinnerComponent
  - `naming constants`
    - common practice in a lot of languages is to use UPPER_CASE
      - but in Angular apps,
        - just use camelCase
          - like all of the other variables
    - select the constant 
      - and hit F2 to `Rename the Symbol` in VS Code
      - or Shift+F6 Rename in Webstorm
        - will take care of renaming it everywhere it is used
    - Typescript and most IDEs
      - will tell us if we try to reassign our constants
      - also could setup different Syntax Highlighting for constants
  - `Class Naming`
    - upper Pascal Case
      - `UserRepositoryService`
    - Suffix service classes with `Service`
    - Suffix component classes with `Component`
  - `Import ordering`
    - import 3rd party imports first
    - followed by a blank line
    - followed by the imports from our app
    - this allows you to easily/quickly identify 
      - 3rd party imports vs your own imports 
- `Preferring Immutability`
  - good recommendation in all your javascript code
  - refers to not mutating existing objects in memory
    - but rather creating new objects
  - helps to avoid `certain classes of bugs`
    - such as bugs that occur 
      - when a value 
        - is `unexpectedly changed`
          - from `somewhere else` 
            - in code
  - help with certain types of change detection in Angular
  - `this.currentUser = { ...this.currentUser, classes: this.currentUser.classes.concat(classId) }`
    - concat function is similar to the push function 
      - except that it returns a new array
        - instead of mutating the existing array
  - `this.currentUser = { ...this.currentUser, classes: this.currentUser.classes.filter(c => c.classId !== classId) };`

```typescript
saveUser(user): Observable<any> {
    // ...
    this.currentUser = user;
   //  ...
}
```
- while this is not mutating the currentUser variable, it is actually replacing it
  - it does open us up to potential mutation
    - from outside the function
      - our currentUser variable is now pointing to the same user object that was passed in
- so if the code which calls saveUser() method
  - were to change its local user object after calling saveUser
    - it would actually change our currentUser object in saveUser
      - and that could lead to pretty hard-to-find bug
      - and may end up messing with change detection
        - if you were going to use
          - a more advanced type of change detection 
            - such as OnPush
- `this.user = {...user, classes: [...classes] };`

- `Using Small Functions`
  - so they never get `too large` and `unwieldy`
  - it is easy to write a large function
    - that is hard to read due to its size and complexity
  - if function > 5-10 lines
    - would it be more legible if that function
      - was broken into a couple
        - of smaller functions
  - maybe create a new function 
    - that `only returns a value` 
      - and give that function `a meaningful/expressive name`
  - and in the parent function
    - then return the new function
      - `return this.myfunction(value);`
  - use early returns
  - try to keep all of your methods nice and short for easy readability
- Using Typescript's `strict mode`
  - refers to the Typescript validation
    - that is performed
      - when your angular app is compiled
  - tsconfig.json
    - where you configure 
      - typescript
      - and some Angular-specific compiler options
        - at the bottom there are a few strict mode flags

```json

{
//  ...
  "strict": true,
//  ...
},
//...
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
```
- these are turned on by default
  - causes you to write more type safety in the app 
  - it is a best practice to leave these turned on
  - it is lazy to turn these off 
    - and also opens up your app to potential hard to find bugs
    - and an opportunity for bugs to creep in
  - it allows you to catch more bugs during compilation 
    - in development
      - rather than letting them
        - slip through to production

- Error TS7008: Member 'user' implicitly has an 'any' type
  - in typescript if you do not specify a type for your variables
    - they are given a type of any
      - which means you can assign any value of type
        - to that variable
  - this is generally not a safe practice
  - `user!`
    - tells typescript that 
      - this variable does not actually need to be initialized
  - initialize arrays to []


- `Rules for a component template`
  - never access a service directly from within a template
    - move the call into 
      - a getter property 
      - or a method on the component class
- 


## Directory Structure
- `src/app`
  - our root component `AppComponent` lives here
- `src/app/core`
  - items related to the core logic functionality of the app
- `src/app/core/services`
  - all logic not related to the component's view/template
    - should be delegated to a service's methods
      - all services will live here
- `src/app/core/services/interceptors`
  - used to examine, modify, or allow 
    - each `request` & `response`
- `src/app/shared`
  - this module is imported by all feature modules
    - that need to make use of the 
      - components,
      - directives,
      - pipes
      - and other code
        - contained within the `SharedModule`
  - this folder also contains `data.ts` 
    - which contains `hard-coded data`
      - that can be used 
        - to build/design the user-interface
      - and will be used by 
        - extending the `DataService`
        - instead of extending `ApiService`
          - in the service class 
            - which is making the request.
    - This file is intended to 
      - `only be used` 
        - during `local development` 
      - and `not used` 
        - during `production`
- `src/app/shared/models`
- `src/app/assets`
  - store images
  - and any 3rd party libraries



## Angular Module Organization

- Angular Modules
  - the different types of modules
    - we may want to create
- Creating a core module
- Creating a shared module
- and Creating feature modules


- An angular application is made up of
  - a group of components
    - parent component (AppComponent)
      - that contains one or more components
        - which may contain other components
- Think of it as a tree
  - an Angular module wraps
    - all this together including
      - components,
      - services,
      - directives,
      - pipes
      - and anything that they use
- As applications grow and get bigger
  - it is useful to break this up
    - into multiple modules
- Allows for a high level of encapsulation
  - where everything within a module
    - is packaged up together
      - and you only expose what is necessary
        - to external modules
- and then another great reason
  - to create feature modules
    - is that feature modules 
      - are easily lazy loaded
        - which helps with the performance
          - of your application
- `feature modules`
  - is a best practice
    - so you `can load them`
      - `lazily`
      - or `eagerly`
- Different types of modules
  - `App` Module
  - `Core` Module
  - `Shared` Module
  - `Feature` Modules
- The `Core` Module
  - should contain 
    - any shared singleton services
      - that are shared 
        - across multiple modules
          - in your app
  - This is because 
    - the Angular Injector
      - creates `a new instance`
        - of a service
          - for every lazily loaded module
            - that `provides` 
              - the service.
- Most of our feature modules
  - should be lazily loaded
- this is important
  - So application wide singleton services
    - need to be declared
      - in only one module
        - and the core module 
          - is the right place
- The core module should also contain
  - any app-level components
    - This does not mean
      - components that are shared
        - throughout the application
          - but rather components
            - that are only used
              - by the top level AppComponent
- A good example of this 
  - is an application's  Navigation Bar
- The `Shared` Module
  - This is a place
    - to declare
      - application-wide shared components
  - should contain any shared
    - components,
    - directives,
    - and pipes
  - Example: `LoadingSpinnerComponent`
    - if that component is used throughout the application
- `Feature` Modules
  - you will likely have `multiple feature modules`
    - on your application
      - and these will typically correspond
        - with `the feature-level folders`
  - these are modules that are used
    - to group together
      - `feature-level` 
        - services,
        - components,
        - directives,
        - pipes
- As mentioned,
  - the CoreModule
    - should be created to provide
      - application-wide singleton services
      - and app-level components
- Using a CoreModule keeps
  - the main app/ application folder
    - from becoming too cluttered
- the UserRepositoryService is a singleton service
  - that is used throughout our application
  - and it is important that 
    - we only have one instance
      - of the service
        - so it remains the same throughout our application
          - so the CoreModule is the right place for that
- The NavBarComponent
  - is also going to be in the CoreModule
  - and is only used in the top level AppComponent
    - which qualifies it to be in the CoreModule
