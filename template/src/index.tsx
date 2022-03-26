import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
	bridgeReceiveIntegerFromNative,
	bridgeReceiveBooleanFromNative,
	bridgeReceiveStringFromNative,
	bridgeReceiveObjectFromNative,
	isCrestronTouchscreen,
} from "@crestron/ch5-crcomlib";
import App from "./App";

if (isCrestronTouchscreen()) {
	(window as any).bridgeReceiveIntegerFromNative =
		bridgeReceiveIntegerFromNative;
	(window as any).bridgeReceiveBooleanFromNative =
		bridgeReceiveBooleanFromNative;
	(window as any).bridgeReceiveStringFromNative =
		bridgeReceiveStringFromNative;
	(window as any).bridgeReceiveObjectFromNative =
		bridgeReceiveObjectFromNative;
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root"),
);
