import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function PhotoList({ photos }) {
  return (
    <ImageList sx={{ width: 600, height: 550 }} cols={3} rowHeight={164}>
      {photos.map((photo) => (
        <ImageListItem key={photo.img}>
          <img src={`${photo}?w=164&h=164&fit=crop&auto=format`} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
