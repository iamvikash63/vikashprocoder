  export let blogPosts = [
{
      title: "10 Proven Ways to Make Money with ChatGPT in 2025",
      description: "In 2025, ChatGPT is more powerful than ever, offering people like you exciting ways to earn money online. Whether you're a student, .....",
      image: "10-proven-way-to-make-money-with-chatgpt.png",
      link: "Blog-post/10-New-Proven-Ways-to-Make-Money-with-ChatGPT-in-2025.html",
      Date: "15-06-2025",
   
    },
    
    {
      title: "Unique frontend Projects Ideas 2025 - Frontend Web Developer Projects Ideas",
      description: "Frontend web development can be different types. what comes in your mind when you think about frontend development?.....",
      image: "Unique frontend project idea.png",
      link: "Blog-post/Unique-Frontend-Web-Dev-Projects-Ideas.html",
      Date: "30-05-2025",
   
    },
    {
      title: "How to Earn Money from ChatGPT in 2025 – Ultimate In-Depth Guide",
      description: "The world of artificial intelligence is booming, and at the center of this revolution is ChatGPT, a powerful language model by OpenAI. What many......",
      image: "how to earn from chatgpt img.png",
      link: "Blog-post/How-to-Earn-Money-from-ChatGPT-in-2025-Ultimate-In-Depth-Guide.html",
      Date: "07-04-2025",
   
    },
    {
      title: "What is Jio Finance & How to Open a Savings Account in Jio Payment Bank",
      description: "<strong>Jio Finance</strong> is a digital financial services platform launched by <strong>Reliance Jio</strong>, a part of Reliance Industries Limited (RIL). ....",
      image: "jio finance.png",
      link: "Blog-post/jio-finance.html",
      Date: "06-04-2025",
   
    }
  ];



  let blogsHTMl='';
 
  blogPosts.forEach((Blogs)=>{
blogsHTMl+=`
            <div class="Blogs-page-div" >

            <div class="Blogs-img-page"><img src="Blogs Img/${Blogs.image}" alt="">
            </div>
            <div class="tag-blog"><p>App Dev</p> <p>${Blogs.Date}</p></div>
            <h3>${Blogs.title}</h3>
            <p>${Blogs.description}</p>
            <p class="serices-more"><a href="${Blogs.link}">Read More &rarr;</a></p>

    </div>`;
    
  });
  


  const blogContainer = document.querySelector('.blog-container');
  if(blogContainer){
  blogContainer.innerHTML = blogsHTMl;
  }

