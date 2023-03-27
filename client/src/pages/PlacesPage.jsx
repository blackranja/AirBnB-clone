import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PlacesPage = () => {
  const { action } = useParams();
  return (
    <div>
      {action !== 'new' && (
        <div className="text-center">
        <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"to={'/account/places/new'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
Add new Place
        </Link>
        </div>
      )}
      {action === 'new' && (
        <div>
          <form>
            <h2 className="text-xl mt-4">Title             </h2>
            <p className="text-gray-500 text-sm">Title for your place. Should be short and catchy advertisment</p>
            <input type="text" placeholder="title,for example:My lonely arpartment" />
            <h2 className="text-2xl mt-4">Address</h2>
            <p className="text-gray-500 text-sm">Address to this place</p>
            <input type="text" placeholder="address" />
            <h2 className="text-2xl mt-4">Photos</h2>
            <p className="text-gray-500 text-sm">more = better</p>
            <div>
              <input className="" type="text" placeholder={'adding using Link ...jpg'} />
              <button className="flex gap-1 justify-center  bg-gray-300 px-4 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
</svg>

                Upload 
              </button>
            </div>
            
            <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <button className="border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
               Upload 
            </button>
            </div>
            <div>
            <h2 className="text-2xl mt-4">
              Description
            </h2>
            <p className="text-gray-500 text-sm">
              Description of the place
              <textarea /></p>
              <h2 className="text-2xl mt-4">Perks</h2>
              <p className="text-gray-500 text-sm">
                Select all the places you have been
              </p>
             </div>
            
            <div className="mt-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
</svg>

                  Wifi</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
</svg>

                  Free Parking Spot</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
</svg>

                  T.V</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
</svg>

                  Pets</span>
              </label>
             <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>

                  Radio
                </span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>

                  Private Entrance</span>
              </label>
            </div>
             <h2 className="text-2xl mt-4">Extra Info</h2>
              <p className="text-gray-500 text-sm">
                House Rules, etc
            </p>
            <textarea />
             <h2 className="text-2xl mt-4">Check in/out Times</h2>
              <p className="text-gray-500 text-sm">
                Add check in and out
            </p>
            <div className="grid sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-1">check in time</h3>
                <input type="text" placeholder="14:00" />
                
              </div>

              <div>
                <h3 className="mt-2 -mb-1">Check in Time</h3>
                <input type="text"/>
              </div>

              <div>
                <h3 className="mt-2 -mb-1">Max number of guest</h3>
                <input type="text"/>
              </div>
            </div>
            <div>
              <button className="primary my-4">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
      

    </div>
  )
}

export default PlacesPage