import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row , Col , Button  } from 'react-bootstrap';





const ProfileComponent = (props)=> {
   
   

    const handelName=()=>{
     
       return alert(`Welcome ${props.fullName}`)
         }
  
   
    return (
        
        <div> 
            <Container className="cont">
                <Row>
                    
            <Col xs={12} md={4} lg={3} >

             <h3 className="datas"> <b>Full Name:</b>{props.fullName} </h3>
             </Col>

             <Col xs={12} md={3} lg={3}>
             <h3 className="datas"><b>Bio:</b> {props.bio} </h3>
             </Col>
             <Col xs={12} md={5} lg={3}>
             <h3 className="datas"><b>Profession:</b>{props.profession}</h3>
             </Col>
             
             <Col xs={12}  lg={3}>
             <img src={props.img} alt="nader" />
            </Col>
            </Row>
            <Row>
                <Col>
              <Button onClick={handelName} variant="dark" size="lg"  className="btn">Click Me</Button>
               </Col>
              </Row>
              </Container>
            
             
        </div>
      

         
        
    )
  
   

  
}
ProfileComponent.defaultProps = { 
    fullName:'Anonyme',
    bio:'nothing',
    profession:'stage',
    img:"https://cdn4.vectorstock.com/i/1000x1000/85/18/user-icon-avatar-silhouette-social-symbol-vector-21268518.jpg"
 


};
ProfileComponent.propTypes={
    fullName:PropTypes.string.isRequired,
    bio:PropTypes.string.isRequired,
    profession:PropTypes.string.isRequired
}

export default ProfileComponent
