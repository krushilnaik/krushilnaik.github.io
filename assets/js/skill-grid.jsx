/**
 * @type {React.CSSProperties}
 */
const skillStyleCommon = {
	width: "100%",
	height: "100%",
	padding: "1%",

	backgroundRepeat: "no-repeat",
	backgroundSize: "80%",
	backgroundPosition: "center",

	justifySelf: "center",
	alignSelf: "center",

	position: "relative",
	transition: "all .2s"
};

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
		/**
		 * @type {React.CSSProperties}
		 */
		const style = {
			...skillStyleCommon,
			backgroundImage: `url(assets/images/grid-backgrounds/${this.skillName.replace("Vanilla ", "").toLowerCase()}.png)`,
			backgroundColor: "darkcyan"
		};

		return (
			<div style={style} className="sub-skill-card" id={this.skillName.toLowerCase().replace(" ", "-")} data-descr={this.skillName}>
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
		/**
		 * @type {React.CSSProperties}
		 */
		const style = {
			...skillStyleCommon,
			backgroundImage: `url(assets/images/grid-backgrounds/${this.props.cardTitle.replace("Vanilla ", "").toLowerCase()}.png)`,
			backgroundColor: "indianred"
		};

		const subStyle = {
			display: "grid",
			gridTemplateColumns: "1fr 1fr",
			gridTemplateRows: "1fr 1fr"
		};

		return (
			<div style={style} id={this.props.cardTitle.replace(" ", "-").toLowerCase()} data-descr={this.props.cardTitle} className="skill-card">
				<div className="sub-skill-grid" style={subStyle}>
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
