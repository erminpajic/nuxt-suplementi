import  Vue  from  "vue";

Vue.filter("formatCurrency",  function(value)  {
	return new Intl.NumberFormat('hr-HR', {
		style: 'currency',
		currency: 'HRK'
	}).format(value);
});