const recipe = [
    {
        Id: 1,
        Name: "עוגה כושית",
        UserId: 1,
        CategoryId: 2,
        Img: "https://img.mako.co.il/2023/03/27/oga_pereg_choclet_autoOrient_i.jpg",
        Duration: "50",
        Difficulty: 1,
        Description: "עוגה קלה להכנה",
        Ingrident: [
            { Name: "ביצים", Count: 5, Type: "" },
            { Name: "סוכר", Count: 1.5, Type: "כוסות" },
            { Name: "קמח", Count: 5, Type: "כפות" }
        ],
        Instructions: ["לערבב את כל החומרים יחד", "לאפות על חום בינוני", "לחתוך מיד אחרי האפיה"]
    },
    {   
        Id:2,
        Name:"קרפ צרפתי",
        UserId:1,
        CategoryId:1,
        Img:"https://chef-lavan.co.il/wp-content/uploads/old-storage/uploads/images/fd2fcab061b4326d9c0cb1f43b01717e.jpg",
        Duration:30,
        Difficulty:1,
        Description:"מחפשים קינוח מתוק שלא ידרוש זמן הכנה רב? הגיע הזמן להכין קלאסיקה. מתכון לקרפ צרפתי טעים וקל להכנה שתוכלו למלא בשוקולד, מייפל, אגוזים וגלידה",
        Ingrident:[
            {"Name":"קמח","Count":"2","Type":"כוסות"},
            {"Name":"חלב","Count":"4","Type":"כוסות"},
            {"Name":"סוכר","Count":"0.5","Type":"כוס"},
            {"Name":"חמאה","Count":"50","Type":"גר'"}
        ],
        Instructions:["להמיס את החמאה על אש נמוכה","להניח לה להתקרר","לערבב את שאר החומרים יחד","ובתאבון רב!"]
    }
   ,
    {
        Id:3,
        Name:"גבינ\"ש",
        UserId:1,
        CategoryId:1,
        Img:"https://happykitchen.co.il/wp-content/uploads/2020/05/עוגת-גבינה-פרורים-פרוסה.jpg",
        Duration:120,
        Difficulty:2,
        Description:"עוגת גבינה אפויה ביתית על עוגיות חמאה בציפוי עדין של שוקולד מריר",
        Ingrident:[
            {"Name":"ביסקויטים","Count":"200","Type":"גר'"},
            {"Name":"חמאה","Count":"125","Type":"גר'"},
            {"Name":"גבינה לבנה","Count":"750","Type":"גר'"},
            {"Name":"שמנת חמוצה","Count":"1","Type":"גביע"},
            {"Name":"קורנפלור","Count":"3","Type":"כפות"},
            {"Name":"סוכר","Count":"1","Type":"כוס"},
            {"Name":"ביצים","Count":"3","Type":""},
            {"Name":"שמנת מתוקה-ריצ'","Count":"250","Type":"מל'"},
            {"Name":" ריבת חלב/ שוקולד מריר/שוקולד חלב","Count":"100","Type":"גר"}
        ],
        Instructions:[
            "לטחון את הביסקויטים",
            "להוסיף חמאה ",
            "להשטיח בתבנית עגולה גדולה",
            "לשים במקפיא.",
            "בקערה נפרדת",
            "להקציף את הריצ'",
            "להוסיף את הגבינה , השמנת הביצים הסוכר , הקורנפלור",
            "לערבב באיטיות",
            "לשים על בסיס העוגה",
            "להכניס לתנות מחומם על 200 ",
            "לאפות 10 דקות על 200",
            "להוריד את המעלות ל150",
            "לאפות עד שהעוגה התנפחה קיבלה צבערוטטת  ויציבה",
            "להמיס את הריבת חלב או את השוקולד יחד עם טיפה ריבת חלב",
            "כשהעוגה התקררה לשפוך באיטיות על העוגה",
            "בתאבון!"
        ]
    },
    {
        Id:4,
        Name:"סורבה אבטיח",
        UserId:3,
        CategoryId:3,
        Img:"https://www.10dakot.co.il/wp-content/uploads/2017/05/%E2%80%8F%E2%80%8FDSC_0005-%D7%A2%D7%95%D7%AA%D7%A7.jpg",
        Duration:10,
        Difficulty:1,
        Description:"קינוח סורבה אבטיח ביתי מרענן וטעים ב-3 מצרכים בלבד!",
        Ingrident:[
            {"Name":"חצי אבטיח חתוך לקוביות","Count":"","Type":""},
            {"Name":"מיץ תפוזים","Count":"0.25","Type":"כוס"},
            {"Name":"אבקת סוכר","Count":"1-2","Type":"כפות"}
        ],
        Instructions:[
            "שמים את קוביות האבטיח בשקית אטומה ומקפיאים.",
            "מניחים במעבד מזון את קוביות האבטיח הקפואות ומיץ התפוזים וטוחנים עד למרקם רך של סורבה (בין ברד לגלידה).",
            "טועמים. אם חסרה מתיקות מוסיפים אבקת סוכר לפי הטעם ומערבבים היטב."
        ]
    },
    {
        Id:5,
        Name:"שיפודים בתנור בטעם ביתי",
        UserId:3,
        CategoryId:2,
        Img:"https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2021/09/22192230/WhatsApp-Image-2021-09-19-at-15.33.02.jpeg",
        Duration:60,
        Difficulty:1,
        Description:"נכון שלפעמים הדבר היחיד שמתחשק לכם זה איזה שיפוד טוב? אז קבלו מתכון של שיפודי סינטה וטריאקי שיסגור לכם בדיוק את הפינה הזאת!",
        Ingrident:[
            {"Name":"בשר","Count":"0.5","Type":"קילו"},
            {"Name":"כוסברה","Count":"1","Type":"חופן"},
            {"Name":"פלפל לבן","Count":"0.5","Type":"כפית"},
            {"Name":"גריל בשר","Count":"0.5","Type":"כפית"},
            {"Name":"מלח","Count":"0.5","Type":"כפית"},
            {"Name":"ביצה","Count":"1","Type":""},
            {"Name":"בצל","Count":"0.5","Type":""},
            {"Name":"רוטב טריאקי","Count":"0.3","Type":"כוס"},
            {"Name":"כמון","Count":"0.5","Type":"כפית"}
        ],
        Instructions:[
                "לשטוף היטב את הבשר מלמעלה",
                "לקצוץ דק דק את הכוסברה ואת הבצל",
                "לערבב את כל החומרים יחד",
                "לכדרר לקציצה גדולה ",
                "להשטיח באמצע השיפוד",
                "להניח בתבנית , לכסות בנייר אלומיניום",
                "לאפות בתנור מחומם על 180 למשך 20 דקות על טורבו",
                "בתאבון!"
            ]
        },
        {
            Id:6,
            Name:"עוגת מספרים",
            UserId:3,
            CategoryId:4,
            Img:"https://www.misspetel.com/wp-content/uploads/2018/02/DSC_3995c-819x1024.jpg",
            Duration:90,
            Difficulty:3,
            Description:"עוגת מספרים -מצרכים לספרה אחת",
            Ingrident:[
                {"Name":"לבצק: קמח ואבקת שקדים","Count":"90 90","Type":"גרם"},
                {"Name":"אבקת סוכר","Count":"50","Type":"גרם"},
                {"Name":"חמאה","Count":"100","Type":"גרם"},
                {"Name":"ביצה","Count":"1","Type":""},
                {"Name":"גרידת לימון","Count":"1","Type":"מלימון בינוני"},
                {"Name":"מלח","Count":"1","Type":"קורט"},
                {"Name":"לקרם: ריצי","Count":"250","Type":"מ\"ל"},
                {"Name":"פודינג","Count":"2","Type":"כפות"},
                {"Name":"קרם פטיסייר/קרם וניל","Count":"2","Type":"כפות"}
            ],
            Instructions:[
                "לערבב את כל חומרי הבצק יחד",
                "לרדד על נייר אפיה",
                "להכין שבלונה של ציור/אות/מספר",
                "לחתוך בהתאם את הבצק",
                "להוציא את השאריות",
                "לאפות על 180 עד שהבצק מזהיב",
                "לא לגעת בבצק עד שהוא מתקרר",
                "להכניס אותו להקפאה",
                "עכשיו להכנת הקרם:",
                "להקציף את הריצ'",
                "לאט לאט להוסיף בהדרגה את שאר החומרים",
                "לזלף כמו בתמונה",
                "לקשט כמיטב הדימיון",
                "בתאבון!"
            ]
        }
    
        
]

// localStorage.setItem('recipe', JSON.stringify(recipe))

module.exports = recipe;