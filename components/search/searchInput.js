import clsx from "clsx";


const SearchInput = ({ setString, string, handleSubmit }) => {

  return (
    <form 
      className={clsx(
        'w-full h-fit box-row items-center shadow-card rounded-full relative'
      )}
      onSubmit={handleSubmit}
    >
      <input 
        className='w-full py-4 px-8 border-input rounded-full text-a'
        type="text"
        placeholder="Tìm kiếm nhanh"
        name="search"
        value={string || ''}
        onChange={(e) => setString(e.target.value)}
      />
      <button type="submit" className='border-none h-full w-fit pt-[5px] px-0 bg-transparent absolute right-4 '>
        <span className="material-symbols-outlined text-a font-bold ">search</span>
      </button>
    </form>
  )
};

export default SearchInput;
