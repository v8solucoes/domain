# Global Emulator: [https://firebase.google.com/docs/emulator-suite]

Execute:

`curl -sL firebase.tools | bash`

`npm install -g firebase-tools` Instalar no Node

`firebase init emulators` - Escolha as opções do emulador

## Verifique se Java está instalado

`java -version`

Se não tiver instalado execute:

`sudo apt update`
`sudo apt install default-jre`
`java -version`

## CONECT FIREBASE CLI

`firebase login`

`firebase projects:list`(Test instalL correct )

`firebase init functions`
Select: `TypeScript`
Ignore: `ESLint` (n)

## Execute

`firebase emulators:start` (Excuta todos emuladores criados)
`firebase emulators:start --only <name>` (Excuta só selecionados)
`firebase deploy` (envia tudo para o servidor)

## Crie Arquivo: .firebaserc com

```json
{
  "projects": {
    "default": "v8app-888cd"
  },
  "targets": {
    "v8app-888cd": {
      "hosting": {
        "app-Front": [
          "app-front-v8"
        ]
      }
    }
  }
}
```

## Crie arquivo: firebase.json com

```json
{
  "hosting": {
    "public": "front/dist/angular-13",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  },
  "emulators": {
    "hosting": {
      "port": 5000
    },
    "ui": {
      "enabled": true,
      "port": 4000
    },
    "auth": {
      "port": 9099
    },
    "functions": {
      "port": 5001
    },
    "firestore": {
      "port": 8080
    },
    "singleProjectMode": true
  },
  "functions": {
    "source": "back",
    "predeploy": "npm --prefix \"$RESOURCE_DIR\" run build"
  },
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  }
}

```

## Crie arquivo: firestore.indexes.json com

```json
{
  "indexes": [],
  "fieldOverrides": []
}
```

## Execute

`firebase emulators:start` (Excuta todos emuladores criados)
`firebase emulators:start --only <name>` (Excuta só selecionados)
`firebase deploy` (envia tudo para o servidor)