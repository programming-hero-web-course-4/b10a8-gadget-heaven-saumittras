import { NavLink } from "react-router-dom";

const Categorys = ({ categorys }) => {
  return (
    <div>
      <div className="border border-[#09080F] border-opacity-10 rounded-2xl bg-[#FFFFFF] py-4 px-2 text-center gap-6 flex flex-col">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `rounded-full hover:bg-[#9538E2] font-extrabold border-2 border-[#9538E2] hover:text-white btn text-lg ${
              isActive
                ? "text-[#FFFFFF] font-bold bg-[#9538E2]  "
                : "bg-[#09080F0D] text-[#09080F]  font-semibold"
            }`
          }
        >
          All Products
        </NavLink>
        {categorys?.map((category) => (
          <NavLink
            to={`/category/${category.name}`}
            key={category.id}
            className={({ isActive }) =>
              `rounded-full hover:bg-[#9538E2] font-extrabold border-2 border-[#9538E2] hover:text-white btn text-lg ${
                isActive
                  ? "text-[#FFFFFF] font-extrabold bg-[#9538E2]  "
                  : "bg-[#09080F0D] text-[#09080F] font-semibold"
              }`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categorys;
