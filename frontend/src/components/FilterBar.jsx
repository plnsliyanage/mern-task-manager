import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../features/task/taskSlice";

const FilterBar = () => {
  const dispatch = useDispatch();

  const { filter } = useSelector((state) => state.tasks);

  const buttons = ["all", "completed", "pending"];

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => dispatch(setFilter(button))}
          className={`px-6 py-2 rounded-lg font-medium capitalize transition duration-300 border

          ${
            filter === button
              ? "bg-blue-950 text-white border-blue-950 shadow-md"
              : "bg-white text-blue-950 border-blue-200 hover:bg-blue-50"
          }

          `}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
