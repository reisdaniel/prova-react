# Painel de Gerenciamento de Filmes

Este projeto é um painel de gerenciamento de filmes desenvolvido com **React**, **Material UI** e **Zustand** para gerenciamento de estado. A aplicação permite listar, filtrar, adicionar, editar e excluir filmes, consumindo a API do TMDB.

---

## **Funcionalidades**

1. **Listagem de Filmes Populares**
   - Os filmes são obtidos através da [API do TMDB](https://www.themoviedb.org).
   - Exibidos em uma **tabela** e **grid responsiva**.

2. **Filtro de Filmes**
   - Filtragem por **gêneros** utilizando um dropdown.

3. **Adição de Novos Filmes**
   - Modal para adicionar filmes preenchendo os campos:
     - Título, Data de Lançamento, Nota, Votos e Idioma Original.

4. **Edição de Filmes**
   - Modal para editar os dados de filmes existentes.

5. **Exclusão de Filmes**
   - Remoção de filmes diretamente na interface.

6. **Detalhes do Filme**
   - Modal com informações completas do filme selecionado.

7. **Tratamento de Erros**
   - Mensagens de erro exibidas ao falhar no carregamento da API.

8. **Loading Spinner**
   - Indicador de carregamento durante a busca de filmes e gêneros.

---

## **Tecnologias Utilizadas**

- **React**: Framework principal.
- **Material UI (MUI)**: Biblioteca de componentes e estilização.
- **Zustand**: Gerenciamento de estado simples e eficiente.
- **Axios**: Consumo da API do TMDB.
- **TMDB API**: Fonte de dados dos filmes.

---

## **Instalação e Configuração**

### **Pré-requisitos**

- Node.js e npm instalados.

### **Passos para Instalação**

1. Clone o repositório:
   ```bash
   git clone https://github.com/reisdaniel/prova-react
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd prova-react
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure sua API Key do TMDB:

    - Crie um arquivo .env na raiz do projeto:
    ```
    REACT_APP_TMDB_API_KEY=SUA_API_KEY
    ```
5. Execute o projeto:
   ```bash
   npm start
   ```
6. Acesse no navegador:
   ```bash
   http://localhost:3000
   ```

## **Estrutura do Projeto**

```plaintext
src/
│-- components/
│   ├── tables/
│   │   ├── GenreFilter.js      # Filtro de gêneros para os filmes
│   │   ├── HeroSection.js      # Seção principal com banner e botão de ação
│   │   ├── MovieCard.js        # Card individual para exibir filmes
│   │   ├── MoviesGrid.js       # Grid responsiva contendo os MovieCards
│   │   └── MoviesTable.js      # Tabela interativa com ações (detalhes, editar, excluir)
│-- forms/
│   ├── MovieFormModal.js       # Modal para adicionar ou editar um filme
│   └── MovieDetailsModal.js    # Modal para exibir informações detalhadas de um filme
│-- pages/
│   └── MoviesList.js           # Página principal com listagem, grid e ações de filmes
│-- services/
│   └── api/
│       └── tmdbApi.js          # Serviço para consumir a API do TMDB
│-- store/
│   └── movieStore.js           # Gerenciamento de estado com Zustand
│-- theme.js                    # Configuração do tema global com Material UI
│-- App.js                      # Componente principal que integra a aplicação
│-- index.js                    # Ponto de entrada principal do React
│-- .env                        # Configurações sensíveis (API Key)
```
## **Uso da Aplicação**

### **Listar Filmes Populares**
- A página principal carrega automaticamente os filmes populares consumidos da **API do TMDB** e os exibe em uma **grid** e **tabela interativa**.

### **Filtrar Filmes por Gênero**
- Utilize o dropdown **"Todos os Gêneros"** para filtrar os filmes pelo gênero desejado.

### **Adicionar Novo Filme**
1. Clique no botão **Adicionar Novo Filme**.
2. Preencha os campos necessários:
   - **Título**  
   - **Data de Lançamento**  
   - **Nota Média**  
   - **Número de Votos**  
   - **Idioma Original**  
3. Clique em **Salvar** para adicionar o filme à lista.

### **Editar um Filme Existente**
1. Clique no botão **Editar** (ícone de lápis) no card ou na tabela de filmes.
2. Atualize os dados do filme no modal.
3. Clique em **Salvar** para confirmar as alterações.

### **Visualizar Detalhes**
- Clique no botão **Detalhes** (ícone de informação) no card ou na tabela.
- Um modal será exibido com as informações completas do filme:
   - **Título**  
   - **Data de Lançamento**  
   - **Nota Média**  
   - **Número de Votos**  
   - **Idioma Original**  
   - **Descrição** (overview)  

### **Excluir um Filme**
- Clique no botão **Excluir** (ícone de lixeira) no card ou na tabela.
- Confirme a exclusão do filme.

---

## **API Utilizada**

- **TMDB (The Movie Database)**:
   - **Endpoint de Filmes Populares**:
     ```bash
     https://api.themoviedb.org/3/movie/popular?api_key=SUA_API_KEY&language=pt-BR&page=1
     ```
   - **Endpoint de Gêneros**:
     ```bash
     https://api.themoviedb.org/3/genre/movie/list?api_key=SUA_API_KEY&language=pt-BR
     ```

---

## **Licença**

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo `LICENSE` para mais informações.

---

## **Observações**

Caso tenha alguma dúvida, sugestão ou problema ao executar a aplicação, entre em contato ou abra uma **issue** neste repositório.

---
