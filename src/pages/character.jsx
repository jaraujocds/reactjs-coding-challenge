import React from "react";
import PageLayout from "../components/ui/page-layout";

const Character = ({ character }) => {
  const { name, image } = character || {};
  return (
    <PageLayout>
      <img alt={name} src={image} className="flex object-cover rounded-lg" />
      <p className="mt-5 text-2xl font-bold text-center uppercase">{name}</p>
    </PageLayout>
  );
};

export default Character;
