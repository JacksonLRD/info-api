# Teste técnico Info Sistemas PL/SR

## Requisitos:

- Criar projeto backend utilizando (Node.Js)
- Criar crud de veículos com os seguintes atributos (id, placa, chassi, renavam, modelo, marca, ano). Obs.: Os dados podem ser salvos em arquivos
- Criar teste unitários utilizando Mocha (Node) para cada uma das operações (create, read, update, delete)
- Criar recursos rest para acesso aos dados dos veículos

## Documentação

---

Com o código em execução, acessar: localhost:{port}/api-docs/ para ver a documentação no Swagger

## Arquitetura e stack

---

- Projeto criado usando alguns princípios SOLID e Clean Architecture
- Node
- Express
- Morgan
- Swagger-ui-express
- TypeDI

## Execução do código

---

Instalação das dependências

```bash
npm install
```

Configuração de variáveis de ambiente

- Renomear arquivo .env.example para .env
- Ajustar as variáveis de acordo com valor desejado

Rodar a aplicação em modo development

```bash
npm run dev
```

Rodar os testes

```bash
npm test
```
