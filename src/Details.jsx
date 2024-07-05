import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Details.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Details({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1545042679-41d22b2ca130?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://cdn.pixabay.com/photo/2018/02/28/22/50/tree-3189339_1280.jpg";
    const COLD_URL = "https://cdn.pixabay.com/photo/2016/01/08/06/13/woman-1127201_1280.jpg";
    const RAIN_URL = "https://cdn.pixabay.com/photo/2018/07/05/18/58/rain-3518956_1280.jpg";

    return (
        <div className="Details">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                                ? RAIN_URL
                                : info.temp > 15
                                    ? HOT_URL
                                    : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                info.humidity > 80
                                    ? <ThunderstormIcon />
                                    : info.temp > 15
                                        ? <WbSunnyIcon />
                                        : <AcUnitIcon />
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>
                                The weather can be described as <i>{info.weather}</i> and feels like{""} {info.feelslike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div >
    );
}