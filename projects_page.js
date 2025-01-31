const projects_container=[{
    name:'Rock Paper Scissior Game',
    description:'This Game Is Made Using HTML, CSS & JAVASCRIPT',
    image:'Rock_paer_scissior-pr.png',
    projects_link:'Rock_paper_scissior.html'
},{
    name:'Simple Calculator',
    description:'This Calculator Is Made Using HTML, CSS & JAVASCRIPT',
    image:'calculato img.png',
    projects_link:'/All projects/calculator/Calculator.html'  
},{
    name:'Rock Paper Scissior Game',
    description:'This Game Is Made Using HTML, CSS & JAVASCRIPT',
    image:'Rock_paer_scissior-pr.png',
    projects_link:'Rock_paper_scissior.html'
},{
    name:'Image Slider',
    description:'This image slider Is Made Using HTML, CSS & JAVASCRIPT',
    image:'image slider.png',
    projects_link:'/All projects/imageslider/imageslider.html'
}]

let projectHtml ='';
projects_container.forEach((project)=>{
   projectHtml+=`
        
        <div class="project-grid">
            <div class="project-card">
                <img src="${project.image}" alt="Project 1" class="project-image">
                <div class="project-content">
                    <h2 class="project-title">${project.name}</h2>
                    <p class="project-description">${project.description}</p>
                    <a href="${project.projects_link}" class="project-link">View Project</a>
                </div>
            </div>
            
        </div>`
});

document.querySelector('.js-portfolio').innerHTML=projectHtml;
console.log(projectHtml);