window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.style.height = "30px"; /* set the new height of the header */
    } else {
      header.style.height = "50px"; /* set the original height of the header */
    }
  });


  
  //why does the JS need to be called at the end of the page.

  // Set profile information
  const name = "Seokamela";
  const bio = "I am a software engineer graduate from Wethinkcode which is a peer to peer leaning environment, Communication and team work is highly encouraged the program offers NQF level 5 software engineer and runs for two years. first year I used Python and had a change to use google calendar API on one of the Team projects, Year two we mostly focused on java for our back-end and flutter for front end. also used React for another project which also require Java for back-end.";
  const pictureUrl = "/assests/profile.jpg";

  // Render profile information
  document.getElementById("name").textContent = name;
  document.getElementById("bio").textContent = bio;
  document.getElementById("profile-picture").src = pictureUrl;


