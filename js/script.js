const spinner = document.getElementById("spinner")

function spinnerLoader(){
    setTimeout(() => {
        spinner.classList.add('hide')
    }, 2000)
}

window.addEventListener("scroll", () => {
    console.log(this.scrollY);
})