const CategoryModel = require("../../models/CategoryModel.cjs")
const knex = require("knex")
const BaseModel = require("../../models/BaseModel.cjs")
const config = require("../../config.js")
const MaterialModel = require("../../models/MaterialModel.cjs")
const ProductModel = require("../../models/ProductModel.cjs")
const ImageModel = require("../../models/ImageModel.cjs")

const seed = async () => {
  const db = knex(config.db)
  BaseModel.knex(db)

  const categories = [
    {
      name: "Chambre",
      description:
        "La chambre est un espace bien déterminé dans une maison. Privée, intime, elle doit refléter la personnalité de son occupant, adulte ou enfant, sans forcément correspondre au style du reste de la maison. Tout est permis pour la décoration de la chambre, il suffit de laisser parler sa créativité.",
      image:
        "https://images.pexels.com/photos/6636252/pexels-photo-6636252.jpeg?auto=compress&cs=tinysrgb&w=600",
      products: [
        {
          name: "Armoire",
          description: "Armoire 2 portes, blanc, 117x190 cm.",
          stock: 5,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2528/2528377.jpg?w=900&h=675&p=fw",
          price: 800,
        },
        {
          name: "Lits",
          description: "Lit adulte avec rangements 140x190 cm.",
          stock: 8,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2582/2582936.jpg?w=300&h=225&p=fw",
          price: 700,
        },
        {
          name: "Coiffeuse",
          description: "Coiffeuse avec miroir, bois noire.",
          stock: 3,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2941/2941030.jpg?w=900&h=675&p=fw",
          price: 450,
        },
      ],
    },
    {
      name: "Salon",
      description:
        "Le salon, une pièce de la maison généralement utilisée pour se détendre, recevoir des invités et passer du temps en famille. Il s'agit d'un espace convivial et confortable et accueillant.",
      image:
        "https://images.pexels.com/photos/6636252/pexels-photo-6636252.jpeg?auto=compress&cs=tinysrgb&w=600",
      products: [
        {
          name: "Canapé",
          description: "Canapé convertible blanc, 3 places. Confortable, accueillant et convivial.",
          stock: 5,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2528/2528377.jpg?w=900&h=675&p=fw",
          price: 300,
        },
        {
          name: "Meuble TV",
          description: "Meuble TV en chêne naturel, deux étageres et deux placard.",
          stock: 7,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2676/2676563.jpg?w=300&h=225&p=fw",
          price: 150,
        },
        {
          name: "Lampadaire",
          description: "Décorez votre intérieur avec la lampe sur pied de salon Romanza d’une hauteur de 157 cm avec son abat-jour en forme de tambour. Cette lampe décorative présente une finition grise mate classique avec un abat-jour de forme tambour gris pour remettre au goût du jour n’importe quel espace.",
          stock: 3,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2941/2941030.jpg?w=900&h=675&p=fw",
          price: 450,
        },
      ],
    },
    {
      name: "Jardin",
      description:
        "Le jardin est un espace ouvert pour se détendre, jouer ou organiser des activités en plein air.",
      image:
        "https://images.pexels.com/photos/6636252/pexels-photo-6636252.jpeg?auto=compress&cs=tinysrgb&w=600",
      products: [
        {
          name: "Hamac avec support métal et toile taupe.",
          description: "Craquez pour ce hamac avec son support métallique et sa toile coloris taupe et prélassez-vous dans votre jardin en toute tranquillité et en toute sécurité.Facile à installer, il ne nécessite aucun point d'accroche",
          stock: 5,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2528/2528377.jpg?w=900&h=675&p=fw",
          price: 300,
        },
        {
          name: "Lot de deux bains de soleil pliants",
          description: "Profitez du confort de ces bains de soleil en textilène, qui trouveront facilement leur place dans votre jardin.",
          stock: 8,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2582/2582936.jpg?w=300&h=225&p=fw",
          price: 120,
        },
        {
          name: "Balancelle de jardin",
          description: "Balancelle de jardin de couleur noire, pour trois personnes",
          stock: 3,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2941/2941030.jpg?w=900&h=675&p=fw",
          price: 450,
        },
      ],
    },
    {
      name: "Salle de Bain",
      description:
        "La salle de bain est une pièce de la maison dédiée à l'hygiène personnelle, équipée d'un lavabo, d'une baignoire ou d'une douche, d'une toilette. Elle offre un espace confortable pour se laver, se préparer et se détendre.",
      image:
        "https://images.pexels.com/photos/6636252/pexels-photo-6636252.jpeg?auto=compress&cs=tinysrgb&w=600",
      products: [
        {
          name: "Cabine de douche",
          description: "Cabine de douche 80 x 80 x 185 cm argentée carrée en verre trempé avec porte coulissante.",
          stock: 5,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2528/2528377.jpg?w=900&h=675&p=fw",
          price: 250,
        },
        {
          name: "Miroir salle de bain",
          description: "Miroir salle de bain simple, 60 x 58 cm",
          stock: 8,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2582/2582936.jpg?w=300&h=225&p=fw",
          price: 20,
        },
        {
          name: "Oceanic vasque",
          description: "Oceanic vasque a poser en céramique forme ronde 32x32x14 cm",
          stock: 7,
          image:
            "https://img.furniture1.eu/v7/_im_/detailed/2676/2676563.jpg?w=300&h=225&p=fw",
          price: 70,
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

const images = [
  {
    picture:
      "https://www.bing.com/images/search?view=detailV2&ccid=G%2fJcDuuW&id=0BD1F1D791E325768F01952A67E3CF9F1B95DB7A&thid=OIP.G_JcDuuWAI9tH_8Px5HIwgHaHa&mediaurl=https%3a%2f%2ffullmooncharter.com%2fwp-content%2fuploads%2f2020%2f01%2fcanape-cuir-blanc-convertible-canape-d-angle-convertible-simili-cuir-blanc-cuba-of-canape-cuir-blanc-convertible.jpeg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.1bf25c0eeb96008f6d1fff0fc791c8c2%3frik%3detuVG5%252fP42cqlQ%26pid%3dImgRaw%26r%3d0&exph=1000&expw=1000&q=canape+blanc&simid=608035544202617684&FORM=IRPRST&ck=B0D13ED6BB3FFB93AFEA95F8B90F9F00&selectedIndex=47",
    product_id: 1,
    category_id: 1,
  },
  {
    picture:
      "https://th.bing.com/th?id=OPE.cUx%2bzW7A5hy5VQ300C300&pid=21.1&w=160&h=150&dpr=1,3",
    product_id: 1,
    category_id: 1,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMTSZSwHEEjk4J-UrRHJGlxLcjfhPXhrwVw&usqp=CAU",
    product_id: 1,
    category_id: 1,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRDQ5LWUK1ZWWJpA7WvESSRgKzsOEWHBdYKw&usqp=CAU",
    product_id: 2,
    category_id: 1,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFI4PZHc4IEQqdbrMxpknfiZzmI_-L73PfA&usqp=CAU",
    product_id: 2,
    category_id: 1,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmfZqLT4BE0xmqBXOGjCCgVmdXUG2ahHBIH0csADL7wMEEeNlV49vYd4apgxKMrVKPFM&usqp=CAU",
    product_id: 2,
    category_id: 1,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOAeQ96dYu-xB-tKiuC38S3dAuy4mIYt6qA&usqp=CAU",
    product_id: 3,
    category_id: 1,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGONXv6jHUXcfCRYzvohhRzRI25LMdy_a2i5fu-bJKEAgXfON-Q1LrP0bEvc61SV5gplU&usqp=CAU",
    product_id: 3,
    category_id: 1,
  },
  {
    picture:
      "https://media.cdnws.com/_i/56579/9209/3463/11/lit-capitonne-strass-gris-140-anis.jpeg",
    product_id: 4,
    category_id: 2,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmAFpjKNvp0kQm8XhaZ1SREF0RZvO2YUfPMGWpiXpr70nrMVACL_a2CdvQ6VoE-UFgb48&usqp=CAU",
    product_id: 4,
    category_id: 2,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGXjDiFNkU1BlgYMvhLHZpqvynjl5ySoKBxu8ukApQjy2ReY14WCS3YayRLXpuqy78Ig&usqp=CAU",
    product_id: 4,
    category_id: 2,
  },
  {
    picture:
      "https://www.lerevechezvous.com/16713-product_img_default/lot-de-4-bains-de-soleil-pacific-coloris-noir.jpg",
    product_id: 5,
    category_id: 2,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6cZJmAWfS1rh_Vc9OKbeqJ0-t_kVWe5WD3CMDJVpYB0PPsWmKUImVDapRqy1wye13p0k&usqp=CAU",
    product_id: 5,
    category_id: 2,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOD7YqpeP6ffVYbIcmAZ1NOBWKINq7dIrZpjW_uyF4Et-_St9JjY3zT0ncosi0MI3lCs&usqp=CAU",
    product_id: 6,
    category_id: 2,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4EK-_5XJm3mbCJe_NijP19ArLTQpTMEjBzA&usqp=CAU",
    product_id: 6,
    category_id: 2,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1wGuPrx7x4DP5t5uAgoSYrTlHFPuWhhSVQ&usqp=CAU",
    product_id: 6,
    category_id: 2,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZP1PrKHC8I8cyPZ1K91CDcKLiqZX3vwYlfci2k8EVgX2hPwRcIMjAGGss2C3Y2Qbe7Q&usqp=CAU",
    product_id: 7,
    category_id: 3,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm6l_CmlaiDYa5NxI9oGM-ybftLkP6E32Xq8Pk3jbIlnXS0zbEx-GMOQ1cu6rxScYyhcM&usqp=CAU",
    product_id: 7,
    category_id: 3,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-u-fhnzh5VxrmO9D_EOc5oUWPoUqqQYFH177Hd7NPrRfOAqtpBdr0AaynSrHouljaXw&usqp=CAU",
    product_id: 7,
    category_id: 3,
  },
  {
    picture:
      "https://www.banio.fr/469844-large_default/cabine-de-douche-dakota-mitigeur-thermostatique-90x90x211-cm.jpg",
    product_id: 8,
    category_id: 3,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdpeitmSrX--Z97-UDAQkTITMdIq_vMX9hDWhk8jlkqrpLlvg1KHuaSHrRuN072aS8uY&usqp=CAU",
    product_id: 8,
    category_id: 3,
  },
  {
    picture:
      "https://assets-big.cdn-mousquetaires.com/medias/domain11440/media118777/5633188-r3rego6hkt-ewhr.jpg",
    product_id: 9,
    category_id: 3,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_7UZpLWn-4CoY64kmdFcZl8kL8CsRrbE648yohiPx83fUz9I9YDNtlEb6XjFZ4wkXqDo&usqp=CAU",
    product_id: 9,
    category_id: 3,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kv0LLHbjGwAHZWx4am7rHn622NQNruoxjDI4TW44KKKlsprFFtoJQmZkzZLFg80sh3M&usqp=CAU",
    product_id: 9,
    category_id: 3,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWmgvhkPC3MZBN4x0w0GH3Lh_Cg4eRVfKBqA&usqp=CAU",
    product_id: 10,
    category_id: 4,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDa7F1XJ2NrQFmwa2EBoJljDdEM7XV2qBpXA&usqp=CAU",
    product_id: 10,
    category_id: 4,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPiUJ_Qj_AyzAUbOPtdBxw9dspOVdCcrlr_w&usqp=CAU",
    product_id: 10,
    category_id: 4,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2609mnWXw9EXOFiu1tfAbtr0_hpltI9I6kA&usqp=CAU",
    product_id: 11,
    category_id: 4,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSstNAwgRfWF3J_G9g_4C06anjyQRYDvvvHD8FHmXUORkR9nddUAhvWxoyCt216C2t7Rbg&usqp=CAU",
    product_id: 11,
    category_id: 4,
  },
  {
    picture:
      "https://one.nbstatic.fr/uploaded/20230429/10445706/thumbs/450h300f_00001_Hamac-avec-support-210-x-150-cm-5-hauteurs-reglables-hamac-portable-avec-cadre-metal-sur-pieds-capa.jpg",
    product_id: 11,
    category_id: 4,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7GDsbtBGNPo2Uj4zbf9qBymXm60T_yV6yfg&usqp=CAU",
    product_id: 12,
    category_id: 4,
  },
  {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1U7sJqMW2jBs6-vpW1fpendd-t2SbkQWRA&usqp=CAU",
    product_id: 12,
    category_id: 4,
  },
]

await ImageModel.query().insertGraph(images)

  const productsNameWood = [
    ["Armoire"],
    ["Lits"],
    ["Coiffeuse"],
    ["Hamac avec support métal et toile taupe."],
    ["Meuble TV"],
    ["Canapé"],
  ]
  
  const productsNameSteel = [
    ["Cabine de douche"],
    ["Miroir salle de bain"],
    ["Lampadaire"],
  ]
  
  const productsNamePlastic = [
    ["Balancelle de jardin"],
    ["Lot de deux bains de soleil pliants"],
  ]
  
  const productsNameCeramic = [["Oceanic vasque"]]
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