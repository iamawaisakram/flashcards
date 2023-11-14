import React from "react";
import Flashcard from "./components/atoms/flashcard";
import "./App.css";

const App: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mt-3 cursor-pointer hover:text-blue-500">
                Flashcards
            </h1>
            <Flashcard />
        </div>
    );
};

export default App;
