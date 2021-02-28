const states = [
  {
    name: "Ladakh",
    description:
      "Ladakh is a region administered by India as a union territory, and constituting a part of the larger Kashmir region, which has been the subject of dispute between India, Pakistan, and China since 1947.",
    image: "/assets/ladakh.jpg",

    shortform: "LA",
    places: [
      {
        name: "Thiksey Monastery",
        description:
          "This 12-storey complex hosts over 500 monks and is considered to be one of the most beautiful Buddhist monasteries in all of Ladakh. For Ladakh sightseeing, Thiksey Gompa will enlighten you with knowledge about some of the Buddhist culture, lifestyle, scriptures, statues and even paintings.",
        category: "Temple",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/ladakh.jpg",
      },
      {
        name: "Nubra Valley",
        description:
          "Famous for its white sand deserts and double-humped camels, Nubra Valley is certainly one of the best places to visit in Ladakh. Not just the scenic slopes of Karakoram range but also the confluence of Shyak and Siachen rivers is what makes Nubra valley an exquisite voyage!",
        category: "Valley",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/nubra.png",
      },
      {
        name: "Shanti Stupa",
        description:
          "Situated on a hill-top in Chanspa is this beautiful dome shaped Chorten called Shanti Stupa. What makes this white structure an attraction tourist place is the view it offers of the whole of Leh. The walls inside the Chorten have panels depicting the life of Lord Buddha. Plus, the vibe of the place would make you want to stay for long.",
        category: "Temple",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/shanti_stupa.png",
      },
      {
        name: "Magnetic Hill",
        description:
          "Just as the name goes, the Magnetic hill is actually a gravity hill which possess impeccable magnetic properties. Do not be alarmed by the sudden movement of your vehicles in neutral going uphill as the magnetic field will make it happen. In fact, to avoid being sucked in the magnetic field of the hill, airplanes often take their altitudes up a notch.",
        category: "Hill",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/magnetic_hill.png",
      },
      {
        name: "Diskit Monastery",
        description:
          "Located at the heart of Nubra valley is this quaint Diskit Monastery. Sightseeing in Ladakh is literally incomplete without a visit to this monastery which was founded back in the 14th century. The calming aura of the gompa will definitely transport you to a whole new world.",
        category: "Temple",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/diskit.png",
      },
    ],
    time: 1500,
  },
  {
    name: "Kerala",
    description:
      "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals.",
    image: "/assets/kerala.jpg",
    shortform: "KL",
    places: [
      {
        name: "WAYANAD",
        description:
          "Known for its soothing temperature all around the year, Wayanad is the ultimate destination to escape the scorching sun of North India. This place doesn’t only offer its cool temperature but along with that, it has untouched woods, misty mountains, and long spread plantations.",
        category: "Mountain",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/wayanad.png",
      },
      {
        name: "Kovalam",
        description:
          "the beach town located by the beautiful Arabian sea can be found situated within the boundaries of Thiruvananthapuram city of Kerala. There is much incredible beauty that lies within this city.",
        category: "Beach",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/kovalum.png",
      },
      {
        name: "Varkala",
        description:
          "Varkala is a small city that lies within the “God’s own Country” and its high, red cliffs make it a unique place to visit. This city is situated in the northern suburbs and is a major tourism and commercial centre in the municipality of Thiruvananthapuram. ",
        category: "Beach",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/varkala.png",
      },
      {
        name: "Vadakkunathan",
        description:
          "Vadakkunathan Temple in Thrissur is one of the must-visit places of Kerala that displays the tradition and authenticity of typical Kerala through its walls and structures. ",
        category: "Temple",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/Vadakkunnathan.png",
      },
    ],
    time: 1500,
  },
  {
    name: "karnataka",
    description:
      "Karnataka is a state in southwest India with Arabian Sea coastlines. The capital, Bengaluru (formerly Bangalore), is a high-tech hub known for its shopping and nightlife.",
    image: "/assets/karnataka.jpg",
    shortform: "KA",
    places: [
      {
        name: "Bangalore",
        description:
          "Bengaluru, formerly known as Bangalore, is the capital of the state of Karnataka. It is located in southern India on Deccan Plateau. ",
        category: "City",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/bangalore.png",
      },
      {
        name: "COORG",
        description:
          "Wake up to the smell of tranquilizing coffee, and enjoy the scenic beauty of this misty land of hills and streams. Popularly known as the Scotland of India",
        category: "Mountain",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/coorg.png",
      },
      {
        name: "MYSORE",
        description:
          "Mysore is one of the most famous tourist destinations of South India. Originally known as Mysuru, it is the largest districts of Karnataka.",
        category: "Historical",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/mysore.png",
      },
      {
        name: "HAMPI",
        description:
          "One of Karnataka’s most treasured gems, Hampi is full of history and serenity. With various rulers reigning over the Vijayanagar empire, the map of Hampi was designed in such a way that today it stands as one of God’s blessings to the humankind.",
        category: "Historical",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/hampi.png",
      },
      {
        name: "Udupi",
        description:
          "Udupi is a wonderful holiday destination in Karnataka located about 60 km away from Mangalore. One of the unique things about this city is that it is surrounded by the Western ghats on one side and the Arabian Sea on the other.",
        category: "Beach",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/udupi.png",
      },
      {
        name: "Bandipur",
        description:
          "Bandipur is National Reserve in the Karnataka. Wild animals and birds are conserved in this reserve. A few kilometres away from the capital city, Bangalore, this reserve is one of the popular tourist places visited as a weekend getaway.",
        category: "Forest",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/bandipur_forest.png",
      },
    ],
    time: 1500,
  },
  {
    name: "Gujarat",
    description:
      "Gujarat is a state on the western coast of India with a coastline of 1,600 km – most of which lies on the Kathiawar peninsula – and a population of 60.4 million.",
    image: "/assets/gujarat.jpg",
    shortform: "GJ",
    places: [
      {
        name: "Ahmedabad",
        description:
          "Ahmedabad, also known as the 'Manchester of India' is an apt weekend destination amongst tourists who want to unwind themselves amidst nature and capture the beautiful essence of Gujarat.",
        category: "City",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/ahmedabad.png",
      },
      {
        name: "Dwarka",
        description:
          "An ancient Indian city located in Devbhoomi of Gujarat, Dwarka is one of the most religiously significant places to visit in Gujarat. This city is especially famous for the Hindu legends that circulate it.",
        category: "Temple",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/dwarka.png",
      },
      {
        name: "Porbandar",
        description:
          "The birthplace of the father of the nation, Porbandar, is a chief tourist attraction in Gujarat. Besides being the hometown of Mahatma Gandhi, it was also the birthplace of the Hindu religious figure Sudama, who was the best friend of Lord Krishna.",
        category: "Historical",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/porbandar.png",
      },
      {
        name: "Rann of Kutch",
        description:
          "Known as the world's largest salt desert, Rann of Kutch is one of the most famous tourist places to visit in Kutch. It has lured the directors into shooting this beautifully vast desert.",
        category: "Desert",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/runn_of_kutch.png",
      },
      {
        name: "Girnar",
        description:
          "Girnar or the ‘City on the hill’ is a cluster of 5 hills including Mount Girnar, Datar, Jogniya, Lakshman Tekri, and Bensla and is amongst the most scenic places to visit in Gujarat. Situated at around 3600 ft., these mountains are older than the Himalayas.",
        category: "Hill",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/ginnar.png",
      },
      {
        name: "Statue of Unity",
        description:
          "The Statue of Unity, designed by the renowned Indian sculptor Ram V Sutar, is a massive statue of one of the most respected 18th-century Indian freedom fighters Sardar Vallabhbhai Patel.",
        category: "Historical",
        entryfee: "NA",
        timing: "NA",
        image: "/assets/statue_of_unity.png",
      },
    ],
    time: 1500,
  },
];

export default states;
