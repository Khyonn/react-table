type PropName<Item> = Extract<keyof Item, string>;

export function genericRowMapper<Item>(
  keyPropName: PropName<Item>,
  ...displayedPropsNames: PropName<Item>[]
) {
  return (item: Item) => {
    return (
      <tr key={item[keyPropName] as unknown as React.Key}>
        {displayedPropsNames.map((propName) => (
          <td key={propName}>
            {typeof item[propName] === "function"
              ? (item[propName] as unknown as Function)()
              : item[propName]}
          </td>
        ))}
      </tr>
    );
  };
}

export const toValueLabel = <T extends string | number>(value: T) => ({
  value,
  label: value.toString(),
});
