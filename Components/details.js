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

module.exports.get =get;