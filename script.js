document.querySelectorAll('.nav-a-container a ').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
  
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust offset for better alignment
                behavior: 'smooth'
            });
        }
    });
  });

  document.querySelectorAll('.second-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
  
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust offset for better alignment
                behavior: 'smooth'
            });
        }
    });
  });

  const testimonials = [
    {
      name: "Cherise G",
      photoUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "From design to development, Vikash handled everything perfectly. He transformed our outdated website into a modern, high-performing platform. Our customers love it!",
    },
    {
      name: "Rosetta Q",
      photoUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "Working with Vikash was a pleasure. He understood our requirements perfectly and delivered a modern, SEO-friendly website that boosted our online presence.",
    },
    {
      name: "Constantine V",
      photoUrl:
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      text: "Codeageing developed our e-commerce website with great attention to detail. The site is fast, secure, and beautifully designed. The entire process was smooth, and he was always available for support.",
    },
  ];


const image=document.querySelector('.Test-img');
const description=document.querySelector('.Test-descp');
const test_name=document.querySelector('.test-name');
let index=0;
function updateTest(){
const {name,photoUrl,text}=testimonials[index];
image.src=photoUrl;
description.innerHTML=text;
test_name.innerHTML=name;
index++;
if(index===testimonials.length){
    index=0;
}

setTimeout(()=>{
    updateTest();
},4000)
}
updateTest();



document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".flip-down");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          } else {
              entry.target.classList.remove("show"); // Remove class when out of view
          }
      });
  }, { threshold: 0.2 }); // Trigger when 20% of div is visible

  sections.forEach(section => {
      observer.observe(section);
  });
});


const formData=document.querySelectorAll('.form-input');
const submitbtn=document.querySelector('.submit-btn');
formData.forEach((Form_value)=>{
submitbtn.addEventListener('click',()=>{
 
  console.log(Form_value.value);
  
})
});