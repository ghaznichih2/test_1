document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});

    const addUserButton= document.getElementById("add-user-bottem")
    addUserButton.addEventListener('click',()=> {
      document.querySelector('.add-user-modal').classList.add('showe')
      document.querySelector('.modal-back').classList.remove('dis-none')
    })

    document.querySelector('.modal-back').addEventListener('click',(e) =>{
      document.querySelector('.add-user-modal').classList.remove("showe")
      e.target.classList.add('dis-none')
    })

  });