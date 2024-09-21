import {
    Container,
    Typography,
    Box,
    Grid,
    FormLabel,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio, Button
} from "@mui/material";
import {useState} from "react";

const TitleCase = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const Question = ({question, options, handleSubmit}) => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <Box sx={{
            padding: 2,
            width: '100%',
        }}

        >
            <Typography variant="h5" component="h2">
                {question || "No Question"}
            </Typography>
            <Grid container spacing={2} sx={{
                p: 2
            }}>
                <FormControl fullWidth>
                    <FormLabel id={`question-`}>Options</FormLabel>
                    <RadioGroup
                        name={"radio-buttons-group-question-"}
                        value={selectedOption}
                        onChange={(e) => {
                            setSelectedOption(e.target.value);
                        }}
                    >

                        <Grid container spacing={2} sx={{
                            p: 2,
                            width: '100%'
                        }}>
                    {
                        options.map((option, index) => (
                            <Grid item key={index} xs={12} md={6}>
                                <Box>
                                    <FormControlLabel value={option} control={<Radio/>} label={TitleCase(option)}  />
                                </Box>
                            </Grid>
                        ))
                    }</Grid>
                    </RadioGroup>
                </FormControl>
            </Grid>

            <Button variant={"outlined"} fullWidth onClick = {() => {handleSubmit(selectedOption)}}>Submit</Button>
        </Box>
    );
};

export default Question;