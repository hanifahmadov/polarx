/* eslint-disable */
/**
 * NPM IMPORTS
 */
import React, { Fragment, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useMediaQuery } from "react-responsive";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { ThemeProvider } from "styled-components";

/* REACT TOSTIFY */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/*  STATES & STYLED  */
import { backdropDefault, darkmodeDefault, deviceDefault } from "./comps/auth/shared/store/states";
import { GlobalStyled } from "./common.styled";

/* LAYOUTS */
import { RequireAuthLayout } from "./comps/layouts/RequireAuthLayout";
import { PersistentLayout } from "./comps/layouts/PersistentLayout";
import { RegisterLayout } from "./comps/layouts/RegisterLayout";
import { MainLayout } from "./comps/layouts/MainLayout";

/* HELPER COMPONENTS */
import { Signin } from "./comps/auth/elements/Signin";
import { Signup } from "./comps/auth/elements/Signup";
import { Home } from "./comps/home/Home";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Fragment>
			{/* Persistent Layout will navigate("/signin") if user is not signed in */}
			<Route element={<PersistentLayout />}>
				<Route element={<RegisterLayout />}>
					<Route path='/signin' element={<Signin />} />
					<Route path='/signup' element={<Signup />} />
				</Route>
				<Route element={<RequireAuthLayout />}>
					<Route path='/' element={<MainLayout />}>
						<Route path='/' element={<Home />} />
						<Route path='notifications' element={<div />} />
						<Route path='messages' element={<div />} />
						<Route path='bookmarks' element={<div />} />
					</Route>
				</Route>
			</Route>
		</Fragment>
	)
);

export const App = () => {
	let [device, setDevice] = useRecoilState(deviceDefault);
	let [darkmode, setDarkmode] = useRecoilState(darkmodeDefault);

	/** bcakdrop global state */
	const backdrop = useRecoilValue(backdropDefault);

	device = JSON.parse(JSON.stringify(device));

	// mobile
	const mobile = useMediaQuery({
		query: "(max-device-width: 500px)",
	});

	// tablet
	const tablet = useMediaQuery({
		query: "(max-device-width: 840px)",
	});

	// laptop
	const laptop = useMediaQuery({
		query: "(max-device-width: 992px)",
	});

	// desktop
	const desktop = useMediaQuery({
		query: "(max-device-width: 1440)",
	});

	useEffect(() => {
		device = {
			...device,

			mobile,
			tablet,
			laptop,
			desktop,
		};

		setDevice(device);
	}, [mobile, tablet, laptop, desktop]);

	return (
		<ThemeProvider theme={{ device, darkmode, backdrop }}>
			<ToastContainer />
			{/* <GlobalStyled /> */}
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};

/* 


<Route element={<PersistentLayout />}>
				<Route element={<RegisterLayout />}>
					<Route path='/welcome' element={<Signin />} />
					<Route path='/register' element={<Signup />} />
				</Route>
				<Route element={<RequireAuthLayout />}>
					<Route path='/' element={<AppLayout />}>
						<Route index element={<Main />} />
					</Route>
				</Route>
		<Route path='*' element={<Error />} />
</Route>


*/
