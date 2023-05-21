import React from 'react';
import SimpleReactFooter from 'simple-react-footer';
import "../style/footer.css"

const Footer = () => {
  // Define the data for the footer
  const description = "ÀIRNEIS (“meuble” en gaélique écossais) est une société écossaise, et nous sommes revendeurs de meubles conçus par des designers écossais.                   ";
  const title = "ÀIRNEIS";

  const columns = [{
    title: "Ressources",
    resources: [{
      name: "Contact",
      link: "/item1"
    },{
      name: "CGU",
      link: "/item2"
    },{
      name: "Mentions légales",
      link: "/item1"
      },]
  }];

  return <SimpleReactFooter
    description={description}
    title={title}
    columns={columns}
    linkedin="lorem_ipsum_on_linkedin"
    facebook="lorem_ipsum_on_fb"
    twitter="lorem_ipsum_on_twitter"
    instagram="lorem_ipsum_live"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="lorem_ipsum_collections"
    copyright="ÀIRNEIS"
    iconColor="black"
    backgroundColor=" saddlebrown"
    fontColor="black"
    copyrightColor="dark"
  />;
}
