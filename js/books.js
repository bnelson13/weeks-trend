const booksData = [
  {
    week: '042620',
    headline: 'Sarum',
    citation: 'Edward Rutherford',
    link: 'https://amzn.to/35IEs2d',
    img:
      'https://images.unsplash.com/photo-1503624277759-70b9549d70f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    week: '050320',
    headline: 'The Count of Monte Cristo',
    citation: 'Alexander Dumas',
    link: 'https://amzn.to/2zm1OyA',
    img: 'https://live.staticflickr.com/7157/6783272731_acd0134d44_b.jpg',
  },
  {
    week: '051020',
    headline: 'Shogun',
    citation: 'James Clavell',
    link: 'https://amzn.to/2L7NyvZ',
    img:
      'https://images.unsplash.com/photo-1583684977172-528983104c31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    week: '051720',
    headline: 'Becoming',
    citation: 'Michelle Obama',
    link: 'https://amzn.to/2z674GO',
    img: 'https://localist-images.azureedge.net/photos/798916/huge/0087a6c7ef7a577a2bfec91ccf93468631e1d959.jpg',
  },
  {
    week: '052420',
    headline: 'The Choice',
    citation: 'Dr. Edith Eger',
    link: 'https://amzn.to/2ApwX4H',
    img:
      'https://s3-ap-southeast-2.amazonaws.com/ceo-news/wordpress/wp-content/uploads/2020/05/19073453/dr_edith_eger_the_choice.jpg',
  },
  {
    week: '053120',
    headline: 'Cloud Atlas',
    citation: 'David Mitchell',
    link: 'https://amzn.to/2TS6HqF',
    img: 'https://live.staticflickr.com/8285/7695231550_6bb301b258_z.jpg',
  },
  {
    week: '060720',
    headline: 'White Fragility',
    citation: 'Robin DiAngelo',
    link: 'https://amzn.to/3eY5upR',
    img:
      'https://img.apmcdn.org/fadc6810ccb845c54c3a9c154fc0473ddd7c4e34/normal/39fce8-20180705-diangelo-whitefragility-2-collage.jpg',
  },
  {
    week: '061420',
    headline: 'Where the Crawdads Sing',
    citation: 'Delia Owens',
    link: 'https://amzn.to/37iLSKs',
    img:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F09%2Fdelia-owens-1-2000.jpg&q=85',
  },
  {
    week: '062120',
    headline: 'Upheaval',
    citation: 'Jared Diamond',
    link: 'https://amzn.to/3frbEis',
    img:
      'https://www.rainydaybooks.com/sites/rainydaybooks.com/files/styles/large/public/author_photo/Jared%20Diamond%20Photo%20%26%20Softcover%20Current%2002042020.jpg?itok=NSf2RYRV',
  },
  {
    week: '062820',
    headline: 'Circe',
    citation: 'Madeline Miller',
    link: 'https://amzn.to/2N5rAuJ',
    img: 'https://www.jcpl.org/wp-content/uploads/2018/09/Circe-Blog-1-1024x683.png',
  },
  {
    week: '070520',
    headline: 'Breath',
    citation: 'James Nestor',
    link: 'https://amzn.to/3fKFj6H',
    img: 'https://www.milibrary.org/sites/default/files/events/listing_images/1589576304/Breath.png',
  },
  {
    week: '071220',
    headline: 'The Court of Miracles',
    citation: 'Kester Grant',
    link: 'https://amzn.to/3hF24dG',
    img: 'https://s22421.pcdn.co/wp-content/uploads/2020/03/Untitled-design-40.png',
  },
  {
    week: '071920',
    headline: 'Educated',
    citation: 'Tara Westover',
    link: 'https://amzn.to/2Y85kXu',
    img: 'https://i0.wp.com/www.nationalreview.com/wp-content/uploads/2020/02/tara-westover-educated-book.jpg',
  },
  {
    week: '072620',
    headline: 'Deacon King Kong',
    citation: 'James McBride',
    link: 'https://amzn.to/3i0YtXM',
    img: 'https://www.barnesandnoble.com/blog/barnesy/wp-content/nas-uploads/2020/02/JamesMcBride-575x362.jpg',
  },
  {
    week: '080220',
    headline: 'The Beauty in Breaking',
    citation: 'Michele Harper',
    link: 'https://amzn.to/2WNdcfP',
    img: 'https://crowdcast-prod.imgix.net/-M4sZpXXs-SezOFKNd4A/event-cover-8610?w=800',
  },
  {
    week: '080920',
    headline: 'Tiny Habits',
    citation: 'Dr. BJ Fogg',
    link: 'https://amzn.to/2Dkc24t',
    img: 'https://www.rogerdooley.com/wp-content/uploads/2019/12/bj-fogg_feat.jpg',
  },
  {
    week: '081620',
    headline: 'Caste: The Origins of Our Discontents',
    citation: 'Isabel Wilkerson',
    link: 'https://amzn.to/3imFndZ',
    img:
      'https://hazlitt.net/sites/default/files/styles/article-header-image/public/field/image/wilkerson-main.jpg?itok=gjN-G9tR',
  },
  {
    week: '082320',
    headline: 'Intimations',
    citation: 'Zadie Smith',
    link: 'https://amzn.to/3aPBmw6',
    img: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2020/07/30/09/zadie-smith-six-essays-main.jpg',
  },
  {
    week: '083020',
    headline: 'A Burning',
    citation: 'Megha Majumdar',
    link: 'https://amzn.to/3hIRYrU',
    img:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MUDBJKFPAUI6VB2YX7I5ARKSLI.jpg&w=1200',
  },
  {
    week: '090620',
    headline: 'Surviving Autocracy',
    citation: 'Masha Gessen',
    link: 'https://amzn.to/3lzNPc7',
    img: 'https://www.thenation.com/wp-content/uploads/2020/06/gessen-autocracy-diptych-680x430.jpg',
  },
  {
    week: '091320',
    headline: 'Parakeet',
    citation: 'Marie-Helene Bertino',
    link: 'https://amzn.to/3jtzUCF',
    img:
      'https://i2.wp.com/www.paperbackparis.com/wp-content/uploads/2020/04/Marie-Helene-Bertino-Parakeet-Book-Review.png?fit=1100%2C733',
  },
  {
    week: '092020',
    headline: 'Clean Hands',
    citation: 'Patrick Hoffman',
    link: 'https://amzn.to/3jqhC5hcd',
    img: 'https://orion-uploads.openroadmedia.com/lg_b156ac505a84-patrickhoffman_interview.jpg',
  },
  {
    week: '092720',
    headline: 'The Water Dancer',
    citation: 'Ta-Nehisi Coates',
    link: 'https://amzn.to/3mVPqKg',
    img: 'https://i.ytimg.com/vi/jlm9E7PxHe4/maxresdefault.jpg',
  },
  {
    week: '100420',
    headline: 'How Much of These Hills Is Gold',
    citation: 'C Pam Zhang',
    link: 'https://amzn.to/2HeOQa8',
    img: 'https://rsvpa.witf.org/wp-content/uploads/2020/03/Untitled-6.jpg',
  },
  {
    week: '101120',
    headline: 'The Cold Millions',
    citation: 'Jess Walter',
    link: 'https://amzn.to/3nWDM1X',
    img: 'https://www.publishersweekly.com/images/data/ARTICLE_PHOTO/photo/000/073/73518-1.JPG',
  },
  {
    week: '101820',
    headline: 'Leave the World Behind',
    citation: 'Rumaan Alam',
    link: 'https://amzn.to/3dxIvCt',
    img: 'https://static.onecms.io/wp-content/uploads/sites/6/2020/09/17/Rumaan-Alam.jpg',
  },
  {
    week: '102520',
    headline: 'The Invisible Life of Addie LaRue',
    citation: 'V. E. Schwab',
    link: 'https://amzn.to/35sp0I0',
    img: 'https://www.josephbeth.com/sites/josephbeth.com/files/97B00F45-31F8-4690-974C-FD9702C0F911.JPG',
  },
  {
    week: '110120',
    headline: 'The Evening and the Morning',
    citation: 'Ken Follett',
    link: 'https://amzn.to/34qkkmw',
    img: 'https://s3.amazonaws.com/production.mediajoint.prx.org/public/piece_images/693426/kenfolletpic_small.JPG',
  },
  {
    week: '110820',
    headline: 'Untamed',
    citation: 'Glennon Doyle',
    link: 'https://amzn.to/3juE3pq',
    img: 'https://www.bookpassage.com/sites/bookpassage.com/files/author_photo/doyleGlennon_cover.png',
  },
  {
    week: '111520',
    headline: 'Caste',
    citation: 'Isabel Wilkerson',
    link: 'https://amzn.to/3jwrDNQ',
    img:
      'https://images.csmonitor.com/csm/2020/08/1107113_1_0817-caste-qa-wilkerson_standard.jpg?alias=standard_900x600',
  },
  {
    week: '112220',
    headline: 'Is this Anything',
    citation: 'Jerry Seinfeld',
    link: 'https://amzn.to/3myJplN',
    img: 'https://www.juf.org/uploadedImages/News/Arts_and_Entertainment/SCREENS_Seinfeld.jpg',
  },
  {
    week: '112920',
    headline: 'War',
    citation: 'Margaret MacMillan',
    link: 'https://www.amazon.com/War-How-Conflict-Shaped-Us/dp/1984856138',
    img:
      'https://i.cbc.ca/1.5695710.1598039893!/fileImage/httpImage/image.png_gen/derivatives/16x9_940/war-how-conflict-shaped-us-by-margaret-macmillan.png',
  },
  {
    week: '120620',
    headline: 'Uncanny Valley',
    citation: 'Anna Wiener',
    link: 'https://www.amazon.com/Uncanny-Valley-Memoir-Anna-Wiener/dp/0374278016',
    img: 'https://www.theparisreview.org/blog/wp-content/uploads/2020/01/untitled-6.jpg',
  },
  {
    week: '121320',
    headline: 'A Promised Land',
    citation: 'Barack Obama',
    link: 'https://www.amazon.com/Promised-Land-Barack-Obama/dp/1524763160',
    img: 'https://i.dailymail.co.uk/1s/2020/09/17/13/33299164-0-image-a-12_1600345409022.jpg',
  },
  {
    week: '122020',
    headline: "A Children's Bible",
    citation: 'Lydia Millet',
    link: 'https://www.amazon.com/Childrens-Bible-Novel-Lydia-Millet/dp/1324005033',
    img:
      'https://hips.hearstapps.com/amv-prod-alt.s3.amazonaws.com/wp-content/uploads/2020/05/ATA040420altaask_img01.jpg',
  },
  {
    week: '122720',
    headline: 'Shakespeare in a Divided America',
    citation: 'James Shapiro',
    link: 'https://www.amazon.com/Shakespeare-Divided-America-Plays-Future/dp/0525522298',
    img: 'https://thoughtgallery.org/wp-content/uploads/2020/05/Untitled-design13.jpg',
  },
  {
    week: '010321',
    headline: 'Hidden Valley Road',
    citation: 'Robert Kolker',
    link: 'https://www.amazon.com/Hidden-Valley-Road-Inside-American/dp/038554376X',
    img: 'https://hazlitt.net/sites/default/files/field/image/kolker-main.jpg',
  },
  {
    week: '011021',
    headline: 'The Vanishing Half',
    citation: 'Brit Bennet',
    link: 'https://deadline.com/wp-content/uploads/2020/06/vanishing-half-brit-bennett.jpg',
    img:
      'https://www.amazon.com/Vanishing-Half-Novel-Brit-Bennett/dp/0525536299/ref=sr_1_1?dchild=1&keywords=the+vanishing+half+brit+bennett&qid=1608166930&sr=8-1a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '011721',
    headline: 'Transcendent Kingdom',
    citation: 'Yaa Gyasi',
    link:
      'https://www.sfexaminer.com/wp-content/uploads/2020/09/22835456_web1_200930-SFE-KingdomBookReview-Gyasi_1-1280x720.jpg',
    img:
      'https://www.amazon.com/Transcendent-Kingdom-novel-Yaa-Gyasi/dp/0525658181/ref=sr_1_1?dchild=1&keywords=Transcendent+Kingdom+Yaa+Gyasi&qid=1608166951&sr=8-18.jpg',
  },
  {
    week: '012421',
    headline: 'Luster: A Novel',
    citation: 'Raven Leilani',
    link:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F08%2F03%2FLuster.jpg&q=85',
    img:
      'https://www.amazon.com/Luster-Novel-Raven-Leilani/dp/0374194327/ref=sr_1_1?dchild=1&keywords=Luster%3A+A+Novel+Raven+Leilani&qid=1608166965&sr=8-1',
  },
  {
    week: '013121',
    headline: 'Hamnet',
    citation: "Maggie O'FarrellOR",
    link: 'https://www.straitstimes.com/sites/default/files/articles/2020/04/14/st_20200414_wlhamnet1b9k_55957541.jpg',
    img:
      'https://www.amazon.com/Hamnet-Maggie-OFarrell/dp/0525657606/ref=sr_1_1?dchild=1&keywords=Hamnet+Maggie+O%27Farrell&qid=1608166975&sr=8-1ck_135114548.jpg',
  },
  {
    week: '020721',
    headline: 'Memorial',
    citation: 'Bryan Washington',
    link:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/GORWVUAXR4I6XPX3RBSCLG6S3A.jpg&w=1200',
    img:
      'https://www.amazon.com/Memorial-Novel-Bryan-Washington/dp/0593087275/ref=sr_1_1?dchild=1&keywords=Memorial+Bryan+Washington&qid=1608166989&sr=8-1',
  },
  {
    week: '021421',
    headline: 'Homeland Elegies',
    citation: 'Ayad Akhtar',
    link: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/AYSNXRHLVUI6VGNBOE2D2A54FE.jpg',
    img: 'https://www.amazon.com/Homeland-Elegies-Novel-Ayad-Akhtar/dp/0316496421terstock_135114548.jpg',
  },
  {
    week: '022121',
    headline: 'The Mirror & The Light',
    citation: 'Hilary Mantel',
    link:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/02/25/12/hilary-mantel-the-mirror-and-the-light.jpg',
    img:
      'https://www.amazon.com/Mirror-Light-Hilary-Mantel/dp/0805096604/ref=sr_1_1?dchild=1&keywords=The+Mirror+%26+The+Light+Hilary+Mantel&qid=1608167019&s=books&sr=1-1.jpg',
  },
  {
    week: '022821',
    headline: 'The Office of Historical Corrections',
    citation: 'Danielle Evans',
    link: 'https://i2.wp.com/phoebejournal.com/wp-content/uploads/2020/10/Evans-2.jpg?fit=2560%2C1920&ssl=1',
    img:
      'https://www.amazon.com/Office-Historical-Corrections-Novella-Stories/dp/1594487332/ref=sr_1_1?dchild=1&keywords=The+Office+of+Historical+Corrections+Danielle+Evans&qid=1608167030&s=books&sr=1-1shutterstock_135114548.jpg',
  },
  {
    week: '030721',
    headline: 'Weather',
    citation: 'Jenny OffillR',
    link:
      'https://cdn.vox-cdn.com/thumbor/rTqKVdTX6uyKx4GqzHC1BPlx-Nk=/0x0:1800x1200/1200x800/filters:focal(756x456:1044x744)/cdn.vox-cdn.com/uploads/chorus_image/image/66337470/headshots_1582131575835.0.jpg',
    img:
      'https://www.amazon.com/American-Weather-novel-Jenny-Offill/dp/0385351100/ref=sr_1_1?dchild=1&keywords=Weather+Jenny+Offill&qid=1608167042&s=books&sr=1-1',
  },
  {
    week: '031421',
    headline: 'When No ONe is Watching',
    citation: 'Alyssa Cole',
    link:
      'https://img.buzzfeed.com/buzzfeed-static/static/2020-07/30/20/enhanced/12fa57a8899d/original-13591-1596141065-21.jpg?crop=1223:611;0,18',
    img:
      'https://www.amazon.com/When-No-One-Watching-Thriller/dp/0062982656/ref=sr_1_1?dchild=1&keywords=When+No+ONe+is+Watching+Alyssa+Cole&qid=1608167053&s=books&sr=1-1',
  },
  {
    week: '032821',
    headline: 'The New Wilderness',
    citation: 'Diane Cook',
    link: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JKDAFRXATYI6VNU3MT33AR362Q.jpg',
    img:
      'https://www.amazon.com/New-Wilderness-Diane-Cook/dp/0062333135/ref=sr_1_1?dchild=1&keywords=The+New+Wilderness+Diane+Cook&qid=1608167066&s=books&sr=1-1terstock_135114548.jpg',
  },
  {
    week: '040421',
    headline: 'Notes on a Silencing',
    citation: 'Lacy Crawford',
    link: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7376VKF4MUI6VDHVTQNY274EYY.jpg',
    img:
      'https://www.amazon.com/Notes-Silencing-Memoir-Lacy-Crawford/dp/0316491551/ref=sr_1_1?dchild=1&keywords=Notes+on+a+Silencing+Lacy+Crawford&qid=1608167080&s=books&sr=1-1terstock_135114548.jpg',
  },
  {
    week: '041121',
    headline: 'The Only Good Indians',
    citation: 'Stephen Graham Jones',
    link: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DOELJWGGXQI6VMBX7FYR7CPOIY.jpg',
    img:
      'https://www.amazon.com/Only-Indians-Stephen-Graham-Jones/dp/1982136456/ref=sr_1_1?dchild=1&keywords=The+Only+Good+Indians+Stephen+Graham+Jones&qid=1608167091&s=books&sr=1-1terstock_135114548.jpg',
  },
  {
    week: '041825',
    headline: 'The Dragons, The Giant, The Women',
    citation: 'Wayetu Moore',
    link: 'https://brittlepaper.com/wp-content/uploads/2020/06/Moore-2.png',
    img:
      'https://www.amazon.com/Dragons-Giant-Women-Memoir/dp/1644450313/ref=sr_1_1?dchild=1&keywords=the+dragons%2C+the+giant%2C+the+women+way%C3%A9tu+moore&qid=1608167707&s=books&sr=1-130026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '042521',
    headline: 'The Night Watchman',
    citation: 'Louise Erdrich',
    link:
      'https://lh3.googleusercontent.com/proxy/ctQOykik8JzBM32ySyVSXHQNa7-QvEM8noNusJsnrHGNq7AiJ-jQGjsJkRkGcFIaMRaxH-xHxNZ5DDnsUaTf_rBP2MfHVOYQFgjhmNMFmtecGvqqpogRcqT0IU7KuAYEC_H4PZKkNd1mgfXETJdGZpPhKXbqt6asGZ1xFota9ys_YSw',
    img:
      'https://www.amazon.com/Night-Watchman-Louise-Erdrich/dp/0062671189/ref=sr_1_1?dchild=1&keywords=The+Night+Watchman+Louise+Erdrich&qid=1608167605&s=books&sr=1-1',
  },
  {
    week: '050221',
    headline: 'What Are You Going Through',
    citation: 'Sigrid Nunez',
    link: 'https://www.semcoop.com/sites/www.semcoop.com/files/uploaded-images/nunez_collage.jpg',
    img:
      'https://www.amazon.com/What-Are-You-Going-Through/dp/0593191412/ref=sr_1_1?dchild=1&keywords=What+Are+You+Going+Through+Sigrid+Nunez&qid=1608167679&s=books&sr=1-1063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '050921',
    headline: 'My Dark Vanessa',
    citation: 'Kate Elizabeth Russell',
    link: 'https://static.onecms.io/wp-content/uploads/sites/6/2020/03/my-dark-vanessa-2000.jpg',
    img:
      'https://www.amazon.com/Dark-Vanessa-Kate-Elizabeth-Russell/dp/006294150X/ref=sr_1_1?dchild=1&keywords=My+Dark+Vanessa+Kate+Elizabeth+Russell&qid=1608167826&s=books&sr=1-10063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '051621',
    headline: 'Blacktop Wasteland',
    citation: 'SA Cosby',
    link: 'https://crowdcast-prod.imgix.net/-MHR_87Yy0sRHj2ADFpy/event-cover-9331',
    img:
      'https://www.amazon.com/Blacktop-Wasteland-Novel-Shawn-Cosby/dp/1250252687/ref=sr_1_1?dchild=1&keywords=Blacktop+Wasteland+SA+Cosby&qid=1608167839&s=books&sr=1-13d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '052321',
    headline: 'Plain Bad Heroines',
    citation: 'Emily Danforth',
    link:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/B3XWMEQNQUI6XCRVEN7PD2ZO64.jpg&w=1200',
    img:
      'https://www.amazon.com/Plain-Bad-Heroines-Emily-Danforth/dp/0062942859/ref=sr_1_1?dchild=1&keywords=Plain+Bad+Heroines+Emily+Danforth&qid=1608167864&s=books&sr=1-1',
  },
  {
    week: '053021',
    headline: 'Actress',
    citation: 'Anne Enright',
    link:
      'https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2020/03/09/yq-c2-09032020.jpg?itok=FOAIzZF-&timestamp=1583737633',
    img:
      'https://www.amazon.com/Actress-Novel-Anne-Enright/dp/1324005629/ref=sr_1_1?dchild=1&keywords=Actress+Anne+Enright&qid=1608167933&s=books&sr=1-1',
  },
  {
    week: '060621',
    headline: 'The Splendid & the Vile',
    citation: 'Erik Larson',
    link:
      'https://www.rainydaybooks.com/sites/rainydaybooks.com/files/styles/large/public/author_photo/Erik%20Larson%20Photo%20and%20Hardcover%2011132019.jpg?itok=NFUVji57',
    img:
      'https://www.amazon.com/Splendid-Vile-Churchill-Family-Defiance/dp/0385348711/ref=sr_1_1?dchild=1&keywords=The+Splendid+%26+the+Vile+Erik+Larson&qid=1608167943&s=books&sr=1-1',
  },
  {
    week: '061321',
    headline: 'Jack',
    citation: 'Marilynne Robinson1',
    link: 'https://www.92y.org/92streety/media/img/poetry/lg/marilynne-robinson-2.jpg',
    img:
      'https://www.amazon.com/Jack-Novel-Marilynne-Robinson/dp/0374279306/ref=sr_1_1?dchild=1&keywords=Jack+Marilynne+Robinson&qid=1608167960&s=books&sr=1-1e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '062021',
    headline: 'Sharks in the Time of Saviors',
    citation: 'Kawai Washburn',
    link:
      'https://media.vanityfair.com/photos/5e6bd9353b0b7b000870884f/4:3/w_1776,h_1332,c_limit/Kawai-Strong-Washburn-Interview.png',
    img:
      'https://www.amazon.com/Sharks-Saviors-Kawai-Strong-Washburn/dp/0374272085/ref=sr_1_1?dchild=1&keywords=Sharks+in+the+Time+of+Saviors+Kawai+Washburn&qid=1608167969&s=books&sr=1-1',
  },
  {
    week: '062721',
    headline: 'The Undocumentad Americans',
    citation: 'Karla Villavinencio',
    link:
      'https://i0.wp.com/www.paperbackparis.com/wp-content/uploads/2020/03/Karla-Cornejo-Villavicencio-The-Undocumented-Americans-Book-Review.png?fit=1100%2C733',
    img:
      'https://www.amazon.com/Undocumented-America-Karla-Cornejo-Villavicencio/dp/0399592687/ref=sr_1_1?dchild=1&keywords=the+undocumented+americans+karla+villavicencio&qid=1608167980&s=books&sr=1-1',
  },
  {
    week: '070421',
    headline: 'The Dead Are Arising',
    citation: 'Les & Tamara Payne',
    link:
      'https://calendar.artsboston.org/wp-content/uploads/sites/calendar.artsboston.org/images/2020/10/event-featured-Cou-1603827253-394x300.jpeg',
    img:
      'https://www.amazon.com/Dead-Are-Arising-Life-Malcolm/dp/1631491660/ref=sr_1_1?dchild=1&keywords=The+Dead+Are+Arising+Les+%26+Tamara+Payne&qid=1608167991&s=books&sr=1-1',
  },
  {
    week: '071121',
    headline: 'Mexican Gothic',
    citation: 'Silvia Moreno-Garcia',
    link:
      'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=%5B1100%2C0%5D&w=2000&h=1047&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F08%2F24%2FMexican-Gothic.jpg',
    img:
      'https://www.amazon.com/Mexican-Gothic-Silvia-Moreno-Garcia/dp/0525620788/ref=sr_1_1?dchild=1&keywords=Mexican+Gothic+Silvia+Moreno-Garcia&qid=1608168002&s=books&sr=1-1',
  },
  {
    week: '071821',
    headline: 'Vesper Flights',
    citation: 'Helen Macdonald',
    link: 'https://www.publishersweekly.com/images/data/ARTICLE_PHOTO/photo/000/071/71963-1.JPG',
    img:
      'https://www.amazon.com/Vesper-Flights/dp/0802128815/ref=sr_1_1?dchild=1&keywords=Vesper+Flights+Helen+Macdonald&qid=1608168013&s=books&sr=1-10063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '072521',
    headline: 'Hood Feminism',
    citation: 'Mikki Kendall',
    link: 'https://www.semcoop.com/sites/www.semcoop.com/files/uploaded-images/KendallCollage_Web.jpg',
    img:
      'https://www.amazon.com/Hood-Feminism-Notes-Movement-Forgot/dp/0525560548/ref=sr_1_1?dchild=1&keywords=Hood+Feminism+Mikki+Kendall&qid=1608168023&s=books&sr=1-16ded8/shutterstock_135114548.jpg',
  },
  {
    week: '080121',
    headline: 'The Death of Vicek Oji',
    citation: 'Akwaeke Emezi',
    link:
      'https://format-com-cld-res.cloudinary.com/image/private/s--D9_tBDgx--/c_crop,h_2732,w_3824,x_0,y_0/c_fill,g_center,h_1200,w_1600/fl_keep_iptc.progressive,q_95/v1/c6eeb6b52ee737b65c4a14d6efe173ca/tdovo_diptych_JPG.jpg',
    img:
      'https://www.amazon.com/Death-Vivek-Oji-Novel/dp/0525541608/ref=sr_1_1?dchild=1&keywords=the+death+of+vivek+oji+akwaeke+emezi&qid=1608168055&s=books&sr=1-1',
  },
  {
    week: '080821',
    headline: 'Minor Feelings',
    citation: 'Cathy Hong',
    link: 'https://media.salon.com/2020/02/minor-feelings-cathy-park-hong-0225201.jpg',
    img:
      'https://www.amazon.com/Minor-Feelings-Asian-American-Reckoning/dp/1984820362/ref=sr_1_1?dchild=1&keywords=Minor+Feelings+Cathy+Hong&qid=1608168064&s=books&sr=1-1e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '081521',
    headline: 'Writers & Lovers',
    citation: 'Lily King',
    link: 'https://www.publishersweekly.com/images/data/ARTICLE_PHOTO/photo/000/068/68065-1.JPG',
    img:
      'https://www.amazon.com/Writers-Lovers-Lily-King/dp/0802148530/ref=sr_1_1?dchild=1&keywords=Writers+%26+Lovers+Lily+King&qid=1608168084&s=books&sr=1-10063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '082221',
    headline: 'Real Life',
    citation: 'Brandon Taylor',
    link:
      'https://cdn.vox-cdn.com/thumbor/_wFSK8wUWaBonAwdAaMrapnD6xY=/0x0:1800x1200/1200x800/filters:focal(756x456:1044x744)/cdn.vox-cdn.com/uploads/chorus_image/image/66364387/headshots_1582563117813.0.jpg',
    img:
      'https://www.amazon.com/Real-Life-Novel-Brandon-Taylor/dp/0525538887/ref=sr_1_1?dchild=1&keywords=Real+Life+Brandon+Taylor&qid=1608168095&s=books&sr=1-1',
  },
  {
    week: '082921',
    headline: 'Interior Chinatown',
    citation: 'Charles Yu',
    link: 'https://variety.com/wp-content/uploads/2020/10/charles-yu-interior-chinatown-hulu.jpg',
    img:
      'https://www.amazon.com/Interior-Chinatown-Novel-Vintage-Contemporaries/dp/0307948471/ref=sr_1_1?dchild=1&keywords=Interior+Chinatown+Charles+Yu&qid=1608168103&s=books&sr=1-1063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '090521',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '091221',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '091921',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '092621',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '100321',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '101021',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '101721',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '102421',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '103121',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '110721',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '111421',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '112121',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '112821',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '120521',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '121221',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '121921',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '010222',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
  {
    week: '122621',
    headline: 'TITLE',
    citation: 'AUTHOR',
    link: 'LINK',
    img:
      'https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg',
  },
];
