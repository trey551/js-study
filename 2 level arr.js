function arr2Level() {
	var arr = [];
	var n = 10;
	for (var i = 0; i < n; i++) {
		arr[i] = [];
		for (var j = 0; j < n; j++) {
			arr[i][j] = Math.floor((Math.random() * 9) + 1);
		};
	};
	show(arr);
	function show(arr){
		for (var i = 0; i < arr.length; i++) {
			document.write(arr[i] + "<br>")
		};
	}
	var summ = 0;
	for (var i = 0; i < n; i++) {
		summ = summ + arr[i][i];
	};
	console.log(summ);
}


function createArrTaskA() {
	var arr = [];
	var n = 10;
	for (var i = 0; i < n; i++) {
		arr[i] = [];
		for (var j = 0; j < n; j++) {
			arr[i][j] = Math.floor((Math.random() * 11) + 1);
		};
	};
	function searchMax(arr) {
		var max = [0][0];
		for (var i = 0; i < arr.length; i++) {
			for (var j = i; j < arr.length; j++) {
				if(arr[i][j] > max) {
					max = arr[i][j];
				}
				document.write(arr[i][j] + " ")
			};
			document.write("<br>")
		};
		document.write("<br>" + "Max number    " + max);
	}
	function show(arr){
		for (var i = 0; i < arr.length; i++) {
			document.write(arr[i] + "<br>")
		};
		document.write("<br>")
	}
	show(arr);
	searchMax(arr);
}

function createArrTaskB() {
	var arr = [];
	var n = 10;
	for (var i = 0; i < n; i++) {
		arr[i] = [];
		for (var j = 0; j < n; j++) {
			arr[i][j] = Math.floor((Math.random() * 9) + 1);
		};
	};
	function searchMax(arr) {
		var max = [0][0];
		for (var i = arr.length - 1; i >= 0; i--) {
			for (var j = i; j < arr.length; j++) {
				if(arr[i][j] > max) {
					max = arr[i][j];
				}
				document.write(arr[i][j] + " ")
			};
			document.write("<br>")
		};
		document.write("<br>" + "Max number    " + max);
	}
	function show(arr){
		for (var i = 0; i < arr.length; i++) {
			document.write(arr[i] + "<br>")
		};
		document.write("<br>")
	}
	show(arr);
	searchMax(arr);
}

function objcts() {
	var people = [
			person1 = {
				name: "Vasya",
				age: 30,
				hobby: {
					name: "darts",
					time: 3600
				}
		},
			person2 = {
				name: "Pretya",
				age: 30,
				hobby: {
					name: "football",
					time: 200000
				}
		},
		 	person3 = {
				name: "Kolya",
				age: 20,
				hobby: {
					name: "snowboard",
					time: 34000
				}
		},
		 	person4 = {
				name: "Vitya",
				age: 40,
				hobby: {
					name: "Litroball",
					time: 8000000000000
				}
		},
			person5 = {
				name : "Semen",
				age : 40,
				hobby : {
					name: "Guitar",
					time: 8000000000000
				}
		}
	];
	
	

	for(var i = 0; i < people.length; i++) {
		for(var j in people[i]){
			if (typeof people[i][j] == 'object') {
				for (var k in people[i][j]) {
					document.write(k + "-" + people[i][j][k] + "<br>");
				}
			} else{
				document.write(j + "-" + people[i][j] + "<br>");
			}
			
		}
		document.write("<br><br>");
	}
}
