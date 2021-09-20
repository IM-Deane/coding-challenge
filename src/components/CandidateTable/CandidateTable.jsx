import React from "react";

import { DownCaret } from "../../ui-kit/icons/index.js";

import "./CandidateTable.styles.css";

import Candidate from "../Candidate/Candidate.jsx";

function CandidateTable({ candidates }) {
	return (
		<div>
			<header
				style={{
					borderBottom: "1px solid black",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div>
					<input type="checkbox" />
					<DownCaret className="down-caret" />
				</div>
				<div>
					<p>
						Candidate Name <DownCaret className="down-caret" />
					</p>
				</div>
				<div>
					<p>Status</p>
				</div>
				<div>
					<p>
						# Apps <DownCaret className="down-caret" />
					</p>
				</div>
				<div>
					<p>
						Last Action <DownCaret className="down-caret" />
					</p>
				</div>
			</header>
			<section style={{ borderBottom: "1px solid black" }}>
				{candidates.map((candidate) => (
					<Candidate key={candidate.id} candidate={candidate} />
				))}
			</section>
		</div>
	);
}

export default CandidateTable;
