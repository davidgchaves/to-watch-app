import React from 'react/addons';
import FlickList from './components/FlickList.jsx';
import flickStore from './stores/FlickStore.jsx';

flickStore.onChange(() => {
  React.render(<FlickList flicks={flickStore.getFlicks()} />, app);
});
