
const counter = document.querySelector('#counter')
const decBtn = document.querySelector('#decrement')
const incBtn = document.querySelector('#increment')
const likeBtn = document.querySelector('#like')
const pauseBtn = document.querySelector('#pause')
const likes = document.querySelector('#likes')
const comments = document.querySelector('#list')
const commentForm = document.querySelector('#comment-form')
const submitBtn = document.querySelector('#submit')

let i = 0;
let isPaused = false

function incrementTimer(){
    if(!isPaused){
        i++
        counter.innerHTML = i
    }
}

setInterval('incrementTimer()', 1000)

function pause(){
pauseBtn.addEventListener('click', () => {
    isPaused = !isPaused
    if(isPaused){
        pauseBtn.innerHTML = 'Resume'
    }else{
        pauseBtn.innerHTML = 'Pause'
    }
})
}

function incDecButtons(){
    decBtn.addEventListener('click', () => {
        i--
        counter.innerHTML = i
    })

    incBtn.addEventListener('click', () => {
        i++
        counter.innerHTML = i
    })
}

function incrementLikes(){
    likeBtn.addEventListener('click', () => {
        likes.innerHTML = `${i} likes` 
        ++i
    })
}
likes.innerHTML = `${i} likes`

function addComment(e){
        e.preventDefault()
        const comment = document.createElement('li')
        comment.innerHTML = commentForm[0].value
        comments.append(comment)
        commentForm.reset()

        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = 'x'
        comment.append(deleteBtn)

        deleteBtn.addEventListener('click', () => {
            comment.remove()
        })
}
commentForm.addEventListener('submit', addComment)


pause()
incDecButtons()
incrementLikes()
