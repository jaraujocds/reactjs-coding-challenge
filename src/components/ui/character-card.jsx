import React from "react";

const CharacterCard = ({ name, image, onClick = () => {} }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center p-5 transition-all ease-in-out bg-white shadow-sm rounded-xl hover:shadow-lg hover:cursor-pointer hover:scale-105 max-w-max justify-items-center"
    >
      <img alt={name} src={image} className="flex object-cover rounded-lg" />
      <p className="mt-5 text-2xl font-bold text-center uppercase">{name}</p>
    </div>
  );
};

export default CharacterCard;
