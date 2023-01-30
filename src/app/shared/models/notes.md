# Creating the SharedModule

- as you are building out a large Angular application
  - you are going to want
    - to break your functionality
      - of the entire application
        - into different modules
          - usually based on the features
            - HomeModule
            - ArticleModule
- You may hit a circular dependency issue
  - where one of your modules
    - actually requires something from
      - another module
- Module A needs something from Module B
  - but Module B also requires something from Module A
    - so the problem is
      - you won't be able to resolve that dependency
        - because it is a circular dependency
- So the way that you solve this
  - is you create
    - a dedicated module
      - called the `SharedModule`
        - that just has `all of the modules`
          - that you `want to share`
            - across `your entire application`
              - and that way `you avoid`
                - this `circular dependency` issues
- Because ModuleA and ModuleB
  - can import
    - whatever shared modules they need
      - from the SharedModule itself
- We will create a SharedModule
  - and import it
    - in our AppModule
- This also helps keep our AppModule clean
- We want the AppModule to be very straightforward
  - how this app is starting up
  - you want to see everywhere you are importing things
    - that are not shared app wide
- Essentially the separation of concerns for app wide functionality
  - goes to the SharedModule

- its recommended that 
  - you store your models 
    - in a `shared/` folder
      - whether that is 
        - `a feature specific` folder 
        - or `the root` folder
          - it depends on 
            - `how many places` 
            - and `where those places`
              - that model 
                - is being used
                  - in your application
- `src/app/shared/models/`
  - we are going to `store our models` 
    - in the `models/` folder
      - under the `shared/` folder
        - because we are going 
          - to use this model
            - `in multiple places`
              - in our application
- The way that we create models
  - is by creating a `class`
    - that has `properties`
      - and `methods`
        - that we can use
          - to `manipulate` 
            - and `access` 
              - the data
- Classes 
  - also give us the ability 
    - to add methods
    - and other ways 
      - to modify this data
        - that we want to 
          - `store`
          - and `modify`
- We create instance variables

```typescript
export class User {
    name: string;
    age: number;
    email: string = 'test@example.com';
}
```
- `Create a model`
  - just create a class
  - set the instance variables
  - set the type of the instance variables
  - Optionally setting the initial value of the instance variable



- The way that we `use` 
  - this `User` type
    - is we are in some component class 
      - then we import the user model
        - `import { User } from './shared/models/user';`
