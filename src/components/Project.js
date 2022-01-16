import React, { useState } from 'react'
import ProjectItem from './ProjectItem';

const Project = () => {
    const [projects, setProject] = useState(
        [
            {
                id:0,
                name:"Quản lý sinh viên hệ tín chỉ. ",
                desc:"Cho phép đăng kí môn, hủy môn, nhập điểm cho sinh viên.",
                language:"C++",
                img:"https://github.com/tranthudat2k1/doan-ctdl-qlsv/raw/main/img/demo2.jpg",
                link:"https://github.com/tranthudat2k1/doan-ctdl-qlsv"
            },
            {
                id:1,
                name:"Game nhập chữ.",
                desc:"Chương trình random hiện chữ, người chơi gõ đúng sẽ có điểm.",
                language:"ReactJS",
                img:"https://github.com/tranthudat2k1/typing-game-reactjs/raw/main/intro.jpg",
                link:"https://github.com/tranthudat2k1/typing-game-reactjs"
            },
            {
                id:2,
                name:"Thống kê Covid.",
                desc:"Cho phép tra cứu tình hình covid trên các quốc gia.",
                language:"Javascript",
                img:"https://github.com/tranthudat2k1/CovidJS/raw/main/img/demo1.jpg",
                link:"https://github.com/tranthudat2k1/CovidJS"
            }
        ]
    )
    return (
        <div className='project'>
            <div className="project-container">
                <ul className='project-list'>
                    {
                        projects.map((project,index)=>
                        {
                            return (
                                <ProjectItem project={project} key={index}></ProjectItem>
                            )
                        })

                    }
                    <li className='project-item'>
                        Xem thêm tại - 
                        <a href="https://github.com/tranthudat2k1" target="_blank">https://github.com/tranthudat2k1</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Project
