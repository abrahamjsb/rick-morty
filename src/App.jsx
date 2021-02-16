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
import { Container, ErrorMessage } from "./components/body/styled-components";
import { ThemeProvider } from "styled-components";

// Api
import { API_URL } from "./utils/constants";

//utils
import { theme } from "./utils/constants";
import { sortByLastEpisode, getRandomIds } from "./utils/utils";

const GET_CHARACTERS = `${API_URL}/character`;

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ hasError: false, message: "" });

  const onGetCharacters = async () => {
    setLoading(true);
    try {
      const randomIds = getRandomIds();
      const result = await fetch(`${GET_CHARACTERS}/[${randomIds.toString()}]`);
      const response = await result.json();
      if (!result?.ok) {
        throw new Error(response?.error || "Something went wrong...");
      }
      const sortedCharacters = sortByLastEpisode(response);
      setCharacters(sortedCharacters);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError({
        hasError: true,
        message: error.message || "Something went wrong",
      });
      console.log(error);
    }
  };

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
          {error?.hasError && <ErrorMessage>{error?.message}</ErrorMessage>}
        </Container>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
