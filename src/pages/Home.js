import React from 'react';
import Header from '../components/Header';
import Princing from '../components/Princing';
import Carousel3D from '../components/Carousel3D';

function Home() {
  const cards = [
    { id: 1, title: "Carte 1", description: "Description de la carte 1" },
    { id: 2, title: "Carte 2", description: "Description de la carte 2" },
    { id: 3, title: "Carte 3", description: "Description de la carte 3" },
  ];

  return (
    <main className="container mx-auto p-4">
      <Header/> 
      <Princing />
      <Carousel3D cards={cards} />
    </main>
  );
}

export default Home;