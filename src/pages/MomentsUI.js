import React from "react";

function MomentsUI() {
    return(
<main>
            <section class="col-12 page d-flex align-items-center justify-content-center">
                <div class="container">
                    <div class="banner row color-1">
                        <div class="col-md-6 justify-content-center">
                            <h1 class="title align-items-center">Moments (UI)</h1>
                            <h1 class="subtitle">Drafting and creating a website for an app.</h1>
                        </div>
                        <div class="col-md-6 justify-content-center">
                            <img class="asset" src="/img/MomentsUI/Preview.png" alt="Moments website preview screens"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section class="page col-7">
                <div class="summary row">
                    <div class="col-md-8">
                        <h1>Project Summary</h1>
                            <p>With my involvement in the project <i>Moments</i>, I was given the responsibility to layout a website design for branding and communicating the purpose of the app. By using Figma and basic website development, I created wireframes and prototypes with our app’s established design system for our first iteration of a website for <i>Moments</i>.</p>
                        <h1 class>Goals</h1>
                        <ul class="goals">
                            <li>Promote the features and charm of <i>Moments</i>, a social media app made to share and discover music geographically</li>
                            <li>Model a web and mobile page that is polished and accessible through following responsive design conventions</li>
                            <li>Aim to increase our app’s visibility and enable gathering customer insights or inquiries</li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h2>Members</h2>
                            <ul>
                                <li>John Ho · UI/UX Research, UI Design</li>
                                <li>Takumi Shimada · PM, UI Design</li>
                                <li>Marina Wooden · Full-stack Developer</li>
                                <li>Hamda Hassan · Front-end Developer</li>
                            </ul>
                        <h2>Timeline</h2>
                            <p>June & July 2023</p>
                        <h2>Tools</h2>
                            <p>Figma, React Native & JS</p>
                        <h2>Deliverables</h2>
                            <p><a class="link" href="https://www.yourmoments.app/" target="_blank" rel="noopener noreferrer">Website</a></p>
                    </div>
                </div>
                <div>
                    <h1>Drafting</h1>
                    <p>To form the wireframes, there were some initial goals in making the website compelling and responsive to an external audience:</p>
                    <img class="asset" src="/img/MomentsUI/Goals.png" alt="Goals of making wireframes"></img>
                    <p>The web content would be drafted on a document to acknowledge information hierarchy and use concise language for potential users to learn the app even further, as we do not have an onboarding process on the live app as of now.</p>
                    <p>After working with the developers to gauge the feasibility of our design concepts, the wireframes served as the foundational blueprint for the website.</p>
                    <img class="asset" src="/img/MomentsUI/WireframeD.png" alt="Desktop website wireframe"></img>
                    <img class="asset" src="/img/MomentsUI/WireframeM.png" alt="Mobile website wireframe"></img>
                </div>
                <div>
                    <h2>Design System</h2>
                    <p>As the developer team progressed in building the app, there were many concepts that our team considered for creating our website. We wanted to utilise mockups to show our app interfaces to show the main map element and song previews, in addition to our established design system for consistency in colour composition.</p>
                    <img class="asset" src="/img/MomentsUI/DesignSystem.png" alt="Moments' website design system"></img>
                    <p>With its bold and readable properties, our font choice of <b>Spartan</b> embodies our app as dynamic and confident while maintaining a modern look. Its clarity allows it to be used across heading levels and body text, delivering an immersive user-centric experience as you scroll down the page.</p>
                    <img class="asset" src="/img/MomentsUI/Screen.png" alt="Moments' simulated screen"></img>
                    <p>Large titles, screen captures, and captions also guide the users in learning the key features of Moments, aiming to provoke interest and understanding of the app. Building off these wireframes, both mobile and desktop versions have been created and implemented through React Native.</p>
                    <img class="asset" src="/img/MomentsUI/WebsiteD.png" alt="Desktop website draft"></img>
                    <img class="asset" src="/img/MomentsUI/WebsiteM.png" alt="Mobile website draft"></img>
                </div>
                <div>
                    <h2>Renewing the Look</h2>
                    <p>We decided to change the website layout after getting internal feedback. A major change was designing a <u>single-page</u> website to concentrate all the information about <i>Moments</i> instead of having multiple pages. It simplifies development for mobile devices while letting the images be the visual highlight for our app, leading to higher user retention and interactions with the website.</p>
                    <img class="asset" src="/img/MomentsUI/SinglePage.gif" alt="Scrolling through updated Moments' single-page website"></img>
                    <p class="caption">A scroll of our updated website</p>
                    <img class="asset" src="/img/MomentsUI/Carousel.gif" alt="Carousel featuring Moments' features"></img>
                    <p class="caption">A carousel in place for our features page</p>
                    <p>Again, the images and content follow the colours of our design system, this time with the Roboto font for simplicity (can be subject to change).</p>
                </div>
                <div>
                    <h1>Next Steps</h1>
                    <p>Our call of action as of now is acquiring beta testers on the top banner, later on will be replaced with badges that direct users towards the app page for download.</p>
                    <img class="asset" src="/img/MomentsUI/Banner.png" alt="Carousel featuring Moments' features"></img>
                    <p>After the beta release of <i>Moments</i>, the team plans the following to be attentive in promoting our branding for our app and improve general website experience with user feedback and internal testing. The primary goals of refining our website are:</p>
                    <img class="asset" src="/img/MomentsUI/Steps.png" alt="Next steps for refining the website"></img>
                    <p>Additionally, expanding our brand visibility and refining UX of our app will let us create marketing strategies and content on other platforms such as <i>YouTube</i> and <i>Instagram</i>. We can also cross-check insights from our website traffic and data from beta testers to create user personas and foster communities to engage with through inquiries and implement feedback.</p>
                </div>
                <div class="conclusion">
                    <h1>Thanks for reading!</h1>
                    <p>Check out our website and app here: <a class="link" href="https://www.yourmoments.app/" target="_blank" rel="noopener noreferrer">https://www.yourmoments.app/</a></p>
                </div>
            </section>
        </main>
    )
}

export default MomentsUI;