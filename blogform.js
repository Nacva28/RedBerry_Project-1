const blogs = [];

function addBlog() {
  const blogTitle = document.getElementById("blogTitle").value;
  const author = document.getElementById("author").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const blogContent = document.getElementById("blogContent").value;

  const newBlog = {
    title: blogTitle,
    author: author,
    date: date,
    category: category,
    content: blogContent,
  };

  blogs.push(newBlog);
  updateBlogList();
}

function updateBlogList() {
  const blogContainer = document.getElementById("blogContainer");
  blogContainer.innerHTML = "";

  blogs.forEach((blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog");

    const imgTag = document.createElement("img");
    imgTag.src = "placeholder.jpg"; 
    imgTag.alt = "Blog Image";

    const authorTag = document.createElement("p");
    authorTag.textContent = `Author: ${blog.author}`;

    const dateTag = document.createElement("p");
    dateTag.textContent = `Date: ${blog.date}`;

    const categoryTag = document.createElement("p");
    categoryTag.textContent = `Category: ${blog.category}`;

    const contentTag = document.createElement("p");
    contentTag.textContent = blog.content;

    const infoLink = document.createElement("a");
    infoLink.href = "#"; 
    infoLink.textContent = "Read More";

 
    blogDiv.appendChild(imgTag);
    blogDiv.appendChild(authorTag);
    blogDiv.appendChild(dateTag);
    blogDiv.appendChild(categoryTag);
    blogDiv.appendChild(contentTag);
    blogDiv.appendChild(infoLink);

    blogContainer.appendChild(blogDiv);
  });
}
