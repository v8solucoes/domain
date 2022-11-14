# FIREBASE
###### [README](./../README.md)

## FIREBASE CLI
`curl -sL firebase.tools | upgrade=true bash` (Instal last version binary)
`curl -sL https://firebase.tools | bash` (Version 11.16.0) old install (10.8.0)
`npm install -g firebase-tools` 
`firebase login`
`npm install firebase` (após instação do NODE)

`firebase projects:list`(Test instalL correct )

## FUNCTIONS
`firebase init functions`
Select: `TypeScript`
Ignore: `ESLint` (n)

Example Index.ts:
```
-------------------------------------------------------------
import * as functions from 'firebase-functions'
import * as express from 'express'

var api = express()

api.get('/', (req, res) => res.status(200).send('Hey there!'))

exports.api = functions.https.onRequest(api)
--------------------------------------------------------------
```
npm run serve (Teste Local)
npm run deploy (Produção Firebase)

## Install / Update - Global
`npm i g firebase` (Versão 10.8.0 Bugada removi e instalei funcionou EMULADOR)



## Install / Update - Local Angular
ANGULAR - [Install / Update](../../front-app/.readme/angular.md) 

## Firebase Emulador - Angular
module.ts
import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
providers: [ { provide: USE_AUTH_EMULATOR, useValue: environment.emulador ? ['http://localhost:9099'] : undefined }],

