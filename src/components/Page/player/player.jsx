import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Home/Header";
import { Section } from "../Home/section";
function Player() {
    const { item_id } = useParams();
    const [item, setItem] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${item_id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                return res.json();
            })
            .then((data) => {
                setItem(data);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, [item_id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="continer">
        <Header />
        <Section />
            {item && (
                <div className="text">
                    <img
                        src={item.url}
                        alt={item.title}
                    />
                    <h2>{item.title}</h2>
                </div>
            )}
        </div>
    );
}

export { Player };
