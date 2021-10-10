import PhotoCard from './PhotoCard'
debugger
function PhotoList({ photos, onDeletePhoto, onUpdatePhoto}){
  debugger
    return (
    
        <ul className="cards">
          {photos.map((photo) => {
            return (
               <PhotoCard
                key={photo.id}
                photo={photo}
                onDeletePhoto={onDeletePhoto}
                onUpdatePhoto={onUpdatePhoto}
              />
            );
          })}
        </ul>
      );





}

export default PhotoList;
