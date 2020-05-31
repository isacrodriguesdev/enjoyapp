
type ActionReducer = { type: string, payload: any };

const initialState = {
  users: [
    {
      "id": 9,
      "online": null,
      "connectionId": null,
      "priority": 25,
      "likes": 0,
      "hearts": 0,
      "favorites": 0,
      "name": "Sol",
      "lastName": "Almeida",
      "photo": "https://scontent.fgyn13-1.fna.fbcdn.net/v/t1.0-9/p960x960/80987140_1735308406602920_3888294800000024576_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=qKkbwRl1btMAX8sD-Da&_nc_ht=scontent.fgyn13-1.fna&_nc_tp=6&oh=6a83091175b722dce158cb0e69faad8d&oe=5EDB8C15",
      "email": "solalmeida@hotmail.com",
      "birthDay": "1985-02-05T03:00:00.000Z",
      "genre": "mulher",
      "profession": "Motorista de aplicativo",
      "descriptionPhrase": "Engraçada",
      "location": "Gôiania/GO",
      "sexualOrientation": "Hétero",
      "searching": "Amizade",
      "children": "Não",
      "relationshipStatus": "Casada",
      "bodyHeight": 165,
      "createdAt": "2020-05-30T22:19:53.621Z",
      "updatedAt": "2020-05-30T22:19:53.621Z"
    },
    {
      "id": 12,
      "online": null,
      "connectionId": null,
      "priority": 25,
      "likes": 0,
      "hearts": 0,
      "favorites": 0,
      "name": "Kelly",
      "lastName": "",
      "photo": "https://scontent.fgyn13-1.fna.fbcdn.net/v/t1.0-9/89599701_279836769650403_1225026820026400768_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_eui2=AeHWjFvX7uFtaQazY7TXpOyxuJGK35e_Lmq4kYrfl78uagTTujwpGriUdeqgbGr_rtnab7WRKtF5LX09eWsxE_QD&_nc_ohc=s98EIjDOrQ8AX-KI5WZ&_nc_ht=scontent.fgyn13-1.fna&oh=d962fb2847e79fead6910c26e94c4751&oe=5EF805FC",
      "email": "kelly@hotmail.com",
      "birthDay": "1978-07-11T03:00:00.000Z",
      "genre": "mulher",
      "profession": "Designer",
      "descriptionPhrase": "Engraçada",
      "location": "Gôiania/GO",
      "sexualOrientation": "Hétero",
      "searching": "Namoro",
      "children": "Sim",
      "relationshipStatus": "Solteira",
      "bodyHeight": 175,
      "createdAt": "2020-05-30T22:19:53.622Z",
      "updatedAt": "2020-05-30T22:19:53.622Z"
    },
    {
      "id": 10,
      "online": null,
      "connectionId": null,
      "priority": 25,
      "likes": 0,
      "hearts": 0,
      "favorites": 0,
      "name": "Juliana",
      "lastName": "Pivatto",
      "photo": "https://scontent.fgyn13-1.fna.fbcdn.net/v/t1.0-9/s960x960/93519570_907424586364541_6312767915485560832_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=2ZD3yh4o3w0AX9AHxvW&_nc_ht=scontent.fgyn13-1.fna&_nc_tp=7&oh=8541235480070591af5237c4e9613206&oe=5EDCBDE7",
      "email": "julianapivatto@hotmail.com",
      "birthDay": "1978-07-11T03:00:00.000Z",
      "genre": "mulher",
      "profession": "Designer",
      "descriptionPhrase": "Engraçada",
      "location": "Gôiania/GO",
      "sexualOrientation": "Hétero",
      "searching": "Namoro",
      "children": "Sim",
      "relationshipStatus": "Solteira",
      "bodyHeight": 155,
      "createdAt": "2020-05-30T22:19:53.622Z",
      "updatedAt": "2020-05-30T22:19:53.622Z"
    },
    {
      "id": 11,
      "online": null,
      "connectionId": null,
      "priority": 25,
      "likes": 0,
      "hearts": 0,
      "favorites": 0,
      "name": "Leninha",
      "lastName": "Souza",
      "photo": "https://scontent.fgyn13-1.fna.fbcdn.net/v/t31.0-8/p960x960/25182053_1956640321262350_5640544284350065809_o.jpg?_nc_cat=106&_nc_sid=85a577&_nc_eui2=AeFHJ1k-bjUzkkLJpQRNjfGYsZQP2bHlAySxlA_ZseUDJMhFjirXJudOTYmzhcdrfHxnR62P8zRDV4yNwfeWSiNm&_nc_ohc=hB3T71lSqbYAX8b8ZpZ&_nc_ht=scontent.fgyn13-1.fna&_nc_tp=6&oh=3591d81bfee548a2e97fdd0ea263bd6b&oe=5EF7CF29",
      "email": "leninhasouza@hotmail.com",
      "birthDay": "1978-07-11T03:00:00.000Z",
      "genre": "mulher",
      "profession": "Designer",
      "descriptionPhrase": "Engraçada",
      "location": "Gôiania/GO",
      "sexualOrientation": "Hétero",
      "searching": "Namoro",
      "children": "Sim",
      "relationshipStatus": "Solteira",
      "bodyHeight": 175,
      "createdAt": "2020-05-30T22:19:53.622Z",
      "updatedAt": "2020-05-30T22:19:53.622Z"
    },
    {
      "id": 13,
      "online": null,
      "connectionId": null,
      "priority": 25,
      "likes": 0,
      "hearts": 0,
      "favorites": 0,
      "name": "Isac",
      "lastName": "Rodrigues",
      "photo": "https://scontent.fgyn13-1.fna.fbcdn.net/v/t1.0-9/p960x960/97812148_108789410839168_1929418786763440128_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeEEByqh8G-B1ROjsUTPa34Z9zUmAsTljZf3NSYCxOWNlyHUj2RV5FYEaN4Mo29q7jYPFsfpTgyOBZDMdXWROCvz&_nc_ohc=B97Uhk0_SRMAX_o7chu&_nc_ht=scontent.fgyn13-1.fna&_nc_tp=6&oh=09e08488baf600ba64dcce57df2354cb&oe=5EF9156B",
      "email": "isacsergiodev@gmail.com",
      "birthDay": "1999-08-14T03:00:00.000Z",
      "genre": "homen",
      "profession": "Programador",
      "descriptionPhrase": "Festeira",
      "location": "Gôiania/GO",
      "sexualOrientation": "Hétero",
      "searching": "Amizade",
      "children": "Não",
      "relationshipStatus": "Solteiro",
      "bodyHeight": 170,
      "createdAt": "2020-05-30T22:24:02.894Z",
      "updatedAt": "2020-05-30T22:24:02.894Z"
    },
    {
      "id": 14,
      "online": null,
      "connectionId": null,
      "priority": 25,
      "likes": 0,
      "hearts": 0,
      "favorites": 0,
      "name": "Marizete",
      "lastName": null,
      "photo": "https://scontent.fgyn13-1.fna.fbcdn.net/v/t1.0-9/p960x960/70178820_1148274702029452_3851776612932517888_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=AHpfc2wykE4AX-ZzaI9&_nc_ht=scontent.fgyn13-1.fna&_nc_tp=6&oh=632439a96f176481c5de4422c41f5a4d&oe=5EDB7D9E",
      "email": "marizete2014gyn@hotmail.com",
      "birthDay": "1974-06-07T03:00:00.000Z",
      "genre": "mulher",
      "profession": "Empregada",
      "descriptionPhrase": "Festeira",
      "location": "Gôiania/GO",
      "sexualOrientation": "Hétero",
      "searching": "Amizade",
      "children": "Moram comigo",
      "relationshipStatus": "Casada",
      "bodyHeight": 160,
      "createdAt": "2020-05-30T22:25:43.859Z",
      "updatedAt": "2020-05-30T22:25:43.859Z"
    }
  ],
  error: null,
  loading: false
};

export default function reducer(state = initialState, action: ActionReducer) {

  switch (action.type) {
    // profile
    case "home/REQUEST_GETED_USERS":
      return {
        ...state,
        loading: true,
        error: false
      };
    case "home/SUCCESS_GETED_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: false
      };
    case "home/ERROR_GETED_USERS":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  };
};

export function getHomeUsers() {
  return {
    type: "home/ASYNC_REQUEST_GETED_USERS",
  };
};