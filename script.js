

let navbarTabs = document.querySelectorAll(".navbar-tab")

navbarTabs.forEach(element => {
    element.addEventListener("click", function(e){
        e.preventDefault()
        navbarTabs.forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');
    })
});


let answers = document.querySelectorAll(".view-answer") 

answers.forEach(item => {
    const question = item.querySelector('.question');
    const answer = item.querySelector('.answer');

    

    item.addEventListener('click', function() {
        answers.forEach(el => {
            const el_ans = el.querySelector('.answer')
            const el_que = el.querySelector('.question')
            if (this !== el) {

                el_ans.classList.remove('active')
                el_que.classList.remove('active')
            }
        })
        answer.classList.toggle('active');
        question.classList.toggle('active')
    });
});