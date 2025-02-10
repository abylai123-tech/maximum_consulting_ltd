import { useState } from "react";

const categories = ["Еда", "Транспорт", "Развлечения"];

function App() {
  const [date, setDate] = useState("");
  const [sum, setSum] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const transaction = {
      dateTime: new Date(date),
      author: "User1",
      sum: parseFloat(sum),
      category,
      comment,
    };

    const res = await fetch("http://localhost:3001/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    });

    if (res.ok) {
      alert("Расход добавлен!");
      setDate("");
      setSum("");
      setComment("");
    }
  };

  return (
    <div className="container">
      <h2>Добавить расход</h2>
      <form onSubmit={handleSubmit}>
        <label>Дата:</label>
        <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
        
        <label>Сумма:</label>
        <input type="number" value={sum} onChange={(e) => setSum(e.target.value)} required />
        
        <label>Категория:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        
        <label>Комментарий:</label>
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />

        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default App;