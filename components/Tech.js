const TechTopics = ({images,subtitle, address,title }) => {
    return ( 
        <div>
            <img src={images} />
            <h3>{subtitle}</h3>
            <p>{address}</p>
            <h1>{title}</h1>
            
        </div>
     );
}
 
export default TechTopics;