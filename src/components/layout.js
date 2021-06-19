import * as React from 'react'
import { Link /*, useStaticQuery, graphql*/ } from 'gatsby'
import { container /*, siteTitle*/ } from './layout.module.scss'


class Layout extends React.Component {

	constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }
	
  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render(/*{pageTitle,children}*/) {
		//const data = useStaticQuery(graphql`
		//	query {
		//		site {
		//			siteMetadata {
		//						title
		//			}
		//		}
		//	}
		//`)
				//<title>{pageTitle} | {data.site.siteMetadata.title}</title>
				//<p className={siteTitle}>{data.site.siteMetadata.title}</p>

		return (
			<main className={container}>
				<nav
					className="navbar is-transparent"
					role="navigation"
					aria-label="main-navigation"
				>
					<div
						className={`navbar-burger burger ${this.state.navBarActiveClass}`}
						data-target="navMenu"
						onClick={() => this.toggleHamburger()}
					>
						<span />
						<span />
						<span />
					</div>
					<ul>
						<li><Link to='/'>Homeeeeeeeeeeeeeeee</Link></li>
						<li><Link to='/about'>Abouttttttttttttttttttttt</Link></li>
						<li><Link to='/blog'>Bloggggggggggggggggggggggg</Link></li>
					</ul>
				</nav>
				<h1>{this.props.pageTitle}</h1>
				{this.props.children}
			</main>
		)
	}
}

export default Layout
