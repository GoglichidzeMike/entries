import axios from 'axios';
import { apiBaseUrl } from './host';

export const createEntry = async (payload = {}) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`${apiBaseUrl}/entries`, payload)
			.then((response) => {
				return resolve(response.data);
			})
			.catch((error) => {
				return reject(error);
			});
	});
};

export const updateStatus = async (payload = {}) => {
	console.log(payload);
	return new Promise((resolve, reject) => {
		axios
			.post(`${apiBaseUrl}/entries/status`, payload)
			.then((response) => {
				return resolve(response.data);
			})
			.catch((error) => {
				return reject(error);
			});
	});
};

export const getEntries = async () => {
	return new Promise((resolve, reject) => {
		axios
			.get(`${apiBaseUrl}/entries`)
			.then((response) => {
				return resolve(response.data);
			})
			.catch((error) => {
				return reject(error);
			});
	});
};

export const deleteEntry = async (payload = {}) => {
	const { id } = payload;
	return new Promise((resolve, reject) => {
		axios
			.delete(`${apiBaseUrl}/entries/${id}`)
			.then((response) => {
				return resolve(response.data);
			})
			.catch((error) => {
				return reject(error);
			});
	});
};
