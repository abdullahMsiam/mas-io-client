import React from 'react';
import {BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell } from 'recharts';

const ratings = [
    { "name": "1 star", "count": 50 },
    { "name": "2 star", "count": 80 },
    { "name": "3 star", "count": 120 },
    { "name": "4 star", "count": 240 },
    { "name": "5 star", "count": 750 }
].reverse(); ;



// #region Sample data
// const data = [];

// #endregion

const RatingChart = () => {
    return (
        <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical" 
                    data={ratings}
                    margin={{ top: 10, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />

                    <XAxis type="number"/>

                    <YAxis
                        dataKey="name"
                        type="category"
                        width={60}
                        tick={{ fontSize: 12, fill: '#4b5564' }}
                    />

                    <Tooltip
                        cursor={{ fill: 'transparent' }}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />

                    <Bar
                        dataKey="count"
                        radius={[0, 4, 4, 0]}
                        fill="#FF8811"
                        barSize={20}
                    >
                        <Cell fill="#FF8811" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RatingChart;