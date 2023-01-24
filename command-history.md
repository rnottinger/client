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
