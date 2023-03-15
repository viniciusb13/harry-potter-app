import axios from "axios";

export const api = axios.create({
  baseURL: "https://hp-api.onrender.com/api",
});

export const getCharacters = async () => {
  const { data } = await api.get("/characters");
  return data;
};

// export const getCharacter = async (id) => {};

export const getCharactersByType = async (type) => {
  const { data } = await api.get(`/characters/${type}`);
  return data;
};

// export const getHouses = async () => {};

export const getHouse = async (house) => {
  const { data } = await api.get(`/characters/house/${house}`);
  return data;
};

export const getSpells = async () => {
  const { data } = await api.get("/spells");
  return data;
};
