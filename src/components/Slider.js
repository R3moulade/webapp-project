// created by Natalia Blautenberg

import ImageSlider from "./ImageSlider";

// import test1 from "./public/logo192.png"
const App = () => {
  // photos are taken from firebase storage
  const slides = [
    { url: "https://firebasestorage.googleapis.com/v0/b/webapp-exam.appspot.com/o/img-stores%2FCardKirken.png?alt=media&token=17abf92c-97c4-441a-a829-0e5724e6ceb9", title: "beach" },
    { url: "https://firebasestorage.googleapis.com/v0/b/webapp-exam.appspot.com/o/img-stores%2FCardMoonlight.png?alt=media&token=c2bdae0c-0e53-43fc-a883-b0aa3e50fbfc", title: "boat" },
    
  ];

  // style of cntr
  const containerStyles = {
    width: "263px",
    height: "150px",
    margin: "25px auto",
    top: "25px",
    
    
    
  };
  return (
    <div>
    
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;