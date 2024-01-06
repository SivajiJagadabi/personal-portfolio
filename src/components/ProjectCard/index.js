import './index.css'

const ProjectCard=(props)=>{
    const {projectDetails}=props
    const {name,image,link,description}=projectDetails
    return(
        <div className='project-cards'>
             {image && image.type && image.type.startsWith('image/') && (
      
      <img src={URL.createObjectURL(image)} className='project-img' />
      )}
                            <div className='project-text-card' style={{ marginLeft: '35px' }}>
                                <h2 className='project-name'>{name}</h2>
                                <p className='description'>{description}</p>
                                <div>
                                    <button className='view-btn'>{link}</button>
                                </div>

                            </div>
                           
                        </div>
    )
}

export default ProjectCard