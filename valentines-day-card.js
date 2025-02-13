$('.js-open-envelope').on('click', function (event) {
  event.preventDefault();
  var $self = $(this);
  $self.find('.envelope').removeClass('tossing').addClass('open');
  $self.find('.heart use').attr("xlink:href", "#icon-heart-broken");
  $self.find('.envelope__card').addClass('open');
});
function downloadPDF() {
  const link = document.createElement('a');
  link.href = 'carta.pdf'; // Asegúrate de que el archivo PDF esté en la misma carpeta
  link.download = 'carta.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}