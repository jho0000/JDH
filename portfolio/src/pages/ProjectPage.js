import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json"

function ProjectPage () {
    const [pageData, setPageData] = useState() //Page data to use in the document
    const {projectid} = useParams(); //Use URL to know what data to load

    // load data based on URL given
    useEffect(() => {
        // look if projectId is inside data.json
        if (projectid in data) {
            setPageData(data[projectid])
        } else {
            console.log("idk redirect them") //redirect them
        }
    }, [projectid, data])

    if(pageData === undefined) {
        return (
            <main></main>
        )
    }

    console.log(pBreak(pageData.element))

    return (
        <main>
             <div class="banner fullscreen d-flex align-items-center justify-content-center">
                <div class="banner card col-10">
                    <div class="row">
                        <div class="card col-md-6 justify-content-center color-1 left-banner">
                            <h1 class="title">{pageData.title}</h1>
                            <h1 class="title">{pageData.subtitle}</h1>
                        </div>
                        <div class="card col-md-6 justify-content-center color-1 right-banner">
                            <img src="/img/Moments/Preview.png" alt="Moments preview screens"></img>
                        </div>
                    </div>
                </div>
            </div>
            <section class="page col-10">
                <div class="summary row">
                    <div class="col-md-8">
                        <h1>Project Summary</h1>
                            {/* {pBreak(pageData.summary)} */}
                            <p>{pBreak(pageData.element)}</p>
                            {/* <p>For a senior capstone project, I led UX research and did UI design within a team of 4 members to develop Moments, our upcoming app that connects users through sharing and discovering music through a map interface to promote discovering new music from other people.</p><p>Moments was created to see what people are listening to around the world and expand their music taste as a result, on top of making an impact on the map by  sharing their own. Our group believes that Moments should embody the line “Real music recommendations, from real people,” letting anyone get involved in the exchange of music.</p><p>Through the support of our instructors and multiple stages of user testing and research, this is how Moments was made from the very beginning to our ongoing development.</p> */}
                        <h1>Goals</h1>
                        <ul>
                            <li>Address motives and pain points in the music discovery process</li>
                            <li>Provide users autonomy to find and share music among other listeners</li>
                            <li>Practise ethical research practices and inclusive design</li>
                            <li>Draft our app across two course quarters, and continue developing to release by end of 2023</li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h2>Members</h2>
                            <ul>
                                <li>Hamda Hassan · Front-end Developer</li>
                                <li>John Ho · UI Designer, UI/UX Research</li>
                                <li>Takumi Shimada · PM, Lead UI Designer</li>
                                <li>Marina Wooden · Full-stack Developer</li>
                            </ul>
                        <h2>Timeline</h2>
                            <p>Jan 2023 - Ongoing</p>
                        <h2>Tools</h2>
                            <p>Figma, Illustrator, DaVinci Resolve</p>
                        <h2>Deliverables</h2>
                            <p><a href="https://youtu.be/J7qUZrNtofc" target="_blank" rel="noopener noreferrer">Video</a></p>
                            <p>App</p>
                    </div>
                </div>
                <div class="background">
                    <h1>Background</h1>
                    <p>The current state of music discovery heavily relies on algorithmic methods, which have led to users feeling restricted or isolated in their music taste. There is innate gender imbalance and popularity biases within the algorithm system, shadowing diverse artists and creating a feedback loop within recommendations. There are many pain points about the algorithm we noted from user interviews and surveys:</p>
                    <img src="/img/Moments/PainPointsH.png" alt="Pain Points"></img>
                    <p>These initial insights lead to our problem statement:</p>
                </div>
                <div class="hmw-statement">
                    <h1>Problem Statement</h1>
                    <h1><span>How might we promote music discovery for listeners to combat restrictive recommendation algorithms?</span></h1>
                </div>
                <div class="research">
                    <h1>Research Findings</h1>
                    <p>Literature research suggests that <u>organic music consumption</u> promotes more diverse music tastes, fostering a richer user experience and intimate connection with music recommendations. This concept was our stepping stone in our app design and addressing algorithmic flaws in music recommendations.</p>
                    <img src="/img/Moments/Organic.png" alt="Organic music consumption"></img>
                    <p>From <b>28 survey respondents</b> and <b>10 interviews</b>, there is high interest in discovering new music to enjoy with the help of cross-referencing different apps (e.g. Spotify and YouTube). However, users encounter songs that they have already listened to in shuffled playlists or recommendations. We also highlighted that friends and online communities were a major source of music recommendations.</p>
                    <p>With <u>face-to-face music recommendations</u> being a memorable and effective way to share music, intimacy and familiarity enables finding enjoyable music from someone else. These social interactions allow people to connect and express their unique music taste intimately, offering a conversation for both musicianship and personal identity. With this, personal relationships and communities fuel discussions and enjoyment in sharing music, and the positive impacts of organic music consumption foster diverse music taste as a result.</p>
                </div>
                <div class="analysis">
                    <h1>Competitive Analysis</h1>
                    <p>Our competitors come from three major categories: Social Media for networking, Music Streaming for listening to music, and Music Discovery for finding new music.</p>
                    <img src="/img/Moments/Competitors.png" alt="Moments' competitors"></img>
                    <p class="caption">Categorization of explored competitors and case studies</p>
                    <p><b>Instagram</b> and <b>TikTok</b> are platforms where music can reach global status through virality, whereas <b>Reddit</b> and <b>last.fm</b> are examples of hubs where music is discovered. And with sharing music being as easy as sending a URL link or showing a song on your phone, established social media platforms were our main competitors in users encountering music quickly.</p>
                    <p><b>iTunes</b>, <b>Spotify</b>, and <b>YouTube Music</b> are the trilogy when it comes to streaming music. All three platforms have algorithms that select music and artists based on a mixture of listening history and popularity. Recent listening, songs that are most replayed, time spent on a playlist, liked and favorited songs, anything trending on Billboard or any music charts, it all gets compiled by the algorithm to give you <i>familiar</i> content. We saw this as a major pain point with using algorithmic suggestions to discover <i>new</i> music to enjoy.</p>
                    <img src="/img/Moments/Algorithm.png" alt="YouTube Music and Spotify algorithmic recommendations"></img>
                    <p class="caption">YouTube Music and Spotify curating recommendations based on my history</p>
                </div>
                <div>
                    <h2>Drawing Inspiration</h2>
                    <p>Seeing how social media plays a crucial role in connecting listeners and artists, our team examined features and successes of social media platforms to draw into our own app:</p>
                    <img src="/img/Moments/Analysis.png" alt="Appeals to BeReal, Instagram, and Discord"></img>
                    <p>With Discord syncing Spotify streaming to a profile’s status, and the new addition to Instagram having the option to put a song as a note, we knew other platforms were exploring interactions around music.</p>
                    <img src="/img/Moments/StatusH.png" alt="Song statuses on Discord and Instagram"></img>
                    <p>This further validated the concept of <u>wanting to share music or seeing what others are listening to</u>.</p>
                </div>
                <div class="opportunities">
                    <h1>Opportunity Areas</h1>
                    <p>Moments was made to be <u>transparent</u> in who is recommending music, and let the users decide for themselves on the music they want to check out. There is no algorithm as well with shared songs being purely user-dependent, and people can sate their curiosity on what is being listened to by whom and where.</p>
                    <img src="/img/Moments/Goals.png" alt="Goals of Moments"></img>
                    <p>Music is intimate, and we see Moments being an outlet for people to share that. We aim for authenticity in users’ recommended songs, not having to worry about appealing to others.</p>
                </div>
                <div class="personas">
                    <h1>Personas</h1>
                    <p>Based on our user research, we created a few user personas that demonstrated the pain points and motivations of finding new music to listen to.</p>
                    <img src="/img/Moments/PersonasH.png" alt="Personas"></img>
                    <p>Whether it be close friends, the passionate fan, content creator, or knowledgeable musician, we envisioned Moments to let users explore both music <i>and</i> people with their music recommendations.</p>
                </div>
                <div class="design-process">
                    <h1>Design Process</h1>
                    <p>Our motivations came from personal experiences alongside others’ with Moments being an app that offers users autonomy and choice in their music-discovery process, allowing them to find and share music that is <u>meaningful</u> to them.</p>
                    <p>Being able to explore profiles and a world map, this connects users locally and globally if a song piques their interest. The visual pins emulate dropping a pin on the map, emphasising the location aspect of what songs are being listened to within a district.</p>
                    <div class="lofi-prototype">
                        <h2>Low-Fidelity Prototype</h2>
                        <p>In our user testing, we asked our participants to perform the following tasks to gauge usability and study their exploration:</p>
                        <img src="/img/Moments/Tasks.png" alt="User testing tasks"></img>
                        <p class="caption">Here were some of the workflows visualised from Figma:</p>
                        <img src="/img/Moments/WF1.gif" alt="Low-fidelity prototype GIF of exploring local map page posts"></img>
                        <p class="caption">Exploring local map page posts</p>
                        <img src="/img/Moments/WF2.gif" alt="Low-fidelity prototype GIF of selecting a song to drop a Moment"></img>
                        <p class="caption">Selecting a song to drop a Moment</p>
                        <img src="/img/Moments/WF3.gif" alt="Low-fidelity prototype GIF of a notifications page and exploring a profile"></img>
                        <p class="caption">Notifications page and exploring a profile</p>
                    </div>
                    <div>
                        <h2>Giving Direction</h2>
                        <p>Across <b>6 wireframe testers</b>, the average time to go through all the workflows was <b>5 minutes</b>. Since the interface was greyscale, the icons and buttons were ambiguous in navigating across pages. Specifically, the upper right pin icon was not clear in the action of searching up a song and dropping a Moment <i>until</i> they saw their pin isolated on the map. Additionally, the two magnifying glass icons also served different purposes, one to search location while the other was a general search query, which caused slight confusion.</p>
                        <img src="/img/Moments/WF4.png" alt="Low-fidelity prototype image of duplicate icons"></img>
                        <p class="caption">Icons had to be distinctive to avoid confusion</p>
                        <p>However, the onboarding process of making an account and using the navigation bar had familiarity to other social media apps. The notifications and profile pages were well-received with its information hierarchy, and our testers understood the intentions behind the prototype of exploring the map page and profiles.</p>
                        <img src="/img/Moments/Testing.png" alt="Successes and pain points from user testing"></img>
                    </div>
                    <div class="hifi-prototype">
                        <h2>High-Fidelity Prototype</h2>
                        <p>With a refined prototype and more interactive features, the app cemented the importance of interacting with other users in many ways. The familiarity of conventions and interfaces contributed to an easier learning curve in exploring our app, and we made changes to the UI language for clarity.</p>
                        <img src="/img/Moments/MF1.gif" alt="High-fidelity prototype GIF of exploring a post’s location and profile"></img>
                        <p class="caption">Exploring a post’s location and profile</p>
                        <img src="/img/Moments/MF2.gif" alt="High-fidelity prototype GIF of editing profile and followers list"></img>
                        <p class="caption">Editing profile and followers list</p>
                        <img src="/img/Moments/MF3.gif" alt="High-fidelity prototype GIF of dropping a Moment on the map"></img>
                        <p class="caption">Dropping a Moment on the map</p>
                        <p>Testers explored options to make their account public or private, setting their own posts to be exclusive to followers instead of the general public.</p>
                    </div>
                    <div>
                        <h2>Making the Live App</h2>
                        <p>I was primarily a tester for our developers to bugfix our Expo Go Simulator version of Moments. Currently, Moments is compatible for iOS devices so my testing can only be done on a MacBook. I documented bugs in the onboarding process, suggested styling changes (e.g. margin and spacing), and mapped out transitions between screens.</p>
                        <img src="/img/Moments/HF1.gif" alt="Home map page"></img>
                        <p class="caption">Home map page</p>
                        <img src="/img/Moments/HF2.gif" alt="Exploring someone’s Moment and profile"></img>
                        <p class="caption">Exploring someone’s Moment and profile</p>
                        <img src="/img/Moments/HF3.gif" alt="Viewing an active Moment on the Moments page"></img>
                        <p class="caption">Viewing an active Moment on the Moments page</p>
                        <img src="/img/Moments/HF4.gif" alt="Dropping a Moment at my current location"></img>
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
                    <p>Being involved in every stage of Moments was simply fulfilling for me, being able to apply what I have learned in design methods and UI / UX courses from university. The team submitted our project and demo video to our <a href="https://ischool.uw.edu/capstone/projects/2023/moments" target="_blank" rel="noopener noreferrer">university’s capstone website</a>, and now await for iOS TestFlight’s approval. Moving forward, the team is continuing discussions on the <u>app’s marketability</u>, <u>revenue strategies</u>, and <u>establishing branding</u> to commercialise our app.</p>
                    <img src="/img/Moments/Preview.png" alt="Moments screens"></img>
                </div>
                <div class="conclusion">
                    <h1>Thanks for reading!</h1>
                    <p>Check out our app here: <a href=" https://www.yourmoments.app/" target="_blank" rel="noopener noreferrer">https://www.yourmoments.app/</a></p>
                    <div className="d-flex justify-content-center video-container">
                        <iframe width="800" height="450" src="https://www.youtube.com/embed/GZN_gu3FBb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
        </main>
    )
};
     
function pBreak(string) {
    // const stringSplit = string.split("<br>");
    // return stringSplit.map((text) => {
    //     console.log(text);
    //     if(text.includes("<b>")) {
    //         const boldText = string.split("<b>");
    //         return boldText.map((bText, i) => {
    //             if (i % 2 === 1) {
    //                 return<b>{bText}</b>;
    //             } else {
    //                 return bText;
    //             }
    //         })
    //     }
    //     // (text.split(" ")).forEach((word) => {
    //     //     if(word==="<br>") {
                
    //     //     } else {
    //     //         paragraph += word + " "
    //     //     }
    //     // })
    //     return(text)
    // })
    let blankarray = ""; 
    if(string.includes("<b>")) {
        const boldText = string.split("<b>");
        blankarray = boldText.map((bText, i) => {
            if (i % 2 === 1) {
                return<b>{bText}</b>;
            } else {
                return bText;
            }
        })
    }
    console.log("blankarray", blankarray)
}

export default ProjectPage;