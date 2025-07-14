const scriptURL = 'https://script.google.com/macros/s/AKfycbxEwtJISaz9I9Pw2843SUCIl0XBK_vSeXfGPdpnHQY3NY-Id6vZMRnDBqnOBS3Ujy6C/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh

    msg.innerHTML = "Message sent successfully"; // Show message immediately

    fetch("YOUR_ENDPOINT_URL", {
        method: "POST",
        body: new FormData(form)
    })
        .then(response => {
            setTimeout(function () {
                msg.innerHTML = "";
            }, 2000); // 2 seconds
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}