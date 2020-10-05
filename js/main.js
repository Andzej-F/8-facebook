import posts from'./data.js';
import renderPosts from './renderPosts.js';

renderPosts(posts);
/*

renderPosts
    for -> renderSinglePost
        renderHeader
        renderContent
            renderContentText
            renderContentGallery
        renderFooter

        */
// const asideDOM = document.querySelector('.messenger')
// asideDOM.innerhtml = '<span>Labas rytas :) </span>';
// asideDOM.innerHTML += '<span>Ka tu ?</span>';