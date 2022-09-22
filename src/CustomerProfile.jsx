import React from "react";
import { calculateRewards } from "./util";
export const CustomerProfile = ({ customer }) => {
  return customer ? (
    <ul>
      <li>
        <strong>Customers name:</strong> {customer.name}
      </li>

      {Object.entries(customer.amount).map((item, idx) => {
        return (
          <React.Fragment key={`item-${item}-${idx}`}>
            <li>
              {item[0]} rewards point: {calculateRewards(item[1])}
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  ) : (
    <h1>No Record found</h1>
  );
};
