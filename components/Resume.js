import Work from './Work'

function Resume({ isDark }) {
    return ( 
        <div className="resume-container">
            <div className="resume-text">   
                <div className="past-work">
                    <h1>Past Work</h1>
                    {/* job, location, separator, description, url */}
                    <Work 
                        job="Web Designer "
                        location="APPEER Marketing "
                        separator="at "
                        url=""
                        description="A student run enterprise at the African Leadership Academy that aimed to allow organizations on campus promote and effectively reach their target audience. "
                        isDark={isDark}
                    />

                    <Work 
                        job="Research "
                        location="3DMI, Lagos "
                        separator="w/ "
                        url=""
                        description="Scripted a web crawler to extract and clean information of thousands of students from online forms. "
                        isDark={isDark}
                    />
                    
                    <Work 
                        job="Developer "
                        location="Dot "
                        separator="at "
                        url="https://dotinc.netlify.app"
                        description="An all-in-one financial service to students on the African Continent"
                        isDark={isDark}
                    />

                    <Work 
                        job="Web Developer "
                        location="ALCG "
                        separator="at "
                        url="https://www.alcg.co.za"
                        description="An organization that works to aid in the growth of small to medium-size businesses on the African continent through top-notch consulting."
                        isDark={isDark}
                    />

                    <Work 
                        job="Site Developer "
                        location="IIS, Lagos "
                        separator="at "
                        url=""
                        description=""
                        isDark={isDark}
                    />

                    {/* <a className={`${isDark ? "cv" : "cv black-txt"}`}>Download CV</a> */}


                </div>

                <div className="current-work">
                    <h1>Currently</h1>

                    <Work 
                        job="Freshman "
                        location="Jacobs University, Bremen "
                        separator="at "
                        url="https://www.jacobs-university.de"
                        description=""
                        isDark={isDark}
                    />

                    <Work 
                        job="Site Technician "
                        location="OAM, South Africa "
                        separator="at "
                        url="https://www.onceamonth.org.za"
                        description="Non-profit organization committed to empowering underprivileged refugee and asylum-seeking women in South Africa with access to period products and menstrual education."
                        isDark={isDark}
                    />

                    <Work 
                        job="Full-stack Developer "
                        location="Boolean Labs "
                        separator="at "
                        url="https://www.booleanlabs.io/"
                        description="A digital co-creation launchpad that helps entrepreneurs (in startups) and intrapreneurs (in enterprises) across the globe deliver innovative technology products."
                        isDark={isDark}
                    />

                </div>
            </div>
        </div>
     );
}

export default Resume;