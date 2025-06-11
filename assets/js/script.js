
import { Info } from "../../data/dados.js";

const links = document.querySelector('.links');
const redesSociais = document.querySelector('.redesSociais');
const avatar = document.querySelector('.avatar'); 
const description = document.querySelector('.description'); 
const userName = document.querySelector('.name'); 

// Avatar
avatar.setAttribute("src", Info.avatar);

// Name
const [firstName, lastName] = Info.name.split(' ');
const name_span = document.createElement("span");
name_span.textContent = lastName;

userName.textContent = `${firstName} `
userName.appendChild(name_span)

// Description
description.textContent = Info.description;

// Links
Info.links.map(link => {
    let links_a = document.createElement("a");
    links_a.setAttribute("href", link.link);
    let links_p = document.createElement("p");
    links_p.textContent = link.text;

    links_a.appendChild(links_p);
    links.appendChild(links_a);
});

// Redes Sociais
Info.socialLinks.map(item=> {
    let social_a = document.createElement("a");
    social_a.setAttribute("href", "#");

    let social_img = document.createElement("img");
    social_img.setAttribute("src", item.redeSocial);

    social_a.appendChild(social_img)
    redesSociais.appendChild(social_a);

});
