import React from "react";

function Home () {
    return (
        <main>
            <section id="about-me" class="fullscreen d-flex align-items-center justify-content-center">
                <div class="home col-10">
                    <h1 class="text-center">Name’s John, <span>welcome to my portfolio</span>!</h1>
                    <h1 class="text-center">I'm a <span> UI / UX Researcher.</span></h1>
                </div>
            </section>
            <section class="fullscreen d-flex align-items-center justify-content-center">
                <div class="col-8 col-sm-8 col-md-8 col-lg-8">
                    <div class="row">
                        <div class="home card color-1 col-lg">
                            <a href="/projects/moments">
                            <h1 class="card-title text-center">Moments · UI / UX</h1>
                            <h2 class="card-description text-center">An app for organic music recommendations</h2>
                            <img class="home card-image" src="img/MomentsMockup.png" alt="Moments mockup"></img>
                            </a>
                        </div>
                        <div class="home card color-2 col-lg">
                            <a href="/projects/musicroom">
                            <h1 class="card-title text-center">Musicroom · UI / UX</h1>
                            <h2 class="card-description text-center">Networking college musicians for collaboration</h2>
                            <img class="home card-image" src="img/MusicroomMockup.png" alt="Musicroom mockup"></img>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="home card color-2 col-lg">
                            <a href="/projects/sps">
                            <h1 class="card-title text-center">SPS · Web Design</h1>
                            <h2 class="card-description text-center">A design system for Seattle Public Schools</h2>
                            <img class="home card-image" src="img/SPSMockup.png" alt="SPS website mockup"></img>
                            </a>
                        </div>
                        <div class="home card color-1 col-lg">
                            <a href="/projects/scoolwise">
                            <h1 class="card-title text-center">Scoolwise · UX Research</h1>
                            <h2 class="card-description text-center">Equitable degree and career support for undergraduates</h2>
                            <img class="home card-image" src="img/ScoolwiseMockup.png" alt="Scoolwise mockup"></img>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="home card color-1 col-lg">
                            <a href="/projects/sleepandsee">
                            <h1 class="card-title text-center">sleep&see · UI / UX</h1>
                            <h2 class="card-description text-center">Web-based sleep journal and tracker</h2>
                            <img class="home card-image" src="img/sleep&seeMockup.png" alt="sleep&see mockup"></img>
                            </a>
                        </div>
                        <div class="home card color-2 col-lg">
                            <a href="/projects">
                            <h1 class="card-title text-center">View More</h1>
                            <h2 class="card-description text-center">Gallery of all my works!</h2>
                            <img class="home card-image" src="img/AllProjectsArt.png" alt="View all projects"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};
 
export default Home;