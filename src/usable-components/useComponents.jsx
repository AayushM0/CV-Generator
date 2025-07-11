import data from "../data/example-data";
import { useState } from "react";

function useComponents(){
    const [formData, setFormData] = useState({
  basic: data.basic,
  profiles: data.profiles,
  summary : data.summary,
  experience : data.experience,
  education : data.education,
  projects : data.projects,
  skills : data.skills,
  certifications : data.certifications
});

const onchange = (e, field, section, profileField = null, profileIndex = null) => {
  
  
  if (section === 'basic') {
    setFormData(prev => ({
      ...prev,
      basic: {
        ...prev.basic,
        [field]: e.target.value
      }
    }));
  } 
  
  else if (section === 'profiles') {
    setFormData(prev => ({
      ...prev,
      profiles: prev.profiles.map((profile, index) => 
        index === profileIndex ? { 
          ...profile, 
          [profileField]: e.target.value 
        } : profile
      )
    }));
  }
  else if (section === 'summary') {
        setFormData(prev => ({
            ...prev,
            summary: e.target.value
        }));
    }

    else if (section === "experience"){
        setFormData(prev => ({
            ...prev,experience : prev.experience.map((exp , index) => index === profileIndex ? {
                ...exp,[profileField]:e.target.value
            } : exp ) 

            
        }));
    }
    else if(section==="education"){
        setFormData(prev => ({
            ...prev,education : prev.education.map((edu , index) => index === profileIndex ? {
                ...edu,[profileField]:e.target.value
            } : edu ) 

            
        }));
    }
    else if(section==="projects"){
        setFormData(prev => ({
            ...prev,projects : prev.projects.map((project , index) => index === profileIndex ? {
                ...project,[profileField]:e.target.value
            } : project ) 

            
        }));
    }
    else if(section==="skills"){
        setFormData( prev => ({
            ...prev,skills : prev.skills.map((skill,index) => index===profileIndex ? e.target.value : skill)
        }))
    }
    else if(section==="certifications"){
        setFormData(prev => ({
            ...prev,certifications : prev.certifications.map((cer , index) => index === profileIndex ? {
                ...cer,[profileField]:e.target.value
            } : cer ) 

            
        }));
    }
    

    
};

const addSkill = () => {
    setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, ""] 
    }));
};

const addEx = (section) => {
    if(section==="experience"){
        setFormData(prev => ({
        ...prev,
        experience: [...prev.experience, {
      company: "XYZ Company",
      date: "August 2017 - January 2024",
      position: "Frontend Dev",
      location: "Noida",
      website: "",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis numquam iure ad magni tenetur explicabo, voluptates illum tempora possimus atque, illo eius neque, nesciunt mollitia qui quia nemoeos.",
    }] 
    }));
    }
    else if(section==="projects"){
        setFormData(prev => ({
        ...prev,
        projects: [...prev.projects, {
      name: "My Project",
      description: "CV-Generator",
      date: "June 2025 - July 2025",
      website: "https://github.com/AayushM0/CV-Generator",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis numquam iure ad magni tenetur explicabo, voluptates illum tempora possimus atque, illo eius neque, nesciunt mollitia qui quia nemoeos.",
    }] 
    }));
    }
    else if(section==="certifications"){
        setFormData(prev => ({
        ...prev,
        certifications: [...prev.certifications, {
      name: "XY",
      issuer: "Certificate.com",
      date: "July 2025",
      website: "www.google.com",
      summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis numquam iure ad magni tenetur explicabo, voluptates illum tempora possimus atque, illo eius neque, nesciunt mollitia qui quia nemoeos.",
    }] 
    }));
    }
    
};



const removeSkill = (index, section) => {
    setFormData(prev => ({
        ...prev,
        [section]: prev[section].filter((_, i) => i !== index)
    }));
};


    return {
        formData,
        onchange,addSkill,removeSkill,
        addEx
    };


};

export default useComponents;