import React from "react";

function Moments() {
    return (
        <main>
            <section class="col-12 page d-flex align-items-center justify-content-center">
                <div class="container">
                    <div class="banner row color-1">
                        <div class="col-md-6 justify-content-center">
                            <h1 class="title align-items-center">Moments</h1>
                            <h1 class="subtitle">An app for sharing and discovering music organically.</h1>
                        </div>
                        <div class="col-md-6 justify-content-center">
                            <img class="asset" src="/img/MomentsMockup.png" alt="Moments preview screens"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section class="page col-7">
                <div class="summary row">
                    <div class="col-md-8">
                        <h1>Project Summary</h1>
                            <p>For a senior capstone project, I led UX research and did UI design within a team of 4 members to develop <i>Moments</i>, our upcoming app that connects users through sharing and discovering music through a map interface to promote discovering new music from other people.</p>
                            <p><i>Moments</i> was created to see what people are listening to around the world and expand their music taste as a result, on top of making an impact on the map by sharing their own. Our group believes that <i>Moments</i> should embody <b>real music recommendations from real people</b>, letting anyone get involved in the exchange of music.</p>
                            <p>Through the support of our instructors and multiple stages of user testing and research, this is how <i>Moments</i> was made from the very beginning to our ongoing development.</p>
                        <h1 class>Project Goals</h1>
                        <ul class="goals">
                            <li>Address motives and pain points in the music discovery process</li>
                            <li>Provide users autonomy to find and share music among other listeners</li>
                            <li>Practise ethical research and inclusive design</li>
                            <li>Draft our app across two course quarters, and continue developing to release by end of 2023</li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h2>Members</h2>
                            <ul>
                                <li>John Ho · UI/UX Research, UI Design</li>
                                <li>Takumi Shimada · PM, UI Design</li>
                                <li>Marina Wooden · Full-stack Dev</li>
                                <li>Hamda Hassan · Front-end Dev</li>
                            </ul>
                        <h2>Timeline</h2>
                            <p>Jan 2023 - Ongoing</p>
                        <h2>Tools</h2>
                            <p>Figma, Illustrator, Expo Go, ReactJS, React Native, DaVinci Resolve</p>
                        <h2>Deliverables</h2>
                            <p><a class="link" href="https://youtu.be/J7qUZrNtofc" target="_blank" rel="noopener noreferrer">Video</a></p>
                            <p><a class="link" href="" target="_blank" rel="noopener noreferrer">App</a></p>
                    </div>
                </div>
                <div class="background">
                    <h1>Background</h1>
                    <p>The current state of music discovery heavily relies on algorithmic methods, which have led to users feeling restricted or isolated in their music taste. There is innate <b>gender imbalance</b> and <b>popularity biases</b> within the algorithm system, shadowing diverse artists and creating an echo chamber within recommendations. There are many pain points about the algorithm we noted from user interviews and surveys:</p>
                    <img class="asset" src="/img/Moments/PainPoints.png" alt="Pain Points"></img>
                    <p>These initial insights lead to our problem statement:</p>
                </div>
                <div class="hmw-statement">
                    <h2>How might we <span class="green">promote music discovery for college students</span> to <span class="blue">combat restrictive recommendation algorithms</span> and <span class="purple">foster expended music tastes</span>?</h2>
                </div>
                <div class="research">
                    <h1>Research Findings</h1>
                    <p>Literature research suggests that <u>organic music consumption</u> promotes more diverse music tastes, fostering a richer user experience and intimate connection with music recommendations. This concept was our stepping stone in envisioning our app design and addressing algorithmic flaws in music recommendations.</p>
                    <img class="asset" src="/img/Moments/Organic.png" alt="Organic music consumption"></img>
                    <p>From <b>28 survey respondents</b> and <b>10 interviews</b>, there was high interest in discovering new music to enjoy with the help of cross-referencing different apps (e.g. <i>Spotify</i> and <i>YouTube</i>). However, users encounter songs that they have already listened to in shuffled playlists or recommendations. We also highlighted that <u>friends and online communities</u> were a major source of music recommendations.</p>
                    <img class="asset" src="/img/Moments/Music.png" alt="Two people connected by music"></img>
                    <p>With <u>face-to-face music recommendations</u> being a memorable and effective way to share music, intimacy and familiarity enables finding enjoyable music from someone else. These social interactions allow people to connect and express their unique music taste intimately, offering a conversation for both musicianship and personal identity. With this, personal relationships and communities fuel discussions and enjoyment in sharing music, and the positive impacts of organic music consumption foster diverse music taste as a result.</p>
                </div>
                <div class="analysis">
                    <h1>Competitive Analysis</h1>
                    <p>Our competitors come from three major categories: Social Media for networking, Music Streaming for listening to music, and Music Discovery for finding new music.</p>
                    <img class="asset" src="/img/Moments/Competitors.png" alt="Moments' competitors"></img>
                    <p><i>Instagram</i> and <i>TikTok</i> are platforms where music can reach global status through virality, whereas <i>Reddit</i> and <i>last.fm</i> are examples of hubs where music is discovered. And with sharing music being as easy as sending a URL link or showing a song on your phone, established social media platforms were our main competitors in users encountering music quickly.</p>
                    <p><i>iTunes</i>, <i>Spotify</i>, and <i>YouTube Music</i> are the trilogy when it comes to streaming music. All three platforms have algorithms that select music and artists based on a mixture of listening history and popularity. Recent listening, songs that are most replayed, time spent on a playlist, liked and favorited songs, anything trending on Billboard or any music charts, it all gets compiled by the algorithm to give you <i>familiar</i> content. We saw this as a major pain point with using algorithmic suggestions to discover <i>new</i> music to enjoy.</p>
                    <img class="asset-caption" src="/img/Moments/Algorithm.png" alt="YouTube Music and Spotify algorithmic recommendations"></img>
                    <p class="caption">YouTube Music and Spotify curating recommendations based on my history</p>
                </div>
                <div>
                    <h2>Drawing Inspiration</h2>
                    <p>Seeing how social media plays a crucial role in connecting listeners and artists, our team examined features and successes of social media platforms to draw into our own app:</p>
                    <img class="asset" src="/img/Moments/Analysis.png" alt="Appeals to BeReal, Instagram, and Discord"></img>
                    <p>With Discord syncing Spotify streaming to a profile’s status, and the new addition to Instagram having the option to put a song as a note, we knew other platforms were exploring interactions around music.</p>
                    <img class="asset" src="/img/Moments/StatusH.png" alt="Song statuses on Discord and Instagram"></img>
                    <p>This further validated the concept of <u>wanting to share music or seeing what others are listening to</u>.</p>
                </div>
                <div class="opportunities">
                    <h2>Opportunity Areas</h2>
                    <p><i>Moments</i> was made to be <u>transparent</u> in who is recommending music, and let the users decide for themselves on the music they want to check out. There is no algorithm as well with shared songs being purely user-dependent, and people can sate their curiosity on what is being listened to by whom and where.</p>
                    <img class="asset" src="/img/Moments/Goals.png" alt="Goals of Moments"></img>
                    <p>Music is intimate, and we see <i>Moments</i> being an outlet for people to share that. We aim for authenticity in users’ recommended songs, not having to worry about appealing to others.</p>
                </div>
                <div class="personas">
                    <h2>Personas</h2>
                    <p>Based on our user research, we created a few user personas that demonstrated the pain points and motivations of finding new music to listen to.</p>
                    <img class="asset" src="/img/Moments/PersonasV.png" alt="Personas"></img>
                    <p>Whether it be close friends, the passionate fan, content creator, or knowledgeable musician, we envisioned <i>Moments</i> to let users explore both music <i>and</i> people with their music recommendations.</p>
                </div>
                <div class="design-process">
                    <h1>Design Process</h1>
                    <p>Our motivations came from personal experiences alongside others’ with <i>Moments</i> being an app that offers users autonomy and choice in their music-discovery process, allowing them to find and share music that is <u>meaningful</u> to them.</p>
                    <p>Being able to explore profiles and a world map, this connects users locally and globally if a song piques their interest. The visual pins emulate dropping a pin on the map, emphasising the location aspect of what songs are being listened to within a district.</p>
                    <div class="lofi-prototype">
                        <h2>Low-Fidelity Prototype</h2>
                        <p>In our user testing, we asked our participants to perform the following tasks to gauge usability and study their exploration:</p>
                        <img class="asset" src="/img/Moments/Tasks.png" alt="User testing tasks"></img>
                        <p>Here were some of the workflows visualised from Figma:</p>
                        <img class="asset-caption" src="/img/Moments/WF1.gif" alt="Low-fidelity prototype GIF of exploring local map page posts"></img>
                        <p class="caption">Exploring local map page posts</p>
                        <img class="asset-caption" src="/img/Moments/WF2.gif" alt="Low-fidelity prototype GIF of selecting a song to drop a Moment"></img>
                        <p class="caption">Selecting a song to drop a Moment</p>
                        <img class="asset-caption" src="/img/Moments/WF3.gif" alt="Low-fidelity prototype GIF of a notifications page and exploring a profile"></img>
                        <p class="caption">Notifications page and exploring a profile</p>
                    </div>
                    <div>
                        <h2>Giving Direction</h2>
                        <p>Across <b>6 wireframe testers</b>, the average time to go through all the workflows was <b>5 minutes</b>. Since the interface was greyscale, the icons and buttons were ambiguous in navigating across pages. Specifically, the upper right pin icon was not clear in the action of searching and dropping a song <i>until</i> they saw their pin isolated on the map. Additionally, the two magnifying glass icons also served different purposes, one to search location while the other was a general search query, which caused slight confusion.</p>
                        <img class="asset-caption" src="/img/Moments/WF4.png" alt="Low-fidelity prototype image of duplicate icons"></img>
                        <p class="caption">Icons had to be distinctive to avoid confusion</p>
                        <p>However, the onboarding process of making an account and using the navigation bar had familiarity to other social media apps. The notifications and profile pages were well-received with its information hierarchy, and our testers understood the intentions behind the prototype of exploring the map page and profiles.</p>
                        <img class="asset" src="/img/Moments/Testing.png" alt="Successes and pain points from user testing"></img>
                    </div>
                    <div class="hifi-prototype">
                        <h2>High-Fidelity Prototype</h2>
                        <p>With a refined prototype and more interactive features, the app cemented the importance of interacting with other users in many ways. The familiarity of conventions and interfaces contributed to an easier learning curve in exploring our app, and we made changes to the UI language for clarity.</p>
                        <img class="asset-caption" src="/img/Moments/MF1.gif" alt="High-fidelity prototype GIF of exploring a post’s location and profile"></img>
                        <p class="caption">Exploring a post’s location and profile</p>
                        <img class="asset-caption" src="/img/Moments/MF2.gif" alt="High-fidelity prototype GIF of editing profile and followers list"></img>
                        <p class="caption">Editing profile and followers list</p>
                        <img class="asset-caption" src="/img/Moments/MF3.gif" alt="High-fidelity prototype GIF of dropping a Moment on the map"></img>
                        <p class="caption">Dropping a Moment on the map</p>
                        <p>Testers explored options to make their account public or private, setting their own posts to be exclusive to followers instead of the general public.</p>
                    </div>
                    <div>
                        <h2>Making the Live App</h2>
                        <p>I was primarily a tester for our developers to bugfix our Expo Go Simulator version of Moments. Currently, <i>Moments</i> is compatible for iOS devices so my testing can only be done on a MacBook. I documented bugs in its onboarding process, suggested styling changes (e.g. margin and spacing), and mapped out transitions between screens.</p>
                        <img class="asset-caption" src="/img/Moments/HF1.gif" alt="Home map page"></img>
                        <p class="caption">Home map page</p>
                        <img class="asset-caption" src="/img/Moments/HF2.gif" alt="Exploring someone’s Moment and profile"></img>
                        <p class="caption">Exploring someone’s Moment and profile</p>
                        <img class="asset-caption" src="/img/Moments/HF3.gif" alt="Viewing an active Moment on the Moments page"></img>
                        <p class="caption">Viewing an active Moment on the Moments page</p>
                        <img class="asset-caption" src="/img/Moments/HF4.gif" alt="Dropping a Moment at my current location"></img>
                        <p class="caption">Dropping a Moment at my current location</p>
                    </div>
                </div>
                <div class="takeaways">
                    <h1>Takeaways and Next Steps</h1>
                    <p>With Moments being my biggest project to date, it has taught me so much about applicable app design and product development:</p>
                    <ul>
                        <li>I learned how to <b>create effective survey questions and conduct user interviews</b> to gather user insights and organise them on mind maps using Miro and Figma.</li>
                        <li>I <b>synthesised points of interest for the team to analyse</b> for multiple iterations of Figma workflows, as well as simulated Expo Go prototypes. </li>
                        <li>I <b>facilitated project management</b> through organising pages upon pages of affinity maps, research insights, user validation, and compiled user research.</li>
                    </ul>
                    <p>Being involved in every stage of <i>Moments</i> was simply fulfilling for me, being able to apply what I have learned in design methods and UI / UX courses from university. The team submitted our project and demo video to our <a class="link" href="https://ischool.uw.edu/capstone/projects/2023/moments" target="_blank" rel="noopener noreferrer">university’s capstone website</a>, and now await for iOS TestFlight’s approval. Moving forward, the team is continuing discussions on the app’s marketability, revenue strategies, and establishing branding to commercialise our app.</p>
                </div>
                <img class="asset" src="/img/Moments/Preview.png" alt="Moments screens"></img>
                <div class="conclusion">
                    <h1>Thanks for reading!</h1>
                    <p>Check out our app here: <a class="link" href="https://www.yourmoments.app/" target="_blank" rel="noopener noreferrer">https://www.yourmoments.app/</a></p>
                    <div className="d-flex justify-content-center video-container">
                        <iframe width="800" height="450" src="https://www.youtube.com/embed/GZN_gu3FBb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default Moments;