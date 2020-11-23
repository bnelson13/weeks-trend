let classesData = [
  {
    week: '042620',
    headline: 'Introuction to Computer Science',
    citation: 'Harvard University',
    link: 'https://online-learning.harvard.edu/course/cs50-introduction-computer-science?delta=0',
    img:
      'https://images.unsplash.com/photo-1553851684-3037dd0507c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
  },
  {
    week: '050320',
    headline: 'Introduction to Biology',
    citation: 'MIT',
    link:
      'https://www.edx.org/course/introduction-to-biology-the-secret-of-life-3?source=aw&awc=6798_1588800888_0c80cd620dcd73060231f8bff405fcc1&utm_source=aw&utm_medium=affiliate_partner&utm_content=text-link&utm_term=301045_https%3A%2F%2Fwww.class-central.com%2F',
    img:
      'https://images.unsplash.com/uploads/14114005966624c90b007/60cc31c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    week: '051020',
    headline: 'Start Writing Fiction',
    citation: 'Future Learn',
    link: 'https://www.futurelearn.com/courses/start-writing-fiction',
    img:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80',
  },
  {
    week: '051720',
    headline: 'Introduction to Food and Health',
    citation: 'Stanford',
    link: 'https://www.coursera.org/learn/food-and-health',
    img:
      'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/sanmateoca/shutterstock_4189008910-9b68011a5056a36_9b6802fa-5056-a36a-0bbb53c8e971b411.jpg',
  },
  {
    week: '052420',
    headline: 'The Science of Well-being',
    citation: 'Yale University',
    link: 'https://www.coursera.org/learn/the-science-of-well-being',
    img:
      'https://images.unsplash.com/photo-1443916568596-df5a58c445e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
  },
  {
    week: '053120',
    headline: 'US Government and Civics',
    citation: 'Khan Academy',
    link: 'https://www.khanacademy.org/humanities/us-government-and-civics',
    img:
      'https://images.unsplash.com/photo-1505753254631-1eec85e1b50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
  },
  {
    week: '060720',
    headline: "America's Poverty & Inequality",
    citation: 'Stanford',
    link: 'https://www.edx.org/course/americas-poverty-and-inequality-course',
    img:
      'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/sanmateoca/shutterstock_4189008910-9b68011a5056a36_9b6802fa-5056-a36a-0bbb53c8e971b411.jpg',
  },
  {
    week: '061420',
    headline: 'Introduction to Philosphy',
    citation: 'University of Edinburgh',
    link: 'https://www.coursera.org/learn/philosophy',
    img:
      'https://images.unsplash.com/photo-1526342513065-9df1c4ab2d29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
  },
  {
    week: '062120',
    headline: 'Introduction to Classical Music',
    citation: 'Yale University',
    link: 'https://www.coursera.org/learn/introclassicalmusic',
    img:
      'https://images.unsplash.com/photo-1443916568596-df5a58c445e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
  },
  {
    week: '062820',
    headline: 'Effective Communication',
    citation: 'Catalyst',
    link: 'https://www.edx.org/course/leading-with-effective-communication-inclusive-lea',
    img:
      'https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80',
  },
  {
    week: '070520',
    headline: 'Graphic Design',
    citation: 'California Institute of the Arts',
    link: 'https://www.coursera.org/specializations/graphic-design',
    img: 'https://i.kym-cdn.com/entries/icons/facebook/000/026/253/I722XWKD7RB75E2K73GJGDISK4.jpg',
  },
  {
    week: '071220',
    headline: 'Buddhism through its Scriptures',
    citation: 'Harvard University',
    link: 'https://www.edx.org/course/buddhism-through-its-scriptures',
    img:
      'https://images.unsplash.com/photo-1553851684-3037dd0507c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
  },
  {
    week: '071920',
    headline: 'Entrepreneurship 101',
    citation: 'MIT',
    link: 'https://www.edx.org/course/entrepreneurship-101-who-is-your-customer',
    img:
      'https://images.unsplash.com/uploads/14114005966624c90b007/60cc31c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    week: '072620',
    headline: 'Mindfulness and Resilience to Stress',
    citation: 'Berkeley',
    link: 'https://www.edx.org/course/mindfulness-and-resilience-to-stress-at-work',
    img: 'https://www.berkeleyside.com/wp-content/uploads/2020/04/1920px-UCBerkeleyCampus-720x468.jpg',
  },
  {
    week: '080220',
    headline: 'Successful Negotiation',
    citation: 'University of Michigan',
    link: 'https://www.coursera.org/learn/negotiation-skills',
    img:
      'https://images.unsplash.com/photo-1523711011208-8268846ca794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    week: '080920',
    headline: 'Learning How to Learn',
    citation: 'University of California San Diego',
    link: 'https://www.coursera.org/learn/learning-how-to-learn',
    img:
      'https://images.squarespace-cdn.com/content/57d9e959d482e972e8434364/1566869757148-ZD4FNHTOZNQHO5268WYD/shutterstock_493719448.jpg?content-type=image%2Fjpeg',
  },
  {
    week: '081620',
    headline: 'Introduction to Engineering and Design',
    citation: 'Brown University',
    link: 'https://www.edx.org/course/introduction-to-engineering-and-design',
    img:
      'https://www.brown.edu/sites/g/files/dprerj316/files/styles/wide_xlrg/public/2019-03/20111102_CampusScenes-PAUR-01_2_0.jpg?h=e550a542&itok=CeUa_FC9',
  },
  {
    week: '082320',
    headline: 'Social Pyschology',
    citation: 'Wesleyan University',
    link: 'https://www.coursera.org/learn/social-psychology',
    img:
      'https://www.usnews.com/dims4/USNEWS/ccbb78a/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fa2%2Ff3a8290137fd641a593c1ebfd1b778%2Fcollege-photo_27361.jpg',
  },
  {
    week: '083020',
    headline: "Shakespeare's Life and Work",
    citation: 'Harvard University',
    link: 'https://www.edx.org/course/shakespeares-life-and-work',
    img:
      'https://images.unsplash.com/photo-1553851684-3037dd0507c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
  },
  {
    week: '090620',
    headline: 'Quantum Mechanics for Everyone',
    citation: 'Georgetown University',
    link: 'https://www.edx.org/course/quantum-mechanics-for-everyone',
    img: 'https://www.gloverparkhotel.com/images/1700-960/hotels-near-georgetown-university-babc48c7.jpg',
  },
  {
    week: '091320',
    headline: 'How to Save Money',
    citation: 'Berkeley',
    link: 'https://www.edx.org/course/how-to-save-money-making-smart-financial-decisions',
    img: 'https://www.berkeleyside.com/wp-content/uploads/2020/04/1920px-UCBerkeleyCampus-720x468.jpg',
  },
  {
    week: '092020',
    headline: 'THe Holocaust - An Introduciton',
    citation: 'Tel Aviv University',
    link: 'https://www.coursera.org/learn/holocaust-introduction-1',
    img:
      'https://media-exp1.licdn.com/dms/image/C4D1BAQGVOCs2sONUSg/company-background_10000/0?e=2159024400&v=beta&t=APnyrozEWhtsn9d9ZWlQ-ZF6Di98hwc0w3ghmRT10f8',
  },
  {
    week: '092720',
    headline: 'The ABCs of Child Rearing',
    citation: 'Yale University',
    link: 'https://www.coursera.org/learn/everyday-parenting',
    img:
      'https://images.unsplash.com/photo-1443916568596-df5a58c445e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
  },
  {
    week: '100420',
    headline: 'Positive Pyschiatry and Mental Health',
    citation: 'University of Sydney',
    link: 'https://www.coursera.org/learn/positive-psychiatry',
    img: 'https://www.sydney.edu.au/content/dam/corporate/images/architecture/quadrangle/high-quad-shot1.jpg',
  },
  {
    week: '101120',
    headline: 'Science of Success',
    citation: 'Wharton School of Business',
    link: 'https://www.coursera.org/learn/wharton-success',
    img:
      'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fkurtbadenhausen%2Ffiles%2F2017%2F09%2Fwharton.jpg',
  },
  {
    week: '101820',
    headline: 'Science & Cooking: From Haute Cuisine to Soft Matter Science',
    citation: 'Harvard University',
    link: 'https://www.edx.org/course/science-cooking-from-haute-cuisine-to-soft-matter',
    img:
      'https://images.unsplash.com/photo-1553851684-3037dd0507c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
  },
  {
    week: '102520',
    headline: 'Inspiring and Motivating Individuals',
    citation: 'University of Michigan',
    link: 'https://www.coursera.org/learn/motivate-people-teams',
    img:
      'https://images.unsplash.com/photo-1523711011208-8268846ca794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    week: '110120',
    headline: 'Wine Tasting',
    citation: 'UC Davis',
    link: 'https://www.coursera.org/learn/wine',
    img:
      'https://www.ucdavis.edu/sites/default/files/styles/panopoly_image_full/public/images/article/20150415_rmi_3570crop.jpg?itok=iq0sOk4P',
  },
  {
    week: '110820',
    headline: 'The Science of Exercise',
    citation: 'University of Colorado',
    link: 'https://www.coursera.org/learn/science-exercise',
    img:
      'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_300,q_75,w_610/http://res.cloudinary.com/simpleview/image/upload/v1519425252/clients/boulder/c21aa028_6f33_4164_931f_740dc322473d_b9990add-2965-4bd3-8ca6-53d1fc3052fb.jpg',
  },
  {
    week: '111520',
    headline: 'Human Anatomy',
    citation: 'Hong Kong Polytechnic',
    link: 'https://www.edx.org/course/human-anatomy',
    img: 'https://www.centralmassbodywork.com/wp-content/uploads/2012/03/Nov11_Fasc1.jpg',
  },
  {
    week: '112220',
    headline: 'JavaScript Introduction',
    citation: 'W3C',
    link: 'https://www.edx.org/course/javascript-introduction',
    img:
      'https://zdnet3.cbsistatic.com/hub/i/r/2019/05/28/2ea3470b-dd2a-4c6b-b3b1-4cb368880d0a/thumbnail/770x578/0e77992564d036ab57b6798b646d16c7/w3c.jpg',
  },
  {
    week: '112920',
    headline: 'Game Theory',
    citation: 'Stanford',
    link: 'https://www.coursera.org/learn/game-theory-1',
    img:
      'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/sanmateoca/shutterstock_4189008910-9b68011a5056a36_9b6802fa-5056-a36a-0bbb53c8e971b411.jpg',
  },
  {
    week: '120620',
    headline: 'Masterpieces of World Literature',
    citation: 'Harvard University',
    link: 'https://www.edx.org/course/masterpieces-of-world-literature',
    img:
      'https://images.unsplash.com/photo-1553851684-3037dd0507c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
  },
  {
    week: '121320',
    headline: 'How Things Work: An Introduction to Physics',
    citation: 'University of Virginia',
    link: 'https://www.coursera.org/learn/how-things-work',
    img: 'https://i.pinimg.com/originals/e9/ab/70/e9ab705749c3d816b9241c112564bd4d.jpg',
  },
  {
    week: '122020',
    headline: 'Introduction to Marketing',
    citation: 'Wharton School of Business',
    link: 'https://www.coursera.org/learn/wharton-marketing',
    img:
      'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fkurtbadenhausen%2Ffiles%2F2017%2F09%2Fwharton.jpg',
  },
  {
    week: '122720',
    headline: 'History of the Modern World: Part One',
    citation: 'University of Virginia',
    link: 'https://www.coursera.org/learn/modern-world',
    img: 'https://i.pinimg.com/originals/e9/ab/70/e9ab705749c3d816b9241c112564bd4d.jpg',
  },
  {
    week: '010321',
    headline: 'History of the Modern World: Part Two',
    citation: 'University of Virginia',
    link: 'https://www.coursera.org/learn/modern-world-2',
    img: 'https://i.pinimg.com/originals/e9/ab/70/e9ab705749c3d816b9241c112564bd4d.jpg',
  },
];
