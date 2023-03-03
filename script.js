    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
  
    function opentab(tabname){
       for(tablink of tablinks){
            tablink.classList.remove("active-link");
       } 
       for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
       }  
       event.currentTarget.classList.add("active-link");
       document.getElementById(tabname).classList.add("active-tab");
    }


    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyRgKGwisLZAvgKDHrCaUl_e43GOjrDFUmuXins_ls409cCoK44Rx5wkr0CoEA7RaZm/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener("submit", e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent"
            setTimeout(function(){
                msg.innerHTML =""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

    function updateClock() {
        // Get current time
        const now = new Date();
      
        // Extract hours, minutes, and seconds
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
      
        // Update the clock
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
      }
      
      // Update the clock every second
      setInterval(updateClock, 1000);