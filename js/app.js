// Design testing function to show border of every element
let borderButton = document.querySelector('.borderTog');
borderButton.addEventListener('click', borderToggle);
function borderToggle() {
    if (borderButton.innerHTML == 'OFF') {
        let elems = document.querySelectorAll('*')
        for (i = 0; i < elems.length; i++) {
            elems[i].style.border= '.5px solid red';
        }
        borderButton.innerHTML = 'ON';
    } else {
        let elems = document.querySelectorAll('*')
        for (i = 0; i < elems.length; i++) {
            elems[i].style.border= 'none';
        }
        borderButton.innerHTML = 'OFF';
    }
};

// Updates the drop down menu based upon array in weeks.js
const weekDropDown = document.querySelector('#weekSelect');
for(i = 0; i < weeksData.length; i++)
{
    let option;
    option = document.createElement('option');
    option.text = weeksData[i].name;
    option.value = weeksData[i].id;
    weekDropDown.appendChild(option);
} 

// Declare variables for current week and article data
let currentWeek = weekDropDown.value;
const cardTypeData = [articlesData, booksData, songsData, moviesData, picturesData, recipesData, artsData, websitesData, podcastsData, gadgetsData, tweetsData, funnysData, triviasData, classesData, toptensData];
const cardParts = ['week', 'headline', 'citation', 'link', 'img'];
let currentWeeksData = [];
let cardArray = document.querySelectorAll('.cardBox');

//Function that takes current week based on drop down menu
let updateCardDataArray = function () {
    currentWeek = weekDropDown.value;
    currentWeeksData = [];
    for (let i = 0; i < cardTypeData.length; i++) {
        currentWeeksData.push(dataSearch(currentWeek, cardTypeData[i]))
    }
};

// Function that will return the Object in the dataSet based on its week
let dataSearch = function (weekKey, dataSet) {
    for (let i = 0; i < dataSet.length; i++) {  
        if (dataSet[i].week === weekKey) {
            return dataSet[i];
        }
    }
};

updateCardDataArray();

//Function that will update card data based on week selected from drop down menu
let updateCards = function () {
    updateCardDataArray();
    for (let i = 0; i < cardTypeData.length; i ++) {
        cardArray[i].style.transition = 'all 1s ease';
        cardArray[i].style.background = `url('${currentWeeksData[i].img}')`;
        cardArray[i].style.backgroundRepeat = 'no-repeat';
        cardArray[i].style.backgroundSize = 'cover';
        cardArray[i].style.backgroundPosition = 'center';
        cardArray[i].querySelector('a').href=`${currentWeeksData[i].link}`;
        cardArray[i].querySelector('.cardHeadline').innerHTML=`${currentWeeksData[i].headline}`;
        cardArray[i].querySelector('.cardBy').innerHTML=`${currentWeeksData[i].citation}`;
    }
}

//Run update card fucntion on load
document.addEventListener("DOMContentLoaded", updateCards());

// Listens for a change to the Week selector and updates all cards
weekDropDown.addEventListener('change', updateCards);

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