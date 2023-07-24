import React from "react";
import { useParams } from "react-router-dom";

function ProjectPage () {
    let {projectid} = useParams();
    console.log(projectid)
    return (
        <main>
             <section class="banner">
                <div class="banner card col-10">
                    <div class="row">
                        <div class="banner card col-md-6">
                            <h1>Moments</h1>
                            <h2>An app for sharing and discovering music</h2>
                        </div>
                        <div class="banner card col-md-6">
                            <img src="img/HTest.png" alt='Test'></img>
                        </div>
                    </div>
                </div>
            </section>
            <div class="summary">
                <h1>Project Summary</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <h1>Goals</h1>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
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
            <div>
                <h2>Background</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
                <h2>Problem Statement</h2>
                <h1><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</span></h1>
            </div>
            <div>
                <h2>Research Findings</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img src="img/HTest.png" alt='Test'></img>
            </div>
            <div>
                <h2>Design Process</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img src="img/HTest.png" alt='Test'></img>
            </div>
            <div>
                <h2>Opportunity Areas</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
                <h2>Challenges and Takeaways</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
                <h1>Conclusion</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </main>
    )
};
     
export default ProjectPage;