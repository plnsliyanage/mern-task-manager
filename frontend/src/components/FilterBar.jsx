import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../features/task/taskSlice";

const FilterBar = () => {
  const dispatch = useDispatch();

  const { filter } = useSelector((state) => state.tasks);

  const buttons = ["all", "completed", "pending"];

  return (
    <div className="flex gap-3 mb-6">
      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => dispatch(setFilter(button))}
          className={`px-4 py-2 rounded capitalize 

${filter === button ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
