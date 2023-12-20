async function fetchToken() {
  const token =
    "592b5ad00ef2da675e568d015048fca36b4cb33021c28abddec69e09d736d557";

  const tokenResponse = await fetch(
    "https://api.blog.redberryinternship.ge/api/token",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );

  if (!tokenResponse.ok) {
    throw new Error("Failed to fetch token");
  }

  return await tokenResponse.json();
}

async function fetchData() {
  try {
    const categoriesResponse = await fetch(
      "https://api.blog.redberryinternship.ge/api/categories",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!categoriesResponse.ok) {
      throw new Error(
        `Failed to fetch categories. Status: ${categoriesResponse.status}`
      );
    }

    const responseData = await categoriesResponse.json();
    const categoriesData = responseData.data;

    console.log("Categories Data:", categoriesData);

    if (categoriesData && categoriesData.length > 0) {
      const categoryContainer = document.getElementById("categoryContainer");

      categoriesData.forEach((category) => {
        const categoryDiv = document.createElement("div");

        categoryDiv.textContent = category.title;
        categoryDiv.style.color = category.text_color;
        categoryDiv.style.backgroundColor = category.background_color;
        categoryDiv.style.padding = "10px";
        categoryDiv.style.margin = "5px";
        categoryDiv.style.borderRadius = "10px";

        categoryDiv.addEventListener("click", () => {
          categoryDiv.classList.toggle("clicked");
        });
        categoryContainer.appendChild(categoryDiv);
      });
    } else {
      console.log("No categories found.");
    }
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  }
}

fetchData();
// function showLoginForm() {
//   const loginFormContainer = document.getElementById("loginFormContainer");
//   const addBlogButton = document.getElementById("addBlogButton");

//   // Show login form
//   loginFormContainer.innerHTML = "";
//   fetch("login.html")
//     .then((response) => response.text())
//     .then((html) => {
//       loginFormContainer.innerHTML = html;
//       loginFormContainer.style.display = "block";
//       // Hide add blog button
//       addBlogButton.style.display = "none";
//     });
// }

// // Function to handle successful login
// function handleSuccessfulLogin() {
//   const loginFormContainer = document.getElementById("loginFormContainer");
//   const verifiedUserContent = document.getElementById("verifiedUserContent");
//   const addBlogButton = document.getElementById("addBlogButton");

//   // Hide login form
//   loginFormContainer.style.display = "none";

//   // Show verified user content
//   verifiedUserContent.style.display = "block";

//   // Show add blog button
//   addBlogButton.style.display = "block";
// }

// // Function to handle OK button click after successful login
// function okButtonClicked() {
//   // Add your logic here for what should happen when the OK button is clicked
//   alert("OK button clicked!");
// }
