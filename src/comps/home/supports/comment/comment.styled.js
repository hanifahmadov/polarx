/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

export const Comment_Container = styled.div(
	({
		theme: {
			device: { mobile },
		},
		$commentOpen,
		$isFor,
	}) => {
		return {
			display: "flex",
			justifyContent: "flex-start",

			".comment_content_and_timeline_column_right": {
				display: "flex",
				justifyContent: "flex-start",
				flexDirection: "column",

				width: "100%",
				padding: "0px 5px",

				// background: 'red',

				".comment_main_controller_container": {
					/* important */
					width: "fit-content",
					minWidth:'10rem',

					// background: "red",

					...(mobile && {

					}),
				},

				".replies_wrapper_inside_comment_comp": {
					// width: "100%",
				},
			},
		};
	}
);
