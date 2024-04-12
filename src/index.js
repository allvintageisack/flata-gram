// write your code here
document.addEventListener("DOMContentLoaded", function () {
    
    function getsImage() {
      
      fetch("http://localhost:3000/images/1")
        .then((response) => response.json()) 
        .then((data) => {
          
          document.getElementById("card-title").textContent = data.title;
          document.getElementById("card-image").src = data.image;
          document.getElementById("like-count").textContent =
            data.likes + " likes";

          
          const commentsList = document.getElementById("comments-list");
          commentsList.innerHTML = ""; 
          data.comments.forEach((comment) => {
            const list = document.createElement("list"); 
            list.textContent = comment.content; 
            commentsList.appendChild(list); 
          });
        });

    
      fetch("http://localhost:3000/comments")
        .then((response) => response.json()) 
        .then((comments) => {
          
          const commentsList = document.getElementById("comments-list");
          comments.forEach((comment) => {
            const list = document.createElement("li"); 
            list.textContent = comment.content; 
            commentsList.appendChild(list); 
          });
        });
    }

    
    getsImage();

    
    document.getElementById("like-button").addEventListener("click", function () {
    
      const likesCount = document.getElementById("like-count");
      const currentLikes = parseInt(likesCount.textContent);
      likesCount.textContent = currentLikes + 1 + " likes";
    });


    document.getElementById("comment-form").addEventListener("submit", function (event) {
        event.preventDefault(); 
        
        const newComment = document.getElementById("comment").value;
        
        const commentsList = document.getElementById("comments-list");
        const li = document.createElement("li"); 
        li.textContent = newComment;
        commentsList.appendChild(li); 
        document.getElementById("comment").value = ""; 
      });
  });