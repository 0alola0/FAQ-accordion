const questionTemplate = document.getElementById('question-template')
const textContainer = document.querySelector('.text-container')
renderQuestions()

function renderQuestions(){
    texts.forEach( element => {
       const quentionElement = document.importNode(questionTemplate.content, true)
       const question = quentionElement.querySelector('h4')
       question.append(element.question)
       const answer = quentionElement.querySelector('p')
       answer.append(element.answer)
       textContainer.appendChild(quentionElement)
    });
}

const openers = document.querySelectorAll(".question")

openers.forEach(question => {
    question.addEventListener("click", ()=>{
        question.classList.toggle("active")
        console.log(question)
    })
})
