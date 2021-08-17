const tabela = document.querySelector('table')

tabela.addEventListener('dblclick', function(event) {
   let removeTr = event.target.parentNode
   removeTr.classList.add('tr-remove-fadeOut')

   setTimeout(() => {
    removeTr.remove()
   }, 500);
})

