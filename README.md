# Contract Testing Demo

Este repositorio contiene una prueba de concepto mínima para pruebas de contrato utilizando [Pact](https://docs.pact.io/) y un servidor Pactflow MCP. Se incluyen dos servicios en Node.js que se comunican para registrar usuarios.

## Estructura del proyecto

- `consumer/`: cliente que envía solicitudes de registro de usuarios.
- `provider/`: servicio que expone un endpoint `/users` para crear usuarios.
- `pacts/`: directorio donde se guardan los archivos pact generados por las pruebas.

## Ejecución de las pruebas

Cada servicio define pruebas con Jest que producen y verifican contratos.

```bash
cd consumer
npm install
npm test

cd ../provider
npm install
npm test
```

## Publicación en Pactflow

Para publicar los contratos generados en un servidor Pactflow:

```bash
npx pact-broker publish ../pacts \
  --consumer-app-version 1.0.0 \
  --broker-base-url $PACT_BROKER_BASE_URL \
  --broker-token $PACT_BROKER_TOKEN
```

> Nota: La instalación de dependencias requiere acceso a internet y a [npmjs.org](https://www.npmjs.com/).
