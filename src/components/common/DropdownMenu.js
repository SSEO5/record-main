import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { HiDotsVertical } from "react-icons/hi";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

export default function DropdownMenu({
	dotButtonLeft,
	dropdownTop,
	dropdownLeft,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};

		window.addEventListener("click", handleOutsideClick);

		return () => {
			window.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	return (
		<DropdownContainer
			ref={dropdownRef}
			$dotButtonLeft={dotButtonLeft}
			$dropdownTop={dropdownTop}
			$dropdownLeft={dropdownLeft}
		>
			<HiDotsVertical className="dotButton" onClick={toggleMenu} />

			{isOpen && (
				<div className="dropdown">
					<a href="/main" className="edit">
						<RiEdit2Fill className="drop-icon" />
						<span>수정하기</span>
					</a>

					<a href="/main" className="delete">
						<MdDelete className="drop-icon" />
						<span>삭제하기</span>
					</a>
				</div>
			)}
		</DropdownContainer>
	);
}

const DropdownContainer = styled.div`
	.dotButton {
		width: 20px;
		height: 20px;
		padding: 3px 3px;
		position: relative;
		left: ${({ $dotButtonLeft }) => $dotButtonLeft || "130px"};
		cursor: pointer;
		border-radius: 100%;
		color: rgba(0, 0, 0, 0.7);
		&:hover {
			background: #915cff;
			color: #ffffff;
		}
	}

	.dropdown {
		position: absolute;
		top: ${({ $dropdownTop }) => $dropdownTop || "56px"};
		left: ${({ $dropdownLeft }) => $dropdownLeft || "203px"};
		background-color: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		z-index: 1;
		display: flex;
		flex-direction: column;
		font-size: 15px;

		a {
			padding: 10px;
			text-decoration: none;
			color: #333;
		}

		.edit {
			color: #979a98;
		}

		.delete {
			color: #f53536;
		}

		.drop-icon {
			padding-right: 5px;
			position: relative;
			top: 2px;
		}
	}
`;
