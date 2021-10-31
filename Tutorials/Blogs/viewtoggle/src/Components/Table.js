import React from 'react'

function Table() {
  return (
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Occupation</th>
        <th scope="col">Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Andrew</th>
        <td>35</td>
        <td>Doctor</td>
        <td>Australia</td>
      </tr>
      <tr>
        <th scope="row">Liam</th>
        <td>42</td>
        <td>Cricketer</td>
        <td>England</td>
      </tr>
      <tr>
        <th scope="row">Seema</th>
        <td>32</td>
        <td>HouseWife</td>
        <td>India</td>
      </tr>
    </tbody>
  </table>
  )
}

export default Table
