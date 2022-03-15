/* eslint-disable */

const About = () => {
  return (
		<>
			<div className="about">
				<div className= "history">
					<h1>A BRIEF HISTORY</h1>
					<p className ="text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat dui at lacus aliquet, a consequat enim aliquet. Integer molestie sit amet sem et faucibus. Nunc ornare pharetra dui, vitae auctor orci fringilla eget. Pellentesque in placerat felis. Etiam mollis venenatis luctus. Morbi ac scelerisque mauris. Etiam sodales a nulla ornare viverra. Nunc at blandit neque, bibendum varius purus.
					</p>
					<p className ="text">
						Nam sit amet sapien vitae enim vehicula tincidunt. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc faucibus imperdiet vulputate. Morbi volutpat leo iaculis elit vehicula, eu convallis magna finibus. Suspendisse tristique ullamcorper erat a elementum. Cras eget elit non nunc aliquam ullamcorper quis sed metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, erat in ullamcorper bibendum, elit lacus mattis lorem, quis luctus diam lorem vel ligula.
					</p>
				</div>
				<br/><br/>
				<img className= "about-img" src= "https://images.unsplash.com/photo-1615634260167-c8cdede054de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZnVtZXN8ZW58MHx8MHx8&w=970&q=510"/>
				{/* <img className= "about-img" src= "https://via.placeholder.com/970x510.png"/> */}
				<div className="vision-text">
					<div className="col-lg-5">
						<div className = "left">
							<h3>OUR VISION</h3>
							<h2>We craft awesome stuff with great experiences </h2>
						</div>
					</div>

					<div className="col-lg-7">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat dui at lacus aliquet, a consequat enim aliquet. Integer molestie sit amet sem et faucibus. Nunc ornare pharetra dui, vitae auctor orci fringilla eget. Pellentesque in placerat felis. Etiam mollis venenatis luctus.</p>
						<p>
							Morbi ac scelerisque mauris. Etiam sodales a nulla ornare viverra. Nunc at blandit neque, bibendum varius purus. Nam sit amet sapien vitae enim vehicula tincidunt. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc faucibus imperdiet vulputate.
						</p>
					</div>
				</div>
				{/* OUR TEAM  */}
    		<section className="our-team" >
      			<div className="container">
        			<div className="heading">
          			<h2>OUR TEAM</h2>
          			<h3>United by love & help to build great brands</h3> 
							</div>
        			<div className="row">
								<div className= "column">
          				<div>
										<div className="avatar"> <img src="https://via.placeholder.com/268" alt="" /> 
										</div>
										<div className="team-names">
                			<h6>JOSEPH MARK</h6>
                			<p>CEO & FOUNDER</p>
              			</div>
            			</div>
								</div>

								<div className= "column">
              		<div>
              			<div className="avatar"> <img src="https://via.placeholder.com/268" alt="" /> 
										</div>
										<div className="team-names">
                			<h6>JOSEPH MARK</h6>
                			<p>CEO & FOUNDER</p>
              			</div>
            			</div>
								</div>

								<div className= "column">
              		<div>
              			<div className="avatar"> <img src="https://via.placeholder.com/268" alt="" /> 
										</div>
										<div className="team-names">
                			<h6>JOSEPH MARK</h6>
                			<p>CEO & FOUNDER</p>
              			</div>
            			</div>
								</div>

							</div>	
							</div>
				</section>		
       
			</div>
		</>
	);
	};
	
	export default About;

	