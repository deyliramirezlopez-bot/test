const facts = [
  'El símbolo nacional de Irlanda es el arpa celta.',
  'Halloween tiene raíces en el festival celta Samhain, originario de Irlanda.',
  'Irlanda tiene más de 30.000 castillos y ruinas de castillos en su territorio.',
  'El idioma irlandés (Gaeilge) es cooficial junto con el inglés.'
];

const factBtn = document.getElementById('fact-btn');
const factText = document.getElementById('fact');

factBtn?.addEventListener('click', () => {
  const index = Math.floor(Math.random() * facts.length);
  factText.textContent = facts[index];
});
