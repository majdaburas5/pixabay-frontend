import React, { useEffect, useState } from "react";
import { getApiPhotos } from "../../api-manager/api-manager";
import PhotoList from "../Image-list/ImageList";
import PageHeader from "../Header/Header";
import { useSelector } from "react-redux";
export default function LandingPage() {
  const [photos, setPhotos] = useState([]);
  const pageNumber = useSelector((state) => state.pageNumber);
  const category = useSelector((state) => state.category);

  useEffect(() => {
    const fetchPhotos = async function () {
      const response = await getApiPhotos(category, pageNumber);
      setPhotos(response);
    };
    fetchPhotos();
  }, [category, pageNumber]);
  return (
    <div>
      <PageHeader />
      <div style={{ display: "grid", justifyContent: "center" }}>
        <PhotoList photos={photos} />
      </div>
    </div>
  );
}
