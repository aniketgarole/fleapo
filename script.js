

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



const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")
const corousel = document.querySelector(".corousel")
let leftCount = 1
let rightCount = 1
const leftOffset = 365.5
const rightOffset = 721


leftArrow.addEventListener("click", () => {
    
    if (leftCount > 1) {
        return 
    }

    
    corousel.style.transform = `translate(${leftOffset}px) `
    count++

   
    
})

rightArrow.addEventListener("click", () => {

    if (rightCount > 2) {
        return 
    }

    corousel.style.transform = `translate(-${rightOffset}px) `
    
})