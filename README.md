# Projeto App de Receitas! :cake:
Projeto desenvolvido em grupo durante o curso de Desenvolvimento Web na Trybe. Divulgado aqui como portfólio de aprendizado.

<details>
<summary><strong>Objetivos do projeto:</strong></summary>

  * Desenvolver um app de receitas, utilizando o que há de mais moderno dentro do ecossistema `React`: _Hooks_ e _Context API_. Nele será possível: ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas de comidas e bebidas. ⚠️ A base de dados serão 2 APIs distintas, uma para comidas e outra para bebidas.
  * Verificar se eu era capaz de:
    * Utilizar `Redux` para gerenciar estado.
    * Utilizar a biblioteca `React-Redux`.
    * Utilizar a `Context API` do `React` para gerenciar estado.
    * Utilizar o `React Hook useState`.
    * Utilizar o `React Hook useContext`.
    * Utilizar o `React Hook useEffect`.
    * Criar `Hooks` customizados.
</details>
<details>
<summary><strong> Requisitos do projeto:</strong></summary>

  * Desenvolver os testes unitários de maneira que a cobertura seja de, no mínimo, 90%.
  * Criar todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login.
  * Desenvolver a tela de maneira que a pessoa consiga escrever seu email no input de email e sua senha no input de senha.
  * Desenvolver a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos.
  * Após a submissão do formulário, salvar no localStorage o e-mail da pessoa usuária na chave `user`.
  * Redirecionar a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login.
  * Implementar o header de acordo com a necessidade de cada tela.
  * Redirecionar a pessoa usuária para a tela de perfil ao clicar no botão de perfil.
  * Desenvolver o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la.
  * Implementar os elementos da barra de busca respeitando os atributos descritos no protótipo.
  * Implementar 3 radio buttons na barra de busca: Ingredient, Name e First letter.
  * Buscar na API de comidas caso a pessoa esteja na página de comidas, e na API de bebidas caso esteja na de bebidas.
  * Redirecionar para a tela de detalhes da receita caso apenas uma receita seja encontrada, com o ID da mesma na URL.
  * Caso a busca retorne mais de uma receita, renderizar as 12 primeiras encontradas, exibindo a imagem e o nome de cada uma.
  * Exibir um `alert` caso nenhuma receita seja encontrada.
  * Implementar o menu inferior posicionando-o de forma fixa e contendo 2 ícones: um para comidas e outro para bebidas.
  * Exiba o menu inferior apenas nas telas indicadas pelo protótipo
  * Redirecione a pessoa usuária para a tela correta ao clicar em cada ícone no menu inferior
  * Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card
  * Implemente os botões de categoria para serem utilizados como filtro
  * Implemente o filtro das receitas por meio da API ao clicar no filtro de categoria
  * Implemente o filtro como um toggle, o qual se for selecionado novamente, o app deve retornar as receitas sem nenhum filtro
  * Redirecione a pessoa usuária ao clicar no card para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL
  * Realize uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da URL
  * Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube incorporado e recomendações
  * Implemente as recomendações. Para receitas de comida, a recomendação deverá ser bebida, já para as receitas de bebida a recomendação deverá ser comida
  * Implemente os 6 cards de recomendação, mostrando apenas 2. O scroll é horizontal, similar a um `carousel`
  * Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo
  * Implemente a solução de forma que, caso a receita já tenha sido feita, o botão "Start Recipe" desapareça
  * Implemente a solução de modo que, caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continue Recipe"
  * Redirecione a pessoa usuária caso o botão "Start Recipe" seja clicado, a rota deve mudar para a tela de receita em progresso
  * Implemente um botão de compartilhar e um de favoritar a receita
  * Implemente a solução de forma que, ao clicar no botão de compartilhar, o link da receita dentro do app deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer
  * Salve as receitas favoritas no `localStorage` na chave `favoriteRecipes`
  * Implemente o ícone do coração (favorito) de modo que: deve vir preenchido caso a receita esteja favoritada e "despreenchido" caso contrário
  * Implemente a lógica no botão de favoritar. Caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para "despreenchido" e vice-versa
  * Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes com suas respectivas quantidades e instruções
  * Desenvolva um checkbox para cada item da lista de ingredientes
  * Implemente uma lógica que ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista
  * Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita
  * Desenvolva a lógica de favoritar e compartilhar. A lógica da tela de detalhes de uma receita se aplica aqui
  * Implemente a solução de modo que o botão de finalizar receita ("Finish Recipe") só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados)
  * Redirecione a pessoa usuária após clicar no botão de finalizar receita ("Finish Recipe"), para a página de receitas feitas, cuja rota deve ser `/done-recipes`
  * Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo
  * Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, nome, categoria, nacionalidade, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar
  * Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar
  * Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard
  * Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros
  * Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita
  * Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas), respeitando os atributos descritos no protótipo
  * Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, nome, categoria, nacionalidade, um botão de compartilhar e um de "desfavoritar"
  * Desenvolva a tela de modo que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"
  * Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard
  * Desenvolva a solução de modo que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela
  * Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros
  * Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita
  * Implemente os elementos da tela de perfil respeitando os atributos descritos no protótipo
  * Implemente a solução de maneira que o e-mail da pessoa usuária deve estar visível
  * Implemente 3 botões: um de nome "Done Recipes", um de nome "Favorite Recipes" e um de nome "Logout"
  * Redirecione a pessoa usuária que, ao clicar no botão de "Done Recipes", a rota deve mudar para a tela de receitas feitas
  * Redirecione a pessoa usuária que, ao clicar no botão de "Favorite Recipes", a rota deve mudar para a tela de receitas favoritas
  * Redirecione a pessoa usuária que ao clicar no botão de "Logout", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login.
</details>
  
## Rodando o projeto localmente

Para rodar o projeto em sua máquina, abra seu terminal, crie um diretório no local de sua preferência com o comando `mkdir` e acesse o diretório criado com o comando `cd`:

```bash
mkdir meu-diretorio &&
cd meu-diretorio
```

Clone o projeto com o comando `git clone`:

```bash
git clone git@github.com:marcosadrianoti/tb-starwars-planets-search.git
```

Acesse o diretório do projeto com o comando `cd`:

```bash
cd tb-starwars-planets-search
```

Instale as dependências executando:

```bash
npm install
```

Execute a aplicação:

```bash
npm run start
```

Para executar os testes:

```bash
npm run test
```

Para executar os testes de cobertura:

```bash
npm run test-coverage
```
Para executar os testes com o Cypress:

```bash
npm run cy:open
```
