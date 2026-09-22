const postListEl = document.querySelector('.post__list');

function onSearchChange(){
  console.log('254314')
}

async function main(){
  const id = localStorage.getItem("id")
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  const postsData = await posts.json();
  console.log(postsData)

  postListEl.innerHTML = postsData.map(post => `
    <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>`
  ).join('');
}

main();