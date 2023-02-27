- Use the correct version of node before you start Verdaccio
  - `nvm use 18.10.0`

- Start the Verdaccio software
  - Verdaccio provided a npm local registry 
    - that allows you to 
      - `push`, 
      - `store`, 
      - `cache`,
      - and `pull` 
        - npm resources
          - `verdaccio`

- A modification is made to your library
  - `cd <project-directory>`
  - `npm build <my-library>`


```shell
Building Angular Package

------------------------------------------------------------------------------
Building entry point 'authentication'
------------------------------------------------------------------------------
✔ Compiling with Angular sources in Ivy partial compilation mode.
✔ Generating FESM2020
✔ Generating FESM2015
✔ Copying assets
✔ Writing package manifest
✔ Built authentication

------------------------------------------------------------------------------
Built Angular Package
 - from: /Users/richardottinger/Documents/projects/docker/demo-app/client/projects/authentication
 - to:   /Users/richardottinger/Documents/projects/docker/demo-app/client/dist/authentication
------------------------------------------------------------------------------

Build at: 2023-02-10T11:48:18.054Z - Time: 6146ms

```

- Change to you build directory for your library
  - `cd dist/authentication`


- Make sure you are using 
  - the `same npm version` 
    - that verdaccio was installed with and currently using 18.10.0
      - or you will get errors in the terminal when you try to publish
        - `nvm list`
        - `nvm use 18.10.0`


- Next, if the project has previously been published
  - then check the verdaccio page to determine current version
    - http://localhost:4873/-/web/detail/authentication
      - `Latest v0.0.6 - Published a few seconds ago`
  - then check the version of the build
    - `dist/authentication/package.json`
      - `"version": "0.0.5",`
  - this tells you that you need to increment the version 
    - of your build +2
      - to `v0.0.7`
        - run the command `npm version patch` 2 times
  - and then check the version of the build again
      - `dist/authentication/package.json`
          - `"version": "0.0.7",`
  - now you can publish

```shell

npm publish --registry http://localhost:4873/
npm notice
npm notice 📦  authentication@0.0.7
npm notice === Tarball Contents ===
npm notice 1.0kB  README.md
npm notice 512B   esm2020/authentication.mjs
npm notice 1.7kB  esm2020/lib/authentication.component.mjs
npm notice 8.6kB  esm2020/lib/authentication.module.mjs
npm notice 8.6kB  esm2020/lib/authentication.service.mjs
npm notice 5.0kB  esm2020/lib/components/logout/logout.component.mjs
npm notice 3.4kB  esm2020/lib/components/public/home/home.component.mjs
npm notice 9.1kB  esm2020/lib/components/public/login/login.component.mjs
npm notice 2.0kB  esm2020/lib/components/public/public.component.mjs
npm notice 11.7kB esm2020/lib/components/public/register/register.component.mjs
npm notice 4.2kB  esm2020/lib/config.service.mjs
npm notice 5.2kB  esm2020/lib/interceptors/error.interceptor.mjs
npm notice 4.3kB  esm2020/lib/interceptors/token.interceptor.mjs
npm notice 413B   esm2020/lib/models/config.mjs
npm notice 986B   esm2020/public-api.mjs
npm notice 26.2kB fesm2015/authentication.mjs
npm notice 31.1kB fesm2015/authentication.mjs.map
npm notice 26.1kB fesm2020/authentication.mjs
npm notice 31.1kB fesm2020/authentication.mjs.map
npm notice 119B   index.d.ts
npm notice 300B   lib/authentication.component.d.ts
npm notice 1.4kB  lib/authentication.module.d.ts
npm notice 842B   lib/authentication.service.d.ts
npm notice 563B   lib/components/logout/logout.component.d.ts
npm notice 260B   lib/components/public/home/home.component.d.ts
npm notice 759B   lib/components/public/login/login.component.d.ts
npm notice 268B   lib/components/public/public.component.d.ts
npm notice 821B   lib/components/public/register/register.component.d.ts
npm notice 361B   lib/config.service.d.ts
npm notice 676B   lib/interceptors/error.interceptor.d.ts
npm notice 1.0kB  lib/interceptors/token.interceptor.d.ts
npm notice 86B    lib/models/config.d.ts
npm notice 872B   package.json
npm notice 197B   public-api.d.ts
npm notice === Tarball Details ===
npm notice name:          authentication
npm notice version:       0.0.7
npm notice filename:      authentication-0.0.7.tgz
npm notice package size:  30.8 kB
npm notice unpacked size: 189.8 kB
npm notice shasum:        b4fee28fdca25502345b94cf583bff835264d3e2
npm notice integrity:     sha512-GGKKotyhaWcN4[...]dY6v+imeleVbA==
npm notice total files:   34
npm notice
npm notice Publishing to http://localhost:4873/
+ authentication@0.0.7
```


