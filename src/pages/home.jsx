import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";

import {
  fetchCharacters,
  selectCharacters,
  selectCharactersPending,
  selectCharactersPagination,
  selectCharactersError,
} from "../redux/rickAndMorty/charactersSlice";

import Button from "../components/ui/button";
import CharacterCard from "../components/ui/character-card";
import PageLayout from "../components/ui/page-layout";

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters);
  const error = useSelector(selectCharactersError);
  const pending = useSelector(selectCharactersPending);
  const pagination = useSelector(selectCharactersPagination);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  useEffect(() => dispatch(fetchCharacters(page)), [dispatch, page]);

  const prevPage = async () => {
    if (page > 1) setSearchParams({ page: Number(page) - 1 });
  };
  const nextPage = async () => {
    if (page < pagination?.pages) setSearchParams({ page: Number(page) + 1 });
  };

  return (
    <PageLayout>
      <div className="grid grid-cols-3 gap-20 p-20">
        {characters?.map(({ id, name, image }) => (
          <Link key={`character-${id}`} to={`character/${id}`}>
            <CharacterCard name={name} image={image} />
          </Link>
        ))}
      </div>

      {pending && <p className="text-xl font-bold text-center">Loading...</p>}
      {error && <p className="text-xl font-bold text-center">{error}</p>}
      {!pending && !error && !characters?.length && (
        <p className="text-xl font-bold text-center">No characters found</p>
      )}

      <div className="flex flex-row items-center justify-between px-20 mt-10 mb-20">
        <Button onClick={prevPage} disabled={!pagination?.prev}>
          {"<"} Previous page
        </Button>

        <Button onClick={nextPage} disabled={!pagination?.next}>
          Next page {">"}
        </Button>
      </div>
    </PageLayout>
  );
};

export default Home;
