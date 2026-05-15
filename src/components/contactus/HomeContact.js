import '../../styles/components-css/contactus/homecontact.css';

function HomeContact() {
    const teamMembers = [
        {
            role: 'Supervisor',
            name: 'Zain Ul Hassan',
            image: '',
            linkedinUrl: 'https://www.linkedin.com/in/hansi/'
        },
        {
            role: 'Co-Supervisor',
            name: 'Noman Durani',
            image: '',
            linkedinUrl: 'https://www.linkedin.com/in/nouman-durrani-4b7a4337/'
        }
    ];

    const teamMembersRow = [
        {
            role: 'Team Member 1',
            name: 'Arham Hussain Khan',
            image: '/image/Images/member1.jpg',
            linkedinUrl: 'https://www.linkedin.com/in/arhamkhxn/'
        },
        {
            role: 'Team Member 2',
            name: 'Partham Kumar Chawla',
            image: '/image/Images/member2.jpg',
            linkedinUrl: 'https://www.linkedin.com/in/partham-kumar-a8494021a/'
        },
        {
            role: 'Team Member 3',
            name: 'Aarib Ahmed Vahidy',
            image: '/image/Images/member3.jpg',
            linkedinUrl: 'https://www.linkedin.com/in/aarib-vahidy-618937291/'
        }
    ];

    return (
        <div className="home-contact">
            <div className="home-contact-title">
                <span>Our Team</span>
            </div>
            <div className="home-contact-container">
                <div className="our-team-container">
                    <div className="our-team-title">
                        <span>Project Team Members</span>
                    </div>
                    <div className="our-team-row">
                        {teamMembers.map((member, index) => (
                            <div className="our-team-col" key={index}>
                                <div className="our-team-img">
                                    <div className="placeholder-img">👤</div>
                                </div>
                                <div className="our-team-info">
                                    <h6>{member.role}</h6>
                                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="member-link">
                                        {member.name}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Team Members Row */}
                    <div className="our-team-row">
                        {teamMembersRow.map((member, index) => (
                            <div className="our-team-col" key={index}>
                                <div className="our-team-img">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className="our-team-info">
                                    <h6>{member.role}</h6>
                                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="member-link">
                                        {member.name}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeContact;
