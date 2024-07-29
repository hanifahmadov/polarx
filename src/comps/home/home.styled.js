/* eslint-disable */
import styled from "styled-components";
// import { motion } from "framer-motion";

// export const Project_Content = styled.div(({ theme: {} }) => ({}));

// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));

// import spc from "./images/spc1.jpg";

export const Home_Container = styled.div(({ theme: {} }) => ({
	/** home is rendering in inside MainLayout the right column, Home.js parent is MainLayout right column and its scrollable.
	 * 	if Home gets overflows, theen its parent will be scrollable, in this case whole Home page will be scroll up-down.
	 * 	make the Home.js right section, accoutn section sticky to keep at the top right corner.
	 *
	 * home has 2 column, left and right, Left is for the content and right is for the account
	 * despite of the height 100%, its not visible, as long as there is an elements, you can check by changing the % to rem.
	 */
	width: "100%",
	height: "100%",

	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",

	/** Home.js left column - for the Posts and Content */

	/** Home.js right column - for the signedUser Account */
	".home_left_column": {
		/**
		 * so, the left section grow is 1, and when text it large, it shriks the both sides left and right side down
		 * to their minimum px. No worry, the center column, or homejs left column will have a main child to have a secific with.
		 * i can not be grow all the way left and right at all.
		 */

		/* this section will be added a lot of posts and it will be overflow, no idea why its 100vh, comment it out later */
		flexGrow: 1,

		// background: "blue",

		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		overflowY: "auto", // Ensure content inside can scroll
		paddingTop: "20px",
		paddingBottom: "40px",

		".fixed_with": {
			width: "40rem",
			height: "200rem",


			// background: 'gray',

			".post_input": {
				width: "100%",

				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",

				background: "rgba(0, 0, 0, .1)",

				padding: "10px",
				borderRadius: "10px",

				/* trying keep the post on top */

			
			},
		},
	},

	/** Home.js right column - for the signedUser Account */
	".home_right_column": {
		/** the other navbar elements can be shrink down to 148px like minWidth: "148px".
		 * 	keep this one for now 100% then re-arrange it later if needed.
		 *
		 * but make the height 100vh to make it sticky.
		 *
		 * actually on the right side there will be 2 divs, account and other-users, make the account element sticky only.
		 * OK.
		 *
		 * so, the left section grow is 1, and when text it large, it shriks the both sides left and right side down
		 * to their minimum px. No worry, the center column, or homejs left column will have a main child to have a secific with.
		 * i can not be grow all the way left and right at all. for now, keep minWidth 21.
		 *
		 */

		width: "21rem",

		height: "100svh",

		borderLeft: ".1px solid black",

		position: "sticky",
		top: 0,

		/* Account renders here*/
		".top_row_presents_account": {
			width: "100%",

			display: "flex",
			justifyContent: "center",
			alignItems: "center",

			padding: "20px 0px",
		},

		/* AllUsers  renders here */
		".bottom_row_presents_allusers": {},
	},
}));

export const Top_Section = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "100%",

	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center",

	".signedUser_avatar": {
		height: "3.5rem",
		width: "3.5rem",
		borderRadius: "50%",
		border: "3px solid rgba(0, 0, 0, 0.05)",
		alignSelf: "flex-start",
	},

	".textarea_wrapper": {
		width: "100%",
		height: "100%",
		height: "fit-content",

		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",

		marginLeft: "0.5rem",
		borderRadius: "10px",
	},
}));

export const Bottom_Section = styled.div(({ theme: {} }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",

	width: "100%",
	paddingLeft: "4.2rem",
	paddingRight:'5px',
	marginTop: ".75rem",

	".post_button_wrapper": {

		button: {
			color: "#fff",
			background: "#052c65",

			textAlign: "center",
			fontSize: "1rem",
			fontWeight: "600",

			padding: "2px 5px",
			borderRadius: "2px",
            letterSpacing: ".25px",

            cursor: "pointer",
            transition: "all .1s ease-in-out",
		

			"&:hover": {
				background: "#000",
			},
		},
	},
}));

// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled.div(({ theme: {} }) => ({}));
