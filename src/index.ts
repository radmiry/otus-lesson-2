function component() {
  const element = document.createElement('H1');

  element.innerHTML = 'Привет';

  return element;
}

document.body.appendChild(component());
