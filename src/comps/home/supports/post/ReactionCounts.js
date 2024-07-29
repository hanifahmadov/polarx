import React, { useState, useEffect } from "react";

/* STYLED */
import { ReactionCounts_Container, Heart_Container, Smile_Container, Dislike_Container } from "./post.styled";

/* HELPER */
import { Fontawesome } from "../fontawesome/Fontawesome";

export const ReactionCounts = ({ likes }) => {
	/** process the likes
	 * we can set the counts directly, like likes.length.
	 * so, the post can have 1 or 100 likes how to control and get these data
	 *
	 * solution for now
	 * 1. loop the likes and group them based on their reaction type
	 * 2. iterate the groups and present the detailed info
	 */
	const [heart, setHeart] = useState([]);
	const [smile, setSmile] = useState([]);
	const [dislike, setDislike] = useState([]);

	useEffect(() => {
		/* // TODO 
            create a lists that shows who liked the posts when mouse over the numbers
        */
		/** these values are local and every time this useEffect runs (wehn likes gets updated on Homejs useEffect )
		 * 	these arrays defines empty, cause new updated likes need to be stored. cant over loaded the new one to old one
		 * 	important!
		 * */
		let newHeart = [];
		let newSmile = [];
		let newDislike = [];

		/* loops the new likes array and group them based on their reaction */
		likes.map((like) => {
			if (like.reaction == "heart") {
				newHeart.push(like);
			}

			if (like.reaction == "smile") {
				newSmile.push(like);
			}

			if (like.reaction == "dislike") {
				newDislike.push(like);
			}
		});

		/* set the final values as a result */
		setHeart(newHeart);
		setSmile(newSmile);
		setDislike(newDislike);

		// console.log(heart, smile, dislike);
	}, [likes]);

	return (
		<ReactionCounts_Container>
			<Heart_Container className='heart_container' $heart={heart}>
				<Fontawesome type={"faHeart"} />

				<div className='heart_number number'>{heart.length}</div>
				{/** this is a list that will show the users who liked the post, add functionality // TODO  */}
				{/* {heartList && <div className='heart_list users_list'></div>} */}
			</Heart_Container>

			<Smile_Container className='smile_container' $smile={smile}>
				<Fontawesome type={"faFaceLaughBeam"} />
				<div className='smile_number number'>{smile.length}</div>
			</Smile_Container>

			<Dislike_Container className='dislike_container' $dislike={dislike}>
				<Fontawesome type={"faThumbsDown"} />
				<div className='dislike_number number'>{dislike.length}</div>
			</Dislike_Container>
		</ReactionCounts_Container>
	);
};
