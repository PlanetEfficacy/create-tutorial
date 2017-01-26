var Body = React.createClass({
  getInitialState() {
    return { skills: [], filteredSkills: null }
  },

  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => {
      this.setState({ skills: response });
    })
  },

  handleSubmit(skill) {
    var newState = this.state.skills.concat(skill);
    this.setState({ skills: newState })
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/skills/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeSkillFromDOM(id);
      }
    });
  },

  removeSkillFromDOM(id) {
    var newSkills = this.state.skills.filter((skill) => {
      return skill.id != id;
    });

    this.setState({ skills: newSkills });
  },

  handleUpdate(skill) {
    $.ajax({
      url: `/api/v1/skills/${skill.id}`,
      type: 'PUT',
      data:  { skill },
      success: skill => this.updateSkills(skill)
    });
  },

  updateSkills(skill) {
    var skills = this.state.skills.filter((s) => { return s.id != skill.id });
    skills.push(skill);

    this.setState({ skills: skills });
  },

  filterSkillsByLevel(level) {
    let newSkills = null;
    if (level !== 'all') {
      let newSkills = this.state.skills.filter(skill => skill.level === level);
    }
    this.setState({filteredSkills: newSkills});
  },

  render() {
    return (
      <div className="container">
        <NewSkill handleSubmit={this.handleSubmit} />
        <SelectFilter handleFilter={this.filterSkillsByLevel} />
        <AllSkills skills={this.state.filteredSkills || this.state.skills}
                   handleDelete={this.handleDelete}
                   handleUpdate={this.handleUpdate} />
      </div>
    )
  }
});
