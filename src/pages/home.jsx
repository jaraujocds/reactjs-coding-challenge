import React from "react";
import CharacterCard from "../components/ui/character-card";
import PageLayout from "../components/ui/page-layout";

const Home = () => {
  const characters = [];

  const goToCharacter = (id) => {
    // TODO
  };

  return (
    <PageLayout>
      <div className="grid grid-cols-3 gap-20 p-20">
        {characters?.map(({ id, name, image }) => (
          <CharacterCard
            onClick={() => goToCharacter(id)}
            name={name}
            image={image}
          />
        ))}
      </div>
      {!characters.length && (
        <p className="text-center font-bold text-xl">No characters found</p>
      )}
    </PageLayout>
  );
};

export default Home;
