import React from 'react'
import Form from "next/form"
import ResetBtn from './SearchBtnReset'

const SearchForm = () => {
  const query = "Test"



  return (
    <Form className="search-form" action="/search">
      <input
        name='query'
        defaultValue={query}
        className='seach-input'
        placeholder='Search Startups'
      />

      <div className='flex gap-2'>
        {query && <ResetBtn />}

        <button type='submit' className='search-btn text-white'>
          S
        </button>
      </div>

    </Form>
  )
}

export default SearchForm