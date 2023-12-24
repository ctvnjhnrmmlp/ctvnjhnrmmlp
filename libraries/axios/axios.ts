import axios from 'axios';

export const getBlogs = async () => {
	const response = await axios({
		method: 'GET',
		url: 'https://dev.to/api/articles?username=ctvnjhnrmmlp',
	});

	return response;
};
