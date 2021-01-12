const usersData = {
    results: [
    // {
    // gender: "male",
    // name: {
    // title: "Mr",
    // first: "Alex",
    // last: "Gibson"
    // },
    // location: {
    // street: {
    // number: 9650,
    // name: "New Road"
    // },
    // city: "Gloucester",
    // state: "Clwyd",
    // country: "United Kingdom",
    // postcode: "SH3S 6PD",
    // coordinates: {
    // latitude: "11.9574",
    // longitude: "-114.9926"
    // },
    // timezone: {
    // offset: "+3:00",
    // description: "Baghdad, Riyadh, Moscow, St. Petersburg"
    // }
    // },
    // email: "alex.gibson@example.com",
    // login: {
    // uuid: "048f762a-7e8a-432c-a851-d3b1cf802a70",
    // username: "goldenbutterfly862",
    // password: "llll",
    // salt: "C6HNmkVi",
    // md5: "e13f9392dc737a632aa1a8b3faf997b8",
    // sha1: "cb45cbe0c04f242e780a1f0ea5f9c78813ec05a7",
    // sha256: "34ee0a14eea0029ed042f080de92b1b52303334e77e9e3e267105a56e6d7c1d4"
    // },
    // dob: {
    // date: "1954-11-20T00:07:15.196Z",
    // age: 67
    // },
    // registered: {
    // date: "2015-02-26T00:31:06.781Z",
    // age: 6
    // },
    // phone: "01795 01640",
    // cell: "0717-552-183",
    // id: {
    // name: "NINO",
    // value: "WC 50 41 45 N"
    // },
    // picture: {
    // large: "https://randomuser.me/api/portraits/men/9.jpg",
    // medium: "https://randomuser.me/api/portraits/med/men/9.jpg",
    // thumbnail: "https://randomuser.me/api/portraits/thumb/men/9.jpg"
    // },
    // nat: "GB"
    // },
    // {
    // gender: "female",
    // name: {
    // title: "Madame",
    // first: "Éveline",
    // last: "Le Gall"
    // },
    // location: {
    // street: {
    // number: 1681,
    // name: "Rue du Moulin"
    // },
    // city: "Scharans",
    // state: "Zug",
    // country: "Switzerland",
    // postcode: 2562,
    // coordinates: {
    // latitude: "-56.3397",
    // longitude: "122.9126"
    // },
    // timezone: {
    // offset: "-7:00",
    // description: "Mountain Time (US & Canada)"
    // }
    // },
    // email: "eveline.legall@example.com",
    // login: {
    // uuid: "650dc92d-0993-4e73-9eff-ec638f5807c8",
    // username: "yellowduck654",
    // password: "tank",
    // salt: "386TQDLD",
    // md5: "90d088c95e03b6c9dd8f5d7b67025973",
    // sha1: "d84b8a836fb38ceb09d5cd686f3e06ab6ea838e4",
    // sha256: "ab84d0614adddc0e9ba540495fcafa7b0cda81ecfde9f9b99bfe34340b0838a7"
    // },
    // dob: {
    // date: "1971-07-24T00:07:32.138Z",
    // age: 50
    // },
    // registered: {
    // date: "2014-03-09T12:18:18.868Z",
    // age: 7
    // },
    // phone: "076 339 45 51",
    // cell: "076 367 61 53",
    // id: {
    // name: "AVS",
    // value: "756.1218.4313.00"
    // },
    // picture: {
    // large: "https://randomuser.me/api/portraits/women/22.jpg",
    // medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
    // thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg"
    // },
    // nat: "CH"
    // },
    // {
    // gender: "female",
    // name: {
    // title: "Mrs",
    // first: "Britney",
    // last: "Oliver"
    // },
    // location: {
    // street: {
    // number: 4302,
    // name: "Boghall Road"
    // },
    // city: "Passage West",
    // state: "Wicklow",
    // country: "Ireland",
    // postcode: 36178,
    // coordinates: {
    // latitude: "79.4352",
    // longitude: "-162.1875"
    // },
    // timezone: {
    // offset: "+5:00",
    // description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
    // }
    // },
    // email: "britney.oliver@example.com",
    // login: {
    // uuid: "fdce6ef4-2fc9-4251-97a2-a942efd9c89d",
    // username: "browngoose394",
    // password: "coochie",
    // salt: "pH12QNxK",
    // md5: "3769fe47a44b4fc9a62de2a170f33609",
    // sha1: "023a6c8f820683562adf6a9d441aa136efd7dc59",
    // sha256: "3a7e63e6e8b9c8b431d9d839d4d6f607dd1fa203a179dacf9da40647b2b6a5cd"
    // },
    // dob: {
    // date: "1987-12-31T10:56:31.363Z",
    // age: 34
    // },
    // registered: {
    // date: "2005-10-15T03:40:19.400Z",
    // age: 16
    // },
    // phone: "021-640-9464",
    // cell: "081-010-3973",
    // id: {
    // name: "PPS",
    // value: "4891108T"
    // },
    // picture: {
    // large: "https://randomuser.me/api/portraits/women/28.jpg",
    // medium: "https://randomuser.me/api/portraits/med/women/28.jpg",
    // thumbnail: "https://randomuser.me/api/portraits/thumb/women/28.jpg"
    // },
    // nat: "IE"
    // },
    // {
    // gender: "male",
    // name: {
    // title: "Mr",
    // first: "Titouan",
    // last: "Bernard"
    // },
    // location: {
    // street: {
    // number: 9385,
    // name: "Rue des Écoles"
    // },
    // city: "Caen",
    // state: "Pyrénées-Orientales",
    // country: "France",
    // postcode: 83236,
    // coordinates: {
    // latitude: "-69.1626",
    // longitude: "-84.2195"
    // },
    // timezone: {
    // offset: "-7:00",
    // description: "Mountain Time (US & Canada)"
    // }
    // },
    // email: "titouan.bernard@example.com",
    // login: {
    // uuid: "71090218-f480-439a-9d23-554973e34cd9",
    // username: "goldenleopard760",
    // password: "skeeter",
    // salt: "wVc16hoA",
    // md5: "25ee9f494c27a7b210c25cf1745ca502",
    // sha1: "eee01714fc832c4e677a6471de966f0cd7b9d066",
    // sha256: "bffb7cf1ac34d4b91f14c50954345e31e9a217a40230088a7a17986c79f52238"
    // },
    // dob: {
    // date: "1945-01-19T20:42:12.949Z",
    // age: 76
    // },
    // registered: {
    // date: "2003-03-07T07:11:22.772Z",
    // age: 18
    // },
    // phone: "04-49-92-36-38",
    // cell: "06-02-02-47-82",
    // id: {
    // name: "INSEE",
    // value: "1NNaN74820138 51"
    // },
    // picture: {
    // large: "https://randomuser.me/api/portraits/men/98.jpg",
    // medium: "https://randomuser.me/api/portraits/med/men/98.jpg",
    // thumbnail: "https://randomuser.me/api/portraits/thumb/men/98.jpg"
    // },
    // nat: "FR"
    // },
    // {
    // gender: "female",
    // name: {
    // title: "Ms",
    // first: "Ellen",
    // last: "Lopez"
    // },
    // location: {
    // street: {
    // number: 1504,
    // name: "Main Street"
    // },
    // city: "Monaghan",
    // state: "Cork City",
    // country: "Ireland",
    // postcode: 19265,
    // coordinates: {
    // latitude: "-15.4385",
    // longitude: "1.1364"
    // },
    // timezone: {
    // offset: "+3:00",
    // description: "Baghdad, Riyadh, Moscow, St. Petersburg"
    // }
    // },
    // email: "ellen.lopez@example.com",
    // login: {
    // uuid: "01b8842d-5c5e-4e4b-bea7-1edb47078d16",
    // username: "smallzebra684",
    // password: "squirrel",
    // salt: "NUnICfd3",
    // md5: "0e5f1e44b97db96afa4b757fd585c981",
    // sha1: "77f58efa450d3771bb0ee923e831064809a4e4bd",
    // sha256: "0b70c4ae4cd0023cba0a7a0e4436e21514410466018072ec389a95fee94f16ee"
    // },
    // dob: {
    // date: "1967-01-22T21:58:14.734Z",
    // age: 54
    // },
    // registered: {
    // date: "2013-08-11T17:42:19.606Z",
    // age: 8
    // },
    // phone: "061-403-5792",
    // cell: "081-235-3943",
    // id: {
    // name: "PPS",
    // value: "8055952T"
    // },
    // picture: {
    // large: "https://randomuser.me/api/portraits/women/42.jpg",
    // medium: "https://randomuser.me/api/portraits/med/women/42.jpg",
    // thumbnail: "https://randomuser.me/api/portraits/thumb/women/42.jpg"
    // },
    // nat: "IE"
    // },
    // {
    // gender: "female",
    // name: {
    // title: "Mrs",
    // first: "Emma",
    // last: "Welch"
    // },
    // location: {
    // street: {
    // number: 6704,
    // name: "The Avenue"
    // },
    // city: "York",
    // state: "Clwyd",
    // country: "United Kingdom",
    // postcode: "F8 1SP",
    // coordinates: {
    // latitude: "5.0757",
    // longitude: "-154.4738"
    // },
    // timezone: {
    // offset: "+4:30",
    // description: "Kabul"
    // }
    // },
    // email: "emma.welch@example.com",
    // login: {
    // uuid: "b45b982b-fe7b-44cd-9916-26983947d32d",
    // username: "blackwolf810",
    // password: "toonarmy",
    // salt: "BZ50bY0A",
    // md5: "1fe591a4b521c29f8391b1306200c280",
    // sha1: "45ff81656db2e67f392cffc5edc332fd22c30dfc",
    // sha256: "16072f0d5dea95bfd21189aa958301246137a6b33b509143b5ca64230746ea7b"
    // },
    // dob: {
    // date: "1995-03-31T21:23:46.934Z",
    // age: 26
    // },
    // registered: {
    // date: "2013-10-05T18:30:19.791Z",
    // age: 8
    // },
    // phone: "016977 8311",
    // cell: "0795-798-984",
    // id: {
    // name: "NINO",
    // value: "AY 35 30 65 K"
    // },
    // picture: {
    // large: "https://randomuser.me/api/portraits/women/11.jpg",
    // medium: "https://randomuser.me/api/portraits/med/women/11.jpg",
    // thumbnail: "https://randomuser.me/api/portraits/thumb/women/11.jpg"
    // },
    // nat: "GB"
    // },
    // {
    // gender: "female",
    // name: {
    // title: "Ms",
    // first: "Olga",
    // last: "Moreno"
    // },
    // location: {
    // street: {
    // number: 4004,
    // name: "Calle de La Almudena"
    // },
    // city: "La Palma",
    // state: "Comunidad Valenciana",
    // country: "Spain",
    // postcode: 10765,
    // coordinates: {
    // latitude: "49.4997",
    // longitude: "156.4674"
    // },
    // timezone: {
    // offset: "+6:00",
    // description: "Almaty, Dhaka, Colombo"
    // }
    // },
    // email: "olga.moreno@example.com",
    // login: {
    // uuid: "2efeba79-7ef3-497a-bf24-66e7991359ba",
    // username: "happylion448",
    // password: "sabres",
    // salt: "kiZ9Djpu",
    // md5: "606f454b295596e047ed7d2159c082c1",
    // sha1: "161bcc8327c0fc8693f770838c2dadbea7bdc77b",
    // sha256: "f2a77b0628fe7decba72b990ee7c66be9883d7d0a44f0b7ee9d3547bd559d1e7"
    // },
    // dob: {
    // date: "1996-07-09T12:53:48.745Z",
    // age: 25
    // },
    // registered: {
    // date: "2011-03-04T14:16:16.722Z",
    // age: 10
    // },
    // phone: "966-223-631",
    // cell: "663-961-798",
    // id: {
    // name: "DNI",
    // value: "79547827-I"
    // },
    // picture: {
    // large: "https://randomuser.me/api/portraits/women/13.jpg",
    // medium: "https://randomuser.me/api/portraits/med/women/13.jpg",
    // thumbnail: "https://randomuser.me/api/portraits/thumb/women/13.jpg"
    // },
    // nat: "ES"
    // },
    {
    gender: "female",
    name: {
    title: "Mrs",
    first: "Megan",
    last: "Ennis"
    },
    location: {
    street: {
    number: 7732,
    name: "West Ave"
    },
    city: "Cochrane",
    state: "Alberta",
    country: "Canada",
    postcode: "O8Y 0C2",
    coordinates: {
    latitude: "-64.4371",
    longitude: "34.4709"
    },
    timezone: {
    offset: "-3:00",
    description: "Brazil, Buenos Aires, Georgetown"
    }
    },
    email: "megan.ennis@example.com",
    login: {
    uuid: "6242d651-510a-482a-9b60-bf438ddba694",
    username: "blackbutterfly224",
    password: "amanda1",
    salt: "gFN4OKM2",
    md5: "e6dab3e5cb39867e6f3c637ed32f0550",
    sha1: "1a74cc39f50e0ce2540a99795e60275d546e6a87",
    sha256: "2d38054fd7fc1f4157f5b9d38ed4f4705cdb63262720a12255b633000d8c8a91"
    },
    dob: {
    date: "1989-02-22T16:05:40.235Z",
    age: 32
    },
    registered: {
    date: "2016-08-19T23:27:27.661Z",
    age: 5
    },
    phone: "337-608-5780",
    cell: "854-504-1822",
    id: {
    name: "",
    value: null
    },
    picture: {
    large: "https://randomuser.me/api/portraits/women/25.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg"
    },
    nat: "CA"
    },
    {
    gender: "female",
    name: {
    title: "Ms",
    first: "Femmigje",
    last: "Bhagwandin"
    },
    location: {
    street: {
    number: 1401,
    name: "Groenlandstraat"
    },
    city: "Leimuiden",
    state: "Flevoland",
    country: "Netherlands",
    postcode: 99046,
    coordinates: {
    latitude: "-50.3528",
    longitude: "-52.2642"
    },
    timezone: {
    offset: "-8:00",
    description: "Pacific Time (US & Canada)"
    }
    },
    email: "femmigje.bhagwandin@example.com",
    login: {
    uuid: "5c343a70-f7a7-4120-9fb4-6ee211d84f03",
    username: "goldenlion977",
    password: "blood",
    salt: "G67vcIgH",
    md5: "5c9f1dec174997a353c7f4ee6c83d229",
    sha1: "8f2a46ed93c9d0120cb6747e36fc15cd20f81932",
    sha256: "b8634c105fbccd4710957b3b0f498d74fe29cb9fca69fc974e388941260a8396"
    },
    dob: {
    date: "1951-01-11T02:01:51.402Z",
    age: 70
    },
    registered: {
    date: "2019-09-10T06:56:24.134Z",
    age: 2
    },
    phone: "(056)-670-0689",
    cell: "(314)-009-2390",
    id: {
    name: "BSN",
    value: "03603354"
    },
    picture: {
    large: "https://randomuser.me/api/portraits/women/85.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/85.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/85.jpg"
    },
    nat: "NL"
    },
    {
    gender: "male",
    name: {
    title: "Mr",
    first: "Rodrigo",
    last: "Nieto"
    },
    location: {
    street: {
    number: 1837,
    name: "Calle de Alcalá"
    },
    city: "Santander",
    state: "Cataluña",
    country: "Spain",
    postcode: 64409,
    coordinates: {
    latitude: "78.9441",
    longitude: "83.8530"
    },
    timezone: {
    offset: "+4:00",
    description: "Abu Dhabi, Muscat, Baku, Tbilisi"
    }
    },
    email: "rodrigo.nieto@example.com",
    login: {
    uuid: "3cd5c0de-136d-458b-80fc-7ee45a6d0303",
    username: "sadladybug230",
    password: "divine",
    salt: "O0Y2A9dT",
    md5: "af4ff17771366f5ede8febc40e5e6702",
    sha1: "e091a6cd1206469f0c71f2abbddf65e98c559f26",
    sha256: "ff6f467396067c5c956ee3fa811bcc700349436733567dfd50cac5fa5f116b50"
    },
    dob: {
    date: "1947-02-28T20:20:03.889Z",
    age: 74
    },
    registered: {
    date: "2012-02-19T23:00:33.127Z",
    age: 9
    },
    phone: "991-099-543",
    cell: "639-556-623",
    id: {
    name: "DNI",
    value: "45492004-M"
    },
    picture: {
    large: "https://randomuser.me/api/portraits/men/17.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg"
    },
    nat: "ES"
    }
    ],
    info: {
    seed: "7476a20ae5b5649d",
    results: 10,
    page: 1,
    version: "1.3"
    }
    }

    const allUsers = usersData.results
    export default allUsers;