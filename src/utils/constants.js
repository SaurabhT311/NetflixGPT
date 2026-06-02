export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};

export const IMG_CDN_URL = "https://images.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "es", name: "Spanish" },
  { identifier: "fr", name: "French" },
  { identifier: "de", name: "German" },
  { identifier: "it", name: "Italian" },
  { identifier: "pt", name: "Portuguese" },
  { identifier: "ru", name: "Russian" },
  { identifier: "ja", name: "Japanese" },
  { identifier: "zh", name: "Chinese" },
  { identifier: "hi", name: "Hindi" },
];