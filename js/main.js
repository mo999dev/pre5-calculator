window.addEventListener('DOMContentLoaded', function(){

	var calcForm = document.getElementById('calcForm');
	calcForm.onsubmit = function(e) {
		var s1 = document.getElementById('s1').value,
			s2 = document.getElementById('s2').value,
			bak = document.getElementById('bak').value,
			resultBox = document.getElementById('result'),
			res = (s1*0.3) + (s2*0.3) + ((bak*40)/2400);

		resultBox.innerHTML = 'your rate is '  + Math.round(res * 100) / 100 + '%';
		resultBox.style.display = 'block';
		return false;

	};

});