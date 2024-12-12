
# Desafio: Painel de Gerenciamento de Filmes

## Descrição do Desafio
Você deve desenvolver uma página web funcional que permita:
1. Listar filmes populares obtidos da API do **TMDB**.
2. Exibir os dados em uma tabela interativa utilizando **Material React Table**.
3. Implementar filtros, paginação e ordenação na tabela.
4. Permitir criar, editar e excluir filmes no estado local, utilizando **Zustand** para gerenciamento de estado.
5. Adicionar estilos consistentes utilizando **MUI**.

## Requisitos

### 1. Obtenção de Dados
- Utilize a API do **TMDB** para buscar filmes populares.
- Endpoint: `https://api.themoviedb.org/3/movie/popular`
- Utilize o método `GET` com a sua API Key gratuita (disponível no [site oficial](https://www.themoviedb.org/documentation/api)).
- Dados principais para exibir na tabela:
  - **Título** (`title`)
  - **Data de Lançamento** (`release_date`)
  - **Nota Média** (`vote_average`)
  - **Número de Votos** (`vote_count`)
  - **Idioma Original** (`original_language`)

### 2. Tabela de Filmes
- Apresente os dados dos filmes em uma tabela usando **Material React Table**.
- Implemente:
  - **Paginação**
  - **Ordenação** (ascendente e descendente por Nota Média e Data de Lançamento)
  - **Filtro de texto** (por Título e Idioma Original)

### 3. Formulário para Criar/Editar Filmes
- Adicione a funcionalidade de "Adicionar Filme" com um botão que abre um modal.
- O formulário no modal deve permitir preencher:
  - **Título**
  - **Data de Lançamento**
  - **Nota Média**
  - **Número de Votos**
  - **Idioma Original**
- Permita editar filmes ao clicar em um botão "Editar" na tabela.
- Utilize **MUI** para o formulário e modal.
- As alterações devem ser armazenadas no estado utilizando **Zustand**.

### 4. Excluir Filmes
- Adicione um botão "Excluir" para remover filmes da tabela.
- O estado de exclusão deve ser gerenciado localmente com **Zustand**.

### 5. Estilo
- Aplique um tema personalizado usando **MUI ThemeProvider** com cores primárias e secundárias definidas.

### 6. Extra (opcional, para candidatos avançados)
- Adicione um "Detalhe do Filme":
  - Ao clicar no título de um filme, exiba um modal ou card com mais informações do filme, como descrição (`overview`) e poster (`poster_path`).
- Adicione um **filtro por gênero**:
  - Utilize o endpoint `https://api.themoviedb.org/3/genre/movie/list` para buscar os gêneros e criar filtros.

## Instruções

### Entrega
1. Faça um fork deste repositório.
2. Desenvolva a solução no seu fork.
3. Após finalizar, envie o link do repositório com o seu código.

### Requisitos para o Repositório
- O código deve estar organizado em um repositório público.
- Inclua um arquivo `README.md` no repositório com:
  - Passos para configurar a API Key da TMDB.
  - Instruções para rodar o projeto.

### Critérios de Avaliação
- Uso correto das bibliotecas solicitadas (**React**, **MUI**, **Material React Table**, **Zustand**).
- Boas práticas de código (organização, legibilidade, uso de hooks, etc.).
- Design da interface e responsividade.
- Funcionalidade completa conforme os requisitos.

## API TMDB Referências Rápidas
- **Filmes Populares**:  
  `https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1`

- **Lista de Gêneros**:  
  `https://api.themoviedb.org/3/genre/movie/list?api_key=YOUR_API_KEY&language=en-US`

- **Poster Path**:  
  Combine `poster_path` com `https://image.tmdb.org/t/p/w200` para exibir as imagens.
