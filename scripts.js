(function() {
  var template = document.getElementById('txt-template'),
      result = document.getElementById('txt-result'),
      category = document.getElementById('txt-category'),
      title = document.getElementById('txt-title'),
      content = document.getElementById('txt-content'),
      link = document.getElementById('txt-link'),
      picture = document.getElementById('txt-img');

  document.getElementById('apply-button').onclick = function(e) {
    e.preventDefault();

    result.value = '';

    if(!link.validity.valid ||
       !picture.validity.valid)
      return;

    let buffer = template.value.trim();

    // Rellenar valores
    buffer = buffer.replace(/{{category}}/gi, category.value.trim());
    buffer = buffer.replace(/{{title}}/gi, title.value.trim());
    buffer = buffer.replace(/{{content}}/gi, content.value.trim());
    buffer = buffer.replace(/{{link}}/gi, link.value.trim());
    buffer = buffer.replace(/{{img_link}}/gi, picture.value.trim());

    // Quitar campos sobrantes
    buffer = buffer.replace(/{{\w*}}/gi, '');

    result.value = buffer;
  }

  // Traer plantilla predeterminada
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      template.value = this.responseText;
    }
  };

  xhr.open('GET', 'https://gist.githubusercontent.com/mdanieltg/817a45139d3cee56ab54c89fe529ae22/raw/b10067f18dea19f46a7f596a351a58521845080c/blog-template', true);
  xhr.send();
})();
