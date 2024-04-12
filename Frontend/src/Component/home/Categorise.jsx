

import React from 'react'
import Categorises from "../../constants/data.jsx"
import { Link, useSearchParams } from 'react-router-dom'

const Categorise = () => {

  const [searchParams] = useSearchParams();
  const category =  searchParams.get('category')

  return (
    <div> 
      <Link to={`/create?category=${category || ''}`}>
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-2 ml-2 md:mt-1 sm:mt-[170px] mt-[80px]">
          Create Blogs
        </button>
      </Link>

      <table className="table-auto ml-2 p-2"> 
        <thead>
          <tr>
            <Link to={'/'}>
              <th>All Categorise</th>
            </Link>
          </tr>
        </thead>
        <tbody>
          <div className='ml-1'>
            {
              Categorises.map((d) => {
                return (
                  <tr key={d.id}>
                    <Link to={`/?category=${d.type}`}>
                      <td className='hover:underline'>{d.type}</td>
                    </Link>
                  </tr>
                )
              })
            }
          </div>
        </tbody>
      </table>
    </div>
  )
}

export default Categorise
