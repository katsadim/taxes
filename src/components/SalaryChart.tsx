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
        <ResponsiveContainer width="98%" height={400}>
            <LineChart
                data={props.points}
                margin={{
                    top: 5,
                    right: 19,
                    left: -10,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="5 5"/>
                <XAxis dataKey="year" interval={1} angle={35} dx={20} dy={5}/>
                <YAxis domain={determineMinAndMaxDomain(props.points)}/>
                <Tooltip/>
                <Line type="monotone" dataKey="salary" stroke="#8884d8" activeDot={{r: 8}}/>
                <Legend wrapperStyle={{position: 'relative'}}/>
            </LineChart>
        </ResponsiveContainer>

    );
};

export default SalaryChart;
