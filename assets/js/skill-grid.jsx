class SubSkillCard extends React.Component {
	constructor(props) {
		super(props);

		/**
		 * @type {string}
		 */
		this.skillName = props.data.skill;

		/**
		 * @type {string[]}
		 */
		this.repos = props.data.repos;
	}

	render() {
		return (
			<div className="sub-skill-card" id={this.skillName.toLowerCase().replace(" ", "-")} data-descr={this.skillName}>
				<ul>
					{
						this.repos.map(
							repo => <li><a href={repo.startsWith("http") ? repo : `https://krushilnaik.github.io/${repo}`}>{repo.replace(/-/g, " ")}</a></li>
						)
					}
				</ul>
			</div>
		);
	}
}

class SkillCard extends React.Component {
	render() {
		return (
			<div id={this.props.cardTitle.replace(" ", "-").toLowerCase()} data-descr={this.props.cardTitle}>
				<div className="sub-skill-grid">
					{this.props.subSkills.map(skill => <SubSkillCard data={skill}/>)}
				</div>
			</div>
		);
	}
}

class SkillGrid extends React.Component {
	constructor(props){
		super(props);

		/**
		 * @typedef {object} SubSkill
		 * @property {string} skill
		 * @property {string[]} repos
		 */

		/**
		 * @typedef {object} Skill
		 * @property {string} skill
		 * @property {SubSkill[]} sub_skills 
		 */

		/**
		 * @type {Skill[]}
		 */
		this.skills = props.skills;
	}

	render() {
		return (
			<React.Fragment>
				{this.skills.map(skill => <SkillCard cardTitle={skill.skill} subSkills={skill.sub_skills}/>)}
			</React.Fragment>
		);
	}
}

fetch("assets/json/skills.json")
	.then(response => response.json())
	.then(
		(data) => {
			ReactDOM.render(<SkillGrid skills={data}/>, document.getElementById("skill-grid"));
		}
	);
