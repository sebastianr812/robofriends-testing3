import React, { ChangeEventHandler, ChangeEvent } from 'react';


// Change event handler is a FUNCTIOn type in TS - so this tells the type that searchChange key is a function
// and then we specify where this change even is happening 

type SearchBoxProps = {
  searchChange: ChangeEventHandler<HTMLInputElement>
}

// the other way, more explicit way to do it -- gives us more granular control 
// because we can say what type we are going to return

// type SearchBoxProps2 = {
//   searchChange: (event: ChangeEvent<HTMLInputElement>) => void
// }

const SearchBox = ({ searchChange }: SearchBoxProps) => {
  return (
    <div className='pa2'>
      <input
        aria-label="Search"
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;