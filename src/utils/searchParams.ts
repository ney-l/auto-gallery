export const updateSearchParams = (paramName: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(paramName, value);

  const newPathName = window.location.pathname + '?' + searchParams.toString();

  return newPathName;
};

const SearchParams = {
  updateParams: updateSearchParams,
};

export default SearchParams;
