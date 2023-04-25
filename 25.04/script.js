const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");
const home = document.createElement("li");
const about = document.createElement("li");
const blog = document.createElement("li");
const contact = document.createElement("li");
const homeSec = document.createElement("section");
const aboutSec = document.createElement("section");
const blogSec = document.createElement("section");
const contactSec = document.createElement("section");

document.body.append(header);
header.append(nav);
nav.append(ul);
ul.append(home);
ul.append(about);
ul.append(blog);
ul.append(contact);
document.body.append(homeSec);
document.body.append(aboutSec);
document.body.append(blogSec);
document.body.append(contactSec);

home.innerText = "Home";
about.innerText = "About";
blog.innerText = "Blog";
contact.innerText = "Contact";

homeSec.innerText = "Home";
aboutSec.innerText = "About";
blogSec.innerText = "Blog";
contactSec.innerText = "Contact";

ul.style.height = "10vh";
ul.style.display = "flex";
ul.style.justifyContent = "space-around";
ul.style.background = "#000";
ul.style.alignItems = "center";
home.style.listStyle = "none";
home.style.color = "#fff";
home.style.cursor="pointer"
about.style.listStyle = "none";
about.style.color = "#fff";
about.style.cursor="pointer"
blog.style.listStyle = "none";
blog.style.color = "#fff";
blog.style.cursor="pointer"
contact.style.listStyle = "none";
contact.style.cursor="pointer"
contact.style.color = "#fff";

homeSec.style.height = "100vh";
homeSec.style.display = "flex";
homeSec.style.alignItems = "center";
homeSec.style.justifyContent = "center";
homeSec.style.fontSize = "20px";
homeSec.style.fontWeight = "bolder";
homeSec.style.border = "1px dashed #000";

aboutSec.style.height = "100vh";
aboutSec.style.display = "flex";
aboutSec.style.alignItems = "center";
aboutSec.style.justifyContent = "center";
aboutSec.style.fontSize = "20px";
aboutSec.style.fontWeight = "bolder";
aboutSec.style.border = "1px dashed #000";

blogSec.style.height = "100vh";
blogSec.style.display = "flex";
blogSec.style.alignItems = "center";
blogSec.style.justifyContent = "center";
blogSec.style.fontSize = "20px";
blogSec.style.fontWeight = "bolder";
blogSec.style.border = "1px dashed #000";

contactSec.style.height = "100vh";
contactSec.style.display = "flex";
contactSec.style.alignItems = "center";
contactSec.style.justifyContent = "center";
contactSec.style.fontSize = "20px";
contactSec.style.fontWeight = "bolder";
contactSec.style.border = "1px dashed #000";

homeSec.id = "homeSec";
aboutSec.id = "aboutSec";
blogSec.id = "blogSec";
contactSec.id = "contactSec";

home.addEventListener("click", function () {
  window.location.href = "#homeSec";
});
about.addEventListener("click",function(){
    window.location.href="#aboutSec"
})
blog.addEventListener("click",function(){
    window.location.href="#blogSec"
})
contact.addEventListener("click",function(){
    window.location.href="#contactSec"
})

