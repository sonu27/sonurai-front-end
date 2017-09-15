import React, { Component } from 'react'

class Pagination extends Component {
  render() {
    return (
      <ul className="pagination">
        <li><button value={this.props.pagination.prev} onClick={this.props.handlePageChange}>{this.props.pagination.prev}</button></li>
        <li><button value={this.props.pagination.current} onClick={this.props.handlePageChange}>{this.props.pagination.current}</button></li>
        <li><button value={this.props.pagination.next} onClick={this.props.handlePageChange}>{this.props.pagination.next}</button></li>
      </ul>
    )
  }
}

export default Pagination
