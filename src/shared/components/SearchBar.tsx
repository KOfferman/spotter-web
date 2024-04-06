import React from 'react';
import {FaSearch} from 'react-icons/fa';

interface SearchBarProps {
  handleDebouncedSearch: (term: string) => void;
  setSearchTerm: (term: string) => void;
  searchTerm: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  handleDebouncedSearch,
  setSearchTerm,
  searchTerm,
}: SearchBarProps) => {
  // Function to handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    handleDebouncedSearch(term); // Call the debounced search function
  };

  return (
    <div className='container rounded-5 py-1 px-3 bg-body-secondary'>
      <input
        type='text'
        value={searchTerm}
        onChange={handleChange}
        placeholder='Search...'
        className='w-100 bg-transparent border-0 text-secondary px-4'
      />
      <FaSearch
        className='search-icon position-absolute d-flex justify-content-start text-secondary'
        style={{top: 34}}
      />
    </div>
  );
};
