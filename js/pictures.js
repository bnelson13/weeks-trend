const picturesData = [
{
    "week": "042620",
    "headline": "Dubai at Sunrise",
    "citation": "Piotr Chrobot",
    "link": "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
    "img": "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
},{
    "week": "050320",
    "headline": "Sunlight in the Forest",
    "citation": "John Towner",
    "link": "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "img": "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "051020",
    "headline": "Calm Light",
    "citation": "John Westrock",
    "link": "https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "img": "https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "051720",
    "headline": "Roys Peak",
    "citation": "Aaron Sebastion",
    "link": "https://images.unsplash.com/photo-1528988719300-046ff7faf8cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
    "img": "https://images.unsplash.com/photo-1528988719300-046ff7faf8cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
},
{
    "week": "052420",
    "headline": "Monument Valley",
    "citation": "Mar Bocatcat",
    "link": "https://images.unsplash.com/photo-1498252207774-50583342eb33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "img": "https://images.unsplash.com/photo-1498252207774-50583342eb33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "053120",
    "headline": "Micronesia",
    "citation": "Marek Okon",
    "link": "https://images.unsplash.com/photo-1553602932-f93f674a9aaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1671&q=80",
    "img": "https://images.unsplash.com/photo-1553602932-f93f674a9aaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1671&q=80"
},
{
    "week": "060720",
    "headline": "Poaso Rolle Italy",
    "citation": "Massimiliano Morosinotto",
    "link": "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "img": "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
},
{
    "week": "061420",
    "headline": "Eiffel Tower",
    "citation": "Chris Karidis",
    "link": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
    "img": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
},
{
    "week": "062120",
    "headline": "Seville Spain",
    "citation": "Massimiliano Morosinotto",
    "link": "https://images.unsplash.com/photo-1554743847-2604e27f3dd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1901&q=80",
    "img": "https://images.unsplash.com/photo-1554743847-2604e27f3dd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
},
{
    "week": "062820",
    "headline": "Bridge over Water",
    "citation": "Martin Damboldt",
    "link": "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "img": "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
},
{
    "week": "070520",
    "headline": "Mountain Range",
    "citation": "Pixabay",
    "link": "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "071220",
    "headline": "Ariel Seashore",
    "citation": "Artem Beliaikin",
    "link": "https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "071920",
    "headline": "Red Leaf Road",
    "citation": "Pixabay",
    "link": "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "072620",
    "headline": "Beach Cottages",
    "citation": "Julius Silver",
    "link": "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "080220",
    "headline": "Rolling Farmhills",
    "citation": "Christian Heitz",
    "link": "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "080920",
    "headline": "Bright Blue Bay",
    "citation": "Pixabay",
    "link": "https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "081620",
    "headline": "Slow Forest Stream",
    "citation": "ian Turnell",
    "link": "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "082320",
    "headline": "Forest Elephant",
    "citation": "Pixabay",
    "link": "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "083020",
    "headline": "Banff",
    "citation": "James Wheeler",
    "link": "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "090620",
    "headline": "Dock Sunrise",
    "citation": "Pok Rie",
    "link": "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "091320",
    "headline": "Beach Breeze",
    "citation": "Fabian Wiktor",
    "link": "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "092020",
    "headline": "Dark Forest",
    "citation": "Dương Nhân",
    "link": "https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "092720",
    "headline": "New York Sunset",
    "citation": "Quintin Gellar",
    "link": "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "100420",
    "headline": "Mt Fuji",
    "citation": "Pixabay",
    "link": "https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "101120",
    "headline": "Foreboding Mountain",
    "citation": "Eberhard Grossgasteiger",
    "link": "https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "101820",
    "headline": "Italian Alpine Lakes",
    "citation": "SplitShare",
    "link": "https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "102520",
    "headline": "Sunrise at Phu Quoc",
    "citation": "Pixabay",
    "link": "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "110120",
    "headline": "Lighthouse Dusk",
    "citation": "Anand Dandekar",
    "link": "https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/1532771/pexels-photo-1532771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "110820",
    "headline": "Winter Forest",
    "citation": "Pixabay",
    "link": "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "111520",
    "headline": "China Step Farm",
    "citation": "Pixabay",
    "link": "https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "112220",
    "headline": "Alpine Beach",
    "citation": "Eberhard Grossgasteiger",
    "link": "https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "112920",
    "headline": "Epic Valley",
    "citation": "Roberto Shumski",
    "link": "https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "120620",
    "headline": "Rice Field Sunset",
    "citation": "Joahnnes Plenio",
    "link": "https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "121320",
    "headline": "Golden Hour at Bay Bridge",
    "citation": "Mohamed Almari",
    "link": "https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "122020",
    "headline": "Winter Cabin",
    "citation": "Luca Chiandoni",
    "link": "https://images.pexels.com/photos/3375674/pexels-photo-3375674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/3375674/pexels-photo-3375674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "122720",
    "headline": "Forest Sunbeams",
    "citation": "Skitter Photo",
    "link": "https://images.pexels.com/photos/240040/pexels-photo-240040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/240040/pexels-photo-240040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    "week": "010321",
    "headline": "Canoe Sunrise",
    "citation": "Johannes Plenio",
    "link": "https://images.pexels.com/photos/1435075/pexels-photo-1435075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "img": "https://images.pexels.com/photos/1435075/pexels-photo-1435075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}]