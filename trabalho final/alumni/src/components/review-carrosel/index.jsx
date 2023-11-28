import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import ReviewCard from "../review-card";
import "./style.css";

const ReviewCarrosel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 3) % reviews.length);
  };

  const prevSlide = () => {
    const nextIndex = currentIndex - 3;
    const nextIndexNormalized =
      nextIndex < 0 ? reviews.length + nextIndex : nextIndex;
    setCurrentIndex(nextIndexNormalized);
  };

  return (
    <div className="review-carrosel">
      <div className="flex justify-between items-center w-full mb-8">
        <h4 className="font-semibold text-3xl">Veja alguns relatos</h4>
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="carrosel-button"
            disabled={currentIndex === 0}
          >
            <FiArrowLeft size={30} />
          </button>
          <button
            onClick={nextSlide}
            className="carrosel-button"
            disabled={currentIndex + 3 >= reviews.length}
          >
            <FiArrowRight size={30} />
          </button>
        </div>
      </div>
      <div className="review-carrosel-content">
        {reviews.slice(currentIndex, currentIndex + 3).map((review) => (
          <ReviewCard review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarrosel;
