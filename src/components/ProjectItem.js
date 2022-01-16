import React, { useState } from 'react'

const ProjectItem = ({ project }) => {
    const [isModal, setIsModal] = useState(false);

    const handleProject = (id) => {
        console.log(id);
        setIsModal(true);
    }
    return (<>

        <li className='project-item' key={project.id} onClick={() => handleProject(project.id)}>
            {project.name}
        </li>
        <div className={isModal ? "popup" : "popup-hide"}>
            <h1 className=''>{project.name}</h1>
            <p>Chi tiết về project : {project.desc}</p>
            <p>Ngôn ngữ : {project.language}</p>
            <p>Link code -
                <a href={project.link} target="_blank">{project.link}</a>
            </p>
            <img src={project.img} alt="img_demo" />
        </div>
        <div className={isModal ? "project-modal" : ""} onClick={() => setIsModal(false)}>
        </div>
    </>
    )
}

export default ProjectItem
