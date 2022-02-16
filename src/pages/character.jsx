import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import {
  fetchCharacter,
  selectCharactersError,
  selectCharactersPending,
  selectCurrentCharacter,
} from "../redux/rickAndMorty/charactersSlice";

import PageLayout from "../components/ui/page-layout";
import Button from "../components/ui/button";

const Character = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const character = useSelector(selectCurrentCharacter);
  const error = useSelector(selectCharactersError);
  const pending = useSelector(selectCharactersPending);

  const { name, image, gender, species, status, type, location, episode } =
    character || {};

  useEffect(() => {
    if (id) dispatch(fetchCharacter(id));
  }, [dispatch, id]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageLayout>
      <Button small onClick={goBack}>
        {"<"} Back
      </Button>
      <div className="flex flex-col items-center">
        {pending && <p className="text-xl font-bold text-center">Loading...</p>}
        {error && <p className="text-xl font-bold text-center">{error}</p>}
        {!pending && !error && !character && (
          <p className="text-xl font-bold text-center">Character not found</p>
        )}

        {!pending && character?.id && (
          <div className="flex flex-col w-full max-w-sm mb-20 bg-white rounded-xl drop-shadow-xl">
            <img
              alt={name}
              src={image}
              className="flex object-cover w-full rounded-t-xl"
            />

            <div className="flex flex-col items-start justify-start w-full h-full p-10">
              <p className="my-5 text-2xl font-bold text-center uppercase">
                {name}
              </p>
              <CharProp label="Gender" value={gender} />
              <CharProp label="Status" value={status} />
              <CharProp label="Species" value={species} />
              {type && <CharProp label="Type" value={type} />}
              <CharProp label="Location" value={location?.name} />
              <CharProp label="Episodes appearance" value={episode?.length} />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

const CharProp = ({ label, value }) => {
  return (
    <div className="flex flex-row mt-2">
      <p className="mr-2 font-bold">{label}</p>
      <p>{value}</p>
    </div>
  );
};

export default Character;
