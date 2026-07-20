import { useDispatch, useSelector } from "react-redux";

import { setSearchTerm } from "../features/task/taskSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const { searchTerm } = useSelector((state) => state.tasks);

  return (
    <div className="mb-5">
      <div className="relative">
        <input
          type="text"
          placeholder="Search tasks by title or description..."
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          className="w-full bg-white border border-blue-200 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-950 transition duration-300 shadow-sm"
        />
      </div>
    </div>
  );
};

export default SearchBar;
