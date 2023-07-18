import React from "react";

function Home () {
    return (
        <main>
            <section id="about-us" class="fullscreen d-flex align-items-center justify-content-center">
                <div class="card-2 col-md-6">
                    <h1 class="top-message text-center">Name’s John, <span>welcome to my portfolio</span>!</h1>
                    <h1 class="top-message text-center">I'm a <span>UI / UX Researcher.</span></h1>
                </div>
            </section>
        <div class="container">
            <div class="row">
                <div class="card col-lg">
                    <h2 class="card-title text-center">Moments · UI / UX</h2>
                    <h3 class="card-description text-center">App development to share and discover music organically</h3>
                    <img class="card-image" src="img/MomentsMockup.png" alt="Moments mockup"></img>
                </div>
                <div class="card col-lg">
                    <h2 class="card-title text-center">Musicroom · UI / UX</h2>
                    <h3 class="card-description text-center">Networking app for college musicians</h3>
                    <img class="card-image" src="img/MusicroomMockup.png" alt="Musicroom mockup"></img>
                </div>
            </div>
            <div class="row">
                <div class="card col-lg">
                    <h2 class="card-title text-center">SPS · Web Design</h2>
                    <h3 class="card-description text-center">Making a design system for Seattle Public Schools</h3>
                    <img class="card-image" src="img/SPSMockup.png" alt="SPS website mockup"></img>
                </div>
                <div class="card col-lg">
                    <h2 class="card-title text-center">Scoolwise · UX Research</h2>
                    <h3 class="card-description text-center">Equitable degree and career support for undergraduates</h3>
                    <img class="card-image" src="img/ScoolwiseMockup.png" alt="Scoolwise mockup"></img>
                </div>
            </div>
            <div class="row">
                <div class="card col-lg">
                    <h2 class="card-title text-center">sleep&see · UI / UX</h2>
                    <h3 class="card-description text-center">Creating a sleep tracker and journal</h3>
                    <img class="card-image" src="img/sleep&seeMockup.png" alt="sleep&see mockup"></img>
                </div>
                <div class="card col-lg">
                    <h2 class="card-title text-center">View All Projects</h2>
                    <img class="card-image" src="img/AllProjectsArt.png" alt="View all projects"></img>
                    <img class="icon" src="img/RightArrow.png" alt="Right arrow"></img>
                </div>
            </div>
        </div>
        </main>
    )
};
 
export default Home;