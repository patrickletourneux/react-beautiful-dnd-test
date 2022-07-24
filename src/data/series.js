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
        'position-6':{
          id:  'position-6',
          sanskrit_name: 'Ustrasana',
          english_name: 'Camel',
          img_url: 'https://www.dropbox.com/s/o5gr4lngltsdg5r/camel.svg?raw=1',
          user_id: 1,
          created_at: '2016-01-14T22:23:39.920Z',
          updated_at: '2016-01-14T22:23:39.920Z',
        },
        'position-7': {
          id:  'position-7',
          sanskrit_name: 'Marjaryasana',
          english_name: 'Cat',
          img_url: 'https://www.dropbox.com/s/cginnz98of2jpgr/cat.svg?raw=1',
          user_id: 1,
          created_at: '2016-01-14T22:23:39.922Z',
          updated_at: '2016-01-14T22:23:39.922Z',
        },
        'position-8': {
          id: 'position-8',
          sanskrit_name: 'Bitilasana',
          english_name: 'Cow',
          img_url: 'https://www.dropbox.com/s/neau4ceai1rskh6/cow.svg?raw=1',
          user_id: 1,
          created_at: '2016-01-14T22:23:39.924Z',
          updated_at: '2016-01-14T22:23:39.924Z',
        }, 
        'position-9': {
          id: 'position-9',
          sanskrit_name: 'Utkatasana',
          english_name: 'Chair',
          img_url: 'https://www.dropbox.com/s/9emlawz8vayk8bm/chair.svg?raw=1',
          user_id: 1,
          created_at: '2016-01-14T22:23:39.926Z',
          updated_at: '2016-01-14T22:23:39.926Z',
        }
      },
      
    columns :{
        'S-1': {
            id: 'S-1',
            title : 'S-1',
            positions : ['position-1','position-2','position-3',
                'position-4','position-5','position-6','position-7','position-8','position-9']
        },
        'S-2': {
          id: 'S-2',
          title : 'S-2',
          positions : []
        },
        'S-3': {
          id: 'S-3',
          title : 'S-3',
          positions : []
        },
        'trash': {
          id: 'trash',
          title : 'trash',
          positions : []
        },
    },
    columnOrder : ['S-1','S-2','S-3','trash']
};

export default data;