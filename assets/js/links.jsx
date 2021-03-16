class NavBarLink extends React.Component {
	/**
	 * @param {{id: string, delay: number, icon: string, link: JSX.Element}} props 
	 */
	constructor(props) {
		super(props);
		this.props = {...props};
	}

	render() {
		return (
			<div id={this.props.id} data-aos="fade-right" data-aos-delay={this.props.delay}>
				<div className="hvr-underline-from-center">
					<i className={this.props.icon}></i>
					{this.props.link}
				</div>
			</div>
		);
	}
}

class NavBar extends React.Component {
	render() {
		/**
		 * @typedef {object} LinkContent
		 * @property {string} id - id to be assigned to div
		 * @property {JSX.Element} link - anchor tag with href
		 * @property {string} icon - FontAwesome class of i tag
		 */

		/**
		 * @type {LinkContent[]}
		 */
		const linkContent = [
			{
				id: "github",
				link: <a href="https://github.com/krushilnaik">GitHub</a>,
				icon: "fab fa-github-square"
			},
			{
				id: "linkedin",
				link: <a href="https://www.linkedin.com/in/krushil-naik-0a42191ba/">LinkedIn</a>,
				icon: "fab fa-linkedin"
			},
			{
				id: "gmail",
				link: <a href="mailto:krushilnaik96@gmail.com">Gmail</a>,
				icon: "fas fa-envelope-square"
			}
		];

		return (
			<React.Fragment>
				{
					linkContent.map(
						(linkEl, i) => <NavBarLink delay={400 + (linkContent.length - 1 - i)*200} id={linkEl.id} icon={linkEl.icon} link={linkEl.link}></NavBarLink>
					)
				}
			</React.Fragment>
		); 
	}
}

ReactDOM.render(<NavBar />, document.getElementById("links"));
