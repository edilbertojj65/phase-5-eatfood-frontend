import { useEffect, useState } from "react";
import Search from "./Search";
import NewPhotoForm from "./NewPhotoForm";
import PhotoList from './PhotoList';


function Photos () {
  const [photos, setPhotos] = useState([] );
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    fetch("/photos")
      .then((r) => r.json())
      .then((photosArray) => {
        setPhotos(photosArray);
      });
  }, [] );


  function handleAddPhoto(newPhoto) {
    const updatedphotosArray = [...photos, newPhoto];
    setPhotos(updatedphotosArray);
  }

  function handleDeletePhoto(id) {
    const updatedphotosArray = photos.filter((photo) => photo.id !== id);
    setPhotos(updatedphotosArray);
  }

  function handleUpdatePhoto(updatedPhoto) {
    const updatedphotosArray = photos.map((photo) => {
      return photos.id === updatedPhoto.id ? updatedPhoto : photo;
    });
    setPhotos(updatedphotosArray);
  }
debugger
  const displayedPhoto = photos.filter((photo) => {
    return photo.namePhoto.toLowerCase().includes(searchTerm.toLowerCase());
  });


return(
 <main>
       <NewPhotoForm onAddPhoto={handleAddPhoto} />
       <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
       
       <PhotoList
        photos={displayedPhoto}
        onDeletePhoto={handleDeletePhoto}
        onUpdatePhoto={handleUpdatePhoto}
      />
    </main>
  );
}

export default Photos;