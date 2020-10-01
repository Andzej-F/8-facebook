import posts from'./data.js';
import renderPosts from './renderPosts.js';

renderPosts(posts);

const asideDOM = document.querySelector('.messenger');

asideDOM.innerhtml = '<span>Labas rytas :) </span>';

asideDOM.innerHTML += '<span>Ka tu ?</span>';