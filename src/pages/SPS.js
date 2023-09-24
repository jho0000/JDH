import React from "react";

function SPS() {
    return(
        <main>
            <section class="col-12 page d-flex align-items-center justify-content-center">
                <div class="container">
                    <div class="banner row color-1">
                        <div class="col-md-6 justify-content-center">
                            <h1 class="title align-items-center">SPS Redesign</h1>
                            <h1 class="subtitle">Visioning a new look for Seattle Public Schools.</h1>
                        </div>
                        <div class="col-md-6 justify-content-center">
                            <img class="asset" src="/img/SPSMockup.png" alt="SPS mockup"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section class="page col-7">
                <div class="summary row">
                    <div class="col-md-8">
                        <h1>Project Summary</h1>
                            <p>To expand my knowledge in digital design and design systems, I undertook a project to revamp the Seattle Public Schools’ (SPS) district website. Working within a team of four during a 3-week sprint, we developed an interactive Figma prototype for both mobile and desktop, serving as our final product during the learning process.</p>
                            <p>The project involved thorough research, experimentation, and continuous refinement in Figma. This was the process in building an envisioned design system for the largest K-12 school district in Washington state.</p>
                        <h1 class>Project Goals</h1>
                        <ul class="goals">
                            <li><b>Acquire proficiency</b> in Figma fundamentals with digital design</li>
                            <li><b>Collaborate and maintain</b> design systems aligned with industry standards</li>
                            <li><b>Implement inclusive design</b> and design principles within a product</li>
                            <li><b>Study documentation</b> within design libraries and self-educate on advanced Figma</li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h2>Members</h2>
                            <ul>
                                <li>John Ho</li>
                                <li>Claire Li</li>
                                <li>Franchezca Layog</li>
                                <li>Wendy Vo</li>
                            </ul>
                        <h2>Timeline</h2>
                            <p>October 2022 - December 2022</p>
                        <h2>Tools</h2>
                            <p>Figma</p>
                        <h2>Deliverables</h2>
                            <p><a class="link" href="https://www.figma.com/proto/eJuw7abJWeGMeNAraDNfP2/John-Ho's-Portfolio?page-id=1416%3A6604&type=design&node-id=1421-7879&viewport=1164%2C123%2C0.21&t=UjaX1vtzGHHybVLj-1&scaling=scale-down&starting-point-node-id=1421%3A7879&mode=design" target="_blank" rel="noopener noreferrer">Desktop prototype</a></p>
                            <p><a class="link" href="https://www.figma.com/proto/eJuw7abJWeGMeNAraDNfP2/John-Ho's-Portfolio?page-id=1416%3A5926&type=design&node-id=1425-9071&viewport=-1812%2C-775%2C0.3&t=kU32SwYd1O3BeeQ8-1&scaling=min-zoom&starting-point-node-id=1425%3A9071&mode=design" target="_blank" rel="noopener noreferrer">Mobile prototype</a></p>
                    </div>
                </div>
                <img class="asset" src="/img/SPS/Logo.png" alt="SPS logo preview"></img>
                <div class="background">
                    <h1>Background</h1>
                        <p>Seattle Public Schools is committed to “every student’s journey,” and their district website serves many crucial purposes. It serves as a platform for communicating recent district news, facilitating collaboration among educators, staff, and families, and providing accessible information to all individuals.</p>
                        <p>In the 2020-2021 academic year, their <a class="link" href="https://www.seattleschools.org/wp-content/uploads/sps/district/File/District/Departments/Communications/seattle-public-schools-quick_facts.pdf" target="_blank" rel="noopener noreferrer">Fast Facts and Figures infographic</a> highlights the student diversity and implied stakeholders within the SPS community:</p>
                        <img class="asset" src="/img/SPS/Background.png" alt="Statistics on diversity within Seattle Public Schools"></img>
                        <p>The current design of the SPS district website was established in <a class="link" href="https://web.archive.org/web/20210810171417/https://www.seattleschools.org/" target="_blank" rel="noopener noreferrer">August of 2021</a> and has remained relatively unchanged in terms of its website composition since then.</p>
                        <img class="asset" src="/img/SPS/Imagery.png" alt="Imagery of SPS values and commitments"></img>
                        <p>In short, SPS’s commitment extends to district-level, school-level, and staff websites, supporting multiple services from all its schools and diverse audiences. With ongoing efforts towards a better user experience for all students and families, it represents a community-driven effort to refine the website’s design and navigation.</p>
                    <h2>Interface Audit</h2>
                        <p>To identify pain points and opportunity areas for the current website, I conducted an interface audit across multiple pages on both desktop and mobile viewports:</p>
                        <img class="asset-caption" src="/img/SPS/Audit1.png" alt="Image of SPS homepage with annotations"></img>
                        <p class="caption">SPS homepage as of September 2023</p>
                        <p>The <b>homepage</b> is a central hub of drop-down menus and cards made to guide users to resources and informational pages. It presents <b>district-level information</b> with headlines, a news section, and a calendar underneath. Additionally, a messaging chat feature is available to use for community members to send emails, inquiries, and feedback.</p>
                        <p>The topic cards are placed under the fold, meaning users need to scroll down before discovering them. This design choice could be SPS sacrificing content visibility for readability, despite the use of attention-grabbing colours and guiding icons on the cards.</p>
                        <img class="asset-caption" src="/img/SPS/Audit2.png" alt="Image of SPS website footer"></img>
                        <p class="caption">SPS website footer</p>
                        <p>The footer contains lists of external links for contact information, social media accounts, and more quick links to resource pages. Alerts are positioned at the top and bottom of the homepage, with a convenient “scroll to top” button placed at the footer for quick navigation. Access to the staff website is granted through an external link, leading to a separate tab for log-in.</p>
                        <p>Notable changes since the website redesign include placing family-orientated information upfront and offering support for diverse language backgrounds through two drop-down menus for changing the website's displayed language.</p>
                        <img class="asset-caption" src="/img/SPS/Audit3.png" alt="Image of SPS drop-down menus for selecting schools and interface language"></img>
                        <p class="caption">Drop-down menus for all schools and languages via Google Translate</p>
                        <p>SPS made these adjustments to their information hierarchy presumably from observing how traffic is directed on their website. SPS emphasises that students and families come first, prioritising their needs when uploading digital content and making website modifications.</p>
                    <h2>Opportunity Areas</h2>
                        <p>Based on SPS user research, the <a class="link" href="https://www.seattleschools.org/web/project-overview/#:~:text=Key%20Redesign%20Priorities,link%20work%20well." target="_blank" rel="noopener noreferrer">key redesign priorities</a> include:</p>
                        <ul>
                            <li><b>Navigation:</b> Improve navigation accessibility.</li>
                            <li><b>Content and Design:</b> Present needed resources for students and families.</li>
                            <li><b>Visuals and Icons:</b> Use imagery and video for finding information.</li>
                            <li><b>Language Support:</b> Eliminate confusion through accurate translations.</li>
                            <li><b>Don’t Change Everything:</b> Maintain working, functional features.</li>
                        </ul>
                        <p>With this list, there are several critiques revolving website design that can be highlighted in several pages of the SPS website:</p>
                        <img class="asset" src="/img/SPS/Audit4.png" alt="Image of news section on SPS homepage"></img>
                        <p>While information hierarchy is not the issue here, there could be potential information overload with the “View More” button being distant from the cards. A placeholder or default cover image is used for several of the articles, but the dark teal green diverges from the primary blue from the existing design system.</p>
                        <p>Narrow card gutters, large side margins, and the combination of “block spacers” and separators also contribute to the excessive white space on the homepage, making the centered content and text look cluttered.</p>
                        <img class="asset" src="/img/SPS/Audit5.png" alt="Image of SPS enrollment page"></img>
                        <p>A current issue seen across SPS information pages is inconsistency in HTML/CSS elements and components. Establishing consistency among frequently used components, such as cards and text styling, through proper padding and margins, would enhance the website’s aesthetic while reinforcing the school district’s branding.</p>
                        <p>The irregular spacing of text makes following text difficult, and challenging to scan pages. Heading styles are seen merged into one (e.g., h2.h4), and font styling conflicts are present across the page that deviate from left-alignment web standards.</p>
                        <p>Finally, the website is not fully optimised for mobile devices, shown by the navbar being squeezed and no right margin on some pages.</p>
                        <img class="asset-caption" src="/img/SPS/Audit6.png" alt="Image of SPS website on mobile device"></img>
                        <p class="caption">Homepage struggles with narrow mobile viewports</p>
                </div>
                <div class="design-process">
                    <h1>Design Process</h1>
                    <h2>Investigations</h2>
                        <p>Given that SPS is a school district, our team first looked at websites from other school districts that we had attended. Drawing from past personal experiences as students helping our parents, during which we assisted our parents in navigating those websites, we identified common pages and functions that we hypothesised to be the most frequently used on the homepage:</p>
                        <img class="asset" src="/img/SPS/Pages.png" alt="Most used features on homepage"></img>
                        <p>The <b>calendar</b> and <b>news</b> sections hold highly sought out information that parents seek throughout the school year, such as information about days off and district-wide events. The <b>school directory</b> on the homepage is a prioritised feature for locating individual schools and obtaining further information for student needs. These sections are already present on SPS’ homepage, proving to be very valuable for families to use.</p>
                        <img class="asset-caption" src="/img/SPS/JourneyMap.png" alt="Imagined workflow with needed pages, actions, and features"></img>
                        <p class="caption">Imagined workflow with needed pages, actions, and features</p>
                        <p>Beyond the realm of education, our team also examined well-established websites to learn from best practices and validate design choices. We noted insights and patterns in their visual and information hierarchy that we wanted to incorporate for our redesign:</p>
                        <img class="asset" src="/img/SPS/Analysis.png" alt="Analysis of the British Museum, Nordstrom, and Discord's websites"></img>
                        <p>Each website effectively established their branding through a well-defined information hierarchy, all serving specific purposes. Whether it involved planning a visit, making purchases, or downloading an application, it made our team reflect on the purpose of our redesign: to <b>streamline information</b> and <b>enhance accessibility</b>.</p>
                    <h2>User Personas</h2>
                        <p>Seeing that students and families come first in SPS’ mission statement, it is crucial to understand the diverse needs and backgrounds of the primary audience for an inclusive and user-friendly website. With a mainstream persona and two distinct diverse personas, we practised inclusive design for achieving a scalable product:</p>
                        <img class="asset" src="/img/SPS/Personas.png" alt="Mainstream persona attributes"></img>
                        <p>Considering that most adults and lower-income families might rely on phones as their device of choice, mobile responsiveness is <i>highly</i> important to get right in our redesign. Likewise, having translation services and resources would support the communities of multilingual students and families that attend SPS.</p>
                    <h1>Making the Design System</h1>
                    <h2>Supporting the Vision</h2>
                        <p><a class="link" href="https://www.seattleschools.org/web/project-overview/#:~:text=Some%20of%20these,visit%20our%20sites." target="_blank" rel="noopener noreferrer">Recent documentation on SPS’ website redesign</a> listed priorities on updating the <b>font, size, and scale</b> of webpage headlines, creating dropdown menus for <b>quick navigation to school website pages</b>, and making sure it is accessible for <b>web readers regardless of device</b>.</p>
                        <p>Keeping the integrity of their vision and design, our team promotes accessibility by enhancing the mentioned dropdown menus and simplifying the typography used across their website, while initially adhering to their design system colours. This was mainly done by adjusting their quick links and topic cards sections:</p>
                        <img class="asset-caption" src="/img/SPS/Wireframes.png" alt="Image of wireframe from current design system colours"></img>
                        <p class="caption">Experimental colour system from current SPS redesign</p>
                        <p>We experimented with new colours for the homepage, adding high contrast cards and tiles for a uniform look. As for page layout, we wanted to put a carousel for news above the topic cards and the fold for parents to have updated information within their schools and district.</p>
                        <img class="asset-caption" src="/img/SPS/Wireframes2.png" alt="Image of low-fidelity homepage screens"></img>
                        <p class="caption">Low-fidelity homepage screens</p>
                        <p>Moreover, SPS has a calendar page that only compiles a list of key dates to scroll through, so we planned to make a calendar visualisation for an engaging user experience.</p>
                        <img class="asset-caption" src="/img/SPS/CalendarD.png" alt="Image of draft calendar page iterations"></img>
                        <p class="caption">Draft calendar page iterations</p>
                    <h2>Incorporating Feedback</h2>
                        <p>A significant challenge encountered during the redesign process revolved around simplifying the colour palette. Our original design system had <i>way too many</i> colours, particularly neutral colours, leading to individual colours losing their intended purposes. This became problematic when integrating colours into our interactive components and posed usability issues.</p>
                        <p>While refining our redesign’s colour palette, the reworked colour scheme ensured that each hue served distinct purposes and recorded in its documentation. This added coherence in our design choices in how components (e.g. buttons) changed states and where they were placed.</p>
                        <img class="asset-caption" src="/img/SPS/RefineColours.png" alt="Image of refining redesign colours"></img>
                        <p class="caption">Narrowing down colours for SPS’ redesign</p>
                        <p>Over time, we transitioned from using black to a soft off-black as a primary colour, as pure black proved overwhelming in our low-fidelity wireframes. Instead, black was used sparingly for the header and footer where it draws attention to descriptors and information links.</p>
                        <img class="asset-caption" src="/img/SPS/DesignSystem.png" alt="Image of the finalised design system"></img>
                        <p class="caption">Documentation of finalised colours and typography</p>
                        <p>Emphasising high-contrast elements against an off-black background directed users’ attention towards the prioritised dropdown options, welcoming banner, and information cards. On desktop, it guided users in tracking their cursors on the page, evident in hover states for outlined cards and underlined breadcrumb text.</p>
                        <p>Streamlining web content came from reducing text and consistent imagery. Additionally, markers such as outlined arrows and filled icons helped users navigate to where they want to go.</p>
                        <img class="asset-caption" src="/img/SPS/Homepage.gif" alt="Walkthrough of remodeled SPS homepage"></img>
                        <p class="caption">Remodeled SPS homepage</p>
                        <p>The secondary colours were used to provide visual clarity through accenting images and outlining page elements. These design choices add further contrast than the current white-background web design.</p>
                        <img class="asset-caption" src="/img/SPS/Calendar.gif" alt="Walkthrough of remodeled About Us and Calendar page"></img>
                        <p class="caption">Exploring About Us and Calendar page</p>
                </div>
                <div class="takeaways">
                    <h1>Takeaways</h1>
                        <p>This course introduced me to the importance of design systems and how they develop over time. Trial and error, time, and confidence lead to defining an applicative design system and deliverable.</p>
                        <p>Even though I was familiar with the entire research process, it was challenging to incorporate organisational values and philosophy into visuals and ideas. The learning process felt steep, but motivated me into exploring plenty of design systems from websites and video games that I highly appreciate.</p>
                        <img class="asset-caption" src="/img/SPS/Calendar.gif" alt="Walkthrough of remodeled About Us and Calendar page"></img>
                        <p class="caption">Making a design system influenced by video games</p>
                        <p><b>Documentation</b> was a key concept I learned to make sure colours and text were being used appropriately, and even helped me personally in the making of <a class="link" href="https://jdho-545e4.web.app/projects/moments">Moments</a>. Having guidelines and clear descriptions records everything for any team member, old and new, to be on the same page. It also eases the handoffs to developers, giving structure and efficiency in the work involved.</p>
                        <p>Design systems are built off intentions to make pieces cohere with one another. It finds a balance between creativity and structure while incorporating feedback from users and outside perspectives. It is about <i>people</i>, understanding their problems, and getting people to adopt design systems as a result. </p>
                </div>
                <div class="conclusion">
                    <h1>Thanks for reading!</h1>
                    <p>Check out the <a class="link" href="https://www.figma.com/proto/eJuw7abJWeGMeNAraDNfP2/John-Ho's-Portfolio?page-id=1416%3A6604&type=design&node-id=1421-7879&viewport=1164%2C123%2C0.21&t=UjaX1vtzGHHybVLj-1&scaling=scale-down&starting-point-node-id=1421%3A7879&mode=design" target="_blank" rel="noopener noreferrer">desktop prototype</a> and <a class="link" href="https://www.figma.com/proto/eJuw7abJWeGMeNAraDNfP2/John-Ho's-Portfolio?page-id=1416%3A5926&type=design&node-id=1425-9071&viewport=-1812%2C-775%2C0.3&t=kU32SwYd1O3BeeQ8-1&scaling=min-zoom&starting-point-node-id=1425%3A9071&mode=design" target="_blank" rel="noopener noreferrer">mobile prototype</a> here!</p>
                </div>
            </section>
        </main>
    )
}

export default SPS;