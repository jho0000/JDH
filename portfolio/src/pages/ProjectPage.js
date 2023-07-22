import React from "react";
import { useParams } from "react-router-dom";

function ProjectPage () {
    let {projectid} = useParams();
    console.log(projectid)
    return (
        <main>
            <h1>{projectid}</h1>
        </main>
    )
};
     
export default ProjectPage;