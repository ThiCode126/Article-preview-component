let shareDiv = document.getElementById('svg-share');
let shareContent = document.getElementById('share-content');

shareDiv.addEventListener("click", function () {
    console.log(shareDiv.classList)

    if (!shareDiv.classList.contains('dark')) {
        shareDiv.classList.add('dark');
        shareContent.style.opacity = 1;
    } else {
        shareDiv.classList.remove('dark');
        shareContent.style.opacity = 0;
    }
})