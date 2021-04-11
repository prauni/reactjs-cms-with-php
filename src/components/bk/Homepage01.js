import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
class Homepage extends Component{
	constructor(props){
		super(props)
		const token = localStorage.getItem("token")
		let loggedIn = true
		if(token == null){
			loggedIn = false
		}
		this.state = {
			loggedIn,
			myname:props.myname
		}
	}
	
	render(state){
	<div>
	<div id="header">
		<div className="clearfix">
			<div className="logo">
				<a href="index.html"><img src="%PUBLIC_URL%/lawfirm/images/logo.png" alt="LOGO" height="52" width="362" /></a>
			</div>
			<ul className="navigation">
				<li className="active">
					<a href="index.html">Home</a>
				</li>
				<li>
					<a href="about.html">About</a>
				</li>
				<li>
					<a href="practices.html">Practices</a>
				</li>
				<li>
					<a href="lawyers.html">Our Lawyers</a>
				</li>
				<li>
					<a href="news.html">News</a>
					<div>
						<a href="singlepost.html">News Single Post</a>
					</div>
				</li>
				<li>
					<a href="contact.html">Contact</a>
				</li>
			</ul>
		</div>
	</div>
	<div id="contents">
		<div id="adbox">
			<div className="clearfix">
				<img src="%PUBLIC_URL%/lawfirm/images/family-large.jpg" alt="Img" height="382" width="594" />
				
				<div className="detail">
					<h1>It’s never easy...<br /> When it comes to family.</h1>
					<p>
						But we can set<br /> everything straight.
					</p>
				</div>
			</div>
		</div>
		<div className="highlight">
			<div className="clearfix">
				<div className="testimonial">
					<h2>Testimonials</h2>
					<p>
						&ldquo;Aenean ullamcorper purus vitae nisl tristique sollicitudin. Quisque vestibulum, erat ornare.&rdquo;
					</p>
					<span>-John Doe and Jane Doe-</span>
				</div>
				<h1>The Manes Winchester Promise</h1>
				<p>
					This website template has been designed by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forums/">Forums</a>.
				</p>
			</div>
		</div>
		<div className="featured">
			<h2>Why Choose Us?</h2>
			<ul className="clearfix">
				<li>
					<div className="frame1">
						<div className="box">
							<img src="%PUBLIC_URL%/lawfirm/images/meeting.jpg" alt="Img" height="130" width="197" />
						</div>
					</div>
					<p>
						<b>Our lawyers</b> Our website templates are created with inspiration, checked for quality and originality.
					</p>
					<a href="index.html" className="more">Read More</a>
				</li>
				<li>
					<div className="frame1">
						<div className="box">
							<img src="%PUBLIC_URL%/lawfirm/images/handshake.jpg" alt="Img" height="130" width="197" />
						</div>
					</div>
					<p>
						<b>get to know us more</b> Just browse through all our Free Website Templates and ﬁnd what you’re looking for.
					</p>
					<a href="index.html" className="more">Read More</a>
				</li>
				<li>
					<div className="frame1">
						<div className="box">
							<img src="%PUBLIC_URL%/lawfirm/images/smile.jpg" alt="Img" height="130" width="197" />
						</div>
					</div>
					<p>
						<b>what we offer</b> Join the discussion on our forum and meet other people in the community.
					</p>
					<a href="index.html" className="more">Read More</a>
				</li>
				<li>
					<div className="frame1">
						<div className="box">
							<img src="%PUBLIC_URL%/lawfirm/images/family-small.jpg" alt="Img" height="130" width="197" />
						</div>
					</div>
					<p>
						<b>get in touch with us</b> And we love the challenge of doing something diferent and something special.
					</p>
					<a href="index.html" className="more">Read More</a>
				</li>
			</ul>
		</div>
	</div>
	<div id="footer">
		<div className="clearfix">
			<div className="section">
				<h4>Latest News</h4>
				<p>
					This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text. You can remove any link.
				</p>
			</div>
			<div className="section contact">
				<h4>Contact Us</h4>
				<p>
					<span>Address:</span> the address city, state 1111
				</p>
				<p>
					<span>Phone:</span> (+20) 000 222 999
				</p>
				<p>
					<span>Email:</span> info@freewebsitetemplates.com
				</p>
			</div>
			<div className="section">
				<h4>SEND US A MESSAGE</h4>
				<p>
					If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.
				</p>
				<a href="http://www.freewebsitetemplates.com/misc/contact/" className="subscribe">Click to send us an email</a>
			</div>
		</div>
		<div id="footnote">
			<div className="clearfix">
				<div className="connect">
					<a href="http://freewebsitetemplates.com/go/facebook/" className="facebook"></a><a href="http://freewebsitetemplates.com/go/twitter/" className="twitter"></a><a href="http://freewebsitetemplates.com/go/googleplus/" className="googleplus"></a><a href="http://pinterest.com/fwtemplates/" className="pinterest"></a>
				</div>
				<p>
					© Copyright 2023 Manes Winchester. All Rights Reserved.
				</p>
			</div>
		</div>
	</div>
	</div>
	}
}

export default Homepage