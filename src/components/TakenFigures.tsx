import React, { FC } from "react";
import { Figure } from "../models/Figure";

interface TakenFiguresProps {
    title: string
    figures: Figure[]
}

const TakenFigures: FC<TakenFiguresProps> = ({ title, figures }) => {
    return (
        <div className="takenBox">
            <h3>{title} {figures.length}</h3>
            <div className="taken">
                {figures.map((figure) =>
                    <div key={figure.id}>
                        {figure.match && <img src={figure.match} alt="1" />}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TakenFigures;