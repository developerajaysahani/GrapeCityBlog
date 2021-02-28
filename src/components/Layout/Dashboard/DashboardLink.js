import React,{Component} from 'react';
class DashboardLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [{
        text: 'Dashboard',
        link: 'https://github.com/Lakston',
        icon: './Hill/profile/mannu.jpg'
      }, {
        text: 'Reminder',
        link: 'https://github.com/Lakston',
        icon: 'fa-github'
      }, {
        text: 'Registartion',
        link: 'https://twitter.com/Fab_is_coding',
        icon: 'fa-twitter'
      },{
        text: 'Case Management',
        link: 'https://github.com/Lakston',
        icon: ''
      }, {
        text: 'Billing',
        link: 'https://github.com/Lakston',
        icon: 'fa-github'
      }, {
        text: 'Triage',
        link: 'https://twitter.com/Fab_is_coding',
        icon: 'fa-twitter'
      },{
        text: 'Consultation',
        link: 'https://github.com/Lakston',
        icon: ''
      }, {
        text: 'Laboratory',
        link: 'https://github.com/Lakston',
        icon: 'fa-github'
      }, {
        text: 'Pharmacy',
        link: 'https://twitter.com/Fab_is_coding',
        icon: 'fa-twitter'
      },{
        text: 'Departments',
        link: 'https://github.com/Lakston',
        icon: ''
      }, {
        text: 'Finance',
        link: 'https://github.com/Lakston',
        icon: 'fa-github' 
      }, {
        text: 'Admin',
        link: 'https://twitter.com/Fab_is_coding',
        icon: 'fa-twitter'
      }]
    }
  }
  render() {
    let links = this.state.links.map((link, i) => <img src={'./Hill/profile/mannu.jpg'}/><li ref={i + 1}><i aria-hidden="true" className={`fa ${ link.icon }`}></i><a href={link.link} target="_blank">{link.text}</a></li>);

    return (
        <div className={this.props.menuStatus} id='menu'>
          <ul>
            { links }
          </ul>
        </div>
    )
  }
}
export default DashboardLink;