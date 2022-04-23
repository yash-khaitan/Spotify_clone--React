import React from "react";
import "./SongRow.css";

function SongRow({ track }) {
  console.log(track);
  return (
    <div className="songRow">
      <img className="SongRow__album" src={track.album.image[0].url} alt="" />
      <div className="SongRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists
            .map((artist) => {
              return artist.name;
            })
            .join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
