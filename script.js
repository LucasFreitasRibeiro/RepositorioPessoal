function showContent(id) {
    // Oculta todos os conteúdos
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
      content.style.display = 'none';
    });
    
    // Exibe o conteúdo do botão clicado
    var contentToShow = document.getElementById(id + '-content');
    contentToShow.style.display = 'block';
  }