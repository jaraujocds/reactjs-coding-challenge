import * as rickAndMorty from "../api/rickAndMorty";

export const getCharacters = (page = 1) => rickAndMorty.getCharacters(page);

export const getCharacter = (id) => rickAndMorty.getCharacter(id);
