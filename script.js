window.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const titleInput = document.getElementById('titleInput');
    const contentInput = document.getElementById('contentInput');
    const imageInput = document.getElementById('imageInput');
    const postList = document.getElementById('postList');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = titleInput.value;
        const content = contentInput.value;
        const image = imageInput.files[0];
        const post = createPost(title, content, image);
        postList.prepend(post);
        postForm.reset();
    });

    function createPost(title, content, image) {
        const post = document.createElement('li');
        post.classList.add('post');

        const heading = document.createElement('h3');
        heading.textContent = title;
        post.appendChild(heading);

        if (image) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(image);
            img.alt = title;
            post.appendChild(img);
        }

        const paragraph = document.createElement('p');
        paragraph.textContent = content;
        post.appendChild(paragraph);

        return post;
    }
});
