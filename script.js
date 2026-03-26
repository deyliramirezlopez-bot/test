const messages = [
  '¡Listo! Ya hay una web funcionando en /test.',
  'Puedes editar este contenido cuando quieras.',
  'Pequeño paso para la web, gran paso para el repo.'
];

const button = document.getElementById('surprise-btn');
const output = document.getElementById('message');

button?.addEventListener('click', () => {
  const random = Math.floor(Math.random() * messages.length);
  output.textContent = messages[random];
});
