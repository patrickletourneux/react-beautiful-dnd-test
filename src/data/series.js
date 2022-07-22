const data = {
    positions  : {
        'position-1': {
      
          id: 'position-1',
          sanskrit_name: 'Navasana',
          english_name: 'Boat',
          img_url: 'https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1',
          user_id: 1,
          created_at: '2016-01-14T22:23:39.902Z',
          updated_at: '2016-01-14T22:23:39.902Z',
        },
        'position-2': {
          id: 'position-2',
          sanskrit_name: 'Ardha Navasana',
          english_name: 'Half-Boat',
          img_url: 'https://www.dropbox.com/s/1nx0r94msxjwvyp/boatbentlegs.svg?raw=1',
          user_id: 1,
          created_at: '2016-01-14T22:23:39.909Z',
          updated_at: '2016-01-14T22:23:39.909Z',
        },
        'position-3': {
          id: 'position-3',
          sanskrit_name: 'Dhanurasana',
          english_name: 'Bow',
          img_url: 'https://www.dropbox.com/s/wizj5kwxvez4c0a/bow.svg?raw=1',
          user_id: 1,
          created_at: '2016-01-14T22:23:39.912Z',
          updated_at: '2016-01-14T22:23:39.912Z',
        },
        'position-4': {
          id: 'position-4',
          sanskrit_name: 'Setu Bandha Sarvangasana',
          english_name: 'Bridge',
          img_url: 'https://www.dropbox.com/s/f1w64ybg4sn8ejt/bridge.svg?raw=1',
          user_id: 1,
          created_at: '2016-01-14T22:23:39.914Z',
          updated_at: '2016-01-14T22:23:39.914Z',
        },
        'position-5': {
          id: 'position-5',
          sanskrit_name: 'Baddha Konasana',
          english_name: 'Butterfly',
          img_url: 'https://www.dropbox.com/s/3h2pts6xbn28dh7/butterfly%3F.svg?raw=1',
          user_id: 1,
          created_at: '2016-01-14T22:23:39.917Z',
          updated_at: '2016-01-14T22:23:39.917Z',
        },
      },
      
    columns :{
        'serie-1': {
            id: 'serie-1',
            title : 'serie-1-title',
            positions : ['position-1','position-2','position-3','position-4','position-5']
        },
        'serie-2': {
          id: 'serie-2',
          title : 'serie-2-title',
          positions : []
        },
        'serie-3': {
          id: 'serie-3',
          title : 'serie-3-title',
          positions : []
        },
    },
    columnOrder : ['serie-1','serie-2','serie-3']
};

export default data;