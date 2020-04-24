import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

class App extends React.Component {
    state ={ songs: 
        [
            { title: 'No Scrubs', duration: '4:05' },
            { title: 'Macarena', duration: '2:30' },
            { title: 'All Star', duration: '3:15' },
            { title: 'I Want it That Way', duration: '1:45' }
        ] ,
        selectedSong: null
    };

    render(){
        return (
            <div className="ui container grid"> 
                <div className="ui row">
                    <div className="eight wide column">
                      <SongList  />
                    </div>
                    <div className="eight wide column">
                        <SongDetail  />
                    </div> 
                </div>                                       
            </div>
        );
    }
}
   

export default App;