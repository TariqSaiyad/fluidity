"use client";
import { clamp, getEquation, rounded } from "@lib/utils";
import { Paper } from "@mantine/core";
import {
  VisAxis,
  VisCrosshair,
  VisLine,
  VisScatter,
  VisTooltip,
  VisXYContainer,
} from "@unovis/react";
import { CurveType } from "@unovis/ts";

interface GraphProps {
  formData: FluidityForm;
  currentSize: number;
}

export default function Graph({ formData, currentSize }: GraphProps) {
  const { maxFont, maxScreen, minFont, minScreen } = formData;

  const midX = (maxScreen - minScreen) / 2 + minScreen;
  const pointsOfInterest = [minScreen, maxScreen, midX, currentSize];
  const data = generatePoints(formData, 300, 1440, pointsOfInterest);

  // const sorted = data.sort((a, b) => a.x - b.x);
  const x = (d: DataRecord) => d.x;
  const y = (d: DataRecord) => d.y;

  const size = ({ x }: DataRecord) => (pointsOfInterest.includes(x) ? 14 : 9);

  const color = ({ x }: DataRecord) => {
    if (x === currentSize) return "orange";
    return pointsOfInterest.includes(x) ? "deeppink" : "darkblue";
  };

  const tooltip = (d: DataRecord) => {
    const poi = pointsOfInterest.includes(d.x);
    const tag = poi ? "strong" : "span";
    let title = "";
    if (d.x === minScreen) title = "Minimum Screen";
    if (d.x === midX) title = "Mid Point";
    if (d.x === maxScreen) title = "Maximum Screen";

    return `<span>
    ${title ? `<strong>${title}</strong><br>` : ""}
    Screen: ${d.x}px 
    <br />
    Font: ${rounded(d.y)}rem
  </span>`;
  };
  return (
    <Paper
      shadow="lg"
      radius="lg"
      p="sm"
      h="100%"
      withBorder
      className="graph-container"
    >
      <VisXYContainer data={data} yDomain={[minFont - 1, maxFont + 1]}>
        <VisTooltip />
        <VisLine
          x={x}
          y={y}
          curveType={CurveType.Linear}
          cursor="pointer"
          highlightOnHover
        ></VisLine>
        <VisAxis type="x" label="Screen Size (px)"></VisAxis>
        <VisAxis type="y" label="Font Size (rem)"></VisAxis>
        <VisCrosshair template={tooltip} />
        <VisScatter x={x} y={y} size={size} color={color} />
      </VisXYContainer>
    </Paper>
  );
}

function generatePoints(
  data: FluidityForm,
  startX: number,
  endX: number,
  custom: number[],
  numPoints = 4
) {
  let points: DataRecord[] = [];
  const { equation } = getEquation(data);
  const { maxFont, maxScreen, minFont, minScreen } = data;

  // get the full x domain range.
  const maxX = Math.max(maxScreen, endX);
  const minX = Math.min(minScreen, startX);

  // calculate how far apart each point will be.
  const stepSize = (maxX - minX) / numPoints;

  // Generate points for the range of x values
  for (let x = minX; x < maxX; x += stepSize) {
    // solve for y, clamp it, and round the value.
    const y = rounded(clamp(equation(x), minFont, maxFont));
    points.push({ x, y });
  }

  // Generate points for custom x values
  for (const customX of custom) {
    const y = rounded(clamp(equation(customX), minFont, maxFont));
    points.push({ x: customX, y });
  }

  points = points.sort((a, b) => a.x - b.x);

  return points;
}
