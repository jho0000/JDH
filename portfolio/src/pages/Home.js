import React from "react";

function Home () {
    return (
        <main>
            <section id="about-us" class="fullscreen d-flex align-items-center justify-content-center">
                <div class="card-2 col-md-6">
                    <h1 class="top-message">Name’s John, <span>welcome to my portfolio</span>!</h1>
                    <h1 class="top-message">I'm a <span>UI / UX Researcher.</span></h1>
                </div>
            </section>
        <div class="container">
            <div class="row">
                <div class="card col-lg">
                    <h2 class>Moments · UI / UX </h2>
                    <img class="card-image" src="img/MomentsMockup.png" alt="Moments mockup"></img>
                </div>
                <div class="card col-lg">
                    <h2 class>Musicroom · UI / UX </h2>
                    <img class="card-image" src="img/MusicroomMockup.png" alt="Musicroom mockup"></img>
                </div>
            </div>
            <div class="row">
                <div class="card col-lg">
                    <h2 class>SPS Redesign · UI / UX </h2>
                    <img class="card-image" src="img/SPSMockup.png" alt="SPS website mockup"></img>
                </div>
                <div class="card col-lg">
                    <h2 class>Scoolwise · UX Research </h2>
                    <img class="card-image" src="img/ScoolwiseMockup.png" alt="Scoolwise mockup"></img>
                </div>
            </div>
            <div class="row">
                <div class="card col-lg">
                    <h2 class>sleep&see · UI / UX </h2>
                    <img class="card-image" src="img/sleep&seeMockup.png" alt="sleep&see mockup"></img>
                </div>
                <div class="card col-lg">
                    <h2 class>View All Projects</h2>
                    <img class="card-image" src="img/AllProjectsArt.png" alt="View all projects"></img>
                    <img class="icon" src="img/RightArrow.png" alt="Right arrow"></img>
                </div>
            </div>
        </div>
        </main>
    )
};
 
export default Home;