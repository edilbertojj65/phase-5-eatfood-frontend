import ReviewCard from './ReviewCard'
debugger
function ReviewList({ reviews, onDeleteReview, onUpdateReview}){
  debugger
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
