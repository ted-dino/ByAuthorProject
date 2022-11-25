
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let images = [
	"assets/login-image.webp",
	"https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
	"https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-1/180978949_314228950059549_1005358403722529104_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=c6021c&_nc_ohc=V8C_UtkFbL0AX-P-k-P&_nc_ht=scontent-lga3-1.xx&oh=00_AfC3mrpKLwq3LW_nLuWvmBcB6IJbx73FhndwC1tcN4dqvQ&oe=63A85A88",
	"https://www.africanoverlandtours.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg"

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
});