import React from "react";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/Carousel";
import CategoryComposant from "../components/CategoryComposant";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-96 w-1/2 bg-FED7AA">
        <CarouselComponent
          images={[
            "https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/7031883/pexels-photo-7031883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/8135105/pexels-photo-8135105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          ]}
          slideDuration={2000}
        />
      </div>
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-yellow-300 px-4 py-2 rounded-lg text-white text-xl font-bold text-center z-10">
        Les Highlanders du moment
      </div>

      <h1 className="text-center mt-20 text-4xl font-bold">
        VENANT DES HAUTES TERRES D'ÉCOSSE, NOS MEUBLES SONT IMMORTELS
      </h1>
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">
          L'élégance intemporelle des Hautes Terres
        </h2>
        <p className="text-lg leading-relaxed">
          Découvrez notre collection de meubles inspirés des majestueuses Hautes
          Terres d'Écosse. Chaque pièce est méticuleusement conçue pour allier
          beauté et durabilité, reflétant l'essence même de cette région mythique.
        </p>
      </div>
      <div>
        <CategoryComposant />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
