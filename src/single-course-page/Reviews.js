import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import ReviewCard from "./ReviewCard";
import SearchBar from "./SearchBar";

library.add(faMagnifyingGlass);
function Reviews(props) {
  const myreviews = JSON.parse(localStorage.getItem("reviews"));
  let reviews = [];
  for (let i = 2; i < 10; i++) {
    reviews.push(
      <ReviewCard
        key={i}
        name={myreviews[(i % 4) + 2].user.display_name}
        review={myreviews[(i % 4) + 2].content}
        rate={myreviews[(i % 4) + 2].rating}
        date="long time ago"
      />
    );
  }

  return (
    <div className="reviews-container" id="reviews">
      <div className="reviews-title">Reviews</div>
      <div className="secondary-container">
        <SearchBar />
        <div className="rating-based-filter">
          <select className="reviews-filter">
            <option value="">All ratings</option>
            <option value="5">five stars</option>
            <option value="4">four stars</option>
            <option value="3">three stars</option>
            <option value="2">two stars</option>
            <option value="1">one star</option>
          </select>
        </div>
      </div>
      <div className="all-reviews">{reviews}</div>
    </div>
  );
}

export default Reviews;
