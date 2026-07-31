import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import WorkCard from './workCards';
import ProjectCardData from './WorkCardData'
// import axios from 'axios';

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setProjects(ProjectCardData);
    setLoading(false);
  }, []);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/projects');
  //       const sortedProject = response.data.sort((a, b) => a.p_no - b.p_no);
  //       setProjects(sortedProject);
  //     } catch (error) {
  //       console.error('Error fetching projects:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchProjects();
  // }, []);

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1080, settings: { slidesToShow: 2 } },
    ],
  };

  if (loading) {
    return <div className="text-center text-white">Loading projects...</div>;
  }

  return (
    <div className="py-16 px-4 md:px-8 bg-gray-900 min-h-screen">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-12 text-white">Projects</h1>
      <div className="carousel-container">
        <Slider {...settings}>
          {projects.length > 0 ? (
            projects.map((project, i) => (
              <WorkCard
                key={i}
                p_no={project.p_no}
                title={project.title}
                img_src={project.img_src}
                description={project.description}
                source={project.source}
                tech={project.tech}
              />
            ))
          ) : (
            <div className="text-center text-white">No projects available</div>
          )}
        </Slider>
      </div>
    </div>
  );
}

export default Work;
