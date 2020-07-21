import axios from 'axios';

// const KEY = 'AIzaSyDe0DqnD93XTuGBHVTOqHsurOO9Asy0ft0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});