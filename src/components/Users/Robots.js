export const robots = [
	{
		id: 1,
		name: 'Leanne Graham',
		username: 'Bret',
		email: 'Sincere@april.biz',
		background: 'bg-light-green',
	},
	{
		id: 2,
		name: 'Ervin Howell',
		username: 'Antonette',
		email: 'Shanna@melissa.tv',
		background: 'bg-light-blue',
	},
	{
		id: 3,
		name: 'Clementine Bauch',
		username: 'Samantha',
		email: 'Nathan@yesenia.net',
		background: 'bg-light-red',
	},
	{
		id: 4,
		name: 'Patricia Lebsack',
		username: 'Karianne',
		email: 'Julianne.OConner@kory.org',
		background: 'bg-light-yellow',
	},
	{
		id: 5,
		name: 'Chelsey Dietrich',
		username: 'Kamren',
		email: 'Lucio_Hettinger@annie.ca',
		background: 'bg-pink',
	},
	{
		id: 6,
		name: 'Mrs. Dennis Schulist',
		username: 'Leopoldo_Corkery',
		email: 'Karley_Dach@jasper.info',
		background: 'bg-yellow',
	},
	{
		id: 7,
		name: 'Kurtis Weissnat',
		username: 'Elwyn.Skiles',
		email: 'Telly.Hoeger@billy.biz',
		background: 'bg-green',
	},
	{
		id: 8,
		name: 'Nicholas Runolfsdottir V',
		username: 'Maxime_Nienow',
		background: 'bg-purple',
		email: 'Sherwood@rosamond.me',
	},
	{
		id: 9,
		name: 'Glenna Reichert',
		username: 'Delphine',
		email: 'Chaim_McDermott@dana.io',
		background: 'bg-white',
	},
	{
		id: 10,
		name: 'Clementina DuBuque',
		username: 'Moriah.Stanton',
		email: 'Rey.Padberg@karina.biz',
		background: 'bg-blue',
	},
];

const Robots = async () => {
	const resData = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await resData.json();
	const RobotComponent = data.forEach((datum) => {
		console.log(datum.name);
		return datum.name;
	});
	return <div>{RobotComponent}</div>;
};

export default Robots;
