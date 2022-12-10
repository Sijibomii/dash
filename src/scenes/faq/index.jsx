import { Box, useTheme,Typography } from "@mui/material"
import Header from "../../components/Header"
import Accordion from "@mui/material/Accordion"
import { AccordionSummary } from "@mui/material"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme"


const FAQ = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nisi ea ad iste debitis, dolore culpa beatae tenetur ratione suscipit corrupti saepe ab aut sequi harum adipisci consequuntur ullam veniam natus omnis quia? Maiores totam accusamus architecto commodi est et
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nisi ea ad iste debitis, dolore culpa beatae tenetur ratione suscipit corrupti saepe ab aut sequi harum adipisci consequuntur ullam veniam natus omnis quia? Maiores totam accusamus architecto commodi est et
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nisi ea ad iste debitis, dolore culpa beatae tenetur ratione suscipit corrupti saepe ab aut sequi harum adipisci consequuntur ullam veniam natus omnis quia? Maiores totam accusamus architecto commodi est et
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nisi ea ad iste debitis, dolore culpa beatae tenetur ratione suscipit corrupti saepe ab aut sequi harum adipisci consequuntur ullam veniam natus omnis quia? Maiores totam accusamus architecto commodi est et
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nisi ea ad iste debitis, dolore culpa beatae tenetur ratione suscipit corrupti saepe ab aut sequi harum adipisci consequuntur ullam veniam natus omnis quia? Maiores totam accusamus architecto commodi est et
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nisi ea ad iste debitis, dolore culpa beatae tenetur ratione suscipit corrupti saepe ab aut sequi harum adipisci consequuntur ullam veniam natus omnis quia? Maiores totam accusamus architecto commodi est et
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nisi ea ad iste debitis, dolore culpa beatae tenetur ratione suscipit corrupti saepe ab aut sequi harum adipisci consequuntur ullam veniam natus omnis quia? Maiores totam accusamus architecto commodi est et
                    </Typography>
                </AccordionDetails>
            </Accordion>
        
        </Box>
    )
}


export default FAQ;

