import React from "react";

function ListofPlayers() {
    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 82 },
        { name: "Shubman Gill", score: 67 },
        { name: "KL Rahul", score: 58 },
        { name: "Hardik Pandya", score: 74 },
        { name: "Ravindra Jadeja", score: 61 },
        { name: "R Ashwin", score: 77 },
        { name: "Mohammed Shami", score: 45 },
        { name: "Jasprit Bumrah", score: 80 },
        { name: "Surya Kumar Yadav", score: 90 },
        { name: "Rishabh Pant", score: 69 }
    ];

    const lowScorePlayers = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            <h3>All Players</h3>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

            <h3>Players with Score Below 70</h3>
            <ul>
                {lowScorePlayers.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;