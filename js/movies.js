let moviesData = [
  {
    week: '042620',
    headline: 'Hostiles',
    citation: 'Scott Cooper',
    link: 'https://www.netflix.com/title/80199381',
    img: 'https://cinamigos.com/wp-content/uploads/Hostiles-movie-poster.jpg',
  },
  {
    week: '050320',
    headline: 'The Social Network',
    citation: 'David Fincher',
    link: 'https://www.netflix.com/title/70132721',
    img:
      'https://media.npr.org/assets/artslife/movies/2010/09/social-network/garfield-eisenberg_wide-96b2fdc6b0549c0d9f48395eccbb844160f74244-s800-c85.jpg',
  },
  {
    week: '051020',
    headline: 'Jiro Dreams of Sushi',
    citation: 'David Gelb',
    link: 'https://www.netflix.com/title/70181716',
    img: 'https://www-tc.pbs.org/independentlens/wp/wp-content/uploads/2013/12/jiro-dreams-of-sushi-1920x830.jpg',
  },
  {
    week: '051720',
    headline: 'Apocalypto',
    citation: 'Mel Gibson',
    link: 'https://amzn.to/36372LY',
    img: 'https://www.joblo.com/assets/images/joblo/news/2020/04/apocalypto-ban2.jpg',
  },
  {
    week: '052420',
    headline: 'Back to the future',
    citation: 'Robert Zemeckis',
    link: 'https://www.netflix.com/title/60010110',
    img: 'https://www.nme.com/wp-content/uploads/2019/05/RYM972.jpg',
  },
  {
    week: '053120',
    headline: 'Den of Theives',
    citation: 'Christian Gudegast',
    link: 'https://www.netflix.com/title/80196448',
    img: 'https://moviemanjackson.files.wordpress.com/2018/01/dot2.jpg',
  },
  {
    week: '060720',
    headline: 'Uncut Gems',
    citation: 'Josh Safdie, Benny Safdie',
    link: 'https://www.netflix.com/title/80990663',
    img: 'https://www.whats-on-netflix.com/wp-content/uploads/2019/10/uncut-gems-netflix-release-schedule.jpg',
  },
  {
    week: '061420',
    headline: 'Hell or High Water',
    citation: 'David Mackenzie',
    link: 'https://www.netflix.com/title/80108616',
    img:
      'https://static01.nyt.com/images/2017/01/17/watching/hell-or-high-water-watching-recommendation/18watching-recommendation-slide-3PNL-master1050.jpg',
  },
  {
    week: '062120',
    headline: 'Room',
    citation: 'Lenny Abrahamson',
    link: 'https://www.netflix.com/watch/80073823',
    img: 'https://static01.nyt.com/images/2018/11/05/arts/room-watching/16what-to-do-room-master1050.jpg',
  },
  {
    week: '062820',
    headline: 'Zodiac',
    citation: 'David Fincher',
    link: 'https://www.netflix.com/watch/70044686',
    img: 'https://icdn5.digitaltrends.com/image/digitaltrends/best-netflix-movies-zodiac-1200x9999.jpg',
  },
  {
    week: '070520',
    headline: 'Da 5 Bloods',
    citation: 'Spike Lee',
    link: 'https://www.netflix.com/title/81045635',
    img: 'https://nofilmschool.com/sites/default/files/styles/article_wide/public/da-5-bloods.jpg',
  },
  {
    week: '071220',
    headline: 'The Town',
    citation: 'Ben Affleck',
    link: 'https://www.netflix.com/watch/70127227',
    img: 'https://i.pinimg.com/originals/27/70/86/27708642fc69f4af7c692b39de1aaafb.jpg',
  },
  {
    week: '071920',
    headline: 'The Old Guard',
    citation: 'Gina Prince-Bythewood',
    link: 'https://www.netflix.com/title/81038963',
    img: 'https://img1.looper.com/img/gallery/the-old-guard-2-will-there-be-a-sequel/intro-1594406478.jpg',
  },
  {
    week: '072620',
    headline: 'The Guest',
    citation: 'Adam Wingard',
    link: 'https://www.netflix.com/title/70300664',
    img:
      'https://cdn.vox-cdn.com/thumbor/PBd-8dIBGmR3SI8ULVdASyF0WMw=/0x0:2048x1152/920x0/filters:focal(0x0:2048x1152):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/20036053/danstevenstheguest.jpg',
  },
  {
    week: '080220',
    headline: 'Walk Hard',
    citation: 'Jake Kasdan',
    link: 'https://www.netflix.com/title/70077550',
    img:
      'https://cdn.vox-cdn.com/thumbor/BWevNzfEE2H_uL1ClQbIK_23sgM=/0x0:2819x1880/920x0/filters:focal(0x0:2819x1880):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/20036236/12_20_Revisting_Walk_Hard.jpg',
  },
  {
    week: '080920',
    headline: 'Anna Karenina',
    citation: 'Joe Wright',
    link: 'https://www.netflix.com/title/70243443',
    img:
      'https://cdn.onebauer.media/one/empire-tmdb/films/96724/images/uTu5sqOXPSIQ0WLedyHdr6l7F2D.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg',
  },
  {
    week: '081620',
    headline: 'Eternal Sunshine of the Spotless Mind',
    citation: 'Michel Gondry',
    link: 'https://www.netflix.com/watch/60034545',
    img: 'https://frenchculture.org/sites/default/files/styles/max/public/eternalsunshine.jpg?itok=oR3jK3uS',
  },
  {
    week: '082320',
    headline: 'Crib Camp: A Disability Revolution',
    citation: 'James LeBrecht & Nicole Newnham',
    link: 'https://www.netflix.com/title/81001496',
    img:
      'https://static01.nyt.com/images/2020/03/25/arts/cripcamp1/merlin_170700864_579ee404-43b4-4eb7-97cf-1953989a7ffc-master1050.jpg',
  },
  {
    week: '083020',
    headline: 'Fractured',
    citation: 'Brad Anderson',
    link: 'https://www.netflix.com/watch/80223997',
    img:
      'https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSrkPHFHFt3JHfZOtaq2Naho-W8R0qxyTgNmDuM5etrbqvn_8hBS34qp5co6gh9EeW9I61LmTGx_yGG3ytieoDgjuHdF.jpg?r=054',
  },
  {
    week: '090620',
    headline: 'There Will be Blood',
    citation: 'Paul Thomas Anderson',
    link: 'https://www.netflix.com/watch/70075473',
    img: 'https://www.austinchronicle.com/binary/e478/blood.jpg',
  },
  {
    week: '091320',
    headline: 'Moonlight',
    citation: 'Barry Jenkins',
    link: 'https://www.netflix.com/watch/80121348',
    img:
      'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaPLwIvkc7mjK6ebdlnkRp9HlKKPfOQs25gx_Z5gzjgzbXMWiuIWlowpUQ2FVthxVV_J6phtspa3GLe9a9PsfFMe9_Pz.jpg?r=7bc',
  },
  {
    week: '092020',
    headline: 'The King',
    citation: 'David Michod',
    link: 'https://www.netflix.com/watch/80182016',
    img: 'https://i2-prod.mirror.co.uk/incoming/article18981148.ece/ALTERNATES/s1200b/0_TheKingjpeg.jpg',
  },
  {
    week: '092720',
    headline: 'Enola Holmes',
    citation: 'Harry Bradbeer',
    link: 'https://www.netflix.com/watch/81277950',
    img:
      'https://img.cinemablend.com/filter:scale/quill/b/6/3/f/9/a/b63f9a33c74ce9e7fda7c53259ef7976a3dbf56f.jpg?mw=600',
  },
  {
    week: '100420',
    headline: "I'm thinking of Ending Things",
    citation: 'Charlie Kaufman',
    link: 'https://www.netflix.com/watch/80211559',
    img:
      'https://static01.nyt.com/images/2020/09/01/arts/07watching-nl-thinking/merlin_176250954_761469ea-43e1-4f80-b578-30f8c56e0fc8-jumbo.jpg',
  },
  {
    week: '101120',
    headline: 'The Witches',
    citation: 'Robert Zemeckis',
    link: 'https://www.netflix.com/watch/20282991',
    img:
      'https://static01.nyt.com/images/2017/07/14/watching/the-witches-watching-recommendation/the-witches-watching-recommendation-jumbo-v2.jpg',
  },
  {
    week: '101820',
    headline: 'The Trial of the Chicago 7',
    citation: 'Aaron Sorkin',
    link: 'https://www.netflix.com/title/81043755',
    img:
      'https://media.vanityfair.com/photos/5f1755daf052016872aefde1/16:9/w_1999,h_1124,c_limit/Trial-of-the-Chicago-7-Lede.jpg',
  },
  {
    week: '102520',
    headline: 'The Platform',
    citation: 'Galder Gaztelu-Urrutia',
    link: 'https://www.netflix.com/watch/81128579',
    img:
      'https://www.indiewire.com/wp-content/uploads/2020/03/AAAABY6XHvQ5ZvMDRAcrmAbih1jU_j6EpzlTx8XgNQ4ZWjhQgpRc5j6p1zHnTHPlddEbqKi9MYct8ESGYIglHqlcEMpzVgL8.jpg?w=780',
  },
  {
    week: '110120',
    headline: 'The Two Popes',
    citation: 'Fernando Meirelles',
    link: 'https://www.netflix.com/watch/80174451',
    img: 'https://storage.googleapis.com/afs-prod/media/c2dd9dca4c3e4d559654966082c17e38/2160.jpeg',
  },
  {
    week: '110820',
    headline: 'Knock Down The House',
    citation: 'Rachel Lears',
    link: 'https://www.netflix.com/watch/81080637',
    img:
      'https://i.guim.co.uk/img/media/bf82f9badfff8e7cf6c968b06f91ad0727cd3026/467_0_3373_2024/master/3373.jpg?width=1200&quality=85&auto=format&fit=max&s=bf36492c40f308a2199f1e45d60e7062',
  },
  {
    week: '111520',
    headline: 'I am Mother',
    citation: 'Grant Sputore',
    link: 'https://www.netflix.com/watch/80227090',
    img:
      'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTppFokDIwpWRxyXyd5TH70XvAxGuGMxKlbUNy3OZ6z8VOepEfRMTG9rpCqMqUV7D_dv_cYns5l60yng_ed2Z_tmMStg.jpg?r=f36',
  },
  {
    week: '112220',
    headline: 'Icarus',
    citation: 'Bryan Fogel',
    link: 'https://www.netflix.com/watch/80168079',
    img: 'https://www.indiewire.com/wp-content/uploads/2016/11/31160063542_c967005559_h.jpg?w=780',
  },
  {
    week: '112920',
    headline: "The Queen's Gambit",
    citation: 'Scott Frank',
    link: 'https://www.netflix.com/watch/80234304',
    img: 'https://pbs.twimg.com/media/Elb8RabVgAEpFdq.jpg',
  },
  {
    week: '120620',
    headline: 'Athlete A',
    citation: 'Bonnie Cohen',
    link: 'https://www.netflix.com/watch/81034185',
    img:
      'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTIqT4zU5uVNgaYONYBVKru1gUahRsD9M2It9oRM3HRUTtCob-j7SgJkWbzE5-JJKV-s97WG0JsSNhgePXf4gs4j7lHw.jpg?r=a26',
  },
  {
    week: '121320',
    headline: 'Klaus',
    citation: 'Sergio Pablos',
    link: 'https://www.netflix.com/watch/80183187',
    img: 'https://angelusnews.com/wp-content/uploads/2019/11/Klaus_promo.png',
  },
  {
    week: '122020',
    headline: 'Kiss the Ground',
    citation: 'Rebecca & Josh Tickell',
    link: 'https://www.netflix.com/watch/81321999',
    img: 'https://kisstheground.com/wp-content/uploads/2019/11/iStock-889031338.jpg',
  },
  {
    week: '122720',
    headline: 'How the Grinch Stole Christmas',
    citation: 'Ron Howard',
    link: 'https://www.netflix.com/watch/60000901',
    img: 'https://spartanoracle.com/wp-content/uploads/2016/12/Screenshot_2016-12-08-23-01-44.png',
  },
  {
    week: '010321',
    headline: 'The Social Dilemma',
    citation: 'Jeff Orlowski',
    link: 'https://www.netflix.com/watch/81254224',
    img: 'https://static.independent.co.uk/2020/09/16/17/newFile.jpg',
  },
  {
    next:
      'ava, mank, triple 9, giving voice, the professor and the madman, noctural animals, incarnate, Midnight Sky, Braven, ',
  },
];
