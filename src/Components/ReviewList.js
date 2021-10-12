import ReviewCard from './ReviewCard'
 
function ReviewList({ reviews, onDeleteReview, onUpdateReview}){
   
    return (
    
        <ul className="cards">
          {reviews.map((review) => {
            return (
               <ReviewCard
                key={review.id}
                review={review}
                onDeleteReview={onDeleteReview}
                onUpdateReview={onUpdateReview}
              />
            );
          })}
        </ul>
      );





}

export default ReviewList;
