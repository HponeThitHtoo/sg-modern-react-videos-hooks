import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const KEY = 'AIzaSyDe0DqnD93XTuGBHVTOqHsurOO9Asy0ft0';

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
      }
    });

    // console.log(response);
    setVideos(response.data.items);
    
  };

  // return {videos, search}; // One Way, Javascript Community Convention
  return [videos, search]; // another way, React State Convention
}

export default useVideos;