import React from "react";

const CharacterCard = ({ name, image, onClick = () => {} }) => {
  return (
    <div
      onClick={onClick}
      className=" bg-white rounded-xl shadow-sm ease-in-out transition-all hover:shadow-lg flex flex-col p-5 hover:cursor-pointer items-center justify-center hover:scale-105"
    >
      <img alt={name} src={image} className="rounded-lg flex object-cover" />
      <p className="font-bold text-2xl text-center uppercase mt-5">{name}</p>
    </div>
  );
};

export default CharacterCard;
