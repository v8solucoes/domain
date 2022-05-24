-------------------
FIREBASE FUNCTIONS TYPSCRIPT ##
firebase init functions
selecionar Typscript
ignorar eslint
código INDEX.TS 
-------------------------------------------------------------
import * as functions from 'firebase-functions'
import * as express from 'express'

var api = express()

api.get('/', (req, res) => res.status(200).send('Hey there!'))

exports.api = functions.https.onRequest(api)
--------------------------------------------------------------
npm run serve (Teste Local)
npm run deploy (Produção Firebase)

http://127.0.0.1:5001/v8app-888cd/us-central1/api

xxCorreção: inclui no package.json 
"@types/node": "14.18.2"
xxCorreção: trocar no tsconfig.json
"target": "es2015" (Se não trocar as classe typscript para mais antiga buga com erro: 
typscript referenceerror is not defined)
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "outDir": "lib",
    "sourceMap": true,
    "strict": true,
    "target": "es2015"
  },
  "compileOnSave": true,
  "include": [
    "src"
  ]
}



#NPM
npm install --force

INSTRUÇÕES: 21-12-2021

Instalar versões LTS estáveis e compatíveis que funcionam em produção.

UBUNTO: 18.4 (Usando WSL do Windows)
Senha: v8s

NVM: (Instalador do NPM / NODE para Linux com controle de versões)
NODE / NPM: 14 lts (Angular versão 12 requer NODE 14)
ANGULAR: 12 lts (USAR UNIVERSAL SSR)
FIREBASE: Cloud Functions (Angular)


ANGULAR Novo INSTALAR #########

ng new minha-app (cria nova pasta aplicação)
	Você deseja adicionar o ROUTER? Y
	Tipo de CSS? SCSS
cd minha-app
ng serve --open

ANGULAR UNIVERSAL ##########

ng add @nguniversal/express-engine
	Você quer iniciar o processo? Y

npm run dev:ssr
npm run build:ssr
npm run serve:ssr

firebase deploy

ANGULAR UNIVERSAL / FUNCTIONS FIREBASE ##########

ng add @angular/fire
	Você quer iniciar o processo? Y
	Selecione: Cloud Functions(callable)
	Fazer Login na conta Firebase.
	Selecione: Novo Projeto ou Existente
	Quer Pre-Render após o deploy? N
	Selecione (Render server-site?): Cloud Functions
	Versão Node? 14 (para angular 12)
	Criar um Host Firebase ou usar existente?
	(NUNCA USAR NOME COM "-" hífen vai bugar no deploy error: occurred while parsing)
	Exemplo Errado: teste-uni
	Exemplo correto: teste_uni
	Selecionar: Nome da API no firebase
ng deploy

ANGULAR BACKAND ACESSANDO SISTEMA FS NODE ###########

`Error:` src/app/home/home.component.ts:4:21 - error TS2307: Cannot find module 'fs' or its corresponding type declarations.

4 import * as fs from 'fs';

`Motivo:` Ao compilar não conhece o type Node.
`Solução:` Abrir o aquivo tsconfig.app.json acessar:  "types": [Adicionei("node")]


`Problemas:`
./src/app/home/home.component.ts:3:0-25 - Error: Module not found: Error: Can't resolve 'fs' in '/home/v8/v8app/site/site-apresentador/src/app/home'.

`Motivo:` O erro é porque angular-cli não suporta módulos no nó como "fs" e "path".

`Solução:` acessar package.json e incluir: Adicionei na raiz principal (
     "browser": {
    "fs": false,
    "path": false,
    "os": false
  }
 )
########## FIREBASE ECO SISTEMA
firebase init 
	> Use a raiz principal para executar o comando ex: meu-apresentador/
	> Selecione o tipo de implantação (Hosting, Firestore, Auth...)
	> Seria criado um aquivo firebase.json que terá as informações de cada módulo
	> Altere a pasta que corresponde o módulo em "public": "Caminho da Pasta",
Functions: #####################
firebase init
Opções>
typescript - y
eslint - n
Se já foi instalado antes vai aparecer as opções:
subscrever packote.json = ?
subscrever tsconfig.ts = ?
subscrever index.ts = ?
subscrever gitginore = ?
instalar dependências = y

Executar:
npm run serve


Hosting:

 > 1 Cria no painel do firebase em Hosting um site com o nome que quiser
 > MULTIPLOS SITES:  https://firebase.google.com/docs/hosting/multisites
	firebase target:apply hosting (apelido) (nome no firebase)
	o arquivo .firebaserc será modificado e ficará assim:
{
  "projects": {
    "default": "v8app-888cd"
  },
  "targets": {
    "v8app-888cd": {
      "hosting": {
        "apelido": [
          "app-front-v8"
        ]
      }
    }
  }
}

Agora modifique o arquivo firebase.json com informações para localizar a Targets e
fazer o roteamento da aplicação. Para mais de um site coloque o Hosting como lista

{
  "hosting": [{
    "target": "app-Front",
   "public": "app-Front/dist/app-Front",
   "rewrites": [ {
    "source": "**",
    "destination": "/index.html"
  } ],
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }]
}

Deploy Teste:

Nfirebase emulators:start --only hosting
angular ng build --configuration development

Deploy Produção:
firebase deploy --only hosting: TARGET_NAME

 