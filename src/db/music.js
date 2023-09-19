let musicDB = [
    {
        id: 0,
        name: "Night Changes",
        author_name: "One Direction",
        img: "Night Changes.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type: "electronic",
        musicName: "2 Night-Changes.mp3",
        attribution: {
            song: "Night-Changes - One Direction [Youtube Release]",
            musicBy: "Youtube",
            download: "https://www.youtube.com/watch?v=syFZfO_wfMQ",
            stream: "https://www.youtube.com/watch?v=syFZfO_wfMQ"
        }
    },
    {
        id: 1,
        name: "Senorita",
        author_name: "Shawn-Mendes",
        img: "senorita.jpg",
        lang: null,
        timesPlayed: 0,
        type:"instrumental",
        musicName: "3 Senorita-Shawn-Mendes.mp3",
        attribution: {
            song: "Senorita",
            musicBy: "Youtube",
            download: null,
            stream: null
        }
    },
    {
        id: 2,
        name: "Everything At Once",
        author_name: "Lenka",
        img: "everthing.jpg",
        lang: "ENGLISH",
        type: "electronic",
        timesPlayed: 0,
        musicName: "4 Everything At Once - Lenka.mp3",
        attribution: {
            song: "Everything At Once - Lenka [Youtube Release]",
            musicBy: "NoCopyrightSounds",
            download: "https://www.youtube.com/results?search_query=everthing+at+once",
            stream: null
        }
    },
    {
        id: 3,
        name: "Levitating",
        author_name: "Dua Lipa",
        img: "levitating.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type: "electronic",
        musicName: "5 Levitating.mp3",
        attribution: {
            song: "Levitating - Dua Lipa",
            musicBy: "Youtube",
            download: "https://www.youtube.com/watch?v=TUVcZfQe-Kw",
            stream: "https://www.youtube.com/watch?v=TUVcZfQe-Kw"
        }
    },
    {
        id: 4,
        name: "Shape-of-You",
        author_name: "Ed Sheeran",
        img: "shape.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type: "electronic",
        musicName: "6 Shape-of-You.mp3",
        attribution: {
            song: "Shape-of-You - Ed Sheeran",
            musicBy: "NoCopyrightSounds",
            download: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
            stream: "https://www.youtube.com/watch?v=JGwWNGJdvx8"
        }
    },
    {
        id: 5,
        name: "Despacito",
        author_name: "Luis Fonsi",
        img: "Despacito.png",
        lang: "ENGLISH",
        timesPlayed: 0,
        type: "electronic",
        musicName: "1 Despacito.mp3",
        attribution: {
            song: "Despacito - Luis Fonsi [Youtube Release]",
            musicBy: "Youtube",
            download: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
            stream: "https://www.youtube.com/watch?v=kJQP7kiw5Fk"
        }
    },
    {
        id: 6,
        name: "Ignite",
        author_name: "Alan-Walker",
        img: "ignite.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type:"instrumental",
        musicName: "7 Ignite---Alan-Walker.mp3",
        attribution: {
            song: "Ignite",
            musicBy: "Alan-Walker",
            download: null,
            stream: null
        }
    },
    {
        id: 7,
        name: "Cheap-Thrills",
        author_name: "Sia",
        img: "cheap.png",
        lang: "ENGLISH",
        timesPlayed: 0,
        type:"instrumental",
        musicName: "8 Cheap-Thrills.mp3",
        attribution: {
            song: "Cheap-Thrills",
            musicBy: "Sia",
            download: null,
            stream: null
        }
    },
    {
        id: 8,
        name: "Dusk-Till-Dawn",
        author_name: "Zayn",
        img: "dusk.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type: "electronic",
        musicName: "9 Dusk-Till-Dawn.mp3",
        attribution: {
            song: "Dusk-Till-Dawn",
            musicBy: "Zayn",
            download: null,
            stream: null
        }
    }
];

export default musicDB;
/*let musicDB = [
  {
    id:0,
    name:"Left Foot Up Right Foot Slide",
    author_name: "Yung Nazty",
    img: "left_foot_up_right_foot_slide.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"left_foot_up_right_foot_slide.mp3"
  },
  {
    id:1,
    name: "Intentions (feat. Quavo)",
    author_name: "Justin Bieber",
    img: "intentions.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"intentions.mp3"
  },
  {
    id:2,
    name: "Naina Da Kya Kasoor",
    author_name: "Amit Trivedi",
    img: "naina_da_kya_kasoor.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"Naina_da_kya_kasoor.mp3"
  },
  {
    id:3,
    name: "Señorita",
    author_name: "Shawn Mendes",
    img: "senorita.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"senorita.mp3"
  },
  {
    id:4,
    name: "Memories",
    author_name: "Maroon 5",
    img: "memories.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"memories.mp3"
  },
  {
    id:5,
    name: "Skechers",
    author_name: "DripReport",
    img: "skechers.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"Skechers.mp3"
  },
  {
    id:6,
    name: "Sunflower - Spider-Man: Into the Spider-Verse",
    author_name: "Post Malone",
    img: "sunflower.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"Sunflower.mp3"
  },
  {
    id:7,
    name: "I Can’t Get Enough",
    author_name: "benny blanco, Selena Gomez, J Balvin, Tainy",
    img: "i_cant_get_enough.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"i_cant_get_enough.mp3"
  },
  {
    id:8,
    name: "Old Town Road",
    author_name: "Lil Nas X",
    img: "old_town_road.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"old_town_road.mp3"
  },
  {
    id:9,
    name: "Beautiful Stillness",
    author_name: "Billy-Joe",
    img: "beautiful_stillness.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"Beautiful_Stillness.mp3"
  },
  {
    id:10,
    name: "death bed (coffee for your head)",
    author_name: "Powfu",
    img: "death_bed.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"death_bed.mp3"
  },
  {
    id:11,
    name: "Halka Halka (From \"Fanney Khan\")",
    author_name: "Sunidhi Chauhan",
    img: "halka_halka_suroor.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"halka_halka_suroor.mp3"
  },
  {
    id:12,
    name: "Kudi Nu Nachne De (From \"Angrezi Medium\")",
    author_name: "Vishal Dadlani",
    img: "kudi_nu_nachne_de.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"kudi_nu_nachne_de.mp3"
  },
  {
    id:13,
    name: "Illegal Weapon 2.0",
    author_name: "Jasmine Sandlas",
    img: "illeagal_weapon_2.jpg",
    lang:"PUBJABI",
    timesPlayed:0,
    musicName:"illeagal_weapon_2.mp3"
  },
  {
    id:14,
    name: "Genda Phool (feat. Payal Dev)",
    author_name: "Badshah",
    img: "genda_phool.jpg",
    lang:"BENGALI",
    timesPlayed:0,
    musicName:"genda_phool.mp3"
  },
  {
    id:15,
    name: "Yaar Mod Do",
    author_name: "Guru Randhawa",
    img: "yaar_mod_do.jpg",
    lang:"PUNJABI",
    timesPlayed:0,
    musicName:"yaar_mod_do.mp3"
  },
  {
    id:16,
    name: "Shayad",
    author_name: "Pritam",
    img: "shayad.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"shayad.mp3"
  },
  {
    id:17,
    name: "Without Me",
    author_name: "Halsey",
    img: "without_me.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"without_me.mp3"
  },
  {
    id:18,
    name: "Buttabomma - Telugu",
    author_name: "Armaan Malik",
    img: "buttabomma.jpg",
    lang:"TELUGU",
    timesPlayed:0,
    musicName:"ButtaBomma.mp3"
  },
  {
    id:19,
    name: "Coda",
    author_name: "Jakob Ahlbom",
    img: "coda.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"coda.mp3"
  },
  {
    id:20,
    name: "Khairiyat",
    author_name: "Arijit Singh",
    img: "khairiyat.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"khairiyat.mp3"
  },
  {
    id:21,
    name: "Haan Main Galat",
    author_name: "Pritam",
    img: "haan_mai_galat.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"haan_mai_galat.mp3"
  },
  {
    id:22,
    name: "Mere Liye Tum Kaafi Ho (From \"Shubh Mangal Zyada Saavdhan\")",
    author_name: "Ayushmann Khurrana",
    img: "mere_liiye_tum_kaafi_ho.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"mere_liiye_tum_kaafi_ho.mp3"
  },
  {
    id:23,
    name: "Fracture",
    author_name: "Jakob Ahlbom",
    img: "fracture.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"fracture.mp3"
  },
  {
    id:24,
    name: "Ghungroo (From \"War\")",
    author_name: "Arijit Singh",
    img: "ghungroo.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"ghungroo.mp3"
  },
  {
    id:25,
    name: "Happier",
    author_name: "Marshmello",
    img: "happier.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"happier.mp3"
  },
  {
    id:26,
    name: "Namo Namo",
    author_name: "Amit Trivedi",
    img: "namo_namo.jpg",
    lang:"HINDI",
    timesPlayed:0,
    musicName:"namo_namo.mp3"
  },
  {
    id:27,
    name: "Faded",
    author_name: "Alan Walker",
    img: "faded.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"Faded_Alan_Walker.mp3"
  },
  {
    id:28,
    name: "I Don't Care (with Justin Bieber)",
    author_name: "Ed Sheeran",
    img: "i_dont_care.jpg",
    lang: "ENGLISH",
    timesPlayed:0,
    musicName:"i_dont_care.mp3"
  }
]
export default musicDB;*/