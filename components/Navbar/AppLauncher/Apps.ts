import SVG from "components/assets/SVGs";

type AppType = {
    id: string;
    name: string;
    img: any;
    color: string;
}[];

const appList: AppType = [
    {
        id: "m1",
        name: "Calendar",
        img: SVG.CalendarIcon,
        color: "#0072C6",
    },
    {
        id: "m2",
        name: "Excel",
        img: SVG.ExcelIcon,
        color: "#217346",
    },
    {
        id: "m3",
        name: "Family Safety",
        img: SVG.FamilySafetyIcon,
        color: "#0C9D8C",
    },
    {
        id: "m4",
        name: "Forms",
        img: SVG.FormsIcon,
        color: "#008272",
    },
    {
        id: "m5",
        name: "Office",
        img: SVG.OfficeIcon,
        color: "#D83B01",
    },
    {
        id: "m6",
        name: "OneDrive",
        img: SVG.OnedriveIcon,
        color: "#094AB2",
    },
    {
        id: "m7",
        name: "OneNote",
        img: SVG.NoteIcon,
        color: "#80397B",
    },
    {
        id: "m8",
        name: "Outlook",
        img: SVG.OutlookIcon,
        color: "#0072C6",
    },
    {
        id: "m9",
        name: "People",
        img: SVG.PeopleIcon,
        color: "#0072C6",
    },
    {
        id: "m10",
        name: "Power Automate",
        img: SVG.AutomateIcon,
        color: "#0077FF",
    },
    {
        id: "m11",
        name: "PowerPoint",
        img: SVG.PointIcon,
        color: "#D24726",
    },
    {
        id: "m12",
        name: "Skype",
        img: SVG.SkypeIcon,
        color: "#00AFF0",
    },
    {
        id: "m13",
        name: "Sway",
        img: SVG.SwayIcon,
        color: "#008272",
    },
    {
        id: "m14",
        name: "Teams",
        img: SVG.TeamsIcon,
        color: "#6264A7",
    },
    {
        id: "m15",
        name: "To Do",
        img: SVG.TodoIcon,
        color: "#0072C6",
    },
    {
        id: "m16",
        name: "Word",
        img: SVG.WordIcon,
        color: "#0072C6",
    },
    {
        id: "m17",
        name: "Bing",
        img: SVG.BingIcon,
        color: "#0C8484",
    },
    {
        id: "m18",
        name: "MSN",
        img: SVG.MsnIcon,
        color: "#000000",
    },
    {
        id: "m19",
        name: "Privacy",
        img: SVG.PrivacyIcon,
        color: "#0072C6",
    },
    {
        id: "m20",
        name: "Rewards",
        img: SVG.RewardsIcon,
        color: "#0072C6",
    },
];

export default appList;
