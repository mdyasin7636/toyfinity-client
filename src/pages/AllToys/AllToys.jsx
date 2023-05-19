
const AllToys = () => {
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        {/* <th></th> */}
        <th>Seller Name</th>
        <th>Toy Name</th>
        <th>Sub-Category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        {/* <th>1</th> */}
        <td>Dicaprio</td>
        <td>Superman</td>
        <td>DC</td>
        <td>$50</td>
        <td>500</td>
        <td>
            <button className="btn btn-primary">View Details</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllToys;