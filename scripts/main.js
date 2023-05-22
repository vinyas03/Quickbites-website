let changes = document.getElementById('change');
let Navbar = document.getElementById('Navbar');

/*If the hidden checkbox is clicked, fire the event handler */
changes.addEventListener('click',()=>{
    if(changes.checked == true){
        Navbar.style.display="flex";
    }
    else{
        Navbar.style.display="none";
    }
});