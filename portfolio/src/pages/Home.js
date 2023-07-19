import React from "react";

function Home () {
    return (
        <main>
            <section id="about-me" class="fullscreen d-flex align-items-center justify-content-center">
                <div class="home col-10">
                    <h1 class="top-message text-center">Name’s John, <span>welcome to my portfolio</span>!</h1>
                    <h1 class="top-message text-center">I'm a <span>UI / UX Researcher.</span></h1>
                </div>
            </section>
        <section class="fullscreen d-flex align-items-center justify-content-center">
        <div class="col-8 col-sm-8 col-md-8 col-lg-8">
            <div class="row">
                <div class="home card color-1 col-lg">
                    <h1 class="card-title text-center">Moments · UI / UX</h1>
                    <h2 class="card-description text-center">App development for organic music recommendations</h2>
                    <img class="home card-image" src="img/MomentsMockup.png" alt="Moments mockup"></img>
                </div>
                <div class="home card color-2 col-lg">
                    <h1 class="card-title text-center">Musicroom · UI / UX</h1>
                    <h2 class="card-description text-center">Networking app for college musicians</h2>
                    <img class="home card-image" src="img/MusicroomMockup.png" alt="Musicroom mockup"></img>
                </div>
            </div>
            <div class="row">
                <div class="home card color-2 col-lg">
                    <h1 class="card-title text-center">SPS · Web Design</h1>
                    <h2 class="card-description text-center">Making a design system for Seattle Public Schools</h2>
                    <img class="home card-image" src="img/SPSMockup.png" alt="SPS website mockup"></img>
                </div>
                <div class="home card color-1 col-lg">
                    <h1 class="card-title text-center">Scoolwise · UX Research</h1>
                    <h2 class="card-description text-center">Equitable degree and career support for undergraduates</h2>
                    <img class="home card-image" src="img/ScoolwiseMockup.png" alt="Scoolwise mockup"></img>
                </div>
            </div>
            <div class="row">
                <div class="home card color-1 col-lg">
                    <h1 class="card-title text-center">sleep&see · UI / UX</h1>
                    <h2 class="card-description text-center">Creating a sleep tracker and journal</h2>
                    <img class="home card-image" src="img/sleep&seeMockup.png" alt="sleep&see mockup"></img>
                </div>
                <div class="home card color-2 col-lg">
                    <h1 class="card-title text-center">View All Projects</h1>
                    <img class="home card-image" src="img/AllProjectsArt.png" alt="View all projects"></img>
                    <img class="icon" src="img/RightArrow.png" alt="Right arrow"></img>
                </div>
            </div>
        </div>
        </section>
        </main>
    )
};
 
export default Home;