import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "A delicious summer cocktail, don't be fooled by anyone saying it's too girly. It packs a punch, so cancel your plans and enjoy the sunshine in Beach Resort",
      },
   
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "As a shuttle service dune buggies are setup in different locations on the beach this time. Take one and enjoy our service provided on the beach anytime. ",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "The best beers span across a variety of styles and flavor profiles. We researched the top options for you, including craft, IPA, lager beers and more.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
