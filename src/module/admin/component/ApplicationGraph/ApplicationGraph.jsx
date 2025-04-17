import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  GraphWrapper,
  Header,
  Title,
  DateSelector,
  LegendContainer,
  LegendItem,
  LegendDot,
} from "./ApplicationGraph.styles"; // Adjust the path if needed
import { PiCalendarBlank } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";




const rawData = [
  { date: "13 May", Enrolled: 120, NotApplied: 300 },
  { date: "14 May", Enrolled: 340, NotApplied: 600 },
  { date: "15 May", Enrolled: 245, NotApplied: 500 },
  { date: "16 May", Enrolled: 150, NotApplied: 550 },
  { date: "17 May", Enrolled: 250, NotApplied: 350 },
  { date: "18 May", Enrolled: 110, NotApplied: 450 },
];

const ApplicationsGraph = () => {
  return (
    <GraphWrapper>
      <Header>
        <Title>Applications</Title>
        <DateSelector>
          <PiCalendarBlank size={20} /> Today <IoIosArrowDown size={16} />
        </DateSelector>
      </Header>

      <LegendContainer>
        <LegendItem>
          <LegendDot color="#D4D7EA" />
          Not Applied
        </LegendItem>
        <LegendItem>
          <LegendDot color="#007BFF" />
          Enrolled
        </LegendItem>
      </LegendContainer>

      <ResponsiveContainer width="100%" height={200} style={{ marginLeft: "-35px" }}>
  <BarChart data={rawData} barGap={-30} barCategoryGap="30%">
    <CartesianGrid strokeDasharray="3 3" vertical={false} />
    <XAxis
      dataKey="date"
      axisLine={false}
      tickLine={false}
      tick={{ fill: "#B1B2B5", fontSize: 12 }}
    />
    <YAxis
      axisLine={false}
      tickLine={false}
      tick={{ fill: "#B1B2B5", fontSize: 12 }}
    />
    <Tooltip />
    <Bar
      dataKey="NotApplied"
      barSize={30}
      fill="#D4D7EA"
      radius={[10, 10, 10, 10]}
    />
    <Bar
      dataKey="Enrolled"
      barSize={30}
      fill="#007BFF"
      radius={[10, 10, 10, 10]}
    />
  </BarChart>
</ResponsiveContainer>

    </GraphWrapper>
  );
};

export default ApplicationsGraph;
