# FIREBASE
###### [README](./../README.md)

## FIREBASE CLI
`curl -sL https://firebase.tools | bash`
`firebase login`
firebase projects:list (Test instalL correct )
npm install -g firebase-tools
npm install -g firebase-tools 

### Last Update 24-05-22

## Install / Update - Global
`npm  i g firebase` (Versão 10.8.0 Bugada removi e instalei funcionou EMULADOR)
## Install / Update - Local Angular
ANGULAR - [Install / Update](../../front-app/.readme/angular.md) 

## Firebase Emulador - Angular
module.ts
import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
providers: [ { provide: USE_AUTH_EMULATOR, useValue: environment.emulador ? ['http://localhost:9099'] : undefined }],

