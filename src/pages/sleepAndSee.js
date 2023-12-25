import React from "react";

function SleepAndSee() {
    return(
        <main>
            <section class="col-12 page d-flex align-items-center justify-content-center">
                <div class="container">
                    <div class="banner row color-1">
                        <div class="col-md-6 justify-content-center">
                            <h1 class="title align-items-center">sleep&see</h1>
                            <h1 class="subtitle">A web-based sleep journal and tracker for students.</h1>
                        </div>
                        <div class="col-md-6 justify-content-center">
                            <img class="asset" src="/img/sleep&seeMockup.png" alt="sleep&see mockup"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section class="page col-7">
            <img class="asset" src="/img/sleepandsee/Preview.png" alt="sleep&see preview"></img>
                <div class="summary row">
                    <div class="col-md-8">
                        <h1>Project Summary</h1>
                            <p>For a software development course, I was a lead researcher and UI designer in making a web application designed to be a sleep tracker and journal to promote getting proper sleep.</p>
                            <p>With an interactive calendar, notes feature, and a resources page, <i>sleep&see</i> is aimed to calculate hours of sleep and give visualisations in supplementing good sleep hygiene and quality.</p>
                            <p>Within a group of 5 peers, <i>sleep&see</i> was our month-long project and functional MVP to practice project development to address a real-world problem.</p>
                        <h1 class>Project Goals</h1>
                        <ul class="goals">
                            <li>Provide an interactive software product that aligns with a <a class="link" href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer">UN Sustainable Development Goal</a> (SDG)</li>
                            <li>Partake in a responsive web application through research, design, and front-end development</li>
                            <li>Understand various roles on software teams and practice effective collaborative work</li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h2>Members</h2>
                            <ul>
                                <li>John Ho · Researcher and UI/UX Designer</li>
                                <li>Claudine Dulay · UI Designer</li>
                                <li>Aaron Ho · Full Stack Developer</li>
                                <li>Brian Ho · Full Stack Developer</li>
                                <li>Takumi Shimada · Back End Developer</li>
                            </ul>
                        <h2>Timeline</h2>
                            <p>February 2023 - March 2023</p>
                        <h2>Tools</h2>
                            <p>Figma, ReactJS, React Native</p>
                        <h2>Deliverables</h2>
                            <p><a class="link" href="https://info442-christmas.web.app" target="_blank" rel="noopener noreferrer">Website</a></p>
                            <p><a class="link" href="https://github.com/UW-INFO442-WI23/christmas" target="_blank" rel="noopener noreferrer">GitHub Repo</a></p>
                    </div>
                </div>
                <div class="background">
                    <h1>Background</h1>
                    <p>In the early stages of project brainstorming, we contemplated various ways to better different facets of quality of life. This ranged from dieting, exercise and fitness, sleep, and interpersonal relationships. Choosing one as a focal point, we chose sleep to be our topic of interest for our project with our recognition that sleep has profound significance and impact in everybody’s daily lives.</p>
                    <p>Because of this, we emphasised the importance of sleep for the broader population while being in the lens of academic performance and overall productivity as university students.</p>
                    <img class="asset" src="/img/sleepandsee/Tired.png" alt="Tired student at desk"></img>
                </div>
                <div class="research">
                    <h2>Literature Research</h2>
                    <p>With <i>sleep&see</i> planned as a resource hub and sleep tracker, we had to synthesise academic papers and sources to guide the proposed design system and key features of the website. To identify pain points of our primary stakeholders of students, we gathered key statistics regarding sleep health and habits from young adults and university students:</p>
                    <img class="asset" src="/img/sleepandsee/Statistics.png" alt="Statistics surrounding poor sleeping habits across U.S. young adults and university students"></img>
                    <p>Furthermore, sleep health and hygiene pose a formidable challenge when attempting to propose comprehensive solutions. The causes underlying the sleep crisis among young adults are as varied as the individuals themselves. These factors extend beyond academic pressures and stress symptoms, encompassing lifestyle choices like excessive screen time and high caffeine consumption, which frequently lead to insufficient sleep and irregular sleep patterns.</p>
                    <p>This leads to our problem statement:</p>
                    <div class="hmw-statement">
                        <h2>How might we <span class="green">create an engaging website for college students</span> in order to <span class="blue">inform users on effective sleeping habits</span> and <span class="purple">enable better sleep health</span>?</h2>
                    </div>
                </div>
                <div class="personas">
                    <h2>Personas</h2>
                    <p>Based on our preliminary research, we created two foundational user personas that demonstrated the pain points and motivations of getting resources to aid in sleep health.</p>
                    <img class="asset" src="/img/sleepandsee/Personas.png" alt="sleep&see user personas"></img>
                    <p>Improving sleep health and quality comes from better knowledge of sleep practices and habits, which gives people control over their sleep health and care. <a class="link" href="https://docs.google.com/document/d/1FJ_o1PxaBvswqFaAFB2zztBmtLEb3RNsFuUcW87-Kyk/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Researching more on sleep health</a> enlightened us to share our new knowledge through our website and address many issues from different archetypes of users, letting <i>sleep&see</i> be a supplement in helping us achieve our primary UN SDG: “Ensure healthy lives and promote well-being for all at all ages.”</p>
                </div>
                <div class="opportunities">
                    <h1>Opportunity Areas</h1>
                    <p>To gain an understanding on how to approach bettering sleep quality and health, we investigated a handful of sleep app websites. Some applications can be synced to an external device (e.g. Apple Watch, mobile phone) and provide data visualisations which our group wanted to incorporate in our project.</p>
                    <img class="asset" src="/img/sleepandsee/App1.png" alt="Screenshot of sleep tracker app Rem"></img>
                    <p>Other sleep apps specialised in auditory features including background ambience noises, guided meditation, soothing audiobooks, and customisable sound settings. All of these applications had a mission of giving users control towards restful sleep, backed with sleep experts and techniques to help ease the mind.</p>
                    <img class="asset" src="/img/sleepandsee/App2.png" alt="Screenshot of sleep aid apps Sleepiest and Slumber"></img>
                    <p>While looking at these websites, we brainstormed reasons as to why someone would want to use <i>sleep&see</i>, and the initial features to supplement these points of interest as general opportunity areas for our website.</p>
                    <img class="asset" src="/img/sleepandsee/Opportunities.png" alt="sleep&see points of interest with respective web app features"></img>
                </div>
                <div>
                    <h2>Architecture and Specifications</h2>
                    <p>With <i>sleep&see</i> being made as a software solution, there were a few diagrams that were created to map the navigation and primary workflows of the website. Additionally, we explored frameworks for both our front-end design and back-end components that every member would be familiar with.</p>
                    <img class="asset" src="/img/sleepandsee/Structure.png" alt="sleep&see website structure"></img>
                    <p>Our tech stack used Google’s Firebase Hosting and Realtime Database to store data queries and user information for real time updates based on user input. Additionally, Firebase Authentication was used to register store accounts and login information on <i>sleep&see</i>, linked with Node.js.</p>
                    <img class="asset" src="/img/sleepandsee/Architecture.png" alt="sleep&see architecture"></img>
                    <p>For our front end, React and Bootstrap will be used to adjust accordingly to different devices and viewports for responsiveness, with standard HTML and CSS queries being used for website composition and editing content. Our calendar was made from scratch as opposed to importing a calendar library, hopefully letting us adjust the design and functionality of the calendar to our liking.</p>
                    <p>At this point, we confidently made a user flow chart and listed the functional requirements of our planned website for our month-long sprint project.</p>
                    <img class="asset" src="/img/sleepandsee/UserFlows.png" alt="sleep&see user flows"></img>
                    <p>Our priority levels from necessary components to nice-to-have features included:</p>
                        <h2>P0 (Highest priority):</h2>
                            <ul>
                                <li>Calendar page</li>
                                    <ul>
                                        <li>Users are able to input and view hours of sleep, returning all-time data in a monthly or weekly view</li>
                                        <li>Analyse numbers to form accompanying personalized insights</li>
                                    </ul>
                                <li>Login feature</li>
                                    <ul> 
                                        <li>Users are able to input and view hours of sleep, returning all-time data in a monthly or weekly view</li>
                                        <li>Analyse numbers to form accompanying personalized insights</li>
                                    </ul>
                            </ul>
                        <h2>P1 (Urgent):</h2>
                            <ul>
                                <li>Resouces pages</li>
                                    <ul>
                                        <li>Organised research and information as body content</li>
                                        <li>Infographics and supplementary graphs</li>
                                        <li>Embedded links for videos and websites</li>
                                    </ul>
                            </ul>
                        <h2>P0 (Highest priority):</h2>
                            <ul>
                                <li>Diary</li>
                                    <ul>
                                        <li>Text field for journaling daily, part of the calendar page</li>
                                        <li>Journal entries are viewable at any point</li>
                                    </ul>
                                <li>Data visualisations</li>
                                    <ul> 
                                        <li>Ring chart or bar graphs that compute analytics and trends of sleeping hours recorded</li>
                                    </ul>
                                <li>Sharing options</li>
                                    <ul> 
                                        <li>Generated QR code or unique URL for guest accounts or sharing results</li>
                                    </ul>
                            </ul>
                </div>
                <div class="design-process">
                    <h1>Design Process</h1>
                    <p>Our group started off with paper mockups and sketches to swiftly conceptualise features and content across our main pages. This gave a loose trajectory in how we wanted the website to look like for our developers, gauging doability with the tangible outlines.</p>
                    <img class="asset" src="/img/sleepandsee/Sketch.png" alt="Sketch prototypes of sleep&see pages"></img>
                    <p>It continued onto Figma, where we created a few iterations of our paper sketches into low-fidelity wireframes. This was where we experimented with colours and explored art assets, which helped establish our design system down the line. Typography and colour palette was paired with the imagery, taking inspiration from the researched sleep application websites.</p>
                    <img class="asset-caption" src="/img/sleepandsee/Draft1.png" alt="Sketch prototypes of sleep&see pages"></img>
                    <p class="caption">First version of a proposed sleep analysis page</p>
                    <h2>Making the Design System</h2>
                    <p>From our literary research, we noted that the colours <b>blue</b>, <b>green</b>, and <b>purple</b> were associated with <u>calmness and relaxation</u>. To add on, these colours had a general positive perception, linked with <u>positive responses and emotions</u>. We also wanted an enchanting background that was easy on the eyes, full of imagery that shows a serene night sky for unwinding the mind and improving sleep health.</p>
                    <img class="asset" src="/img/sleepandsee/DesignSystem.png" alt="sleep&see's website design system"></img>
                    <p>Our font choices of <b>M Plus Rounded 1c</b> with a fallback font of <b>Mulish</b> lets our text be rounded and bubbly, fashioning a soft appearance and conveying comfort. The colours and typography had to be contrasting and large enough for readability to reduce eye strain nonetheless, which simultaneously meets WCAG standards.</p>
                    <p>The usage of a gradient font enables user experiences for all, especially helpful for those with vision impairments, ADHD, or insomnia as it induces sleep with focused and attentive reading.</p>
                    <img class="asset-caption" src="/img/sleepandsee/Draft2.png" alt="Refined sleep&see home page"></img>
                    <p class="caption">Refined iteration of the home page design</p>
                    <h2>Testing and Acceptance Criterias</h2>
                    <p>For the back-end portion of <i>sleep&see</i>, the bulk of our work came from creating an interactive calendar component without an imported library. Engineering this calendar naturally came with internal user testing for the extensive search for bugs, forming a perspective of prioritising functionality over design.</p>
                    <img class="asset-caption" src="/img/sleepandsee/Calendar.png" alt="sleep&see's calendar and notes feature"></img>
                    <p class="caption">Quick glance of our calendar and its notes feature</p>
                    <p>Ultimately, every page and component has to load and respond quickly, so we created a table of acceptance criterias that would indicate successes of our website. Comprising the main features in a primary workflow, a <i>sleep&see</i> user should be able to:</p>
                    <ul>
                        <li>Use a Gmail or email to register a new sleep&see account</li>
                            <ul>
                                <li>Log in and out of said account freely</li>
                            </ul>
                        <li>Use the calendar feature to input sleep and wake times</li>
                            <ul> 
                                <li>Navigate through different months and days</li>
                                <li>Calculate average hours of sleep across a selected week</li>
                            </ul>
                        <li>Input and store notes within a text field inside a calendar day</li>
                            <ul>
                                <li>Retrieve and edit notes anytime under a registered account</li>
                            </ul>
                        <li>Navigate our resource page to access separate informational pages</li>
                            <ul> 
                                <li>Navigation leads to intended pages</li>
                                <li>Able to open embedded links and videos</li>
                            </ul>
                    </ul>
                    <img class="asset" src="/img/sleepandsee/TestingProtocol.png" alt="sleep&see's testing protocol for main features"></img>
                    <h2>Incorporating User Feedback</h2>
                    <p>Following the presentation of our low-fidelity prototypes and early development stages to various project groups and instructors within our class, a shared enthusiasm emerged for the direction of <i>sleep&see</i>. Asking for constructive feedback from fellow groups culminated ideas and design insights over our several stages of development:</p>
                    <img class="asset" src="/img/sleepandsee/Feedback.png" alt="Compiled feedback and suggestions for sleep&see during development"></img>
                    <p>The concept of providing an independent website to share information and advice to get better sleep resonated with everyone, and people loved hearing about the creation of our design system. Our group largely noted that people appreciated any supplementary visuals and images that added a layer of depth and visual appeal to our pages, giving us the idea to assemble defined assets to our informational pages.</p>
                    <img class="asset" src="/img/sleepandsee/Imagery.png" alt="Imagery used for sleep&see's content"></img>
                    <img class="asset" src="/img/sleepandsee/Infographics.png" alt="Infographics made for a sleep&see's resources page"></img>
                    <p>After a month of work, our group realised that many of the suggestions, as well as the expected data visualisations that we initially pitched, would be out of scope for our project. As a result, we solely focused on hosting a bug-free client and server with no bugs while using our main features, mainly the calendar and notes.</p>
                </div>
                <div class="takeaways">
                    <h1>Takeaways and Next Steps</h1>
                    <p>As someone involved in the design and front-end content of <i>sleep&see</i>, I experienced the conversation-like environment between designers and developers, managing ourselves in what was doable and not doable given a month.</p>
                    <p>I was responsive and observant to our group’s progress, and was looking for ways to implement feedback while main features were being developed. Our mission and priorities were set early on, which let us present a strong deliverable addressing the UN SDG of promoting good health and well-being to the public.</p>
                    <p><i>sleep&see</i> taught me how to <u>become an effective internal tester</u> with the complexity of building components from scratch on a hosted server. Looking at the console log, typing invalid text fields, refreshing data and pages, it felt like breaking apart a puzzle, meaningfully, to reverse engineer bugs and find ways to patch them.</p>
                    <img class="asset" src="/img/sleepandsee/Resting.png" alt="Illustrated person resting on desk"></img>
                </div>
                <div class="conclusion">
                    <h1>Thanks for reading!</h1>
                    <p>Check out <a class="link" href="https://info442-christmas.web.app" target="_blank" rel="noopener noreferrer">our website</a> and its <a class="link" href="https://github.com/UW-INFO442-WI23/christmas" target="_blank" rel="noopener noreferrer">GitHub repo here</a>!</p>
                    <p><i>sleep&see</i> presentation slide deck:</p>
                    <div className="d-flex justify-content-center">
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQw9tH4bipPZAQcsDF8YouonUArN3mMVMD3shhMb73TeYsRSdTZ-N2GvfxebTHTDoj5-xnT-61wgqxX/embed?start=true&loop=true&delayms=4000" frameborder="0" width="800" height="450" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SleepAndSee;