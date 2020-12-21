let recipesData = [
  {
    week: '042620',
    headline: 'Foolproof Shakshuka',
    citation: 'Cookie and Kate',
    link: 'https://cookieandkate.com/foolproof-shakshuka-recipe/',
    img: 'https://cookieandkate.com/images/2019/02/best-shakshuka-recipe-3-768x1154.jpg',
  },
  {
    week: '050320',
    headline: "Traditional Shepherd's Pie",
    citation: 'The Wholesome Dish',
    link: 'https://www.thewholesomedish.com/the-best-classic-shepherds-pie/',
    img: 'https://www.thewholesomedish.com/wp-content/uploads/2019/02/The-Best-Classic-Shepherds-Pie-2.jpg',
  },
  {
    week: '051020',
    headline: 'Croque Madame',
    citation: 'How to Feed a Loon',
    link: 'https://howtofeedaloon.com/croque-madame/',
    img: 'https://howtofeedaloon.com/wp-content/uploads/2016/06/croak-madame-6-1170x780.jpg',
  },
  {
    week: '051720',
    headline: 'Dalgona Coffee',
    citation: 'Hummingbird High',
    link: 'https://www.hummingbirdhigh.com/2020/04/dalgona-coffee.html',
    img: 'https://www.hummingbirdhigh.com/wp-content/uploads/2020/04/dalgona-coffee_IMG_2700-500x500.jpg',
  },
  {
    week: '052420',
    headline: 'Best Roast Potatoes Ever',
    citation: 'Serious Eats',
    link: 'https://www.seriouseats.com/recipes/2016/12/the-best-roast-potatoes-ever-recipe.html',
    img:
      'https://cf-images.us-east-1.prod.boltdns.net/v1/static/4841592010001/09631ce8-3fda-44cf-8184-81671922df51/7f93fd64-d007-48e2-bfe2-cde987a6f0a1/1280x720/match/image.jpg',
  },
  {
    week: '053120',
    headline: 'The Smash Burger',
    citation: 'Ethan Chlebowski',
    link: 'https://www.ethanchlebowski.com/cooking-techniques-recipes/the-smash-burger-manifesto',
    img:
      'https://images.squarespace-cdn.com/content/v1/5d96a22649af0e131e78ca1c/1571925942764-DJRYCQKB3B2OC3RM951L/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/ThumbervBlog.jpg?format=1000w',
  },
  {
    week: '060720',
    headline: 'New England Clam Chowder',
    citation: 'Damn Delicious',
    link: 'https://damndelicious.net/2015/04/25/easy-clam-chowder/',
    img: 'https://s23209.pcdn.co/wp-content/uploads/2019/10/Easy-Clam-ChowderIMG_1064.jpg',
  },
  {
    week: '061420',
    headline: 'Traditional Greek Moussaka',
    citation: 'My Baking Saga',
    link: 'https://mybakingsaga.com/2018/07/traditional-greek-moussaka/#.XtkXI55KhTY',
    img: 'https://mybakingsaga.com/wp-content/uploads/2018/07/traditional-greek-moussaka.jpg',
  },
  {
    week: '062120',
    headline: 'Eggs Benedict',
    citation: 'New York Times',
    link: 'https://cooking.nytimes.com/recipes/1018626-eggs-benedict',
    img: 'https://static01.nyt.com/images/2018/11/21/dining/ar-eggs-benedict/ar-eggs-benedict-articleLarge.jpg',
  },
  {
    week: '062820',
    headline: 'Gourmet Hot Dog Bar',
    citation: 'How Sweet Eats',
    link: 'https://www.howsweeteats.com/2019/05/hot-dog-bar/',
    img: 'https://www.howsweeteats.com/wp-content/uploads/2019/05/hot-dog-bar-17.jpg',
  },
  {
    week: '070520',
    headline: 'Best Potato Salad',
    citation: 'Spicy Perspective',
    link: 'https://www.aspicyperspective.com/make-best-potato-salad-recipe/',
    img: 'https://tastesbetterfromscratch.com/wp-content/uploads/2013/05/Potato-Salad-8.jpg',
  },
  {
    week: '071220',
    headline: 'Homemade Cookies & Cream Ice Cream',
    citation: 'Food Network',
    link: 'https://www.foodnetwork.com/recipes/food-network-kitchen/homemade-cookies-and-cream-ice-cream-3363122',
    img: 'https://www.bigbearswife.com/wp-content/uploads/2016/04/Cookies-and-Cream-Ice-Cream-8.jpg',
  },
  {
    week: '071920',
    headline: 'Chicken & Mushroom Crepes',
    citation: 'Entertaining with Beth',
    link: 'https://entertainingwithbeth.com/chicken-and-mushroom-crepe-recipe/',
    img: 'https://entertainingwithbeth.com/wp-content/uploads/2019/05/Chicken-and-Mushroom-Crepe-Recipe-HERO-vert.jpg',
  },
  {
    week: '072620',
    headline: 'Slow Cooker Pulled Pork',
    citation: 'Delish',
    link: 'https://www.delish.com/cooking/recipe-ideas/recipes/a51267/slow-cooker-pulled-pork-recipe/',
    img:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-slow-cooker-pulled-pork-horizontal-2-1539619173.png?crop=1xw:1xh;center,top&resize=768:*',
  },
  {
    week: '080220',
    headline: 'Classic Potato Gratin',
    citation: 'Fine Cooking',
    link: 'https://www.finecooking.com/recipe/classic-potato-gratin',
    img: 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18152211/fc36ho036-03-main.jpg',
  },
  {
    week: '080920',
    headline: 'Easy Roated Brussel Sprouts',
    citation: 'Serious Eats',
    link: 'https://www.seriouseats.com/recipes/2013/12/easy-roasted-brussels-sprouts-food-lab-recipe.html',
    img: 'https://www.seriouseats.com/recipes/images/2015/10/roasted-brussels-sprouts-1500x1125.jpg',
  },
  {
    week: '081620',
    headline: 'Chocolate and Amaretto Torte',
    citation: 'Nigella Lawson',
    link: 'https://www.bbc.co.uk/food/recipes/sunken_chocolate_42872',
    img: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/sunken_chocolate_42872_16x9.jpg',
  },
  {
    week: '082320',
    headline: 'Braised Baby Back Ribs',
    citation: 'Sense & Edibility',
    link: 'https://senseandedibility.com/baby-back-ribs-braised/',
    img: 'https://senseandedibility.com/wp-content/uploads/2019/03/Braised-St-Louis-Spare-Ribs-18.jpg',
  },
  {
    week: '083020',
    headline: 'Lobster Bisque',
    citation: 'Cafe Delites',
    link: 'https://cafedelites.com/lobster-bisque/',
    img: 'https://cafedelites.com/wp-content/uploads/2020/02/Lobster-Bisque-IMAGE-2.jpg',
  },
  {
    week: '090620',
    headline: 'Chicken Fricassee',
    citation: 'Delish',
    link: 'https://www.delish.com/cooking/recipe-ideas/a23105767/easy-chicken-fricassee-recipe/',
    img:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-fricassee-horizontal-1536771733.png?resize=768:*',
  },
  {
    week: '091320',
    headline: 'Baja Fish Tacos',
    citation: 'Billi Parisi',
    link: 'https://www.billyparisi.com/baja-fish-taco-recipe-with-mango-salsa-and-queso-fresco/',
    img: 'https://www.billyparisi.com/wp-content/uploads/2012/07/fish-tacos-3.jpg',
  },
  {
    week: '092020',
    headline: 'Asian Chicken Lettuce Cups',
    citation: 'Joy Food Sunshine',
    link: 'https://joyfoodsunshine.com/asian-chicken-lettuce-wraps/',
    img:
      'https://nitrocdn.com/pYazsaHOTWIueLckVEtXQdYLdaoHaWlC/assets/static/source/wp-content/uploads/2018/08/56b612785285d7049f603e66a292bf8c.Asian-chicken-lettuce-wraps-recipe-1-768x768.jpg',
  },
  {
    week: '092720',
    headline: 'Classic Potato Latkes',
    citation: 'New York Times',
    link: 'https://cooking.nytimes.com/recipes/1015533-classic-potato-latkes',
    img:
      'https://static01.nyt.com/images/2018/12/09/dining/21COOKING-POTATO-LATKE/21COOKING-POTATO-LATKE-videoLarge.jpg',
  },
  {
    week: '100420',
    headline: 'Tiramisu',
    citation: 'Sallys Baking',
    link: 'https://sallysbakingaddiction.com/tiramisu/',
    img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/06/tiramisu-3-600x900.jpg',
  },
  {
    week: '101120',
    headline: 'Chicken Schnitzel with Jaegar Sauce',
    citation: 'Urban Feast',
    link: 'https://theurbanfeast.wordpress.com/2012/05/27/chicken-schnitzel-with-jaeger-sauce/',
    img: 'https://theurbanfeast.files.wordpress.com/2012/05/img_1507.jpg?w=500&h=333',
  },
  {
    week: '101820',
    headline: 'Classic Swiss Cheese Fondue',
    citation: 'Earth Food & Fire',
    link: 'https://www.earthfoodandfire.com/swiss-cheese-fondue/',
    img: 'https://www.earthfoodandfire.com/wp-content/uploads/2016/11/authentic-swiss-cheese-fondue.jpg',
  },
  {
    week: '102520',
    headline: 'Perfect Pumpkin Pie',
    citation: 'Once Upon a Chef',
    link: 'https://www.onceuponachef.com/recipes/perfect-pumpkin-pie.html',
    img: 'https://www.onceuponachef.com/images/2015/11/Perfect-Pumpkin-Pie4-760x504.jpg',
  },
  {
    week: '110120',
    headline: 'Coq au Vin',
    citation: 'Ina Garten',
    link: 'https://www.foodnetwork.com/recipes/ina-garten/coq-au-vin-recipe4-2011654',
    img:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/2/1/0/IG1005_Coq_Au_Vin_s4x3.jpg.rend.hgtvcom.616.462.suffix/1404919272117.jpeg',
  },
  {
    week: '110820',
    headline: 'Thai Green Curry',
    citation: 'Recipe in Eats',
    link: 'https://www.recipetineats.com/thai-green-curry/',
    img: 'https://www.recipetineats.com/wp-content/uploads/2019/02/Thai-Green-Curry_5.jpg?resize=650,910',
  },
  {
    week: '111520',
    headline: "World's Best Mashed Potatoes",
    citation: 'Delish',
    link: 'https://www.delish.com/cooking/recipe-ideas/recipes/a50630/perfect-mashed-potatoes-recipe/',
    img: 'https://natashaskitchen.com/wp-content/uploads/2016/11/Creamy-Mashed-Potatoes-4.jpg',
  },
  {
    week: '112220',
    headline: 'Best Turkey Recipe Possible',
    citation: 'Serious Eats',
    link: 'https://www.seriouseats.com/recipes/2012/11/butterfiled-roast-turkey-with-gravy-recipe.html',
    img: 'https://www.seriouseats.com/recipes/images/2015/04/20121108-spatchcock-turkey-food-lab-12-1500x1125.jpg',
  },
  {
    week: '112920',
    headline: 'Marinated Flank Steak',
    citation: 'Simply Recipes',
    link: 'https://www.simplyrecipes.com/recipes/grilled_marinated_flank_steak/',
    img: 'https://www.simplyrecipes.com/wp-content/uploads/2015/06/grilled-marinated-flank-steak-horiz-a-1200.jpg',
  },
  {
    week: '120620',
    headline: 'Mulled Wine',
    citation: 'Inspired by Charm',
    link: 'https://inspiredbycharm.com/mulled-wine/',
    img: 'https://www.vibrantplate.com/wp-content/uploads/2018/12/Mulled-wine-15-01-720x540.jpg',
  },
  {
    week: '121320',
    headline: 'Mint Chimichurri Lamb Chops',
    citation: 'Garlic & Zest',
    link: 'https://www.garlicandzest.com/mint-chimichurri-lamb-chops/',
    img:
      'https://i2.wp.com/www.primaverakitchen.com/wp-content/uploads/2019/07/Grilled-Lamb-Chops-with-Chimichurri-Sauce-Primavera-Kitchen-1-1.jpg',
  },
  {
    week: '122020',
    headline: 'Slow Cooker Honey Baked Ham',
    citation: 'Chunky Chef',
    link: 'https://www.thechunkychef.com/easy-copycat-honeybaked-ham-recipe/',
    img: 'https://www.thechunkychef.com/wp-content/uploads/2018/02/Copycat-Honey-Baked-Ham-slices-680x1020.jpg',
  },
  {
    week: '122720',
    headline: 'Broiled Lobster Tail',
    citation: 'Recipe Critic',
    link: 'https://therecipecritic.com/lobster-tail-recipe/',
    img: 'https://therecipecritic.com/wp-content/uploads/2020/01/broiled_lobster.jpg',
  },
  {
    week: '010321',
    headline: 'Healthy Baked Salmon',
    citation: 'Cafe Delites',
    link: 'https://cafedelites.com/sheet-pan-garlic-butter-baked-salmon/',
    img: 'https://cafedelites.com/wp-content/uploads/2018/03/Sheet-Pan-Baked-Salmon-Potatoes-Asparagus-2.jpg',
  },
  {
    week: '011021',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '011721',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '012421',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '013121',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '020721',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '021421',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '022121',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '022821',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '030721',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '031421',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '032821',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '040421',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '041121',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '041825',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '042521',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '050221',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '050921',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '051621',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '052321',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '053021',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '060621',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '061321',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '062021',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '062721',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '070421',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '071121',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '071821',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '072521',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '080121',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '080821',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '081521',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '082221',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '082921',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '090521',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '091221',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '091921',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '092621',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '100321',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '101021',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '101721',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '102421',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '103121',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '110721',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '111421',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '112121',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '112821',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '120521',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '121221',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '121921',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '010222',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
  {
    week: '122621',
    headline: 'TITLE',
    citation: 'SOURCE',
    link: 'LINK',
    img:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  },
];
