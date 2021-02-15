import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import MainBody from "./components/body/MainBody";
import Card from "./components/card/Card";
import { Container } from "./components/body/styled-components";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const onGetCharacters = async () => {
    setLoading(true);
    try {
      const result = await fetch("https://rickandmortyapi.com/api/character");
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
    <div className="App">
      <Header>
        <h1>Rick And Morty</h1>
      </Header>
      <MainBody>
        <Container>
          {!loading ? (
            <>
              {characters.map((character) => (
                <Card data={character} />
              ))}
            </>
          ) : (
            <span>Loading...</span>
          )}
        </Container>
      </MainBody>
    </div>
  );
}

export default App;