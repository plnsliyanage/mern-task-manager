import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/task/taskSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const { searchTerm } = useSelector((state) => state.tasks);

  return (
    <div className="mb-5">
      <input
        type="text"
        placeholder="Search by title or description..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
