import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Home/Header";
import { Section } from "../Home/section";
import "./player.scss"
function Player2(){
    const {item2_id} = useParams()
    const [item2, setItem2] = React.useState(null);
React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${item2_id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                return res.json();
            })
            .then((data) => {
                setItem2(data);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, [item2_id]);

    if (error) {
        return <div>Error: {error}</div>;
    }
    return(

        <div className="container">
        <Section className="salom"/>
        <Header />

         {item2 && (
                <div className="text2">
                    <img className="player2__img"
                        src={item2.url}
                        alt={item2.title}
                        width={1363}
                        height={700}
                    />
                    <h2 className="section2__title">11k views  ·  6 months ago</h2>
                </div>
            )}
        
        </div>
    )
}

export {Player2};