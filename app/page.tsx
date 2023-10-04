"use client";
import { Button, Container, Group, NumberInput, Paper } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useClipboard } from "@mantine/hooks";
import { useState } from "react";

interface FluidityForm {
  minScreen: number;
  maxScreen: number;
  minFont: number;
  maxFont: number;
}

const REM = 16;

const toRem = (value: number) => value / REM;
const rounded = (value: number, place = 4) => parseFloat(value.toFixed(place));

const getClampCSS = (clampValue: string) => `--fluid-scale: ${clampValue};`;

function getClampValue(data: FluidityForm | null) {
  if (!data) return "";

  const { maxFont, maxScreen, minFont, minScreen } = data;

  const slope = (maxFont - minFont) / (maxScreen - minScreen);
  const yIntersection = -1 * minScreen * slope + minFont;

  return `clamp(${toRem(minFont)}rem, ${rounded(
    toRem(yIntersection)
  )}rem + ${rounded(slope * 100)}vw, ${toRem(maxFont)}rem)`;
}

export default function Home() {
  const clipboard = useClipboard({ timeout: 1000 });

  const [formData, setFormData] = useState<FluidityForm | null>(null);
  const form = useForm<FluidityForm>({
    initialValues: {
      minScreen: 375,
      minFont: 16,
      maxScreen: 1440,
      maxFont: 18,
    },
    validate: {
      minScreen: (value) => (value < 0 ? "Must be greater than 0" : null),
      minFont: (value) => (value < 0 ? "Must be greater than 0" : null),
      maxScreen: (value) => (value < 0 ? "Must be greater than 0" : null),
      maxFont: (value) => (value < 0 ? "Must be greater than 0" : null),
    },
  });

  const handleSubmit = (data: FluidityForm) => setFormData(data);

  const clampValue = getClampValue(formData);

  return (
    <main>
      <Container>
        <h1>Fluidity</h1>

        <Paper shadow="lg" radius="lg" p="xl">
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <NumberInput
              label="min font"
              description="min font"
              {...form.getInputProps("minFont")}
            />
            <NumberInput
              label="min Screen"
              description="min Screen"
              {...form.getInputProps("minScreen")}
            />

            <NumberInput
              label="max font"
              description="max font"
              {...form.getInputProps("maxFont")}
            />
            <NumberInput
              label="max Screen"
              description="max Screen"
              {...form.getInputProps("maxScreen")}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Paper>
        <Paper shadow="lg" radius="lg" p="xl" mt="xl">
          {JSON.stringify(formData, null, 2)}
        </Paper>
        <Paper shadow="lg" radius="lg" p="xl" mt="xl">
          <Button
            color={clipboard.copied ? "teal" : "blue"}
            onClick={() => clipboard.copy(getClampCSS(clampValue))}
          >
            {clipboard.copied ? "Copied" : "Copy"}
          </Button>
          <pre>
            :root {"{"}
            <br />
            {"  "}--fluid-scale: {clampValue};
            <br />
            {"}"}
          </pre>
        </Paper>
      </Container>
    </main>
  );
}
