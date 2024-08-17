import css from "./Transactions.module.css";

export default function Transactions({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.label}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr
            className={`${css.data} ${index % 2 === 1 && css.darkBG}`}
            key={id}
          >
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
