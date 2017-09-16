import React from 'react'

const Pagination = ({pagination, handlePageChange}) => (
  <ul className="pagination">
    <li><button value={pagination.prev} onClick={handlePageChange}>{pagination.prev}</button></li>
    <li><button value={pagination.current} onClick={handlePageChange}>{pagination.current}</button></li>
    <li><button value={pagination.next} onClick={handlePageChange}>{pagination.next}</button></li>
  </ul>
)

export default Pagination
