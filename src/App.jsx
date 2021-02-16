import React, { useState, useEffect } from "react";

// Main components
import Header from "./components/header/Header";
import MainBody from "./components/body/MainBody";
import Card from "./components/card/Card";

// styled components
import {
  MainTitle,
  SecondaryTitle,
} from "./components/header/styled-components";
import { Container } from "./components/body/styled-components";
import { ThemeProvider } from "styled-components";

// Api
import { API_URL } from "./utils/constants";

//utils
import { theme } from "./utils/constants";

const GET_CHARACTERS = `${API_URL}/characters`;

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const onGetCharacters = async () => {
    setLoading(true);
    try {
      const result = await fetch(GET_CHARACTERS);
      const response = await result.json();
      const sortedCharacters = sortByLastEpisode(response.results);
      setCharacters(sortedCharacters);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getLastEpisode = (lastEpisodeUrl) => {
    const lastEpisodeUrlSplitted = lastEpisodeUrl.split("/");
    return parseInt(lastEpisodeUrlSplitted.pop());
  };

  const sortByLastEpisode = (characters) =>
    characters.sort((character, nexCharacter) => {
      const episodeUrlCurrentCharacter =
        character.episode[character.episode.length - 1];
      const episodeNumberCurrentCharacter = getLastEpisode(
        episodeUrlCurrentCharacter
      );
      const episodeUrlNextCharacter =
        nexCharacter.episode[nexCharacter.episode.length - 1];
      const episodeNumberNextCharacter = getLastEpisode(
        episodeUrlNextCharacter
      );
      if (episodeNumberCurrentCharacter > episodeNumberNextCharacter) {
        return 1;
      } else if (episodeNumberCurrentCharacter === episodeNumberNextCharacter) {
        return 0;
      } else {
        return -1;
      }
    });
  useEffect(() => {
    onGetCharacters();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <MainTitle>Rick And Morty</MainTitle>
        <SecondaryTitle>
          Hey, did you ever want to hold a terry Fold?
        </SecondaryTitle>
      </Header>
      <MainBody>
        <Container>
          {!loading ? (
            <>
              {characters.map((character) => (
                <Card key={character?.id} data={character} />
              ))}
            </>
          ) : (
            <span>Loading...</span>
          )}
        </Container>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
