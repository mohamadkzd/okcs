import { Link } from "react-router-dom";

const Menu = ({ data }) => {
  return (
    <>
      {data?.map((elem) => {
        return (
          <li key={elem.id} className="lg:leading-normal flex lg:flex-col lg:justify-center items-center gap-x-2 gap-y-2 leading-[60px] transition-all ease-linear lg:border-l-[1px] lg:pl-3 hover:text-[red]">
            <img
              style={{ filter: "saturate(0)" }}
              className="w-[20px] filter-[saturate(0)] "
              src={elem.svg}
              alt=""
            />
            <Link>{elem.name}</Link>
          </li>
        );
      })}
    </>
  );
};

export default Menu;
