import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
	return (
		<div className='pa2'>
			<form>
				<div>
					<input
						className='pa3 ba b--green bg-lightest-blue'
						type='text'
						name='search'
						id='search'
						placeholder='Search For Robots'
						onChange={searchChange}
					/>
				</div>
				<div>
					<input type='submit' value='Search' />
				</div>
			</form>
		</div>
	);
};

export default SearchBox;
