/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

// export const Project_Content = styled.div(({ theme: {} }) => ({}));
// export const Project_Content = styled(motion.div)(({ theme: {} }) => ({}));

export const Post_Container = styled.div(({ theme: {} }) => ({
	width: "100%",

	display: "flex",
	flexDirection: "row",

	background: "#1a2730",

	borderRadius: "10px",
	overflow: "hidden",

	padding: "1rem 1rem 1rem 0rem",
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
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",

				".title": {
					fontSize: "1.5rem",
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

		".text_section": {
			marginTop: "10px",
		},

		".media_section": {
			marginTop: "10px",
			borderRadius: "10px",
			img: {
				height: "25rem",
				width: "25rem",
				borderRadius: "10px",
			},
		},

		".media_counts_section": {
			padding: "8px 10px 0px 10px",

			width: "100%",
			display: "flex",
			justifyContent: "space-between",



			".likes_counts_main_section": {
				

			},

			".numbers": {
				marginLeft: "5px",
				fontWeight: "600",
				fontSize: ".9rem",
			},

			".text": {
				marginLeft: "8px",
				color: "#ffffff70",
				fontWeight: "500",
				fontSize: ".9rem",
			},

			".comments_count": {
				marginLeft: "10px",
			},
		},

		".media_related_section": {
			marginTop: "1rem",
			width: "100%",
			display: "flex",
			justifyContent: "space-between",

			span: {
				fontSize: "1rem",
				fontWeight: "500",
				width: "7rem",

				border: "1px solid #ffffff80",
				borderRadius: "5px",
				padding: "5px 8px",
				textAlign: "center",
				lineHeight: "20px",
				cursor: "pointer",
			},

			".bookmark": {
				border: "none",
				fontSize: "1.1rem",
				width: "2.3rem",
				height: "2.3rem",

				border: "1px solid #ffffff80",
				borderRadius: "50%",
			},

			".likes": {
				padding: "0px",
				display: "inline-block !important",
				position: "relative",

				".sikko_like": {
					width: "100%",
					height: "100%",
					padding: "5px 8px",
				},
			},
		},
	},
}));
