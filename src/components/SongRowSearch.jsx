import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SingleSongCard from "./SingleSongCard"
import Loading from "./Loading"
import AlertSpotify from "./AlertSpotify"

const SongRowSearch = ({title, songs, setPlayerSong}) => (
  <>
    <h2 className="row-title">
      {title} {songs.loading && <Loading />}
    </h2>
    <Row className="trending-artist-row mb-4">
      {songs.error ? (
        <AlertSpotify variant="danger" text="Woops, something went wrong." />
      ) : (
        songs.data.map((song) => (
          <Col key={song.id} className="mb-3" xm={12} sm={6} md={4} lg={2}>
            <SingleSongCard setPlayerSong={setPlayerSong} song={song} />
          </Col>
        ))
      )}
    </Row>
  </>
)

export default SongRowSearch
