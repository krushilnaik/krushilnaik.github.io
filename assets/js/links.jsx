{/* <nav>
	<div id="links">
		<div id="github" data-aos="fade-right" data-aos-delay="1000">
			<div class="hvr-underline-from-center">
				<i class="fab fa-github-square"></i>
				<a href="https://github.com/krushilnaik">GitHub</a>
			</div>
		</div>
		<div style="width: 15px;"></div>
		<div id="linkedin" data-aos="fade-right" data-aos-delay="800">
			<div class="hvr-underline-from-center">
				<i class="fab fa-linkedin"></i>
				<a href="https://www.linkedin.com/in/krushil-naik-0a42191ba/">LinkedIn</a>
			</div>
		</div>
		<div style="width: 15px;"></div>
		<div id="email" data-aos="fade-right" data-aos-delay="600">
			<div class="hvr-underline-from-center">
				<i class="fas fa-envelope-square"></i>
				<a href="mailto:krushilnaik96@gmail.com">Gmail</a>
			</div>
		</div>
	</div>
</nav> */}

class NavBarLink extends React.Component {
	constructor(props) {
		super(props);
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
