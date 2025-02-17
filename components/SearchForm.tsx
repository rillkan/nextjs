import React from 'react'
import Form from "next/form"
import ResetBtn from './SearchBtnReset'
import { Search } from 'lucide-react'

const SearchForm = ({ query }: { query?: string }) => {

  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name='query'
        defaultValue={query}
        className='seach-input'
        placeholder='Search Startups'
      />

      <div className='flex gap-2'>
        {query && <ResetBtn />}

        <button type='submit' className='search-btn text-white'>
          <Search className='size-5' />
        </button>
      </div>

    </Form>
  )
}

export default SearchForm