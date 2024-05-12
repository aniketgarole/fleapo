

let navbarTabs = document.querySelectorAll(".navbar-tab")

navbarTabs.forEach(element => {
    element.addEventListener("click", function(e){
        e.preventDefault()
        navbarTabs.forEach(tab => tab.classList.remove('active'));
        console.log(this)
        this.classList.add('active');
    })
});