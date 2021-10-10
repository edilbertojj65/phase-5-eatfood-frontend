 
 import { useEffect, useState } from "react";
 import Search from "./Search";
 import NewReviewForm from "./NewReviewForm";
 import ReviewList from './ReviewList';
 
 debugger
 function Reviews () {
   const [reviews, setReviews] = useState([] );
   const [searchTerm, setSearchTerm] = useState("");
   debugger
   useEffect(() => {
     fetch("/reviews")
       .then((r) => r.json())
       .then((reviewsArray) => {
        setReviews(reviewsArray);
       });
   }, [] );
 
 
   function handleAddReview(newReview) {
     const updatedreviewsArray = [...reviews, newReview];
     setReviews(updatedreviewsArray);
   }
 
   function handleDeleteReview(id) {
     const updatedreviewsArray = reviews.filter((review) => review.id !== id);
     setReviews(updatedreviewsArray);
   }
 
   function handleUpdateReview(updatedReview) {
     const updatedreviewsArray = reviews.map((review) => {
       return reviews.id === updatedReview.id ? updatedReview : review;
     });
     setReviews(updatedreviewsArray);
   }
 debugger
   const displayedReview = reviews.filter((review) => {
     return review.comment.toLowerCase().includes(searchTerm.toLowerCase());
   });
 
 
 return(
  <main>
        <NewReviewForm onAddReview={handleAddReview} />
        <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        <ReviewList
         reviews={displayedReview}
         onDeleteReview={handleDeleteReview}
         onUpdateReview={handleUpdateReview}
       />
     </main>
   );
 }
 
 export default Reviews;