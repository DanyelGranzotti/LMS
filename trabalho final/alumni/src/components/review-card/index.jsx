import "./style.css";

const ReviewCard = (props) => {
  const { review } = props;

  return (
    <div className="review-card">
      <div className="review-card-content">
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          excepturi, maiores quisquam
        </p>
        <div className="flex justify-center items-center w-full">
          <div className="w-2/12 h-2/12 me-2">
            <img
              src={review.picture.thumbnail}
              alt="avatar"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="flex flex-col text-sm w-10/12 text-left space-y-1">
            <p className="font-semibold">
              {review.name.first} {review.name.last}
            </p>
            <p className="text-gray-400 overflow-ellipsis overflow-hidden">
              {review.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
