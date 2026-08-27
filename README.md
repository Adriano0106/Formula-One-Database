# Formula One Database API

API pública e somente leitura, feita com Express e TypeScript, para consultar pilotos, equipes e campeões da Fórmula 1.

## Desenvolvimento

```bash
npm ci
copy .env.example .env
npm run dev
```

A API inicia em `http://localhost:3000`. Verifique sua disponibilidade em `GET /health`.

## Endpoints

- `GET /api/seasons`: temporadas disponíveis para pilotos e equipes.
- `GET /api/drivers/:year`: pilotos da temporada.
- `GET /api/teams/:year`: equipes da temporada.
- `GET /api/champions/drivers`: campeões de pilotos.
- `GET /api/champions/teams`: campeões de construtores.

Erros usam o formato `{ "code": "...", "message": "..." }`. O contrato completo está em [openapi.yaml](./openapi.yaml).

## Atualização dos dados

Adicione o arquivo anual tipado em `src/data`, registre-o em `src/data/seasons.ts` e execute `npm test`. As escritas HTTP foram removidas: toda alteração passa por revisão e fica registrada no Git.

## Variáveis e validação

- `PORT`: porta HTTP, padrão `3000`.
- `CORS_ALLOWED_ORIGINS`: origens permitidas separadas por vírgula. Inclua o domínio de produção e os domínios de preview necessários.

```bash
npm run typecheck
npm test
npm run build
```
