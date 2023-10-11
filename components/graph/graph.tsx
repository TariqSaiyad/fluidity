"use client";

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

export type DataRecord = { x: number; y: number };

export default function Graph({ data }: { data: DataRecord[] }) {
  const sorted = data.sort((a, b) => a.x - b.x);
  const x = (d: DataRecord) => d.x;
  const y = (d: DataRecord) => d.y;
  const tooltip = (d: DataRecord) =>
    `<span>
      Screen: ${d.x}px 
      <br />
      Font: ${d.y}rem
    </span>`;

  return (
    <Paper shadow="lg" radius="lg" p="sm" h="100%" withBorder>
      <VisXYContainer data={sorted}>
        <VisTooltip />
        <VisScatter x={x} y={y} />
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
      </VisXYContainer>
    </Paper>
  );
}
