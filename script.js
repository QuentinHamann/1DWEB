function laby(){


	let mazeTable = [
	[ 1, 1, 0, 1, 1],
	[ 0, 0, 0, 1, 1],
	];


mazeTable.forEach(line=>{
	const generatedLine = document.createElement("div");
	generatedLine.className = "flex";
	line.forEach(column=>{
		const generatedColumn = document.createElement("div");
		if (column === 1){
			generatedColumn.className = "black";
		}
		else if (column === 0){
			generatedColumn.className = "white";
		}

		generatedLine.appendChild(generatedColumn)
	});
	

	document.querySelector(".labyTable").append(generatedLine)
	
});

}