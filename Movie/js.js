
// drawer and profile animation code 
function openDrawer() {
  var drawer = document.querySelector('.drawer');
  var container = document.querySelector('.container');
  var footer = document.getElementById('footer');
  drawer.classList.toggle('open');
  container.classList.toggle('container-moved');
  footer.classList.toggle('footer-moved');
};


//profile code
function openProfile() {
  var profile = document.querySelector('.profile-container');
  profile.classList.toggle('open-acc-set');
};
//profile code end


//login code
  var loginBox = document.querySelector('.login-box');
  loginBox.style.display = 'none';
  function LoginForm(){ 
    if (loginBox.style.display === 'none') {
      loginBox.style.display = 'block';
      openProfile();
    } else {
        loginBox.style.display = 'none';
      openProfile();
    }
  };
//login code end


  //color changing code
function toggleColor(color) {
  var loginBox = document.querySelector('.login-box');
  var inputElements = document.querySelectorAll('.login-input input');
  var heading = document.querySelectorAll('.heads');
  loginBox.style.backgroundColor = color;

  // Set input box border color based on login-box color
  if (color === '#c18620') {
    inputElements.forEach(function(input) {
      input.style.borderColor = '#5d047a';
    });
    heading.forEach(function(heads) {
      heads.style.color = '#5d047a';
    });
  } else if (color === '#332ab7') {
    inputElements.forEach(function(input) {
      input.style.borderColor = '#9e0e3b';
    });
    heading.forEach(function(heads) {
      heads.style.color = '#ad0f3e';
    });
  } else if (color === '#081b29') {
    inputElements.forEach(function(input) {
      input.style.borderColor = '#5d047a';
    });
    heading.forEach(function(heads) {
      heads.style.color = '#ad0f3e';
    });
  } else if (color === '#1f293a') {
    inputElements.forEach(function(input) {
      input.style.borderColor = '#0b3d70';
    });
    heading.forEach(function(heads) {
      heads.style.color = '#ad0f3e';
    });
  } else if (color === '#191717') {
    inputElements.forEach(function(input) {
      input.style.borderColor = '#0c7233';
    });
    heading.forEach(function(heads) {
      heads.style.color = '#ad0f3e';
    });
  } else if (color === '#5d047a') {
    inputElements.forEach(function(input) {
      input.style.borderColor = '#332ab7';
    });
    heading.forEach(function(heads) {
      heads.style.color = '#897e05';
    });
    
  } else if (color === '#872c0c') {
    inputElements.forEach(function(input) {
      input.style.borderColor = '#c18620';
    });
  
    heading.forEach(function(heads) {
    heads.style.color = '#5d047a';
  });
} 
  // Store the color value in localStorage
  localStorage.setItem('loginBoxColor', color);
};

// Get the color value from localStorage and apply it to the login-box
var storedColor = localStorage.getItem('loginBoxColor');
if (storedColor) {
  toggleColor(storedColor);
};

// color changing code end



    // slide code
   
        const track = document.getElementById("image-track");
        console.log(track);

      
        // Mobile touch events
            window.ontouchstart = e => {
              track.dataset.touchStartX = e.touches[0].clientX;
            };

            window.ontouchend = () => {
              track.dataset.touchStartX = "0";
              track.dataset.prevPercentage = track.dataset.percentage;
            };

            window.ontouchmove = e => {
              if (track.dataset.touchStartX === "0") return;

              const touchDelta = parseFloat(track.dataset.touchStartX) - e.touches[0].clientX,
                    maxDelta = window.innerWidth/.5;

              const percentage = (touchDelta / maxDelta) * -100;
              let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
              nextPercentage = Math.min(nextPercentage, 0);
              nextPercentage = Math.max(nextPercentage, -100);
            
              track.dataset.percentage = nextPercentage;
            
              track.animate(
                {
                  transform: `translate(${nextPercentage}%, 0%)`
                },
                { duration: 1200, fill: "forwards" }
              );
            
              for (const image of track.getElementsByClassName("image")) {
                image.animate(
                  {
                    objectPosition: `${100 + nextPercentage}% center`
                  },
                  { duration: 1200, fill: "forwards" }
                );
              }
            };

      //toucn slide end


      //window slide
        window.onmousedown = e => {
           track.dataset.mouseDownAt= e.clientX;
        } 
        

        window.onmouseup = () => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
        }

        window.onmousemove = e =>{
            if (track.dataset.mouseDownAt === "0") return;

            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2 ;

            const percentage = (mouseDelta / maxDelta) * -100;

            let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
                nextPercentage= Math.min(nextPercentage,0); 
                nextPercentage= Math.max(nextPercentage,-100);

            track.dataset.percentage = nextPercentage;

            track.animate({
                transform: `translate(${nextPercentage}% , 0%)`
            },{duration:1200, fill:"forwards"});
            
            for (const image of track.getElementsByClassName("image")) {
                image.animate(
                  {
                    objectPosition: `${100 + nextPercentage}% center`
                  },
                  { duration: 1200, fill: "forwards" }
                );
              }
        }
      //window slide
 //slide end

