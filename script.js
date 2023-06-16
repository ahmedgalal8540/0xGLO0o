window.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');

    uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const files = fileInput.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const listItem = document.createElement('li');
        listItem.textContent = file.name;
        fileList.appendChild(listItem);
    }
    uploadForm.reset();
    });
});
