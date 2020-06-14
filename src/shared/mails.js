const Mails = [
    {
        from: "aaa1@example.com",
        to: ["bbb@example.com","ccc@example.com","ddd@example.com"],
        subject: "This is to inform you guys that you are winner for the lucky draw",
        date: "05/12/2020 10:45",
        body: "Hurrayyy!! It's lucky time!!",
        attachment: false
    },
    {
        from: "aaa2@example.com",
        to: ["bbb@example.com"],
        subject: "Lottery Time !! ",
        date: "06/12/2020 10:50",
        body: "Only 1 out of 50k won the lotter and it's you!! Sending you the document to fill your bank account info.",
        attachment: true
    }
];

export default Mails;