import React from "react";
import axios from "axios";
import utilities from "./utilities/utilities.js";
import Sort from "./SubComponents/Sort.jsx";
import RatingsBreakDown from "./SubComponents/RatingsBreakDown.jsx";
import ReviewsList from "./SubComponents/ReviewsList.jsx";
import AddReviewForm from "./subcomponents/AddReviewForm.jsx";
import { useState, useEffect, useReducer } from "react";

let RatingsAndReviewsMain = (props) => {
  let initialState = {
    id: props.id,
    reviews: [],
    displayedReviews: 3,
    meta: {},
    reviewStats: {},
  };
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, setState] = useState(initialState);
  // const [id, setId] = useState(props.id);
  const [sortBy, setSortBy] = useState("relevant");
  // const [displayedReviews, setDisplayedReviews] = useState(3);
  // const [reviews, setReviews] = useState([]);
  // const [meta, setMeta] = useState({});
  // const [reviewStats, setReviewStats] = useState({});
  const [showMoreBtn, setShowMoreBtn] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [canRenderByRating, setCanRenderByRating] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });

  //this could be a context hook...
  let swapSort = (sort) => {
    setSortBy(sort);
  };
  let toggleModal = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };

  //this could be moved to utilities later ~~~~~~~~~~~~~
  let showMoreReviews = () => {
    // console.warn("show more of", state.id, state.displayedReviews);
    axios
      .get(`${utilities.ATELIER_API}/reviews`, {
        params: {
          product_id: `${props.id}`,
          sort: `${sortBy}`,
          count: `${state.displayedReviews + 2}`,
        },
        headers: { Authorization: process.env.KEY },
      })
      .then((res) => {
        if (res.data.count > res.data.results.length) {
          setShowMoreBtn(false);
        } else {
          // setReviews(res.data.results);
          // setDisplayedReviews(displayedReviews + 2);
          setState({
            ...state,
            reviews: res.data.results,
            displayedReviews: state.displayedReviews + 2,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  let fetchData = (id) => {
    // console.log("now fetching data RR");
    let tempReviews;
    axios
      .get(`${utilities.ATELIER_API}/reviews`, {
        params: {
          product_id: `${id}`,
          sort: `${sortBy}`,
          count: `${state.displayedReviews}`,
        },
        headers: { Authorization: process.env.KEY },
      })
      //res.data.results = arr of reviews
      .then((res) => {
        //update state
        // setReviews(res.data.results);
        tempReviews = res.data.results;
      })
      .then(() => {
        // get meta data for current product
        return axios.get(`${utilities.ATELIER_API}/reviews/meta`, {
          params: { product_id: `${id}` },
          headers: { Authorization: process.env.KEY },
        });
      })
      .then((res) => {
        let reviewStatsObj = utilities.getAvgReviewValue(res.data);

        // setMeta(res.data);
        // setReviewStats(reviewStatsObj);
        setState({
          ...state,
          reviews: tempReviews,
          meta: res.data,
          reviewStats: reviewStatsObj,
        });
      })
      .catch((err) => console.log("failed to fetch", err));
  };

  //when props update, call fetchData
  useEffect(() => {
    fetchData(props.id);
    setShowMoreBtn(true);
  }, [props.id]);

  //when sort method changes, çre-render reviews
  useEffect(() => {
    fetchData(props.id);
  }, [sortBy]);

  return (
    <section id="section_rr">
      <h2>Ratings and Reviews</h2>
      <div id="RR_bd-sort-list-container">
        <RatingsBreakDown
          reviewStats={state.reviewStats}
          meta={state.meta}
          id={state.id}
        />
        <div id="RR_sort-list-container">
          <Sort sortMethod={sortBy} swapSort={swapSort} id={state.id} />
          <ReviewsList
            showMoreBtn={showMoreBtn}
            reviews={state.reviews}
            id={state.id}
            showMoreReviews={showMoreReviews}
            toggleModal={toggleModal}
          />
        </div>
      </div>
      {showModal ? <AddReviewForm meta={state.meta} /> : null}
    </section>
  );
};

export default RatingsAndReviewsMain;

/* KNOWN BUGS / TODO

  when rendering 2 or fewer reviews, do not render the show more button

  some kind of discrepancy in helpfulness value, likely caused by state vs db value... values on page seem to modify when re rendered.

  relevant & helpful may not be changing their sort, am i meant to make the logic behind these sorting conditions???

  need to pull the entire reviews list for a product, that way i can filter based on review ratings.
  ~~~revision, i think i can just apply an additional filter to the existing list and also apply that filter
  to incomming reviews as well {1: false, 2: false, 3: true....etc} thisll keep it additive

  need to update state all at once, rather than passing pieces down

  break down review item subcomponent into more componenents
*/
