"use client";
import Graph from "@components/graph/graph";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { getClampValue, getFontSizeAt, rounded } from "@lib/utils";
import { Button, Container, Group, NumberInput, Paper } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useClipboard } from "@mantine/hooks";
import { useState } from "react";
import "./page.scss";

export default function Home() {
  const [parent] = useAutoAnimate();

  const clipboard = useClipboard({ timeout: 1000 });
  const [currentSize, setCurrentSize] = useState(0);
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

  const handleSubmit = (data: FluidityForm) => {
    setFormData(data);
    setCurrentSize((data.maxScreen - data.minScreen) / 2 + data.minScreen);
  };

  const clampValue = getClampValue(formData);
  const fontSizeAt = rounded(getFontSizeAt(currentSize, formData));

  return (
    <main>
      <Container ref={parent} className="main" size="xl" py="xl">
        <div className="header">
          <h1>Fluidity</h1>
          <p>Responsive font scale calculator</p>
        </div>
        <Paper className="form" shadow="lg" radius="lg" p="xl" withBorder>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <div className="inputWrapper">
              <div>
                <h2>Min Viewport</h2>
                <div className="inputs">
                  <NumberInput
                    label="Font size (px)"
                    variant="unstyled"
                    size="xl"
                    {...form.getInputProps("minFont")}
                  />
                  <NumberInput
                    label="Width (px)"
                    variant="unstyled"
                    size="xl"
                    {...form.getInputProps("minScreen")}
                  />
                </div>
              </div>
              <div>
                <h2>Max Viewport</h2>
                <div className="inputs">
                  <NumberInput
                    label="Font size (px)"
                    variant="unstyled"
                    size="xl"
                    {...form.getInputProps("maxFont")}
                  />
                  <NumberInput
                    label="Width (px)"
                    variant="unstyled"
                    size="xl"
                    {...form.getInputProps("maxScreen")}
                  />
                </div>
              </div>
            </div>
            <Group justify="flex-end" mt="md">
              <Button type="submit">Calculate</Button>
            </Group>
          </form>
        </Paper>
        {formData && (
          <Paper className="sizeAt" shadow="lg" radius="lg" p="xl" withBorder>
            <h2 className="fontSizeAt">
              What is the font size at
              <NumberInput
                value={currentSize}
                onChange={(val) => setCurrentSize(Number(val))}
                min={formData.minScreen}
                max={formData.maxScreen}
                suffix="px"
                variant="unstyled"
              />
              screen?
            </h2>
            <p className="fontSizeAt__value">{fontSizeAt} rem</p>
          </Paper>
        )}
        {formData && (
          <Paper shadow="lg" radius="lg" p="xl" withBorder className="copyItem">
            <code>{clampValue}</code>
            <Button
              color={clipboard.copied ? "teal" : "blue"}
              onClick={() => clipboard.copy(clampValue)}
            >
              {clipboard.copied ? "Copied" : "Copy"}
            </Button>
          </Paper>
        )}

        {formData && (
          <div className="graph">
            <Graph
              data={[
                { x: formData.minScreen, y: formData.minFont },
                { x: currentSize, y: fontSizeAt },
                { x: formData.maxScreen, y: formData.maxFont },
              ]}
            />
          </div>
        )}
      </Container>
    </main>
  );
}
