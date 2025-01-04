import { pie, PieArcDatum, arc } from 'd3'
import { useMemo, useState } from 'react'

type DonutChartData = { label: string; value: number; color: string }

interface IDonutChartProps {
  data: DonutChartData[]
}

export const CustomDonutChart = ({ data }: IDonutChartProps) => {
  const [hoveredValue, setHoveredValue] = useState<DonutChartData | null>(null)

  const arcs = useMemo(() => {
    const calculateArcs = pie<DonutChartData>()
      .value((data) => data.value)
      .sort(null) // Sort for a predictable order (optional)

    const arcs = calculateArcs(data)

    return arcs
  }, [data])

  const diameter = 200 // Adjust diameter as needed
  const radius = diameter / 2
  const innerRadiusFactor = 0.7 // Adjust inner radius for donut thickness
  const innerRadius = radius * innerRadiusFactor
  const strokeWidth = 0.5

  const arcGenerator = arc<PieArcDatum<DonutChartData>>()
    .innerRadius(innerRadius)
    .outerRadius(radius)
    .cornerRadius(3)

  return (
    <div className="relative">
      <svg
        viewBox={`${-strokeWidth / 2} ${-strokeWidth / 2} ${diameter + strokeWidth} ${diameter}`}
      >
        <defs>
          <filter id="shadow" height={'200%'} width={'200%'}>
            <feDropShadow
              dx={0}
              dy={4}
              stdDeviation={0.2}
              floodColor={'#000'}
              floodOpacity={'.2'}
            />
          </filter>
        </defs>
        <g transform={`translate(${radius},${radius})`}>
          {arcs.map((arc, index) => {
            const hovered = arc.data.label === hoveredValue?.label
            return (
              <path
                key={arc.data.label}
                fill={arc.data.color} // Use color provided in data
                d={arcGenerator(arc) || undefined}
                onMouseOver={() => setHoveredValue(arc.data)}
                onMouseOut={() => setHoveredValue(null)}
                stroke={hovered ? 'black' : 'none'}
                strokeWidth={hovered ? strokeWidth : 0}
                filter={hovered ? 'url(#shadow)' : 'none'}
                style={{ transition: '0.3s' }}
              />
            )
          })}
        </g>
      </svg>
      <div className="mb-2 absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-28 w-36 m-auto">
        {hoveredValue ? (
          <div className="flex flex-col items-center">
            <div className="text-5xl">{hoveredValue.value}</div>
            {hoveredValue.label}
          </div>
        ) : (
          <div className="text-center text-sm text-gray my-5">
            Hover the section
          </div>
        )}
      </div>
    </div>
  )
}

// import { pie, PieArcDatum, arc, text } from 'd3';
// import { useMemo, useState } from 'react';

// type DonutChartData = { label: string; value: number; color: string };

// interface IDonutChartProps {
//   data: DonutChartData[];
// }

// export const CustomDonutChart = ({ data }: IDonutChartProps) => {
//   const [hoveredValue, setHoveredValue] = useState<DonutChartData | null>(null);

//   const arcs = useMemo(() => {
//     const calculateArcs = pie<DonutChartData>()
//       .value((data) => data.value)
//       .sort(null);

//     const arcs = calculateArcs(data);

//     return arcs;
//   }, [data]);

//   const diameter = 200;
//   const radius = diameter / 2;
//   const innerRadiusFactor = 0.7;
//   const innerRadius = radius * innerRadiusFactor;
//   const strokeWidth = 0.5;

//   const arcGenerator = arc<PieArcDatum<DonutChartData>>()
//     .innerRadius(innerRadius)
//     .outerRadius(radius)
//     .cornerRadius(2);

//   return (
//     <div className="relative">
//       <svg
//         viewBox={`${-strokeWidth / 2} ${-strokeWidth / 2} ${diameter + strokeWidth} ${diameter}`}
//       >
//         <g transform={`translate(${radius},${radius})`}>
//           {arcs.map((arc, index) => {
//             const hovered = arc.data.label === hoveredValue?.label;
//             const centroid = arcGenerator.centroid(arc);

//             return (
//               <g key={arc.data.label}>
//                 <path
//                   fill={arc.data.color}
//                   d={arcGenerator(arc) || undefined}
//                   onMouseOver={() => setHoveredValue(arc.data)}
//                   onMouseOut={() => setHoveredValue(null)}
//                   stroke={hovered ? 'black' : 'none'}
//                   strokeWidth={hovered ? strokeWidth : 0}
//                   filter={hovered ? 'url(#shadow)' : 'none'}
//                   style={{ transition: '0.3s' }}
//                 />
//                 <text
//                   x={centroid[0]}
//                   y={centroid[1]}
//                   textAnchor="middle"
//                   dominantBaseline="central"
//                   fill="white"
//                   fontSize="12px"
//                 >
//                   {arc.data.label}
//                 </text>
//               </g>
//             );
//           })}
//         </g>
//       </svg>
//       {/* ... rest of the code for hover information display */}
//       <div className="mb-2 absolute bottom-0 left-1/2 -translate-x-1/2 w-36">
//         {hoveredValue ? (
//           <div className="flex flex-col items-center">
//             <div className="text-5xl">{hoveredValue.value}</div>
//             {hoveredValue.label}
//           </div>
//         ) : (
//           <div className="text-center text-sm text-gray">
//             Hover over the arcs.
//           </div>
//         )}
//          </div>
//     </div>
//   );
// };
