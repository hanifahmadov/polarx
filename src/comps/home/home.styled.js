/* eslint-disable */
import styled from "styled-components";
// import { motion } from "framer-motion";

// export const Project_Content = styled.div(({ theme: {} }) => ({}));

// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));

// import spc from "./images/spc1.jpg";

export const Home_Container = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "100%",

	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",

	// background: "red",
}));

export const Center_Section = styled.div(({ theme: {} }) => ({
	minWidth: "30rem",
	maxWidth: "50rem",
	width: "100%",
	height: "100%",

	marginRight: "14px",

	// background: "#1a2730",

	borderRadius: "10px",
	// padding: "1rem 20px 1rem 20px",
}));

export const Right_Section = styled.div(({ theme: {} }) => ({
	minWidth: "18rem",
	maxWidth: "22rem",
	width: "100%",
	height: "100%",

	borderRadius: "10px",
	// padding: "1rem 20px 1rem 20px",

	overflow: "hidden",

	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "space-between",

	".account_section": {
		width: "100%",
		height: "25rem",

		background: "#1a2730",
		borderRadius: "10px",
		// overflow: "hidden",

		// backgroundImage: `url(${spc})`,
		// backgroundSize: "cover",
		// backgroundRepeat: "no-repeat",
	},

	".allusers_section": {
		width: "100%",
		height: "100%",

		marginTop: "1rem",

		background: "#1a2730",
		borderRadius: "10px",
		// padding: "1rem 20px 1rem 20px",
		overflow: "hidden",
	},
}));

export const Post_Section = styled.div(({ theme: {} }) => ({
	width: "100%",

	// paddingBottom: '10px',

	background: "#1a2730",

	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",

	padding: "1rem 20px 1rem 20px",
	borderRadius: "10px",

	".top_section": {
		width: "100%",
		height: "100%",

		padding: "0px",

		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",

		position: "relative",

		".signedUser_avatar": {
			height: "2.75rem",
			width: "2.75rem",
			borderRadius: "50%",
			position: "absolute",
			top: "4px",
		},

		".textarea_wrapper": {
			width: "100%",
			height: "100%",
			height: "10rem",
			height: "fit-content",

			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "center",

			marginLeft: "3.5rem",
			borderRadius: "10px",
			background: "#07161d",

			".textarea": {
				width: "100%",
				height: "100%",
				border: "none",
				overflow: "auto",
				outline: "none",
				WebkitBoxShadow: "none", // -webkit-box-shadow
				MozBoxShadow: "none", // -moz-box-shadow
				boxShadow: "none",
				resize: "none",
				padding: "12px",

				fontSize: "1.1rem",
				borderRadius: "10px",
				background: "transparent",
				color: "white",

				"&::placeholder": {
					color: "#ffffff80",
					paddingLeft: "5px",
				},
				// border: "1px solid #ffffff30",
			},

			".image_preview": {
				margin: "2rem .5rem .5rem .5rem",
				alignSelf: "flex-start",
				border: "1px solid #ffffff30",
				borderRadius: "10px",

				position: "relative",

				".selected_image": {
					height: "15rem",
					width: "15rem",
					borderRadius: "10px",
				},

				".faCircleXmark": {
					display: "block",
					lineHeight: "0px",
					textAlign: "center",
					overflow: "hidden",
					position: "absolute",
					top: "-7px",
					right: "-7px",
					fontSize: "1.4rem",
					cursor: "pointer",
					background: "white",
					color: "red",
					borderRadius: "50%",
					border: "1px solid white",
				},
			},
		},
	},

	".bottom_section": {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",

		width: "100%",
		paddingLeft: "3.5rem",
		marginTop: ".75rem",

		// background: 'red',

		".post_button_wrapper": {
			button: {
				width: "100%",
				textDecoration: "none",
				color: "#fff",
				fontSize: "1rem",
				fontWeight: "700",

				padding: "5px 14px",
				border: "1px solid #ffffff30",
				background: "#003787",
				borderRadius: "20px",

				transition: "all .2s ease-in-out",
				"&:hover": {
					background: "#052c65",
					borderColor: "#ffffff40",
				},
			},
		},
	},
}));

export const Buttons_Section = styled.div(({ theme: {} }) => ({
	display: "flex",

	".select_image": {
		fontWeight: "600",
		fontSize: ".8rem",
		background: "#07161d99",
		borderRadius: "20px",
		cursor: "pointer",
		color: "#ffffff99",

		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		borderRadius: "50%",

		transition: "all .1s ease-in-out",

		label: {
			cursor: "pointer",
			width: "100%",
			height: "100%",
			padding: "12px",
			lineHeight: "0px",
			borderRadius: "50%",
		},

		".icon ": {
			fontSize: "1.2rem",
			borderRadius: "50%",
			lineHeight: "0px",
		},

		"&:hover": {
			background: "#07161d",
			color: "white",
		},
	},

	".select_video": {
		"& > *": {
			pointerEvents: "none",
		},

		fontWeight: "600",
		fontSize: ".9rem",
		background: "#07161d90",
		borderRadius: "20px",
		cursor: "pointer",
		color: "#ffffff50",

		marginLeft: "15px",

		transition: "all .1s ease-in-out",

		label: {
			width: "100%",
			height: "100%",
			padding: "12px",
			lineHeight: "0px",
			borderRadius: "50%",
			pointerEvents: "none",
		},

		".icon": {
			fontSize: "1.2rem",
			borderRadius: "50%",
			lineHeight: "0px",
		},

		"&:hover": {
			// background: "#07161d",
			// color: "white",

			cursor: "not-allowed",
		},
	},

	".select_poll": {
		"& > *": {
			pointerEvents: "none",
		},

		fontWeight: "600",
		fontSize: ".9rem",
		background: "#07161d90",
		borderRadius: "20px",
		cursor: "pointer",
		color: "#ffffff50",

		marginLeft: "15px",

		transition: "all .1s ease-in-out",

		label: {
			width: "100%",
			height: "100%",
			padding: "12px",
			lineHeight: "0px",
			borderRadius: "50%",
			pointerEvents: "none",
		},

		".icon": {
			fontSize: "1.2rem",
			borderRadius: "50%",
			lineHeight: "0px",
		},

		"&:hover": {
			cursor: "not-allowed",
		},
	},
}));

export const Display_Section = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "100%",
	marginTop: '1rem',
	overflow: "scroll",



}));
