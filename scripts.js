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
})();
