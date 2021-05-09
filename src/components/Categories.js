import "../styles/Categories.css";

function Categories({ filter, updateFilter, categorie }) {
    return (
        <div className="lmj-categories">
            <select
                value={filter}
                onChange={(e) => updateFilter(e.target.value)}
                className="lmj-categories-select"
            >
                <option value="">--Filtrer la recherche</option>
                {categorie.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button onClick={() => updateFilter("")}>Réinitialiser</button>
        </div>
    );
}
export default Categories;
