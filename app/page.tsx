"use client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { getClampCSS, getClampValue, getFontSizeAt, rounded } from "@lib/utils";
import {
  Button,
  Container,
  Group,
  NumberInput,
  Paper,
  Text,
} from "@mantine/core";
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
      <Container ref={parent} className="main">
        <h1>Fluidity</h1>
        <Text size="lg">Responsive font scale calculator</Text>

        <Paper shadow="lg" radius="lg" p="xl" mt="xl" withBorder>
          <form className="form" onSubmit={form.onSubmit(handleSubmit)}>
            <div className="inputWrapper">
              <div>
                <h2>Min Viewport</h2>
                <div className="inputs">
                  <NumberInput
                    label="Font size (px)"
                    variant="unstyled"
                    size="lg"
                    {...form.getInputProps("minFont")}
                  />
                  <NumberInput
                    label="Width (px)"
                    variant="unstyled"
                    size="lg"
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
                    size="lg"
                    {...form.getInputProps("maxFont")}
                  />
                  <NumberInput
                    label="Width (px)"
                    variant="unstyled"
                    size="lg"
                    {...form.getInputProps("maxScreen")}
                  />
                </div>
              </div>
            </div>
            <Group justify="flex-end" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Paper>

        {formData && (
          <Paper shadow="lg" radius="lg" p="xl" mt="xl" withBorder>
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
          <Paper shadow="lg" radius="lg" p="xl" mt="xl" withBorder>
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
        )}
      </Container>
    </main>
  );
}
