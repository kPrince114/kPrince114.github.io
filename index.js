const ham = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => {
    n.addEventListener("click", () => {
        ham.classList.remove("active");
        navMenu.classList.remove("active");
    })
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((element) => observer.observe(element));

// enable responsive functionality
GitHubCalendar(".react-activity-calendar", "kPrince114", { responsive: true });




var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {

    for (tablink of tablinks) {

        tablink.classList.remove("active-link");
    }


    for (tabcontent of tabcontents) {

        tabcontent.classList.remove("active-tab");

    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}
// go in google massage

const scriptURL = 'https://script.google.com/macros/s/AKfycbz2C7H8Sj2EBYq2lTbdrVXWzj1qqnleecpVL9249Fk8-KoM_Kx02i991VPuorttjXY/exec'
const form = document.forms['submit-to-google-sheet']
const msgsub = document.getElementById("msgsub");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        
        .then(response => {
            msgsub.innerHTML = "Massage sent successfully";
            
            setTimeout(function () {
                msgsub.innerHTML = "";
            }, 3000)
            form.reset();
        })

        .catch(error => console.error('Error!', error.message))

})
function goresume(){
    window.location.replace("https://drive.google.com/file/d/1L-NjfOQ1W4wCRG3esT9qllhYh86RaQRb/view?usp=sharing")
    
}

// document.querySelector("#resume-button-2").addEventListener("click", () => {
//     window.open("resume.pdf", "_blank");
//   })


  document.querySelector("#resume-button-1").addEventListener("click", () => {
    window.open("resume.pdf", "_blank");
  })