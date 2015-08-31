import React from 'react';
import FlickList from './components/FlickList.jsx';
import flickStore from './stores/FlickStore';

flickStore.onChange(() => {
  React.render(<FlickList flicks={flickStore.getFlicks()} />, app);
});
