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