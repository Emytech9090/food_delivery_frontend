import Button from "../Button";
import MaxPageWrapper from "./MaxPageWrapper";
import PageTitle from "./PageTitle";

const RestaurantPage = () => {
  return (
    <MaxPageWrapper>
      <div className="flex items-center  justify-between">
        <PageTitle title="Restaurant" className="text-blue-800" />
        <Button
          title="Add restaurant"
          className="hover:bg-blue-800/60"
          path="add-restaurant"
        />
      </div>
    </MaxPageWrapper>
  );
};
export default RestaurantPage;
