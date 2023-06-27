const CategoryModel = require("../../models/CategoryModel.cjs")
const knex = require("knex")
const BaseModel = require("../../models/BaseModel.cjs")
const config = require("../../config.js")
const MaterialModel = require("../../models/MaterialModel.cjs")
const ProductModel = require("../../models/ProductModel.cjs")

const seed = async () => {
  const db = knex(config.db)
  BaseModel.knex(db)
  await db("categories").del()
  await db("materials").del()
  await db("products").del()

  const base_stock = 10

  const categories = [
    {
      main_page: true,
      name: "Chambre adultes",
      description:
        "La chambre est un espace bien déterminé dans une maison. Privée, intime, elle doit refléter la personnalité de son occupant, adulte ou enfant, sans forcément correspondre au style du reste de la maison. Tout est permis pour la déco de la chambre, il suffit de laisser parler sa créativité.",
      image:
        "https://images.pexels.com/photos/6636252/pexels-photo-6636252.jpeg?auto=compress&cs=tinysrgb&w=600",
      products: [
        {
          name: "ARMOIRE POUR ADULTE",
          description: "Une très jolie armoire pour adulte",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2528/2528377.jpg?w=900&h=675&p=fw",
          price: 800,
        },
        {
          name: "BUREAU POUR ADULTE",
          description: "Un très joli bureau pour adulte",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2582/2582936.jpg?w=300&h=225&p=fw",
          price: 700,
        },
        {
          name: "CHAISE POUR ADULTE",
          description: "Une très jolie chaise pour adulte",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2676/2676563.jpg?w=300&h=225&p=fw",
          price: 150,
        },
        {
          name: "COIFFEUSE POUR ADULTE CH",
          description: "Une très jolie coiffeuse pour adulte",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2941/2941030.jpg?w=900&h=675&p=fw",
          price: 450,
        },
        {
          name: "Commode pour adulte COMMODE ",
          description: "Une très jolie commode",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2701/2701705.jpg?w=300&h=225&p=fw",
          price: 400,
        },
        {
          name: "ETAGERE POUR ADULTE",
          description: "Une très jolie étagère pour adulte",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2736/2736216.jpg?w=300&h=225&p=fw",
          price: 300,
        },
        {
          name: "LIT DOUBLE POUR ADULTE",
          description: "",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2567/2567843.jpg?w=300&h=225&p=fw",
          price: 600,
        },
      ],
    },
    {
      name: "Chambre Enfant",
      description:
        "Dans une chambre d'enfant où les mètres carrés sont comptés, le mobilier évolutif ou un lit en hauteur sont les premières idées à adopter pour optimiser l'espace.",
      image:
        "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=600",
      products: [
        {
          name: "ARMOIRE POUR ENFANT",
          description: "Une très jolie armoire pour enfant",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2671/2671187.jpg?w=300&h=225&p=fw",
          price: 400,
        },
        {
          name: "LIT POUR ENFANT",
          description: "Un très joli lit pour enfant",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2569/2569538.jpg?w=300&h=225&p=fw",
          price: 555,
        },
        {
          name: "BUREAU POUR ENFANT",
          description: "Un très joli bureau pour enfant",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2898/2898649.jpg?w=300&h=225&p=fw",
          price: 250,
        },
        {
          name: "BUREAU POUR ENFANT",
          description: "Un très joli bureau pour enfant",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2576/2576488.jpg?w=300&h=225&p=fw",
          price: 250,
        },

        {
          name: "COMMODE POUR ENFANT",
          description: "Une très jolie commode",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2703/2703486.jpg?w=300&h=225&p=fw",
          price: 300,
        },
        {
          name: "LIT HAUT HARTFORD",
          description: "Un très joli lit pour enfant",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2983/2983507.jpg?w=300&h=225&p=fw",
          price: 694,
        },

        {
          name: "LIT SUPERPOSÉ HARTFORD ",
          description: "Un très joli lit pour enfant",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2983/2983597.jpg?w=300&h=225&p=fw",
          price: 892,
        },
        {
          name: "BUREAU POUR ENFANT ",
          description: "Un très joli bureau pour enfant",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2576/2576138.jpg?w=300&h=225&p=fw",
          price: 250,
        },
      ],
    },
    {
      main_page: true,
      name: "Cuisine",
      description:
        "La cuisine est l'ensemble des techniques de préparation des aliments en vue de leur consommation par les êtres humains que l'on a appelé précédemment « la cuisinerie ». La cuisine est diverse à travers le monde.",
      image:
        "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg",
      products: [
        {
          name: "TABLE DE BAR MIAMI",
          description: "Un très joli bar",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2599/2599287.jpg?w=300&h=225&p=fw",
          price: 865,
        },
        {
          name: "ENSEMBLE DE CUISINE UPA",
          description: "Un très joli ellier",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2820/2820156.jpg?w=900&h=675&p=fw",
          price: 2500,
        },
        {
          name: "CHAISE DE BAR TULSA",
          description: "Une très jolie chaise haute",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2710/2710933.jpg?w=300&h=225&p=fw",
          price: 200,
        },
        {
          name: "PLACARD VAISSELLE",
          description: "Un très joli placard à vaisselle",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2754/2754404.jpg?w=300&h=225&p=fw",
          price: 550,
        },
        {
          name: "ARMOIRE AVEC PORTES COLOR",
          description: "Un très joli placard coulissant",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2754/2754458.jpg?w=300&h=225&p=fw",
          price: 450,
        },
        {
          name: "PLACARD AVEC TIROIRS UPA",
          description: "Un très joli tiroir couvert",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2754/2754258.jpg?w=300&h=225&p=fw",
          price: 150,
        },
      ],
    },
    {
      name: "Salle de bain",
      main_page: true,
      description:
        "Une salle de bains, ou salle de bain, est, dans un lieu d'habitation, une pièce dans laquelle peuvent être effectuées les opérations d'hygiène corporelle : prendre un bain ou une douche, se laver les mains ou le visage, se raser, etc. La salle de bains peut aussi comporter des toilettes",
      image:
        "https://media.istockphoto.com/id/1308282338/fr/photo/photo-moderne-de-stock-int%C3%A9rieur-de-salle-de-bains.jpg?s=612x612&w=0&k=20&c=g1MRgiDpHKmChcHiCVkpszVAUGN-vAOVXRnh6npN6HU=",
      products: [
        {
          name: "ETAGERE MURALE",
          description: "Une très jolie étagère murale",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3142/3142679.jpg?w=300&h=225&p=fw",
          price: 145,
        },
        {
          name: "ARMOIRE DE TOILETTE MURALE ",
          description: "Un très joli meuble lavabo",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3065/3065460.jpg?w=300&h=225&p=fw",
          price: 300,
        },
        {
          name: "COLONNE DE SALL DE BAIN ",
          description: "Un très joli meuble à serviettes",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2600/2600064.jpg?w=300&h=225&p=fw",
          price: 220,
        },
        {
          name: "COLONNE DE SALLE DE BAIN TRENTON",
          description: "Un très joli vasque",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2748/2748606.jpg?w=300&h=225&p=fw",
          price: 300,
        },
        {
          name: "Merced MEUBLE MURAL VASQUE SALL DE BAINS",
          description: "Un très joli meuble lavabo",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3084/3084771.jpg?w=300&h=225&p=fw",
          price: 300,
        },
        {
          name: "COLONNE DE SALLE DE BAINS",
          description: "Un très joli meuble à serviettes",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3135/3135393.jpg?w=300&h=225&p=fw",
          price: 220,
        },
        {
          name: "VASQUE SALLE DE BAINS",
          description: "Un très joli vasque",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2617/2617051.jpg?w=900&h=675&p=fw",
          price: 300,
        },
        {
          name: "ENSEMBLE DE SALLE DE BAIN MERCED",
          description: "Une très jolie étagère murale",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3065/3065986.jpg?w=900&h=675&p=fw",
          price: 145,
        },
        {
          name: "ENSEMBLE DE SALLE DE BAIN TRENTON",
          description: "Un très joli meuble lavabo",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2736/2736074.jpg?w=900&h=675&p=fw",
          price: 300,
        },
        {
          name: "ENSEMBLE DE SALLE DE BAIN HARTFORD",
          description: "Un très joli meuble à serviettes",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3071/3071159.jpg?w=900&h=675&p=fw",
          price: 655,
        },
        {
          name: "ENSEMBLE DE SALLE DE BAIN MERCED",
          description: "Un très joli vasque",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3067/3067251.jpg?w=900&h=675&p=fw",
          price: 542,
        },
        {
          name: "ENSEMBLE DE SALLE DE BAIN SARASOTA",
          description: "Une très jolie étagère murale",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2737/2737085.jpg?w=900&h=675&p=fw",
          price: 632,
        },
        {
          name: "MEUBLE MURAL VASQUE SALLE DE BAINS TRENTON",
          description: "Un très joli meuble lavabo",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2733/2733339.jpg?w=900&h=675&p=fw",
          price: 234,
        },
        {
          name: "MEUBLE MURAL VASQUE SALLE DE BAINS",
          description: "Un très joli meuble à serviettes",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3085/3085350.jpg?w=300&h=225&p=fw",
          price: 220,
        },
        {
          name: "ENSEMBLE DE SALLE DE BAIN PROVIDENCE",
          description: "Un très joli vasque",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2737/2737234.jpg?w=900&h=675&p=fw",
          price: 300,
        },
        {
          name: "ENSEMBLE DE SALLE DE BAIN SARASOTA",
          description: "Une très jolie étagère murale",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2936/2936776.jpg?w=900&h=675&p=fw",
          price: 398,
        },
        {
          name: "ENSEMBLE DE SALLE DE BAIN HARTFORD",
          description: "Un très joli meuble lavabo",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3131/3131689.jpg?w=900&h=675&p=fw",
          price: 300,
        },
        {
          name: "ENSEMBLE DE SALLE DE BAIN PROVIDENCE",
          description: "Un très joli meuble à serviettes",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2737/2737024.jpg?w=900&h=675&p=fw",
          price: 634,
        },
        {
          name: "ENSEMBLE DE SALLE DE BAIN TRENTON",
          description: "Un très joli vasque",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2736/2736097.jpg?w=900&h=675&p=fw",
          price: 533,
        },
        {
          name: "ENSEMBLE DE SALLE DE BAIN MIAMI",
          description: "Une très jolie étagère murale",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2826/2826672.jpg?w=900&h=675&p=fw",
          price: 145,
        },
        {
          name: "ARMOIRE DE TOILETTE MURALE MERCED",
          description: "Un très joli meuble lavabo",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3084/3084659.jpg?w=900&h=675&p=fw",
          price: 300,
        },
        {
          name: "ENSEMBLE DE SALLE DE BAIN MIAMI",
          description: "Un très joli meuble à serviettes",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3143/3143151.jpg?w=900&h=675&p=fw",
          price: 220,
        },
        {
          name: "MIROIR SALLE DE BAINS ",
          description: "Un très joli vasque",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3143/3143154.jpg?w=900&h=675&p=fw",
          price: 120,
        },
        {
          name: "ARMOIRE DE TOILETTE MURALE MERCED",
          description: "Une très jolie étagère murale",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3113/3113913.jpg?w=900&h=675&p=fw",
          price: 320,
        },
        {
          name: "ENSEMBLE DE SALLE DE BAIN HARTFORD",
          description: "Un très joli meuble lavabo",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3131/3131818.jpg?w=900&h=675&p=fw",
          price: 747,
        },
        {
          name: "COLONNE DE SALLE DE BAINS",
          description: "Un très joli meuble à serviettes",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3135/3135393.jpg?w=300&h=225&p=fw",
          price: 220,
        },
        {
          name: "ARMOIRE DE TOILETTE MURALE",
          description: "Un très joli vasque",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3084/3084461.jpg?w=300&h=225&p=fw",
          price: 226,
        },
      ],
    },
    {
      name: "Salon",
      description:
        "La salle de séjour, aussi appelée salon, est la pièce du logement dédiée aux divertissements de la famille et à la réception des invités. Il est alors meublé de sièges plutôt confortables, de table basse, table gigogne, meuble-bibliothèque, bar, ou éventuellement des instruments de musique volumineux.",
      image:
        "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600",
      products: [
        {
          name: "RANGEMENT DE SALON PROVIDENCE",
          description: "Une très jolie bibliothèque",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2555/2555996.jpg?w=900&h=675&p=fw",
          price: 703,
        },
        {
          name: "CANAPÉ-LIT",
          description: "Un très joli canapé",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3158/3158089.jpg?w=300&h=225&p=fw",
          price: 926,
        },
        {
          name: "ENSEMBLE DE CHAISES",
          description: "Une très jolie chaise",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2676/2676426.jpg?w=900&h=675&p=fw",
          price: 150,
        },
        {
          name: "FAUTEUIL MIRAMAR",
          description: "Un très joli fauteuil",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2558/2558817.jpg?w=900&h=675&p=fw",
          price: 1400,
        },
        {
          name: "RANGEMENT DE SALON",
          description: "Un très joli meuble pour télévision",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2651/2651621.jpg?w=900&h=675&p=fw",
          price: 1600,
        },
        {
          name: "TABLE RACINE",
          description: "Une très jolie table",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2658/2658705.jpg?w=900&h=675&p=fw",
          price: 700,
        },
        {
          name: "TABLE BASSE PROVIDENCE",
          description: "Une très jolie table basse",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2936/2936685.jpg?w=900&h=675&p=fw",
          price: 500,
        },
        {
          name: "FAUTEUIL CLOVIS",
          description: "Une très jolie bibliothèque",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3019/3019111.jpg?w=900&h=675&p=fw",
          price: 650,
        },
        {
          name: "FAUTEUIL CLOVIS",
          description: "Un très joli canapé",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2709/2709239.jpg?w=900&h=675&p=fw",
          price: 2500,
        },
        {
          name: "ENSEMBLE DE CHAISES",
          description: "Une très jolie chaise",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2676/2676609.jpg?w=300&h=225&p=fw",
          price: 150,
        },
        {
          name: "FAUTEUIL PROVIDENCE",
          description: "Un très joli fauteuil",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2709/2709375.jpg?w=900&h=675&p=fw",
          price: 413,
        },
        {
          name: "MEUBLE TV UTICA",
          description: "Un très joli meuble pour télévision",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2643/2643834.jpg?w=900&h=675&p=fw",
          price: 1600,
        },
        {
          name: "TABLE TUCSON",
          description: "Une très jolie table",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2734/2734310.jpg?w=900&h=675&p=fw",
          price: 700,
        },
        {
          name: "TABLE BASSE PROVIDENCE",
          description: "Une très jolie table basse",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2936/2936685.jpg?w=900&h=675&p=fw",
          price: 500,
        },
        {
          name: "MEUBLE TV HARTFORD",
          description: "Une très jolie bibliothèque",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3105/3105894.jpg?w=900&h=675&p=fw",
          price: 650,
        },
        {
          name: "CANAPÉ D'ANGLE",
          description: "Un très joli canapé",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2525/2525447.jpg?w=900&h=675&p=fw",
          price: 2500,
        },
        {
          name: "CHAISE COSMOLIVING",
          description: "Une très jolie chaise",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2801/2801973.jpg?w=900&h=675&p=fw",
          price: 150,
        },
        {
          name: "CANAPÉ D'ANGLE SHELTON",
          description: "Un très joli fauteuil",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3146/3146913.jpg?w=900&h=675&p=fw",
          price: 1400,
        },
        {
          name: "MEUBLE TV CHARLOTTE",
          description: "Un très joli meuble pour télévision",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3105/3105870.jpg?w=900&h=675&p=fw",
          price: 1600,
        },
        {
          name: "TABLE MIAMI",
          description: "Une très jolie table",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/3141/3141674.jpg?w=900&h=675&p=fw",
          price: 700,
        },
        {
          name: "TABLE BASSE CHARLOTTE",
          description: "Une très jolie table basse",
          stock: base_stock,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2605/2605427.jpg?w=900&h=675&p=fw",
          price: 500,
        },
      ],
    },
  ]

  await CategoryModel.query().insertGraph(categories)
  const materials = [
    {
      name: "bois",
    },
    {
      name: "acier",
    },
    {
      name: "plastique",
    },
    {
      name: "céramique",
    },
  ]

  await MaterialModel.query().insertGraph(materials)
  const productsNameWood = [
    "Armoire pour adulte",
    "Bureau pour adulte",
    "Coiffeuse pour adulte",
    "Commode pour adulte",
    "Etagère pour adulte",
    "Lit double pour adulte",
    "Armoire pour enfant",
    "Bureau pour enfant",
    "Commode pour enfant",
    "Lit pour enfant",
    "Bar",
    "Cellier",
    "Placard coulissant",
    "Tiroir ouvert",
    "Etagère murale",
    "Meuble lavabo",
    "meuble à serviettes",
    "Vasque",
    "Bibliothèque",
    "Meuble pour télévision",
    "Table",
    "Table basse",
  ]
  const productsNameSteel = [
    [
      "Armoire pour adulte",
      "Chaise pour adulte",
      "Coiffeuse pour adulte",
      "Commode pour adulte",
      "Lit double pour adulte",
      "Commode pour enfant",
      "Lit pour enfant",
      "Bar",
      "Cellier",
      "Placard coulissant",
    ],
  ]
  const productsNamePlastic = [["Chaise haute"]]
  const productsNameCeramic = [["Vasque"]]
  const materialWood = await MaterialModel.query().findOne({ name: "bois" })
  const productsWood = await ProductModel.query().whereIn(
    "name",
    productsNameWood
  )
  for (const product of productsWood) {
    await materialWood.$relatedQuery("products").relate(product.id)
  }
  const materialSteel = await MaterialModel.query().findOne({ name: "acier" })
  const productsNameSteelFlat = productsNameSteel.flat()
  const productsSteel = await ProductModel.query().whereIn(
    "name",
    productsNameSteelFlat
  )
  for (const product of productsSteel) {
    await materialSteel.$relatedQuery("products").relate(product.id)
  }
  const materialPlastic = await MaterialModel.query().findOne({
    name: "plastique",
  })
  const productsPlastic = await ProductModel.query().whereIn(
    "name",
    productsNamePlastic
  )
  for (const product of productsPlastic) {
    await materialPlastic.$relatedQuery("products").relate(product.id)
  }
  const materialCeramic = await MaterialModel.query().findOne({
    name: "céramique",
  })
  const productsCeramic = await ProductModel.query().whereIn(
    "name",
    productsNameCeramic
  )
  for (const product of productsCeramic) {
    await materialCeramic.$relatedQuery("products").relate(product.id)
  }
}

module.exports ={
  seed
} 
