/* eslint-disable */
import styled from "styled-components";
import { motion } from "framer-motion";

/* REACTION COUNTS */
export const ReactionCounts_Container = styled.div(
	({
		theme: {},
		$padding,
		$margin,
		$width,
		$gap,
		$numberFontSize,
		$numberLineHeight,
		$numberFontWeight,
		$numberPadding,
		$numberMargin,
	}) => {
		return {
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "center",
			gap: $gap ? $gap : "20px",

			width: $width ? $width : "fit-content",

			margin: $margin ? $margin : "10px 0px 0px 0px",
			padding: $padding ? $padding : "5px",

			".number": {
				fontWeight: $numberFontWeight ? $numberFontWeight : "700",
				cursor: "pointer",

				background: "rgba(255, 255, 255, .85)",

				lineHeight: $numberLineHeight ? $numberLineHeight : "15px",
				textAlign: "center",
				borderRadius: "2px",
				fontSize: $numberFontSize ? $numberFontSize : ".9rem",
				padding: $numberPadding ? $numberPadding : "0px 5px",
			},

			// background: "red",
		};
	}
);

/* this container is used inside .likes_counts_main_section */
export const Heart_Container = styled.div(({ theme: {}, $heart, $iconNumberGap }) => ({
	/*  create animation for these elements.fyi transition animation doesnt work on display none.
		for now, use opacity 0 and then dipslay none use framer motion, //TODO
	 */
	display: $heart.length ? "flex" : "none",
	justifyContent: "center",
	alignItems: "center",

	gap: $iconNumberGap ? $iconNumberGap : "3px",

	/* number common class styled in the above in parent section */
	".heart_number": {},

	/** this is the div that will hold the usernames and maybe user avatart
	 * who like the post and this will pop up when a user click the number next to likes.
	 *
	 * lets say 2 people smiled the post and in the media section, there will be a smile icon and number 2 next to it.
	 * when user clicks the number 2, then this div will be pop-up and will show those 2 users username and avatar maybe.
	 *
	 * in this case, this div position must be absolute, and its parents position must be relative. just mentioned it in the
	 * above of this comment.
	 *
	 * // TODO
	 * will do it later, after comment is done
	 */
	position: "relative",

	".heart_list": {
		height: "15rem",
		width: "10rem",
		background: "gray",

		borderRadius: "10px",

		position: "absolute",
		zIndex: "10",
		top: "2px",
		left: "30px",

		overflow: "auto", // or scroll
	},
}));

export const Smile_Container = styled.div(({ theme: {}, $smile, $iconNumberGap }) => ({
	/*  create animation for these elements.fyi transition animation doesnt work on display none.
		for now, use opacity 0 and then dipslay none use framer motion, //TODO
	 */
	display: $smile.length ? "flex" : "none",
	justifyContent: "center",
	alignItems: "center",
	gap: $iconNumberGap ? $iconNumberGap : "3px",

	/* number common class styled in the above in parent section */
	".smile_number": {},
}));

export const Dislike_Container = styled.div(({ theme: {}, $dislike, $iconNumberGap }) => ({
	/*  create animation for these elements.fyi transition animation doesnt work on display none.
		for now, use opacity 0 and then dipslay none use framer motion, //TODO
	 */
	display: $dislike.length ? "flex" : "none",
	justifyContent: "center",
	alignItems: "center",
	gap: $iconNumberGap ? $iconNumberGap : "3px",

	/* number common class styled in the above in parent section */
	".dislike_number": {},
}));

export const Display_User_Avatar = styled.div(({ theme: {}, $imgWidth, $imgHeight, $width, $height, $border }) => {
	return {
		img: {
			width: $imgWidth ? $imgWidth : "2.25rem",
			height: $imgHeight ? $imgHeight : "2.25rem",
			borderRadius: "50%",
			border: $border ? $border : "2px solid white",
		},
	};
});
export const Content_Section = styled.div(({ theme: {}, $background, $padding }) => {
	return {
		width: "fit-content",
		minWidth: "16rem",
		background: $background ? $background : "rgba(0, 0, 0, .05)",
		padding: $padding ? $padding : "5px 10px",
		borderRadius: "10px",

		".username": {
			width: "100%",
			display: "flex",
			fontWeight: "600",
			lineHeight: "12px",
			fontSize: ".85rem",
		},

		".content": {
			width: "100%",
			fontSize: ".9rem",
		},
	};
});

export const Timeline_Section = styled.div(({ theme: {}, $imgWidth, $imgHeight, $width, $height, $border }) => {
	return {
		display: "flex",
		justifyContent: "space-between",

		padding: "0px 10px",
	};
});

export const Top_Row = styled.div(({ theme: {}, $gap }) => {
	return {
		display: "flex",
		gap: $gap ? $gap : "10px",

		".button": {
			fontSize: ".75rem",
			fontWeight: "500",
			cursor: "pointer",
			position: "relative",
		},
	};
});

export const Bottom_Row = styled.div(({ theme: {}, $gap }) => {
	return {
		display: "flex",
		gap: $gap ? $gap : "10px",
	};
});
