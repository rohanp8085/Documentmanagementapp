import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const documentItem = ({document}) => {
  return (
   
        <Card sx={{ width:350 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image="https://img.freepik.com/premium-vector/documents-folder-with-stamp-text-contract-with-approval-stamp_349999-535.jpg"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {document.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {document.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" sx={{backgroundColor:"red", color:"white"}}>Delete</Button>
      <Button size="small" sx={{backgroundColor:"gold" , color:"white"}}>Edit</Button>
    </CardActions>
  </Card>
   
  )
}

export default documentItem
