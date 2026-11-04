import axios from 'axios';

// Menggunakan import.meta.env khusus untuk Vite
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api';
const JOURNAL_ID = import.meta.env.VITE_JOURNAL_ID || 'jsp'; 

const apiClient = axios.create({
  baseURL: `${BACKEND_URL}/${JOURNAL_ID}`,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getCurrentIssue = async () => {
  const response = await apiClient.get('/issues/current');
  return response.data.data; 
};

export const getArchives = async () => {
  const response = await apiClient.get('/issues/archives');
  return response.data.data;
};

export const getIssueDetails = async (issueId) => {
  const response = await apiClient.get(`/issues/${issueId}`);
  return response.data.data;
};

export const getArticleDetails = async (articleId) => {
  const response = await apiClient.get(`/articles/${articleId}`);
  return response.data.data;
};

export const getJournalInfo = async () => {
  const response = await apiClient.get('/info');
  return response.data.data; 
};