var NewSkill = React.createClass({
  handleClick() {
    var name = this.refs.name.value;
    var details = this.refs.details.value;
    $.ajax({
      url: '/api/v1/skills',
      type: 'POST',
      data: { skill: { name: name, details: details} },
      success: (skill) => {
        this.props.handleSubmit(skill);
      }
    });
  },

  render() {
    return (
      <div className="well">
        <h3>New Skill</h3>
        <div className="form-group">
          <label>Name</label>
          <input ref='name'
                 placeholder='Enter name of skill'
                 className="form-control"/>
        </div>
        <div className="from-group">
          <label>Details</label>
          <input ref='details'
                 placeholder='Details'
                 className="form-control"/>
        </div>
        <button onClick={this.handleClick} className="btn btn-default">Submit</button>
      </div>
    )
  }
});
