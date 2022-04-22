import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { GenreResponseProps } from './components/SideBar'

import './styles/global.scss';

export function App() {
  
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar 
        setSelectedGenre={setSelectedGenre} 
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId} 
      />
      <Content 
        selectedGenreId={selectedGenreId} 
        selectedGenre={selectedGenre} 
      />
    </div>
  )
}