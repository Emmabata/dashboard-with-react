import "./Analytics.css"
import {
    XAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Legend,
    Bar,
    PieChart,
    Pie,
    LineChart,
    YAxis,
    Line,
} from "recharts";

const Analytics = ({ chart_i, chart_ii, chart_iii, title, value, illustration }) => {
    const data = [
        {
            "name": "Sept",
            "Earnings": 4000,
            "Followers": 2400
        },
        {
            "name": "Oct",
            "Earnings": 3000,
            "Followers": 1398
        },
        {
            "name": "Nov",
            "Earnings": 2000,
            "Followers": 9800
        },
        {
            "name": "Dec",
            "Earnings": 2780,
            "Followers": 3908
        },
        
    ];

    const data02 = [
        {
            "name": "A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        }
        
    ];

    const data03  = [
            {
            "name": "Group A",
            "value": 400
            },
            {
            "name": "Group B",
            "value": 300
            },
            {
            "name": "Group C",
            "value": 300
            },
            {
            "name": "Group D",
            "value": 200
            },
            {
            "name": "Group E",
            "value": 278
            },
            {
            "name": "Group F",
            "value": 189
            }
    ];
    const data04 = [
            {
            "name": "Group A",
            "value": 2400
            },
            {
            "name": "Group B",
            "value": 4567
            },
            {
            "name": "Group C",
            "value": 1398
            },
            {
            "name": "Group D",
            "value": 9800
            },
            {
            "name": "Group E",
            "value": 3908
            },
            {
            "name": "Group F",
            "value": 4800
            }
    ];
    return ( 
        <div className="analytics">
            {chart_i && 
            <>
            <header>
                <span className="followers">Subscribers:</span>
                <span className="earnings">Earnings:</span>
            </header>

    <BarChart width={210} height={190} data={data}>
        <CartesianGrid strokeDasharray="100 10" />
        <XAxis dataKey="name" />
        {/* <YAxis /> */}
        <Tooltip />
        <Legend />
        <Bar dataKey="Followers" fill="#00464e" />
        <Bar dataKey="Earnings" fill="#810551" />
    </BarChart>
    </>}

    {chart_ii && (
        <LineChart width={230} height={190} data={data02}
            margin={{ right: 10, top: 10 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#810551" />
            <Line type="monotone" dataKey="uv" stroke="#00464e" />
        </LineChart>
    )}

    {chart_iii && (
    <PieChart width={300} height={300}>
        <Pie data={data03} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#00464e" />
        <Pie data={data04} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={70} fill="#810551" label />
    </PieChart>
    )}

    {title && ( 
    <>
        <h1 className="title">{title}</h1>
        <h2 className="value">{value}</h2>
        <h2 className="extra-text">
            View people who  are loving your content
        <br />
        🙌 🎉😀
        </h2>

        <img src={illustration} alt="illustration" className="illustration" />
    </>
    )}

    </div>
    );
}

export default Analytics;