import {
  Box,
  Button,
  Divider,
  Grid,
  InputBase,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const TextFieldStyle = {
  width: 480,
  height: "34px",
  border: "1px solid #ccc",
};

const steps = ["Required Fields", "Optional Fields"];

const ModalProduct = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{}}>
      <Typography
        variant="h5"
        fontSize={18}
        fontWeight={600}
        sx={{
          border: "",

          p: "16px 0 28px 16px",
        }}
      >
        Add product
      </Typography>
      <Divider />

      <Box
        sx={{
          p: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            pt: 2,
          }}
        >
          If a product has already been traced, the changes will immediately be
          reflected in past orders. Thus, be careful to update the details
        </Typography>
        <Box
          sx={{
            border: "1px solid #ccc",
            mt: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xl={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "450px",
                }}
                bgcolor="#ccc"
              >
                <Stepper
                  activeStep={activeStep}
                  sx={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    pl: 2,
                  }}
                >
                  {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                      optional?: React.ReactNode;
                    } = {};

                    if (isStepSkipped(index)) {
                      stepProps.completed = false;
                    }
                    return (
                      <Step
                        key={label}
                        {...stepProps}
                        sx={{
                          pt: 4,
                        }}
                      >
                        <StepLabel {...labelProps}>{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
              </Box>
            </Grid>
            <Grid
              item
              xl={8}
              sx={{
                height: "450px",
                overflowY: "auto",
              }}
            >
              <Stack
                sx={{
                  pt: 2,
                }}
              >
                <Typography fontWeight={600}>
                  Please fill the required fields
                </Typography>
              </Stack>
              <Stack
                spacing={4}
                sx={{
                  pt: 4,
                }}
              >
                <Stack direction="row" spacing={12}>
                  <Stack direction="row">
                    <Typography color="error">*</Typography>
                    <Typography> Product Name</Typography>
                  </Stack>
                  <InputBase sx={TextFieldStyle} />
                </Stack>
                <Stack direction="row" spacing={10.5}>
                  <Stack direction="row">
                    <Typography color="error">*</Typography>
                    <Typography> Unit Cost (USD)</Typography>
                  </Stack>
                  <InputBase sx={TextFieldStyle} />
                </Stack>
                <Stack direction="row" spacing={16.5}>
                  <Stack direction="row">
                    <Typography color="error">*</Typography>
                    <Typography>Category</Typography>
                  </Stack>
                  <InputBase sx={TextFieldStyle} />
                </Stack>
                <Stack direction="row" spacing={12.5}>
                  <Stack direction="row">
                    <Typography color="error">*</Typography>
                    <Typography>Sub Category</Typography>
                  </Stack>
                  <InputBase sx={TextFieldStyle} />
                </Stack>
                <Stack direction="row" spacing={12}>
                  <Stack direction="row">
                    <Typography color="error">*</Typography>
                    <Typography> Product Name</Typography>
                  </Stack>
                  <InputBase sx={TextFieldStyle} />
                </Stack>
                <Stack direction="row" spacing={12}>
                  <Stack direction="row">
                    <Typography color="error">*</Typography>
                    <Typography> Product Name</Typography>
                  </Stack>
                  <InputBase sx={TextFieldStyle} />
                </Stack>
                <Stack direction="row" spacing={12}>
                  <Stack direction="row">
                    <Typography color="error">*</Typography>
                    <Typography> Product Name</Typography>
                  </Stack>
                  <InputBase sx={TextFieldStyle} />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ p: "4px 8px 12px 0px" }}>
        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          <Button
            variant="outlined"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Cancel
          </Button>
          <Button onClick={handleNext} variant="contained">
            Next
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ModalProduct;
