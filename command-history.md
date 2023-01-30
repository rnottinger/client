```shell

ng g c public                                     
CREATE src/app/public/public.component.scss (0 bytes)
CREATE src/app/public/public.component.html (21 bytes)
CREATE src/app/public/public.component.spec.ts (599 bytes)
CREATE src/app/public/public.component.ts (203 bytes)
UPDATE src/app/app.module.ts (475 bytes)

 richardottinger@richard-mb  ~/Documents/projects/docker/demo-app/client   main  ng g c secure
CREATE src/app/secure/secure.component.scss (0 bytes)
CREATE src/app/secure/secure.component.html (21 bytes)
CREATE src/app/secure/secure.component.ts (203 bytes)
UPDATE src/app/app.module.ts (557 bytes)

```

- each time we generate components
  - from angular cli
    - they will be automatically imported
      - in the nearest module

- add a child component
  - for the public component
- so the HomeComponent
  - will be a component
    - inside the public/ folder
- now we should add this HomeComponent
  - to our route
    - we add a new parameter called children
      - that accepts an array of routes
- so all of the routes inside the public component
  - will inherit its functionalities

```shell


ng g c public/home
CREATE src/app/public/home/home.component.scss (0 bytes)
CREATE src/app/public/home/home.component.html (19 bytes)
CREATE src/app/public/home/home.component.ts (195 bytes)
UPDATE src/app/app.module.ts (638 bytes)


 ng g c public/login
CREATE src/app/public/login/login.component.scss (0 bytes)
CREATE src/app/public/login/login.component.html (20 bytes)
CREATE src/app/public/login/login.component.ts (199 bytes)
UPDATE src/app/app.module.ts (723 bytes)

```
- here we will add
  - all the login html and logic


```shell

 ng g c public/login
CREATE src/app/public/login/login.component.scss (0 bytes)
CREATE src/app/public/login/login.component.html (20 bytes)
CREATE src/app/public/login/login.component.ts (199 bytes)
UPDATE src/app/app.module.ts (723 bytes)




```



- use the authentication library

```shell




 ng g lib authentication
 
 
CREATE projects/authentication/README.md (1043 bytes)
CREATE projects/authentication/ng-package.json (163 bytes)
CREATE projects/authentication/package.json (218 bytes)
CREATE projects/authentication/tsconfig.lib.json (314 bytes)
CREATE projects/authentication/tsconfig.lib.prod.json (240 bytes)
CREATE projects/authentication/tsconfig.spec.json (273 bytes)
CREATE projects/authentication/src/public-api.ts (187 bytes)
CREATE projects/authentication/src/lib/authentication.module.ts (282 bytes)
CREATE projects/authentication/src/lib/authentication.component.spec.ts (655 bytes)
CREATE projects/authentication/src/lib/authentication.component.ts (216 bytes)
CREATE projects/authentication/src/lib/authentication.service.spec.ts (397 bytes)
CREATE projects/authentication/src/lib/authentication.service.ts (143 bytes)
UPDATE angular.json (3904 bytes)
UPDATE package.json (1069 bytes)
UPDATE tsconfig.json (987 bytes)
✔ Packages installed successfully.



ng g c user-dashboard


ng g c admin-dashboard


# right click on the authentication/src/lib folder > Open in Terminal > run the following commands

ng g c components/public/register
CREATE projects/authentication/src/lib/components/public/register/register.component.css (0 bytes)
CREATE projects/authentication/src/lib/components/public/register/register.component.html (23 bytes)
CREATE projects/authentication/src/lib/components/public/register/register.component.spec.ts (613 bytes)
CREATE projects/authentication/src/lib/components/public/register/register.component.ts (210 bytes)
UPDATE projects/authentication/src/lib/authentication.module.ts (652 bytes)



 ng g c components/public         
CREATE projects/authentication/src/lib/components/public/public.component.css (0 bytes)
CREATE projects/authentication/src/lib/components/public/public.component.html (21 bytes)
CREATE projects/authentication/src/lib/components/public/public.component.spec.ts (599 bytes)
CREATE projects/authentication/src/lib/components/public/public.component.ts (202 bytes)
UPDATE projects/authentication/src/lib/authentication.module.ts (745 bytes)


ng g c components/public/login   
CREATE projects/authentication/src/lib/components/public/login/login.component.css (0 bytes)
CREATE projects/authentication/src/lib/components/public/login/login.component.html (20 bytes)
CREATE projects/authentication/src/lib/components/public/login/login.component.spec.ts (592 bytes)
CREATE projects/authentication/src/lib/components/public/login/login.component.ts (198 bytes)
UPDATE projects/authentication/src/lib/authentication.module.ts (841 bytes)


 ng g c components/public/home 
CREATE projects/authentication/src/lib/components/public/home/home.component.css (0 bytes)
CREATE projects/authentication/src/lib/components/public/home/home.component.html (19 bytes)
CREATE projects/authentication/src/lib/components/public/home/home.component.spec.ts (585 bytes)


 

 pwd                          
/Users/richardottinger/Documents/projects/docker/demo-app/client/projects/authentication/src/lib
 
 
 richardottinger@Richards-MacBook-Pro  ~/Documents/projects/docker/demo-app/client/projects/authentication/src/lib   docker-test ●✚  ng g --help                  
ng generate

Generates and/or modifies files based on a schematic.

Commands:
  ng g <schematic>              Run the provided schematic.                                                [default]
  ng g app-shell                Generates an application shell for running a server-side version of an app.
  ng g application [name]       Generates a new basic application definition in the "projects" subfolder of the
                                workspace.                                                            [aliases: app]
  ng g class [name]             Creates a new, generic class definition in the given project.          [aliases: cl]
  ng g component [name]         Creates a new, generic component definition in the given project.       [aliases: c]
  ng g config [type]            Generates a configuration file in the given project.
  ng g directive [name]         Creates a new, generic directive definition in the given project.       [aliases: d]
  ng g enum [name]              Generates a new, generic enum definition in the given project.          [aliases: e]
  ng g environments             Generates and configures environment files for a project.
  ng g guard [name]             Generates a new, generic route guard definition in the given project.   [aliases: g]
  ng g interceptor [name]       Creates a new, generic interceptor definition in the given project.
  ng g interface [name] [type]  Creates a new, generic interface definition in the given project.       [aliases: i]
  ng g library [name]           Creates a new, generic library project in the current workspace.      [aliases: lib]
  ng g module [name]            Creates a new, generic NgModule definition in the given project.        [aliases: m]
  ng g pipe [name]              Creates a new, generic pipe definition in the given project.            [aliases: p]
  ng g resolver [name]          Generates a new, generic resolver definition in the given project.      [aliases: r]
  ng g service [name]           Creates a new, generic service definition in the given project.         [aliases: s]
  ng g service-worker           Pass this schematic to the "run" command to create a service worker
  ng g web-worker [name]        Creates a new, generic web worker definition in the given project.

Arguments:
  schematic  The [collection:schematic] to run.                                                             [string]

Options:
  --help         Shows a help message for this command in the console.                                     [boolean]
  --interactive  Enable interactive input prompts.                                         [boolean] [default: true]
  --dry-run      Run through and reports activity without writing out results.            [boolean] [default: false]
  --defaults     Disable interactive input prompts for options with a default.            [boolean] [default: false]
  --force        Force overwriting of existing files.                                     [boolean] [default: false]
 
 
  ng g guard guards/role
? Which type of guard would you like to create? CanActivate
CREATE projects/authentication/src/lib/guards/role.guard.spec.ts (331 bytes)
CREATE projects/authentication/src/lib/guards/role.guard.ts (457 bytes)


 ng g guard guards/authentication
? Which type of guard would you like to create? CanActivate
CREATE projects/authentication/src/lib/guards/authentication.guard.spec.ts (381 bytes)
CREATE projects/authentication/src/lib/guards/authentication.guard.ts (467 bytes)


 ng g c components/logout        
CREATE projects/authentication/src/lib/components/logout/logout.component.css (0 bytes)
CREATE projects/authentication/src/lib/components/logout/logout.component.html (21 bytes)
CREATE projects/authentication/src/lib/components/logout/logout.component.spec.ts (599 bytes)
CREATE projects/authentication/src/lib/components/logout/logout.component.ts (202 bytes)
UPDATE projects/authentication/src/lib/authentication.module.ts (1026 bytes)

```



# Use Angular Material instead of Bootstrap


- Uninstall the bootstrap npm package
  - then remove the bootstrap styles from `angular.json`
    - projects.clients.architect.build.options.styles="node_modules/bootstrap/scss/bootstrap.scss"
     

```shell

npm uninstall bootstrap


# remember to remove the bootstrap styles from angular.json


ng add @angular/material




git checkout -b install-material
Switched to a new branch 'install-material'
 richardottinger@Richards-MacBook-Pro  ~/Documents/projects/docker/demo-app/client   install-material ●  npm uninstall boostrap

up to date, audited 911 packages in 2s

90 packages are looking for funding
  run `npm fund` for details

1 high severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
 richardottinger@Richards-MacBook-Pro  ~/Documents/projects/docker/demo-app/client   install-material ●  ng add @angular/material
ℹ Using package manager: npm
✔ Found compatible package version: @angular/material@15.1.2.
✔ Package information loaded.

The package @angular/material@15.1.2 will be installed and executed.
Would you like to proceed? Yes
✔ Packages successfully installed.
? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ]
? Set up global Angular Material typography styles? Yes
? Include the Angular animations module? Include and enable animations
UPDATE package.json (1159 bytes)
✔ Packages installed successfully.
UPDATE src/app/app.module.ts (1327 bytes)
UPDATE angular.json (4132 bytes)
UPDATE src/index.html (574 bytes)
UPDATE src/styles.scss (181 bytes)
```


- `index.html`
  - the angular material icons are added to the head
    - to view the available icons, 
      - go to https://fonts.google.com/icons?selected=Material+Icons
    - `to use` an icon, 
      - `add the icon name` 
        - to the mat-icon element
          - `<mat-icon>home</mat-icon>`
  - & the `Roboto` font is added to the head
- If you want to use
  - a new material component
    - then you need to find
      - the corresponding component
        - in the `material.angular.io` website
          - https://material.angular.io/components/categories
            - Select the component > Slider
              - on the left Side Bar
            - Then click the `API` tab
              - you will now see the import
                - for the module 
                  - that you need to add 
                    - to the `imports` array 
                      - in the `app.module.ts` file
            - `API reference for Angular Material slider`
              - `import {MatSliderModule} from '@angular/material/slider';`
