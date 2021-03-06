import React from "react";
import ReactDOM from "react-dom";
import Image from "react-image-enlarger";



function SingleSource({ src }) {
  const [zoomed, setZoomed] = React.useState(false);

  return (
    <div>
      <Image 
        
        zoomed={zoomed}
        src={src}
        onClick={() => setZoomed(true)}
        onRequestClose={() => setZoomed(false)}
      />
    </div>
  );
}

/*the above controls the height of the inside image*/



 {/*
    use it like this

      some test text here
      <div className="dog1">
        <SingleSource src={img1} />
      </div>
      blaaaah test writing
      <div className="dog2">
        <SingleSource src={img2} />
        ))}
      </div>*/}
   


export default SingleSource

/*Singlesource is how we have click to zoom images, they need to be wrapped in a div */