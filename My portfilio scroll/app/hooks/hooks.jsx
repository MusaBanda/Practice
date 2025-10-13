  import { useState, useEffect } from 'react';
  
export const hooks = () => {

// State to track scroll position
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

// show or hide menu based on screen size
  const [showForLargeScreen, setShowForLargeScreen] = useState(true);
  const [showForSmallScreen, setShowForSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1024;
      setShowForLargeScreen(isLarge);
      setShowForSmallScreen(!isLarge);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

// State variables to handle button click effects
    const [isContactClicked, setIsContactClicked] = useState(false);
    const [isResumeClicked, setIsResumeClicked] = useState(false);
  
    const handleContactClick = () => {
      setIsContactClicked(true);
      setTimeout(() => setIsContactClicked(false), 300); 
    };
  
    const handleResumeClick = () => {
      setIsResumeClicked(true);
      setTimeout(() => setIsResumeClicked(false), 300); 
    };

 // State to manage hovered tool index and columns for responsive design
    const [hoveredToolIndex, setHoveredToolIndex] = useState(null);
      const [columns, setColumns] = useState(1);
    
      useEffect(() => {
        const handleResize = () => {
          setColumns(window.innerWidth >= 1024 ? 4 : 1);
        };
    
        window.addEventListener("resize", handleResize);
        handleResize(); 
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);

 // forms
        const [result, setResult] = useState("");
        const onSubmit = async (event) => {
      
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "0fea1281-eb8f-410b-bab2-6572702adba7");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };


 

  
  return {
    isScroll,
    showForLargeScreen, showForSmallScreen,
    isContactClicked, isResumeClicked,   
    handleContactClick, handleResumeClick,
    hoveredToolIndex, setHoveredToolIndex,
    columns, setColumns,
    onSubmit, result, setResult, 
  };
};
