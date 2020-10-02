function renderPosts(data) {
    // validacija-patikrink ar cia buvo gautas tinkamas
    // tipas (array siuo atveju) 
    console.log('Gavau duomenis');
    // logika, kuri generuoja turini

    let HTML = '';

    for (let i =0; i < data.length; i+= 1 ) {
        const post = data [i];
        HTML += `<div class="post">
                    <header>${post.author.name} ${post.author.lastname}</Header>
                    <div> 
                        ${post.content.text}
                    </div>
                    <footer>
                        LIKE + COMMENT
                    </footer>
                </div>`;

        //console.log(post.author.name);
    }
    console.log();
    // susirandame elementa, kuriame norime perrasyti turini
    const feedDOM = document.querySelector('main');
    console.log(feedDOM);

    // i ta elementa ikeliame HTML kintamojo reiksme
    console.log(feedDOM.innerHTML);

    feedDOM.innerHTML = HTML;
}

export default renderPosts;