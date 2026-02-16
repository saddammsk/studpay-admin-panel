/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useDispatch, useSelector } from 'react-redux';
import InputField from '@/app/components/InputField';
import Button from '@/app/components/ui/Button';
import {
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setCountry,
  setDateOfBirth,
  setLoading,
  setResults,
  resetSearch,
  setCurrentPage,
} from '@/app/store/slices/Usersearchslice';
import { searchUsers } from '@/app/lib/Searchutils';
import { COUNTRIES } from '@/public/Dummydata';
import { AppDispatch, RootState } from '@/app/store/store';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const dispatch = useDispatch<AppDispatch>();
  const { filters, results, loading, hasSearched, currentPage, itemsPerPage } = useSelector(
    (state: RootState) => state.userSearch
  );

  const handleSearch = async () => {
    dispatch(setLoading(true));
    
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const searchResults = searchUsers(filters);
    dispatch(setResults(searchResults));
    dispatch(setCurrentPage(1));
    dispatch(setLoading(false));
  };

  const handleReset = () => {
    dispatch(resetSearch());
  };

  const totalPages = Math.ceil(results.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedResults = results.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <div className="">
      <h4 className="font-segoe text-2xl font-normal leading-8 text-black-1200 mb-6">
        Identification
      </h4>
      <div className="rounded-lg bg-white border border-gray-1000 shadow-4xl p-6">
        <div className="flex items-center gap-2 text-2xl font-normal leading-6 text-black13 mb-6">
          <img src="/images/search-icon2.svg" alt="" />
          User Search
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          <div>
            <InputField
              label="First Name"
              type="text"
              placeholder="Enter first name"
              iconSrc="/images/user-icon2.svg"
              value={filters.firstName}
              onChange={(e: any) => dispatch(setFirstName(e.target.value))}
            />
          </div>
          <div>
            <InputField
              label="Last Name"
              type="text"
              placeholder="Enter last name"
              iconSrc="/images/user-icon2.svg"
              value={filters.lastName}
              onChange={(e: any) => dispatch(setLastName(e.target.value))}
            />
          </div>
          <div>
            <InputField
              label="Email"
              type="text"
              placeholder="Enter email address"
              iconSrc="/images/msg-icon.svg"
              value={filters.email}
              onChange={(e: any) => dispatch(setEmail(e.target.value))}
            />
          </div>
          <div>
            <InputField
              label="Phone Number"
              type="text"
              placeholder="Enter phone number"
              iconSrc="/images/call-icon.svg"
              value={filters.phone}
              onChange={(e: any) => dispatch(setPhone(e.target.value))}
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="font-segoe text-sm font-normal leading-5 block mb-2 text-gray-1700"
            >
              Country of Study
            </label>
            <div className="relative">
              <select
                id="country"
                value={filters.country}
                onChange={(e) => dispatch(setCountry(e.target.value))}
                className="appearance-none pl-9 text-sm font-normal leading-5 font-neulis-sans text-black13 xl:pr-11 pr-8 pl-4 h-10 bg-white border border-gray1600 rounded-md w-full outline-0"
                style={{
                  backgroundImage: "url('/images/down-arrow.svg')",
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 10px center',
                }}
              >
                <option value="">Select country</option>
                {COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <div className="absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none">
                <img src="/images/globe-icon.svg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="dob"
              className="font-segoe text-sm font-normal leading-5 block mb-2 text-gray-1700"
            >
              Date of Birth
            </label>
            <div className="relative calendar-input">
              <input
                id="dob"
                type="date"
                value={filters.dateOfBirth}
                onChange={(e) => dispatch(setDateOfBirth(e.target.value))}
                className="font-segoe  max-w-43.25 pr-3 text-sm font-normal leading-normal h-10 text-gray-1400 w-full border border-gray1600 rounded-md pl-10 block"
              />
              <div className="absolute top-1/2 bg-white -translate-y-1/2 left-3 pointer-events-none">
                <img src="/images/calendar-icon2.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-end mt-6 flex gap-2 justify-end">
          {hasSearched &&
          <Button
            label="Reset"
            className="text-white bg-gray-500 hover:bg-gray-600"
            onClick={handleReset}
            disabled={loading}
          />}
          <Button
            label={loading ? 'Searching...' : 'Search Users'}
            className="text-white bg-blue-1000 hover:bg-blue-1100"
            onClick={handleSearch}
            disabled={loading}
          />
        </div>
      </div>

      {hasSearched && (
        <div className="mt-8">
          <h4 className="font-segoe text-2xl font-normal leading-8 text-black-1200 mb-4">
            Search Results
          </h4>
          {results.length === 0 ? (
            <div className="rounded-lg bg-white border border-gray-1000 shadow-4xl p-6 text-center">
              <p className="text-gray-1400">No users found matching your search criteria.</p>
            </div>
          ) : (
            <div className="rounded-lg bg-white border border-gray-1000 shadow-4xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-1000 border-b border-gray-1000">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-1700">
                        First Name
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-1700">
                        Last Name
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-1700">
                        Email
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-1700">
                        Phone
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-1700">
                        Country
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-1700">
                        Date of Birth
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedResults.map((user, index) => (
                      <tr
                        key={user.id}
                        className={`border-b border-gray-1000 hover:bg-blue-50 transition-colors ${
                          index % 2 === 0 ? 'bg-white' : 'bg-blue-50'
                        }`}
                      >
                        <td className="px-6 py-4 text-sm text-black13">
                          {user.firstName}
                        </td>
                        <td className="px-6 py-4 text-sm text-black13">
                          {user.lastName}
                        </td>
                        <td className="px-6 py-4 text-sm text-black13">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 text-sm text-black13">
                          {user.phone}
                        </td>
                        <td className="px-6 py-4 text-sm text-black13">
                          {user.country}
                        </td>
                        <td className="px-6 py-4 text-sm text-black13">
                          {new Date(user.dateOfBirth).toLocaleDateString()}
                        </td>
                        <td>
                           <Link href={`/identification/${user.id}`} className="w-10 h-9 flex items-center justify-center">
                              <Image
                                   src={"/images/eyes-icon.svg"}
                                   alt=""
                                   width='16'
                                   height='16'
                              />
                         </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-6 py-4 bg-gray-50 flex items-center justify-between">
                <div className="text-sm text-gray-1400">
                  Showing {startIndex + 1}-{Math.min(endIndex, results.length)} of {results.length} results
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1 || loading}
                    className={`px-3 py-2 text-sm font-medium rounded-md border transition-colors ${
                      currentPage === 1 || loading
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300'
                        : 'bg-white text-black13 border-gray-1000 hover:bg-blue-50'
                    }`}
                  >
                    Previous
                  </button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => dispatch(setCurrentPage(page))}
                        disabled={loading}
                        className={`w-8 h-8 text-sm font-medium rounded-md transition-colors ${
                          currentPage === page
                            ? 'bg-blue-1000 text-white'
                            : 'bg-white text-black13 border border-gray-1000 hover:bg-blue-50'
                        } ${loading ? 'cursor-not-allowed' : ''}`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages || loading}
                    className={`px-3 py-2 text-sm font-medium rounded-md border transition-colors ${
                      currentPage === totalPages || loading
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300'
                        : 'bg-white text-black13 border-gray-1000 cursor-pointer hover:bg-blue-50'
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}