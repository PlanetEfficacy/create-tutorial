var SelectFilter = React.createClass({

  updateFilter(event) {
    this.props.handleFilter(event.target.value)
  },

  render (){
    return(
      <div>
        <label>
          Filter By
        </label>
        <select className="form-control" onChange={this.updateFilter.bind(this)}>
          <option value="all">All</option>
          <option value="bad">Bad</option>
          <option value="halfbad">Halfbad</option>
          <option value="fantastic">Fantastic</option>
        </select>
      </div>
    )
  }
});
