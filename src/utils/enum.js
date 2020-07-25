const PaperFrequency = [
	'Annual',
	'Half yearly',
	'Thrice in year',
	'Four monthly',
	'Monthly',
	'Fortnightly',
	'Bi-Monthly',
	'Ten days a month',
	'Thrice in a month',
	'Daily',
	'Twice a week',
	'Thrice a week',
	'Four a week',
	'Weekly',
];
const PaperFrequencyMapped = [
	{
		frequency: 'Annual',
		frequency_count: 1,
		frequency_type: 'Year',
	},
	{
		frequency: 'Half Yearly',
		frequency_count: 2,
		frequency_type: 'Year',
	},
	{
		frequency: 'Thrice in year',
		frequency_count: 3,
		frequency_type: 'Year',
	},
	{
		frequency: 'Four monthly',
		frequency_count: 4,
		frequency_type: 'Month',
	},
	{
		frequency: 'Monthly',
		frequency_count: 1,
		frequency_type: 'Month',
	},
	{
		frequency: 'Fortnightly',
		frequency_count: 2,
		frequency_type: 'Month',
	},
	{
		frequency: 'Bi-Monthly',
		frequency_count: 2,
		frequency_type: 'Month',
	},
	{
		frequency: 'Ten days a month',
		frequency_count: 10,
		frequency_type: 'Month',
	},
	{
		frequency: 'Thrice in a month',
		frequency_count: 3,
		frequency_type: 'Month',
	},
	{
		frequency: 'Daily',
		frequency_count: 7,
		frequency_type: 'Day',
	},
	{
		frequency: 'Twice a week',
		frequency_count: 2,
		frequency_type: 'Day',
	},
	{
		frequency: 'Thrice a week',
		frequency_count: 3,
		frequency_type: 'Day',
	},
	{
		frequency: 'Four a week',
		frequency_count: 4,
		frequency_type: 'Day',
	},
	{
		frequency: 'Weekly',
		frequency_count: 1,
		frequency_type: 'Day',
	},
];

const Property = ['Building', 'Home', 'Shop', 'Institution'];
const SubProperty = ['Airport', 'College', 'School', 'Hospital', 'Office'];
const uuidv4 = () => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
};

module.exports.PaperFrequency = PaperFrequency;
module.exports.PaperFrequencyMapped = PaperFrequencyMapped;
module.exports.Property = Property;
module.exports.SubProperty = SubProperty;
module.exports.uuidv4 = uuidv4;
