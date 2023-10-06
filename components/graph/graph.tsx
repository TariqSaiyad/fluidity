"use client";

import { Paper } from "@mantine/core";
import { VisAxis, VisLine, VisXYContainer } from "@unovis/react";
import { useCallback } from "react";

export type DataRecord = { x: number; y: number };

export default function Graph({ data }: { data: DataRecord[] }) {
  return (
    <Paper shadow="lg" radius="lg" p="xl" mt="xl" bg={"dark"}>
      <VisXYContainer height={"50vh"}>
        <VisLine
          data={data}
          x={useCallback((d) => d.x, [])}
          y={useCallback((d) => d.y, [])}
          cursor="pointer"
          highlightOnHover
        ></VisLine>
        <VisAxis type="x" label="Screen Size (px)"></VisAxis>
        <VisAxis type="y" label="Font Size (rem)"></VisAxis>
      </VisXYContainer>
    </Paper>
  );
}
