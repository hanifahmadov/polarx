/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));

export const Post_Container = styled.div(({ theme: {} }) => ({
	width: "100%",
	height: "10rem",

	display: "flex",
	flexDirection: "row",

	background: "#1a2730",

	borderRadius: "10px",
	overflow: "hidden",

	paddingTop: "1rem",
	marginTop: "1rem",

	".postowner_avatar_section": {
		width: "5.5rem",
		height: "100%",

		// background: "blue",

		display: "flex",
		justifyContent: "center",

		img: {
			height: "3rem",
			width: "3rem",
			borderRadius: "50%",
		},
	},

	".post_content_section": {
		width: "100%",
		height: "100%",

		// background: "green",

		display: "flex",
		flexDirection: "column",

		".header_section": {
			".title_wrapper": {
				".title": {
					fontSize: "1.75rem",
					lineHeight: "1.5rem",
				},

				".faCircleCheck": {
					marginLeft: "10px",
				},
			},

			".timeline_wrapper": {
				".timeline": {
					fontSize: ".75rem",
					color: "#ffffff80",
				},

				".faUniversalAccess": {
					marginLeft: "5px",
					cursor: "not-allowed",
					fontSize: "12px",
					color: "#ffffff90",
				},
			},
		},
	},
}));