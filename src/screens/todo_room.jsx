import { Container, Grid, Paper, Typography, Button } from "@mui/material"
import { TodoCard } from "../components/todo-room/todo_card";
import AddIcon from '@mui/icons-material/Add';

export const TodoRoom = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2} pt={4}>
          <Grid item xs={4}>
            <Paper sx={{ bgcolor: '#ccc', px: 2, py: 1,  }}>
              <Typography mb={1} variant={'h5'} color="#003366">To Do</Typography>
              {["aaa", "bbb"].map((item) => <TodoCard />)}
              <Button variant="text" size="large" sx={{ color: "#666" }}>
                <AddIcon />
                カードを追加
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper sx={{ bgcolor: '#ccc', px: 2, py: 1 }}>
              <Typography mb={1} variant={'h5'} color="#003366">Doing</Typography>
              {["aaa", "bbb", "ccc", "ddd", "aaaa", "bbbb"].map((item) => <TodoCard />)}
              <Button variant="text" size="large" sx={{ color: "#666" }}>
                <AddIcon />
                カードを追加
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper sx={{ bgcolor: '#ccc', px: 2, py: 1 }}>
              <Typography mb={1} variant={'h5'} color="#003366">Done</Typography>
              {["aaa", "bbb", "ccc"].map((item) => <TodoCard />)}
              <Button variant="text" size="large" sx={{ color: "#666" }}>
                <AddIcon />
                カードを追加
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}