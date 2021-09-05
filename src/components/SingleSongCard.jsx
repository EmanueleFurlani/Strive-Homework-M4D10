import Card from "react-bootstrap/Card"

const SingleSongCard = ({song, setPlayerSong}) => (
  <Card className="single-song-card p-3">
    <Card.Img
      className="img-fluid"
      variant="top"
      src={song.album.cover_big}
      onClick={() => setPlayerSong(song)}
    />
    <Card.Body>
      <Card.Title onClick={() => setPlayerSong(song)}>
        {song.title}
      </Card.Title>
    </Card.Body>
  </Card>
)

export default SingleSongCard
