const news = [
    {
        id: "1",
        title: "My 2022 End of Year Lists",
        isTrending: true,
        date: "2022-12-23",
        read: "3 min read",
        createdUser:
        {
            Name: "Barack Obama",
            img: require("../../src/images/01Barack.png.png")
        },
        isSaved: false,
    },
    {
        id: "2",
        title: "How to Make Money While Learning Data Science in 2023",
        isTrending: true,
        date: "2022-12-28",
        read: "7 min read",
        icon: require("../../src/images/star.png"),
        createdUser:
        {
            Name: "Natasha Selvaraj in Towards Data Science",
            img: require("../../src/images/02Natassha.jpeg.png")
        },
        isSaved: false,
    },
    {
        id: '3',
        title: "He Used AI to See Today's Looks of The Famous People From the Past",
        isTrending: true,
        date: "2022-12-28",
        read: "10 min read",
        icon: require("../../src/images/star.png"),
        createdUser:
        {
            Name: "Maria Milojkovic, MA in Lessons from History",
            img: require("../../src/images/03Maria.png.png"),
        },
        isSaved: false,
    },
    {
        id: '4',
        title: "9 Python Built-In Decorators That Optimize Your Code Significantly",
        isTrending: true,
        date: "2023-01-01",
        read: "7 min read",
        icon: require("../../src/images/star.png"),
        createdUser:
        {
            Name: "Yang Zhou in TechToFreedom",
            img: require("../../src/images/04YangZhou.png.png"),
        },
        isSaved: false,
    },
    {
        id: '5',
        title: "100 Favorite Albums of 2022",
        isTrending: true,
        date: "2022-12-30",
        read: "9 min read",
        createdUser:
        {
            Name: "Hanif Abdurraqib",
            img: require("../../src/images/05Hanit.png.png"),
        },
        isSaved: false,
    },
    {
        id: '6',
        title: "Structure Your React Project Like a Senior Developer",
        isTrending: true,
        date: "2022-12-31",
        read: "3 min read",
        createdUser:
        {
            Name: "Christopher Clemmons in Level Up Coding",
            img: require("../../src/images/06Christopher.jpeg.png"),
        },
        isSaved: false,
    },
    {
        id: "7",
        img: require('../../src/images/1large.png.png'),
        title: "Understanding Long Covid",
        body: "We know more now than before, and it’s still alarming",
        isTrending: false,
        date: "2022-12-19",
        category: "Relationships",
        read: "9 min read",
        createdUser: {
            Name: "Dr. Tom Frieden",
            img: require('../../src/images/1small.jpeg.png'),
        },
        isSaved: false,
    },
    {
        id: "8",
        img: require('../../src/images/2large.png.png'),
        title: "Braiding Past into Future",
        body: "Nican Huehcatlahtolli, a New Futurism",
        date: "2022-11-05",
        isTrending: false,
        category: "Machine Learning",
        read: "11 min read",
        createdUser: {
            Name: "David Bowles",
            img: require('../../src/images/2small.jpeg.png'),
        },
        con: require("../../src/images/star.png"),
        isSaved: false,
    },
    {
        id: "9",
        img: require('../../src/images/3large.jpeg.png'),
        title: "Learning to Cope with Estrangement: When Children “Cancel” Their Parents",
        body: "An estranged father reflects on the stigma and surprising prevalence of these family rifts.",
        date: "2022-08-21",
        isTrending: false,
        category: "Relationships",
        read: "6 min read",
        con: require("../../src/images/star.png"),
        createdUser: {
            Name: "Ed Erginziger",
            img: require('../../src/images/3small.jpeg.png'),
        },
        isSaved: false,
    },
    {
        id: "10",
        img: require('../../src/images/4large.png.png'),
        title: "ChatGPT Is Having a Thomas Edison Moment",
        body: "Why breakthrough technologies need to be accessible",
        isTrending: false,
        date: "2022-12-08",
        category: "Technology",
        read: "4 min read",
        con: require("../../src/images/star.png"),
        createdUser: {
            Name: "Thomas Smith",
            img: require('../../src/images/4small.jpeg.png'),
        },
        isSaved: false,
    },
    {
        id: "11",
        img: require('../../src/images/5large.png.png'),
        title: " Spotify’s Year-End Lists Are the Ultimate Personality Test",
        body: "Why the mass sharing of the music streaming service’s year-end lists is uniquely telling",
        isTrending: false,
        date: "2022-12-06",
        category: "Productivity",
        read: "3 min read",
        con: require("../../src/images/star.png"),
        createdUser: {
            Name: "Allegra Hobbs",
            img: require('../../src/images/5small.jpeg.png'),
        },
        isSaved: false,
    },
    {
        id: "12",
        img: require('../../src/images/6large.png.png'),
        title: "Why Yours/2large.png.png Team Needs a Weekly Metrics Review",
        body: "What is it, how you can start, and why it will make your product team much better builders and collaborators.",
        isTrending: false,
        date: "2022-11-30",
        category: "Data Science",
        read: "7 min read",
        con: require("../../src/images/star.png"),
        createdUser: {
            Name: "Julie Zhuo",
            img: require('../../src/images/6small.jpeg.png'),
        },
        isSaved: false,
    },
    {
        id: "13",
        img: require('../../src/images/7large.png.png'),
        title: "Tyrion Lannister and The 7 Habits of Highly Effective People",
        body: "A Game of Thrones-themed synopsis of The 7 Habits of Highly Effective People",
        isTrending: false,
        date: "2022-12-02",
        category: "Writing",
        read: "14 min read",
        createdUser: {
            Name: "Elliot Graebert",
            img: require('../../src/images/7small.jpeg.png'),
        },
        isSaved: false,
    },
    {
        id: "14",
        img: require('../../src/images/8large.jpeg.png'),
        title: "Microdosing, Mastodon, and Jonah Hill.",
        body: "Seeking peace, finding kindness.",
        isTrending: false,
        date: "2022-11-30",
        category: "Self Improvement",
        read: "6 min read",
        con: require("../../src/images/star.png"),
        createdUser: {
            Name: "Mindy Stern",
            img: require('../../src/images/8small.png.png'),
        },
        isSaved: false,
    },
    {
        id: "15",
        img: require('../../src/images/9large.jpeg.png'),
        title: "What if failure is the plan?",
        body: "I’ve been thinking a lot about failure lately. Failure comes in many forms, but I’m especially interested in situations in which people…",
        isTrending: false,
        date: "2022-12-05",
        category: "Politics",
        read: "14 min read",
        createdUser: {
            Name: "danah boyd",
            img: require('../../src/images/9small.jpeg.png'),
        },
        isSaved: false,
    },
    {
        id: "16",
        img: require('../../src/images/10large.png'),
        title: "Why are there so many Web3 startups?",
        body: "This week, Pitchbook published their latest Emerging Tech Indicator (ETI) report which tracks early stage investment activity amongst the…",
        isTrending: false,
        date: "2022-12-04",
        category: "Programming",
        read: "6 min read",
        createdUser: {
            Name: "Eric Feng",
            img: require('../../src/images/10small.png.png')
        }
        ,
        isSaved: false,
    },
    {
        id: "17",
        img: require('../../src/images/11large.jpeg.png'),
        title: "What Marriage Means to Me",
        body: "After dropping the kids off, I came home and stopped in the kitchen to take in the aftermath of our chaotic morning together. And it got me…",
        isTrending: false,
        date: "2022-11-29",
        category: "Relationships",
        read: "3 min read",
        createdUser: {
            Name: "Chasten Buttigieg",
            img: require('../../src/images/11small.jpeg.png')
        },
        isSaved: false,
    },
];

const users = [
    {
        user: "duk",
        pass: "123"
    }
];


export { news, users }