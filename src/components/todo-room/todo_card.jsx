import { Card, CardContent, Typography, Chip, Grid, Avatar } from "@mui/material"
import MessageIcon from '@mui/icons-material/Message';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AvatarImage from '../../images/3.jpg'

const cardSx = {
  minWidth: 275, mb: 1.5,
  '&:hover': {
    opacity: [0.9, 0.8, 0.7],
    cursor: 'pointer'
  },
}

export const TodoCard = () => {
  return (
    <Card sx={cardSx}>
      <CardContent>
        <Grid container spacing={1} mb={1}>
          <Grid item>
            <Chip label="bug" color="error" size="small" />
          </Grid>
          <Grid item>
            <Chip label="invalid" color="warning" size="small" />
          </Grid>
        </Grid>
        
        <Typography fontSize={20}>
          well meaning and kindly. well meaning and kindly. well meaning and kindly.
        </Typography>

        <Grid container spacing={2} mt={1}>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <CalendarMonthIcon />
              </Grid>
              <Grid item>
                <Typography>5/22</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <MessageIcon />
              </Grid>
              <Grid item>
                <Typography>3</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Avatar alt="Cindy Baker" src={AvatarImage} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}