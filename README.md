# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Routes

```
/register -> via POST registrar usuario
/authenticate -> via POST authentica o login do usuario
/products -> via GET/HEAD lista todos oos produtos e via POST armazena produto
/products/:id -> via GET mostra determinado produto pela id
/products/:id -> via DELETE ele exclui o produto
```

## Setup

Use the ad to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
``
