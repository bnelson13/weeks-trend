const booksData = [{
    "week": "042620",
    "headline": "Sarum",
    "citation": "Edward Rutherford",
    "link": "https://amzn.to/35IEs2d",
    "img": "https://images.unsplash.com/photo-1503624277759-70b9549d70f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},{
    "week": "050320",
    "headline": "The Count of Monte Cristo",
    "citation": "Alexander Dumas",
    "link": "https://amzn.to/2zm1OyA",
    "img": "https://live.staticflickr.com/7157/6783272731_acd0134d44_b.jpg"
},
{
    "week": "051020",
    "headline": "Shogun",
    "citation": "James Clavell",
    "link": "https://amzn.to/2L7NyvZ",
    "img": "https://images.unsplash.com/photo-1583684977172-528983104c31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "051720",
    "headline": "Becoming",
    "citation": "Michelle Obama",
    "link": "https://amzn.to/2z674GO",
    "img": "https://localist-images.azureedge.net/photos/798916/huge/0087a6c7ef7a577a2bfec91ccf93468631e1d959.jpg"
},
{
    "week": "052420",
    "headline": "The Choice",
    "citation": "Dr. Edith Eger",
    "link": "https://amzn.to/2ApwX4H",
    "img": "https://upload.wikimedia.org/wikipedia/commons/5/52/Auschwitz_I_%2822_May_2010%29.jpg"
},
{
    "week": "053120",
    "headline": "Cloud Atlas",
    "citation": "David Mitchell",
    "link": "https://amzn.to/2TS6HqF",
    "img": "https://live.staticflickr.com/8285/7695231550_6bb301b258_z.jpg"
},
{
    "week": "060720",
    "headline": "White Fragility",
    "citation": "Robin DiAngelo",
    "link": "https://amzn.to/3eY5upR",
    "img": "https://img.apmcdn.org/fadc6810ccb845c54c3a9c154fc0473ddd7c4e34/normal/39fce8-20180705-diangelo-whitefragility-2-collage.jpg"
},
{
    "week": "061420",
    "headline": "Where the Crawdads Sing",
    "citation": "Delia Owens",
    "link": "https://amzn.to/37iLSKs",
    "img": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F09%2Fdelia-owens-1-2000.jpg&q=85"
},
{
    "week": "062120",
    "headline": "Upheaval",
    "citation": "Jared Diamond",
    "link": "https://amzn.to/3frbEis",
    "img": "https://www.rainydaybooks.com/sites/rainydaybooks.com/files/styles/large/public/author_photo/Jared%20Diamond%20Photo%20%26%20Softcover%20Current%2002042020.jpg?itok=NSf2RYRV"
},
{
    "week": "062820",
    "headline": "Circe",
    "citation": "Madeline Miller",
    "link": "https://amzn.to/2N5rAuJ",
    "img": "https://www.jcpl.org/wp-content/uploads/2018/09/Circe-Blog-1-1024x683.png"
},
{
    "week": "070520",
    "headline": "Breath",
    "citation": "James Nestor",
    "link": "https://amzn.to/3fKFj6H",
    "img": "https://images-na.ssl-images-amazon.com/images/I/71FV+sKuYsL.jpg"
},
{
    "week": "071220",
    "headline": "The Court of Miracles",
    "citation": "Kester Grant",
    "link": "https://amzn.to/3hF24dG",
    "img": "https://m.media-amazon.com/images/I/51q90GwnZjL.jpg"
},
{
    "week": "071920",
    "headline": "Educated",
    "citation": "Tara Westover",
    "link": "https://amzn.to/2Y85kXu",
    "img": "https://images.penguinrandomhouse.com/cover/9780399590504"
},
{
    "week": "072620",
    "headline": "BOOK",
    "citation": "Citation",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "080220",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "080920",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "081620",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "082320",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "083020",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "090620",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "091320",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "092020",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "092720",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "100420",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "101120",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "101820",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "102520",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "110120",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "110820",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "111520",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "112220",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "112920",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "120620",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "121320",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "122020",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "122720",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
},
{
    "week": "010321",
    "headline": "BOOK",
    "citation": "Citation",
    "link": "#",
    "img": "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
}]