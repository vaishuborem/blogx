const blogs = [
  {
    title: "Introduction to JavaScript",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1000",
    content: "JavaScript is one of the most popular programming languages used to create interactive web pages."
  },
  {
    title: "Why Learn Web Development?",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000",
    content: "Web development allows you to create websites and applications."
  },
  {
    title: "Understanding CSS Basics",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1000",
    content: "CSS is used to style and design web pages."
  },
  {
    title: "HTML for Beginners",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1000",
    content: "HTML provides the structure of every website."
  }
];

let currentIndex = 0;
const blogsPerLoad = 2;

function displayBlogs() {
  const blogContainer = document.getElementById("blogContainer");

  for (
    let i = currentIndex;
    i < currentIndex + blogsPerLoad && i < blogs.length;
    i++
  ) {
    const blog = blogs[i];

    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

    blogCard.innerHTML = `
      <img src="${blog.image}" alt="Blog Image">
      <h2>${blog.title}</h2>
      <p>${blog.content}</p>
      <button class="btn">Read More</button>
    `;

    blogContainer.appendChild(blogCard);
  }

  currentIndex += blogsPerLoad;
}

function loadMoreBlogs() {
  if (currentIndex < blogs.length) {
    displayBlogs();
  } else {
    alert("No more blogs to load!");
  }
}

function addBlog() {
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const content = document.getElementById("content").value;

  if (title === "" || image === "" || content === "") {
    alert("Please fill all fields!");
    return;
  }

  blogs.unshift({
    title: title,
    image: image,
    content: content
  });

  const blogContainer = document.getElementById("blogContainer");
  blogContainer.innerHTML = "";

  currentIndex = 0;

  displayBlogs();
}