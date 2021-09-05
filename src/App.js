import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavSpotify from "./components/NavSpotify"
import Player from "./components/Player"
import Home from "./components/Home"
import SearchPage from "./components/SearchPage"
import { useState } from "react"

const App = () => {
  const [playerSong, setPlayerSong] = useState({
    id: 137233986,
    readable: true,
    title: "The Kids Aren't Alright",
    title_short: "The Kids Aren't Alright",
    title_version: "",
    link: "https://www.deezer.com/track/137233986",
    duration: 180,
    rank: 900513,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 1,
    preview:
      "https://cdns-preview-2.dzcdn.net/stream/c-2c22d48f29c8acdb9dd2a3476237bbb2-7.mp3",
    md5_image: "f7d8a61b8c4b118e642acfb3db0a45a1",
    artist: {
      id: 882,
      name: "The Offspring",
      link: "https://www.deezer.com/artist/882",
      picture: "https://api.deezer.com/artist/882/image",
      picture_small:
        "https://cdns-images.dzcdn.net/images/artist/ee8187ac53a9344aa9210a82d928774c/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://cdns-images.dzcdn.net/images/artist/ee8187ac53a9344aa9210a82d928774c/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://cdns-images.dzcdn.net/images/artist/ee8187ac53a9344aa9210a82d928774c/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://cdns-images.dzcdn.net/images/artist/ee8187ac53a9344aa9210a82d928774c/1000x1000-000000-80-0-0.jpg",
      tracklist:
        "https://striveschool-api.herokuapp.com/api/deezer/artist/882/top?limit=50",
      type: "artist",
    },
    album: {
      id: 14717564,
      title: "Americana",
      cover: "https://api.deezer.com/album/14717564/image",
      cover_small:
        "https://cdns-images.dzcdn.net/images/cover/f7d8a61b8c4b118e642acfb3db0a45a1/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://cdns-images.dzcdn.net/images/cover/f7d8a61b8c4b118e642acfb3db0a45a1/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://cdns-images.dzcdn.net/images/cover/f7d8a61b8c4b118e642acfb3db0a45a1/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://cdns-images.dzcdn.net/images/cover/f7d8a61b8c4b118e642acfb3db0a45a1/1000x1000-000000-80-0-0.jpg",
      md5_image: "f7d8a61b8c4b118e642acfb3db0a45a1",
      tracklist: "https://api.deezer.com/album/14717564/tracks",
      type: "album",
    },
    type: "track",
  })

  return (
    <Router>
      <div className="App">
        <NavSpotify />
        <Route
          path="/"
          exact
          render={(routerProps) => (
            <Home {...routerProps} setPlayerSong={setPlayerSong} />
          )}
        />
        <Route
          path="/search"
          render={(routerProps) => (
            <SearchPage {...routerProps} setPlayerSong={setPlayerSong} />
          )}
        />
        <Player playerSong={playerSong} />
      </div>
    </Router>
  )
}

export default App
