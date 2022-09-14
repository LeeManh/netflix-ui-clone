import Carousel from "./Carousel";

const List = ({ title }) => {
  return (
    <div className=" mt-10 space-y-4">
      <div className="wrapper flex items-center justify-between">
        <h2 className="slide-title">{title}</h2>
      </div>

      <Carousel />
    </div>
  );
};

export default List;
