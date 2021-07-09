import recipes from './recipe.gif';
import expenses from './expenses.gif';

const data = [
  {
    name: "App de Receitas",
    githubLink: "https://github.com/dougfer/App-Receitas",
    githubPage: "https://dougfer.github.io/App-Receitas/#/",
    description: "Aplicativo web realizado durante o módulo de front-end da Trybe. É possível realizar consultas de receitas, favoritá-las e iniciá-las. Feito para a responsividade mobile com as dimensões indicadas de 375x667. Utilizadas API's externas para consultas.",
    tech: ["React", "Context API", "React Hooks", "CSS", "Styled Components"],
    image: recipes,
  },
  {
    name: "Expenses Wallet",
    githubLink: "https://github.com/dougfer/expenses-wallet",
    githubPage: "https://dougfer.github.io/expenses-wallet/#/",
    description: "Aplicativo web realizado durante o módulo de front-end da Trybe. É possível realizar um controle de despesas juntamente com a conversão da moeda a escolha.Utilizadas API's externas para consultas.",
    tech: ["React", "Redux", "CSS", "Styled Components"],
    image: expenses,
  },
]

export default data;
