const articlesData = [
  {
    week: '042620',
    headline: 'Largest Explosion Ever Observed',
    citation: 'Reuters',
    link:
      'https://www.reuters.com/article/us-space-exploration-supernova/scientists-enthralled-by-biggest-star-explosion-ever-observed-idUSKCN21W26B',
    img:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2027&q=80',
  },
  {
    week: '050320',
    headline: '2020 Pulitzer Prize Winners',
    citation: 'NPR',
    link:
      'https://www.npr.org/2020/05/04/849991957/2020-pulitzer-prize-winners-include-this-american-life-see-a-full-list',
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Pulitzer_Prizes_%28medal%29.png/800px-Pulitzer_Prizes_%28medal%29.png',
  },
  {
    week: '051020',
    headline: 'Why we should all be wearing face masks',
    citation: 'BBC',
    link: 'https://www.bbc.com/future/article/20200504-coronavirus-what-is-the-best-kind-of-face-mask',
    img: 'https://ichef.bbci.co.uk/wwfeatures/live/1600_900/images/live/p0/8c/7j/p08c7jft.jpg',
  },
  {
    week: '051720',
    headline: 'How Pandemics End',
    citation: 'New York Times',
    link: 'https://www.nytimes.com/2020/05/10/health/coronavirus-plague-pandemic-history.html',
    img:
      'https://static01.nyt.com/images/2020/05/07/science/00VIRUS-HISTORY1/00VIRUS-HISTORY1-superJumbo.jpg?quality=90&auto=webp',
  },
  {
    week: '052420',
    headline: 'Chines approves controversial security law for Hong Kong',
    citation: 'LA Times',
    link:
      'https://www.latimes.com/world-nation/story/2020-05-28/china-congress-approves-controversial-national-security-law-for-hong-kong',
    img: 'https://live.staticflickr.com/3931/15468365175_403ee9bb01_b.jpg',
  },
  {
    week: '053120',
    headline: 'Protests in Minnesota over George Floyd death',
    citation: 'AP News',
    link: 'https://apnews.com/e27cfce9464809aa8c91afd74c930bb5',
    img: 'https://storage.googleapis.com/afs-prod/media/64b134fdf619482caded369de4af6080/800.jpeg',
  },
  {
    week: '060720',
    headline: "Roger Goodell on Colin Kaepernick: 'We were wrong'",
    citation: 'CNN',
    link: 'https://www.cnn.com/2020/06/05/sport/roger-goodell-responds-nfl-stronger-together-video/index.html',
    img: 'https://www.mercurynews.com/wp-content/uploads/2016/09/untitled-1.jpg?w=654&h=377',
  },
  {
    week: '061420',
    headline: 'The Looming Bank Collapse',
    citation: 'The Atlantic',
    link: 'https://www.theatlantic.com/magazine/archive/2020/07/coronavirus-banks-collapse/612247/',
    img: 'https://si.wsj.net/public/resources/images/ED-AX951_FELDST_P_20180927100824.jpg',
  },
  {
    week: '062120',
    headline: 'What Police Reform could look like',
    citation: 'NPR',
    link:
      'https://www.npr.org/2020/06/15/876790680/what-federal-police-reform-could-include-and-what-the-sticking-points-may-be',
    img:
      'https://media.npr.org/assets/img/2020/06/14/gettyimages-1219773069_custom-cab9b4cc0d50e6878ba60ec1c84a7e46fb06808f-s800-c85.jpg',
  },
  {
    week: '062820',
    headline: 'Jon Stewart is Back to Weigh In',
    citation: 'New York Times Magazine',
    link:
      'https://www.nytimes.com/interactive/2020/06/15/magazine/jon-stewart-interview.html?action=click&module=Editors%20Picks&pgtype=Homepage?utm_source=digg',
    img: 'https://static01.nyt.com/images/2020/06/21/magazine/21mag-stewart/21mag-stewart-jumbo.jpg',
  },
  {
    week: '070520',
    headline: 'Russia offered bounties on american troops',
    citation: 'NYT',
    link: 'https://www.nytimes.com/2020/06/26/us/politics/russia-afghanistan-bounties.html',
    img:
      'https://im-media.voltron.voanews.com/Drupal/01live-166/styles/892x501/s3/2019-08/reu_us_troops_afgh_640x.jpg?itok=ZD2FO7fn',
  },
  {
    week: '071220',
    headline: 'Letter to our newborn American daughter',
    citation: 'BBC',
    link: 'https://www.bbc.com/news/world-us-canada-53181334',
    img: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/17AEA/production/_113120079_gettyimages-1194189631.jpg',
  },
  {
    week: '071920',
    headline: 'Kidnapping of Protesters',
    citation: 'Reuters',
    link:
      'https://www.reuters.com/article/us-global-race-protests-portland/u-s-swoops-down-on-portland-protesters-after-trump-order-to-protect-monuments-idUSKCN24I2W5',
    img: 'https://www.abc.net.au/cm/rimage/12469906-16x9-xlarge.jpg',
  },
  {
    week: '072620',
    headline: 'The dangerous new conspiracy theory in America',
    citation: 'The Atlantic',
    link: 'https://www.theatlantic.com/magazine/archive/2020/06/qanon-nothing-can-stop-what-is-coming/610567/',
    img:
      'https://static.wixstatic.com/media/dc3ec2_a14b754c415647afacea962d77f77ce9~mv2.jpg/v1/fill/w_1000,h_562,al_c,q_90,usm_0.66_1.00_0.01/dc3ec2_a14b754c415647afacea962d77f77ce9~mv2.jpg',
  },
  {
    week: '080220',
    headline: 'A Vaccine Reality Check',
    citation: 'The Atlantic',
    link: 'https://www.theatlantic.com/health/archive/2020/07/covid-19-vaccine-reality-check/614566/',
    img:
      'https://cdn.theatlantic.com/thumbor/to7opDBwrywVW_uZ_fz6qeeS5zY=/0x0:2000x1125/720x405/media/img/mt/2020/07/webart_Vaccine2_KM/original.jpg',
  },
  {
    week: '080920',
    headline: 'US Intelligence: Russia, China, Iran meddingling in US Election',
    citation: 'Reuters',
    link:
      'https://www.reuters.com/article/us-usa-election-interference/u-s-counterspy-chief-warns-russia-china-iran-trying-to-meddle-in-2020-election-idUSKCN253304',
    img:
      'https://s3.reutersmedia.net/resources/r/?m=02&d=20200807&t=2&i=1528812706&w=640&fh=&fw=&ll=&pl=&sq=&r=LYNXNPEG761KK',
  },
  {
    week: '081620',
    headline: 'The Trump Pandemic',
    citation: 'Slate',
    link: 'https://slate.com/news-and-politics/2020/08/trump-coronavirus-deaths-timeline.html',
    img: 'https://compote.slate.com/images/7186d4a5-25f0-47b0-a857-2a9bec51e593.jpeg',
  },
  {
    week: '082320',
    headline: 'Blood & Anguish: Beirut after the Blast',
    citation: 'New York Magazine',
    link:
      'https://www.nybooks.com/daily/2020/08/18/broken-glass-blood-and-anguish-beirut-after-the-blast/?src=longreads',
    img: 'https://cdn.nybooks.com/wp-content/uploads/2020/08/GettyImages-1266425003.jpeg',
  },
  {
    week: '083020',
    headline: 'Brain Implants that could Change Humanity',
    citation: 'New York times',
    link: 'https://www.nytimes.com/2020/08/28/opinion/sunday/brain-machine-artificial-intelligence.html',
    img:
      'https://media4.s-nbcnews.com/j/newscms/2017_46/2227696/171115-brain-mn-1400_14295f32bd4e25a953eecd65cf2676d0.fit-760w.jpg',
  },
  {
    week: '090620',
    headline: 'How Chadwick Boseman came to Wakanda',
    citation: 'BBC',
    link: 'https://www.bbc.com/news/stories-54014997',
    img: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/12C36/production/_114245867_976xchadwick1.jpg',
  },
  {
    week: '091320',
    headline: 'The Costs of Male Entitlement',
    citation: 'The New Yorker',
    link: 'https://www.newyorker.com/news/q-and-a/kate-manne-on-the-costs-of-male-entitlement',
    img:
      'https://media.newyorker.com/photos/5f4fccd07f07707d656e0fe3/master/w_2560%2Cc_limit/Chotiner-KateManneMaleEntitlement.jpg',
  },
  {
    week: '092020',
    headline: 'The Supply of Disinformation',
    citation: 'The Atlantic',
    link: 'https://www.theatlantic.com/ideas/archive/2020/09/future-propaganda-will-be-computer-generated/616400/',
    img:
      'https://www.theglobeandmail.com/resizer/sZLOluj5bpRRX1rPACLqikH865E=/3000x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/ELJTVY52R5EHBAFERRYZ6V766A.jpg',
  },
  {
    week: '092720',
    headline: 'Terrorists & Cartels use Western Banks to launder Money',
    citation: 'Buzzfeed',
    link: 'https://www.buzzfeednews.com/article/jasonleopold/fincen-files-financial-scandal-criminal-networks',
    img: 'https://internationalbanker.com/wp-content/uploads/2020/03/anti-money-laundering.jpg',
  },
  {
    week: '100420',
    headline: "Trump's Tax Returns Unveiled",
    citation: 'New York TImes',
    link: 'https://www.nytimes.com/interactive/2020/09/27/us/donald-trump-taxes.html',
    img: 'https://static01.nyt.com/images/2020/09/27/multimedia/thing-promo/thing-promo-superJumbo.jpg',
  },
  {
    week: '101120',
    headline: 'The Mad Genius of Eddie Van Halen',
    citation: 'The Atlantic',
    link: 'https://www.theatlantic.com/culture/archive/2020/10/mad-genius-eddie-van-halen/616684/',
    img:
      'https://cdn.theatlantic.com/thumbor/25wKX7qU1nw4TqJSyiuu5JpQ1Og=/0x74:1200x749/720x405/media/img/mt/2020/10/VAN_HALEN_LIVE_BW_1982_NZ_881200px/original.jpg',
  },
  {
    week: '101820',
    headline: 'Inside the Fall of the CDC',
    citation: 'ProPublica',
    link: 'https://www.propublica.org/article/inside-the-fall-of-the-cdc',
    img: 'https://cdn.digg.com/optimized/730x400/wp-contentuploads20201015181951test-222.jpg?v=1602858159',
  },
  {
    week: '102520',
    headline: 'Pope Support Civil Unions but needs to do more',
    citation: 'The New Yorker',
    link:
      'https://www.newyorker.com/news/daily-comment/pope-francis-supports-same-sex-civil-unions-but-the-church-must-do-more',
    img:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JV4JITQTWEI6XISYMFFM6K4QNU.jpg&w=1440',
  },
  {
    week: '110120',
    headline: 'How Trump Could Attempt a Coup',
    citation: 'The Atlantic',
    link: 'https://www.theatlantic.com/politics/archive/2020/11/how-trump-could-attempt-coup/616954/',
    img:
      'https://cdn.theatlantic.com/thumbor/keNZaQ88PrqUx4BhSRF5pjHIIvc=/720x405/media/img/mt/2020/11/PEN/original.jpg',
  },
  {
    week: '110820',
    headline: 'Great Turnout, but Our Voting System is Flawed',
    citation: 'New York Times',
    link: 'https://www.nytimes.com/2020/11/04/opinion/election-day-voting.html',
    img: 'https://static01.nyt.com/images/2020/11/04/opinion/04manjooWeb/04manjooWeb-jumbo.jpg?quality=90&auto=webp',
  },
  {
    week: '111520',
    headline: "Long-term Damage of Trump's Anti-democratic lies",
    citation: 'The New Yorker',
    link: 'https://www.newyorker.com/news/our-columnists/the-long-term-damage-of-trumps-antidemocratic-lies',
    img: 'https://media.newyorker.com/photos/5faeb80147076cd7d378d324/master/w_2560%2Cc_limit/Cassidy-TrumpsDamage.jpg',
  },
  {
    week: '112220',
    headline: 'The Last Children of Down Sydrome',
    citation: 'The Atlantic',
    link: 'https://www.theatlantic.com/magazine/archive/2020/12/the-last-children-of-down-syndrome/616928/',
    img: 'https://cdn.theatlantic.com/assets/media/img/2020/11/WEL_Zhang_Downs_1/original.jpg',
  },
  {
    week: '112920',
    headline: 'HEADLINE',
    citation: 'Citation',
    link: '#',
    img:
      'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    week: '120620',
    headline: 'HEADLINE',
    citation: 'Citation',
    link: '#',
    img:
      'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    week: '121320',
    headline: 'HEADLINE',
    citation: 'Citation',
    link: '#',
    img:
      'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    week: '122020',
    headline: 'HEADLINE',
    citation: 'Citation',
    link: '#',
    img:
      'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    week: '122720',
    headline: 'HEADLINE',
    citation: 'Citation',
    link: '#',
    img:
      'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    week: '010321',
    headline: 'HEADLINE',
    citation: 'Citation',
    link: '#',
    img:
      'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
];
