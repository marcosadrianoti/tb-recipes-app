export function urlToTitle(url) {
  if (url !== '/' && !url.includes(':id')) {
    const getWords = url.replace('/', '').replace('-', ' '); // Tira o '/' e substitui o '-' por espaço...
    const title = getWords.replace(/\b\w/g, (letra) => letra.toUpperCase()); // Troca a primeira letra de cada palavra para maiúscula.
    return title;
  }
}
