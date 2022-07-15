const get = (req,res)=>{
    res.send([{
        "name":"News1",
        "title":"Twitter pursues legal review of Indian orders to take down content: Source",
        "image":"https://images.indianexpress.com/2022/07/Twitter-Reuters.jpg?w=389"
    },
    {
        "name":"News2",
        "title":"Cab surge pricing can't exceed twice the base fare: Delhi govt notifies new scheme",
         "image":"https://images.indianexpress.com/2022/07/Twitter-Reuters.jpg?w=389"
    },
    {
        "name":"News3",
        "title":"Twitter pursues legal review of Indian orders to take down content: Source",
        "image":"https://images.indianexpress.com/2022/07/Twitter-Reuters.jpg?w=389"
    },
    {
        "name":"News4",
        "title":"Twitter pursues legal review of Indian orders to take down content: Source",
        "image":"https://images.indianexpress.com/2022/07/Twitter-Reuters.jpg?w=389"
    }])
}

module.exports.apicontroller =get;




// let [Hollywood,setHollywood]=useState([
//     {
//         id:"21",
//        image:"https://www.looper.com/img/gallery/20-epic-movies-like-avatar-you-need-to-watch-next/l-intro-1645555067.jpg",
//        name:"Avatar",
//        info:"Avatar is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana",
//          date:"Hollywood/ 2009",
//        description:"On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous"
//     },
//     {
//         id:"22",
//         image:"https://i.ytimg.com/vi/l-LD16Yzi2c/maxresdefault.jpg",
//         name:"Uncharted",
//         info:"Uncharted is a 2022 American action-adventure film directed by Ruben Fleischer from a screenplay by Rafe Lee Judkin",
//           date:"Hollywood/ 2022",
//         description:"Victor Sullivan recruits Nathan Drake to help him find the lost fortune of Ferdinand Magellan",
//      },
//      {
//          id:"23",
//         image:"https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/5157/875157-v",
//         name:"Avengers: Endgame",
//         info:"After Thanos, an intergalactic warlord, disintegrates half of the universe",
//          date:"Hollywood/April 2019",
//         description:"The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks",
//      },
//      {
//          id:"24",
//         image:"https://c.ndtvimg.com/k3bo7b8o_dark-knight-instagram_625x300_19_July_18.jpg",
//         name:"The Dark Knight",
//         info:"After Gordon, Dent and Batman begin an assault on Gotham's organised crime",
//         date:"Hollywood/2008",
//         description:"the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees",
//     },
// ])