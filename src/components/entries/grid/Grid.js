/**
 * GRID COMPONENT
 * Default function takes bolean value 'isRows' to determine flow
 * Condition selects either row or column class for grid-item
 * Each grid-item evaluates isWrapped boolean to select class from sass module
 */

import grid from "./Grid.module.sass";

export default function Grid({ children, isRows, isWrapped = false }) {
  return (
    <>
      {isRows === true ? (
        <grid-item class={isWrapped ? [grid.row, grid.wrap] : grid.row}>
          {children}
        </grid-item>
      ) : (
        <grid-item class={isWrapped ? [grid.column, grid.wrap] : grid.column}>
          {children}
        </grid-item>
      )}
    </>
  );
}
