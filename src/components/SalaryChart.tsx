import React, {FunctionComponent} from 'react';
import {AxisDomain, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {ChartNetSalaryPoint} from '../models/salary';

type Props = {
    points: ChartNetSalaryPoint[];
};

export const SalaryChart: FunctionComponent<Props> = (props: Props) => {
    const AXIS_DOMAIN_PADDING = 100;

    const determineMinAndMaxDomain = (points: ChartNetSalaryPoint[]): Readonly<[AxisDomain, AxisDomain]> => {
        let salaryPoints = points.map(point => point.salary);
        const max = salaryPoints.reduce((salary1, salary2) => Math.max(salary1, salary2));
        const min = salaryPoints.reduce((salary1, salary2) => Math.min(salary1, salary2));
        return [Math.max(0, min - AXIS_DOMAIN_PADDING), max + AXIS_DOMAIN_PADDING];
    };

    return (
        <ResponsiveContainer width="90%" height={450}>
            <LineChart
                data={props.points}
                margin={{
                    top: 5,
                    right: 40,
                    left: 60,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="5 5"/>
                <XAxis dataKey="year" interval={0} angle={30} dx={20}/>
                <YAxis domain={determineMinAndMaxDomain(props.points)}/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="salary" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
        </ResponsiveContainer>

    );
};

export default SalaryChart;
