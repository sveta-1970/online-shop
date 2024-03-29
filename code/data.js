const data = [
  {
    type: "shirts",
    id: 366285339,
    description: "Jack Wolfskin Hot Springs Shirt",
    quantity: 50,
    size: [34, 36, 44],
    color: ["white", "blue"],
    price: 1697,
    rating: 0,
    image1: "https://content1.rozetka.com.ua/goods/images/big/318949845.jpg",
    image2: "https://content1.rozetka.com.ua/goods/images/big/318949846.jpg",
  },

  {
    type: "shirts",
    id: 342894121,
    description: "Jack Wolfskin Highlands Shirt",
    quantity: 70,
    size: [40, 42, 44, 46],
    color: ["grey", "brown"],
    price: 1799,
    rating: 5,
    image1: "https://content.rozetka.com.ua/goods/images/big/268312657.jpg",
    image2: "https://content1.rozetka.com.ua/goods/images/big/268312663.jpg",
  },

  {
    type: "shirts",
    id: 345747130,
    description: "Cross Jeans Shirt",
    quantity: 100,
    size: [34, 36, 38, 44, 46],
    color: ["blue"],
    price: 660,
    rating: 0,
    image1: "https://content.rozetka.com.ua/goods/images/big/273584167.jpg",
    image2: "https://content1.rozetka.com.ua/goods/images/big/273584170.jpg",
  },

  {
    type: "shirts",
    id: 371367744,
    description: "Pierre Cardin Shirt",
    quantity: 50,
    size: [44, 46],
    color: ["white"],
    price: 1180,
    rating: 0,
    image1: "https://content2.rozetka.com.ua/goods/images/big/320901781.jpg",
    image2: "https://content1.rozetka.com.ua/goods/images/big/320901782.jpg",
  },

  {
    type: "shirts",
    id: 354543609,
    description: "Colin's Shirt",
    quantity: 70,
    size: [32, 34, 36, 40, 42],
    color: ["black", "blue", "green"],
    price: 417,
    rating: 0,
    image1: "https://content2.rozetka.com.ua/goods/images/big/287766985.jpg",
    image2: "https://content.rozetka.com.ua/goods/images/big/287766986.jpg",
  },

  {
    type: "shirts",
    id: 360257991,
    description: "Colin's Shirt",
    quantity: 150,
    size: [32, 34, 36, 38, 44, 46],
    color: ["blue", "green"],
    price: 672,
    rating: 3,
    image1: "https://content1.rozetka.com.ua/goods/images/big/302779806.jpg",
    image2: "https://content.rozetka.com.ua/goods/images/big/299497470.jpg",
  },

  {
    type: "shirts",
    id: 343095526,
    description: "Old Navy Shirt",
    quantity: 50,
    size: [36, 38],
    color: ["blue", "green"],
    price: 1332,
    rating: 4,
    image1: "https://content2.rozetka.com.ua/goods/images/big/268614013.jpg",
    image2: "https://content2.rozetka.com.ua/goods/images/big/268614015.jpg",
  },

  {
    type: "shirts",
    id: 374792943,
    description: "C&A Shirt",
    quantity: 50,
    size: [36, 38],
    color: ["brown", "green", "orange"],
    price: 416,
    rating: 5,
    image1: "https://content1.rozetka.com.ua/goods/images/big/327631551.jpg",
    image2: "https://content2.rozetka.com.ua/goods/images/big/327631555.jpg",
  },

  {
    type: "shirts",
    id: 379563543,
    description: "C&A Shirt",
    quantity: 50,
    size: [32, 34],
    color: ["white", "grey"],
    price: 520,
    rating: 5,
    image1: "https://content2.rozetka.com.ua/goods/images/big/336363595.jpg",
    image2: "https://content1.rozetka.com.ua/goods/images/big/336363601.jpg",
  },

  {
    type: "shirts",
    id: 236979823,
    description: "Colin's Shirt",
    quantity: 40,
    size: [32, 34],
    color: ["blue", "grey"],
    price: 190,
    rating: 4,
    image1: "https://content1.rozetka.com.ua/goods/images/big/140565457.jpg",
    image2: "https://content1.rozetka.com.ua/goods/images/big/140565488.jpg",
  },

  {
    type: "pants",
    id: 360266232,
    description: "Colin's Pants",
    quantity: 200,
    size: [30, 32, 34],
    color: ["blue", "grey", "brown"],
    price: 672,
    rating: 5,
    image1: "https://content2.rozetka.com.ua/goods/images/big/302961972.jpg",
    image2: "https://content2.rozetka.com.ua/goods/images/big/302961974.jpg",
  },

  {
    type: "pants",
    id: 368809083,
    description: "Outventure Pants",
    quantity: 200,
    size: [44, 46],
    color: ["black", "brown"],
    price: 1590,
    rating: 0,
    image1: "https://content2.rozetka.com.ua/goods/images/big/316125592.jpg",
    image2: "https://content2.rozetka.com.ua/goods/images/big/316125600.jpg",
  },

  {
    type: "pants",
    id: 373818531,
    description: "Rip Curl Epic Pants",
    quantity: 150,
    size: [34, 36],
    color: ["white", "brown", "blue"],
    price: 1779,
    rating: 5,
    image1: "https://content.rozetka.com.ua/goods/images/big/325561887.jpg",
    image2: "https://content2.rozetka.com.ua/goods/images/big/325561896.jpg",
  },

  {
    type: "pants",
    id: 368809084,
    description: "Colin's Pants",
    quantity: 100,
    size: [34, 36, 38, 40],
    color: ["black", "brown", "orange"],
    price: 842,
    rating: 4,
    image1: "https://content.rozetka.com.ua/goods/images/big/330409833.jpg",
    image2: "https://content2.rozetka.com.ua/goods/images/big/330409836.jpg",
  },

  {
    type: "pants",
    id: 289848718,
    description: "Hi-Tec Jatuni Pants",
    quantity: 200,
    size: [34, 36, 38, 40, 42, 44, 46],
    color: ["black", "grey", "blue"],
    price: 2590,
    rating: 0,
    image1: "https://content.rozetka.com.ua/goods/images/big/170693450.jpg",
    image2: "https://content1.rozetka.com.ua/goods/images/big/170693451.jpg",
  },

  {
    type: "pants",
    id: 311334413,
    description: "Colin's",
    quantity: 200,
    size: [4, 36, 38, 40, 42, 44, 46],
    color: ["grey", "blue", "brown"],
    price: 1907,
    rating: 2,
    image1: "https://content2.rozetka.com.ua/goods/images/big/195846670.jpg",
    image2: "https://content.rozetka.com.ua/goods/images/big/195846698.jpg",
  },

  {
    type: "pants",
    id: 368807685,
    description: "Outventure Pants",
    quantity: 20,
    size: [44, 46],
    color: ["black", "brown"],
    price: 1340,
    rating: 5,
    image1: "https://content.rozetka.com.ua/goods/images/big/316122825.jpg",
    image2: "https://content2.rozetka.com.ua/goods/images/big/316122826.jpg",
  },

  {
    type: "pants",
    id: 373046859,
    description: "Tommy Hilfiger",
    quantity: 200,
    size: [44, 46],
    color: ["grey", "blue"],
    price: 2180,
    rating: 5,
    image1: "https://content1.rozetka.com.ua/goods/images/big/330485026.jpg",
    image2: "https://content.rozetka.com.ua/goods/images/big/330485028.jpg",
  },

  {
    type: "pants",
    id: 366545184,
    description: "Tommy Hilfiger Pants",
    quantity: 100,
    size: [32, 34, 38],
    color: ["white", "grey", "brown"],
    price: 2310,
    rating: 5,
    image1: "https://content1.rozetka.com.ua/goods/images/big/320032824.jpg",
    image2: "https://content2.rozetka.com.ua/goods/images/big/320032825.jpg",
  },

  {
    type: "pants",
    id: 367972632,
    description: "DeFacto Pants",
    quantity: 100,
    size: [32, 34, 36],
    color: ["grey", "blue", "brown"],
    price: 1099,
    rating: 5,
    image1: "https://content2.rozetka.com.ua/goods/images/big/314607006.jpg",
    image2: "https://content1.rozetka.com.ua/goods/images/big/314607009.jpg",
  },

  {
    type: "shorts",
    id: 368500692,
    description: "New Balance Sport Seasonal Shorts",
    quantity: 100,
    size: [32, 34, 36, 38, 40, 42, 44, 46],
    color: ["black", "grey", "blue", "orange", "green"],
    price: 1390,
    rating: 5,
    image1: "https://content.rozetka.com.ua/goods/images/big/338502533.jpg",
    image2: "https://content2.rozetka.com.ua/goods/images/big/338502536.jpg",
  },

  {
    type: "shorts",
    id: 317275699,
    description: "Puma ESS Jersey Shorts",
    quantity: 100,
    size: [32, 34, 36, 44, 46],
    color: ["grey", "blue", "green"],
    price: 690,
    rating: 5,
    image1: "https://content1.rozetka.com.ua/goods/images/big/218974979.jpg",
    image2: "https://content2.rozetka.com.ua/goods/images/big/218974980.jpg",
  },

  {
    type: "shorts",
    id: 373819416,
    description: "Rip Curl Search Icon Trackshort Shorts",
    quantity: 100,
    size: [32, 34, 36, 38, 40, 42, 44, 46],
    color: ["blue", "green"],
    price: 1699,
    rating: 5,
    image1: "https://content.rozetka.com.ua/goods/images/big/325562297.jpg",
    image2: "https://content.rozetka.com.ua/goods/images/big/325562299.jpg",
  },

  {
    type: "shorts",
    id: 373819296,
    description: "Rip Curl Twisted Walkshort Shorts",
    quantity: 100,
    size: [32, 34, 36],
    color: ["blue", "orange", "green"],
    price: 1699,
    rating: 5,
    image1: "https://content1.rozetka.com.ua/goods/images/big/325562190.jpg",
    image2: "https://content.rozetka.com.ua/goods/images/big/325562192.jpg",
  },

  {
    type: "shorts",
    id: 368500692,
    description: "New Balance Sport Seasonal Shorts",
    quantity: 100,
    size: [32, 34, 36, 38, 40, 42, 44, 46],
    color: ["black", "grey", "blue", "orange", "green"],
    price: 1390,
    rating: 5,
    image1: "https://content.rozetka.com.ua/goods/images/big/338502533.jpg",
    image2: "https://content2.rozetka.com.ua/goods/images/big/338502536.jpg",
  },

  {
    type: "shorts",
    id: 368808852,
    description: "Outventure Shorts",
    quantity: 100,
    size: [40, 42, 44, 46],
    color: ["orange", "green"],
    price: 1190,
    rating: 5,
    image1: "https://content1.rozetka.com.ua/goods/images/big/316125186.jpg",
    image2: "https://content2.rozetka.com.ua/goods/images/big/316125191.jpg",
  },

  {
    type: "shorts",
    id: 215484547,
    description: "Lonsdale Shorts",
    quantity: 100,
    size: [32, 34, 36, 38, 40, 42, 44, 46],
    color: ["black", "blue"],
    price: 899,
    rating: 5,
    image1: "https://content1.rozetka.com.ua/goods/images/big/336189349.jpg",
    image2: "https://content1.rozetka.com.ua/goods/images/big/336189351.jpg",
  },

  {
    type: "shorts",
    id: 177030911,
    description: "Nike M Nsw Club Shorts",
    quantity: 100,
    size: [32, 34, 36, 38, 40, 42, 44, 46],
    color: ["black", "grey"],
    price: 1999,
    rating: 5,
    image1: "https://content1.rozetka.com.ua/goods/images/big/340048326.jpg",
    image2: "https://content1.rozetka.com.ua/goods/images/big/340048323.jpg",
  },

  {
    type: "shorts",
    id: 365141421,
    description: "Pull & Bear Shorts",
    quantity: 20,
    size: [42],
    color: ["white"],
    price: 961,
    rating: 5,
    image1: "https://content2.rozetka.com.ua/goods/images/big/309625830.jpg",
    image2: "https://content2.rozetka.com.ua/goods/images/big/309625834.jpg",
  },

  {
    type: "shorts",
    id: 344015410,
    description: "Rip Curl Solid Rock Volley Shorts",
    quantity: 20,
    size: [44, 46],
    color: ["white", "blue", "green"],
    price: 1329,
    rating: 5,
    image1: "https://content2.rozetka.com.ua/goods/images/big/270338245.jpg",
    image2: "https://content.rozetka.com.ua/goods/images/big/270338249.jpg",
  },

  {
    type: "swimtrunks",
    id: 189937861,
    description: "BEZET Aqua Total Swimtrunks",
    quantity: 20,
    size: [34, 36, 38, 40],
    color: ["black", "blue"],
    price: 370,
    rating: 4,
    image1: "https://content2.rozetka.com.ua/goods/images/big/339142155.jpg",
    image2: "https://content1.rozetka.com.ua/goods/images/big/339142190.jpg",
  },

  {
    type: "swimtrunks",
    id: 286323113,
    description: "Puma Swim Men Logo Short Len Swimtrunks",
    quantity: 20,
    size: [34, 36, 40, 42],
    color: ["orange"],
    price: 1120,
    rating: 3,
    image1: "https://content2.rozetka.com.ua/goods/images/big/167471674.jpg",
    image2: "https://content1.rozetka.com.ua/goods/images/big/167471676.jpg",
  },

  {
    type: "swimtrunks",
    id: 342071968,
    description: "Joss Swimtrunks",
    quantity: 20,
    size: [40, 42, 44],
    color: ["blue", "green"],
    price: 500,
    rating: 5,
    image1: "https://content.rozetka.com.ua/goods/images/big/266847519.jpg",
    image2: "https://content1.rozetka.com.ua/goods/images/big/266847522.jpg",
  },

  {
    type: "swimtrunks",
    id: 345819289,
    description: "Atlantic Swimtrunks",
    quantity: 20,
    size: [40, 42],
    color: ["green"],
    price: 949,
    rating: 5,
    image1: "https://content2.rozetka.com.ua/goods/images/big/351235352.jpg",
    image2: "https://content.rozetka.com.ua/goods/images/big/351235353.jpg",
  },

  {
    type: "swimtrunks",
    id: 373672776,
    description: "4F Board Swimtrunks",
    quantity: 20,
    size: [40, 42, 44],
    color: ["orange"],
    price: 600,
    rating: 5,
    image1: "https://content2.rozetka.com.ua/goods/images/big/325457849.jpg",
    image2: "https://content1.rozetka.com.ua/goods/images/big/325457862.jpg",
  },

  {
    type: "belts",
    id: 336445978,
    description: "Sergio Torri Belt",
    quantity: 20,
    size: [44, 46],
    color: ["black"],
    price: 329,
    rating: 5,
    image1: "https://content1.rozetka.com.ua/goods/images/big/258314836.jpg",
    image2: "https://content1.rozetka.com.ua/goods/images/big/258314840.jpg",
  },

  {
    type: "belts",
    id: 282626123,
    description: "Levi's New Duncan Belt",
    quantity: 20,
    size: [40, 42],
    color: ["brown"],
    price: 1290,
    rating: 5,
    image1: "https://content2.rozetka.com.ua/goods/images/big/330826565.jpg",
    image2: "https://content2.rozetka.com.ua/goods/images/big/330826566.jpg",
  },

  {
    type: "belts",
    id: 41815312,
    description: "Sergio Torri Belt",
    quantity: 20,
    size: [40, 42],
    color: ["brown", "blue", "black"],
    price: 290,
    rating: 5,
    image1: "https://content1.rozetka.com.ua/goods/images/big/223312107.jpg",
    image2: "https://content1.rozetka.com.ua/goods/images/big/223312114.jpg",
  },

  {
    type: "belts",
    id: 372106698,
    description: "Sergio Torri Belt",
    quantity: 20,
    size: [44, 46],
    color: ["wight"],
    price: 485,
    rating: 5,
    image1: "https://content1.rozetka.com.ua/goods/images/big/325533236.jpg",
    image2: "https://content.rozetka.com.ua/goods/images/big/325533251.jpg",
  },

  {
    type: "belts",
    id: 20886671,
    description: "Sergio Torri",
    quantity: 20,
    size: [40, 42],
    color: ["brown"],
    price: 449,
    rating: 5,
    image1: "https://content.rozetka.com.ua/goods/images/big/11141785.jpg",
    image2: "https://content2.rozetka.com.ua/goods/images/big/11141802.jpg",
  },
];
