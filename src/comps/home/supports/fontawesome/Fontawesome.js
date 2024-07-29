import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
	faHeart as faRegularHeart,
	faThumbsDown as faRegularThumbsDown,
	faBookmark as faRegularBookmark,
	faThumbsUp as faThumbsUpRegular,
	faFaceSmile as faFaceSmileRegular,
	faThumbsDown as faThumbsDownRegular,
	faFaceLaughBeam as faFaceLaughBeamRegular,
} from "@fortawesome/free-regular-svg-icons";

import {
	faCircleXmark,
	faImage,
	faVideo,
	faMasksTheater,
	faCircleCheck,
	faUniversalAccess,
	faEarthAmericas,
	faThumbsUp,
	faComment,
	faHeart,
	faFaceSmile,
	faThumbsDown,
	faFaceLaughBeam,
} from "@fortawesome/free-solid-svg-icons";

library.add(
	faCircleXmark,
	faImage,
	faVideo,
	faMasksTheater,
	faCircleCheck,
	faUniversalAccess,
	faEarthAmericas,
	faComment,
	faRegularHeart,
	faRegularThumbsDown,
	faRegularBookmark,
	faThumbsUp,
	faComment,
	faHeart,
	faImage,
	faFaceSmile,
	faThumbsDown,
	faFaceLaughBeam,
	faFaceLaughBeamRegular,
	faThumbsDownRegular,
	faFaceSmileRegular,
	faThumbsUpRegular
);

const defineType = (type) => {
	switch (type) {
		case "faCircleCheck":
			return faCircleCheck;
		case "faEarthAmericas":
			return faEarthAmericas;
		case "faHeart":
			return faHeart;
		case "faRegularHeart":
			return faRegularHeart;
		case "faFaceSmile":
			return faFaceSmile;
		case "faFaceSmileRegular":
			return faFaceSmileRegular;
		case "faRegularBookmark":
			return faRegularBookmark;
		case "faFaceLaughBeam":
			return faFaceLaughBeam;
		case "faFaceLaughBeamRegular":
			return faFaceLaughBeamRegular;
		case "faThumbsDown":
			return faThumbsDown;
		case "faThumbsDownRegular":
			return faThumbsDownRegular;
		default:
			return null;
	}
};

export const Fontawesome = ({
	type,
	color,
	size,
	padding,
	margin,
	position,
	top,
	left,
	right,
	down,
	paddingBottom,
	paddingTop,
	paddingLeft,
	paddingRight,
	marginTop,
	marginBottom,
	marginLeft,
	marginRight,
	fontSize,
}) => {
	const icon = defineType(type);
	return icon ? (
		<FontAwesomeIcon
			icon={icon}
			style={{
				color,
				size,
				padding,
				margin,
				position,
				top,
				left,
				right,
				down,
				paddingBottom,
				paddingTop,
				paddingLeft,
				paddingRight,
				marginTop,
				marginBottom,
				marginLeft,
				marginRight,
				fontSize,
			}}
		/>
	) : null;
};
