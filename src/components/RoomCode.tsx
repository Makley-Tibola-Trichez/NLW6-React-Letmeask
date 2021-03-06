import React from "react";

import "../styles/room-code.scss";
import copyImg from "../assets/images/copy.svg";

type RoomCodeProps = {
	code: string;
};

export default function RoomCode(props: RoomCodeProps) {
	function copyRoomCodeToClipboard() {
		// const roomCode = document.getElementById("room-code");
		// roomCode.select();
		// document.execCommand("copy");
		navigator.clipboard.writeText(props.code);
	}

	return (
		<button className="room-code" onClick={copyRoomCodeToClipboard}>
			<div>
				<img src={copyImg} alt="Copy room code" />
			</div>
			<span>Sala #{props.code}</span>
		</button>
	);
}
