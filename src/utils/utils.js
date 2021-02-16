const MAX_CHARACTERS = 20;

const TOTAL_CHARACTERS = 671;

const NOT_FOUND = -1;

// Order characters by last espisode
export const sortByLastEpisode = (characters) =>
  characters.sort((character, nexCharacter) => {
    const episodeUrlCurrentCharacter =
      character.episode[character.episode.length - 1];
    const episodeNumberCurrentCharacter = getLastEpisode(
      episodeUrlCurrentCharacter
    );
    const episodeUrlNextCharacter =
      nexCharacter.episode[nexCharacter.episode.length - 1];
    const episodeNumberNextCharacter = getLastEpisode(episodeUrlNextCharacter);
    if (episodeNumberCurrentCharacter > episodeNumberNextCharacter) {
      return -1;
    } else if (episodeNumberCurrentCharacter === episodeNumberNextCharacter) {
      return 0;
    } else {
      return 1;
    }
  });

//obtain last episode of the character in int
export const getLastEpisode = (lastEpisodeUrl) => {
  const lastEpisodeUrlSplitted = lastEpisodeUrl.split("/");
  return parseInt(lastEpisodeUrlSplitted.pop());
};

// obtain array of random ids

export const getRandomIds = (
  arr = [],
  min = 1,
  max = TOTAL_CHARACTERS,
  length = MAX_CHARACTERS
) => {
  if (arr.length < length) {
    const randomId = getRandomNumber(arr, min, max);
    const newArr = [...arr, randomId];
    return getRandomIds(newArr, min, max, length);
  } else {
    return arr;
  }
};

const getRandomNumber = (arr, min, max) => {
  const randomNumb = Math.floor(Math.random() * (max - min) + min);
  const alreadyExistInArr = arr.findIndex((elm) => elm === randomNumb);
  if (alreadyExistInArr === NOT_FOUND) {
    return randomNumb;
  } else {
    return getRandomNumber(arr, min, max);
  }
};
