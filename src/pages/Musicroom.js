import React from "react";

function Musicroom() {
    return(
        <main>
<section class="col-12 page d-flex align-items-center justify-content-center">
                <div class="container">
                    <div class="banner row color-1">
                        <div class="col-md-6 justify-content-center">
                            <h1 class="title align-items-center">MusicRoom</h1>
                            <h1 class="subtitle">A networking app for collaborating college musicians.</h1>
                        </div>
                        <div class="col-md-6 justify-content-center">
                            <img class="asset" src="/img/Musicroom/Preview.gif" alt="GIF preview of MusicRoom"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section class="page col-7">
                <div class="summary row">
                    <div class="col-md-8">
                        <h1>Project Summary</h1>
                            <p><i>MusicRoom</i> is an informal networking app for college musicians seeking to connect with other musicians on campus, fostering creativity and collaboration in the music creation process.</p>
                            <p>This is a story about innovatively connecting music creatives and designing an interactive prototype to accompany it.</p>
                        <h1 class>Project Goals</h1>
                        <ul class="goals">
                            <li>Explore the design method process to produce an effective design solution</li>
                            <li>Be introduced to visual design and using Figma</li>
                            <li>Learn how to conduct preliminary user research and usability tests for insightful feedback on wireframes and prototypes</li>
                            <li>Refine design interfaces for a finished deliverable during 1-month long sprint</li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h2>Members</h2>
                            <ul>
                                <li>John Ho</li>
                                <li>Jonathan Shechtman</li>
                                <li>Takumi Shimada</li>
                                <li>Marina Wooden</li>
                            </ul>
                        <h2>Timeline</h2>
                            <p>February 2022 - March 2022</p>
                        <h2>Tools</h2>
                            <p>Figma, Adobe XD, Adobe Illustrator, PowerDirector</p>
                        <h2>Deliverables</h2>
                            <p><a class="link" href="" target="_blank" rel="noopener noreferrer">High-Fidelity Prototype</a></p>
                            <p><a class="link" href="https://youtu.be/J7qUZrNtofc" target="_blank" rel="noopener noreferrer">Product Video</a></p>
                    </div>
                </div>
                <div class="background">
                    <h1>Background</h1>
                        <p>It is significantly more challenging to establish connections with college musicians for those who are not part of a music school, which can alienate other music enthusiasts pursuing careers in different fields. However, music plays a significant role in our lives, serving as a powerful motivator that brings people together.</p>
                        <img class="asset" src="/img/Musicroom/Problem.png" alt="Image of problem area"></img>
                        <p>Many of the current music-sharing social media platforms suffer from oversaturation of posts, which limits exposure to potential collaborators or does not prioritize the primary demographic of college students. This leads to the following problem statement:</p>
                        <div class="hmw-statement">
                            <h2>How can we <span class="green">design a scalable app</span> that <span class="blue">allows college musicians to connect with one another</span>, <span class="purple">fostering inspiration and collaboration</span>?</h2>
                        </div>
                </div>
                <div class="research">
                    <h1>User Research</h1>
                        <p>To understand the motives and needs of college musicians, we conducted <b>5 semi-structured interviews</b> from University of Washington students. The main findings across respondents were:</p>
                        <img class="asset" src="/img/Musicroom/Research.png" alt="Image of user research findings"></img>
                        <p>This gave direction for ideating user personas and initial wireframes as we emphasised these focus values of wanting to find a specific community of musicians to connect or collaborate with.</p>
                </div>
                <div class="personas">
                    <h2>Persona Development</h2>
                        <p>Based on our user research, we developed a user persona that demonstrates our target demographic, their goals, and pain points.</p>
                        <img class="asset" src="/img/Musicroom/Persona.png" alt="Image of user persona for Musicroom"></img>
                    <h2>Why Informal Networks?</h2>
                        <p>When asked about networking platforms (e.g., LinkedIn) as an option to find collaborators, they reacted negatively and claimed that, "LinkedIn puts a lot of pressure on students to appear professional," creating a stressful environment of competitiveness and social comparison.</p>
                        <p>Therefore, given our mission to foster a creative space for musicians, our solution should be informal and encourage students to be authentic with themselves and others.</p>
                </div>
                <div class="analysis">
                    <h1>Competitive Analysis</h1>
                        <p>A competitive analysis was conducted involving four different apps: <b>Spotify</b> and <b>Soundcloud</b>, two of the most popular music streaming apps; <b>Instagram</b>, often used for informal networking; and <b>Vampr</b>, a social networking app for musicians.</p>
                        <img class="asset" src="/img/Musicroom/Analysis.png" alt="Image of competitive analysis for Musicroom"></img>
                        <p>Vampr was our direct competitor, using Tinder’s model of swiping to meet musicians around your location and was closest to our app’s mission of finding collaborators. With a similar premise to <i>MusicRoom</i>, we examined Vampr’s features as an existing networking app for musicians.</p>
                        <img class="asset" src="/img/Musicroom/Vampr.png" alt="Image of Vampr's pros and cons"></img>
                </div>
                <div class="design-process">
                    <h2>Product Structure</h2>
                        <p>From our researched opportunity areas, it was time to ideate MusicRoom’s main features and product structure.</p>
                        <img class="asset-caption" src="/img/Musicroom/ProductStructure.png" alt="Image of Musicroom's workflow diagram"></img>
                        <p class="caption">MusicRoom's workflow diagram</p>
                        <p>Users can <b>post various types of content</b>, such as videos, audio files, and images. They can also browse recommended posts and discover musicians to collaborate with, as well as view posts from accounts they follow. Additionally, users have the ability to <b>filter musicians</b> based on their school, genres, proficiency, and personal skills they wish to highlight. Finally, users can contact each other through <b>chat messaging</b> and personalise their displayed profiles.</p>
                    <h2>Identity Verification</h2>
                        <p>To ensure that users are exclusively college students, we require them to have a college email domain for login. This means that once their school email expires upon graduation, users will no longer have access to their account.</p>
                        <img class="asset" src="/img/Musicroom/Domain.png" alt="Image of example .edu email domain"></img>
                        <p>This approach enables us to verify users' student status, identify the colleges they attend, and tailor recommendations accordingly. Additionally, it allows us to analyse user populations across different schools for further research.</p>
                    <div class="wireframes">
                        <h2>Wireframes</h2>
                        <img class="asset-caption" src="/img/Musicroom/Wireframes.png" alt="Image of Musicroom's wireframes"></img>
                        <p class="caption">Recommendations Feed and Song Player pages</p>
                    </div>
                    <div class="lofi-prototype">
                        <h1>Low-Fidelity Prototype</h1>
                            <p>Using Adobe XD, an <a class="link" href="https://xd.adobe.com/view/dfde6530-9862-46ef-9d49-c7e4b421d4cf-8a8d/?fullscreen" target="_blank" rel="noopener noreferrer">interactive mockup</a> was made for user and usability testing.</p>
                            <img class="asset" src="/img/Musicroom/Mockup.png" alt="Image of Musicroom mockup screens"></img>
                    </div>
                    <h2>Usability Testing</h2>
                        <p>We gathered feedback from 3 participants in diverse musical backgrounds:</p>
                        <img class="asset" src="/img/Musicroom/Testing.png" alt="Image of Musicroom prototype testers' backgrounds"></img>
                        <p>We wanted to determine the users’ ability to perform a set of tasks using the prototype. After each task, we asked them about their experience, and if there were any challenging pain points present.</p>
                        <img class="asset" src="/img/Musicroom/Tasks.png" alt="Image of Musicroom prototype tasks for testers"></img>
                    <h2>Opportunity Areas</h2>
                        <p>Across user testing, we recorded features and designs that would be implemented and improve the next iteration of prototypes:</p>
                        <img class="asset" src="/img/Musicroom/Opportunity.png" alt="Image of added Musicroom features"></img>
                    <h2>Design Change #1 - Activity Status and Messages</h2>
                        <p>A dot has been added for an activity status next to a profile picture in the messages feature; green being active, grey being away. The messages page for the prototype simulates seeing chat logs from other users.</p>
                        <img class="asset" src="/img/Musicroom/DesignChange1.png" alt="Image of first Musicroom design change"></img>
                    <h2>Design Change #2 - Editing Profile</h2>
                        <p>An “Editor Mode” screen has been added to preview any edits made to change to your profile. It also includes a character account for the “About” section.</p>
                        <img class="asset" src="/img/Musicroom/DesignChange2.gif" alt="GIF of second Musicroom design change"></img>
                    <h2>Design Change #3 - Selecting Filters</h2>
                        <p>Instead of limiting the search to one filter per category, users can combine up to three tags to further narrow down their searches. All of the filter categories (i.e., skills, genre, and school) are displayed on one screen.</p>
                        <img class="asset" src="/img/Musicroom/DesignChange3.png" alt="Image of third Musicroom design change"></img>
                    <h2>Design Change #4 - Messaging Users</h2>
                        <p>Because connectivity is a central aspect of MusicRoom, we made the message button visible to users without needing to follow them.</p>
                        <img class="asset" src="/img/Musicroom/DesignChange4.png" alt="Image of fourth Musicroom design change"></img>
                    <h2>Design Change #5 - Login Screen</h2>
                        <p>In enhancing the prototype’s user experience, we added a login screen and made sure that users understood that the app requires a college email to log into MusicRoom.</p>
                        <img class="asset" src="/img/Musicroom/DesignChange5.png" alt="Image of fifth Musicroom design change"></img>
                    <div class="hifi-prototype">
                        <h1>High-Fidelity Prototype</h1>
                            <p>Putting it all together, our design solution was made: <i>MusicRoom</i>, an app for musicians where <b>collaboration creates innovation</b>.</p>
                            <img class="asset" src="/img/Musicroom/Final1.gif" alt="GIF of Musicroom login and home page"></img>
                            <img class="asset" src="/img/Musicroom/Final2.gif" alt="GIF of Musicroom search function"></img>
                            <img class="asset" src="/img/Musicroom/Final3.gif" alt="GIF of making new post on Musicroom"></img>
                            <img class="asset" src="/img/Musicroom/Final4.gif" alt="GIF of editing Musicroom profile"></img>
                            <img class="asset" src="/img/Musicroom/Final5.gif" alt="GIF of interacting with Musicroom posts"></img>
                            <img class="asset" src="/img/Musicroom/Final6.gif" alt="GIF of Musicroom messaging feature"></img>
                    </div>
                    <h1>Takeaways and Next Steps</h1>
                        <p>The prototype was the final deliverable for the design methods course, but our team did envision next steps if <i>MusicRoom</i> was continued:</p>
                        <img class="asset" src="/img/Musicroom/NextSteps.png" alt="Image of envisioned next steps for Musicroom"></img>
                        <p>Being an early project in my academic life, <i>MusicRoom</i> was an introductory step in my learning of design methods. The entire process of brainstorming, ideating, drafting, wireframing, all the “-ing” actions got me invested in learning how to design products on top of UI/UX research.</p>
                        <p><i>MusicRoom</i> has served as a milestone of being the derivative project before <a class="link" href="/projects/moments" rel="noopener noreferrer">Moments</a>, and special thanks to Jonathan for the video editing and supplying Adobe XD assets for the project.</p>
                </div>
                <div class="conclusion">
                    <h1>Thanks for reading!</h1>
                        <div className="d-flex justify-content-center">
                            <iframe width="800" height="450" src="https://www.youtube.com/embed/ifjUCkIiK2U?list=TLGGVrZYQ6rrPWcwMTEwMjAyMw" title="MusicRoom Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                </div>
            </section>
        </main>
    )
}

export default Musicroom;