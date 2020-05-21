// Show or close category drop down if clicked on category button
function catDropMenuToggle () {
    document.querySelector('#cat-drop-down').classList.toggle('show-cat-drop');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.cat-button')) {
        var dropdowns = document.getElementsByClassName("cat-drop-container");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-cat-drop')) {
                openDropdown.classList.remove('show-cat-drop');
            }
        }
    }
}

let catType = document.querySelector('.page-title').innerHTML;
let cardRefData;
(function () {
    if (catType === 'art') {
        cardRefData = artsData;
    } else if (catType === 'free classes') {
        cardRefData = classesData;
    } else if (catType === 'funny') {
        cardRefData = funnysData;
    } else if (catType === 'top ten lists') {
        cardRefData = toptensData;
    } else if (catType === 'trivia') {
        cardRefData = triviasData;
    } else {
        cardRefData = eval(`${catType}Data`);
    }
})();

let cardContainer = document.querySelector('.cat-card-holder');
let numberWeeks = weeksData.length;

let getType = function (vall) {
    let str = vall.toString();
    if (str === 'free classes') {
        return 'free class';
    } else if (str === 'art' || str === 'funny' || str === 'trivia'){
        return str;
    } else {
        return str.substring(0, str.length - 1);
    }
}

for(i = numberWeeks-1; i >= 0; i--){
    card = document.createElement('div');
    card.classList = 'cat-card-box';
    card.style.background = `url('${cardRefData[i].img}')`;
    card.style.backgroundRepeat = 'no-repeat';
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';

    cardA = document.createElement('a');
    cardA.classList = 'cat-card-link';
    cardA.target = 'blank';
    cardA.href = cardRefData[i].link;
    card.appendChild(cardA);
    
    cardType = document.createElement('div');
    cardType.classList = 'cardType';
    cardType.innerHTML = getType(catType);
    cardA.appendChild(cardType);

    cardHeadline = document.createElement('div');
    cardHeadline.classList = 'cardHeadline';
    cardHeadline.innerHTML = cardRefData[i].headline;
    cardA.appendChild(cardHeadline);

    cardBy = document.createElement('div');
    cardBy.classList = 'cardBy';
    cardBy.innerHTML = cardRefData[i].citation;
    cardA.appendChild(cardBy);
    
    cardContainer.appendChild(card);
} 

