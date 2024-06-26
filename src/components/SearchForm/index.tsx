import Input from "./Input";
import SearchIcon from "@/assets/icons/SearchIcon";

const SearchForm = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div className="flex items-center w-full">
      {children}
      <button className="bg-primary3 p-[10px]" onClick={onClick}>
        <SearchIcon width={50} />
      </button>
    </div>
  );
};

export default SearchForm;

SearchForm.Input = Input;
