Este projeto foi criado com react-create-app
  (https://github.com/facebookincubator/create-react-app).

## Rodando o projeto

```
npm install

npm start
```

## Implementando um component

Os componentes devem ficar na pasta Components, separados por pastas próprias.

Dentro da pasta do component ficaram todos os fomulários que fazem parte da construção do componente css e jsx, assim como o arquivo do reducer do component que sempre terá nome de Redux.

```
  src/
    Components/
      Personagem/
        ListaPersonagemContainer.jsx
        ListaPersonagem.jsx
        ListaPersonagem.css
        Redux.js
      Reducers.js
    Services/
      MarvelService.js
    Views/
      ListaPersonagens/
        ListaPersonagensView.jsx
    MainApp.jsx
```

Ao criar um reducer para um componente, é necessário importa-lo dentro do arquivo Reducers.js, para que o reducer seja incluido na store.

Todo componente acessado por rota deve possuir uma view dentro da pasta Views, separadas por pastas próprias. A view deverá renderizar o container do componente.

Para incluir uma nova rota, é necessário alterar o arquivo MainApp.jsx, para incluir o caminho da nova rota e definir para view esta rota será enviada.

Para inserir uma nova consulta a um serviço deverão ser incluidos no arquivo "MarvelService" (caso seja necessário podem ser criados novos arquivos de service).
Os services serão consumidos pelas actions de ficam dentro do arquivo Redux de cada arquivo.
