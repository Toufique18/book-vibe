import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

const colors = scaleOrdinal(schemeCategory10).range();



const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const BarCharts = ({ books }) => {
    const data = books.map(book => ({
        bookName: book.bookName,
        totalPages: book.totalPages
    }));

    return (
        <div style={{ width: '100%', height: '60vh' }}>
            <ResponsiveContainer width="100%"  height="100%">
            <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis className='text-xs lg:text-xl' dataKey="bookName" />
                <YAxis />
                <Tooltip />
                <Bar
                    dataKey="totalPages"
                    fill="#8884d8"
                    shape={<TriangleBar />}
                    label={{ position: "top" }}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
        </div>
    );
};

export default BarCharts;


