import { calculateRewards } from "./util";
export const Dashboard = ({ customerData }) => {
  return (
    <div>
      <table>
        <caption>All customer Reward point </caption>
        <thead>
          <tr>
            <th>name</th>
            <th>January</th>
            <th>Febuary</th>
            <th>March</th>
            <th>Total Rewards</th>
          </tr>
        </thead>
        <tbody style={{textAlign:'center'}}>
          {customerData?.map((item,idx) => {
            return (
              <tr key={`item-${item.amount}-${idx}`}>
                <td>{item.name}</td>
                {Object.values(item.amount).map((item,idx) => (
                  <td key={`item-${item}-${idx}`}>{ calculateRewards(item)}</td>
                ))}
               <td> {Object.values(item.amount).map((item) =>calculateRewards(item)).reduce((a, b) => a + b)}</td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
