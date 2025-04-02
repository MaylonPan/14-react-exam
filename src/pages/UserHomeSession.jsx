import React from 'react'


const users = [
      { id: 1, name: "John", lastName: "Doe", position: "Developer" },
      { id: 2, name: "Jane", lastName: "Smith", position: "Designer" },
      { id: 3, name: "Alice", lastName: "Johnson", position: "Manager" },
    ];

function UserHomeSession() {
  return (
    <div className="flex justify-center p-20">
        <table className="border border-gray-900 text-center w-full">
            <tr className='text-white bg-gray-900 border border-gray-900'>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
            </tr>
                {users.map(people => (
                    <tr key={people.id} className='bg-white'>
                        <td className='border'>{people.name}</td>
                        <td className='border'>{people.lastName}</td>
                        <td className='border'>{people.position}</td>
                    </tr>
                ))}
        </table>
    </div>
  )
}

export default UserHomeSession