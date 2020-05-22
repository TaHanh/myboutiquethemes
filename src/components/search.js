import { useState } from 'react'
import config from '../config'
export default function Search(props) {
  const [value, changeValue] = useState('')
  const search = () => {}
  return (
    <div className='search'>
      <div className='popup-search'>
        <div className='float-right btn-close cursor-pointer' onClick={() => props.callBack('CHECK_SEARCH', '')}>
          <i className='fas fa-times'></i>
        </div>
        <div className='search-container text-center'>
          <h2>What are you looking for?</h2>
          <div className='searchform'>
            <label for='search-top' className='cursor-pointer' onClick={() => props.callBack('SEARCH', value)}>
              <i className='fas fa-search'></i>
            </label>
            <input
              type='text'
              id='search-top'
              placeholder='Tìm kiếm'
              value={value}
              onChange={(e) => {
                changeValue(e.target.value)
              }}
              onKeyPress={(e) => {
                if (e.key == 'Enter') {
                  props.callBack('SEARCH', value)
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
