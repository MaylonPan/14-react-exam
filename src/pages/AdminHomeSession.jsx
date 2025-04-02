import React from 'react'

const users = [
    { id: 1, name: "John", lastName: "Doe", position: "Developer" },
    { id: 2, name: "Jane", lastName: "Smith", position: "Designer" },
    { id: 3, name: "Alice", lastName: "Johnson", position: "Manager" },
  ];

function AdminHomeSession() {
    return (
      <div className="justify-center w-full text-center">
        <div className="mb-5">
            <h2 className="text-white font-bold text-3xl m-8">Create User Here</h2>
            <div className="justify-between">
                <input placeholder="Name" className="bg-white rounded-lg p-2 mx-10"/>
                <input placeholder="Last Name" className="bg-white rounded-lg p-2 mx-10"/>
                <input placeholder="Position" className="bg-white rounded-lg p-2 mx-10"/>
                <button className="bg-white shadow-2xl p-4 font-bold rounded-xl hover:bg-[#008170] hover:scale-105 duration-300 hover:text-white">Save</button>
            </div>
        </div>
        <div className="bg-[#F5EFE7]">
            <table className="border border-gray-900 text-center w-full">
              <tr className='text-white bg-gray-900 border border-gray-900'>
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>Position</th>
                  <th>Action</th>
              </tr>
                  {users.map(people => (
                      <tr key={people.id}>
                          <td className='border'>{people.name}</td>
                          <td className='border'>{people.lastName}</td>
                          <td className='border'>{people.position}</td>
                          <td className='border'>{people.position}</td>
                      </tr>
                  ))}
            </table>
          </div>
      </div>
    )
  }

  export default AdminHomeSession