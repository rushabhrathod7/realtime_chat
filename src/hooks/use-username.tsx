import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const POKEMONS = ["pikachu", "raichu", "mew", "onix", "psyduck"];

const STORAGE_KEY = "chat_username";

const generateUsername = () => {
  const word = POKEMONS[Math.floor(Math.random() * POKEMONS.length)];
  return `anonymous-${word}-${nanoid(5)}`;
};

export const useUsername = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const main = () => {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        setUsername(stored);
        return;
      }

      const generated = generateUsername();
      localStorage.setItem(STORAGE_KEY, generated);
      setUsername(generated);
    };

    main();
  }, []);

  return { username };
};
