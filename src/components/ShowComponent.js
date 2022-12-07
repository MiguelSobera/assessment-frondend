import React from "react";
import { useEffect, useState } from "react";

function Show() {
  const [showAllMiguelPenaTable, setshowAllMiguelPenaTable] = useState();

  useEffect(() => {
    fetch("http://localhost:1433/show")
      .then((res) => res.json())
      .then((data) => {
        setshowAllMiguelPenaTable(data);
      });
  }, []);

  return (
    <div>
      <h1 class="text-center fw-bold">User List</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {showAllMiguelPenaTable !== undefined ? (
            <>
              {showAllMiguelPenaTable.map((showAllMiguelPenaTable) => (
                <tr key={showAllMiguelPenaTable.id}>
                  <td>{showAllMiguelPenaTable.id}</td>
                  <td>{showAllMiguelPenaTable.firstName}</td>
                  <td>{showAllMiguelPenaTable.lastName}</td>
                  <td>{showAllMiguelPenaTable.phoneNumber}</td>
                  <td>{showAllMiguelPenaTable.email}</td>
                </tr>
              ))}
            </>
          ) : (
            <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            </tr>
          )}
        </tbody>
      </table>
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <a
              class="btn btn-primary "
              href="http://localhost:3000/create"
              role="button"
            >
              Create
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Show;
