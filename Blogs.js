const blogPosts = [
    {
      title: "Unique frontend Projects Ideas 2025 - Frontend Web Developer Projects Ideas",
      description: "Frontend web development can be different types. what comes in your mind when you think about frontend development? frontend means user interface. when you visit any website or app what you see first ? frontend interface. when you are initialy interacting with web or app you interact with its user interface, where you can see the button, images,",
      image: "Unique frontend project idea.png",
      link: "Blog-post/Unique-Frontend-Web-Dev-Projects-Ideas.html",
      Date: "30-05-2025",
   
    },
    {
      title: "How to Earn Money from ChatGPT in 2025 – Ultimate In-Depth Guide",
      description: "The world of artificial intelligence is booming, and at the center of this revolution is ChatGPT, a powerful language model by OpenAI. What many people don’t realize is that ChatGPT is more than just a tool for chatting – it’s a virtual business partner. Whether you’re a student, freelancer, teacher, or entrepreneur, you can tap into the power of AI to generate multiple income streams. In this guide, we’ll explore practical, real-world methods to earn money from ChatGPT – even if you’re starting with zero experience.",
      image: "how to earn from chatgpt img.png",
      link: "Blog-post/How-to-Earn-Money-from-ChatGPT-in-2025-Ultimate-In-Depth-Guide.html",
      Date: "07-04-2025",
   
    },
    {
      title: "What is Jio Finance & How to Open a Savings Account in Jio Payment Bank",
      description: "<strong>Jio Finance</strong> is a digital financial services platform launched by <strong>Reliance Jio</strong>, a part of Reliance Industries Limited (RIL). It aims to offer a wide range of digital financial services including payments, banking, lending, insurance, and investment solutions—all in one place.",
      image: "jio finance.png",
      link: "Blog-post/jio-finance.html",
      Date: "06-04-2025",
   
    }
  ];

  let blogsHTMl='';
  blogPosts.forEach((Blog)=>{
blogsHTMl+=`
            <div class="Blogs-page-div" >

            <div class="Blogs-img-page"><img src="Blogs Img/${Blog.image}" alt="">
            </div>
            <div class="tag-blog"><p>App Dev</p> <p>${Blog.Date}</p></div>
            <h3>${Blog.title}</h3>
            <p>${Blog.description}</p>
            <p class="serices-more"><a href="${Blog.link}">Read More &rarr;</a></p>
        
    </div>`
  })

  document.querySelector('.blog-container').innerHTML =blogsHTMl;