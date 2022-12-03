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
  "https://images.unsplash.com/photo-1614107069882-797f3213125b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1640474252967-0615aef6d74c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1530368733572-4a21beaa8c9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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
  element.backgroundSize = "unset";
  element.backgroundRepeat = "no-repeat";
});
