function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let images = [
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://www.africanoverlandtours.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg",
];

document.addEventListener("DOMContentLoaded", function () {
  let element = document.getElementById("switch-image").style;
  let image = images[Math.floor(Math.random() * images.length)];
  while (image == getCookie("image")) {
    console.log("same");
    image = images[Math.floor(Math.random() * images.length)];
  }
  document.cookie = `image=${image}`;
  element.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0.29)), url(${image})`;
  element.backgroundSize = "cover";
  element.backgroundRepeat = "no-repeat";
});
