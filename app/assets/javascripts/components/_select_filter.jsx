var SelectFilter = React.createClass({
  render (){
    return(
      <div>
        <label>
          Filter By
        </label>
        <select className="form-control"
                onChange={event => this.props.handleFilter(event.target.value)}>
          <option value="all">All</option>
          <option value="bad">Bad</option>
          <option value="halfbad">Halfbad</option>
          <option value="fantastic">Fantastic</option>
        </select>
      </div>
    )
  }
});
