const Song = (props) => {
    const url = `https://open.spotify.com/embed/track/${props.song_id}?utm_source=generator`

    return (
      <iframe
        style={{ borderRadius: '12px' }}
        src={url}
        width="100%"
        height="372"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    );
  };
  
  export default Song;
