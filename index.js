
const $newColokshion = document.querySelector(".new-colokshion")
const $commet = document.querySelector(".commet")

const url = "https://jsonplaceholder.typicode.com/posts";


async function getPosts(url) {
    try {

        const response = await fetch(url)
        const result = await response.json()
        console.log(result)


        $newColokshion.innerHTML = result.map(creatPosts).join("..")
        console.log()

    }
    catch (e) {
        console.log("Ошибка: ", e)
    }

}
getPosts(url)
function creatPosts(posts) {
    return `<span class ="user" data-userid = ${JSON.stringify(posts.userId)}>${JSON.stringify(posts)}</span>`
}


async function commet(e) {
    try {


        console.log("target", e.target)
        console.log("UserId: ", e.target.dataset.userid)
        const userId = e.target.dataset.userid

        const urlComment = `https://jsonplaceholder.typicode.com/comments?postId=${userId}`
        console.log("ADRESS: ", urlComment)

        const response1 = await fetch(urlComment)
        const result1 = await response1.json()
        $commet.innerHTML = JSON.stringify(result1)
        console.log(result1);


    } catch (e) {
        console.log("Ошибка: ", e.message)
    }
}

$newColokshion.addEventListener("click", commet);
