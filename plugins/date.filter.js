import  Vue  from  "vue";

Vue.filter("formatDate",  function(value,dateFormat)  {
	let options;

	if(dateFormat) {
		options = dateFormat;
	} else {
		options = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric'
		};
	}
	return new Date(value * 1000).toLocaleString('hr', options);
});