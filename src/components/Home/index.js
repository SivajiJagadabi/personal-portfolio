import { useRef, useState } from 'react'
import './index.css'
import image from '../Images/image.png'
import project1 from '../Images/project1.png'
import project2 from '../Images/project2.png'
import project3 from '../Images/project3.png'
import bottom from '../Images/bottom.png'
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import ProjectCard from '../ProjectCard'
import mobileBg from '../Images/mobileBg.png'


const backgroundImageStyle = {
    backgroundImage: 'url(/images/image.png)',


};

const Home = () => {

    const aboutSection = useRef(null)
    const projectSection = useRef(null)
    const contactSection = useRef(null)

    const [open,setOpen]=useState(false)

    const [name,setName]=useState('')
    const [link,setLink]=useState('')
    const [image,setImage]=useState('')
    const [description,setDescritpion]=useState('')
    const [projectList,setProjectList]=useState([])

    const onChangeName=(e)=>{
        setName(e.target.value)
    }

    const onChangeLink=(e)=>{
        setLink(e.target.value)
    }

    const onChangeImage=(e)=>{
        setImage(e.target.files[0])
    }

    const onChangeDescription=(e)=>{
        setDescritpion(e.target.value)
    }


    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const onClickMenu=()=>{
        setOpen(prevState=>!open)
    }

   const onSubmitForm=(e)=>{
        e.preventDefault()

       
        if (image && image.type.startsWith('image/')) {
           const  newProject=({
            name,
            link,
            description,
            image: image
            });
            setProjectList(prevState=>[...prevState,newProject])
          } else {
            alert('Please select a valid image file.');
          }
        

     
        setImage('')
        setLink('')
        setName('')
        setDescritpion('')
    }
    console.log(projectList)

    return (
        <>
        
            <div className='app-container' ref={aboutSection}>
                <div>
                <div className='mobile-nav-item'>
                    <h1 className='name'>Modelyn Torff</h1>
                    <div className='mobile-sidebar'>
                  {open?<IoMdClose className='menu-icon' onClick={onClickMenu}/>:<GiHamburgerMenu className='menu-icon' onClick={onClickMenu}/>}
                    </div>
                    </div>
                   {open&& <div className='mobile-menu'>
                  <ul className='nav-item-container' onClick={onClickMenu}>
                    <li className='nav-item'  onClick={() => scrollToSection(aboutSection)}>
                        About
                    </li>
                    <li className='nav-item'  onClick={() => scrollToSection(projectSection)}>
                        Projects
                    </li>
                    <li className='nav-item'  onClick={() => scrollToSection(contactSection)}>
                        Contacts
                    </li>
                  </ul>
              
                </div>}
                    <div className='intro-card'>
                        <h1 className='design'>UI/UX DESIGNER</h1>
                        <h2 className='intro'>Hello, &nbsp;&nbsp;My Name <br />is Modelyn Torff </h2>
                        <p className='description'>
                            Short text with details about you, what you do or your professional career. You can add more information on the about page.
                            Projects
                            LinkedIn</p>
                        <div>
                            <button className='project-btn'>Projects</button>
                            <button className='linkedin-btn'>LinkedIn</button>
                        </div>
                    </div>
                </div>
                <div className='mobile-bg-img'>
                    <img src={mobileBg} className='bg-image'/>
                </div>
                <div style={backgroundImageStyle} className='bg-img'>
                    <ul className='nav-items'>
                        <li className='item' onClick={() => scrollToSection(aboutSection)}>
                            About
                        </li>
                        <li className='item' onClick={() => scrollToSection(projectSection)}>
                            Projects
                        </li>
                        <li className='item' onClick={() => scrollToSection(contactSection)}>
                            Contact
                        </li>
                    </ul>

                </div>
               
            </div>
            <form className='form-container' onSubmit={onSubmitForm}>
                <div>
                    <h1 className='add-project-head'>Add project</h1>
                </div>
                <div className='line'></div>
                <div className='input-container'>
                    <label htmlFor='project-name'>Project Name</label>
                    <input type='text' className='input-box' id='project-name' onChange={onChangeName} value={name}/>
                    <label htmlFor='link'>Project Link</label>

                    <input type='text' className='input-box' id='link' onChange={onChangeLink} value={link}/>
                    <label htmlFor='file'>Project Image</label>
                    <div style={{border:'2px solid lightgray',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <input type='file' accept="image/*" className='input-box'  id='file' style={{marginTop:'10px',marginLeft:'5px'}} onChange={onChangeImage}/>
                    </div>
                    <label htmlFor='description'>Description</label>
                    <textarea type='text' id='description'value={description} className='text-area' onChange={onChangeDescription}></textarea>
                    <button typ='submit' className='project-btn add-btn'>Add</button>
                </div>

            </form>
            <div>
                <img src={bottom} className='bottom-desgin' />
            </div>
            <div className='project-container' ref={projectSection}>
                <h1 className='project-head'>Projects</h1>
                <div className='line'></div>
                <div className='response-container'>
                    <div>
                        <div className='project-cards'>
                            <div className='project-text-card'>
                                <h2 className='project-name'>Project Name</h2>
                                <p className='description'>
                                    You can also add in this description the type of the project, if it was for web, mobile, electron.</p>
                                <div>
                                    <button className='view-btn'>View Project</button>
                                </div>

                            </div>
                            <img src={project1} className='project-img' />
                        </div>
                        <div className='project-cards'>
                            <img src={project2} className='project-img img-ord' />
                            <div className='project-text-card text-ord' style={{ marginLeft: '35px' }}>
                                <h2 className='project-name'>Project Name</h2>
                                <p className='description'>
                                    You can also add in this description the type of the project, if it was for web, mobile, electron.</p>
                                <div>
                                    <button className='view-btn'>View Project</button>
                                </div>

                            </div>

                        </div>
                        <div className='project-cards'>
                            <div className='project-text-card'>
                                <h2 className='project-name'>Project Name</h2>
                                <p className='description'>
                                    You can also add in this description the type of the project, if it was for web, mobile, electron.</p>
                                <div>
                                    <button className='view-btn'>View Project</button>
                                </div>

                            </div>
                            <img src={project3} className='project-img' />
                        </div>
                        {projectList.map(eachProject=>(
                        <ProjectCard projectDetails={eachProject} />
                        ) )}
                    </div>
                </div>
            </div>

            <div className='contact-container' ref={contactSection}>
                <div className='icon-container'>
                    <RiInstagramFill className='social-icon' />
                    <FaLinkedin className='social-icon' />
                    <IoIosMail className='social-icon3' />



                </div>
                <p>Copyright&copy; 2024 Fincity. All Rights Reserved.</p>

            </div>

            <div>
                <img src={bottom} className='bottom-desgin' />
            </div>

        </>
    )
}

export default Home