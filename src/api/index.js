import axios from 'axios';

const clientApi = axios.create({
  baseURL: 'http://127.0.0.1:8001/api',
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': '{{ csrf_token() }}',
  }
});

export default clientApi;